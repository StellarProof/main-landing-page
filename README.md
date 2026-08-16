
# StellarProof

> Reusable identity infrastructure for the Stellar ecosystem, being built so you verify once and get accepted at every anchor.

**Website:** [stellarproof.org](https://stellarproof.org)

---

## What is StellarProof?

StellarProof is B2B reusable-KYC infrastructure for the Stellar ecosystem. It is designed to let a user verify their identity once and have that verification recognized by every participating anchor — without re-submitting documents, re-uploading selfies, or repeating KYC flows.

The Stellar ecosystem has 100+ anchors (Coins.ph, Vibrant, Bitso, etc.), each running its own independent KYC stack. A user who wants to use three anchors uploads the same passport three times, waits three times, and each anchor pays $1–3 in duplicate verification costs. **60–80% of users abandon KYC before completing it** — not because they don't want to use the product, but because they've done it before and don't want to do it again.

StellarProof fixes this.

---

## How It Works

StellarProof is being built so that it never holds your identity data. The plan: your KYC provider will verify you once and issue a credential directly to your own wallet — StellarProof will never see or store it. When an anchor needs to confirm you're verified, your wallet will prove it directly; StellarProof's servers will only ever see a yes/no result, never your documents.

### First-Time User (planned flow)

1. User will sign a **SEP-10 challenge** to prove wallet ownership
2. StellarProof will route to the cheapest government rail for the user's country (Didit)
3. KYC provider will verify identity — compliance copy retained by the provider (FATF/AML)
4. Verified data will pass through a **ZK proof layer** running client-side on the user's device
5. ZK proof will be generated locally using **BN254 + Poseidon** (Stellar Protocol 25)
6. **SHA-256 proof hash** will be anchored on Stellar — no personal data on-chain
7. ZK credential will be stored in the user's wallet
8. Anchor will receive **proof — not PII**

### Returning User (planned flow)

1. User will sign SEP-10 challenge
2. Wallet will already hold a valid ZK credential
3. Anchor will request proof of required attributes
4. Proof will be generated locally from existing credential — **no re-KYC**
5. Anchor will receive proof — **verified in seconds**

---

## Architecture

StellarProof is designed to sit between KYC providers and Stellar anchors as **consent and verification infrastructure**. It is not a credential registry or a data store.

- **StellarProof's servers are designed to never hold identity data.** Credentials will be issued by KYC providers directly to the user's wallet.
- **StellarProof will store only public, non-PII data:** approved-issuer public keys, revocation hashes, and consent logs.
- **The architecture is designed so there is no central database of user information to breach.**

### Phase 1 — Zero-Knowledge Proof Verification (Shipped — Stellar Testnet)

Full ZK proof verification on-chain via Soroban, using Stellar's native BN254/Poseidon support (Protocol 25). Anchors verify predicates ("verified, not sanctioned, over 18") without any party — including StellarProof — ever seeing the underlying document.

> **Note:** Phase 1 is built and running on Stellar testnet, with real deployed contract addresses. Mainnet deployment is planned for a later phase.

---

## Legal Positioning

StellarProof provides **reusable verification evidence and consent infrastructure**. It is not a regulated compliance decision-maker.

- Final AML/KYC decisions remain the responsibility of each participating anchor.
- StellarProof does not perform AML compliance, certify or approve individuals, or replace any anchor's own KYC/AML program.
- Verification attribution follows the original KYC provider: "Verified by Didit", etc.

---

```markdown
## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) (App Router) + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| 3D / Visual | WebGL + GLSL (custom terrain shader) |
| Smart Contracts | [Soroban](https://soroban.stellar.org/) (Rust) on Stellar |
| ZK Proofs | BBS+ / BN254 + Poseidon (Protocol 25) |
| Identity Standard | [W3C Verifiable Credentials v2.0](https://www.w3.org/TR/vc-data-model-2.0/) |
| Auth | [SEP-10](https://stellar.org/protocol/sep-10) (Stellar SDK) |
| Blockchain | [Stellar](https://stellar.org/) Testnet → Mainnet |
| Deployment | [Vercel](https://vercel.com/) |
```

---

## Team

- [Dhanush](https://x.com/Dhanush_devx) — Founder

---

## Links

- **Website:** [stellarproof.org](https://stellarproof.org)
- **GitHub:** [github.com/StellarProof](https://github.com/StellarProof)
- **Twitter/X:** [@StellarProofOrg](https://x.com/StellarProofOrg)
- **Email:** [getstellarproof@gmail.com](mailto:getstellarproof@gmail.com)
- **Discord:** [Stellar Dev Discord](https://discord.gg/stellardev)

---

## License

[MIT](LICENSE)
