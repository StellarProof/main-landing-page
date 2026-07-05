
# StellarProof

> Reusable identity infrastructure for the Stellar ecosystem. Verify once, accepted at every anchor.

**Live:** [stellarproof.org](https://stellarproof.org)

---

## What is StellarProof?

StellarProof is B2B reusable-KYC infrastructure for the Stellar ecosystem. It lets a user verify their identity once and have that verification recognized by every participating anchor — without re-submitting documents, re-uploading selfies, or repeating KYC flows.

The Stellar ecosystem has 100+ anchors (Coins.ph, Vibrant, Bitso, etc.), each running its own independent KYC stack. A user who wants to use three anchors uploads the same passport three times, waits three times, and each anchor pays $1–3 in duplicate verification costs. **60–80% of users abandon KYC before completing it** — not because they don't want to use the product, but because they've done it before and don't want to do it again.

StellarProof fixes this.

---

## How It Works

StellarProof doesn't hold your identity data. Your KYC provider verifies you once and issues a credential directly to your own wallet — StellarProof never sees or stores it. When an anchor needs to confirm you're verified, your wallet proves it directly; StellarProof's servers only ever see a yes/no result, never your documents.

### First-Time User

1. User signs a **SEP-10 challenge** to prove wallet ownership
2. StellarProof routes to the cheapest government rail for the user's country (DigiLocker, PhilSys, Smile ID, etc.)
3. KYC provider verifies identity — compliance copy retained by the provider (FATF/AML)
4. Verified data passes through a **ZK proof layer** running client-side on the user's device
5. ZK proof generated locally using **BN254 + Poseidon** (Stellar Protocol 25)
6. **SHA-256 proof hash** anchored on Stellar — no personal data on-chain
7. ZK credential stored in the user's wallet
8. Anchor receives **proof — not PII**

### Returning User

1. User signs SEP-10 challenge
2. Wallet already holds a valid ZK credential
3. Anchor requests proof of required attributes
4. Proof generated locally from existing credential — **no re-KYC**
5. Anchor receives proof — **verified in seconds**

---

## Architecture

StellarProof sits between KYC providers and Stellar anchors as **consent and verification infrastructure**. It is not a credential registry or a data store.

- **StellarProof's servers never hold identity data.** Credentials are issued by KYC providers directly to the user's wallet.
- **StellarProof stores only public, non-PII data:** approved-issuer public keys, revocation hashes, and consent logs.
- **There is no central database of user information to breach.**

### Phase 1 — Credential Issuance & Consent (Live)

KYC providers issue signed verifiable credentials directly to the user's wallet. StellarProof orchestrates consent between anchors and the wallet.

### Phase 2 — Zero-Knowledge Proof Verification (Roadmap)

Full ZK proof verification on-chain via Soroban, using Stellar's native BN254/Poseidon support (Protocol 25). Anchors verify predicates ("verified, not sanctioned, over 18") without any party — including StellarProof — ever seeing the underlying document.

> **Note:** Phase 2 is on the roadmap but has not shipped yet. The cryptographic primitives are available on Stellar mainnet; the integration work is ahead of us.

---

## Legal Positioning

StellarProof provides **reusable verification evidence and consent infrastructure**. It is not a regulated compliance decision-maker.

- Final AML/KYC decisions remain the responsibility of each participating anchor.
- StellarProof does not perform AML compliance, certify or approve individuals, or replace any anchor's own KYC/AML program.
- Verification attribution follows the original KYC provider: "Verified by Sumsub", "Verified by DigiLocker", etc.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) (App Router) + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| 3D | WebGL / GLSL (custom terrain shader) |
| Deployment | Vercel |

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── about-us/page.tsx     # About page (tabbed: What, How, Architecture, etc.)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/waitlist/         # Waitlist API route (Notion integration)
├── components/
│   ├── sections/             # Page sections (hero, problem, how-it-works, etc.)
│   └── ui/                   # Reusable UI components
├── lib/                      # Utilities
└── public/                   # Static assets (logo, images)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repo
git clone https://github.com/StellarProof/main-landing-page.git
cd main-landing-page

# Install dependencies
npm install

# Copy environment variables (if .env.example exists)
cp .env.example .env.local  # Fill in values

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
```

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes with a descriptive message
3. Push to your branch: `git push origin feature/your-feature`
4. Open a Pull Request against `main`

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
