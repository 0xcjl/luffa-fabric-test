# Quickstart

Run the full local demo:

```bash
pnpm demo
```

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
