import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const docs = [
  {
    path: "docs/README.md",
    phrases: [
      "LAEL_DOCS_TIMELINE_v0.3.zh.md",
      "LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md",
      "LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md",
    ],
  },
  {
    path: "docs/LAEL_DOCS_TIMELINE_v0.3.zh.md",
    phrases: [
      "LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md",
      "LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md",
      "LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md",
      "LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md",
      "LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md",
      "第二份前端测试报告不替代第一份 v0.3 测试报告",
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
    phrases: ["Verifiable Adaptive Resource Runtime", "链下执行", "链上价值执行"],
  },
  {
    path: "docs/LAEL_REQUIREMENTS_v0.3.en.md",
    phrases: ["Verifiable Adaptive Resource Runtime", "Off-chain Agent Execution", "On-chain Value Execution"],
  },
  {
    path: "docs/LAEL_MVP_v0.3.zh.md",
    phrases: ["Unified Agent Runtime Fabric MVP", "OpenClaw/Codex Stub", "Base Sepolia ETH/USDC"],
  },
  {
    path: "docs/LAEL_MVP_v0.3.en.md",
    phrases: ["Unified Agent Runtime Fabric MVP", "OpenClaw/Codex Stub", "Base Sepolia ETH/USDC"],
  },
  {
    path: "docs/LAEL_TEST_PLAN_v0.3.zh.md",
    phrases: ["Off-chain Runtime", "On-chain Transfer", "Fiat / Proof Settlement"],
  },
  {
    path: "docs/LAEL_TEST_PLAN_v0.3.en.md",
    phrases: ["Off-chain Runtime", "On-chain Transfer", "Fiat / Proof Settlement"],
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
];

describe("LAEL v0.3 documentation", () => {
  it.each(docs)("keeps $path as a complete备案 document", ({ path, phrases }) => {
    const content = readFileSync(path, "utf8");

    for (const phrase of phrases) {
      expect(content).toContain(phrase);
    }
  });
});
