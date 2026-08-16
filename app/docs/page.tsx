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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is StellarProof? — StellarProof Docs",
};

const stats = [
  { val: "0.00306 XLM", label: "Estimated cost of an on-chain re-verification" },
  { val: "$1 to $3", label: "Typical cost of a first-time KYC check" },
  { val: "40 to 60%", label: "Estimated KYC drop-off in crypto onboarding" },
  { val: "2 to 4s", label: "Estimated time to generate a proof" },
];

export default function WhatIsStellarProofPage() {
  const next = docsNavFlat[docsNavFlat.findIndex((i) => i.href === "/docs") + 1];

  return (
    <article>
      <DocH1>What is StellarProof?</DocH1>
      <DocLead>
        StellarProof is reusable KYC infrastructure for Stellar anchors. Verify once with a licensed KYC
        provider and get a credential that lives in your own wallet. Use it at every anchor
        after that with one tap. No uploading the same passport again. No waiting. No five
        different companies storing copies of your face.
      </DocLead>

      <DocCallout type="info">
        SDF wrote this goal into SEP-12, Stellar&apos;s KYC API standard: a customer should be
        able to enter their KYC information once and use it across many services without
        re-entering it manually.

        <br />
        <br />
        but nobody has built it yet. until now. StellarProof is the first implementation of reusable KYC for Stellar anchors.
      </DocCallout>

      <DocH2>The Problem</DocH2>
      <DocP>
        Stellar&apos;s anchors are spread across 180+ countries, and every one of them runs
        its own KYC stack independently. One anchor integrates Sumsub, another Onfido, and another Veriff. A
        user who wants to use anchors within the same ecosystem has to upload the same passport every
        times, waits, and each anchor pays $1 to $3 in verification costs every time.
      </DocP>
      <DocP>
        Industry estimates put KYC abandonment in crypto and fintech onboarding at roughly
        40 to 60%. Not because people don&apos;t want the product but because they have done KYC
        before and don&apos;t want to do it again.
      </DocP>
      <DocTable
        head={["Anchor", "Action", "Result"]}
        rows={[
          ["Anchor A", "Upload passport, ID, selfie, Wait", "$1"],
          ["Anchor B", "Upload passport, ID, selfie, Wait", "$1"],
          ["Anchor C", "Upload passport, ID, selfie, Wait", "$1"],
        ]}
      />
      <DocP>
        Same person, Same passport, Same face but 3 separate databases holding documents.
      </DocP>

      <DocH2>The Solution</DocH2>
      <DocP>
        StellarProof introduces a reusable KYC compliance infrastructure layer for the Stellar anchor ecosystem. 
        Instead of requiring users to repeat verification independently at every anchor, a licensed KYC provider 
        verifies a user once, and the resulting credential is sealed to their own wallet, never held by StellarProof. 
        From there, that single verification can be reused across the network with the user&apos;s
        explicit consent at each anchor. When an anchor needs to confirm
        something, the wallet generates a zero-knowledge proof on the user&apos;s
        device, and the anchor verifies it directly on Stellar. StellarProof is
        never part of that exchange, and never sees the request or the result.
</DocP>
      <DocTable
        head={["Anchor", "Action", "Result"]}
        rows={[
          ["Anchor A", "Verify once with a licensed provider, Credential sealed to your wallet.", "$1"],
          ["Anchor B", "One tap, Proof generated on your device, verified on Stellar in seconds.", "✓"],
          ["Anchor C", "One tap, Same.", "✓"],
        ]}
      />
      <DocP>
        Same person, One verification, Credential lives in your wallet but Zero central databases.
      </DocP>
      <DocCallout type="success">
        There is no central database of user identities to breach, because there isn&apos;t
        one. StellarProof&apos;s infrastructure stores only public information.
      </DocCallout>

      <DocH2>Key Numbers</DocH2>
      <div className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.val} className="rounded-lg border border-white/10 bg-white/3 p-5">
            <div className="text-xl font-bold text-[#06B6D4] sm:text-2xl">{s.val}</div>
            <div className="mt-1 text-xs text-white/50">{s.label}</div>
          </div>
        ))}
      </div>

      <DocPrevNext next={next} />
    </article>
  );
}
