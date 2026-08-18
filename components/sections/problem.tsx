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
              Users have to re-upload the same documents every time they use a new Stellar anchor. Most abandon the process before finishing, industry estimates put drop-off as high as 60%.
            </p>
          </article>

          <article className="border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10">
            <Building2 className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" strokeWidth={1.2} />
            <h3 className="mt-5 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">For Anchors</h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
              Anchors can't reuse verified KYC from other providers already completed, so they pay for the same KYC again and again, even for users who are already compliant elsewhere.
            </p>
          </article>

          <article className="border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10">
            <Wallet className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" strokeWidth={1.2} />
            <h3 className="mt-5 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">For Ecosystem</h3>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
              Every duplicate check costs real money and real time, for anchors paying repeatedly, and for users waiting again. Stellar has no infrastructure for reusing a verification once it's done.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}