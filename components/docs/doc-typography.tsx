function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function textOf(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props?: { children?: React.ReactNode } }).props?.children);
  }
  return "";
}

export function DocH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {children}
    </h1>
  );
}

export function DocLead({ children }: { children: React.ReactNode }) {
  return <p className="mb-10 text-lg leading-relaxed text-white/60">{children}</p>;
}

export function DocH2({ children }: { children: React.ReactNode }) {
  const id = slugify(textOf(children));
  return (
    <h2
      id={id}
      className="scroll-mt-40 pb-2 pt-10 text-xl font-bold text-white first:pt-0"
    >
      {children}
    </h2>
  );
}

export function DocH3({ children }: { children: React.ReactNode }) {
  const id = slugify(textOf(children));
  return (
    <h3 id={id} className="scroll-mt-40 pb-2 pt-6 text-base font-semibold text-white">
      {children}
    </h3>
  );
}

export function DocP({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15px] leading-[1.8] text-white/70">{children}</p>;
}

export function DocCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-[#06B6D4]">
      {children}
    </code>
  );
}

export function DocBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.03] p-5 font-mono text-[13px] leading-relaxed text-white/80 whitespace-pre-wrap">
      {children}
    </pre>
  );
}

export function DocCallout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
}) {
  const colors = {
    info: "#06B6D4",
    warning: "#F59E0B",
    success: "#10B981",
  };
  const c = colors[type];
  return (
    <div
      className="my-4 rounded-lg border-l-[3px] p-4 text-sm leading-relaxed text-white/85"
      style={{ background: `${c}0d`, borderColor: c }}
    >
      {children}
    </div>
  );
}

export function DocStep({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="mb-1 font-semibold text-white">
        <span className="mr-2 text-white">{n}.</span>
        {title}
      </div>
      <div className="text-sm leading-relaxed text-white/60">{children}</div>
    </div>
  );
}

export function DocTable({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white/[0.03]">
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-white/10 px-4 py-3 font-medium text-white/50"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="transition-colors hover:bg-white/[0.04]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-white/75 ${i < rows.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocPrevNext({
  prev,
  next,
}: {
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}) {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
      {prev ? (
        <a
          href={prev.href}
          className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition-colors hover:border-[#06B6D4]/40 hover:text-white"
        >
          ← {prev.title}
        </a>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <a
          href={next.href}
          className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-right text-sm text-white/70 transition-colors hover:border-[#06B6D4]/40 hover:text-white"
        >
          {next.title} →
        </a>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
