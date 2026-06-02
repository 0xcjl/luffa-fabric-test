# LAEL / Luffa Fabric v0.3 Docs

This directory contains the LAEL / Luffa Fabric v0.3 requirement, MVP, test-plan, implementation-plan, and test-report package.

For a clear chronological reading order, start here:

- [Next Session Handoff](../NEXT_SESSION_HANDOFF.md)
- [LAEL / Luffa Fabric v0.3 文档与测试报告时间线](./LAEL_DOCS_TIMELINE_v0.3.zh.md)
- [Microsoft AGT 融入 Luffa Fabric 的总体评估与融合方案](./LAEL_AGT_INTEGRATION_v0.3.zh.md)

## Frontend Project Docs

The frontend `Project Docs` tab is the user-facing project documentation entry for demos, manual acceptance, and handoff. It summarizes the project positioning, architecture, execution loop, modules, operating steps, safety notes, document index, and test-report index.

Documentation maintenance rule: 后续所有文档变更必须同步到 Project Docs.

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
15. [项目迭代过程记录](./LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md)
16. [协作开发交接说明](./LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md)

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
| `LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md` | Project iteration history | v0.1/v0.2 to v0.3, frontend loop, AGT, multi-chain wallet, collaboration baseline |
| `LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md` | Collaboration handoff | GitHub branch, setup, validation, wallet boundaries, and collaboration rules |
| `NEXT_SESSION_HANDOFF.md` | Next session entrypoint | Root handoff prompt, current branch, required docs, validation commands, and maintenance rules |

The second report does not replace the first report. They represent two different validation stages.
