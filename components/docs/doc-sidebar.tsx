"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { docsNav } from "@/lib/docs-nav";

export function DocSidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docsNav;
    return docsNav
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.title.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search
          size={15}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full rounded-lg border border-white/10 bg-white/[0.04] py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#06B6D4]/50"
        />
      </div>

      <nav className="flex flex-col gap-6">
        {groups.length === 0 && (
          <p className="px-3 text-sm text-white/40">No results for &quot;{query}&quot;</p>
        )}
        {groups.map((group) => (
          <div key={group.category}>
            <div className="mb-1 px-3 text-sm font-semibold text-white">{group.category}</div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <a
                    key={item.slug}
                    href={item.href}
                    onClick={onNavigate}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-white/10 font-medium text-white"
                        : "text-white/55 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export function DocSidebar() {
  return (
    <aside className="sticky top-[84px] hidden h-[calc(100vh-84px)] w-64 shrink-0 overflow-y-auto px-3 py-8 md:block">
      <DocSidebarNav />
    </aside>
  );
}
