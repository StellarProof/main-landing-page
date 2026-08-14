import { DocH1, DocLead, DocH2, DocStep, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "How It Works (Users) — StellarProof Docs" };

export default function HowItWorksPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "how-it-works");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>How It Works — Users</DocH1>
      <DocLead>As a user, you verify once. Every anchor after that requires one consent tap.</DocLead>

      <DocH2>First Verification</DocH2>
      <DocStep n={1} title="Connect your Stellar wallet">
        Your identity is tied to your wallet. No separate account needed.
      </DocStep>
      <DocStep n={2} title="Sign a SEP-10 challenge to prove wallet ownership">
        One signature. Takes two seconds.
      </DocStep>
      <DocStep n={3} title="Complete KYC via your national ID">
        StellarProof routes you to the fastest, cheapest government rail for your country —
        DigiLocker, PhilSys, Smile ID, or others.
      </DocStep>
      <DocStep n={4} title="KYC provider issues a credential directly to your wallet">
        The credential lives in your wallet. StellarProof never sees or stores it.
      </DocStep>
      <DocStep n={5} title="A proof hash is anchored on Stellar">
        A SHA-256 hash is recorded on-chain as permanent, tamper-proof evidence that verification
        occurred — no personal data touches the chain.
      </DocStep>

      <DocH2>Every User After That</DocH2>
      <DocStep n={1} title="Visit a new anchor">They detect your existing credential instantly.</DocStep>
      <DocStep n={2} title="See exactly what they are asking for">
        No surprises. You see every field before approving.
      </DocStep>
      <DocStep n={3} title="Tap to approve">Your wallet signs it. Done.</DocStep>
      <DocStep n={4} title="The anchor gets a proof, not your passport">
        Verified. Low risk. Onboarded. Your documents never touched their servers.
      </DocStep>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
