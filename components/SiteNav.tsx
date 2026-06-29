import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-xl saturate-150">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="font-semibold text-lg tracking-tight flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <rect width="32" height="32" rx="8" className="fill-zinc-900 dark:fill-white" />
            <text x="16" y="22" textAnchor="middle" className="fill-white dark:fill-zinc-900" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
          </svg>
          {site.name}
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
