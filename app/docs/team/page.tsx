import { DocH1, DocP, DocPrevNext } from "@/components/docs/doc-typography";
import { docsNavFlat } from "@/lib/docs-nav";

export const metadata = { title: "Team — StellarProof Docs" };

export default function TeamPage() {
  const i = docsNavFlat.findIndex((n) => n.slug === "team");
  const prev = docsNavFlat[i - 1];
  const next = docsNavFlat[i + 1];

  return (
    <article>
      <DocH1>Team</DocH1>
      <DocP>
        <a
          href="https://x.com/dhanushonchain"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#06B6D4] underline"
        >
          Dhanush
        </a>{" "}
        — Founder of StellarProof
      </DocP>

      <DocPrevNext prev={prev} next={next} />
    </article>
  );
}
