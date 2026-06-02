# NEXT SESSION HANDOFF

更新时间：2026-06-02

## 用途

这是 LAEL / Luffa Fabric 新会话继续开发的固定入口。新会话开始时，先读本文件，再按这里的提示读取 `docs/` 中的完整文档。

后续每次重要迭代提交前，必须更新本文件的当前状态、验证结果、下一步建议和相关文档链接。

## 项目信息

| 项 | 内容 |
|---|---|
| 本地仓库 | `/Users/xyz/Documents/luffa-fabric` |
| GitHub fork | `https://github.com/0xcjl/luffa-fabric-test` |
| 当前分支 | `codex/varr-api-route-fixes` |
| Upstream | `https://github.com/Michael-Luffa/luffa-fabric` |
| 已推送基线 commit | `99ac4a43aaf3b05941725f5856c280a2a7ff3614` |
| 当前版本 | LAEL / Luffa Fabric MVP v0.3 |

新会话中请用 `git rev-parse HEAD` 和 `git status --short --branch` 核对当前本地状态；不要只依赖上表中的 commit。

## 当前项目定位

LAEL / Luffa Fabric 是面向 Agentic Economy 的 Verifiable Adaptive Resource Runtime。当前 MVP 不是单一 Payment Agent demo，而是统一 Agent Runtime Fabric。

统一闭环：

```text
Identity -> Permission -> Execution -> Settlement -> Evidence -> Feedback -> Learning
```

当前两条执行 lane：

- Off-chain Agent Runtime：OpenClaw、Codex、Claude Code、API Agent 等链下执行。
- On-chain Value Runtime：transfer、swap proposal、settlement、payment、claim、reward 等价值动作。

## 新会话启动提示词

可以直接把下面这段复制给新会话：

```text
我们继续开发 LAEL / Luffa Fabric 项目。

本地仓库：
/Users/xyz/Documents/luffa-fabric

GitHub fork：
https://github.com/0xcjl/luffa-fabric-test

当前协作分支：
codex/varr-api-route-fixes

请先不要直接改代码。先阅读并理解：
1. NEXT_SESSION_HANDOFF.md
2. docs/README.md
3. docs/LAEL_DOCS_TIMELINE_v0.3.zh.md
4. docs/LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md
5. docs/LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md
6. docs/LAEL_MVP_v0.3.zh.md
7. docs/LAEL_TEST_PLAN_v0.3.zh.md
8. docs/LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md

当前项目定位：
LAEL / Luffa Fabric 是统一 Agent Runtime Fabric，包含 Off-chain Runtime、On-chain Value、Identity、Permission、Execution、Settlement、Evidence、Feedback、Learning 闭环。

开发前请先检查：
- git status --short --branch
- git rev-parse HEAD
- 当前分支是否为 codex/varr-api-route-fixes
- docs/README.md、NEXT_SESSION_HANDOFF.md 和前端 Project Docs 是否是最新项目文档入口

协作规则：
- 不要直接推 upstream。
- 新需求、测试报告、系统说明必须同步更新 docs/README、docs/LAEL_DOCS_TIMELINE_v0.3.zh.md、docs/LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md、NEXT_SESSION_HANDOFF.md 和前端 Project Docs。
- 主网真实价值执行默认禁用。
- WalletConnect / Project ID 当前不作为 MVP 能力展示。
- Microsoft AGT 是 Governance Extension 的可选积木，不替代 Luffa DID、wallet signing、settlement、receipt 或 learning。

我接下来要继续做的具体任务是：
【填写下一步任务】
```

## 必读文档

1. `docs/README.md`
2. `docs/LAEL_DOCS_TIMELINE_v0.3.zh.md`
3. `docs/LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md`
4. `docs/LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md`
5. `docs/LAEL_REQUIREMENTS_v0.3.zh.md`
6. `docs/LAEL_MVP_v0.3.zh.md`
7. `docs/LAEL_TEST_PLAN_v0.3.zh.md`
8. `docs/LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md`
9. `docs/LAEL_AGT_INTEGRATION_v0.3.zh.md`
10. `docs/LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md`

## 当前能力摘要

- Execution Loop Console：展示 Mapping DID、Agent Binding、Intent、Permission、Execution、Settlement / Evidence、Feedback、Learning。
- Project Docs：前端项目文档入口，说明定位、架构、流程、模块、操作、注意事项和文档索引。
- Microsoft AGT Adapter PoC：作为 Governance Extension 的可选治理积木。
- 多链钱包：Base、BNB、Solana、Endless 的主网和测试网展示。
- 钱包入口：MetaMask / OKX Wallet、Phantom / Solana Wallet、Luffa App / Endless SDK。
- QA Runner：本地白名单自动化测试入口。
- Evidence / Learning：展示 receipt、trace digest、sensitivity、learning item、policy suggestion。

## 安全边界

- 主网真实价值执行默认禁用；主网只做连接、proposal、permission 展示。
- WalletConnect / Project ID 当前不作为 MVP 能力展示。
- Microsoft AGT 不替代 Luffa DID、wallet signing、settlement、receipt 或 learning。
- Learning 不自动提高额度。
- Learning 不自动加入新收款人。
- Learning 不绕过人工确认。
- Learning 不自动导出训练数据。
- Endless / Luffa App 独立二维码授权需要 App 端 QR session / callback / polling 协议，属于下一阶段。

## 标准验证命令

```bash
./node_modules/.bin/tsc -p tsconfig.json --noEmit
./node_modules/.bin/vitest run --config vitest.config.ts
node --experimental-strip-types --test varr-mvp1/tests/**/*.test.ts
cd src/frontend && NEXT_PUBLIC_LAEL_API_URL=http://127.0.0.1:3000 npm run build
```

## 当前验证状态

最近一次完整验证：

- TypeScript root check：通过。
- Root vitest：17 files / 129 tests 通过。
- VARR tests：31 tests 通过。
- Frontend build：通过。

新会话继续开发前，如涉及代码或文档测试，请重新运行相关验证，不要只依赖本记录。

## 下一步建议

优先候选：

1. 拆分 `src/frontend/app/page.tsx`，降低前端主页面复杂度。
2. 完善 MetaMask / OKX / Phantom 连接状态和网络切换提示。
3. 设计 Endless / Luffa App QR session / callback / polling 协议。
4. 推进 AGT sidecar / MCP Security Gateway 的下一阶段 PoC。
5. 补浏览器截图验收报告，并同步到 `docs/assets/`。

## 维护规则

- 后续每次重要迭代提交前，必须更新本文件。
- 如果新增需求文档、测试计划、测试报告、截图报告或系统说明，必须同时更新：
  - `NEXT_SESSION_HANDOFF.md`
  - `docs/README.md`
  - `docs/LAEL_DOCS_TIMELINE_v0.3.zh.md`
  - `docs/LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md`
  - 前端 `Project Docs`
- 本文件保持短交接入口，不替代完整需求、MVP、测试计划和测试报告。
