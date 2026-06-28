import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <SiteNav />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert prose-headings:tracking-tight">
          <Link
            href="/"
            className="no-underline text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 mb-8 inline-block"
          >
            &larr; Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          <div className="text-zinc-600 dark:text-zinc-400 space-y-6 leading-relaxed">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
