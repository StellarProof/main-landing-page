import { DocH1, DocLead, DocP, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Architecture — StellarProof Docs" };

export default function ArchitecturePage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "architecture");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Architecture</DocH1>
      <DocLead>
        StellarProof sits between KYC providers and Stellar anchors as consent and verification
        infrastructure.
      </DocLead>

      <DocP>
        Think of it as CKYC for the Stellar ecosystem: verify once, and every anchor routes
        through consent back to the credential in the user&apos;s own wallet.
      </DocP>
      <DocP>
        StellarProof&apos;s servers never hold identity data. Credentials are issued by KYC
        providers directly to the user&apos;s wallet. StellarProof stores only public,
        non-PII data: approved-issuer public keys, revocation hashes, and consent logs. There
        is no central database of user information to breach.
      </DocP>
      <DocCallout type="info">
        <strong>Phase 1 (live):</strong> KYC providers issue signed verifiable credentials
        directly to the user&apos;s wallet. StellarProof orchestrates consent between anchors
        and the wallet.
        <br />
        <br />
        <strong>Phase 2 (roadmap):</strong> Full zero-knowledge proof verification on-chain via
        Soroban, using Stellar&apos;s native BN254/Poseidon support (Protocol 25). Anchors verify
        predicates (&quot;verified, not sanctioned, over 18&quot;) without any party ever seeing
        the underlying document.
      </DocCallout>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
