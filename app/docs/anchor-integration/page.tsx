import { DocH1, DocLead, DocP, DocPrevNext } from "@/components/docs/doc-typography";
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
        StellarProof runs alongside your existing KYC stack from day one. No compliance changes.
        No risk during migration. Your team gets it live in under a day.
      </DocLead>

      <DocP>
        Once integrated, you get access to a live dashboard showing exactly how many of your
        users could have been onboarded instantly. Real numbers from your real traffic before
        you commit to anything.
      </DocP>
      <DocP>
        For teams that need more, we offer a Verification Analytics Dashboard, Audit Log
        Explorer, Priority Integration Support, and a White-label SDK for wallets and fintechs
        building on Stellar. Final AML/KYC decisions remain with your compliance team —
        StellarProof provides the verification evidence and infrastructure.
      </DocP>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
