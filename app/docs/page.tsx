import {
  DocH1,
  DocLead,
  DocH2,
  DocP,
  DocTable,
  DocCallout,
  DocPrevNext,
} from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = {
  title: "What is StellarProof? — StellarProof Docs",
};

export default function WhatIsStellarProofPage() {
  const next = docsNavFlat[docsNavFlat.findIndex((i) => i.href === "/docs") + 1];

  return (
    <article>
      <DocH1>What is StellarProof?</DocH1>
      <DocLead>
        StellarProof serves as the identity layer for Stellar. Verify once, reuse across
        multiple applications.
      </DocLead>

      <DocH2>The Problem</DocH2>
      <DocP>
        Stellar has 100+ independent anchors. Every single one runs its own KYC stack
        independently — SumSub here, Onfido there, Veriff somewhere else. A user who wants to
        use three anchors uploads the same documents three times, waits three separate review
        cycles, and each anchor pays the full verification cost again, even though nothing about
        the user has changed.
      </DocP>
      <DocP>
        The result: multiple uploads, long waits, high duplicated costs, and the same identity
        data scattered across databases the user never chose to trust.
      </DocP>
      <DocTable
        head={["Platform", "Action", "Result"]}
        rows={[
          ["Coins.ph", "Upload passport, ID, selfie. Wait ~2 days.", "Verified — database #1"],
          ["Vibrant", "Upload passport, ID, selfie. Wait ~2 days.", "Verified — database #2"],
          ["Bitso", "Upload passport, ID, selfie. Wait ~2 days.", "Verified — database #3"],
        ]}
      />
      <DocCallout type="warning">
        Same person. Same passport. Same face — verified three separate times, now sitting in
        three separate databases the user has no visibility into.
      </DocCallout>

      <DocH2>The Solution</DocH2>
      <DocP>
        StellarProof allows a user to verify their identity once. The verification is
        cryptographically secured on Stellar, so from then on, platforms can request proof of
        KYC without ever storing — or even seeing — the user&apos;s raw documents.
      </DocP>
      <DocP>
        A KYC provider verifies the user once and issues a credential directly to the user&apos;s
        own wallet. StellarProof&apos;s servers never hold that data. When an anchor needs to
        confirm a user is verified, the wallet proves it directly — the anchor receives a
        cryptographic yes/no result, not a copy of the passport.
      </DocP>
      <DocCallout type="success">
        One verification. Zero central databases. The credential lives in the user&apos;s wallet,
        not on a server anyone can breach.
      </DocCallout>

      <DocPrevNext next={next} />
    </article>
  );
}
