import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-blue-500/30">
      
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-xl saturate-150">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            403 Studio
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="#apps" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Apps</Link>
            <Link href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</Link>
            <Link href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 animate-pulse blur-3xl opacity-50 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Software, <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
              Beautifully Local.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build uncompromising, offline-first applications for iPhone, iPad, and Mac. Fast, native experiences with no forced cloud sync and no tracking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#apps" className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:scale-105 transition-transform duration-300">
              View Our Apps
            </Link>
            <Link href="#about" className="px-8 py-3 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-white font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 backdrop-blur-md transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section id="apps" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Crafted for focus.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Designed to work anywhere, especially when you are off the grid.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Pilot Logbook Card */}
          <div className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-8 border border-blue-500/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Pilot Logbook</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
                Engineered for the flight deck. A comprehensive flight logger and duty tracker that works entirely offline, built specifically to ensure seamless compliance with Canadian Aviation Regulations (CARs).
              </p>
              <button className="self-start text-sm font-semibold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Explore Logbook <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Game Vault Card */}
          <div className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-8 border border-purple-500/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Game Vault</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
                The ultimate companion for your deepest campaigns. Whether you are strategizing your next Honor Mode build, resolving complex questlines, or managing competitive rosters, your data remains secure and locally accessible.
              </p>
              <button className="self-start text-sm font-semibold text-purple-500 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Discover Vault <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Built for the Apple Ecosystem.</h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
            At 403 Studio, we believe your data is yours. In an era of mandatory accounts, subscription fatigue, and constant connectivity, we are returning to the roots of great software: fast, natively compiled applications that live entirely on your device.
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

      {/* CTA / Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10 px-6 text-center">
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <Link href="#contact" className="inline-block px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Get in touch with 403 Studio
          </Link>
        </div>
        
        <div className="text-sm text-zinc-500 dark:text-zinc-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} 403 Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="Normally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
