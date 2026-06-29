"use client";

import Image from "next/image";
import { useState } from "react";

type Screenshot = { src: string; alt: string };

export function ScreenshotGallery({ screenshots }: { screenshots: readonly Screenshot[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main preview */}
      <div className="relative aspect-[9/19.5] w-full rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-950 shadow-2xl">
        <Image
          src={screenshots[active].src}
          alt={screenshots[active].alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
          className="object-cover object-top select-none transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {screenshots.map((ss, i) => (
          <button
            key={ss.src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-14 h-[108px] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === active
                ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-105"
                : "border-zinc-300 dark:border-zinc-700 opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={ss.src}
              alt={ss.alt}
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
