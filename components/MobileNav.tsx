"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#apps", label: "Apps" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
