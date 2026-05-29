# LAEL / Luffa Fabric 测试方案 v0.3

## 测试目标

验证 Unified Agent Runtime Fabric MVP 的四组路径：

| 组 | 自动化测试 | 人工测试 |
| --- | --- | --- |
| Off-chain Runtime | VARR runtime、capability、context、approval、receipt、learning tests | OpenClaw/Codex Stub 执行 summary，查看 receipt/learning |
| On-chain Transfer | wallet、payment-agent、settlement、ledger tests | Base Sepolia ETH 小额转账，查看 txHash/receipt |
| On-chain Trading/Swap | simulated swap intent、permission、risk block tests | 输入 swap 请求，确认只生成 proposal，不真实交易 |
| Fiat / Proof Settlement | fiat-proof / invoice-proof record tests | 创建 proof receipt，确认没有真实支付动作 |

## 自动化测试命令

### 根项目类型检查

```bash
./node_modules/.bin/tsc -p tsconfig.json --noEmit
```

验收：退出码为 0。

### 根项目测试

```bash
./node_modules/.bin/vitest run --config vitest.config.ts
```

验收：所有测试文件通过，包括 docs、payment-agent、settlement、wallet、ledger、安全测试。

### VARR 测试

```bash
node --experimental-strip-types --test varr-mvp1/tests/**/*.test.ts
```

验收：runtime、capability、context、approval、receipt、feedback、learning signal、安全路径全部通过。

### 前端构建

```bash
cd src/frontend
NEXT_PUBLIC_LAEL_API_URL=http://127.0.0.1:3000 npm run build
```

验收：Next.js build 成功；可接受当前 WalletConnect/pino optional warning，但不能有类型错误或构建失败。

### 前端/后端 smoke test

```bash
curl -sS -I http://127.0.0.1:3001/
curl -sS http://127.0.0.1:3000/v2/payment-agent/memory/did:luffa:user_001
```

验收：页面返回 200，API 返回 JSON。

## 人工验收路径

### A. Off-chain Runtime

1. 打开 MVP 页面。
2. 进入 Runtime Agent tab。
3. 选择 OpenClaw/Codex Stub。
4. 运行 public community summary。
5. 查看 Agent DID mapping。
6. 查看 permission decision。
7. 查看 Execution Receipt。
8. 提交 feedback。
9. 查看 learning signal。

失败路径：

- private context。
- cross namespace context。
- missing capability。
- high-risk publish。
- forbidden action。

### B. On-chain Transfer

1. 打开 MVP 页面。
2. 进入 On-chain Value Agent tab。
3. 连接钱包并切到 Base Sepolia。
4. 选择 ETH。
5. 输入 `帮我转 0.0001 ETH 给 Alice`。
6. Generate Proposal。
7. Sign Wallet Tx。
8. Approve & Record。
9. 查看 txHash、settlement record、Execution Receipt。
10. Submit Feedback。
11. 输入 second prompt，验证 memory 补全但不绕过确认。

失败路径：

- amount over limit。
- recipient not allowlisted。
- wrong chain。
- prompt injection / confirmation bypass。
- duplicate transfer。

### C. On-chain Trading/Swap

1. 进入 On-chain Value Agent tab。
2. 输入 `Swap 0.0001 ETH to USDC on Base Sepolia`。
3. 生成 simulated swap proposal。
4. 确认 permission decision。
5. 执行 simulated receipt。
6. 验证没有真实 DEX 交易、没有钱包签名请求。

失败路径：

- asset denied。
- chain denied。
- amount exceeds limit。
- slippage exceeds limit。
- confirmation bypass。

### D. Fiat / Proof Settlement

1. 进入 Evidence / Learning tab。
2. 创建 fiat-proof 或 invoice-proof。
3. 输入 amount、currency、reference、purpose。
4. 生成 proof settlement record。
5. 查看 receipt/proof hash。
6. 确认没有真实 Stripe、银行、on/off-ramp 调用。

## 最终报告要求

最终验收后输出测试摘要：

- 自动化测试命令与结果。
- 人工测试路径与结果。
- 未覆盖风险。
- 当前已知限制。
- 后续建议。
