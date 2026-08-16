"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyMarkdownButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const content = document.getElementById("doc-content");
    if (!content) return;
    const title = content.querySelector("h1")?.textContent ?? "";
    const text = `# ${title}\n\n${content.innerText}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy Markdown"}
    </button>
  );
}
