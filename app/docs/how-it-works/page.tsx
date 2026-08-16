import { DocH1, DocLead, DocH2, DocStep, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "How It Works (Users) — StellarProof Docs" };

export default function HowItWorksPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "how-it-works");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>How It Works (Users)</DocH1>
      <DocLead>
        The user will verify once then every anchor after that will be one tap consent and
        user&apos;s documents will never leave the licensed provider that checked them.
      </DocLead>

      <DocCallout type="info">
        This page describes how StellarProof is designed to work once built.
      </DocCallout>

      <DocH2>First Verification</DocH2>
      <DocStep n={1} title="The user connects their Stellar wallet">
        The credential will be tied to the user&apos;s wallet, not to an account with us.
        No signup, no password.
      </DocStep>
      <DocStep n={2} title="The user signs one message">
        That signature will derive the user&apos;s private credential key, local vault key
        and delivery key all on their device, none of them ever sent anywhere. It will
        also mean the credential can be recovered on a new phone from the same wallet.
      </DocStep>
      <DocStep n={3} title="The user proves control of the account over SEP-10">
        Stellar&apos;s standard web authentication. One signature, One seconds.
      </DocStep>
      <DocStep n={4} title="The user completes KYC with a licensed provider">
        The user will be routed to KYC provider, which will perform the real document and liveness
        check and it will keep the compliance copy under their own regulatory obligations exactly as they do today.
      </DocStep>
      <DocStep n={5} title="The credential is sealed to the user's wallet">
        Three facts: date of birth, document expiry, country will be read once in
        memory, committed to with a Poseidon hash, signed, encrypted to the user&apos;s key,
        and delivered. The plaintext will be discarded immediately. Nothing personal will be
        written to disk anywhere in the system.
      </DocStep>

      <DocH2>Every Anchor After That</DocH2>
      <DocStep n={1} title="The user visits a new anchor">
        The anchor will open the user&apos;s wallet with the policy it needs satisfied.
      </DocStep>
      <DocStep n={2} title="The user sees exactly what is being asked">
        No surprises. The user will see every predicate, and which site will receive the
        proof, before approving anything.
      </DocStep>
      <DocStep n={3} title="The user taps to approve">
        A zero-knowledge proof will be generated on the user&apos;s device in 2 to 4 seconds.
        The credential will never leave it.
      </DocStep>
      <DocStep n={4} title="The anchor verifies the proof on Stellar">
        A Soroban contract will check the proof cryptographically and record that
        verification happened. The anchor will learn that the user is over 18 and in a
        supported country. It will learn nothing else not the user&apos;s name, not their
        date of birth, not their document number.
      </DocStep>
      <DocCallout type="info">
        Two anchors that compare notes will not be able to tell they have seen the same
        person. Each one will receive a different, anchor-specific value derived from the
        user&apos;s secret, so it will be stable at one anchor stopping one person from
        opening unlimited accounts and unlinkable across anchors.
      </DocCallout>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}