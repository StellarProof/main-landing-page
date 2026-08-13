// Corrected replacement for: main-landing-page/app/about-us/page.tsx
//
// Changes from the version currently live:
//   · ZK verification moved from "roadmap / not shipped" to shipped on testnet,
//     with the deployed contract addresses and measured costs.
//   · DigiLocker / PhilSys removed — the KYC provider is Didit and the market
//     is South America.
//   · Architecture and Security rewritten: StellarProof's servers never return
//     a yes/no verdict. The anchor verifies a proof on-chain itself.
//   · Drop-off figure stated as a labelled industry estimate (40–60%) rather
//     than an unsourced 60–80%, so it cannot be challenged as invented.
//   · Roadmap replaced with the real path to mainnet.
//   · Whitepaper link added.
//
// The layout shell, colour tokens and navigation are unchanged.

"use client";

import React, { useState } from "react";

const CYAN = "#06B6D4";
const DARK = "#171716";
const DARK2 = "#0D1F35";
const BORDER = "#1E3A5F";
const TEXT = "#E2E8F0";
const MUTED = "#e4e2dd";
const GREEN = "#10B981";

const nav = [
  { id: "what", label: "What is StellarProof", icon: "" },
  { id: "user", label: "How It Works (Users)", icon: "" },
  { id: "anchor", label: "Anchor Integration", icon: "" },
  { id: "architecture", label: "Architecture", icon: "" },
  { id: "security", label: "Security Model", icon: "" },
  { id: "compliance", label: "Compliance Model", icon: "" },
  { id: "roadmap", label: "Roadmap", icon: "" },
  { id: "team", label: "Team", icon: "" },
] as const;

type NavId = (typeof nav)[number]["id"];

const Code = ({ children }: { children: React.ReactNode }) => (
  <code
    style={{
      background: "#0A1628",
      border: `1px solid ${BORDER}`,
      borderRadius: 4,
      padding: "2px 8px",
      fontFamily: "'Fira Code', monospace",
      fontSize: 13,
      color: CYAN,
      overflowWrap: "anywhere",
    }}
  >
    {children}
  </code>
);

// Every block on this page is column-aligned monospace — box-drawing diagrams,
// contract addresses, code. `pre` + horizontal scroll preserves the alignment
// on a phone; `pre-wrap` would reflow them into unreadable fragments.
const Block = ({ children }: { children: React.ReactNode }) => (
  <pre
    style={{
      background: "#0A1628",
      border: `1px solid ${BORDER}`,
      borderRadius: 8,
      padding: 20,
      overflowX: "auto",
      fontFamily: "'Fira Code', monospace",
      fontSize: 13,
      color: TEXT,
      margin: "16px 0",
      lineHeight: 1.6,
      whiteSpace: "pre",
    }}
  >
    {children}
  </pre>
);

const Tag = ({
  children,
  color = CYAN,
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <span
    style={{
      background: `${color}15`,
      border: `1px solid ${color}40`,
      borderRadius: 99,
      padding: "2px 10px",
      fontSize: 11,
      color,
      fontWeight: 600,
      marginRight: 6,
    }}
  >
    {children}
  </span>
);

const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: 24 }}>
    <div>
      <div style={{ fontWeight: 600, color: TEXT, marginBottom: 4 }}>
        <span style={{ color: TEXT, marginRight: 8 }}>{`${n}.`}</span>
        {title}
      </div>
      <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  </div>
);

const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: "clamp(22px, 5vw, 32px)",
      fontWeight: 700,
      color: TEXT,
      margin: "0 0 8px",
      fontFamily: "'Trebuchet MS', sans-serif",
    }}
  >
    {children}
  </h1>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontSize: "clamp(16px, 3vw, 22px)",
      fontWeight: 700,
      color: TEXT,
      margin: "32px 0 12px",
      fontFamily: "'Trebuchet MS', sans-serif",
      borderBottom: `1px solid ${BORDER}`,
      paddingBottom: 8,
    }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: "0 0 16px" }}>
    {children}
  </p>
);

const Callout = ({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
}) => {
  const colors = { info: CYAN, warning: "#F59E0B", success: GREEN };
  const c = colors[type];
  return (
    <div
      style={{
        background: `${c}08`,
        border: `1px solid ${c}30`,
        borderLeft: `3px solid ${c}`,
        borderRadius: 8,
        padding: "12px 16px",
        margin: "16px 0",
        fontSize: 14,
        color: TEXT,
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
};

const sections: Record<NavId, () => React.ReactElement> = {
  what: () => (
    <div>
      <H1>What is StellarProof</H1>
      <P>
        StellarProof is the identity layer for Stellar. Verify once with a
        licensed KYC provider and get a credential that lives in your own wallet.
        Use it at every anchor after that with one tap. No uploading the same
        passport again. No waiting. No five different companies storing copies of
        your face.
      </P>
      <Callout type="info">
        SDF wrote this goal into SEP-12, Stellar&apos;s KYC API standard: a
        customer should be able to enter their KYC information once and use it
        across many services without re-entering it manually.
        <br />
        <br />
        That was the plan. Nobody built the infrastructure. StellarProof is that
        infrastructure.
      </Callout>

      <H2>The Problem</H2>
      <P>
        Stellar&apos;s anchors are spread across many countries, and every one of
        them runs its own KYC stack independently — SumSub here, Onfido there,
        Veriff somewhere else. A user who wants to use three anchors uploads the
        same passport three times, waits three times, and each anchor pays $1–3 in
        verification costs three times.
      </P>
      <P>
        Industry estimates put KYC abandonment in crypto and fintech onboarding at
        roughly 40–60%. Not because people don&apos;t want the product — because
        they have done this before and don&apos;t want to do it again.
      </P>
      <Block>{`Without StellarProof:
  User → Anchor A   Upload passport, ID, selfie. Wait 2 days. ✓  ($1)
  User → Anchor B   Upload passport, ID, selfie. Wait 2 days. ✓  ($1)
  User → Anchor C   Upload passport, ID, selfie. Wait 2 days. ✓  ($1)

  Same person. Same passport. Same face.
  3 separate databases holding your documents.`}</Block>

      <H2>The Solution</H2>
      <P>
        StellarProof doesn&apos;t hold your identity data at all. A licensed KYC
        provider verifies you once, and the credential is sealed to your own
        wallet — we keep only ciphertext we cannot read. When an anchor needs to
        confirm something about you, your wallet generates a zero-knowledge proof
        on your device and the anchor verifies it on Stellar. StellarProof is not
        in that loop, and never sees a yes or a no.
      </P>
      <Block>{`With StellarProof:
  User → Anchor A   Verify once with a licensed provider.
                    Credential sealed to your wallet.            ✓
  User → Anchor B   One tap. Proof generated on your device,
                    verified on Stellar in seconds.              ✓
  User → Anchor C   One tap. Same.                               ✓

  Same person. One verification.
  Credential lives in your wallet. Zero central databases.`}</Block>
      <Callout type="success">
        There is no central database of user identities to breach, because there
        isn&apos;t one. StellarProof&apos;s infrastructure stores only public
        information — which KYC providers are approved, and which credentials have
        been revoked — plus credential ciphertext sealed to keys we do not hold.
        This is checked by a test, not just claimed:{" "}
        <Code>apps/issuer/test/no-pii.test.mjs</Code> runs a real issuance and
        fails if any personal attribute reaches storage.
      </Callout>

      <H2>Key Numbers</H2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 16,
          margin: "16px 0",
        }}
      >
        {[
          {
            val: "0.00306 XLM",
            label: "Measured cost of an on-chain re-verification",
          },
          { val: "$1–3", label: "Typical cost of a first-time KYC check" },
          { val: "40–60%", label: "Estimated KYC drop-off in crypto onboarding" },
          { val: "2–4 s", label: "Proof generated on the user's own device" },
        ].map((s) => (
          <div
            key={s.val}
            style={{
              background: DARK2,
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: "clamp(18px, 4vw, 26px)",
                fontWeight: 700,
                color: CYAN,
                fontFamily: "'Trebuchet MS'",
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <P>
        The 0.00306 XLM figure is measured, not estimated — see the{" "}
        <a
          href="/whitepaper"
          style={{ color: CYAN, textDecoration: "underline" }}
        >
          whitepaper
        </a>{" "}
        for the full evaluation and the deployed contract addresses.
      </P>
    </div>
  ),

  user: () => (
    <div>
      <H1>How It Works - Users</H1>
      <P>
        You verify once. Every anchor after that is one consent tap. Your
        documents never leave the licensed provider that checked them.
      </P>

      <H2>First Verification</H2>
      <Step n={1} title="Connect your Stellar wallet">
        Your credential is tied to your wallet, not to an account with us. No
        signup, no password.
      </Step>
      <Step n={2} title="Sign one message">
        That signature derives your private credential key, your local vault key
        and your delivery key — all on your device, none of them ever sent
        anywhere. It also means you can recover your credential on a new phone
        from the same wallet.
      </Step>
      <Step n={3} title="Prove you control the account over SEP-10">
        Stellar&apos;s standard web authentication. One signature, two seconds.
      </Step>
      <Step n={4} title="Complete KYC with a licensed provider">
        We route you to Didit, which performs the real document and liveness
        check. They keep the compliance copy under their own regulatory
        obligations — exactly as they do today.
      </Step>
      <Step n={5} title="The credential is sealed to your wallet">
        Three facts — your date of birth, your document expiry, your country — are
        read once in memory, committed to with a Poseidon hash, signed, encrypted
        to your key, and delivered. The plaintext is discarded. Nothing personal
        is written to disk anywhere in the system.
      </Step>

      <H2>Every Anchor After That</H2>
      <Step n={1} title="Visit a new anchor">
        They open your wallet with the policy they need satisfied.
      </Step>
      <Step n={2} title="See exactly what they are asking for">
        No surprises. You see every predicate, and which site will receive the
        proof, before approving anything.
      </Step>
      <Step n={3} title="Tap to approve">
        A zero-knowledge proof is generated on your device in 2–4 seconds. Your
        credential never leaves it.
      </Step>
      <Step n={4} title="The anchor verifies the proof on Stellar">
        A Soroban contract checks the proof cryptographically and records that
        verification happened. The anchor learns that you are over 18 and in a
        supported country. It learns nothing else — not your name, not your date
        of birth, not your document number.
      </Step>
      <Callout type="info">
        Two anchors that compare notes cannot tell they have seen the same person.
        Each one receives a different, anchor-specific value derived from your
        secret, so it is stable at one anchor — which stops one person opening
        unlimited accounts — and unlinkable across anchors.
      </Callout>
    </div>
  ),

  anchor: () => (
    <div>
      <H1>Anchor Integration</H1>
      <P>
        StellarProof runs alongside your existing KYC stack from day one. No
        compliance changes. No risk during migration. Users who have a credential
        skip straight through; everyone else follows your current flow untouched.
      </P>

      <H2>What you install</H2>
      <Block>{`import { StellarProof } from "@stellarproof/sdk";

const sp = new StellarProof({
  rpcUrl: "https://soroban-testnet.stellar.org",
  networkPassphrase: Networks.TESTNET,
  verifierContractId: "CAUQOEHF…",
  anchorId: 2,
  verificationKey,        // enables an instant, free local pre-check
});

const request = sp.requestProof({ minAgeYears: 18, allowedCountry: 76 });
// … the user's wallet returns { proof, publicSignals, issuerId } …
const result = await sp.verify(response, { signer, request });
if (result.ok) grantAccess(result.record);`}</Block>
      <P>
        Two-stage verification: a local snarkjs check runs in single-digit
        milliseconds and costs nothing, rejecting malformed proofs before you
        spend a transaction. The on-chain call is what is authoritative, because
        it is the only thing that can detect a credential being reused to open a
        second account.
      </P>

      <H2>What you get</H2>
      <P>
        Every verification writes an on-chain compliance record: which registered
        issuer, which policy, which proof hash, at what time. Append-only,
        timestamped, publicly auditable, and containing no personal data at all.
        Your compliance team gets permanent evidence that verification occurred
        without your company ever holding a single raw document.
      </P>
      <Callout type="warning">
        Verification belongs on your server. The SDK will run in a browser, but a
        browser can simply choose not to call it. Final AML/KYC decisions remain
        with your compliance team — StellarProof supplies the evidence and the
        infrastructure, not the decision.
      </Callout>
    </div>
  ),

  architecture: () => (
    <div>
      <H1>Architecture</H1>
      <P>
        StellarProof sits between licensed KYC providers and Stellar anchors.
        Verify once, and every anchor after that verifies a cryptographic proof
        generated on the user&apos;s own device — never a document, and never a
        verdict handed down by us.
      </P>
      <Block>{`┌─ OFF-CHAIN ─────────────────────┐    ┌─ ON-CHAIN (Soroban) ──────────┐
│                                 │    │                               │
│  Didit  ──webhook(PII)──►  ①    │    │  ③ Issuer Registry            │
│  (licensed KYC)         Issuer  │───►│     approved issuer pubkeys   │
│                         Service │reg │                               │
│                            │    │    │  ④ Revocation Registry        │
│                     sealed │    │    │     current revocation root   │
│                     cred   ▼    │    │                               │
│                    ② Wallet PWA │───►│  ⑤ ZK Verifier                │
│                       - SEP-10  │prf │     bn254 pairing check       │
│                       - snarkjs │    │     + nullifier registry      │
│                       - IndexedDB│   │     → compliance event        │
│                            │    │    │                               │
│                            ▼    │    │                               │
│                    ⑥ Anchor     ├───►│  (reads compliance status)    │
│                       + JS SDK  │    │                               │
└─────────────────────────────────┘    └───────────────────────────────┘`}</Block>
      <Callout type="info">
        Personal data crosses exactly one edge in this diagram: KYC provider →
        Issuer, in memory, once. Everything downstream of that edge is
        commitments, ciphertext and proofs.
      </Callout>

      <H2>Live on Stellar testnet</H2>
      <P>
        Zero-knowledge verification is built and deployed, not planned. Protocol
        25 added native BN254 curve operations to Stellar via CAP-0074, which is
        what makes on-chain Groth16 verification affordable. Our three contracts
        are live on testnet and anyone can inspect them:
      </P>
      <Block>{`ZK Verifier          CAUQOEHFNJSXTWGX757OYEQLDGFNFF3EBO4OVLPRIWKPX5UPSFTOZNMM
Issuer Registry      CCXOW2TLO4VQSQKKVEXQEB2SREEA2VKML7R3GIC2O2DVGKBHUYWFWUDY
Revocation Registry  CBAHY6ZIY5OUAJN4KDI4O3ENBM3CJ3THIM6OCE32AOVZFCKYJJQVHOFS`}</Block>
      <P>
        <Tag color={GREEN}>20,998 constraints</Tag>
        <Tag color={GREEN}>8 public inputs</Tag>
        <Tag color={GREEN}>28.4M instructions</Tag>
        <Tag color={GREEN}>0.00306 XLM</Tag>
      </P>
      <P>
        The full construction — the circuit, the commitment scheme, the
        per-anchor nullifiers, the revocation tree and the on-chain check
        ordering — is documented in the{" "}
        <a
          href="/whitepaper"
          style={{ color: CYAN, textDecoration: "underline" }}
        >
          whitepaper
        </a>
        .
      </P>
    </div>
  ),

  security: () => (
    <div>
      <H1>Security Model</H1>
      <P>
        StellarProof is designed so that breaching our servers yields nothing
        useful — because our servers hold nothing useful.
      </P>

      <H2>What an attacker who owns our database gets</H2>
      <P>
        Approved issuer public keys. Revocation roots. Session identifiers. A set
        of field elements that look like random 256-bit numbers. And credential
        ciphertext sealed with XChaCha20-Poly1305 to keys derived on users&apos;
        own devices, which we do not have and cannot obtain.
      </P>
      <P>
        No names. No dates of birth. No document numbers. No addresses. No images.
        This is enforced by a test that runs a real issuance and fails if any
        personal attribute reaches storage.
      </P>

      <H2>What StellarProof itself cannot do</H2>
      <P>
        We cannot track you across anchors, and this is a property of the
        cryptography rather than a policy commitment. Your credential is bound to
        the <em>hash</em> of your secret, never the secret itself — you only ever
        send us the hash. Deriving the per-anchor identifiers that would let
        anyone follow you requires the secret. We do not have it.
      </P>

      <H2>What colluding anchors cannot do</H2>
      <P>
        Compare their records and identify a common user. Every anchor receives a
        different value derived from your secret and their own anchor ID. The one
        value that would be identical everywhere — your credential commitment — is
        deliberately never revealed, precisely because it would be a perfect join
        key.
      </P>

      <H2>Revocation that isn&apos;t a tracking channel</H2>
      <P>
        Revoked credentials are held in a sparse Merkle tree, and holders prove
        <em> non</em>-membership. Only the tree root is public. A valid credential
        reveals no stable identifier at all, and revoking one says nothing about
        who was revoked. The revoked list is served in full rather than answering
        per-credential queries — because answering &quot;is nonce X revoked?&quot;
        would tell us exactly which credential is about to be used.
      </P>

      <H2>The honest caveat</H2>
      <Callout type="warning">
        Our Groth16 trusted setup is currently a <strong>prototype
        ceremony</strong> with two local contributions. If every contributor to
        such a ceremony colluded, forged proofs would be possible. Re-running it
        with independent external contributors is a blocking requirement before
        any mainnet deployment, and the circuit and contracts have not yet been
        reviewed by an external security firm. We would rather say this than have
        it found.
      </Callout>
    </div>
  ),

  compliance: () => (
    <div>
      <H1>Compliance Model</H1>
      <P>
        StellarProof provides reusable verification evidence and the
        infrastructure to check it. Final AML/KYC decisions remain the
        responsibility of each participating anchor.
      </P>

      <H2>Where the regulated copy lives</H2>
      <P>
        With the licensed KYC provider that performed the original verification —
        Didit, in our current deployment. They retain their compliance copy under
        their own regulatory obligations, exactly as they do today. A subpoena for
        the underlying documents goes to them.
      </P>
      <P>
        A regulator compelling StellarProof produces approved issuer public keys,
        revocation roots, and ciphertext we cannot decrypt. Nothing that
        identifies any individual.
      </P>

      <H2>What satisfies the anchor&apos;s obligation</H2>
      <P>
        The on-chain compliance record: a tamper-evident, append-only, timestamped
        proof that verification occurred, by which registered issuer, at what
        time, and against which policy. You never held the raw documents. You
        cannot be compelled to produce what you never had, cannot leak it, and do
        not have to secure it. That reduces your regulatory surface area rather
        than adding to it.
      </P>

      <H2>Jurisdiction is enforced, not assumed</H2>
      <P>
        The circuit proves the holder&apos;s document country matches the country
        your policy requires. An unsupported country is refused at issuance rather
        than silently defaulted, so a credential cannot exist for a jurisdiction
        we do not support.
      </P>

      <Callout type="warning">
        StellarProof does not perform AML screening on its own account, does not
        certify or approve individuals, and does not replace any anchor&apos;s own
        KYC/AML programme. It is verification infrastructure, not a regulated
        compliance decision-maker.
      </Callout>
    </div>
  ),

  roadmap: () => (
    <div>
      <H1>Roadmap</H1>

      <H2>Shipped — zero-knowledge verification on Stellar testnet</H2>
      <Callout type="success">
        This is built and running, not planned. A user can verify once with Didit,
        receive a credential sealed to their wallet, and prove age, jurisdiction,
        document validity and non-revocation to an anchor that verifies the proof
        on-chain — without any party seeing the underlying document.
      </Callout>
      <P>
        Protocol 25 added native BN254 support to Stellar through CAP-0074, which
        is what makes on-chain Groth16 verification affordable. We use it. The
        circuit is 20,998 constraints with 8 public inputs; verification costs
        28.4 million CPU instructions against a network limit of 100 million, and
        0.00306 XLM per check. Proofs are generated client-side on the
        user&apos;s device in 2–4 seconds.
      </P>
      <P>
        Delivered: the circuit, three Soroban contracts, the issuer service
        integrated with Didit, the holder wallet, the anchor SDK, and a demo
        anchor exercising the whole flow end to end. 75 tests plus 12 end-to-end
        checks against the deployed contracts.
      </P>

      <H2>Next — the path to mainnet</H2>
      <Step n={1} title="Multi-party trusted setup ceremony">
        Re-run the circuit-specific phase-2 ceremony with independent, publicly
        named external contributors and published contribution hashes. This is a
        blocking requirement before mainnet.
      </Step>
      <Step n={2} title="External security audit">
        Independent review of the ZK circuit and the Soroban contracts.
      </Step>
      <Step n={3} title="Pilot integrations">
        Live pilots with South American anchors on testnet — real users, real
        Didit verifications, real drop-off numbers to replace the industry
        estimates on this page.
      </Step>
      <Step n={4} title="Mainnet launch">
        Production deployment, multi-issuer federation so anchors are not
        dependent on a single issuer, and a scalable revocation witness service.
      </Step>
    </div>
  ),

  team: () => (
    <div>
      <H1>Team</H1>
      <P>
        {" "}
        <a
          href="https://x.com/ushiki_kirigawa"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: CYAN, textDecoration: "underline" }}
        >
          {" "}
          Dhanush{" "}
        </a>{" "}
        - Founder of StellarProof
      </P>
    </div>
  ),
};

export default function AboutUsPage() {
  const [active, setActive] = useState<NavId>("what");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = nav.findIndex((n) => n.id === active);

  const handleNavClick = (id: NavId) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: DARK,
        fontFamily: "Calibri, sans-serif",
        color: TEXT,
        position: "relative",
      }}
    >
      {/* Status badge — hidden on small screens */}
      <div
        className="hidden sm:block"
        style={{
          position: "fixed",
          bottom: 24,
          left: 14,
          background: `${DARK2}99`,
          border: `1px solid ${CYAN}40`,
          borderRadius: 8,
          padding: "16px 20px",
          backdropFilter: "blur(10px)",
          maxWidth: 280,
          zIndex: 10,
        }}
      >
        <div
          style={{ fontSize: 12, color: CYAN, fontWeight: 600, marginBottom: 8 }}
        >
          Status
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: TEXT }}>
          Live on Stellar testnet
        </div>
      </div>

      {/* ── MOBILE TOP BAR ── */}
      <div
        className="md:hidden flex items-center justify-between"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: `${DARK}f0`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${BORDER}`,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
        }}
      >
        <a href="/" aria-label="Go to homepage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/stellarproof-logo.svg"
            alt="StellarProof"
            style={{ height: 32, width: "auto" }}
          />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            padding: "6px 10px",
            cursor: "pointer",
            color: TEXT,
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 57,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            background: `${DARK}f8`,
            backdropFilter: "blur(16px)",
            overflowY: "auto",
            padding: "8px 0 24px",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNavClick(n.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                padding: "14px 20px",
                background: active === n.id ? `${CYAN}18` : "none",
                border: "none",
                borderLeft:
                  active === n.id
                    ? `3px solid ${CYAN}`
                    : "3px solid transparent",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  color: active === n.id ? CYAN : MUTED,
                  fontWeight: active === n.id ? 600 : 400,
                }}
              >
                {n.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* ── DESKTOP SIDEBAR ── */}
      <div
        className="hidden md:block"
        style={{
          width: 260,
          flexShrink: 0,
          borderRight: `1px solid ${BORDER}`,
          padding: "24px 0",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            padding: "0 20px 20px",
            borderBottom: `1px solid ${BORDER}`,
            marginBottom: 16,
          }}
        >
          <div>
            <a href="/" aria-label="Go to homepage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/stellarproof-logo.svg"
                alt="StellarProof"
                className="w-32 h-auto"
              />
            </a>
          </div>
        </div>
        {nav.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 20px",
              background: active === n.id ? `${CYAN}15` : "none",
              border: "none",
              borderLeft:
                active === n.id ? `2px solid ${CYAN}` : "2px solid transparent",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 14 }}>{n.icon}</span>
            <span
              style={{
                fontSize: 13,
                color: active === n.id ? CYAN : MUTED,
                fontWeight: active === n.id ? 600 : 400,
              }}
            >
              {n.label}
            </span>
          </button>
        ))}

        <a
          href="/try"
          style={{
            display: "block",
            margin: "16px 20px 0",
            padding: "10px 14px",
            border: `1px solid ${CYAN}`,
            background: CYAN,
            borderRadius: 8,
            color: "#04212B",
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Try the demo →
        </a>
        <a
          href="/whitepaper"
          style={{
            display: "block",
            margin: "10px 20px 0",
            padding: "10px 14px",
            border: `1px solid ${CYAN}40`,
            background: `${CYAN}12`,
            borderRadius: 8,
            color: CYAN,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Read the whitepaper →
        </a>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          minWidth: 0,
        }}
      >
        {/* Spacer for mobile sticky top bar */}
        <div className="md:hidden" style={{ height: 57 }} />

        <div
          style={{
            padding: "clamp(20px, 5vw, 48px) clamp(16px, 5vw, 64px)",
            maxWidth: 900,
          }}
        >
          {sections[active]()}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 48,
              paddingTop: 24,
              borderTop: `1px solid ${BORDER}`,
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {activeIndex > 0 ? (
              <button
                onClick={() => setActive(nav[activeIndex - 1].id)}
                style={{
                  background: DARK2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 16px",
                  color: TEXT,
                  cursor: "pointer",
                  fontSize: 13,
                  flex: "1 1 auto",
                  minWidth: 0,
                  textAlign: "left",
                }}
              >
                {`← ${nav[activeIndex - 1].label}`}
              </button>
            ) : (
              <div />
            )}
            {activeIndex < nav.length - 1 ? (
              <button
                onClick={() => setActive(nav[activeIndex + 1].id)}
                style={{
                  background: DARK2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 16px",
                  color: TEXT,
                  cursor: "pointer",
                  fontSize: 13,
                  flex: "1 1 auto",
                  minWidth: 0,
                  textAlign: "right",
                }}
              >
                {`${nav[activeIndex + 1].label} →`}
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
