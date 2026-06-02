import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const docs = [
  {
    path: "docs/README.md",
    phrases: [
      "NEXT_SESSION_HANDOFF.md",
      "LAEL_DOCS_TIMELINE_v0.3.zh.md",
      "LAEL_AGT_INTEGRATION_v0.3.zh.md",
      "LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md",
      "LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md",
      "LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md",
      "LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md",
      "LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md",
      "LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md",
      "Microsoft AGT 未来阶段落地规划",
      "LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md",
      "LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md",
      "Project Docs",
      "后续所有文档变更必须同步到 Project Docs",
    ],
  },
  {
    path: "docs/LAEL_DOCS_TIMELINE_v0.3.zh.md",
    phrases: [
      "NEXT_SESSION_HANDOFF.md",
      "LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md",
      "LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md",
      "LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md",
      "LAEL_AGT_INTEGRATION_v0.3.zh.md",
      "LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md",
      "LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md",
      "LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md",
      "LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md",
      "LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md",
      "LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md",
      "下一会话交接入口",
      "Microsoft AGT 未来阶段落地规划",
      "当前 MVP 只保留 Adapter PoC、前端展示和 evidence mapping",
      "LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md",
      "LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md",
      "第二份前端测试报告不替代第一份 v0.3 测试报告",
      "后续所有文档变更必须同步到 Project Docs",
    ],
  },
  {
    path: "docs/LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md",
    phrases: ["链下执行，链上可验证，链上价值执行", "Off-chain Agent Execution", "On-chain Value Execution"],
  },
  {
    path: "docs/LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md",
    phrases: ["新框架文档与实施计划", "LAEL_REQUIREMENTS_v0.3.zh.md", "LAEL_TEST_PLAN_v0.3.en.md"],
  },
  {
    path: "docs/LAEL_REQUIREMENTS_v0.3.zh.md",
    phrases: ["Verifiable Adaptive Resource Runtime", "链下执行", "链上价值执行", "Microsoft AGT Adapter"],
  },
  {
    path: "docs/LAEL_REQUIREMENTS_v0.3.en.md",
    phrases: ["Verifiable Adaptive Resource Runtime", "Off-chain Agent Execution", "On-chain Value Execution", "Microsoft AGT Adapter"],
  },
  {
    path: "docs/LAEL_MVP_v0.3.zh.md",
    phrases: ["Unified Agent Runtime Fabric MVP", "OpenClaw/Codex Stub", "Base Sepolia ETH/USDC", "Governance source", "多链钱包支持"],
  },
  {
    path: "docs/LAEL_MVP_v0.3.en.md",
    phrases: ["Unified Agent Runtime Fabric MVP", "OpenClaw/Codex Stub", "Base Sepolia ETH/USDC", "Governance source", "Multi-chain Wallet Support"],
  },
  {
    path: "docs/LAEL_TEST_PLAN_v0.3.zh.md",
    phrases: ["Off-chain Runtime", "On-chain Transfer", "Fiat / Proof Settlement", "Governance / AGT Adapter", "多链钱包支持测试补充"],
  },
  {
    path: "docs/LAEL_TEST_PLAN_v0.3.en.md",
    phrases: ["Off-chain Runtime", "On-chain Transfer", "Fiat / Proof Settlement", "Governance / AGT Adapter", "Multi-chain Wallet Support Test Addendum"],
  },
  {
    path: "docs/LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md",
    phrases: ["最终测试结果摘要", "10 个测试文件通过", "31 个测试通过"],
  },
  {
    path: "docs/LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md",
    phrases: ["前端闭环与测试面板改进计划", "Run Full Automated Checks", "LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md"],
  },
  {
    path: "docs/LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md",
    phrases: ["前端闭环与测试面板改进测试报告", "QA Runner", "LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md"],
  },
  {
    path: "docs/LAEL_AGT_INTEGRATION_v0.3.zh.md",
    phrases: ["Microsoft AGT", "Governance Extension", "MicrosoftAgtAdapter", "AGT 不替代 Luffa DID"],
  },
  {
    path: "docs/LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md",
    phrases: ["AGT Policy Engine Sidecar Spike", "MCP Security Gateway", "暂不 fork"],
  },
  {
    path: "docs/LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md",
    phrases: ["未来阶段落地规划", "当前 MVP 决策", "当前 MVP 阶段不要求落地", "AGT sidecar client", "MCP governance wrapper"],
  },
  {
    path: "docs/LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md",
    phrases: ["浏览器人工验收通过", "Microsoft AGT Adapter", "03-runtime-receipt-agt.png"],
  },
  {
    path: "docs/LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md",
    phrases: ["Multi-chain Wallet Support Test Report", "BNB Mainnet", "Solana Devnet / Mainnet", "Endless Testnet / Mainnet", "Luffa App QR"],
  },
  {
    path: "docs/LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md",
    phrases: ["项目迭代过程记录", "v0.1 / v0.2", "统一 Runtime Fabric", "Microsoft AGT 融合", "多链钱包支持", "NEXT_SESSION_HANDOFF.md"],
  },
  {
    path: "docs/LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md",
    phrases: ["协作开发交接说明", "codex/varr-api-route-fixes", "验证命令", "钱包和网络边界", "协作规则"],
  },
  {
    path: "NEXT_SESSION_HANDOFF.md",
    phrases: [
      "NEXT SESSION HANDOFF",
      "https://github.com/0xcjl/luffa-fabric-test",
      "codex/varr-api-route-fixes",
      "docs/README.md",
      "docs/LAEL_DOCS_TIMELINE_v0.3.zh.md",
      "docs/LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md",
      "./node_modules/.bin/tsc -p tsconfig.json --noEmit",
      "后续每次重要迭代提交前，必须更新本文件",
    ],
  },
];

describe("LAEL v0.3 documentation", () => {
  it.each(docs)("keeps $path as a complete备案 document", ({ path, phrases }) => {
    const content = readFileSync(path, "utf8");

    for (const phrase of phrases) {
      expect(content).toContain(phrase);
    }
  });
});
