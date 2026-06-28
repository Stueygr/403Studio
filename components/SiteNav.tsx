import Link from "next/link";
import { site } from "@/lib/site";
import { MobileNav } from "./MobileNav";

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-xl saturate-150">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          {site.name}
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/#apps" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            Apps
          </Link>
          <Link href="/#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            About
          </Link>
          <Link href="/#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            Contact
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
