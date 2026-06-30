import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackToTop } from "@/components/BackToTop";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { AppCardMockup } from "@/components/AppCardMockup";
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
            Anywhere.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Anytime.
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
              className="w-full object-contain select-none [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
            />
          </div>
        </div>
      </section>

      {/* ── Apps ── */}
      <section id="apps" className="py-32 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Ready Wherever You Are.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Designed to work anywhere—from long flights and road trips to cabins, campgrounds, and everywhere in between.
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
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
                      {app.description}
                    </p>

                    {/* App Store Badge */}
                    <div className="mb-6 scale-90 origin-left">
                      <AppStoreBadge />
                    </div>

                    {/* App Preview Mockup (Interactive 3D Tilt) */}
                    <AppCardMockup
                      src={app.mockup}
                      alt={`${app.name} interface preview`}
                      glowColor={app.color}
                    />

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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Ready Anywhere</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Whether you&apos;re flying, commuting, or completely offline, your apps are always with you.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="text-center md:text-left p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="3" ry="3"/><path d="M6 12h4"/><path d="M8 10v4"/><path d="M15 13h.01"/><path d="M18 11h.01"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Fun Without Friction</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Open an app and start playing. No clutter, no complicated setup.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="text-center md:text-left p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Built for iPhone</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Smooth, responsive, and designed to feel right at home on iOS.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Less Noise. More Play.</h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              We believe great apps shouldn&apos;t overwhelm you with ads, clutter, or unnecessary complexity. Just open the app and enjoy.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800 pt-12">
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 whitespace-nowrap">Made in Canada</h4>
                <p className="text-sm text-zinc-500 font-medium max-w-[200px] leading-relaxed">Designed and developed in Alberta</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 whitespace-nowrap">Built to Play</h4>
                <p className="text-sm text-zinc-500 font-medium max-w-[200px] leading-relaxed">Regular updates and long-term support</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 whitespace-nowrap">Native Performance</h4>
                <p className="text-sm text-zinc-500 font-medium max-w-[200px] leading-relaxed">Built for iPhone</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 whitespace-nowrap">Always Improving</h4>
                <p className="text-sm text-zinc-500 font-medium max-w-[200px] leading-relaxed">New features, refinements, and new apps in development</p>
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
              A Few Things You Might Be Wondering.
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            <ScrollReveal delay={1}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    What platforms do you support?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  403 Studio currently builds exclusively for iPhone. By focusing on one platform, we can create faster, more polished experiences that feel right at home on iOS.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    How much do your apps cost?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Our goal is simple: build great apps that are easy to enjoy. Some apps are free, while others may offer premium features or one-time upgrades. Pricing is always straightforward and clearly explained.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    How often are your apps updated?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  We&apos;re constantly refining our apps with new features, performance improvements, bug fixes, and fresh content. Every update is an opportunity to make the experience even better.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Can I request a feature?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Absolutely. Some of our best ideas come directly from our community. If there&apos;s something you&apos;d like to see, we&apos;d love to hear from you.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={5}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Why choose 403 Studio?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  We believe great apps should be simple, dependable, and enjoyable to use. Instead of building dozens of apps, we focus on creating products that are thoughtfully designed, regularly updated, and built to last.
                </p>
              </details>
            </ScrollReveal>

            <ScrollReveal delay={6}>
              <details className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    What&apos;s next for 403 Studio?
                  </h3>
                  <span className="ml-1.5 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1.5 text-zinc-900 dark:text-zinc-50 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  We&apos;re just getting started. From timeless games to practical everyday tools, we&apos;re building a growing collection of iPhone apps—with plenty more on the way.
                </p>
              </details>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center border-t border-zinc-200 dark:border-zinc-800">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Questions? We&apos;ve Got Answers.</h2>
          <p className="text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl mx-auto">
            If there&apos;s anything else you&apos;d like to know, or if you want to request a feature, we&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Email Us
          </a>
        </ScrollReveal>
      </section>

      <BackToTop />
      <SiteFooter />
    </div>
  );
}
