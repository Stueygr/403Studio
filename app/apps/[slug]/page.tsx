import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { apps, site } from "@/lib/site";

import { AppStoreBadge } from "@/components/AppStoreBadge";

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
    title: `${app.name} — ${app.tagline}`,
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
      border: "border-blue-500/20",
    },
    purple: {
      gradient: "from-purple-500/20 to-pink-500/20",
      text: "text-purple-500",
      dot: "bg-purple-500",
      border: "border-purple-500/20",
    },
    pink: {
      gradient: "from-pink-500/20 to-rose-500/20",
      text: "text-pink-500",
      dot: "bg-pink-500",
      border: "border-pink-500/20",
    },
  }[app.color];



  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30">
      <SiteNav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#apps"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-355 mb-8 inline-flex items-center gap-2 group transition-colors"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span> All apps
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Details & Features */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-10">
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${accent.text}`}>
                  {site.name}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 shadow-sm shrink-0">
                    <Image
                      src={app.icon}
                      alt={`${app.name} app icon`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{app.name}</h1>
                </div>
                <p className="text-xl font-medium text-zinc-650 dark:text-zinc-300 mb-6">{app.tagline}</p>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{app.description}</p>
              </div>

              <h2 className="text-xl font-bold mb-6 tracking-tight">Key Capabilities</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {app.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 shadow-sm"
                  >
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${accent.dot}`} />
                    <span className="text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-zinc-200/85 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <AppStoreBadge />
                  <p className="text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed max-w-xs">
                    Exclusively for iPhone. Securely synchronized via your own personal iCloud.
                  </p>
                </div>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`${app.name} — notify me`)}`}
                  className="whitespace-nowrap px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg"
                >
                  Notify me
                </a>
              </div>
            </div>

            {/* Right Column: Premium Mockup Graphic */}
            <div className="lg:col-span-5 relative group lg:sticky lg:top-28">
              {/* Backdrop Glow */}
              <div
                className={`absolute -inset-4 rounded-3xl bg-gradient-to-tr ${accent.gradient} opacity-30 blur-2xl group-hover:opacity-45 transition-opacity duration-1000 -z-10`}
              />

              {/* Mockup Showcase Bezel */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md p-3 shadow-2xl">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-zinc-950">
                  <Image
                    src={app.mockup}
                    alt={`${app.name} High-Fidelity UI Interface Screenshot`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                    className="object-cover object-top select-none group-hover:scale-102 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
