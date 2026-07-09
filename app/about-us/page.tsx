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
  { id: "faq", label: "FAQ", icon: "" },
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
    }}
  >
    {children}
  </code>
);

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
      whiteSpace: "pre-wrap",
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
      <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{children}</div>
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
        StellarProof is the identity layer for Stellar. Verify once using your national ID and
        Get a credential locked to your wallet. Use it at every anchor instantly, with one tap. 
        No uploading the same passport again. No waiting. No five different apps storing copies of your face.
      </P>
      <Callout type="info">
        SDF wrote this goal into SEP-12 in 2018: <br/> <em>&quot;Allow a customer to enter their KYC
        information once and use it across many services without re-entering manually.&quot;</em>
        <br /><br />
        That was the plan. Nobody built the infrastructure. StellarProof is that infrastructure.
      </Callout>

      <H2>The Problem</H2>
      <P>
        Stellar has 100+ anchors across countries. Every single one runs its own KYC
        stack independently - SumSub here, Onfido there, Veriff somewhere else. A user
        who wants to use three anchors uploads the same passport three times, waits three
        times, and each anchor pays $1-3 in verification costs three times.
      </P>
      <P>
        60–80% of users abandon KYC before completing it, Not because they don&apos;t want
        to use the product Because they&apos;ve done it before and don&apos;t want to do it again.
      </P>
      <Block>{`Without StellarProof:
  User → Coins.ph   → Upload passport, ID, selfie. Wait 2 days. ✓  ($1.35)
  User → Vibrant    → Upload passport, ID, selfie. Wait 2 days. ✓  ($1.35)
  User → Bitso      → Upload passport, ID, selfie. Wait 2 days. ✓  ($1.35)

  Same person. Same passport. Same face.
  3 separate databases holding your documents.`}</Block>

      <H2>The Solution</H2>
      <P>
        StellarProof doesn&apos;t hold your identity data at all. Your KYC provider verifies
        you once and issues a credential directly to your own wallet — StellarProof never
        sees or stores it. When an anchor needs to confirm you&apos;re verified, your wallet
        proves it directly; StellarProof&apos;s servers only ever see a yes/no result, never
        your documents.
      </P>
      <Block>{`With StellarProof:
  User → Coins.ph   → Verify once via DigiLocker/PhilSys. Credential issued to wallet. ✓
  User → Vibrant    → One tap consent. Proof from wallet in 2 seconds.               ✓
  User → Bitso      → One tap consent. Proof from wallet in 2 seconds.               ✓

  Same person. One verification.
  Credential lives in your wallet. Zero central databases.`}</Block>
      <Callout type="success">
        There&apos;s no central database of user identities to breach, because there
        isn&apos;t one. StellarProof&apos;s infrastructure stores only public information —
        which KYC providers are approved, and which credentials have been revoked —
        never anything that identifies you.
      </Callout>

      <H2>Key Numbers</H2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, margin: "16px 0" }}>
        {[
          { val: "60–80%", label: "KYC drop-off rate across Stellar anchors" },
          { val: "$1-3", label: "Cost per first-time verification" },
          { val: "Subscription", label: "Returning-user reuse included in flat monthly plan" },
        ].map((s) => (
          <div key={s.val} style={{ background: DARK2, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 700, color: CYAN, fontFamily: "'Trebuchet MS'" }}>
              {s.val}
            </div>
            <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  user: () => (
    <div>
      <H1>How It Works - Users</H1>
      <P>As a user, you verify once. Every anchor after that requires one consent tap.</P>
      <H2>First Verification</H2>
      <Step n={1} title="Connect your Stellar wallet">
        Your identity is tied to your wallet. No separate account needed.
      </Step>
      <Step n={2} title="Sign a SEP-10 challenge to prove wallet ownership">
        One signature. Takes two seconds.
      </Step>
      <Step n={3} title="Complete KYC via your national ID">
        StellarProof routes you to the fastest, cheapest government rail for your country — DigiLocker, PhilSys, Smile ID, or others.
      </Step>
      <Step n={4} title="KYC provider issues a credential directly to your wallet">
        The credential lives in your wallet. StellarProof never sees or stores it.
      </Step>
      <Step n={5} title="A proof hash is anchored on Stellar">
        A SHA-256 hash is recorded on-chain as permanent, tamper-proof evidence that verification occurred — no personal data touches the chain.
      </Step>
      <H2>Every User After That</H2>
      <Step n={1} title="Visit a new anchor">
        They detect your existing credential instantly.
      </Step>
      <Step n={2} title="See exactly what they are asking for">
        No surprises. You see every field before approving.
      </Step>
      <Step n={3} title="Tap to approve">Your wallet signs it. Done.</Step>
      <Step n={4} title="The anchor gets a proof, not your passport">
        Verified. Low risk. Onboarded. Your documents never touched their servers.
      </Step>
    </div>
  ),

  anchor: () => (
    <div>
      <H1>Anchor Integration</H1>
      <P>
        StellarProof runs alongside your existing KYC stack from day one. No compliance
        changes. No risk during migration. Your team gets it live in under a day.
      </P>
      <P>
        Once integrated, you get access to a live dashboard showing exactly how many of
        your users could have been onboarded instantly. Real numbers from your real
        traffic before you commit to anything.
      </P>
      <P>
        For teams that need more, we offer a Verification Analytics Dashboard,
        Audit Log Explorer, Priority Integration Support, and a White-label SDK
        for wallets and fintechs building on Stellar. Final AML/KYC decisions
        remain with your compliance team — StellarProof provides the verification
        evidence and infrastructure.
      </P>
    </div>
  ),

  architecture: () => (
    <div>
      <H1>Architecture</H1>
      <P>
        StellarProof sits between KYC providers and Stellar anchors as consent
        and verification infrastructure. Think of it as CKYC for the Stellar
        ecosystem: verify once, and every anchor routes through consent back to
        the credential in the user&apos;s own wallet.
      </P>
      <P>
        StellarProof&apos;s servers never hold identity data. Credentials are issued
        by KYC providers directly to the user&apos;s wallet. StellarProof stores only
        public, non-PII data: approved-issuer public keys, revocation hashes, and
        consent logs. There is no central database of user information to breach.
      </P>
      <Callout type="info">
        <strong>Phase 1 (live):</strong> KYC providers issue signed verifiable
        credentials directly to the user&apos;s wallet. StellarProof orchestrates
        consent between anchors and the wallet.
        <br /><br />
        <strong>Phase 2 (roadmap):</strong> Full zero-knowledge proof verification
        on-chain via Soroban, using Stellar&apos;s native BN254/Poseidon support
        (Protocol 25). Anchors verify predicates (&quot;verified, not sanctioned,
        over 18&quot;) without any party ever seeing the underlying document.
      </Callout>
    </div>
  ),

  security: () => (
    <div>
      <H1>Security Model</H1>
      <P>
        StellarProof is designed so that a breach of our servers exposes nothing
        useful — because our servers never hold identity data in the first place.
      </P>
      <P>
        Credentials live exclusively in the user&apos;s own wallet, issued directly by
        the KYC provider. StellarProof&apos;s infrastructure stores only public information:
        which issuers are approved, which credentials have been revoked, and consent
        audit logs. There are no encrypted blobs, no central store, no server-side
        copies of user data — nothing to decrypt, exfiltrate, or compel.
      </P>
      <P>
        For anchors, the audit log is append-only and cannot be modified or deleted.
        Every verification event is timestamped and tamper-evident. Your compliance team
        has a permanent record proving that verification occurred — without ever holding
        a single raw document.
      </P>
      <Callout type="info">
        <strong>Phase 2 (roadmap):</strong> With zero-knowledge proofs on Soroban,
        even the yes/no result becomes trustless — anchors verify a cryptographic
        proof on-chain without any party, including StellarProof, ever seeing the
        underlying data.
      </Callout>
    </div>
  ),

  compliance: () => (
    <div>
      <H1>Compliance Model</H1>
      <P>
        StellarProof provides reusable verification evidence and consent infrastructure.
        Final AML/KYC decisions remain the responsibility of each participating anchor.
      </P>
      <P>
        The credential lives in the user&apos;s wallet. StellarProof never holds it.
        A regulator compelling StellarProof produces only public data — approved issuers
        and revocation hashes — nothing that identifies any individual.
      </P>
      <P>
        The compliance layer sits with the licensed KYC provider who performed the
        original verification: DigiLocker, SumSub, Smile ID. They retain their
        compliance copy under their own regulatory obligations exactly as they do
        today. Subpoenas for underlying documents go to them, not to StellarProof.
      </P>
      <P>
        For anchors, the obligation is satisfied by StellarProof&apos;s audit log: a
        tamper-proof, append-only record proving that verification occurred, by which
        licensed provider, at what time, and to what risk level. You never held the raw
        documents. You cannot be compelled to produce what you never had. That reduces
        your regulatory surface area rather than adding to it.
      </P>
      <Callout type="warning">
        StellarProof does not perform AML compliance, certify or approve individuals,
        or replace any anchor&apos;s own KYC/AML program. It is verification infrastructure,
        not a regulated compliance decision-maker.
      </Callout>
    </div>
  ),

  roadmap: () => (
    <div>
      <H1>Roadmap</H1>

      <H2>Phase 1 — Credential Issuance &amp; Consent (Live Today)</H2>
      <P>
        KYC providers (Sumsub, DigiLocker, Smile ID) issue a signed verifiable
        credential directly to the user&apos;s own wallet. StellarProof never stores
        the credential or any PII — it stores only public, non-PII data
        (approved-issuer public keys, revocation hashes) and orchestrates consent
        between anchors and the user&apos;s wallet.
      </P>
      <Step n={1} title="Month 1 — Foundation">
        Core credential schema, issuer onboarding, wallet integration.
      </Step>
      <Step n={2} title="Month 2 — Consent System &amp; UI">
        Anchor consent flow, user approval UX, audit log infrastructure.
      </Step>
      <Step n={3} title="Month 3 — Security Audit &amp; Pilots">
        Third-party security review, pilot integrations with early anchors.
      </Step>
      <Step n={4} title="Month 4 — Launch">
        Production launch with initial anchor partners.
      </Step>

      <H2>Phase 2 — Zero-Knowledge Proof Verification (Coming)</H2>
      <Callout type="info">
        Phase 2 is on our roadmap but has not shipped yet. The primitives are
        available; the integration work is ahead of us.
      </Callout>
      <P>
        Protocol 25 went live on Stellar mainnet in January 2026 with native BN254
        and Poseidon support — the two cryptographic primitives needed for selective
        disclosure and zero-knowledge proof verification.
      </P>
      <P>
        Once complete, Phase 2 will allow anchors to verify predicates — &quot;this
        person is verified, not sanctioned, over 18&quot; — via a Soroban smart contract,
        without any party (including StellarProof) ever seeing the underlying
        identity document. Proofs will be generated client-side on the user&apos;s
        device using BN254 + Poseidon, and verified trustlessly on-chain.
      </P>
    </div>
  ),

  team: () => (
    <div>
      <H1>Team</H1>
      <P> <a href="https://x.com/Dhanush_devx" target="_blank" rel="noopener noreferrer"
          style={{ color: CYAN, textDecoration: "underline" }} >
          Dhanush </a>{" "} - Founder of StellarProof
      </P>
    </div>
  ),

  faq: () => (
    <div>
      <H1>FAQ</H1>
      {[
        ["Does SumSub already have reusable KYC?", "SumSub's reusable KYC only works within their own provider network. If Anchor A uses SumSub and Anchor B uses Smile ID, reuse breaks. StellarProof works across any KYC provider."],
        ["What if users lose their wallet or device?", "The credential can be re-issued by the original KYC provider. StellarProof never held it, so there's nothing to 'recover' from our side."],
        ["How do regulated anchors store records?", "The KYC provider who performed the original verification retains the compliance copy under their own regulatory obligations. Anchors receive proof of verification via StellarProof's audit log — never raw documents."],
        ["Can StellarProof be subpoenaed for user data?", "StellarProof never holds identity data, credentials, or PII. Our servers store only public information — approved issuers and revocation hashes. There is no user data to produce."],
        ["Does StellarProof perform AML compliance?", "No. StellarProof provides reusable verification evidence and consent infrastructure. Final AML/KYC decisions remain the responsibility of each participating anchor."],
      ].map(([q, a], i) => (
        <FAQItem key={i} q={q} a={a} />
      ))}
    </div>
  ),
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          textAlign: "left",
        }}
      >
        <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{q}</span>
        <span style={{ color: CYAN, fontSize: 18, marginLeft: 16, flexShrink: 0 }}>{open ? "-" : "+"}</span>
      </button>
      {open && (
        <p
          style={{
            color: MUTED,
            fontSize: 14,
            lineHeight: 1.8,
            marginTop: 12,
            marginBottom: 0,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

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
        <div style={{ fontSize: 12, color: CYAN, fontWeight: 600, marginBottom: 8 }}>
          Status
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: TEXT }}>
          Building on Stellar ecosystem
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
          <img src="/stellarproof-logo.svg" alt="StellarProof" style={{ height: 32, width: "auto" }} />
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
                borderLeft: active === n.id ? `3px solid ${CYAN}` : "3px solid transparent",
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

        <div style={{ padding: "clamp(20px, 5vw, 48px) clamp(16px, 5vw, 64px)", maxWidth: 900 }}>
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
