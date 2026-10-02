'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      // Capture exact viewport pixel coordinates
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 hidden md:flex items-center gap-2 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x + 14}px, ${position.y + 14}px, 0)`,
      }}
    >
      {/* Low-Level Pointer Dot */}
      <div className="w-2.5 h-2.5 bg-[#ffffff] brutal-border-sm shadow-brutal-sm"></div>

      {/* Real-Time Pixel Coordinate Readout */}
      <div className="bg-black text-[#FFDE17] font-mono font-bold text-[10px] px-2 py-0.5 brutal-border-sm shadow-brutal-sm tracking-widest">
        X: {Math.round(position.x)} Y: {Math.round(position.y)}
      </div>
    </div>
  );
}