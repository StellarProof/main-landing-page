"use client";
import Link from "next/link";



const footerLinks = [
  {
    title: "Company",
    links: [
      { title: "About us", url: "/docs" },
      { title: "Blog", url: "#" },
      { title: "GitHub", url: "https://github.com/StellarProof" },
    ],
  },
  // {
  //   title: "Developers",
  //   links: [
  //     // { title: "SDK", url: "#" },
      
  //   ],
  // },
  {
    title: "Connect",
    links: [
      { title: "X (Twitter)", url: "https://x.com/StellarProofOrg" },
      { title: "Gmail", url: "mailto:stellarprooforg@gmail.com" },
      { title: "Discord", url: "https://discord.gg/stellardev" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/5 pb-10">
      {/* Links */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 md:p-10 gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-5 max-w-xs">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-white">Stellar</span>
              <span className="text-[#06B6D4]">Proof</span>
            </span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Reusable zero-knowledge KYC infrastructure for Stellar anchors.
            Prove everything, reveal nothing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          {footerLinks.map((col) => (
            <ul key={col.title} className="flex flex-col gap-3">
              <li className="text-white text-sm font-semibold mb-1">{col.title}</li>
              {col.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.url} className="text-gray-500 text-sm hover:text-[#06B6D4] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 text-center z-10">
        <p className="text-gray-700 text-xs">© 2026 StellarProof. All rights reserved.</p>
      </div>
    </footer>
  );
}
