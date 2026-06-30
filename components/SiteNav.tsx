import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-xl saturate-150">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 overflow-hidden dark:invert-0 invert select-none">
            <Image
              src="/logo.jpg"
              alt="403 Studio Logo"
              fill
              sizes="48px"
              priority
              className="object-cover scale-110"
            />
          </div>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
