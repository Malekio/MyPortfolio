export default function Projects() {
  return (
    <section id="projects" className="pt-10">
      
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="px-4 py-1.5 bg-black text-[#00E575] font-mono font-bold text-sm brutal-border shadow-brutal-sm inline-block mb-3 tilt-pos-1">
            // SECTION 03
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight">
            FEATURED PROJECTS
          </h2>
        </div>
      </div>

      {/* 3 Distinct Project Cards in neo-brutalist high-contrast style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* PROJECT 1: Custom HTTP Server (C) */}
        <div className="bg-white brutal-border-thick shadow-brutal-xl flex flex-col justify-between tilt-neg-1 tilt-hover">
          <div>
            {/* Card Header Tag */}
            <div className="bg-[#00E575] p-4 flex items-center justify-between border-b-4 border-black">
              <span className="font-mono font-black text-xs uppercase bg-black text-[#00E575] px-2 py-0.5">
                LOW-LEVEL C
              </span>
              <span className="font-mono text-xs font-black text-black">
                SYS_PROG // 01
              </span>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase leading-tight">
                Custom HTTP Server
              </h3>

              <div className="font-mono text-xs font-bold text-[#FF6A00] flex items-center gap-1">
                <span>C Language • Sockets • Memory Allocation</span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-900 leading-relaxed font-semibold">
                <p>
                  I built a lightweight HTTP server entirely from scratch using the C language to master network socket programming and low-level resource management without high-level abstractions.
                </p>
                <div className="p-3 bg-gray-100 brutal-border-sm border-black">
                  <div className="text-xs font-black uppercase text-black mb-1">🛠️ TECHNIQUES:</div>
                  <p className="text-xs text-gray-800">
                    Raw socket handling, manual request parsing, and system-level memory management techniques.
                  </p>
                </div>
                <div className="p-3 bg-[#00E575]/20 brutal-border-sm border-black">
                  <div className="text-xs font-black uppercase text-black mb-1">💡 KEY TAKEAWAY:</div>
                  <p className="text-xs text-black">
                    Learned how network protocols function at a bare-metal level, deepening my control over memory allocation and concurrency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA / GitHub Button */}
          <div className="p-6 pt-0">
            <a 
              href="https://github.com/yourusername/custom-http-server" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-black text-[#00E575] font-mono font-black text-xs uppercase brutal-border text-center flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
            >
              <span>VIEW GITHUB REPO</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* PROJECT 2: Government Internal Backend System */}
        <div className="bg-white brutal-border-thick shadow-brutal-xl flex flex-col justify-between tilt-pos-0 tilt-hover">
          <div>
            {/* Card Header Tag */}
            <div className="bg-[#2E69FF] text-white p-4 border-b-4 border-black flex items-center justify-between">
              <span className="font-mono font-black text-xs uppercase bg-[#FFDE17] text-black px-2 py-0.5">
                ENTERPRISE BACKEND
              </span>
              <span className="font-mono text-xs font-black text-white">
                SECURITY // 02
              </span>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase leading-tight">
                Government Internal Backend
              </h3>

              <div className="font-mono text-xs font-bold text-[#2E69FF] flex items-center gap-1">
                <span>Python • Django • DRF • Auth &amp; Rate Limiting</span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-900 leading-relaxed font-semibold">
                <p>
                  I built a robust backend system for a government-level client during a software engineering internship to handle secure data operations.
                </p>
                <div className="p-3 bg-gray-100 brutal-border-sm border-black">
                  <div className="text-xs font-black uppercase text-black mb-1">🛠️ TECHNIQUES:</div>
                  <p className="text-xs text-gray-800">
                    Architected core APIs, while implementing secure authentication, CORS headers, rate limiting, caching layers, and real-time statistics.
                  </p>
                </div>
                <div className="p-3 bg-[#2E69FF]/20 brutal-border-sm border-black">
                  <div className="text-xs font-black uppercase text-black mb-1">💡 KEY TAKEAWAY:</div>
                  <p className="text-xs text-black">
                    Learned how to scale backend architecture, secure enterprise endpoints, and deliver production-ready code under professional constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA / GitHub Button */}
          <div className="p-6 pt-0">
            <a 
              href="https://github.com/yourusername/gov-backend-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-black text-[#2E69FF] font-mono font-black text-xs uppercase brutal-border text-center flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
            >
              <span>VIEW GITHUB REPO</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* PROJECT 3: Datathon Data Pipeline & Analysis */}
        <div className="bg-white brutal-border-thick shadow-brutal-xl flex flex-col justify-between tilt-neg-2 tilt-hover">
          <div>
            {/* Card Header Tag */}
            <div className="bg-[#FF4F9A] text-black p-4 border-b-4 border-black flex items-center justify-between">
              <span className="font-mono font-black text-xs uppercase bg-black text-white px-2 py-0.5">
                DATA LEAD
              </span>
              <span className="font-mono text-xs font-black text-black">
                ANALYTICS // 03
              </span>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase leading-tight">
                Datathon Data Pipeline
              </h3>

              <div className="font-mono text-xs font-bold text-[#FF4F9A] flex items-center gap-1">
                <span>Python • NumPy • Pandas • Matplotlib • Jupyter</span>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-900 leading-relaxed font-semibold">
                <p>
                  I built a full data analysis pipeline as the Data Lead during a competitive datathon to clean and extract insights from a complex dataset under a tight deadline.
                </p>
                <div className="p-3 bg-gray-100 brutal-border-sm border-black">
                  <div className="text-xs font-black uppercase text-black mb-1">🛠️ TECHNIQUES:</div>
                  <p className="text-xs text-gray-800">
                    Cleaned and transformed data, alongside Matplotlib to generate high-clarity forensic charts and diagrams.
                  </p>
                </div>
                <div className="p-3 bg-[#FF4F9A]/20 brutal-border-sm border-black">
                  <div className="text-xs font-black uppercase text-black mb-1">💡 KEY TAKEAWAY:</div>
                  <p className="text-xs text-black">
                    Learned how to rapidly translate messy, unstructured data into clear, visual, and data-driven narratives under pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA / GitHub Button */}
          <div className="p-6 pt-0">
            <a 
              href="https://github.com/yourusername/datathon-pipeline" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-black text-[#FF4F9A] font-mono font-black text-xs uppercase brutal-border text-center flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
            >
              <span>VIEW GITHUB REPO</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}