import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { apps, site } from "@/lib/site";

const colorStyles = {
  blue: {
    icon: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    link: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    link: "text-purple-500 hover:text-purple-600 dark:hover:text-purple-400",
    glow: "group-hover:shadow-purple-500/10",
  },
  pink: {
    icon: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    link: "text-pink-500 hover:text-pink-600 dark:hover:text-pink-400",
    glow: "group-hover:shadow-pink-500/10",
  },
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 animate-pulse blur-3xl opacity-50 -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Quality Apps.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Offline & Locally Made.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {site.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#apps"
              className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              View Our Apps
            </Link>
            <Link
              href="#about"
              className="px-8 py-3 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 backdrop-blur-md transition-colors duration-300 border border-zinc-200/25 dark:border-zinc-700/25"
            >
              Learn More
            </Link>
          </div>

          {/* Device composite hero */}
          <div className="relative w-full max-w-4xl">
            <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10 opacity-60" />
            <Image
              src="/hero_devices.png"
              alt="403 Studio apps running on iPhone, iPad, and Mac"
              width={1200}
              height={700}
              priority
              className="w-full object-contain select-none"
            />
          </div>
        </div>
      </section>

      {/* ── Apps ── */}
      <section id="apps" className="py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Crafted for focus.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Designed to work anywhere, especially when you are off the grid.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {apps.map((app, index) => {
            const styles = colorStyles[app.color];

            return (
              <ScrollReveal key={app.slug} delay={index + 1}>
                <div
                  className={`group relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl ${styles.glow} hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1 h-full`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* App Icon */}
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 border border-zinc-200/60 dark:border-zinc-800 shadow-sm">
                      <Image
                        src={app.icon}
                        alt={`${app.name} app icon`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                      {app.description}
                    </p>

                    {/* App Preview */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-zinc-200/60 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                      <Image
                        src={app.mockup}
                        alt={`${app.name} interface preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top select-none group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-zinc-950/20 pointer-events-none" />
                    </div>

                    <Link
                      href={`/apps/${app.slug}`}
                      className={`self-start text-sm font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform ${styles.link}`}
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
              Why we build differently.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <div className="text-center md:text-left p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Privacy First</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Your data never leaves your device. No telemetry, no analytics, no tracking — ever.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="text-center md:text-left p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Native Speed</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Built with Swift and SwiftUI for instant, fluid performance that web wrappers can never match.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="text-center md:text-left p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 8 2 2-2 2 2 2-2 2"/><path d="m22 8-2 2 2 2-2 2 2 2"/><line x1="9" x2="15" y1="12" y2="12"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Offline Always</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Full functionality without Wi-Fi, cellular, or internet of any kind. Your apps just work.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="py-32 px-6 bg-zinc-100 dark:bg-zinc-900/50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Built for the Apple Ecosystem.</h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
              At {site.name}, we believe your data is yours. In an era of mandatory accounts, subscription
              fatigue, and constant connectivity, we are returning to the roots of great software: fast,
              natively compiled applications that live entirely on your device.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div>
                <h4 className="text-4xl font-bold tracking-tighter mb-2">100%</h4>
                <p className="text-sm text-zinc-500 font-medium">Offline Capable</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold tracking-tighter mb-2">Zero</h4>
                <p className="text-sm text-zinc-500 font-medium">Cloud Tracking</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold tracking-tighter mb-2">Native</h4>
                <p className="text-sm text-zinc-500 font-medium">Performance</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold tracking-tighter mb-2">Swift</h4>
                <p className="text-sm text-zinc-500 font-medium">& React Tech</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            <ScrollReveal delay={1}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    How is my data stored and synced?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-650 dark:text-zinc-400">
                  Your data resides directly on your device. Any synchronization between your devices is handled securely via Apple iCloud using your personal Apple ID login. Your logs and game records are not available to anyone but you or Apple—we run zero third-party databases, ensuring complete privacy.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    How much will the apps cost?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-650 dark:text-zinc-400">
                  We are focusing on premium visual polish first. While we are still finalizing our pricing model, we plan to support continued development through a combination of ad-supported versions or optional premium upgrades.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Which platforms are supported?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-650 dark:text-zinc-400">
                  Our apps are designed natively and built exclusively for iPhone. Building natively allows us to make interfaces that load instantly, feel incredibly fluid, and run reliably offline.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Platform badges ── */}
      <section className="py-16 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-6">
              Coming soon to
            </p>
            <div className="flex items-center justify-center text-zinc-450 dark:text-zinc-550">
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-650 dark:text-zinc-350"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">iPhone</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get in touch</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            Questions about our apps, partnerships, or support? We would love to hear from you.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            {site.email}
          </a>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </div>
  );
}
