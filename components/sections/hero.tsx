"use client";

import { useEffect, useState } from "react";
import { BlackHoleHeroSection } from "@/components/ui/blackhole-hero-section";

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

export function HeroSection() {
  const narrow = useNarrow();

  return (
    <section className="relative h-screen w-full">
      <BlackHoleHeroSection
        focus={narrow ? [0.5, 0.76] : [0.72, 0.46]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={0.9}
        distance={24}
        elevation={narrow ? -7 : -5.5}
        fov={narrow ? 58 : 42}
        glow={narrow ? 0.85 : 1}
        steps={narrow ? 200 : 300}
        resolution={narrow ? 0.6 : 0.7}
        hotColor="#FFFFFF"
        midColor="#FFF8E9"
        coolColor="#06B6D4"
      >
        <div className="flex h-full flex-col">
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
      </BlackHoleHeroSection>
    </section>
  );
}
