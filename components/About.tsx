'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [ratings, setRatings] = useState({
    amazing: 42,
    good: 15,
    better: 8,
    trash: 3,
  });
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  // Fetch initial ratings on mount
  useEffect(() => {
    async function fetchRatings() {
      try {
        const res = await fetch('/api/ratings');
        if (res.ok) {
          const data = await res.json();
          setRatings(data.ratings);
          setTotalVotes(data.total);
        }
      } catch (err) {
        console.error('Failed to load ratings', err);
      }
    }
    fetchRatings();
  }, []);

  // Handle vote click
  const handleVote = async (category: 'amazing' | 'good' | 'better' | 'trash') => {
    if (hasVoted) return; // Prevent double voting per session

    // Optimistic UI update
    setRatings((prev) => ({ ...prev, [category]: prev[category] + 1 }));
    setTotalVotes((prev) => prev + 1);
    setHasVoted(true);

    try {
      await fetch('/api/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category }),
      });
    } catch (err) {
      console.error('Failed to submit vote', err);
    }
  };

  // Calculate percentages dynamically
  const getPercentage = (count: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((count / totalVotes) * 100);
  };

  return (
    <section id="about" className="pt-10">
      
      {/* Section Header Banner */}
      <div className="flex items-center gap-4 mb-8">
        <span className="px-4 py-1.5 bg-black text-[#FFDE17] font-mono font-bold text-sm brutal-border shadow-brutal-sm tilt-neg-1">
          // SECTION 02
        </span>
        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight">
          ABOUT ME
        </h2>
      </div>

      {/* Loot-Drop Style Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
{/* Main Bio Card */}
        <div className="lg:col-span-8 bg-white brutal-border shadow-brutal-xl p-6 sm:p-10 tilt-neg-1">
          <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
            <span className="font-mono text-xs sm:text-sm font-bold bg-[#FFDE17] px-3 py-1 brutal-border-sm">
              IDENTITY: MALEK // 3RD-YEAR CS
            </span>
            
            {/* Profile Picture + Tag Container */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-gray-600">
                PROFILE
              </span>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black shadow-brutal-sm bg-gray-200">
                <img 
                  src="/path-to-your-image.jpg" 
                  alt="Malek" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 font-mono text-sm sm:text-base md:text-lg text-black font-semibold leading-relaxed">
            <p>
              Hey I am <span className="bg-[#FFDE17] text-black px-1.5 py-0.5 font-black brutal-border-sm">MALEK</span>, I am a 3rd-year Computer Science student with a deep passion for low-level programming, systems architecture, and security.
            </p>
            <p>
              Also I like <span className="bg-[#00E575] text-black px-1.5 py-0.5 font-bold brutal-border-sm">C</span> because it forces a true understanding of core computing concepts—giving me direct control over memory, hardware resources, and performance.
            </p>
            <div className="p-4 bg-[#FFDE17]/30 brutal-border-sm border-dashed my-4">
              <p className="font-bold italic text-black">
                "I believe that the next generation of artificial intelligence, high-throughput systems, and edge computing will rely entirely on engineers who understand how software interacts with the hardware."
              </p>
            </div>
            <p>
              Whether I'm optimizing a systems lab, exploring security vulnerabilities, or building out backend architectures, my goal is to bridge the gap between low-level efficiency and future-proof tech infrastructure.
            </p>
            <p>
              Outside of the terminal, I am active in my campus tech community, competing in hackathons and helping drive initiatives that bring builders together.
            </p>
          </div>

          {/* Quick Stats Pills */}
          <div className="mt-8 pt-6 border-t-4 border-black grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-[#00E575] brutal-border-sm font-mono">
              <div className="text-xl sm:text-2xl font-black font-heading">YEAR 3</div>
              <div className="text-xs font-bold uppercase">CS Student</div>
            </div>
            <div className="p-3 bg-[#FF4F9A] brutal-border-sm font-mono text-white">
              <div className="text-xl sm:text-2xl font-black font-heading"></div>
              <div className="text-xs font-bold uppercase text-black">Primary Focus</div>
            </div>
            <div className="p-3 bg-[#FF6A00] brutal-border-sm font-mono">
              <div className="text-xl sm:text-2xl font-black font-heading">2+ WINS</div>
              <div className="text-xs font-bold uppercase"></div>
            </div>
            <div className="p-3 bg-[#2E69FF] brutal-border-sm font-mono text-white">
              <div className="text-xl sm:text-2xl font-black font-heading">C &amp; OS</div>
              <div className="text-xs font-bold uppercase text-white">Core Toolset</div>
            </div>
          </div>
        </div>

        {/* Right Side Tech Stack "Loot Box" */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-black text-white brutal-border shadow-brutal-lg p-6 tilt-pos-1">
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#FFDE17] font-bold">
              <span>⚡</span><span>LIVE VISITOR FEEDBACK {totalVotes > 0 && `(${totalVotes} VOTES)`}</span>
            </div>
            <h3 className="font-heading font-black text-2xl uppercase mb-4 text-[#FFDE17]">
              RATE THIS PORTFOLIO
            </h3>
            
            <div className="space-y-4 font-mono text-xs">
              {/* 1. Green: Amazing */}
              <div className="cursor-pointer group" onClick={() => handleVote('amazing')}>
                <div className="flex justify-between font-bold mb-1">
                  <span className="group-hover:text-[#00E575] transition-colors">AMAZING WORK{hasVoted && '✓'}</span>
                  <span className="text-[#00E575]">{getPercentage(ratings.amazing)}%</span>
                </div>
                <div className="w-full bg-gray-800 h-3 brutal-border-sm overflow-hidden">
                  <div 
                    className="bg-[#00E575] h-full transition-all duration-500 ease-out"
                    style={{ width: `${getPercentage(ratings.amazing)}%` }}
                  ></div>
                </div>
              </div>

              {/* 2. Blue: I Like This */}
              <div className="cursor-pointer group" onClick={() => handleVote('good')}>
                <div className="flex justify-between font-bold mb-1">
                  <span className="group-hover:text-[#2E69FF] transition-colors">I LIKE THIS {hasVoted && '✓'}</span>
                  <span className="text-[#2E69FF]">{getPercentage(ratings.good)}%</span>
                </div>
                <div className="w-full bg-gray-800 h-3 brutal-border-sm overflow-hidden">
                  <div 
                    className="bg-[#2E69FF] h-full transition-all duration-500 ease-out"
                    style={{ width: `${getPercentage(ratings.good)}%` }}
                  ></div>
                </div>
              </div>

              {/* 3. Yellow: You Can Do Better */}
              <div className="cursor-pointer group" onClick={() => handleVote('better')}>
                <div className="flex justify-between font-bold mb-1">
                  <span className="group-hover:text-[#FFDE17] transition-colors">YOU CAN DO BETTER {hasVoted && '✓'}</span>
                  <span className="text-[#FFDE17]">{getPercentage(ratings.better)}%</span>
                </div>
                <div className="w-full bg-gray-800 h-3 brutal-border-sm overflow-hidden">
                  <div 
                    className="bg-[#FFDE17] h-full transition-all duration-500 ease-out"
                    style={{ width: `${getPercentage(ratings.better)}%` }}
                  ></div>
                </div>
              </div>

              {/* 4. Pink (#FF4F9A): This is Trash */}
              <div className="cursor-pointer group" onClick={() => handleVote('trash')}>
                <div className="flex justify-between font-bold mb-1">
                  <span className="group-hover:text-[#FF4F9A] transition-colors">THIS IS TRASH {hasVoted && '✓'}</span>
                  <span className="text-[#FF4F9A]">{getPercentage(ratings.trash)}%</span>
                </div>
                <div className="w-full bg-gray-800 h-3 brutal-border-sm overflow-hidden">
                  <div 
                    className="bg-[#FF4F9A] h-full transition-all duration-500 ease-out"
                    style={{ width: `${getPercentage(ratings.trash)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {hasVoted && (
              <p className="mt-4 text-[10px] text-gray-400 text-center font-mono">
                [ VOTE RECORDED. THANK YOU FOR YOUR CANDOR. ]
              </p>
            )}
          </div>

          {/* Loot-Drop Callout Box */}
          <div className="bg-[#FF6A00] p-6 brutal-border shadow-brutal-lg tilt-neg-2 text-black">
            <div className="font-mono text-xs font-bold uppercase tracking-widest mb-1">💡 PHILOSOPHY</div>
            <h4 className="font-heading font-black text-xl uppercase mb-2">THE AUTOMATION OF SOFTWARE</h4>
            <p className="font-mono text-xs font-bold leading-normal">
              AI writes code faster than any human, and raw syntax is becoming a commodity. Writing software is cheap now—the real challenge has shifted entirely to architecture, systems design, and understanding what's actually running underneath.
            </p>
          </div>
            <div className="bg-[#FF6A00] p-6 brutal-border shadow-brutal-lg tilt-neg-4 text-black">
            <div className="font-mono text-xs font-bold uppercase tracking-widest mb-1">💡 FIRST PRINCIPLES</div>
            <h4 className="font-heading font-black text-xl uppercase mb-2">DEBUGGING BEYOND THE PROMPT</h4>
            <p className="font-mono text-xs font-bold leading-normal">
              Anyone can generate a component with AI. Real engineering starts the moment the generated code hits a race condition, leaks memory in production, or behaves unpredictably under high concurrency. Syntax is easy; debugging a kernel panic is not.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}