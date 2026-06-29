import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30 flex flex-col justify-between">
      <SiteNav />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50 -z-10 animate-pulse" />

        <div className="max-w-md mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">
            404 Error
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-zinc-650 dark:text-zinc-400 mb-8 leading-relaxed">
            Sorry, we couldn&apos;t find the page you are looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
