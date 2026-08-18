"use client";
import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isAnchor, setIsAnchor] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          is_anchor: isAnchor ? "Yes — Stellar anchor" : "No",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative bg-[#0a0a0a] py-16 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Get Early Access
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
          StellarProof is building toward an initial anchor pilot. Early
          collaborator anchors get first access once the system is live, and direct input
          into what gets built next.
        </p>

        {submitted ? (
          <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-xl p-8">
            <div className="text-[#06B6D4] text-2xl font-bold mb-2">You&apos;re on the list ✓</div>
            <p className="text-gray-400">We&apos;ll be in touch at <span className="text-white">{email}</span></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4]/50 text-lg"
            />
            <label className="flex items-center gap-3 text-left cursor-pointer">
              <div
                onClick={() => setIsAnchor(!isAnchor)}
                className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                  isAnchor ? "bg-[#06B6D4] border-[#06B6D4]" : "border-white/20"
                }`}
              >
                {isAnchor && (
                  <svg className="w-3 h-3 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-gray-400 text-sm">
                I represent a Stellar anchor and want to integrate StellarProof for my customers.
              </span>
            </label>

            {error && (
              <p className="text-red-400 text-sm text-left">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#06B6D4] text-[#000000] font-bold text-lg rounded-xl hover:bg-[#06B6D4]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Get Early Access →"}
            </button>
          </form>
        )}

        <p className="text-gray-600 text-sm mt-6">Unsubscribe anytime.</p>
      </div>
    </section>
  );
}