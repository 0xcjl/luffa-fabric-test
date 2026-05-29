# LAEL / Luffa Fabric v0.3 文档与测试报告时间线

> 目的：把 LAEL / Luffa Fabric v0.3 的需求、MVP、测试方案、实施计划和测试报告按时间先后整理清楚，便于 GitHub 阅读、审查和后续交接。  
> 当前分支：`codex/varr-api-route-fixes`  
> 更新范围：文档索引与报告映射，不改变业务代码。

## 1. 推荐阅读顺序

1. `LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md`
2. `LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md`
3. `LAEL_REQUIREMENTS_v0.3.zh.md` / `LAEL_REQUIREMENTS_v0.3.en.md`
4. `LAEL_MVP_v0.3.zh.md` / `LAEL_MVP_v0.3.en.md`
5. `LAEL_TEST_PLAN_v0.3.zh.md` / `LAEL_TEST_PLAN_v0.3.en.md`
6. `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md`
7. `LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md`
8. `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md`

## 2. 时间线总表

| 时间顺序 | 阶段 | 文档 | 对应测试文档 | 对应测试报告 | 备注 |
|---|---|---|---|---|---|
| 1 | 新框架梳理 | `LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md` | `LAEL_TEST_PLAN_v0.3.zh.md` | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | 定义链下执行、链上可验证、链上价值执行 |
| 2 | 文档与实施计划 | `LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md` | `LAEL_TEST_PLAN_v0.3.zh.md` | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | 规划 6 份备案文档和测试方案 |
| 3 | 完整需求 | `LAEL_REQUIREMENTS_v0.3.zh.md` / `LAEL_REQUIREMENTS_v0.3.en.md` | `LAEL_TEST_PLAN_v0.3.zh.md` / `LAEL_TEST_PLAN_v0.3.en.md` | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | 总体定位和双路径架构 |
| 4 | MVP 范围 | `LAEL_MVP_v0.3.zh.md` / `LAEL_MVP_v0.3.en.md` | `LAEL_TEST_PLAN_v0.3.zh.md` / `LAEL_TEST_PLAN_v0.3.en.md` | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | MVP 用户故事、验收范围 |
| 5 | 测试方案 | `LAEL_TEST_PLAN_v0.3.zh.md` / `LAEL_TEST_PLAN_v0.3.en.md` | 本文件即测试方案 | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | 第一阶段完整测试计划 |
| 6 | 第一轮测试结果 | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | `LAEL_TEST_PLAN_v0.3.zh.md` / `LAEL_TEST_PLAN_v0.3.en.md` | 本文件即测试报告 | 覆盖 v0.3 文档、API、VARR、swap、fiat proof |
| 7 | 前端闭环改进计划 | `LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md` | 前端闭环测试项写入该计划 | `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md` | 规划 Execution Loop Console 和测试面板 |
| 8 | 第二轮测试结果 | `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md` | `LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md` | 本文件即测试报告 | 覆盖前端闭环、QA Runner、浏览器验收 |

## 3. 文档分组说明

### 3.1 前置框架与实施计划

| 文档 | 说明 |
|---|---|
| `LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md` | 从“Payment Agent demo”升级到统一 Runtime Fabric MVP 的框架梳理。明确 Off-chain Agent Execution 与 On-chain Value Execution 两条 lane。 |
| `LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md` | 规划 6 份备案文档、README / QUICKSTART 更新、功能补齐、测试补齐和最终验收。 |

### 3.2 六份 v0.3 备案文档

| 文档 | 说明 |
|---|---|
| `LAEL_REQUIREMENTS_v0.3.zh.md` | 中文完整需求文档，定义 LAEL / Luffa Fabric 总体定位、架构和双路径能力。 |
| `LAEL_REQUIREMENTS_v0.3.en.md` | 英文完整需求文档。 |
| `LAEL_MVP_v0.3.zh.md` | 中文 MVP 文档，定义当前阶段范围、用户故事和验收标准。 |
| `LAEL_MVP_v0.3.en.md` | 英文 MVP 文档。 |
| `LAEL_TEST_PLAN_v0.3.zh.md` | 中文测试方案，定义自动化测试、人工测试和演示验收路径。 |
| `LAEL_TEST_PLAN_v0.3.en.md` | 英文测试方案。 |

### 3.3 测试报告

| 测试报告 | 对应阶段 | 说明 |
|---|---|---|
| `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` | v0.3 文档与基础功能落地后第一轮测试 | 覆盖 6 份备案文档、root tests、VARR tests、frontend build、swap proposal、invoice proof settlement 等。 |
| `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md` | 前端闭环与测试面板改进后第二轮测试 | 覆盖 Execution Loop Console、Identity Mapping、Automated Tests、Manual Tests、Evidence、Learning、QA Runner 和浏览器验收。 |

> 注意：第二份前端测试报告不替代第一份 v0.3 测试报告。两者分别对应不同阶段，必须同时保留。

## 4. 对应关系说明

### 4.1 新框架梳理对应的测试

`LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md` 提出的核心框架是：

- Off-chain Agent Execution
- On-chain Value Execution
- DID mapping
- Permission
- Execution receipt
- Settlement record
- Trace / evidence digest
- Learning signal

对应测试计划：

- `LAEL_TEST_PLAN_v0.3.zh.md`
- `LAEL_TEST_PLAN_v0.3.en.md`

对应测试报告：

- `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md`

### 4.2 六份备案文档对应的测试

6 份备案文档共同定义 LAEL / Luffa Fabric v0.3 的需求、MVP 和测试方案。

对应测试报告：

- `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md`

该报告验证：

- 文档存在性与关键内容。
- Root TypeScript check。
- Root vitest。
- VARR tests。
- Frontend build。
- API smoke。
- simulated swap。
- fiat / invoice proof settlement。

### 4.3 前端闭环改进计划对应的测试

`LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md` 对应第二阶段前端体验改进。

对应测试报告：

- `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md`

该报告验证：

- Execution Loop Console。
- Mapping DID / Agent ID / External Agent ID / Wallet Address。
- Off-chain 与 On-chain 两条分支。
- Automated Tests 面板。
- Manual Tests 面板。
- Evidence 敏感分级和披露建议。
- Learning 内容、建议、优先级和边界。
- QA Runner 全量白名单检查。
- 浏览器人工验收。

## 5. 当前 GitHub 文档包状态

截至本时间线文档创建时，`docs/` 应包含：

| 类型 | 文件 |
|---|---|
| 索引 | `README.md` |
| 时间线 | `LAEL_DOCS_TIMELINE_v0.3.zh.md` |
| 前置框架 | `LAEL_MVP_NEW_FRAMEWORK_OVERVIEW_2026-05-28.zh.md` |
| 实施计划 | `LAEL_FRAMEWORK_DOCS_IMPLEMENTATION_PLAN_2026-05-28.zh.md` |
| v0.3 备案文档 | `LAEL_REQUIREMENTS_v0.3.zh.md`, `LAEL_REQUIREMENTS_v0.3.en.md`, `LAEL_MVP_v0.3.zh.md`, `LAEL_MVP_v0.3.en.md`, `LAEL_TEST_PLAN_v0.3.zh.md`, `LAEL_TEST_PLAN_v0.3.en.md` |
| 第一轮测试报告 | `LAEL_TEST_REPORT_v0.3_2026-05-28.zh.md` |
| 前端闭环计划 | `LAEL_FRONTEND_LOOP_IMPROVEMENT_PLAN_2026-05-29.zh.md` |
| 第二轮测试报告 | `LAEL_FRONTEND_LOOP_TEST_REPORT_2026-05-29.zh.md` |

## 6. 后续维护规则

- 新增需求文档时，必须在本时间线中补一行。
- 新增测试报告时，必须明确它对应哪一份计划或测试方案。
- 不要用后一份测试报告覆盖前一份测试报告。
- 中英文备案文档可以成对维护，但测试报告优先使用中文主版本。
- 若未来创建 GitHub Release，可以把本时间线作为 release notes 的文档索引入口。
