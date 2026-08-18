import {
  DocH1,
  DocLead,
  DocH2,
  DocP,
  DocBlock,
  DocTag,
  DocCallout,
  DocPrevNext,
} from "@/components/docs/doc-typography";
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
        StellarProof sits between licensed KYC providers and Stellar anchors. Verify once, and
        every anchor after that verifies a cryptographic proof generated on the user&apos;s own
        device — never a document, and never a verdict handed down by us.
      </DocLead>
      
      <DocCallout type="info">
        Personal data crosses exactly one edge in this diagram: KYC provider → Issuer, in
        memory, once. Everything downstream of that edge is commitments, ciphertext and
        proofs.
      </DocCallout>
      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
