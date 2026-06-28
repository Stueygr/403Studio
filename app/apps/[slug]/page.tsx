import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { apps, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return { title: "App Not Found" };

  return {
    title: app.name,
    description: app.description,
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const accent = {
    blue: {
      gradient: "from-blue-500/20 to-indigo-500/20",
      text: "text-blue-500",
      dot: "bg-blue-500",
    },
    purple: {
      gradient: "from-purple-500/20 to-pink-500/20",
      text: "text-purple-500",
      dot: "bg-purple-500",
    },
  }[app.color];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <SiteNav />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#apps"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 mb-8 inline-block"
          >
            &larr; All apps
          </Link>

          <div className={`rounded-3xl bg-gradient-to-br ${accent.gradient} p-px mb-12`}>
            <div className="rounded-3xl bg-white dark:bg-zinc-900 p-10 md:p-14">
              <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${accent.text}`}>
                {site.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{app.name}</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">{app.tagline}</p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{app.description}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">What you get</h2>
          <ul className="space-y-4 mb-12">
            {app.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
              >
                <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${accent.dot}`} />
                {feature}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-8 text-center">
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Available soon on the App Store for iPhone, iPad, and Mac.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(`${app.name} — notify me`)}`}
              className="inline-block px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:scale-105 transition-transform"
            >
              Request launch notification
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
