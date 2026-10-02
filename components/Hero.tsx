export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-4 md:pt-10">
      
      {/* Top Badge / Pill (Exact loot-drop badge style) */}
      {/* <div className="inline-flex items-center gap-2 bg-black text-white font-mono font-bold text-xs md:text-sm px-4 py-1.5 uppercase tracking-wider brutal-border shadow-brutal mb-8 tilt-neg-1">
        <span>💀</span>
        <span>Why not just write it in binary?</span>
      </div> */}

      {/* Giant Brutalist Headline */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading tracking-tight leading-none text-black mb-6 uppercase">
        MALEK
      </h1>

      {/* Subtitle Pill / Highlight Tags */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-2xl md:text-3xl font-black font-heading mb-6 max-w-3xl">
        <span className="bg-black text-[#FFDE17] px-3 py-1 brutal-border shadow-brutal-sm tilt-pos-1">
          CS STUDENT
        </span>
        <span className="text-black">&amp;</span>
        <span className="bg-[#00E575] text-black px-3 py-1 brutal-border shadow-brutal-sm tilt-neg-2">
          SYSTEMS EXPLORER
        </span>
      </div>

{/* Hero Description with Loot-Drop styled inline boxes */}
      <div className="max-w-2xl text-base sm:text-lg md:text-xl font-mono text-black font-bold leading-relaxed mb-6">
        Passionate about <span className="bg-white text-black px-2 py-0.5 brutal-border-sm shadow-brutal-sm inline-block tilt-pos-1">low-level C</span>, 
        <span className="bg-[#FF6A00] text-black px-2 py-0.5 brutal-border-sm shadow-brutal-sm inline-block tilt-neg-1">security architectures</span>, 
        and <span className="bg-[#2E69FF] text-white px-2 py-0.5 brutal-border-sm shadow-brutal-sm inline-block tilt-pos-1">AI infrastructure</span>—while leading tech communities and driving innovation on campus.
        
        <br /><br /><br /><br />
      </div>

      {/* Action Buttons (Loot-Drop oversized brutalist buttons) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
        <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-[#00E575] text-black font-heading font-black text-lg md:text-xl uppercase brutal-border shadow-brutal tilt-hover flex items-center justify-center gap-2">
          <span>⚡ VIEW MY PROJECTS</span>
        </a>
        <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-heading font-black text-lg md:text-xl uppercase brutal-border shadow-brutal tilt-hover flex items-center justify-center gap-2">
          <span>📬 GET IN TOUCH</span>
        </a>
      </div>

      {/* Quick Interactive Punch Card Grid (Loot-Drop style 6 interactive cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-16 text-left">
        
        {/* Card 1: Green */}
        <a href="#projects" className="block p-6 bg-[#00E575] brutal-border shadow-brutal-lg tilt-neg-1 tilt-hover cursor-pointer group">
          <div className="font-mono text-xs font-black uppercase text-black tracking-widest mb-1">01 // CORE CODE</div>
          <h3 className="font-heading font-black text-2xl text-black uppercase mb-1">FEATURED PROJECTS</h3>
          <p className="font-mono text-xs text-black font-bold mb-4">HTTP Server, Django API, Data Pipelines</p>
          <span className="inline-block font-mono text-xs font-black text-black underline uppercase group-hover:bg-black group-hover:text-[#00E575] px-1 py-0.5 transition-colors">
            INSPECT CODE →
          </span>
        </a>

        {/* Card 2: Pink */}
        <a href="#about" className="block p-6 bg-[#FF4F9A] brutal-border shadow-brutal-lg tilt-pos-1 tilt-hover cursor-pointer group">
          <div className="font-mono text-xs font-black uppercase text-black tracking-widest mb-1">02 // CORE PHILOSOPHY</div>
          <h3 className="font-heading font-black text-2xl text-black uppercase mb-1">ABOUT &amp; HARDWARE</h3>
          <p className="font-mono text-xs text-black font-bold mb-4">Why C? Why the metal? 3rd-year CS Journey</p>
          <span className="inline-block font-mono text-xs font-black text-black underline uppercase group-hover:bg-black group-hover:text-[#FF4F9A] px-1 py-0.5 transition-colors">
            READ MANIFESTO →
          </span>
        </a>

        {/* Card 3: Yellow */}
        <a href="#leadership" className="block p-6 bg-[#FFDE17] brutal-border shadow-brutal-lg tilt-neg-2 tilt-hover cursor-pointer group">
          <div className="font-mono text-xs font-black uppercase text-black tracking-widest mb-1">03 // TEAM &amp; IMPACT</div>
          <h3 className="font-heading font-black text-2xl text-black uppercase mb-1">COMMUNITY LEAD</h3>
          <p className="font-mono text-xs text-black font-bold mb-4">Datathon lead, Hackathon captain, Mentorship</p>
          <span className="inline-block font-mono text-xs font-black text-black underline uppercase group-hover:bg-black group-hover:text-[#FFDE17] px-1 py-0.5 transition-colors">
            VIEW LEADERSHIP →
          </span>
        </a>

        {/* Card 4: Black */}
        <a href="#hackathons" className="block p-6 bg-[#141416] text-white brutal-border shadow-brutal-lg tilt-pos-2 tilt-hover cursor-pointer group">
          <div className="font-mono text-xs font-black uppercase text-[#FFDE17] tracking-widest mb-1">04 // ARENA</div>
          <h3 className="font-heading font-black text-2xl text-white uppercase mb-1">HACKATHONS</h3>
          <p className="font-mono text-xs text-gray-300 font-bold mb-4">DataFest lead, IoT Serious101, Smart House</p>
          <span className="inline-block font-mono text-xs font-black text-[#FFDE17] underline uppercase group-hover:bg-[#FFDE17] group-hover:text-black px-1 py-0.5 transition-colors">
            DISCOVER WINS →
          </span>
        </a>

        {/* Card 5: White */}
        <a href="#certifications" className="block p-6 bg-white brutal-border shadow-brutal-lg tilt-neg-1 tilt-hover cursor-pointer group">
          <div className="font-mono text-xs font-black uppercase text-black tracking-widest mb-1">05 // KNOWLEDGE BASE</div>
          <h3 className="font-heading font-black text-2xl text-black uppercase mb-1">CERTS &amp; SPECS</h3>
          <p className="font-mono text-xs text-black font-bold mb-4">OS, Networks, DSA, Low-Level C, Java</p>
          <span className="inline-block font-mono text-xs font-black text-black underline uppercase group-hover:bg-black group-hover:text-white px-1 py-0.5 transition-colors">
            VIEW SYLLABUS →
          </span>
        </a>

        {/* Card 6: Blue */}
        <a href="#contact" className="block p-6 bg-[#2E69FF] text-white brutal-border shadow-brutal-lg tilt-pos-1 tilt-hover cursor-pointer group">
          <div className="font-mono text-xs font-black uppercase text-[#FFDE17] tracking-widest mb-1">06 // DISPATCH</div>
          <h3 className="font-heading font-black text-2xl text-white uppercase mb-1">GET IN TOUCH</h3>
          <p className="font-mono text-xs text-blue-100 font-bold mb-4">Direct email, GitHub, LinkedIn &amp; Algiers base</p>
          <span className="inline-block font-mono text-xs font-black text-[#FFDE17] underline uppercase group-hover:bg-white group-hover:text-[#2E69FF] px-1 py-0.5 transition-colors">
            OPEN COMMS →
          </span>
        </a>

      </div>
    </section>
  );
}
