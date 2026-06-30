"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  glowColor: string;
};

export function AppCardMockup({ src, alt, glowColor }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate cursor position relative to the element center (normalized from -1 to 1)
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt intensity (max 10 degrees)
    const factorX = (y / (rect.height / 2)) * -10;
    const factorY = (x / (rect.width / 2)) * 10;
    
    setRotateX(factorX);
    setRotateY(factorY);
  };

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyles = {
    blue: "shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
    purple: "shadow-[0_20px_50px_rgba(168,85,247,0.15)]",
    pink: "shadow-[0_20px_50px_rgba(236,72,153,0.15)]",
  }[glowColor] || "shadow-xl";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="relative w-full h-52 rounded-2xl cursor-pointer select-none mb-6"
    >
      <div
        style={{
          transform: active
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: active ? "none" : "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950/80 transition-shadow duration-500 ${
          active ? glowStyles : "shadow-sm"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent dark:from-zinc-950/20 pointer-events-none" />
      </div>
    </div>
  );
}
