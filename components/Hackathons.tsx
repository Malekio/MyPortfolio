export default function Hackathons() {
  return (
    <section id="hackathons" className="pt-10">
      
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="px-4 py-1.5 bg-black text-[#FF4F9A] font-mono font-bold text-sm brutal-border shadow-brutal-sm inline-block mb-3 tilt-neg-2">
            // SECTION 05
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight">
            HACKATHONS &amp; ARENAS
          </h2>
        </div>

      </div>

      <div className="space-y-6">
        
        {/* Hackathon 1: DataFest */}
        <div className="bg-white brutal-border-thick shadow-brutal-xl p-6 sm:p-8 tilt-neg-1 tilt-hover">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase">
                  DataFest — Data Lead
                </h3>
                <div className="font-mono text-xs sm:text-sm font-bold text-gray-700">
                  USTHB Data Science Scientific Club • Client: Energical (Algerian Energy Equipment)
                </div>
              </div>
            </div>
            <div className="bg-[#00E575] text-black font-mono font-black text-xs px-3 py-1.5 brutal-border-sm uppercase shadow-brutal-sm">
              CUSTOMER CHURN PIPELINE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-sm">
            <div className="p-4 bg-gray-50 brutal-border-sm">
              <div className="font-black text-xs uppercase text-black mb-2">🎯 OBJECTIVE:</div>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                I built a complete customer retention and churn prediction analysis system for Energical during a competitive data hackathon.
              </p>
            </div>
            <div className="p-4 bg-[#FFDE17]/30 brutal-border-sm">
              <div className="font-black text-xs uppercase text-black mb-2">⚙️ IMPLEMENTATION:</div>
              <p className="text-xs font-semibold text-black leading-relaxed">
                I used transaction data processing pipelines to identify customer churn risks and translate raw numbers into actionable business recommendations.
              </p>
            </div>
            <div className="p-4 bg-[#00E575]/30 brutal-border-sm">
              <div className="font-black text-xs uppercase text-black mb-2">💡 IMPACT &amp; LESSONS:</div>
              <p className="text-xs font-semibold text-black leading-relaxed">
                I learned how to drive data-driven decision-making and manage analytical workflows under strict competitive pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathon 2: Serious101 IoT */}
        <div className="bg-white brutal-border-thick shadow-brutal-xl p-6 sm:p-8 tilt-pos-1 tilt-hover">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase">
                  "Serious101" IoT Competition
                </h3>
                <div className="font-mono text-xs sm:text-sm font-bold text-gray-700">
                  Serious Scientific Club, ESTIN • Hardware &amp; Embedded Systems
                </div>
              </div>
            </div>
            <div className="bg-[#FF4F9A] text-white font-mono font-black text-xs px-3 py-1.5 brutal-border-sm uppercase shadow-brutal-sm">
              SMART-HOUSE PROTOTYPE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-sm">
            <div className="p-4 bg-gray-50 brutal-border-sm">
              <div className="font-black text-xs uppercase text-black mb-2">🎯 OBJECTIVE:</div>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                I built a functional smart-house prototype from the ground up, integrating hardware components with custom-coded logic.
              </p>
            </div>
            <div className="p-4 bg-[#FF4F9A]/20 brutal-border-sm">
              <div className="font-black text-xs uppercase text-black mb-2">⚙️ IMPLEMENTATION:</div>
              <p className="text-xs font-semibold text-black leading-relaxed">
                I used Arduino microcontrollers and embedded programming languages to program automated sensors and hardware responses.
              </p>
            </div>
            <div className="p-4 bg-[#2E69FF]/20 brutal-border-sm">
              <div className="font-black text-xs uppercase text-black mb-2">💡 IMPACT &amp; LESSONS:</div>
              <p className="text-xs font-semibold text-black leading-relaxed">
                I learned how to bridge physical hardware constraints with software control, deepening my hands-on grasp of IoT architectures.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
