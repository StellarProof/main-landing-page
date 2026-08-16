import { DocH1, DocLead, DocH2, DocP, DocBlock, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Anchor Integration — StellarProof Docs" };

export default function AnchorIntegrationPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "anchor-integration");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Anchor Integration</DocH1>
      <DocLead>
        StellarProof is designed to be simple to add, a small integration, not
        a rebuild. No compliance changes. No risk during migration. Users who
        already have a credential will skip straight through; everyone else
        will follow the anchor&apos;s current flow untouched, and it can runs
        alongside an anchor&apos;s existing KYC stack from day one.
      </DocLead>

      <DocH2>What the integration will look like</DocH2>
      <DocBlock>{`import { StellarProof } from "@stellarproof/sdk";

const sp = new StellarProof({
  rpcUrl: "<soroban RPC url>",
  networkPassphrase: Networks.PUBLIC,
  verifierContractId: "<deployed contract id>",
  anchorId: 2,
  verificationKey,        // enables an instant, free local pre-check
});

const request = sp.requestProof({ minAgeYears: 18, allowedCountry: 76 });
// … the user's wallet returns { proof, publicSignals, issuerId } …
const result = await sp.verify(response, { signer, request });
if (result.ok) grantAccess(result.record);`}</DocBlock>
      <DocP>
        The SDK is designed around two-stage verification: a local snarkjs check will run in
        single digit milliseconds and cost nothing, rejecting malformed proofs before the
        anchor spends a transaction. The on chain call will be the authoritative step,
        because it will be the only thing able to detect a credential being reused to open a
        second account.
      </DocP>

      <DocH2>What an anchor gets</DocH2>
      <DocP>
        Every verification will write an on chain compliance record: which registered
        issuer, which policy, which proof hash, at what time. Append only, timestamped,
        publicly auditable, and containing no personal data at all. An anchor&apos;s
        compliance team will get permanent evidence that verification occurred without the
        anchor ever holding a single raw document.
      </DocP>
      <DocCallout type="warning">
        Verification is meant to belong on the anchor&apos;s server. The SDK will run in a
        browser, but a browser can simply choose not to call it. Final AML/KYC decisions
        will remain with the anchor&apos;s compliance team. 
        <br />
        <br />
        StellarProof will supply the evidence and infrastructure, not the decision.
      </DocCallout>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}