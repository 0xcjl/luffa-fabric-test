# LAEL / Luffa Fabric v0.3 Docs

This directory contains the LAEL / Luffa Fabric v0.3 requirement, MVP, test-plan, implementation-plan, and test-report package.

For a clear chronological reading order, start here:

- [Next Session Handoff](../NEXT_SESSION_HANDOFF.md)
- [LAEL / Luffa Fabric v0.3 文档与测试报告时间线](./LAEL_DOCS_TIMELINE_v0.3.zh.md)
- [Microsoft AGT 融入 Luffa Fabric 的总体评估与融合方案](./LAEL_AGT_INTEGRATION_v0.3.zh.md)

## Frontend Project Docs

The frontend `Project Docs` tab is the user-facing project documentation entry for demos, manual acceptance, and handoff. It summarizes the project positioning, architecture, execution loop, modules, operating steps, safety notes, document index, and test-report index.

Documentation maintenance rule: 后续所有文档变更必须同步到 Project Docs.

## Luffa App Public Callback / Cloudflare Tunnel

Real Luffa App QR / WebView authorization requires a public HTTPS callback. In local development, prefer the named Cloudflare Tunnel host `https://lael.clawworld.eu.cc` over ephemeral quick tunnels. The named tunnel should run with `protocol: http2` in `/Users/xyz/.cloudflared/lael-luffa-app-dev.yml` because local QUIC routing has shown intermittent timeouts. Start the API on `127.0.0.1:3000`, expose it with Cloudflare Tunnel or an equivalent HTTPS tunnel, then restart the API with:

```bash
LAEL_PUBLIC_CALLBACK_BASE_URL=https://lael.clawworld.eu.cc node dist/index.js
```

Rules:

- `LAEL_PUBLIC_CALLBACK_BASE_URL` must be an absolute HTTPS URL reachable from the Luffa App device.
- If it is missing, Endless QR sessions are `callbackLocalOnly=true` and count only as protocol/dev validation.
- Cloudflare quick tunnels are ephemeral and have repeatedly caused 530 / repeated App authorization prompts in local P0/P1 testing. Use the named tunnel `lael-luffa-app-dev` and `lael.clawworld.eu.cc` for real App acceptance whenever possible.
- If the phone shows Cloudflare 1033/530, the public callback is not acceptable for App acceptance; restart the tunnel/API and generate a fresh QR.
- Old QR sessions become invalid after API restart or tunnel URL changes; do not reuse old screenshots or QR codes for App acceptance.
- The `/scan` page is single-session guarded: after a signed callback is submitted, repeated WebView reloads show the submitted status instead of triggering another Luffa App signing prompt.
- Real App acceptance requires `callbackLocalOnly=false`, `callbackSource=qr_scan_callback` or `webview_bridge`, and `signatureVerified=true`.
- Before every real Luffa App scan, run `npm run health:luffa-app`. The check verifies local API, local frontend, public callback runtime config, repeated public HTTPS probes, and a temporary QR `/scan` page. If it fails, do not scan; restart Cloudflare Tunnel / API and generate a fresh QR.
- June 15 parser retest: with API, frontend, and `https://lael.clawworld.eu.cc` all online, the phone App still rejected JSON QR, `luffa-endless-auth:v1` compatible JSON, and minimal `protocol=luffa-endless-auth` key=value login QR as invalid. The minimal login session stayed `waiting` and `/debug` had no events, so the blocker is the App-side QR parser/schema before any network callback. Do not repeat scans until the App-accepted QR schema or deep link format is confirmed.

## Endless Web Wallet Execution

P0 Luffa App QR remains the native authorization protocol path. For P1/P2 real Endless chain execution, the browser lane now prefers the official Endless Web Wallet SDK so testnet/mainnet txHash validation does not depend on repeated phone WebView scans.

Rules:

- Frontend dependency: `@endlesslab/endless-web3-sdk`.
- Browser wallet path: `EndlessJsSdk.connect()` -> `signMessage()` for DID binding -> `signAndSubmitTransaction()` for real value execution.
- Endless transfer payload must use a real Endless address, `AccountAddress.fromBs58String(recipient)`, `BigInt(amount * 1e8)`, ABI parameters `address` / `u128`, and explicit wallet transaction options `maxGasAmount` / `gasUnitPrice` / `expireTimestamp`.
- The Task Reward validation recipient is Alice's fixed Endless address `6XtEwYbTZ7PPNnFogtg6crSwXc8S8P53TqWEaSBassxw`; connecting a sender wallet must not silently turn the reward into a self-transfer.
- The frontend explicitly opens the Endless Web Wallet modal before `connect()` or `signAndSubmitTransaction()` so wallet authorization is visible instead of staying in a hidden iframe.
- Before requesting wallet confirmation, the frontend checks the sender account's EDS balance with `getAccountEDSAmount` and blocks the request if balance is below the reward amount plus gas budget. This is a preflight only; it does not replace the real wallet confirmation or txHash.
- June 15 mainnet follow-up: after the user explicitly allowed a small Endless Mainnet EDS test, the local API gate was opened with `LAEL_ENABLE_MAINNET_EXECUTION=true` and `LAEL_MAINNET_MAX_AMOUNT_ETH=0.001`. The active Chrome wallet account is `EYWRWEnLGxgpYVVQd2Tq74iMtHUYSas4qKG3SzrpkZr2`; after the user recharged it, direct Endless Mainnet SDK balance query returned `10 EDS`. The 0.001 EDS Task Reward completed through Endless Web Wallet with real txHash `G1eVEi3JxrmPuoEjdXc1hLNuwqB9TscAVQzxo6vG5iid`, receipt `exec_00e02bbd-dc7a-467f-bb1e-4fcb4464e21e`, settlement `completed`, feedback submitted, and learning updated.
- Chain receipt verification: `/v2/settlement/tx/:txHash?chainType=endless&chainId=220` must use Endless Mainnet RPC, not the default Endless Testnet adapter. The June 15 txHash resolves to `status=SUCCESS`, `blockNumber=188036997`, sender `EYWRWEnLGxgpYVVQd2Tq74iMtHUYSas4qKG3SzrpkZr2`, recipient `6XtEwYbTZ7PPNnFogtg6crSwXc8S8P53TqWEaSBassxw`, payload amount `100000` base units, and `vm_status=Executed successfully`.
- Receipt `walletType=endless-web-wallet` and `executionMode=real` means a real Web Wallet txHash was returned. `walletType=luffa` and `executionMode=app-authorized` means the Luffa App QR/WebView path returned the authorization / tx evidence.
- Luffa App bridge failures such as empty `rawData`, `errorMsg=1006/1009`, or `GeneralError.invalidParameter` should be treated as App bridge payload compatibility issues, not Cloudflare callback issues, once login and signed callback verification are already passing.
- Luffa App QR parser failures such as “invalid QR” with no `/scan` or callback event should be treated as a separate App QR schema compatibility issue, not a bridge transaction failure.

## Recommended Reading Order

1. [Next Session Handoff](../NEXT_SESSION_HANDOFF.md)
2. [MVP 新框架梳理：链下执行，链上可验证，链上价值执行](./LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md)
3. [新框架文档与实施计划](./LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md)
4. [完整需求文档 zh](./LAEL_REQUIREMENTS_v0.3.zh.md) / [en](./LAEL_REQUIREMENTS_v0.3.en.md)
5. [MVP 文档 zh](./LAEL_MVP_v0.3.zh.md) / [en](./LAEL_MVP_v0.3.en.md)
6. [测试方案 zh](./LAEL_TEST_PLAN_v0.3.zh.md) / [en](./LAEL_TEST_PLAN_v0.3.en.md)
7. [第一轮测试报告：v0.3 文档与基础功能](./LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md)
8. [前端闭环与测试面板改进计划](./LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md)
9. [第二轮测试报告：前端闭环与 QA Runner](./LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md)
10. [Microsoft AGT 融合评估与 Adapter PoC](./LAEL_AGT_INTEGRATION_v0.3.zh.md)
11. [Microsoft AGT 下一步接入评估](./LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md)
12. [Microsoft AGT 未来阶段落地规划](./LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md)
13. [Microsoft AGT 浏览器人工验收截图报告](./LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md)
14. [Multi-chain Wallet Support Test Report](./LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md)
15. [Base Sepolia / Mainnet Guard / Endless QR 验收报告](./LAEL_BASE_SEPOLIA_ACCEPTANCE_REPORT_2026-06-04.zh.md)
16. [MVP 验收矩阵：6 月 15 交付目标](./LAEL_MVP_ACCEPTANCE_MATRIX_2026-06-04.zh.md)
17. [Wallet Integration Demo Script](./LAEL_WALLET_INTEGRATION_DEMO_SCRIPT_2026-06-04.zh.md)
18. [Real-environment Test Report](./LAEL_REAL_ENVIRONMENT_TEST_REPORT_2026-06-04.zh.md)
19. [Internal Technical One-pager](./LAEL_INTERNAL_TECHNICAL_ONE_PAGER_2026-06-06.zh.md)
20. [本会话开发、验证与测试报告](./LAEL_SESSION_DEV_VERIFICATION_REPORT_2026-06-09.zh.md)
21. [P0/P1/P2 Native App / Wallet / Reward Verification Report](./LAEL_P0_P1_P2_NATIVE_APP_REWARD_VERIFICATION_REPORT_2026-06-12.zh.md)
22. [Endless Web Wallet Session Report](./LAEL_ENDLESS_WEB_WALLET_SESSION_REPORT_2026-06-15.zh.md)
23. [本会话完整测试与验证报告](./LAEL_SESSION_FULL_TEST_AND_VERIFICATION_REPORT_2026-06-15.zh.md)
24. [项目迭代过程记录](./LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md)
25. [协作开发交接说明](./LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md)

## Report Mapping

| Report | Corresponding Plan / Test Plan | Scope |
|---|---|---|
| `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | `LAEL_TEST_PLAN_v0.3.zh.md` / `LAEL_TEST_PLAN_v0.3.en.md` | v0.3 docs, API, VARR, simulated swap, fiat proof settlement |
| `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md` | `LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md` | Execution Loop Console, QA Runner, Evidence / Learning UI, browser acceptance |
| `LAEL_AGT_INTEGRATION_v0.3.zh.md` | Microsoft AGT Adapter PoC tests | Governance Extension, AGT decision record, off-chain runtime guard |
| `LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md` | Follow-up AGT implementation planning | AGT sidecar, MCP gateway, fork gate, browser acceptance |
| `LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md` | Future-stage AGT landing plan | Current MVP keeps Adapter PoC only; sidecar, MCP gateway, and fork gate are future-stage work |
| `LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md` | Browser manual acceptance | Execution Loop Console, Runtime Agent, AGT evidence, Learning UI screenshots |
| `LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md` | Multi-chain wallet support landing plan | BNB Testnet, Solana Devnet, Endless Testnet / Luffa App, OKX support boundary, Luffa App QR next-stage plan |
| `LAEL_BASE_SEPOLIA_ACCEPTANCE_REPORT_2026-06-04.zh.md` | Base Sepolia / Mainnet Guard / Endless QR acceptance | Repeatable Base Sepolia manual path, Base Mainnet env + risk confirmation guard, Endless QR session / callback / polling protocol |
| `LAEL_MVP_ACCEPTANCE_MATRIX_2026-06-04.zh.md` | June 15 delivery acceptance matrix | Full MVP testing, wallet integration demo, real-environment report, internal one-pager, optional 3-5 minute video |
| `LAEL_WALLET_INTEGRATION_DEMO_SCRIPT_2026-06-04.zh.md` | Wallet integration demo script | 3-5 minute demo flow covering Base Sepolia txHash, receipt, feedback/learning, mainnet guard, and Endless QR protocol |
| `LAEL_REAL_ENVIRONMENT_TEST_REPORT_2026-06-04.zh.md` | Real-environment test report | Base Sepolia real txHash, completed receipt / feedback screenshots, BaseScan evidence, mainnet guard, Endless QR protocol-level screenshots |
| `LAEL_INTERNAL_TECHNICAL_ONE_PAGER_2026-06-06.zh.md` | Internal technical one-pager | One-page internal technical summary covering runtime fabric positioning, verified MVP capabilities, evidence, safety boundaries, risks, and next steps |
| `LAEL_SESSION_DEV_VERIFICATION_REPORT_2026-06-09.zh.md` | Session development / verification report | Current session development, manual evidence, service status, validation record, and paused HyperFrames voiceover refresh handoff |
| `LAEL_P0_P1_P2_NATIVE_APP_REWARD_VERIFICATION_REPORT_2026-06-12.zh.md` | P0/P1/P2 native app / wallet / reward verification | luffa-endless-auth:v1, signed Luffa App QR / WebView callback, Base/BNB/Solana/Endless manual evidence targets, and Task Reward business scenario |
| `LAEL_ENDLESS_WEB_WALLET_SESSION_REPORT_2026-06-15.zh.md` | Endless Web Wallet session verification | Records the June 15 Endless Web Wallet path, wallet binding/publicKey fix, Task Reward 0.001 EDS proposal, mainnet 0.001 EDS follow-up, active-wallet balance preflight, real txHash, receipt, feedback, and learning |
| `LAEL_SESSION_FULL_TEST_AND_VERIFICATION_REPORT_2026-06-15.zh.md` | Full session test and verification report | Consolidates this session's P0/P1/P2 manual tests, automated validation, GitHub publishing result, service checks, and unfinished items including the Endless Web Wallet txHash blocker |
| `LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md` | Project iteration history | v0.1/v0.2 to v0.3, frontend loop, AGT, multi-chain wallet, collaboration baseline |
| `LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md` | Collaboration handoff | GitHub branch, setup, validation, wallet boundaries, and collaboration rules |
| `NEXT_SESSION_HANDOFF.md` | Next session entrypoint | Root handoff prompt, current branch, required docs, validation commands, and maintenance rules |

The second report does not replace the first report. They represent two different validation stages.
