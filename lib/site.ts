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
    tagline: "Engineered for the flight deck.",
    description:
      "A comprehensive flight logger and duty tracker that works entirely offline, built specifically to ensure seamless compliance with Canadian Aviation Regulations (CARs).",
    color: "blue" as const,
    icon: "/icon_pilot.png",
    mockup: "/pilot_logbook_ui.png",
    features: [
      "Offline Flight & Duty Logging: Track block, air, and duty times on the go",
      "CARs 700.15 & 700.16 Compliance: Built-in limit monitoring and rest period tracking",
      "Automatic Night calculations: Instant flight time distribution based on solar coordinates",
      "Export Logs: Export logs to PDF and CSV formats ready for audits",
      "Secure iCloud Sync: Sync seamlessly across your iOS devices using Apple ID",
      "100% Offline Capable: Designed for flight decks with zero cellular dependency",
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
      "A neon-drenched casino simulator packed with the classics — blackjack, roulette, plinko, slots, video poker, and baccarat. Built entirely for offline enjoyment with zero real money. Currently in active development.",
    color: "pink" as const,
    icon: "/icon_cyberpunk.png",
    mockup: "/vegas_cyberpunk_midnight_ui.png",
    features: [
      "Blackjack, roulette, slots & more",
      "Fully offline casino experience",
      "No real money or gambling risk",
      "Cyberpunk-styled neon aesthetics for iPhone",
    ],
    games: [
      "Roulette",
      "Blackjack",
      "Plinko",
      "Slots",
      "Video Poker",
      "Baccarat"
    ],
  },
] as const;
