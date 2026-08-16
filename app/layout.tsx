import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { MenuNav } from "@/components/ui/menu-nav";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const siteUrl = "https://stellarproof.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "StellarProof - Prove everything, Reveal nothing",
  description: "Zk-proof reusable identity layer being built for the Stellar ecosystem — no more repeat KYC.",
  icons: {
    icon: "/stellarproof-logo.svg",
    shortcut: "/stellarproof-logo.svg",
    apple: "/stellarproof-logo.svg",
  },
  openGraph: {
    title: "StellarProof - Prove everything, Reveal nothing",
    description: "Zk-proof reusable identity layer being built for the Stellar ecosystem — no more repeat KYC.",
    url: siteUrl,
    siteName: "StellarProof",
    images: [
      {
        url: "/stellarproof-logo.svg",
        width: 1200,
        height: 630,
        alt: "StellarProof logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StellarProof - Prove everything, Reveal nothing",
    description: "Zk-proof reusable identity layer being built for the Stellar ecosystem — no more repeat KYC.",
    images: ["/stellarproof-logo.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body>
        <MenuNav />
        {children}
      </body>
    </html>
  );
}