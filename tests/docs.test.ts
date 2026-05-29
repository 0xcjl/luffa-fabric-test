import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const docs = [
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
];

describe("LAEL v0.3 documentation", () => {
  it.each(docs)("keeps $path as a complete备案 document", ({ path, phrases }) => {
    const content = readFileSync(path, "utf8");

    for (const phrase of phrases) {
      expect(content).toContain(phrase);
    }
  });
});
