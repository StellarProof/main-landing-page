import { DocH1, DocLead, DocP, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Security Model — StellarProof Docs" };

export default function SecurityModelPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "security-model");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Security Model</DocH1>
      <DocLead>
        StellarProof is designed so that a breach of our servers exposes nothing useful —
        because our servers never hold identity data in the first place.
      </DocLead>

      <DocP>
        Credentials live exclusively in the user&apos;s own wallet, issued directly by the KYC
        provider. StellarProof&apos;s infrastructure stores only public information: which
        issuers are approved, which credentials have been revoked, and consent audit logs.
        There are no encrypted blobs, no central store, no server-side copies of user data —
        nothing to decrypt, exfiltrate, or compel.
      </DocP>
      <DocP>
        For anchors, the audit log is append-only and cannot be modified or deleted. Every
        verification event is timestamped and tamper-evident. Your compliance team has a
        permanent record proving that verification occurred — without ever holding a single
        raw document.
      </DocP>
      <DocCallout type="info">
        <strong>Phase 2 (roadmap):</strong> With zero-knowledge proofs on Soroban, even the
        yes/no result becomes trustless — anchors verify a cryptographic proof on-chain without
        any party, including StellarProof, ever seeing the underlying data.
      </DocCallout>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
