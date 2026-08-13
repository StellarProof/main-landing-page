"use client";
import { useEffect, useRef } from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";

export function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>{`
        .halide-section {
          position: relative;
          background-color: #0a0a0a;
          color: #e0e0e0;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          --accent: #06B6D4;
          --silver: #e0e0e0;
          --bg: #0a0a0a;
        }

        .halide-viewport {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .halide-canvas-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          transition: opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .halide-interface {
          position: absolute;
          inset: 0;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
          font-family: 'Syncopate', 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
          align-items: start;
          justify-items: stretch;
        }

        .halide-logo {
          grid-column: 1;
          grid-row: 1;
          pointer-events: auto;
        }

        @media (min-width: 640px) {
          .halide-interface { padding: 3.5rem; }
        }

        @media (min-width: 640px) {
          .halide-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }

      `}</style>

      <section className="halide-section">
        {/* Interface overlay */}
        <div className="halide-interface">
          <div className="halide-logo">
            <img
              src="/stellarproof-logo.svg"
              alt="StellarProof"
              className="w-40 h-auto"/>
          </div>
        </div>

        {/* Hero text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="space-y-3 sm:space-y-6 text-center px-6 sm:px-8">
            <h1 className="font-semibold">
              <span className="italic text-[clamp(1.1rem,5vw,3rem)] font-thin block leading-snug">Prove everything.<br/>Reveal nothing.</span>
              <span className="text-[#06B6D4] text-[clamp(0.95rem,4.5vw,3rem)] block mt-1">ZK proof KYC infra layer<br className="sm:hidden"/> for the Stellar anchor ecosystem</span>
            </h1>
            <p className="text-xs sm:text-sm text-primary/60">
                Building on Stellar ecosystem 
            </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 pointer-events-auto">
                <a href="#waitlist" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-[#06B6D4] font-semibold rounded-lg text-base sm:text-lg hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm">
                  Join Waitlist
                </a>
                <a href="/about-us" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-[#06B6D4] font-semibold rounded-lg text-base sm:text-lg hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm">
                  About us
                </a>
                <a href="/whitepaper" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-[#06B6D4] font-semibold rounded-lg text-base sm:text-lg hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm">
                  Whitepaper
                </a>
              </div>
          </div>
        </div>

        {/* 3D terrain viewport */}
        <div className="halide-viewport">
          <div className="halide-canvas-3d" ref={canvasRef}>
            <GLSLHills width="100%" height="100%" cameraZ={125} planeSize={256} speed={0.5} />
          </div>
        </div>

      </section>
    </>
  );
}