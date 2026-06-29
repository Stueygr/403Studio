import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { apps, site } from "@/lib/site";

const colorStyles = {
  blue: {
    icon: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    link: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    link: "text-purple-500 hover:text-purple-600 dark:hover:text-purple-400",
  },
  pink: {
    icon: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    link: "text-pink-500 hover:text-pink-600 dark:hover:text-pink-400",
  },
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30">
      <SiteNav />

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 animate-pulse blur-3xl opacity-50 -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Software, <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
              Beautifully Local.
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

          {/* Premium brand hero mockup */}
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-zinc-200/40 dark:border-zinc-850 bg-white/5 dark:bg-zinc-900/5 backdrop-blur-md shadow-2xl dark:shadow-indigo-500/5 transition-all duration-700 hover:shadow-indigo-500/10">
            <Image
              src="/studio_hero.png"
              alt="403 Studio Local-First Architecture"
              width={1200}
              height={700}
              priority
              className="w-full object-cover select-none scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-50 via-zinc-50/50 to-transparent dark:from-zinc-950 dark:via-zinc-950/50 pointer-events-none" />
          </div>
        </div>
      </section>

      <section id="apps" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Crafted for focus.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Designed to work anywhere, especially when you are off the grid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {apps.map((app) => {
            const styles = colorStyles[app.color];
            
            // Map slug to corresponding UI mockup
            const mockupSrc = {
              "pilot-logbook": "/pilot_logbook_ui.png",
              "game-vault": "/game_vault_ui.png",
              "vegas-cyberpunk-midnight": "/vegas_cyberpunk_midnight_ui.png",
            }[app.slug] || "/studio_hero.png";

            return (
              <div
                key={app.slug}
                className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${styles.icon}`}
                  >
                    <span className="text-xl font-bold">{app.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {app.description}
                  </p>
                  
                  {/* Miniature App Preview Image */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-zinc-150 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                    <Image
                      src={mockupSrc}
                      alt={`${app.name} Interface Dashboard Mockup`}
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
            );
          })}
        </div>
      </section>

      <section
        id="about"
        className="py-32 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Built for the Apple Ecosystem.</h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
            At {site.name}, we believe your data is yours. In an era of mandatory accounts, subscription
            fatigue, and constant connectivity, we are returning to the roots of great software: fast,
            natively compiled applications that live entirely on your device.
          </p>
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
        </div>
      </section>

      <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
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
      </section>

      <SiteFooter />
    </div>
  );
}
