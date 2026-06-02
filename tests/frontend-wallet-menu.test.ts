import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const page = readFileSync("src/frontend/app/page.tsx", "utf8");
const providers = readFileSync("src/frontend/app/providers.tsx", "utf8");
const envExample = readFileSync("src/frontend/.env.local.example", "utf8");

describe("frontend wallet menu", () => {
  it("shows common wallet names without WalletConnect or Project ID copy", () => {
    expect(page).toContain("MetaMask / OKX Wallet");
    expect(page).toContain("Use MetaMask / OKX");
    expect(page).toContain("Phantom / Solana Wallet");
    expect(page).toContain("Use Phantom / Solana");
    expect(page).not.toContain("WalletConnect");
    expect(page).not.toContain("Project ID");
    expect(envExample).not.toContain("WalletConnect");
    expect(envExample).not.toContain("Project ID");
    expect(providers).not.toContain("walletConnect");
  });

  it("lists mainnet and testnet lanes and protects mainnet execution", () => {
    for (const chainKey of [
      "BASE_SEPOLIA",
      "BASE_MAINNET",
      "BNB_TESTNET",
      "BNB_MAINNET",
      "SOLANA_DEVNET",
      "SOLANA_MAINNET",
      "ENDLESS_TESTNET",
      "ENDLESS_MAINNET",
    ]) {
      expect(page).toContain(chainKey);
    }

    expect(page).toContain("Mainnet execution disabled in MVP");
  });

  it("handles Solana selection and Endless bridge absence without runtime overlay errors", () => {
    expect(page).toContain("useWalletModal");
    expect(page).toContain("setSolanaWalletModalVisible(true)");
    expect(page).toContain("Requires Luffa App WebView / QR protocol");
    expect(page).toContain("Endless / Luffa App bridge not detected");
  });
});
