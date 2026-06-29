export const site = {
  name: "403 Studio",
  tagline: "Quality Apps, Offline & Locally Made.",
  description:
    "Fast, private apps for iPhone — no third-party accounts, securely synced via your own iCloud.",
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
      "Native iPhone application",
      "Secure iCloud synchronization support",
    ],
  },
  {
    slug: "game-vault",
    name: "Game Vault - No wifi Games",
    tagline: "All the games you know and love — no Wi-Fi needed.",
    description:
      "Chess, checkers, tic-tac-toe, sudoku, and so many more classic games, all built for offline play. Perfect for long flights, subway commutes, or anywhere you lose signal. Just the timeless games you grew up with.",
    color: "purple" as const,
    icon: "/icon_gamevault.png",
    mockup: "/game_vault_ui.png",
    features: [
      "Chess, checkers, tic-tac-toe, sudoku & more",
      "Works offline — perfect for flights & commutes",
      "Secure iCloud synchronization support",
      "Clean, beautiful interface designed for iPhone",
    ],
    games: [
      "Chess",
      "Checkers",
      "Tic-Tac-Toe",
      "Connect Four",
      "Reversi",
      "Battleship",
      "Dots & Boxes",
      "Sudoku",
      "Minesweeper",
      "2048",
      "15 Puzzle",
      "Vault Solitaire",
      "Snake",
      "Memory Match",
      "Vault Smash",
      "Flappy Vault",
      "Hangman",
      "Word Search"
    ],
  },
  {
    slug: "vegas-cyberpunk-midnight",
    name: "Vegas Cyberpunk Midnight",
    tagline: "The strip, in your pocket.",
    description:
      "A neon-drenched casino simulator packed with the classics — poker, blackjack, slots, roulette, and more. Built entirely for offline enjoyment with zero real money. Just pure Vegas vibes wherever you are.",
    color: "pink" as const,
    icon: "/icon_cyberpunk.png",
    mockup: "/vegas_cyberpunk_midnight_ui.png",
    features: [
      "Poker, blackjack, slots, roulette & more",
      "Fully offline casino experience",
      "No real money or gambling risk",
      "Cyberpunk-styled neon aesthetics for iPhone",
    ],
  },
] as const;
