import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { apps, site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

import { AppStoreBadge } from "@/components/AppStoreBadge";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";

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
    alternates: {
      canonical: `/apps/${slug}`,
    },
    openGraph: {
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
      images: [{ url: app.icon, width: 512, height: 512, alt: `${app.name} app icon` }],
    },
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



  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": app.description,
    "operatingSystem": "iOS",
    "applicationCategory": app.slug === "pilot-logbook"
      ? "UtilitiesApplication"
      : app.slug === "vegas-cyberpunk-midnight"
      ? "CasinoApplication"
      : "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "CAD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "403 Studio",
      "url": "https://www.403studio.ca"
    },
    "screenshot": "screenshots" in app && app.screenshots
      ? app.screenshots.map((ss) => `${site.url}${ss.src}`)
      : [`${site.url}${app.mockup}`],
    "image": `${site.url}${app.icon}`
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30">
      <SiteNav />
      <JsonLd data={appSchema} />

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
                      className={`w-full h-full object-cover ${app.iconDark ? "dark:hidden" : ""}`}
                    />
                    {app.iconDark && (
                      <Image
                        src={app.iconDark}
                        alt={`${app.name} app icon (dark)`}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{app.name}</h1>
                </div>
                <p className="text-xl font-medium text-zinc-650 dark:text-zinc-300 mb-6">{app.tagline}</p>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">{app.description}</p>
                {"websiteUrl" in app && app.websiteUrl && "websiteLabel" in app && app.websiteLabel && (
                  <div className="mb-6">
                    <a
                      href={app.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm ${accent.text}`}
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                      </svg>
                      Visit {app.websiteLabel}
                      <span aria-hidden="true" className="opacity-70">&rarr;</span>
                    </a>
                  </div>
                )}
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

              {"games" in app && app.games && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-6 tracking-tight">Included Games</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {app.games.map((game) => (
                      <div
                        key={game}
                        className="px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 shadow-sm text-sm font-semibold text-center text-zinc-700 dark:text-zinc-300"
                      >
                        {game}
                      </div>
                    ))}
                    <div className="px-4 py-3 rounded-xl bg-zinc-150/40 dark:bg-zinc-900/30 border border-dashed border-zinc-300 dark:border-zinc-800 text-sm font-medium text-center text-zinc-400 dark:text-zinc-550">
                      + More to Come
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-zinc-200/85 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <AppStoreBadge href={app.appStoreUrl} betaUrl={"betaUrl" in app ? app.betaUrl : null} />
                  <div className="flex flex-col items-center sm:items-start">
                    {"betaUrl" in app && app.betaUrl && !app.appStoreUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                        Open Beta Now Available
                      </span>
                    )}
                    <p className="text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed max-w-xs mb-2">
                      {app.syncDescription}
                    </p>
                    <div className="flex gap-3 text-[10px] sm:text-xs text-zinc-450 dark:text-zinc-550 font-medium">
                      <Link
                        href={`/privacy/${app.slug}`}
                        className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <span>·</span>
                      <Link
                        href={`/terms/${app.slug}`}
                        className="hover:underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                      >
                        Terms of Service
                      </Link>
                    </div>
                  </div>
                </div>
                {app.appStoreUrl ? (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg"
                  >
                    Download
                  </a>
                ) : "betaUrl" in app && app.betaUrl ? (
                  <a
                    href={app.betaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg"
                  >
                    Join Open Beta
                  </a>
                ) : (
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`${app.name} — notify me`)}`}
                    className="whitespace-nowrap px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg"
                  >
                    Notify me
                  </a>
                )}
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
                {"screenshots" in app && app.screenshots ? (
                  <ScreenshotGallery screenshots={app.screenshots} color={app.color} />
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
