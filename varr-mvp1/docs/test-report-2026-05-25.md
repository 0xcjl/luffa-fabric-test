# VARR MVP1 Local Test Report - 2026-05-25

## Scope

This report covers the local VARR MVP1 trusted execution loop only. It does not cover real wallet signing, RPC credentials, testnet funds, on-chain settlement, or Luffa production integration.

Repository tested:

- Local path: `/Users/xyz/Documents/luffa-fabric`
- Base commit: `2e38704`
- Fork target: `0xcjl/luffa-fabric-test`

## Findings

The CLI runtime path was already healthy: the demo registered the community summary agent, granted capability, created context and workflow resources, generated `receipt_001`, accepted feedback, and emitted `learn_001`.

The HTTP API had a route dispatch mismatch. OpenAPI and the SDK advertised standard paths such as `POST /v1/agents` and `POST /v1/execution/run`, but the server only reached handlers when an extra path segment was present, for example `/v1/agents/_`. This made the documented API fail with `not_found`.

The 404 response was also too sparse for developer debugging because it only returned `{"error":"not_found"}` without the method or path.

## Fixes

- Aligned API dispatch with the documented OpenAPI and SDK paths.
- Added route-level API integration coverage for the full VARR HTTP loop.
- Added API negative tests for missing capability, cross-namespace context access, critical actions, high-risk approval gating, and invalid receipt feedback.
- Added method and path diagnostics to 404 responses.
- Documented the `npx pnpm@11.1.3` fallback for local environments where Corepack cannot launch the pinned pnpm version.

## Verification

Commands used:

```bash
rtk npx pnpm@11.1.3 test
rtk npx pnpm@11.1.3 demo
cd ..
rtk npx pnpm@11.1.3 test
```

Additional manual API smoke target:

```text
GET  /openapi.json
POST /v1/agents
POST /v1/capabilities
POST /v1/contexts
POST /v1/workflows
POST /v1/execution/run
GET  /v1/execution/receipts/receipt_001
POST /v1/feedback
GET  /v1/learning/signals?receipt_id=receipt_001
```

Expected key outputs:

- VARR tests: 22 passed
- Execution receipt: `receipt_001`
- Execution status: `success`
- Feedback accepted: `true`
- Learning signal: `learn_001`
- High-risk publish path: `pending_approval`
- Critical action path: `denied`

Root Core Fabric extension check:

- Test files: 7 passed
- Tests: 74 passed
- Note: `better-sqlite3@11.10.0` is optional and failed to build from source on Node `v26.0.0` after no prebuilt binary was found. Existing Core Fabric tests still passed because the verified paths did not require that optional native module.

## Remaining Recommendations

- Add CI coverage for the VARR API integration tests so OpenAPI and route handlers cannot drift again.
- Add a scripted API demo command, for example `pnpm demo:api`, so external testers do not need to hand-write curl requests.
- Decide whether MVP1 API state should remain memory-only or expose an opt-in SQLite repository for restart persistence tests.
- Test root Core Fabric separately for wallet binding, mock settlement adapters, MCP server behavior, and frontend demo compatibility.
