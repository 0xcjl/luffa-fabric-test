import { describe, expect, it } from "vitest";
import { buildServer } from "../src/api/server.js";
import { runQaChecks } from "../src/qa-runner/index.js";

describe("local QA runner", () => {
  it("keeps the HTTP runner disabled unless explicitly enabled", async () => {
    const previous = process.env.ENABLE_LAEL_QA_RUNNER;
    delete process.env.ENABLE_LAEL_QA_RUNNER;
    const { app } = await buildServer({ path: ":memory:" });

    const response = await app.inject({
      method: "POST",
      url: "/v2/qa/runs",
      payload: { command: "echo unsafe" },
    });

    expect(response.statusCode).toBe(403);
    expect(response.json()).toMatchObject({
      status: "disabled",
      message: "Local QA runner is disabled",
    });

    await app.close();
    if (previous === undefined) {
      delete process.env.ENABLE_LAEL_QA_RUNNER;
    } else {
      process.env.ENABLE_LAEL_QA_RUNNER = previous;
    }
  });

  it("runs only the fixed whitelist and returns itemized statuses", async () => {
    const seenCommands: string[] = [];
    const run = await runQaChecks({
      cwd: process.cwd(),
      executor: async (check) => {
        seenCommands.push(check.id);
        return {
          exitCode: check.id === "frontend-page-smoke" ? 1 : 0,
          output: `${check.label} output`,
        };
      },
    });

    expect(seenCommands).toEqual([
      "root-typecheck",
      "root-vitest",
      "varr-tests",
      "frontend-build",
      "api-smoke",
      "frontend-page-smoke",
    ]);
    expect(run.status).toBe("fail");
    expect(run.items).toHaveLength(6);
    expect(run.items[0]).toMatchObject({
      id: "root-typecheck",
      status: "pass",
      summary: "Root typecheck output",
    });
    expect(run.items[5]).toMatchObject({
      id: "frontend-page-smoke",
      status: "fail",
      summary: "Frontend page smoke test output",
    });
  });
});
