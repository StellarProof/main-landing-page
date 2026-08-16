"use client";

import { useEffect, useRef, useState } from "react";


const CARD_PERIMETER = 2303.82;

const LINES: { d: string; length: number }[] = [
  { d: "M594.6 393.9 H817.8", length: 223.2 },
  { d: "M594.6 461.4 H817.8", length: 223.2 },
  { d: "M636.6 528.0 H817.8", length: 181.2 },
  { d: "M370.2 598.2 H817.8", length: 447.6 },
  { d: "M370.2 666.3 H817.8", length: 447.6 },
  { d: "M370.2 735.3 H817.8", length: 447.6 },
  { d: "M370.2 804.0 H817.8", length: 447.6 },
];

const CARD_DURATION = 0.9;
const SILHOUETTE_DURATION = 0.7;
const LINE_DURATION = 0.7;
const LINE_STAGGER = 0.09;
const LINES_START = CARD_DURATION; 

export function IdCardMark({ className }: { className?: string }) {
  const hostRef = useRef<SVGSVGElement>(null);
  const [phase, setPhase] = useState<"idle" | "animate" | "done">("idle");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("done");
      return;
    }

    const el = hostRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPhase("animate");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dash = (length: number) =>
    phase === "done" ? {} : { strokeDasharray: `${length} ${length * 10}`, strokeDashoffset: length };

  const anim = (duration: number, delay = 0) =>
    phase === "animate" ? { animation: `sp-draw ${duration}s ease-out ${delay}s forwards` } : undefined;

  return (
    <svg
      ref={hostRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      role="img"
      aria-labelledby="id-card-mark-title id-card-mark-desc"
      className={className}
    >
      <title id="id-card-mark-title">StellarProof logo</title>
      <desc id="id-card-mark-desc">
        A cyan rounded rectangular identification card with a profile outline and horizontal
        information lines.
      </desc>

      <style>{`
        @keyframes sp-draw { to { stroke-dashoffset: 0; } }
      `}</style>

      <rect
        x="295.5"
        y="298.5"
        width="609"
        height="603"
        rx="70"
        fill="#171715"
        stroke="#08B9D2"
        strokeWidth="21"
        {...dash(CARD_PERIMETER)}
        style={anim(CARD_DURATION)}
      />

      <path
        d="M434.1 428.7
           C426.3 418.2 426.6 403.8 430.8 392.4
           C437.1 375.6 453.0 356.4 473.1 348.3
           C493.8 340.2 517.2 343.8 533.4 357.0
           C547.5 368.4 553.5 387.3 551.4 405.3
           C549.9 417.3 549.3 427.8 543.9 436.5
           C545.7 441.9 544.2 449.1 540.0 453.0
           C538.5 468.3 531.3 484.5 519.6 495.3
           C510.6 503.7 500.1 510.0 490.5 510.0
           C479.4 509.7 466.2 502.5 456.6 492.9
           C445.8 482.1 439.8 467.1 438.6 453.0
           C433.2 450.3 431.1 441.0 434.1 428.7 Z
           M458.4 492.3
           C458.1 509.1 452.7 522.6 438.0 532.2
           C424.5 540.9 407.4 543.9 390.6 552.0
           C384.3 555.0 382.2 560.7 381.0 565.5
           M522.9 492.0
           C523.5 508.5 528.9 522.6 543.0 531.9
           C555.9 540.3 574.2 545.4 586.8 555.3
           C591.9 559.2 594.3 563.7 595.5 568.5"
        fill="none"
        stroke="#F4F4F4"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={phase === "done" ? undefined : 1}
        {...dash(1)}
        style={anim(SILHOUETTE_DURATION)}
      />

      <g fill="none" stroke="#08B9D2" strokeWidth="17.4" strokeLinecap="round">
        {LINES.map((line, i) => (
          <path
            key={line.d}
            d={line.d}
            {...dash(line.length)}
            style={anim(LINE_DURATION, LINES_START + i * LINE_STAGGER)}
          />
        ))}
      </g>
    </svg>
  );
}
