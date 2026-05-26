# Quickstart

Run the full local demo:

```bash
pnpm demo
```

Use Node.js 24 LTS for local verification. The repository includes `.nvmrc`
files so version managers and CI use the same runtime.

If Corepack cannot launch the pinned package manager on your local Node runtime, run the same commands through `npx`:

```bash
npx pnpm@11.1.3 demo
```

Expected end state:

```text
Execution status: success
Receipt generated: receipt_001
Feedback accepted: yes
Learning signal emitted: yes
Private key exposure: no
Context boundary respected: yes
```

State is stored in `.lael/state.json` for CLI demos.

Run the same trusted execution loop through the HTTP API:

```bash
pnpm demo:api
```

Start the API with in-memory state:

```bash
pnpm api
```

For restart persistence during local API testing, point `LAEL_STATE_FILE` at a
snapshot file:

```bash
LAEL_STATE_FILE=.lael/api-state.json pnpm api
```
