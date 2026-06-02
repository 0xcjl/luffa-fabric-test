# LAEL / Luffa Fabric 项目迭代过程记录

日期：2026-06-02

## 目的

这份文档记录 LAEL / Luffa Fabric 当前 MVP 从早期 Payment Agent demo 演进到统一 Runtime Fabric 的过程，帮助协作同事理解为什么项目会形成现在的架构、功能边界和测试方式。

后续每次重要迭代都需要更新本文件，并同步更新：

- `docs/README.md`
- `docs/LAEL_DOCS_TIMELINE_v0.3.zh.md`
- 前端 `Project Docs`

## 迭代总览

| 阶段 | 时间 | 核心主题 | 主要变化 | 关键文档 / 报告 |
|---|---|---|---|---|
| v0.1 / v0.2 对齐 | 2026-05-28 前后 | Agent-Permission-Wallet-Learning Loop | 从基础 wallet / policy / settlement / learning 能力收敛到 Payment Agent 转账闭环 | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` |
| v0.3 新框架 | 2026-05-28 | 链下执行，链上可验证，链上价值执行 | 明确 Off-chain Runtime 和 On-chain Value 双路径，但仍是统一 MVP | `LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md` |
| v0.3 备案文档 | 2026-05-28 | 完整需求 / MVP / 测试方案 | 产出中英文 6 份备案文档，定义 LAEL 统一定位 | `LAEL_REQUIREMENTS_v0.3.*`, `LAEL_MVP_v0.3.*`, `LAEL_TEST_PLAN_v0.3.*` |
| 前端闭环控制台 | 2026-05-29 | Execution Loop Console | 用一条闭环线路展示 Identity、Permission、Execution、Settlement/Evidence、Feedback、Learning | `LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md` |
| 测试面板 | 2026-05-29 | Automated Tests / Manual Tests | 自动化测试和人工测试拆成独立板块，状态更清楚 | `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md` |
| Project Docs | 2026-06-02 | 前端项目文档入口 | 新增前端 `Project Docs` tab，把定位、架构、流程、操作和文档索引放到页面内 | `project-docs-data.ts`, `tests/project-docs.test.ts` |
| Microsoft AGT 融合 | 2026-06-02 | Governance Extension | AGT 被定位为 Permission / Governance Extension 的可选治理积木，不替代 Luffa 核心协议 | `LAEL_AGT_INTEGRATION_v0.3.zh.md` |
| AGT 下一阶段规划 | 2026-06-02 | Sidecar / MCP Gateway / fork gate | 当前 MVP 只保留 Adapter PoC；真实 AGT runtime、MCP Security Gateway、fork 改造进入未来阶段 | `LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md`, `LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md` |
| 多链钱包支持 | 2026-06-02 | Base / BNB / Solana / Endless | 增加主网和测试网展示，支持 MetaMask / OKX、Phantom、Luffa App / Endless SDK 入口 | `LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md` |
| 协作交接 | 2026-06-02 | 同事协作基线 | 形成 GitHub 分支、文档入口、运行方式、验证命令和协作边界说明 | `LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md` |
| 下一会话交接 | 2026-06-02 | 新会话固定入口 | 新增根目录 `NEXT_SESSION_HANDOFF.md`，用于后续在新 Codex 会话中快速恢复项目上下文 | `NEXT_SESSION_HANDOFF.md` |

## 阶段说明

### 1. v0.1 / v0.2：Payment Agent 闭环

最早的 MVP 重点是把 wallet binding、permission、settlement、ledger、feedback、learning 串成一个可演示闭环。主场景是 Payment Agent 在 Base Sepolia 上辅助用户完成小额转账。

这个阶段的价值是证明：

- Agent 可以解析自然语言转账意图。
- Permission 可以输出用户可理解的 decision card。
- 钱包签名和 txHash 可以进入 receipt。
- Feedback 可以进入 learning。

主要限制：

- 容易被理解成单一 Payment Agent demo。
- 链下 Agent runtime、fiat proof、swap proposal、AGT governance 等能力没有统一表达。

### 2. v0.3：统一 Runtime Fabric

随后项目重新对齐为：

```text
Identity -> Permission -> Execution -> Settlement -> Evidence -> Feedback -> Learning
```

并明确两条 lane：

- Off-chain Agent Runtime：OpenClaw、Codex、Claude Code、API Agent 等链下执行。
- On-chain Value Runtime：transfer、swap proposal、settlement、payment、claim、reward 等价值动作。

这个阶段的关键决策：

- MVP 不拆成两个产品。
- 链下和链上都回到 Mapping DID / Luffa DID。
- 所有关键动作都需要 permission、evidence、receipt、learning。
- 链上可验证不等于所有内容都上链；可以是 private log、verifiable digest、optional on-chain attestation。

### 3. 前端 Execution Loop Console

为了让测试和演示不再割裂，前端从分散 tab 变成 Execution Loop Console。

核心变化：

- 顶部展示 Mapping DID / Agent ID / External Agent ID / Wallet Address。
- 闭环线路展示每个步骤的状态。
- Off-chain 和 On-chain 两条分支在同一个闭环下展示。
- Automated Tests 和 Manual Tests 分开。
- Evidence / Learning 从 JSON 变成可读卡片。

### 4. Project Docs

由于项目文档越来越多，前端新增 `Project Docs`，作为非技术用户和协作同事的入口。

当前 Project Docs 包含：

- 项目介绍。
- 设计思路。
- 系统架构。
- 运行流程。
- 模块说明。
- 操作步骤。
- 注意事项。
- 文档与测试报告索引。

维护规则：

> 后续所有文档变更必须同步到 Project Docs。

### 5. Microsoft AGT 融合

参考 Microsoft Agent Governance Toolkit 后，项目没有把 AGT 作为核心替代方案，而是定位为：

> Luffa Fabric Permission / Governance Extension Layer 里的一个外接治理积木。

当前 MVP 落地：

- MicrosoftAgtAdapter 概念接口。
- Governance decision record。
- AGT decision 映射到 Luffa receipt metadata。
- Evidence / Learning 展示 AGT 结果。

未来阶段：

- 真实 AGT policy engine sidecar。
- MCP Security Gateway。
- fork AGT 并适配 Luffa DID、wallet/value action、A2A delegation、settlement metadata。

### 6. 多链钱包支持

多链阶段增加了：

- Base Sepolia / Base Mainnet。
- BNB Testnet / BNB Mainnet。
- Solana Devnet / Solana Mainnet。
- Endless Testnet / Endless Mainnet。

钱包入口调整为：

- EVM：MetaMask / OKX Wallet。
- Solana：Phantom / Solana Wallet。
- Endless：Luffa App / Endless SDK。

重要边界：

- 主网可选择、可连接、可生成 proposal。
- 主网真实签名执行默认禁用。
- WalletConnect / Project ID 不作为当前 MVP 能力展示。
- Endless 不按 EVM add-network 处理。
- Luffa App 独立扫码授权需要 App 端 QR session / callback / polling 协议，进入下一阶段。

### 7. 下一会话交接入口

为了避免长上下文影响后续开发，项目新增根目录 `NEXT_SESSION_HANDOFF.md`。

它的作用：

- 作为新会话第一入口，而不是完整 PRD。
- 提供可复制的新会话启动提示词。
- 汇总本地路径、GitHub fork、当前分支、已推送基线 commit。
- 指向必读文档、当前能力、安全边界和验证命令。
- 明确后续每次重要迭代提交前都必须更新本文件。

该文档与以下文件配合使用：

- `docs/README.md`：完整文档入口。
- `docs/LAEL_DOCS_TIMELINE_v0.3.zh.md`：时间线和报告映射。
- `docs/LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md`：协作开发交接。
- 前端 `Project Docs`：面向演示和验收的项目说明。

## 当前架构结论

当前 LAEL / Luffa Fabric 的 MVP 不是单一转账产品，而是统一的 Agent Runtime Fabric：

```text
Mapping DID / Luffa DID
-> Agent / Wallet Binding
-> Intent / Request
-> Permission / Governance
-> Execution Lane
-> Settlement / Evidence
-> Feedback
-> Learning
```

所有扩展，包括 AGT、多链钱包、链下 Agent、swap proposal、fiat proof，都应作为这个闭环中的可组合模块接入。

## 当前协作重点

后续协作建议优先围绕：

1. 前端组件拆分和交互 polish。
2. MetaMask / OKX / Phantom 连接状态细化。
3. Endless / Luffa App WebView 与 QR 授权协议。
4. AGT sidecar / MCP Security Gateway 的下一阶段 PoC。
5. 浏览器截图验收报告。
6. Project Docs 与 docs/ 时间线持续同步。
7. `NEXT_SESSION_HANDOFF.md` 持续维护，保证新会话可以快速恢复上下文。

## 后续更新规则

每次重要迭代需要补充：

| 字段 | 说明 |
|---|---|
| 日期 | 迭代发生日期 |
| 主题 | 本次改动的核心方向 |
| 背景 | 为什么要做这次迭代 |
| 实现 | 改了哪些代码和文档 |
| 测试 | 通过了哪些自动化 / 人工测试 |
| 边界 | 哪些内容仍是下一阶段 |
| 文档 | 新增或更新了哪些文档 |

如果本次迭代影响新会话上下文，还必须更新 `NEXT_SESSION_HANDOFF.md`。

本文件是项目演进记录，不替代需求文档、MVP 文档和测试报告。
