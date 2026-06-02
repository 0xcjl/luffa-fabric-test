import { describe, expect, it } from "vitest";
import {
  projectDocsIndex,
  projectDocsMaintenanceRule,
  projectDocsSections,
  projectDocsStatus,
} from "../src/frontend/app/project-docs-data.js";

describe("frontend Project Docs data", () => {
  it("keeps all required Project Docs sections visible", () => {
    const titles = projectDocsSections.map((section) => section.title);

    expect(titles).toEqual([
      "项目介绍",
      "设计思路",
      "系统架构",
      "运行流程",
      "模块说明",
      "操作步骤",
      "注意事项",
      "文档与测试报告索引",
    ]);
  });

  it("states the current version and the maintenance rule", () => {
    const statusText = projectDocsStatus.map((item) => `${item.label}: ${item.value}`).join("\n");

    expect(statusText).toContain("LAEL / Luffa Fabric MVP v0.3");
    expect(statusText).toContain("Unified Agent Runtime Fabric");
    expect(statusText).toContain("Off-chain Runtime + Multi-chain Value + AGT Governance");
    expect(projectDocsMaintenanceRule).toBe("后续所有文档变更必须同步到 Project Docs");
  });

  it("explains LAEL positioning, loop model, and AGT boundary", () => {
    const content = projectDocsSections
      .flatMap((section) => [section.title, section.summary, ...section.items])
      .join("\n");

    expect(content).toContain("Verifiable Adaptive Resource Runtime");
    expect(content).toContain("不是 chatbot、workflow builder、MCP wrapper、agent marketplace");
    expect(content).toContain("Identity -> Permission -> Execution -> Settlement -> Evidence -> Feedback -> Learning");
    expect(content).toContain("Microsoft AGT 是 Permission / Governance Extension 的可选治理积木");
    expect(content).toContain("AGT 不替代 Luffa DID、wallet signing、settlement");
    expect(content).toContain("Base、BNB、Solana、Endless / Luffa App");
    expect(content).toContain("Endless 优先通过 Luffa App / Endless SDK 支持");
    expect(content).toContain("Luffa App 独立二维码授权需要 App 端 QR session");
  });

  it("indexes the key docs and test reports shown in the frontend", () => {
    const indexText = projectDocsIndex.map((item) => `${item.file}: ${item.note}`).join("\n");

    expect(indexText).toContain("NEXT_SESSION_HANDOFF.md");
    expect(indexText).toContain("LAEL_REQUIREMENTS_v0.3.zh.md");
    expect(indexText).toContain("LAEL_MVP_v0.3.zh.md");
    expect(indexText).toContain("LAEL_TEST_PLAN_v0.3.zh.md");
    expect(indexText).toContain("LAEL_DOCS_TIMELINE_v0.3.zh.md");
    expect(indexText).toContain("LAEL_AGT_INTEGRATION_v0.3.zh.md");
    expect(indexText).toContain("LAEL_AGT_NEXT_STEP_EVALUATION_2026-06-02.zh.md");
    expect(indexText).toContain("LAEL_AGT_IMPLEMENTATION_PLAN_2026-06-02.zh.md");
    expect(indexText).toContain("LAEL_AGT_BROWSER_ACCEPTANCE_REPORT_2026-06-02.zh.md");
    expect(indexText).toContain("LAEL_MULTICHAIN_WALLET_SUPPORT_TEST_REPORT_2026-06-02.zh.md");
    expect(indexText).toContain("LAEL_PROJECT_ITERATION_HISTORY_2026-06-02.zh.md");
    expect(indexText).toContain("LAEL_COLLABORATION_HANDOFF_2026-06-02.zh.md");
  });
});
