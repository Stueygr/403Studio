export const site = {
  name: "403 Studio",
  tagline: "Your Data. Your Device. No Exceptions.",
  description:
    "Fast, private apps for iPhone, iPad, and Mac — no accounts, no subscriptions, no cloud required.",
  url: "https://www.403studio.ca",
  email: "hello@403studio.ca",
} as const;

export const apps = [
  {
    slug: "pilot-logbook",
    name: "Pilot Logbook",
    tagline: "Engineered for the flight deck.",
    description:
      "A comprehensive flight logger and duty tracker that works entirely offline, built specifically to ensure seamless compliance with Canadian Aviation Regulations (CARs).",
    color: "blue" as const,
    icon: "/icon_pilot.png",
    mockup: "/pilot_logbook_ui.png",
    features: [
      "Offline flight logging and duty tracking",
      "CARs compliance built in",
      "Native iPhone, iPad, and Mac apps",
      "No accounts or cloud sync required",
    ],
  },
  {
    slug: "game-vault",
    name: "Game Vault - No wifi Games",
    tagline: "All the games you know and love — no Wi-Fi needed.",
    description:
      "Chess, checkers, tic-tac-toe, sudoku, and so many more classic games, all built for offline play. Perfect for long flights, subway commutes, or anywhere you lose signal. No ads, no accounts, just the timeless games you grew up with.",
    color: "purple" as const,
    icon: "/icon_gamevault.png",
    mockup: "/game_vault_ui.png",
    features: [
      "Chess, checkers, tic-tac-toe, sudoku & more",
      "Works offline — perfect for flights & commutes",
      "No ads, no accounts, no in-app purchases",
      "Clean, beautiful interfaces for every game",
    ],
  },
  {
    slug: "vegas-cyberpunk-midnight",
    name: "Vegas Cyberpunk Midnight",
    tagline: "The strip, in your pocket.",
    description:
      "A neon-drenched casino simulator packed with the classics — poker, blackjack, slots, roulette, and more. Built entirely for offline enjoyment with zero real money, zero ads, and zero internet required. Just pure Vegas vibes wherever you are.",
    color: "pink" as const,
    icon: "/icon_cyberpunk.png",
    mockup: "/vegas_cyberpunk_midnight_ui.png",
    features: [
      "Poker, blackjack, slots, roulette & more",
      "Fully offline casino experience",
      "No real money — no in-app purchases",
      "Cyberpunk-styled neon aesthetics",
    ],
  },
] as const;
