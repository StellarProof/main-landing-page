"use client";
import { Building2, User, Wallet } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="relative px-6 py-16 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <p className="px-4 text-[#06B6D4] text-xl sm:text-3xl md:text-4xl font-bold text-center pointer-events-none z-10 mb-8">
          Problem
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10">
            <User className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" strokeWidth={1.2} />
            <h3 className="mt-5 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">For Users</h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
              Users uses the same document every single time to verify a new Stellar Anchor. Most users drop before completing KYC that lead to 40–50% drop-off rate.
            </p>
          </article>

          <article className="border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10">
            <Building2 className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" strokeWidth={1.2} />
            <h3 className="mt-5 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">For Anchors</h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
              Anchors cannot reuse verified identity from other providers, so they pay for the same KYC again and again, even when users abandon midway.
            </p>
          </article>

          <article className="border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10">
            <Wallet className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" strokeWidth={1.2} />
            <h3 className="mt-5 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">For Ecosystem</h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
              Duplicate checks drain tens of millions of dollars yearly across every Stellar Anchor and waste time for users to reverify. The network is missing shared identity infrastructure.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}