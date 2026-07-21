export const site = {
  name: "403 Studio",
  tagline: "Anywhere. Anytime.",
  description:
    "Thoughtfully designed iPhone apps that are fast, reliable, and made to work wherever life takes you.",
  url: "https://www.403studio.ca",
  email: "hello@403studio.ca",
} as const;

export const apps = [
  {
    slug: "pilot-logbook",
    name: "Pilot Logbook",
    tagline: "The pilot's logbook built for Canadian pilots. Web and iPhone/iPad. No subscriptions required—unless you want more.",
    description:
      "Pilot Logbook is the flight logging app Canadian pilots trust. Log flights, track currency, manage your fleet, and export PDFs — all on your device, synced across web and iPhone/iPad. Free to start. Premium features available.\n\nYour logbook. Your flying history. Pilot Logbook gives you a clean, fast way to log every flight — offline on your phone, synced to the web when you connect. Simple logging, powerful insights, and full privacy. All your data stays yours.",
    color: "blue" as const,
    icon: "/icon_pilot.jpg",
    iconDark: "/icon_pilot_dark.jpg",
    mockup: "/pilot_logbook_ui_v2.png",
    appStoreUrl: null,
    betaUrl: "https://testflight.apple.com/join/dbFtgJg6",
    websiteUrl: "https://pilotlogbook.ca",
    websiteLabel: "PilotLogbook.ca",
    syncDescription: "For Web, iPhone & iPad. Securely synchronized to PilotLogbook.ca. Your logbook, your data — encrypted and backed up to your private account.",
    ctaText: "Start logging now — web or iPhone/iPad. Free.",
    features: [
      "Flight logging with aircraft type, registration, takeoff/landing day/night, crew roles, and hours",
      "Currency tracking — see your recency at a glance; build custom currency rules tailored to your operation",
      "Route map — visualize your flying history, see patterns in where you fly",
      "Fleet manager — track your aircraft types; registration lookup pre-fills the plane",
      "Aviation documents — license, medical, endorsements with expiry dates",
      "CSV import/export — bring in old logbooks or export for backup",
      "PDF export — clean logbook pages and summaries",
      "Logbook scanning (iPhone/iPad) — photograph pages, our OCR extracts the data in seconds. The photo is deleted after—we only keep the flight info",
      "Web + iPhone/iPad — log anywhere, sync everywhere; works offline, picks up where you left off"
    ],
    faqs: [
      {
        q: "Is my data safe?",
        a: "Yes. Your logbook is private to you. When you use logbook scanning, we process the photo to extract flight data (dates, times, aircraft info), then immediately delete the photo—we never store it. No personal documents, no keeping images. Your flight data syncs securely across your devices."
      },
      {
        q: "What if I lose internet?",
        a: "The app works completely offline. Log flights, edit, add notes—everything stays on your device. When you reconnect, everything syncs automatically across your devices."
      },
      {
        q: "What's the difference between free and premium?",
        a: "Free gives you full logging, tracking, and export. Premium unlocks advanced features like cloud AI scanning enhancement and priority support. Start free, upgrade when you need more."
      },
      {
        q: "Can I import my old logbook?",
        a: "Yes. CSV import handles most formats. If your export has Date, Aircraft Type, Registration, From, To, and hours, we'll read it."
      },
      {
        q: "How does logbook scanning work?",
        a: "Point your iPhone/iPad camera at a logbook page. Our OCR reads the handwriting or print, extracts the flight info, and fills in the form for you. The photo is deleted immediately—we only save the flight data."
      },
      {
        q: "Can I see my routes on a map?",
        a: "Yes. The Route Map shows everywhere you've flown, making it easy to spot patterns and relive your flying history."
      },
      {
        q: "What devices does it work on?",
        a: "iPhone, iPad, and web browsers (Chrome, Safari, Firefox, Edge)."
      }
    ]
  },
  {
    slug: "game-vault",
    name: "Game Vault - No Wi-Fi Games",
    tagline: "All the games you know and love — no Wi-Fi needed.",
    description:
      "Chess, checkers, tic-tac-toe, sudoku, and so many more classic games, all built for offline play. Perfect for long flights, subway commutes, or anywhere you lose signal. The timeless games you grew up with, plus a few originals we think you'll love.",
    color: "purple" as const,
    icon: "/icon_gamevault.png",
    iconDark: null,
    mockup: "/game_vault_mockup.png",
    appStoreUrl: null,
    betaUrl: "https://testflight.apple.com/join/zbA8DNVM",
    syncDescription: "For iPhone & iPad. Securely synchronized via your own personal iCloud.",
    screenshots: [
      { src: "/gv_vault_smash.jpg", alt: "Vault Smash game showing brick breaker style gameplay" },
    ],
    features: [
      "Chess, checkers, tic-tac-toe, sudoku & more",
      "Works offline — perfect for flights & commutes",
      "Daily challenges & XP progression system",
      "90+ achievements & leaderboards to compete with your friends",
      "Secure iCloud synchronization",
      "Clean, beautiful interface for iPhone & iPad",
    ],
    games: [
      "Chess",
      "Checkers",
      "Tic-Tac-Toe",
      "4 in a Row",
      "Reversi",
      "Naval Strike",
      "Dots & Boxes",
      "Sudoku",
      "Minesweeper",
      "Vault 2048",
      "15 Puzzle",
      "Vault Solitaire",
      "Snake",
      "Memory Match",
      "Vault Smash",
      "Vault Jump",
      "Hangman",
      "Word Search"
    ],
  },
  {
    slug: "neon-siege",
    name: "Neon Siege",
    tagline: "Hold the line.",
    description:
      "A neon-infused tower defense game built for offline action. Command unique defense towers to hold the line against waves of incoming creeps across challenging paths. No energy timers, no internet connection required — pure strategy at your fingertips.",
    color: "pink" as const,
    icon: "/icon_neonsiege.jpg",
    iconDark: null,
    mockup: "/neon_siege_mockup.png",
    appStoreUrl: null,
    betaUrl: null,
    syncDescription: "Exclusively for iPhone. Securely synchronized via your own personal iCloud.",
    screenshots: [
      { src: "/ns_menu.png", alt: "Neon Siege main menu screen" },
      { src: "/ns_gameplay_1.png", alt: "Minimalist tower defense grid with 6 towers and 7 creeps" },
      { src: "/ns_gameplay_2.png", alt: "Winding pathway under heavy laser defense" },
    ],
    features: [
      "Command 6 unique towers with upgrade paths",
      "Defend against various waves of enemy creeps",
      "Fully offline play with zero energy timers",
      "Clean, modern neon sci-fi user interface",
      "Secure synchronization via personal iCloud",
    ],
    games: [
      "Tower Defense",
      "Strategy",
      "Offline Games",
      "Neon Siege"
    ],
  },
] as const;
