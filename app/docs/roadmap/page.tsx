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

      <DocH2>Seeking Instaward funding to get started</DocH2>
      <DocCallout type="info">
        StellarProof is applying for an Instaward grant to build zero-knowledge verification
        on Stellar testnet. Once funded, a user will be able to verify once with a licensed
        provider, receive a credential sealed to their wallet, and prove age, jurisdiction,
        document validity and non-revocation to an anchor that verifies the proof on chain
        without any party seeing the underlying document.
        <br />
        <br />
        The grant will fund the circuit, three Soroban contracts, an issuer service
        integrated with a licensed KYC provider, the holder wallet, the anchor SDK, and a
        demo anchor exercising the whole flow end to end, along with a full test suite
        covering unit, integration, and end-to-end checks against the deployed contracts.
      </DocCallout>
      <DocH2>After Instaward phase — the path to mainnet</DocH2>
      <DocStep n={1} title="Multi-party trusted setup ceremony">
        Run the circuit-specific phase-2 ceremony with independent, publicly named external
        contributors and published contribution hashes. This is a blocking requirement
        before mainnet.
      </DocStep>
      <DocStep n={2} title="External security audit">
        Independent review of the ZK circuit and the Soroban contracts.
      </DocStep>
      <DocStep n={3} title="Pilot integrations">
        Live pilots with South American anchors on testnet — real users, real KYC provider
        verifications, real drop-off numbers to replace the industry estimates used
        elsewhere in this documentation.
      </DocStep>
      <DocStep n={4} title="Mainnet launch">
        Production deployment, multi-issuer federation so anchors are not dependent on a
        single issuer, and a scalable revocation witness service.
      </DocStep>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}