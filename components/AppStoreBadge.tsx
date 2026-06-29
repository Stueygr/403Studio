import React from "react";

export function AppStoreBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-zinc-950 dark:bg-black text-white px-4 py-2 rounded-xl border border-zinc-800 hover:scale-[1.02] hover:border-zinc-700 transition-all select-none shadow-md">
      {/* Apple Logo SVG */}
      <svg
        viewBox="0 0 170 170"
        className="w-5 h-5 fill-current text-white shrink-0"
        aria-hidden="true"
      >
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.36-6.15-3.29-2.7-7.23-7.55-11.82-14.56-8.58-13.06-15.01-29.13-19.29-48.18-4.28-19.05-5.22-35.32-2.83-48.8 2.03-12.1 6.86-21.72 14.5-28.87 7.64-7.15 16.33-10.78 26.07-10.89 4.93 0 10.37 1.39 16.34 4.18 5.97 2.79 9.89 4.18 11.75 4.18 1.52 0 5.48-1.44 11.87-4.3 6.38-2.87 11.85-4.25 16.41-4.14 15.65.34 27.24 6.06 34.78 17.15-12.77 7.73-19.06 18.23-18.89 31.5.17 10.13 3.84 18.49 11 25.07 7.16 6.58 15.54 10.15 25.13 10.7-2.12 6.56-4.79 12.52-8 17.89zm-22.25-104c0-8.34 2.89-16.14 8.68-23.4 7.23-8.9 15.82-13.54 25.79-13.9 1.86 8.35-1.1 16.65-8.9 24.9-7.22 8.35-15.93 12.63-26.1 12.83-.24-.26-.53-.78-1.47-2.43z" />
      </svg>
      {/* Badge Text */}
      <div className="flex flex-col items-start leading-none gap-0.5">
        <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">
          Coming soon to
        </span>
        <span className="text-xs font-semibold text-white">
          App Store
        </span>
      </div>
    </div>
  );
}
