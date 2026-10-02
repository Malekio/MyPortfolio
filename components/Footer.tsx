'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center font-mono text-xs font-bold text-black py-8 border-t-4 border-black">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-2">
        <span>© {currentYear} MALEK</span>
        <span>•</span>
        <span>Built by <a href="">Me</a></span>
        <span>•</span>
        <span>INSPIRED</span>
      </div>
      <p className="text-gray-700">Infinite ambition, and that's the problem</p>
    </footer>
  );
}
