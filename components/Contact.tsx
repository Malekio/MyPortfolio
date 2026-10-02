'use client';

import { useState } from 'react';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-12">
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-black text-white brutal-border-thick shadow-brutal-xl p-8 sm:p-12 tilt-neg-0">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[#FFDE17] pb-8 mb-8">
            <div>
              <h2 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
                LET'S CONNECT
              </h2>
            </div>
          </div>

          {/* Uniform 4-Card Grid (Exact Same Size & Structure for Emails & Socials) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. University Email Card */}
            <div 
              onClick={() => copyToClipboard('a_ziat@estin.dz', 'uni')}
              className="p-6 bg-[#ff0073] text-black brutal-border shadow-brutal-sm text-center tilt-neg-1 tilt-hover flex flex-col items-center justify-center cursor-pointer group"
            >
              <svg className="w-8 h-8 mb-2 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-8V6l8 5 8-8v2z"/>
              </svg>
              <span className="font-heading font-black text-xl uppercase block">UNI EMAIL</span>
              <span className="font-mono text-xs font-bold block mt-1 text-gray-900 select-all">
                a_ziat@estin.dz
              </span>
              <span className="font-mono text-xs font-black uppercase tracking-widest mt-2 underline group-hover:text-white transition-colors">
                {copiedField === 'uni' ? 'COPIED! ✓' : 'CLICK TO COPY →'}
              </span>
            </div>

            {/* 2. Personal Email Card */}
            <div 
              onClick={() => copyToClipboard('zabdelmalek848@gmail.com', 'personal')}
              className="p-6 bg-[#00E575] text-black brutal-border shadow-brutal-sm text-center tilt-pos-1 tilt-hover flex flex-col items-center justify-center cursor-pointer group"
            >
              <svg className="w-8 h-8 mb-2 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-8V6l8 5 8-8v2z"/>
              </svg>
              <span className="font-heading font-black text-xl uppercase block">PERSONAL EMAIL</span>
              <span className="font-mono text-xs font-bold block mt-1 text-gray-900 select-all truncate max-w-full">
                zabdelmalek848@gmail.com
              </span>
              <span className="font-mono text-xs font-black uppercase tracking-widest mt-2 underline group-hover:text-blue-900 transition-colors">
                {copiedField === 'personal' ? 'COPIED! ✓' : 'CLICK TO COPY →'}
              </span>
            </div>

            {/* 3. GitHub Card */}
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-[#0969DA] text-black brutal-border shadow-brutal-sm text-center tilt-neg-2 tilt-hover flex flex-col items-center justify-center"
            >
              <svg className="w-8 h-8 mb-2 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="font-heading font-black text-xl uppercase block">GITHUB</span>
              <span className="font-mono text-[#24292E] text-xs font-bold block mt-1 underline">VIEW REPOS →</span>
            </a>

            {/* 4. LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-[#0077b5] text-white brutal-border shadow-brutal-sm text-center tilt-pos-2 tilt-hover flex flex-col items-center justify-center"
            >
              <svg className="w-8 h-8 mb-2 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-heading font-black text-xl uppercase block">LINKEDIN</span>
              <span className="font-mono text-xs font-bold block mt-1 text-[#FFDE17] underline">CONNECT →</span>
            </a>

          </div>

          {/* Lightweight Location / Mobility Indicator at the bottom */}
          <div className="mt-8 pt-4 border-t-2 border-gray-800 text-center text-xs font-mono text-gray-400">
            <span>Algeria / Open to remote &amp; international opportunities</span>
          </div>

        </div>
      </div>

    </section>
  );
}