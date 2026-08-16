"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyuseSection } from "@/components/sections/why-use";
import { WaitlistSection } from "@/components/sections/waitlist";
import { FooterSection } from "@/components/sections/footer";
import SpotlightBackground from "@/components/ui/spotlight-background";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    
    <main className="bg-black">
      <div className="h-screen w-full snap-start">
        <HeroSection />
      </div>
      <div className="relative z-10 bg-black snap-start">
        <img
          src="/StellarProof-logo.svg"
          alt="StellarProof"
          className={`relative h-auto w-full pb-8 transition-transform duration-500 ease-out sm:pb-12 ${
            scrolled ? "-translate-y-[60%]" : "-translate-y-1/2"
          }`}
        />
        <SpotlightBackground>
          <ProblemSection />
          <HowItWorksSection />
          <WhyuseSection />
        </SpotlightBackground>
        <WaitlistSection />
        <FooterSection />
      </div>
    </main>
  );
}
