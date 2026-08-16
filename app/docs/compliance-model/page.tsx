import { DocH1, DocLead, DocH2, DocP, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
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
        StellarProof is designed to provide reusable verification evidence and the
        infrastructure to check it. Final AML/KYC decisions will remain the responsibility
        of each participating anchor.
      </DocLead>

      <DocH2>Where the regulated copy will live</DocH2>
      <DocP>
        With the licensed KYC provider that performed the original verification Didit.
        Didit will retain the compliance copy under its own regulatory obligations, exactly
        as it does today. A subpoena for the underlying documents will go to Didit.
      </DocP>
      <DocP>
        A regulator compelling StellarProof would produce approved issuer public keys,
        revocation roots, and ciphertext StellarProof cannot decrypt. Nothing that
        identifies any individual.
      </DocP>

      <DocH2>What will satisfy an anchor&apos;s obligation</DocH2>
      <DocP>
        The on chain compliance record: a tamper evident, append only, timestamped proof
        that verification occurred, by which registered issuer, at what time, and against
        which policy. The anchor will never hold the raw documents. It cannot be compelled
        to produce what it never had, cannot leak it, and will not have to secure it. This
        is designed to reduce an anchor&apos;s regulatory surface area rather than add to
        it.
      </DocP>

      <DocH2>Jurisdiction will be enforced, not assumed</DocH2>
      <DocP>
        The circuit will prove the holder&apos;s document country matches the country the
        anchor&apos;s policy requires. An unsupported country will be refused at issuance
        rather than silently defaulted, so a credential cannot exist for a jurisdiction
        StellarProof does not support.
      </DocP>

      <DocCallout type="warning">
        StellarProof will not perform AML screening on its own account, will not certify or
        approve individuals, and will not replace any anchor&apos;s own KYC/AML programme.
        It is designed as verification infrastructure, not a regulated compliance
        decision maker.
      </DocCallout>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}