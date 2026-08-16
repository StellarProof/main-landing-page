"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const firstTimeSteps = [
  {
    number: 1,
    title: "User will sign a SEP-10 challenge",
    description:
      "Wallet-native authentication — the user will prove ownership of their Stellar account with a single signature. No passwords, no accounts to create.",
    tag: "Authentication",
  },
  {
    number: 2,
    title: "Will route to cheapest govt rail",
    description:
      "StellarProof will automatically route the user to the fastest, cheapest government-backed KYC provider for their country — DigiLocker, PhilSys, Smile ID, and more.",
    tag: "Routing",
  },
  {
    number: 3,
    title: "KYC provider will verify identity",
    description:
      "The licensed KYC provider will perform the actual verification. Compliance copy retained by the provider under their own regulatory obligations (FATF/AML).",
    tag: "Verification",
  },
  {
    number: 4,
    title: "Verified data → ZK proof layer",
    description:
      "Verified credential data will be passed to the zero-knowledge proof layer, which will run entirely client-side on the user's own device. StellarProof's servers will never see the data.",
    tag: "Client-side",
  },
  {
    number: 5,
    title: "ZK proof will be generated locally",
    description:
      "A zero-knowledge proof will be generated on the user's device using BN254 + Poseidon cryptographic primitives, leveraging Stellar Protocol 25's native support.",
    tag: "BN254 + Poseidon",
  },
  {
    number: 6,
    title: "SHA-256 proof hash anchored on Stellar",
    description:
      "A SHA-256 hash of the proof will be recorded on-chain as permanent, tamper-proof evidence that verification occurred. No personal data will ever touch the chain.",
    tag: "On-chain",
  },
  {
    number: 7,
    title: "ZK credential will be stored in user's wallet",
    description:
      "The full ZK credential will live exclusively in the user's own wallet. StellarProof is designed to never store, see, or have access to it.",
    tag: "User-owned",
  },
  {
    number: 8,
    title: "Anchor will receive proof — not PII",
    description:
      "The anchor will receive a cryptographic proof that the user is verified — never the underlying documents, passport scans, or personal information.",
    tag: "Privacy-first",
  },
];

const returningSteps = [
  {
    number: 1,
    title: "User will sign a SEP-10 challenge",
    description:
      "Same wallet-native authentication. One signature to prove ownership — will take two seconds.",
    tag: "Authentication",
  },
  {
    number: 2,
    title: "Wallet will already hold a valid ZK credential",
    description:
      "No new verification needed. The credential from the first verification will already be in the user's wallet, ready to use.",
    tag: "Existing credential",
  },
  {
    number: 3,
    title: "Anchor will request proof of required attributes",
    description:
      "The anchor will specify what it needs to verify — identity status, sanction check, age threshold. Only the required attributes, nothing more.",
    tag: "Selective disclosure",
  },
  {
    number: 4,
    title: "Proof will be generated locally from existing credential",
    description:
      "A fresh ZK proof will be generated client-side from the existing credential. No re-KYC, no document uploads, no waiting.",
    tag: "No re-KYC",
  },
  {
    number: 5,
    title: "Anchor will receive proof — verified in seconds",
    description:
      "The anchor will receive a valid proof and onboard the user instantly. The entire process will take seconds, not days.",
    tag: "Instant",
  },
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"first" | "returning">("first");
  const steps = activeTab === "first" ? firstTimeSteps : returningSteps;

  return (
    <section className="bg-transparent py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 flex justify-center">
          <div className="w-full max-w-3xl text-center">
            <p className="text-[#06B6D4] text-xl sm:text-3xl md:text-4xl font-bold pointer-events-none z-10 mb-6 sm:mb-8">
              How we solve it
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8">
              StellarProof is building a reusable ZK credential tied to your Stellar
              wallet.
              <br />
              Anchors will verify the proof, not your documents — ever.
            </p>

            {/* Tab toggle */}
            <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("first")}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "first"
                    ? "bg-[#06B6D4] text-black shadow-lg shadow-[#06B6D4]/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                First-time user
              </button>
              <button
                onClick={() => setActiveTab("returning")}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "returning"
                    ? "bg-[#10B981] text-black shadow-lg shadow-[#10B981]/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Returning user
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              <div className="space-y-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex gap-4 sm:gap-6 group"
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 ${
                          activeTab === "first"
                            ? "border-[#06B6D4]/40 bg-[#06B6D4]/10 text-[#06B6D4] group-hover:border-[#06B6D4] group-hover:bg-[#06B6D4]/20"
                            : "border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981] group-hover:border-[#10B981] group-hover:bg-[#10B981]/20"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pb-6 sm:pb-8">
                      <div className="rounded-2xl border border-white/10 bg-[#171716] p-4 sm:p-6 hover:border-white/20 transition-colors duration-300">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <h3 className="text-base sm:text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                          <span
                            className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${
                              activeTab === "first"
                                ? "bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20"
                                : "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20"
                            }`}
                          >
                            {step.tag}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: steps.length * 0.08 + 0.2, duration: 0.4 }}
              className={`mt-8 rounded-2xl border p-6 text-center ${
                activeTab === "first"
                  ? "border-[#06B6D4]/20 bg-[#06B6D4]/5"
                  : "border-[#10B981]/20 bg-[#10B981]/5"
              }`}
            >
              <p className="text-gray-300 text-sm sm:text-base">
                {activeTab === "first" ? (
                  <>
                    <span className="text-white font-semibold">
                      Result:
                    </span>{" "}
                    User will be verified, credential will live in their wallet,
                    anchor will receive proof — not PII. StellarProof is designed to
                    never store or see the identity data.
                  </>
                ) : (
                  <>
                    <span className="text-white font-semibold">
                      Result:
                    </span>{" "}
                    No re-KYC. No document uploads. No waiting. Proof will be
                    generated from existing credential in seconds — included in
                    the anchor&apos;s subscription.
                  </>
                )}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
