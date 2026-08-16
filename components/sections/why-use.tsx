"use client";


export function WhyuseSection() {
  return (
    <section id="anchors" className="bg-transparent py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="max-w-6xl mx-auto">
            <p className="px-4 text-[#06B6D4] text-2xl sm:text-4xl font-bold text-center pointer-events-none z-10 mb-8">
              Why use <span className="text-white">Stellar</span>Proof?
            </p>
          </div>
          <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            For Anchors, dramatically cut KYC costs
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Stop paying for the same user twice. StellarProof is built to reuse verified credentials
            under a flat subscription — returning-user checks are included at no extra per-verification cost.
          </p>
          <p className="text-yellow-500/80 text-xs mt-2 max-w-xl mx-auto">
            {/* TODO: Insert final subscription price/terms and recompute exact cost-reduction % before publishing */}
            Exact cost-reduction percentage to be published once subscription pricing is finalized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <article className="rounded-3xl border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10 overflow-hidden">
            <div className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Without <span className="text-white">Stellar</span><span className="text-[#06B6D4]">Proof</span>
            </div>
            <div className="space-y-5">
              {[
                ["Per verification", "$1"],
                ["Returning user", "$1 again"],
                ["Drop-off rate", "60 – 80%"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-white/12 pb-4">
                  <span className="text-[#06B6D4] text-sm">{label}</span>
                  <span className="text-red-400 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10 overflow-hidden">
            <div className="text-[#06B6D4] text-sm font-semibold uppercase tracking-widest mb-6">
              <span className="text-green-500">With</span> <span className="text-white">Stellar</span><span className="text-[#06B6D4]">Proof</span>
            </div>
            <div className="space-y-5">
              {[
                ["First verification", "$1"],
                ["Returning user", "Included in subscription"],
                ["Drop-off rate", "2 - 5%"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-white/12 pb-4">
                  <span className="text-[#06B6D4] text-sm">{label}</span>
                  <span className="text-green-500 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
              <div className="flex gap-4 py-10 flex-col items-start">
                <div className="max-w-6xl mx-auto text-center">
                  <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                       For Users, cut time by{" "}
                       <span className="text-[#06B6D4]">90%</span>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-tight text-gray-400">
                    Verify once with any Stellar anchor. Reuse your credential across the ecosystem.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full">
                  <article className="rounded-3xl border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10 overflow-hidden">
                    <div className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-6">
                      Without <span className="text-white">Stellar</span><span className="text-[#06B6D4]">Proof</span>
                    </div>
                    <div className="space-y-5">
                      {[
                        ["KYC submissions", "Every app, every time"],
                        ["Verification wait", "1 - 3 days"],
                        ["Time per verification", "3 - 5 mins"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between border-b border-white/12 pb-4">
                          <span className="text-[#06B6D4] text-sm">{label}</span>
                          <span className="text-red-400 font-semibold text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-3xl border border-white/20 bg-[#171716] p-6 sm:p-8 md:p-10 overflow-hidden">
                    <div className="text-[#06B6D4] text-sm font-semibold uppercase tracking-widest mb-6">
                      <span className="text-green-500">With</span> <span className="text-white">Stellar</span><span className="text-[#06B6D4]">Proof</span>
                    </div>
                    <div className="space-y-5">
                      {[
                        ["KYC submissions", "Verify once"],
                        ["Verification wait", "Near instant"],
                        ["Time per reuse verification", "10sec"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between border-b border-white/12 pb-4">
                          <span className="text-[#06B6D4] text-sm">{label}</span>
                          <span className="text-green-500 font-semibold text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
    </section>
  );

}