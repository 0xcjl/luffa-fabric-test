export type ProjectDocSection = {
  title: string;
  summary: string;
  items: string[];
};

export type ProjectDocIndexItem = {
  type: string;
  file: string;
  note: string;
};

export const projectDocsMaintenanceRule = "后续所有文档变更必须同步到 Project Docs";

export const projectDocsStatus = [
  { label: "Current Version", value: "LAEL / Luffa Fabric MVP v0.3" },
  { label: "Runtime Model", value: "Unified Agent Runtime Fabric" },
  { label: "Current Demo", value: "Off-chain Runtime + Multi-chain Value + AGT Governance" },
  { label: "Last Updated", value: "2026-06-02" },
  { label: "Documentation Rule", value: projectDocsMaintenanceRule },
] as const;

export const projectDocsSections: ProjectDocSection[] = [
  {
    title: "项目介绍",
    summary: "LAEL / Luffa Fabric 是面向 Agentic Economy 的可信执行基础设施。",
    items: [
      "LAEL / Luffa Fabric 的核心定位是 Verifiable Adaptive Resource Runtime。",
      "它不是 chatbot、workflow builder、MCP wrapper、agent marketplace。",
      "它关注谁在执行、是否有权执行、执行是否可控、结果是否可验证、价值如何计量结算、责任如何追溯、系统如何学习。",
      "它既服务 Luffa 内部 Agentic Runtime，也允许外部 AI Agent、社区、应用和服务接入。",
    ],
  },
  {
    title: "设计思路",
    summary: "系统按积木式架构组织，每个能力都可以作为治理闭环中的组件接入。",
    items: [
      "统一闭环是 Identity -> Permission -> Execution -> Settlement -> Evidence -> Feedback -> Learning。",
      "所有 Agent、Skill、Policy、Context、Settlement 和 Evidence 都应能被组合和追踪。",
      "Off-chain Agent Runtime 负责 OpenClaw、Codex、Claude Code、API Agent 等链下执行。",
      "On-chain Value Runtime 负责 transfer、swap proposal、settlement、payment、claim、reward 等链上价值动作。",
      "当前多链支持同时展示测试网和主网：Base、BNB、Solana、Endless / Luffa App；主网真实执行在 MVP 中默认禁用。",
      "两条路径都必须回到 Mapping DID / Luffa DID 作为统一锚点。",
    ],
  },
  {
    title: "系统架构",
    summary: "当前 MVP 采用统一 Runtime Fabric，加上可插拔 Extension。",
    items: [
      "Identity Extension：维护 Mapping DID / Luffa DID、Agent ID、External Agent ID、Wallet Address 的绑定关系。",
      "Permission / Governance Extension：执行 Luffa Native Policy、Microsoft AGT Adapter、Wallet Permission Guard、MCP Tool Permission Guard。",
      "Execution Extension：承载 Off-chain Runtime Adapter、AGT runtime guard、On-chain Value Executor。",
      "Settlement Extension：记录 crypto settlement、fiat proof、invoice proof、resource credit、API cost、on/off-ramp intent。",
      "Evidence Extension：生成 Luffa Execution Receipt、Trace Digest、AGT Decision Record 映射和可选链上 attestation。",
      "Learning / Reputation Layer：沉淀反馈、偏好、策略建议、训练样本和 Agent score。",
      "Microsoft AGT 是 Permission / Governance Extension 的可选治理积木，不是 Luffa Fabric 的核心协议替代品。",
    ],
  },
  {
    title: "运行流程",
    summary: "不同 lane 的执行细节不同，但都必须产出 permission、evidence、learning。",
    items: [
      "Off-chain Agent summary：Mapping DID -> Agent Binding -> Context Boundary -> Permission / AGT Guard -> Runtime Adapter -> Trace Digest -> Receipt -> Learning。",
      "On-chain transfer：Mapping DID -> Wallet Binding -> Transfer Intent -> Permission Decision -> Human Confirmation -> Wallet Signature -> txHash -> Settlement Record -> Receipt -> Feedback -> Learning。",
      "BNB transfer：走 EVM wallet lane，可通过 MetaMask / OKX Wallet 添加 BNB Testnet 并返回 txHash。",
      "Solana transfer：走 Phantom / Solana Wallet，使用 public key 绑定 DID，并把 devnet signature 写入 receipt。",
      "Endless / Luffa App transfer：走 Endless Wallet Standard / Luffa SDK，使用 connect、signMessage、signAndSubmitTransaction 完成 App 授权。",
      "Simulated swap：Intent -> Permission Decision -> Human Confirmation -> Simulated Swap Receipt，不接真实 DEX。",
      "Fiat / invoice proof：Proof Input -> Settlement Proof Record -> Evidence Classification -> Receipt，不触发真实法币支付。",
      "AGT governance decision：Tool Call / Intent -> Luffa Native Policy -> Optional AGT Adapter / Sidecar -> Decision Record -> Luffa Receipt Metadata。",
    ],
  },
  {
    title: "模块说明",
    summary: "前端每个区域对应一个 MVP 验收能力。",
    items: [
      "Runtime Agent：演示链下 Agent summary/report，生成 off-chain receipt、trace digest、learning signal 和 AGT decision record。",
      "On-chain Value Agent：演示 Base Sepolia ETH/USDC transfer、wallet confirmation、txHash receipt 和 simulated swap proposal。",
      "Wallet Menu：在右上角弹窗集中展示 Base、BNB、Solana、Endless / Luffa App 的主网/测试网连接方式和支持边界。",
      "Evidence / Learning：集中展示 settlement proof、evidence sensitivity、disclosure suggestion、learning item 和 policy suggestion。",
      "Automated Tests：通过本地 QA Runner 启动白名单自动化检查，不接受任意命令。",
      "Manual Tests：按顺序提供人工验收步骤，并显示 pass、waiting、fail、blocked、simulated 等状态。",
      "QA Runner：仅本机开发验收使用，默认需要 ENABLE_LAEL_QA_RUNNER=true 才能运行。",
      "AGT Adapter / AGT Sidecar / MCP Governance Wrapper：用于治理链下 tool call、MCP action、policy decision 和 decision record 映射。",
    ],
  },
  {
    title: "操作步骤",
    summary: "按页面从上到下执行即可完成主要验收路径。",
    items: [
      "运行 Runtime Agent：进入 Runtime Agent，点击 Run Summary，查看 Runtime Receipt、AGT Decision、Trace Digest 和 Learning。",
      "生成 transfer proposal：进入 On-chain Value Agent，选择 ETH 或 USDC，填写转账请求，点击 Generate Transfer Proposal。",
      "执行链上 transfer：确认 Base Sepolia、绑定钱包、签名交易，再点击 Approve & Record 记录 txHash 和 receipt。",
      "执行 BNB transfer：点击右上角 Connect Wallet，选择 BNB Testnet，必要时点击 Add BNB Testnet to OKX，绑定 EVM 钱包，签名后记录 txHash。",
      "执行 Solana transfer：点击右上角 Connect Wallet，选择 Solana Devnet，打开 Phantom / Solana Wallet，绑定 public key，签名后记录 signature。",
      "执行 Endless transfer：选择 Endless Testnet / Luffa App，使用 Luffa App SDK connect / signMessage / signAndSubmitTransaction；拒绝授权也会生成失败证据。",
      "执行 simulated swap：输入 swap 请求，点击 Generate Swap，再点击 Simulate Receipt，确认没有真实 DEX 交易。",
      "创建 invoice proof：进入 Evidence / Learning，填写 proof reference，点击 Create Proof Record。",
      "查看 evidence / learning：在页面下方 Evidence 和 Learning 面板查看上链状态、敏感等级、披露建议、学习内容和优先级。",
      "运行自动化测试：在 Automated Tests 点击 Run Full Automated Checks，查看每项状态、耗时和摘要。",
      "进行人工测试：在 Manual Tests 按 Step 顺序点击 Run Step，并根据结果 Mark Pass 或 Mark Fail。",
    ],
  },
  {
    title: "注意事项",
    summary: "MVP 的学习和治理能力必须受边界约束。",
    items: [
      "Learning 不自动提高额度。",
      "Learning 不自动加入新收款人。",
      "Learning 不绕过人工确认。",
      "Learning 不自动导出训练数据。",
      "AGT 不替代 Luffa DID、wallet signing、settlement。",
      "当前真实链上执行仍以测试网 / devnet 为主；主网可连接和生成 proposal，但真实签名执行默认禁用。",
      "Base / BNB 属于 EVM lane，可以通过 MetaMask / OKX Wallet 支持；Endless 不按 EVM add-network 处理。",
      "Endless 优先通过 Luffa App / Endless SDK 支持；OKX Endless 原生支持需要 OKX 公开 Endless provider 或支持 Endless Wallet Standard。",
      "Luffa App 独立二维码授权需要 App 端 QR session、callback 或 polling 协议，当前记录为下一阶段落地规划。",
      "swap / fiat proof 当前是模拟路径或证明记录路径，不接真实 DEX、Stripe、银行或 on/off-ramp provider。",
      "raw input、wallet address、private context、feedback comment 默认不建议公开披露。",
    ],
  },
  {
    title: "文档与测试报告索引",
    summary: "仓库 docs/ 是长期备案源，前端 Project Docs 是面向演示和验收的阅读入口。",
    items: [
      "需求文档、MVP 文档、测试方案、测试报告、AGT 评估和浏览器验收报告都应在 docs/ 中保留。",
      "第一轮测试报告和第二轮前端闭环测试报告不能互相覆盖。",
      "AGT 评估、实施计划和浏览器验收截图报告需要单独标明阶段和结论。",
      "Project Docs 只说明 Evidence / Learning 的模块含义，不显示 live execution evidence、learning、测试面板或 JSON 状态。",
      projectDocsMaintenanceRule,
    ],
  },
];

export const projectDocsIndex: ProjectDocIndexItem[] = [
  {
    type: "Requirements",
    file: "LAEL_REQUIREMENTS_v0.3.zh.md / LAEL_REQUIREMENTS_v0.3.en.md",
    note: "定义 LAEL / Luffa Fabric 总体定位、五层闭环、双路径能力和 Governance Extension。",
  },
  {
    type: "MVP",
    file: "LAEL_MVP_v0.3.zh.md / LAEL_MVP_v0.3.en.md",
    note: "定义 Unified Agent Runtime Fabric MVP 的范围、场景、用户故事和验收边界。",
  },
  {
    type: "Test Plan",
    file: "LAEL_TEST_PLAN_v0.3.zh.md / LAEL_TEST_PLAN_v0.3.en.md",
    note: "定义 Off-chain Runtime、On-chain Transfer、Swap、Fiat Proof、Governance / AGT Adapter 的测试方式。",
  },
  {
    type: "Timeline",
    file: "LAEL_DOCS_TIMELINE_v0.3.zh.md",
    note: "按时间顺序索引需求、计划、测试方案、测试报告和 AGT 文档。",
  },
  {
    type: "AGT Integration",
    file: "LAEL_AGT_INTEGRATION_v0.3.zh.md",
    note: "说明 Microsoft AGT 是 Governance Extension 的可选积木，并记录 Adapter PoC 定位。",
  },
  {
    type: "AGT Evaluation",
    file: "LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md",
    note: "单独评估真实 AGT runtime / policy engine、fork、MCP Security Gateway 和浏览器报告。",
  },
  {
    type: "AGT Plan",
    file: "LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md",
    note: "未来阶段落地规划；当前 MVP 只保留 Adapter PoC、前端展示和 evidence mapping。",
  },
  {
    type: "Browser Acceptance",
    file: "LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md",
    note: "记录 AGT 前端展示和浏览器人工验收截图。",
  },
  {
    type: "Multi-chain Wallet",
    file: "LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md",
    note: "记录 Base、BNB、Solana、Endless 的主网/测试网支持、MetaMask / OKX / Phantom 钱包入口和 Luffa App QR 下一阶段规划。",
  },
  {
    type: "Iteration History",
    file: "LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md",
    note: "记录项目从 v0.1/v0.2 Payment Agent demo 演进到 v0.3 Runtime Fabric、AGT、多链钱包和协作基线的过程。",
  },
  {
    type: "Collaboration Handoff",
    file: "LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md",
    note: "给协作同事说明 GitHub 分支、运行方式、验证命令、钱包边界和协作规则。",
  },
];
