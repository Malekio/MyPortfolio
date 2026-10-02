export default function Header() {
  return (
    <>
      {/* Top Announcement Bar / Terminal Status Ticker (Loot-Drop style) */}
      <header className="w-full bg-black text-[#FFDE17] font-mono text-xs md:text-sm py-3 px-4 border-b-4 border-black z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold tracking-wider">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00E575] animate-ping"></span>
            <span>⚡ : </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 font-semibold">
            <a href="#about" className="hover:text-white transition-colors">01. ABOUT</a>
            <a href="#projects" className="hover:text-white transition-colors">02. PROJECTS</a>
            <a href="#leadership" className="hover:text-white transition-colors">03. LEADERSHIP</a>
            <a href="#hackathons" className="hover:text-white transition-colors">04. HACKATHONS</a>
            <a href="#certifications" className="hover:text-white transition-colors">05. SPECS</a>
            <a href="#contact" className="hover:text-white transition-colors">06. CONTACT</a>
          </div>
          {/* <div className="font-bold bg-[#FF4F9A] text-black px-2 py-0.5 border-2 border-[#FFDE17] text-xs">
            ALGIERS, DZ
          </div> */}
        </div>
      </header>

      {/* Marquee Banner */}
      {/* <div className="w-full bg-[#FF4F9A] border-b-4 border-black overflow-hidden py-1.5 text-black font-mono font-black text-xs md:text-sm uppercase tracking-widest">
        <div className="animate-marquee whitespace-nowrap flex w-max">
          <div className="flex shrink-0 items-center">
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 

          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
            <span className="mx-4">M</span> • 
            <span className="mx-4">A</span> • 
            <span className="mx-4">L</span> • 
            <span className="mx-4">E</span> • 
            <span className="mx-4">K</span> • 
          </div>
        </div>
      </div> */}
    </>
  );
}
