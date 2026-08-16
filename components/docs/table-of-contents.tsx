"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = { id: string; text: string; level: 2 | 3 };

export function TableOfContents({ contentId = "doc-content" }: { contentId?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const content = document.getElementById(contentId);
    if (!content) return;

    const nodes = Array.from(content.querySelectorAll("h2[id], h3[id]"));
    const found: Heading[] = nodes.map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      level: el.tagName === "H3" ? 3 : 2,
    }));
    setHeadings(found);
    setActiveId(found[0]?.id ?? "");

    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0];
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-84px 0px -70% 0px", threshold: 0 }
    );

    nodes.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [contentId, pathname]);

  if (headings.length === 0) return <aside className="hidden w-56 shrink-0 lg:block" />;

  return (
    <aside className="sticky top-[84px] hidden h-[calc(100vh-84px)] w-56 shrink-0 overflow-y-auto py-8 pl-2 lg:block">
      <div className="mb-3 text-sm text-white/40">On this page</div>
      <ul className="flex flex-col gap-2.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition-colors ${h.level === 3 ? "pl-3" : ""} ${
                activeId === h.id ? "font-medium text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
