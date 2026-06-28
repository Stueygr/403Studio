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

      <div className="text-sm text-zinc-500 dark:text-zinc-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
