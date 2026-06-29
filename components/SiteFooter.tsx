import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10 px-6 text-center">
      <div className="max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workflow?</h2>
        <Link
          href="/#contact"
          className="inline-block px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          Get in touch with {site.name}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-600">
          <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
            Terms of Service
          </Link>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Stueygr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
