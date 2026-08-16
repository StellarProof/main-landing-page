"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DocSidebar, DocSidebarNav } from "@/components/docs/doc-sidebar";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { CopyMarkdownButton } from "@/components/docs/copy-markdown-button";

export function DocLayout({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171715] pt-[84px] text-white">
      <button
        onClick={() => setMobileNavOpen(true)}
        aria-label="Open docs navigation"
        className="fixed left-4 top-[96px] z-40 rounded-md border border-white/10 bg-[#171715]/80 p-1.5 text-white/70 backdrop-blur-md hover:text-white md:hidden"
      >
        <Menu size={16} />
      </button>

      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-white/10 bg-[#171715] p-4 pt-6">
            <button
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close docs navigation"
              className="mb-4 rounded-md border border-white/10 p-1.5 text-white/70 hover:text-white"
            >
              <X size={16} />
            </button>
            <DocSidebarNav onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1440px] items-start px-4 sm:px-6">
        <DocSidebar />
        <main className="min-w-0 flex-1 px-0 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-end mb-6">
              <CopyMarkdownButton />
            </div>
            <div id="doc-content">{children}</div>
          </div>
        </main>
        <TableOfContents />
      </div>
    </div>
  );
}