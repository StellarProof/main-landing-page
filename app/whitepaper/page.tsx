// Drop-in for: main-landing-page/app/whitepaper/page.tsx
//
// Self-contained: same colour tokens, typography and navigation shell as
// app/about-us/page.tsx, so it can be pasted in without touching anything else
// in the landing repo.

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
  { id: "abstract", label: "Abstract" },
  { id: "problem", label: "1. The Re-Verification Tax" },
  { id: "threat", label: "2. Goals & Threat Model" },
  { id: "protocol", label: "3. Protocol" },
  { id: "circuit", label: "4. Credential & Circuit" },
  { id: "unlink", label: "5. Unlinkability & Revocation" },
  { id: "onchain", label: "6. On-Chain Verification" },
  { id: "evaluation", label: "7. Evaluation" },
  { id: "integration", label: "8. Integration & Compliance" },
  { id: "status", label: "9. Status & Path to Mainnet" },
] as const;

type NavId = (typeof nav)[number]["id"];

/* ------------------------------------------------------------------ atoms */

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
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
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

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3
    style={{
      fontSize: "clamp(14px, 2.4vw, 17px)",
      fontWeight: 700,
      color: CYAN,
      margin: "24px 0 8px",
      fontFamily: "'Trebuchet MS', sans-serif",
    }}
  >
    {children}
  </h3>
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

const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ fontWeight: 600, color: TEXT, marginBottom: 4 }}>
      <span style={{ color: CYAN, marginRight: 8 }}>{`${n}.`}</span>
      {title}
    </div>
    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const Table = ({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) => (
  <div style={{ overflowX: "auto", margin: "16px 0" }}>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 14,
        minWidth: 380,
      }}
    >
      <thead>
        <tr>
          {head.map((h) => (
            <th
              key={h}
              style={{
                textAlign: "left",
                padding: "10px 12px",
                borderBottom: `1px solid ${BORDER}`,
                color: CYAN,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((cell, j) => (
              <td
                key={j}
                style={{
                  padding: "10px 12px",
                  borderBottom: `1px solid ${BORDER}44`,
                  color: j === 0 ? TEXT : MUTED,
                  lineHeight: 1.6,
                  verticalAlign: "top",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Mono = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: "'Fira Code', monospace",
      fontSize: 12,
      color: TEXT,
      overflowWrap: "anywhere",
    }}
  >
    {children}
  </span>
);

/* --------------------------------------------------------------- sections */

const sections: Record<NavId, () => React.ReactElement> = {
  abstract: () => (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Tag>Whitepaper v1.0</Tag>
        <Tag color={GREEN}>Live on Stellar testnet</Tag>
        <Tag color="#F59E0B">August 2026</Tag>
      </div>
      <H1>Reusable Zero-Knowledge KYC for Stellar Anchors</H1>

      <H2>Abstract</H2>
      <P>
        Every Stellar anchor independently re-verifies users who have already been
        verified elsewhere on the same network. The user re-uploads the same
        document; the anchor pays for the same check; a further copy of the same
        passport comes to rest in a further database.
      </P>
      <P>
        StellarProof removes the repetition without centralising the data. A user
        verifies once with a licensed KYC provider and receives a credential that
        lives in their own wallet. At every subsequent anchor the wallet generates
        a Groth16 zero-knowledge proof asserting only the facts that anchor is
        legally required to establish — age, jurisdiction, document validity,
        non-revocation — and a Soroban contract verifies that proof on-chain. No
        document, date of birth or name is transmitted, and no server holds a
        credential that could be breached.
      </P>
      <P>
        The system is deployed and operating on Stellar testnet. On-chain
        verification consumes 28,356,490 CPU instructions against a network limit
        of 100,000,000, and costs 30,600 stroops — <strong>0.00306 XLM</strong>, a
        fraction of a US cent — against roughly a dollar for a repeat KYC check.
      </P>

      <H2>Verify these claims yourself</H2>
      <P>
        Nothing in this paper needs to be taken on trust. Every quantitative claim
        is reproducible from the source repository.
      </P>
      <Table
        head={["Claim", "Where to check it"]}
        rows={[
          [
            "ZK Verifier is deployed and live",
            <Mono key="a">CAUQOEHFNJSXTWGX757OYEQLDGFNFF3EBO4OVLPRIWKPX5UPSFTOZNMM</Mono>,
          ],
          [
            "Issuer Registry",
            <Mono key="b">CCXOW2TLO4VQSQKKVEXQEB2SREEA2VKML7R3GIC2O2DVGKBHUYWFWUDY</Mono>,
          ],
          [
            "Revocation Registry",
            <Mono key="c">CBAHY6ZIY5OUAJN4KDI4O3ENBM3CJ3THIM6OCE32AOVZFCKYJJQVHOFS</Mono>,
          ],
          [
            "The issuer stores no personal data",
            <>
              <Code>apps/issuer/test/no-pii.test.mjs</Code> — runs a real issuance
              and fails if any attribute reaches storage
            </>,
          ],
          [
            "Verification cost",
            <>
              <Code>contracts/zk-verifier/src/test.rs</Code>, measured with{" "}
              <Code>budget().reset_default()</Code>
            </>,
          ],
          [
            "The circuit does what section 4 says",
            <>
              <Code>circuits/test/</Code> — witness tests for each of the six
              assertions
            </>,
          ],
          [
            "The whole flow works end to end",
            <>
              <Code>node scripts/e2e.mjs</Code> — 12 checks against the deployed
              contracts above
            </>,
          ],
        ]}
      />
      <Callout type="success">
        All contract addresses are on Stellar <strong>testnet</strong> and can be
        inspected on stellar.expert without any permission from us.
      </Callout>
    </div>
  ),

  problem: () => (
    <div>
      <H1>1. The Re-Verification Tax</H1>

      <H2>1.1 The problem</H2>
      <P>
        Stellar&apos;s anchor model distributes on- and off-ramps across many
        operators in many jurisdictions. That distribution is the network&apos;s
        strength, and it is also why identity is expensive: each anchor carries its
        own regulatory obligation, so each anchor runs its own KYC stack — one
        integrating SumSub, the next Onfido, the next Veriff.
      </P>
      <P>
        A user who wants to use three anchors uploads the same passport three times
        and waits three times. Three separate companies now store an image of their
        face and their document number.
      </P>
      <Block>{`Without StellarProof:
  User → Anchor A   Upload passport, ID, selfie. Wait 1–3 days. ✓  (~$1)
  User → Anchor B   Upload passport, ID, selfie. Wait 1–3 days. ✓  (~$1)
  User → Anchor C   Upload passport, ID, selfie. Wait 1–3 days. ✓  (~$1)

  One person. One passport. One face.
  Three checks paid for. Three databases holding the documents.`}</Block>
      <P>
        The cost lands on both sides. Anchors pay a per-check fee — vendor list
        pricing for a full identity check with liveness typically falls in the{" "}
        <strong>$1–3</strong> range — and pay it again for users who abandon
        halfway. Industry estimates of KYC abandonment in crypto and fintech
        onboarding commonly fall between <strong>40% and 60%</strong>; we treat
        that as an estimate rather than a measurement, because we have not yet
        measured it ourselves.
      </P>
      <P>
        What is not in dispute is the direction: a user who has already proved who
        they are, to a licensed provider, on the same network, is being asked to do
        it again from scratch.
      </P>

      <H2>1.2 Why this has not already been solved</H2>
      <P>
        The goal is not new. SEP-12 — Stellar&apos;s KYC API standard — is explicit
        that a customer should be able to supply their KYC information once and
        have it serve across services rather than re-entering it manually. The
        standard describes the interface. It does not supply the infrastructure
        that would make reuse safe: something that lets anchor B rely on the
        verification anchor A performed, without anchor A becoming a bottleneck,
        without B trusting A&apos;s judgement, and without a central operator
        accumulating the identity data of the whole network.
      </P>
      <P>
        Three approaches have been tried elsewhere, and each fails on one of those
        axes:
      </P>
      <Table
        head={["Approach", "Why it fails"]}
        rows={[
          [
            "Shared KYC database",
            "Reuse works, but the operator becomes a single point of both breach and compulsion, holding a dataset attractive enough to guarantee it is attacked.",
          ],
          [
            "Bilateral sharing between anchors",
            "Every pair needs a legal agreement, and personal data still travels.",
          ],
          [
            "Attestation registry keyed to an address",
            "The address becomes a stable identifier that links a user's activity across every anchor they touch.",
          ],
        ]}
      />
      <Callout type="info">
        StellarProof takes the fourth path: <strong>the credential never leaves
        the user</strong>, and what the anchor receives is a proof rather than
        data.
      </Callout>
    </div>
  ),

  threat: () => (
    <div>
      <H1>2. Design Goals and Threat Model</H1>

      <H2>2.1 Parties</H2>
      <Table
        head={["Party", "Role", "Trusted for"]}
        rows={[
          [
            "Holder",
            "The user. Runs the wallet, holds the credential, generates proofs.",
            "Nothing. All holder claims are proved.",
          ],
          [
            "KYC provider",
            "Licensed identity verifier (Didit). Performs the real document and liveness check.",
            "Correctness of the underlying identity check. Retains the compliance copy under its own regulatory obligations.",
          ],
          [
            "Issuer",
            "StellarProof's issuance service. Turns a provider decision into a signed credential.",
            "Signing only credentials backed by an approved decision. Not trusted with confidentiality — it is designed to hold nothing worth stealing.",
          ],
          [
            "Anchor",
            "The relying party with the KYC obligation.",
            "Its own compliance decision. Verifies proofs; is never given data.",
          ],
        ]}
      />

      <H2>2.2 Goals</H2>
      <Step n={1} title="Verify once, reuse everywhere">
        A credential issued once satisfies any anchor whose policy the
        holder&apos;s attributes actually meet.
      </Step>
      <Step n={2} title="Selective disclosure">
        An anchor learns the truth of a predicate — &quot;at least 18&quot;,
        &quot;resident in Brazil&quot;, &quot;document unexpired&quot;, &quot;not
        revoked&quot; — and nothing else.
      </Step>
      <Step n={3} title="Unlinkability across anchors">
        Two anchors that collude cannot determine they have seen the same person.
      </Step>
      <Step n={4} title="Sybil resistance within an anchor">
        One human cannot open unlimited accounts at a single anchor.
      </Step>
      <Step n={5} title="No honeypot">
        Compromising StellarProof&apos;s servers must not yield personal data,
        because they must not hold any.
      </Step>
      <Step n={6} title="Revocation that works">
        A revoked credential must stop verifying — promptly, and without the
        revocation mechanism itself becoming a tracking channel.
      </Step>

      <H2>2.3 Adversaries</H2>
      <Table
        head={["Adversary", "Capability", "Defence"]}
        rows={[
          [
            "The curious issuer",
            "StellarProof itself, attempting to track holders across anchors.",
            <>
              The issuer never learns the holder&apos;s <Code>secret</Code>, only{" "}
              <Code>Poseidon(secret)</Code>, so it cannot derive any nullifier.
              See section 4.2.
            </>,
          ],
          [
            "Colluding anchors",
            "Two or more anchors pooling everything they received, attempting to identify a common user.",
            "The credential commitment is deliberately not a public input, and nullifiers are anchor-scoped, so the two anchors hold no value in common. See section 5.1.",
          ],
          [
            "The breached server",
            "An attacker with full read access to the issuer's disk and database.",
            "The database contains field elements that look like random 256-bit numbers, plus ciphertext sealed to keys the issuer does not possess. See section 3.3.",
          ],
          [
            "A dishonest holder",
            "Proving a predicate their attributes do not satisfy, replaying a revoked credential, or forging a credential.",
            "Circuit soundness (section 4) and the six ordered on-chain checks (section 6.2), given a trustworthy setup — see section 9.2 for the honest state of that assumption today.",
          ],
        ]}
      />
      <Callout type="warning">
        <strong>Explicitly out of scope:</strong> a malicious KYC provider issuing
        decisions for people who do not exist. That is the licensed
        provider&apos;s regulated responsibility, and no cryptography downstream of
        it can compensate for it.
      </Callout>
    </div>
  ),

  protocol: () => (
    <div>
      <H1>3. Protocol</H1>

      <H2>3.1 The one trust boundary that matters</H2>
      <Block>{`┌─ OFF-CHAIN ─────────────────────┐    ┌─ ON-CHAIN (Soroban) ──────────┐
│                                 │    │                               │
│  Didit  ──webhook(PII)──►  ①    │    │  ③ Issuer Registry            │
│  (licensed KYC)         Issuer  │───►│     approved issuer pubkeys   │
│                         Service │reg │                               │
│                            │    │    │  ④ Revocation Registry        │
│                     sealed │    │    │     current SMT root          │
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
        Personal data crosses exactly one edge in this diagram: Didit → Issuer, in
        memory, once. Everything downstream of that edge is commitments,
        ciphertext and proofs.
      </Callout>

      <H2>3.2 Enrolment</H2>
      <P>
        The holder connects a Stellar wallet (Freighter) and signs one
        deterministic message. That signature is expanded through HKDF-SHA256 into
        three values that never leave the device: the circuit{" "}
        <Code>secret</Code>, an AES-GCM vault key for local credential storage,
        and an X25519 keypair for sealed credential delivery.
      </P>
      <P>
        Deriving all three from the wallet signature means the credential is
        recoverable on any device from the same wallet, with no separate account,
        password or backup phrase. The holder then authenticates over{" "}
        <strong>SEP-10</strong> — signing a challenge transaction to prove control
        of the account — and receives a short-lived JWT.
      </P>

      <H2>3.3 Issuance</H2>
      <P>
        The wallet asks the issuer to start a verification session, sending only{" "}
        <Code>Poseidon(secret)</Code> and its X25519 public key. It never sends{" "}
        <Code>secret</Code>.
      </P>
      <P>
        The holder completes a real KYC check with Didit. Didit fires an
        HMAC-signed webhook at the issuer service, which:
      </P>
      <Step n={1} title="Verifies the signature">
        Canonical-JSON <Code>X-Signature-V2</Code>, constant-time comparison, a
        300-second timestamp window, and <Code>event_id</Code> idempotency.
      </Step>
      <Step n={2} title="Reads exactly three attributes, in memory">
        Date of birth, document expiry, issuing state. The rest of the payload is
        ignored and never copied.
      </Step>
      <Step n={3} title="Builds the Poseidon commitment and signs it">
        EdDSA over the BabyJubjub curve, using the issuer&apos;s registered key.
      </Step>
      <Step n={4} title="Seals the credential to the holder">
        XChaCha20-Poly1305 under the holder&apos;s X25519 public key.
      </Step>
      <Step n={5} title="Persists only the ciphertext, and discards the attributes">
        The plaintext attributes exist only inside one function scope and are never
        written anywhere.
      </Step>
      <P>
        The wallet fetches the sealed blob, decrypts it locally, and stores it in
        IndexedDB under the AES-GCM vault key.
      </P>
      <Callout type="success">
        The claim that nothing personal is persisted is{" "}
        <strong>mechanically checked rather than asserted</strong>.{" "}
        <Code>apps/issuer/test/no-pii.test.mjs</Code> runs a genuine issuance and
        fails if any attribute value reaches storage. Every column in the issuer
        database is non-identifying: session identifiers, field elements that look
        like random 256-bit numbers, and ciphertext sealed to a key the issuer does
        not hold.
      </Callout>

      <H2>3.4 Presentation</H2>
      <P>
        An anchor opens the wallet with its policy in the query string. The wallet
        displays exactly what will be proved and, critically,{" "}
        <strong>which origin will receive it</strong> — resolved from{" "}
        <Code>document.referrer</Code>, which the opener cannot forge.
      </P>
      <P>
        On approval, a Groth16 proof is generated in a Web Worker on the
        holder&apos;s device: 2–4 seconds in-browser, 1.1 seconds in Node. The
        wallet posts it to that exact origin and no other. The anchor accepts
        messages only from the wallet origin it opened, and validates the payload
        shape before acting on it.
      </P>

      <H2>3.5 Verification</H2>
      <P>
        The anchor&apos;s backend runs a free local snarkjs check first —
        single-digit milliseconds, catching malformed or non-satisfying proofs
        before spending a transaction — then submits{" "}
        <Code>verify_and_record</Code> on-chain. The on-chain call is what is
        authoritative, because it alone can detect a <strong>reused
        nullifier</strong>; a local check cannot.
      </P>
      <P>
        The contract emits a compliance event carrying the SHA-256 hash of the
        proof. The anchor&apos;s audit trail is that event: an append-only,
        timestamped, publicly verifiable record that a verification of a specific
        policy occurred — containing no personal data at all.
      </P>
    </div>
  ),

  circuit: () => (
    <div>
      <H1>4. Credential and Circuit</H1>

      <H2>4.1 Construction</H2>
      <Block>{`secretHash = Poseidon(secret)
commitment = Poseidon(dobDays, docExpiryDays, countryCode,
                      secretHash, salt, revocationNonce)
nullifier  = Poseidon(secret, anchorId)`}</Block>
      <P>
        Dates are represented as days since the Unix epoch.{" "}
        <Code>countryCode</Code> is ISO 3166-1 numeric. <Code>salt</Code> is
        issuer-chosen and blinds the commitment. <Code>revocationNonce</Code> is a
        private per-credential handle, described in section 5.2.
      </P>

      <H2>4.2 Why the commitment binds the hash of the secret</H2>
      <P>
        This is the single most consequential decision in the design. The
        commitment binds <Code>Poseidon(secret)</Code> — never{" "}
        <Code>secret</Code> itself. The holder transmits only the hash at
        enrolment.
      </P>
      <Callout type="info">
        If the issuer knew <Code>secret</Code>, it could compute{" "}
        <Code>Poseidon(secret, anchorId)</Code> for every anchor on the network and
        thereby follow the holder everywhere. Binding the hash instead lets the
        issuer bind a credential to a specific holder — the circuit proves the
        holder knows the preimage — while making it{" "}
        <strong>cryptographically incapable of tracking that holder
        afterwards</strong>.
      </Callout>

      <H2>4.3 The circuit</H2>
      <P>
        Groth16 over BN254, implemented in Circom:{" "}
        <strong>20,998 constraints</strong>, 8 public inputs, revocation tree depth
        16.
      </P>
      <H3>Public inputs</H3>
      <P>
        The order is load-bearing: snarkjs emits public signals in the order
        declared by <Code>component main {"{public [...]}"}</Code>, and the
        verifier contract rebuilds the vector in that same order.
      </P>
      <Table
        head={["#", "Signal", "Type"]}
        rows={[
          ["0", <Code key="0">issuerAx</Code>, "field element"],
          ["1", <Code key="1">issuerAy</Code>, "field element"],
          ["2", <Code key="2">revocationRoot</Code>, "field element"],
          ["3", <Code key="3">nullifier</Code>, "field element"],
          ["4", <Code key="4">anchorId</Code>, "u64"],
          ["5", <Code key="5">nowDays</Code>, "u64 (days since Unix epoch)"],
          ["6", <Code key="6">minAgeDays</Code>, "u64"],
          ["7", <Code key="7">allowedCountry</Code>, "u64 (ISO 3166-1 numeric)"],
        ]}
      />
      <H3>Private witness</H3>
      <P>
        <Code>dobDays</Code>, <Code>docExpiryDays</Code>,{" "}
        <Code>countryCode</Code>, <Code>secret</Code>, <Code>salt</Code>,{" "}
        <Code>revocationNonce</Code>, the EdDSA signature{" "}
        <Code>(sigR8x, sigR8y, sigS)</Code>, and the 16-element SMT non-membership
        path.
      </P>
      <H3>Assertions</H3>
      <Block>{`1.  EdDSA-BabyJubjub signature over the commitment
      verifies under (issuerAx, issuerAy)
2.  dobDays + minAgeDays  <=  nowDays
3.  nowDays               <=  docExpiryDays
4.  countryCode           ==  allowedCountry
5.  nullifier             ==  Poseidon(secret, anchorId)
6.  revocationNonce is NOT a member of the tree
      rooted at revocationRoot`}</Block>

      <H2>4.4 Two soundness details worth stating</H2>
      <H3>Range constraints</H3>
      <P>
        Every date and duration is constrained to 32 bits. Without this, the age
        comparison could be satisfied by field wraparound: an attacker picks a{" "}
        <Code>dobDays</Code> so large that the arithmetic wraps and the comparator
        is satisfied by a value that is not, in the integers, what it appears to
        be.
      </P>
      <H3>Addition, not subtraction</H3>
      <P>
        The age predicate is expressed as{" "}
        <Code>dobDays + minAgeDays &lt;= nowDays</Code> rather than{" "}
        <Code>nowDays - dobDays &gt;= minAgeDays</Code>. Circom arithmetic is
        modular; a subtraction that would be negative over the integers instead
        produces an enormous field element, which a comparator will happily report
        as &quot;large enough&quot;. Keeping both operands positive keeps the
        comparator sound.
      </P>
      <Callout type="warning">
        This class of bug is easy to write and invisible in testing, because it
        only manifests for inputs a well-behaved holder never supplies.
      </Callout>
    </div>
  ),

  unlink: () => (
    <div>
      <H1>5. Unlinkability and Revocation</H1>

      <H2>5.1 Per-anchor nullifiers</H2>
      <P>
        Each anchor receives <Code>Poseidon(secret, anchorId)</Code>.
      </P>
      <P>
        Because <Code>secret</Code> is fixed for a holder, this value is{" "}
        <strong>stable at one anchor</strong> — the same person returning gets the
        same nullifier, and the contract&apos;s nullifier registry makes
        one-human-one-account enforceable.
      </P>
      <P>
        Because <Code>anchorId</Code> is mixed in, the value is{" "}
        <strong>different at every anchor</strong>, and Poseidon&apos;s preimage
        resistance means two anchors comparing their nullifier sets learn nothing.
      </P>
      <Callout type="info">
        The commitment would have broken this — it is identical at every anchor,
        and any scheme that reveals it hands colluding anchors a perfect join key.
        It is therefore <strong>not</strong> a public input. It never leaves the
        holder&apos;s device.
      </Callout>

      <H2>5.2 Revocation without a tracking channel</H2>
      <P>
        Revocation is normally where privacy designs quietly fail. The obvious
        construction — publish a list of revoked credential identifiers, have the
        holder prove theirs is absent — requires a stable public identifier per
        credential, which is exactly what section 5.1 exists to avoid.
      </P>
      <P>
        StellarProof uses a <strong>Sparse Merkle Tree of revoked nonces</strong>{" "}
        and proves <strong>non</strong>-membership. The nonce is private; only the
        tree root is public and on-chain. A valid credential therefore reveals no
        stable identifier at all, and revoking one is a root update that says
        nothing about who was revoked.
      </P>
      <H3>The witness-request leak</H3>
      <P>
        A holder needs a non-membership witness before proving. The efficient
        design is an endpoint answering &quot;give me a witness for nonce X&quot; —
        and that endpoint tells the issuer precisely which credential is about to
        be used, reintroducing the correlation the whole design exists to prevent.
      </P>
      <P>
        StellarProof therefore serves the <em>entire</em> revoked-nonce list at{" "}
        <Code>/revocation/list</Code>, and the wallet rebuilds the tree and derives
        its own witness offline. This costs bandwidth and buys the property. It
        needs pagination or a dedicated witness service as the list grows; see
        section 9.2.
      </P>

      <H2>5.3 Root freshness is enforced on-chain</H2>
      <P>
        A revocation scheme is only as good as its freshness guarantee. If a holder
        could prove against a stale root, revocation would be advisory. The
        verifier contract therefore checks that the{" "}
        <Code>revocationRoot</Code> in the proof matches the{" "}
        <strong>current</strong> on-chain root before the pairing check runs.
      </P>
    </div>
  ),

  onchain: () => (
    <div>
      <H1>6. On-Chain Verification</H1>

      <H2>6.1 Three contracts</H2>
      <P>
        Soroban, Rust, <Code>soroban-sdk 27.0.5</Code>, using the native BN254 host
        functions introduced by <strong>CAP-0074</strong> in Protocol 25:{" "}
        <Code>g1_msm</Code>, <Code>g1_add</Code>, <Code>pairing_check</Code>.
      </P>
      <Table
        head={["Contract", "Responsibility", "Testnet address"]}
        rows={[
          [
            "Issuer Registry",
            "Which issuer public keys are approved and active.",
            <Mono key="a">CCXOW2TLO4VQSQKKVEXQEB2SREEA2VKML7R3GIC2O2DVGKBHUYWFWUDY</Mono>,
          ],
          [
            "Revocation Registry",
            "The current SMT root per issuer. Rejects no-op updates.",
            <Mono key="b">CBAHY6ZIY5OUAJN4KDI4O3ENBM3CJ3THIM6OCE32AOVZFCKYJJQVHOFS</Mono>,
          ],
          [
            "ZK Verifier",
            "Groth16 pairing check, nullifier registry, compliance records.",
            <Mono key="c">CAUQOEHFNJSXTWGX757OYEQLDGFNFF3EBO4OVLPRIWKPX5UPSFTOZNMM</Mono>,
          ],
        ]}
      />
      <Callout type="info">
        CAP-0075&apos;s Poseidon host functions are deliberately{" "}
        <strong>not</strong> used. They sit under <Code>CryptoHazmat</Code> and
        require passing roughly 6.5 KB of round constants per call. Poseidon runs
        inside the circuit instead, where it is already paid for.
      </Callout>

      <H2>6.2 What verify_and_record checks, in order</H2>
      <Step n={1} title="Issuer is registered and active">
        The issuer key carried in the proof must belong to an active registered
        issuer.
      </Step>
      <Step n={2} title="Revocation root is current">
        Otherwise a holder could keep proving under an old root and revocation
        would be unenforceable.
      </Step>
      <Step n={3} title="nowDays is within one day of ledger time">
        Otherwise a holder could assert a historical date and prove against an
        expired document.
      </Step>
      <Step n={4} title="Nullifier has not already been used at this anchor">
        This is the check a local verification cannot perform, and the reason
        on-chain verification is authoritative.
      </Step>
      <Step n={5} title="Groth16 pairing check succeeds">
        The expensive operation, deliberately placed last.
      </Step>
      <Step n={6} title="Record and emit">
        The nullifier is recorded and a <Code>verified</Code> event is emitted,
        carrying the SHA-256 proof hash.
      </Step>
      <P>
        The ordering is deliberate: every cheap check that can reject runs before
        the expensive pairing operation.
      </P>
      <Callout type="warning">
        Proof element <Code>A</Code> is negated <strong>inside</strong> the
        contract, never accepted pre-negated from the caller. A verifier that
        trusts a caller-supplied <Code>-A</Code> is trusting the caller with part
        of the equation it is meant to be checking.
      </Callout>

      <H2>6.3 An implementation trap worth publishing</H2>
      <P>BN254 points are encoded for Soroban as:</P>
      <Block>{`G1  = be(X) || be(Y)                                (64 bytes)
G2  = be(X_c1) || be(X_c0) || be(Y_c1) || be(Y_c0)  (128 bytes)`}</Block>
      <P>
        snarkjs stores G2 coordinates as <Code>[c0, c1]</Code> — so{" "}
        <strong>the pairs must be swapped</strong>. Getting this wrong produces a
        proof that fails verification with no other diagnostic signal whatsoever:
        valid inputs, valid curve points, correct arithmetic, <Code>false</Code>.
        We implemented the encoding twice independently and cross-check the two
        against each other in <Code>packages/sdk/test/encoding.test.mjs</Code>.
      </P>
      <P>
        One further behavioural note for integrators: a proof carrying a point that
        is <strong>not on the BN254 curve</strong> is rejected by the host itself,
        which <em>traps</em> rather than returning <Code>false</Code>. Both
        outcomes are rejections, but only the pairing failure is catchable.
      </P>
    </div>
  ),

  evaluation: () => (
    <div>
      <H1>7. Evaluation</H1>
      <P>
        All figures measured against Stellar testnet running Protocol 27.
      </P>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 16,
          margin: "16px 0 24px",
        }}
      >
        {[
          { val: "0.00306 XLM", label: "Fee per on-chain verification" },
          { val: "28.4M", label: "CPU instructions (limit 100M)" },
          { val: "2–4 s", label: "Proof generation in browser" },
          { val: "20,998", label: "Circuit constraints" },
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

      <Table
        head={["Metric", "Value"]}
        rows={[
          [
            "On-chain verification",
            "28,356,490 CPU instructions (network limit 100,000,000)",
          ],
          ["Memory", "336,757 bytes"],
          ["Fee per verification", "30,600 stroops = 0.00306 XLM"],
          ["Verifier contract size", "10,921 bytes Wasm"],
          ["Proof generation", "1.1 s (Node) · 2–4 s (browser)"],
          ["Local verification", "single-digit milliseconds, free"],
          ["Circuit", "20,998 constraints, 8 public inputs"],
          ["Proving key", "9.9 MB, fetched once and cached"],
        ]}
      />

      <H2>7.1 The cost argument</H2>
      <P>
        A repeat identity check costs an anchor on the order of a dollar. An
        on-chain StellarProof verification costs 0.00306 XLM — under a hundredth of
        a US cent at any plausible XLM price. That is a difference of roughly four
        orders of magnitude, and it is the reason this is infrastructure rather
        than a feature: at this price,{" "}
        <strong>checking is cheaper than caching the result of a check</strong>.
      </P>

      <H2>7.2 Headroom</H2>
      <P>
        Groth16 verification cost depends on the <strong>number of public
        inputs</strong>, not on circuit size. The pairing check is fixed work; the
        only variable term is the multi-scalar multiplication over the public-input
        vector. Adding predicates to the circuit therefore does not move the 28.4M
        figure, so long as the count of public inputs stays at eight. Practically:
        richer policies are close to free on-chain, and cost only proving time on
        the holder&apos;s device.
      </P>
      <P>
        At 28.4M instructions against a 100M limit, there is also room for the
        verification to sit inside a larger transaction alongside the anchor&apos;s
        own logic.
      </P>

      <H2>7.3 Measurement caveat</H2>
      <Callout type="warning">
        Local cost measurement requires <Code>budget().reset_default()</Code>{" "}
        before the call. <Code>reset_unlimited()</Code> switches metering{" "}
        <strong>off</strong> entirely, so any figure read after it is meaningless.
        During development this produced a plausible-looking 94,535 instruction
        reading that was pure artefact. We record it here because the failure mode
        is silent and the wrong number is flattering.
      </Callout>
    </div>
  ),

  integration: () => (
    <div>
      <H1>8. Integration and Compliance</H1>

      <H2>8.1 What an anchor installs</H2>
      <Block>{`import { StellarProof } from "@stellarproof/sdk";

const sp = new StellarProof({
  rpcUrl: "https://soroban-testnet.stellar.org",
  networkPassphrase: Networks.TESTNET,
  verifierContractId: "CAUQOEHF…",
  anchorId: 2,
  verificationKey,          // enables the instant local pre-check
});

const request = sp.requestProof({ minAgeYears: 18, allowedCountry: 76 });
// … wallet returns { proof, publicSignals, issuerId } …
const result = await sp.verify(response, { signer, request });
if (result.ok) grantAccess(result.record);`}</Block>
      <Table
        head={["Method", "Purpose"]}
        rows={[
          [
            <Code key="a">requestProof(opts)</Code>,
            "Build the policy; converts years to circuit day units.",
          ],
          [
            <Code key="b">checkAgainstRequest(res, req)</Code>,
            "Reject anchor/age/country/date mismatch before spending a transaction.",
          ],
          [
            <Code key="c">verifyLocally(res)</Code>,
            "snarkjs check — free, fast, cannot detect a reused nullifier.",
          ],
          [
            <Code key="d">verify(res, {"{signer, request}"})</Code>,
            "Authoritative: verify and record on-chain.",
          ],
          [
            <Code key="e">isVerified(nullifier, reader)</Code>,
            "Has this holder already verified here.",
          ],
          [
            <Code key="f">compliance(nullifier, reader)</Code>,
            "Read back the recorded decision.",
          ],
        ]}
      />
      <P>
        Verification belongs server-side. A browser can simply skip it.
      </P>

      <H2>8.2 The anchor never chooses its own bar</H2>
      <Callout type="warning">
        The demo anchor&apos;s <Code>/verify</Code> endpoint rebuilds the policy
        server-side and deliberately ignores any client-supplied policy. A caller
        able to specify the policy could specify one their proof already satisfies,
        which reduces the entire system to theatre. This is stated here because it
        is the most likely way for an integrator to accidentally undo the
        guarantees.
      </Callout>

      <H2>8.3 Regulatory positioning</H2>
      <P>
        StellarProof is verification infrastructure. It is not a regulated
        compliance decision-maker, it does not perform AML screening on its own
        account, and it does not replace any anchor&apos;s KYC/AML programme.
      </P>
      <P>
        The compliance copy of the underlying documents stays with the{" "}
        <strong>licensed KYC provider</strong> that performed the original
        verification, under that provider&apos;s existing regulatory obligations. A
        subpoena for the underlying documents goes to them. A subpoena served on
        StellarProof produces approved-issuer public keys and revocation roots —
        public data, identifying nobody.
      </P>
      <P>
        For the anchor, the obligation is served by the on-chain compliance record:
        an append-only, timestamped, tamper-evident proof that a verification of a
        stated policy occurred, by a named registered issuer, at a known time. The
        anchor never held the raw documents, and therefore cannot be compelled to
        produce them, cannot lose them, and does not have to secure them. This
        reduces regulatory surface area rather than adding to it.
      </P>
      <P>
        Final AML and KYC decisions remain with each anchor&apos;s compliance team.
      </P>
    </div>
  ),

  status: () => (
    <div>
      <H1>9. Status and Path to Mainnet</H1>

      <H2>9.1 What is deployed</H2>
      <P>
        A complete working system on Stellar testnet: circuit, three Soroban
        contracts, issuer service integrated with Didit, holder wallet PWA, anchor
        SDK, and a demo anchor exercising the whole flow.{" "}
        <strong>75 unit and integration tests</strong>, plus{" "}
        <strong>12 end-to-end checks</strong> against the deployed contracts.
      </P>
      <P>
        Target market is <strong>South America</strong> — Brazil, Argentina,
        Colombia, Chile, Mexico, Peru — with Didit as the licensed KYC provider. An
        unsupported country is <strong>refused</strong> at issuance rather than
        silently defaulted.
      </P>

      <H2>9.2 Honest limitations</H2>
      <P>We would rather state these than have them found.</P>
      <Table
        head={["Limitation", "Detail"]}
        rows={[
          [
            "The trusted setup is a prototype ceremony",
            "Phase 1 uses the public Hermez Powers-of-Tau. Phase 2 is circuit-specific and was run with two local contributions. If every contributor to a phase-2 ceremony colludes, forged proofs become possible. This must be re-run with independent external contributors before any mainnet deployment, and we consider that blocking rather than a nice-to-have.",
          ],
          [
            "Testnet only",
            "No mainnet deployment and no production users yet. Every measurement in section 7 is real, and none of it is production load.",
          ],
          [
            "One issuer",
            "Multi-issuer federation is designed for — the registry is keyed by issuer — but not exercised.",
          ],
          [
            "The revocation list is served wholesale",
            "Correct and maximally private at prototype scale; it needs pagination or a witness service as it grows (section 5.2).",
          ],
          [
            "No third-party audit yet",
            "The circuit and contracts have not been reviewed by an external security firm. They should be before mainnet.",
          ],
        ]}
      />

      <H2>9.3 Path to mainnet</H2>
      <Step n={1} title="Multi-party phase-2 ceremony">
        Independent, publicly named contributors and published contribution hashes.
      </Step>
      <Step n={2} title="External audit">
        Of the circuit and the Soroban contracts.
      </Step>
      <Step n={3} title="Pilot integrations">
        With South American anchors on testnet, with real users and real Didit
        verifications.
      </Step>
      <Step n={4} title="Mainnet">
        Deployment, multi-issuer federation, and a scalable revocation witness
        service.
      </Step>

      <H2>Glossary</H2>
      <Table
        head={["Term", "Meaning"]}
        rows={[
          [
            "Anchor",
            "A Stellar on/off-ramp carrying regulatory KYC obligations.",
          ],
          [
            "Commitment",
            "Poseidon hash binding the holder's attributes; what the issuer signs. Never public.",
          ],
          [
            "Nullifier",
            "Poseidon(secret, anchorId). Stable at one anchor, unlinkable across anchors.",
          ],
          [
            "Revocation nonce",
            "Private per-credential handle. Revoking inserts it into the SMT.",
          ],
          [
            "SMT",
            "Sparse Merkle Tree. Holders prove non-membership, so a valid credential reveals no stable identifier.",
          ],
          [
            "SEP-10",
            "Stellar Web Authentication: prove account control by signing a challenge transaction.",
          ],
          [
            "SEP-12",
            "Stellar's KYC API standard, which describes reusable KYC as a goal.",
          ],
          [
            "CAP-0074",
            "Protocol 25 host functions for BN254 curve operations. Used.",
          ],
          [
            "CAP-0075",
            "Protocol 25 host functions for Poseidon. Deliberately not used (section 6.1).",
          ],
          [
            "Groth16",
            "A succinct zero-knowledge proof system with constant-size proofs and constant-time verification.",
          ],
        ]}
      />

      <Callout type="success">
        <strong>StellarProof — prove everything, reveal nothing.</strong>
        <br />
        Source, tests and deployment artefacts are public. Every number in this
        document is reproducible from them.
      </Callout>
    </div>
  ),
};

/* ------------------------------------------------------------------- page */

export default function WhitepaperPage() {
  const [active, setActive] = useState<NavId>("abstract");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = nav.findIndex((n) => n.id === active);

  const go = (id: NavId) => {
    setActive(id);
    setMenuOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
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
      {/* ── MOBILE TOP BAR ── */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: `${DARK}f0`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${BORDER}`,
          display: "flex",
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
              onClick={() => go(n.id)}
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
          <a href="/" aria-label="Go to homepage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stellarproof-logo.svg"
              alt="StellarProof"
              className="w-32 h-auto"
            />
          </a>
          <div
            style={{
              fontSize: 11,
              color: MUTED,
              marginTop: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Whitepaper v1.0
          </div>
        </div>
        {nav.map((n) => (
          <button
            key={n.id}
            onClick={() => go(n.id)}
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
            }}
          >
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
      <div style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>
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
                onClick={() => go(nav[activeIndex - 1].id)}
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
                onClick={() => go(nav[activeIndex + 1].id)}
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
