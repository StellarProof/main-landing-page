export type DocNavItem = {
  slug: string;
  href: string;
  title: string;
};

export type DocNavCategory = {
  category: string;
  items: DocNavItem[];
};

export const docsNav: DocNavCategory[] = [
  {
    category: "Introduction",
    items: [{ slug: "what-is-stellarproof", href: "/docs", title: "What is StellarProof?" }],
  },
  {
    category: "Guides",
    items: [
      { slug: "how-it-works", href: "/docs/how-it-works", title: "How It Works (Users)" },
      { slug: "anchor-integration", href: "/docs/anchor-integration", title: "Anchor Integration" },
    ],
  },
  {
    category: "Reference",
    items: [
      { slug: "architecture", href: "/docs/architecture", title: "Architecture" },
      { slug: "security-model", href: "/docs/security-model", title: "Security Model" },
      { slug: "compliance-model", href: "/docs/compliance-model", title: "Compliance Model" },
    ],
  },
  {
    category: "Project",
    items: [
      { slug: "roadmap", href: "/docs/roadmap", title: "Roadmap" },
      { slug: "team", href: "/docs/team", title: "Team" },
    ],
  },
];

export const docsNavFlat: DocNavItem[] = docsNav.flatMap((c) => c.items);
