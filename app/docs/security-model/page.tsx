import { DocH1, DocLead, DocH2, DocP, DocCallout, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Security Model — StellarProof Docs" };

export default function SecurityModelPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "security-model");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Security Model</DocH1>
      <DocLead>
        StellarProof is designed so that breaching its servers will yield nothing useful
        because its servers are designed to hold nothing useful.
      </DocLead>

      <DocH2>What an attacker who compromises the database would get</DocH2>
      <DocP>
        Approved issuer public keys. Revocation roots. Session identifiers. A set of field
        elements that look like random 256-bit numbers. And credential ciphertext sealed
        with XChaCha20-Poly1305 to keys derived on each user&apos;s own device, which
        StellarProof will not have and cannot obtain.
      </DocP>
      <DocP>
        No names. No dates of birth. No document numbers. No addresses. No images. This will
        be enforced by a test that runs a real issuance and fails if any personal attribute
        reaches storage.
      </DocP>

      <DocH2>What StellarProof itself will not be able to do</DocH2>
      <DocP>
        StellarProof will not be able to track a user across anchors, and this is a property
        of the cryptography rather than a policy commitment. A user&apos;s credential is
        bound to the <em>hash</em> of their secret, never the secret itself — StellarProof
        only ever receives the hash. Deriving the per-anchor identifiers that would let
        anyone follow a user requires the secret itself, which StellarProof will never have.
      </DocP>

      <DocH2>What colluding anchors will not be able to do</DocH2>
      <DocP>
        Compare their records and identify a common user. Every anchor will receive a
        different value derived from the user&apos;s secret and the anchor&apos;s own ID.
        The one value that would be identical everywhere — the credential commitment — is
        deliberately never revealed, precisely because it would function as a perfect join
        key.
      </DocP>

      <DocH2>Revocation that isn&apos;t a tracking channel</DocH2>
      <DocP>
        Revoked credentials will be held in a sparse Merkle tree, and holders will prove{" "}
        <em>non</em>-membership. Only the tree root will be public. A valid credential will
        reveal no stable identifier at all, and revoking one will say nothing about who was
        revoked. The revoked list is designed to be served in full rather than answering
        per-credential queries because answering &quot;is nonce X revoked?&quot; would
        tell StellarProof exactly which credential is about to be used.
      </DocP>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}