import { CTASection } from "@/components/ui/hero-dithering-card";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyuseSection } from "@/components/sections/why-use";
import { WaitlistSection } from "@/components/sections/waitlist";
import { FooterSection } from "@/components/sections/footer";
import SpotlightBackground from "@/components/ui/spotlight-background";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="w-full snap-start bg-black pt-[84px]">
        <CTASection />
      </div>
      <div className="relative z-10 bg-black snap-start">
        <img
          src="/stellarproof-logo.svg"
          alt="StellarProof"
          className="relative h-auto w-full px-6 py-8 sm:py-12"
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
