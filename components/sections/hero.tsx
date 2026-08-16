"use client";

import { IdCardMark } from "@/components/ui/id-card-mark";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <IdCardMark
        className="pointer-events-none absolute right-[4%] top-1/2 w-[80%] max-w-[420px] -translate-y-1/2 opacity-90 sm:right-[6%] sm:w-[62%] sm:max-w-[640px]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 items-start px-6 pt-2 sm:px-10 md:items-center md:pt-0 lg:px-20">
          <div className="max-w-[34rem] text-left">
            <h1 className="text-[clamp(1.6rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
              <span className="block font-thin italic">
                Prove's everything.
                <br />
                Reveal nothing.
              </span>
              <span className="mt-2 block text-[clamp(1rem,2.5vw,1.75rem)] text-[#06B6D4]">
                ZK proof KYC infra layer for Stellar anchor ecosystem
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
