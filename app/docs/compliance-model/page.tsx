import { DocH1, DocLead, DocP, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Compliance Model — StellarProof Docs" };

export default function ComplianceModelPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "compliance-model");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Compliance Model</DocH1>
      <DocLead>
        StellarProof provides reusable verification evidence and consent infrastructure. Final
        AML/KYC decisions remain the responsibility of each participating anchor.
      </DocLead>

      <DocP>
        The credential lives in the user&apos;s wallet. StellarProof never holds it. A regulator
        compelling StellarProof produces only public data — approved issuers and revocation
        hashes — nothing that identifies any individual.
      </DocP>
      <DocP>
        The compliance layer sits with the licensed KYC provider who performed the original
        verification: DigiLocker, SumSub, Smile ID. They retain their compliance copy under
        their own regulatory obligations exactly as they do today. Subpoenas for underlying
        documents go to them, not to StellarProof.
      </DocP>
      <DocP>
        For anchors, the obligation is satisfied by StellarProof&apos;s audit log: a
        tamper-proof, append-only record proving that verification occurred, by which licensed
        provider, at what time, and to what risk level. You never held the raw documents. You
        cannot be compelled to produce what you never had. That reduces your regulatory surface
        area rather than adding to it.
      </DocP>
      <DocCallout type="warning">
        StellarProof does not perform AML compliance, certify or approve individuals, or replace
        any anchor&apos;s own KYC/AML program. It is verification infrastructure, not a
        regulated compliance decision-maker.
      </DocCallout>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
