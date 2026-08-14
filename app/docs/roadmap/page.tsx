import { DocH1, DocH2, DocP, DocCallout, DocStep, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Roadmap — StellarProof Docs" };

export default function RoadmapPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "roadmap");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Roadmap</DocH1>

      <DocH2>Phase 1 — Zero-Knowledge Proof Verification (Coming)</DocH2>
      <DocCallout type="info">
        Phase 1 is on our roadmap but has not shipped yet. The cryptographic primitives are
        available on Stellar mainnet; the integration work is ahead of us.
      </DocCallout>
      <DocP>
        Protocol 25 went live on Stellar mainnet in January 2026 with native BN254 and Poseidon
        support — the two cryptographic primitives needed for selective disclosure and
        zero-knowledge proof verification.
      </DocP>
      <DocP>
        Phase 1 will allow anchors to verify predicates — &quot;this person is verified, not
        sanctioned, over 18&quot; — via a Soroban smart contract, without any party (including
        StellarProof) ever seeing the underlying identity document. Proofs will be generated
        client-side on the user&apos;s device using BN254 + Poseidon, and verified trustlessly
        on-chain.
      </DocP>
      <DocStep n={1} title="Month 1 — Foundation">
        Core credential schema, ZK circuit design, issuer onboarding, wallet integration.
      </DocStep>
      <DocStep n={2} title="Month 2 — ZK Proof Layer & Consent System">
        Client-side proof generation, anchor consent flow, user approval UX, audit log
        infrastructure.
      </DocStep>
      <DocStep n={3} title="Month 3 — Security Audit & Pilots">
        Third-party security review, ZK circuit audit, pilot integrations with early anchors.
      </DocStep>
      <DocStep n={4} title="Month 4 — Launch">
        Production launch with initial anchor partners.
      </DocStep>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
