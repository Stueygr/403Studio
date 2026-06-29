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
    tagline: "Your campaigns, kept local.",
    description:
      "The ultimate companion for your deepest campaigns. Whether you are strategizing your next Honor Mode build, resolving complex questlines, or managing competitive rosters, your data remains secure and locally accessible.",
    color: "purple" as const,
    icon: "/icon_gamevault.png",
    mockup: "/game_vault_ui.png",
    features: [
      "Campaign and roster management",
      "Quest and build tracking",
      "Fully offline and private",
      "Sync-free by design",
    ],
  },
  {
    slug: "vegas-cyberpunk-midnight",
    name: "Vegas Cyberpunk Midnight",
    tagline: "Jack in. Stay local.",
    description:
      "An offline-first character sheet, cyberware planner, and campaign tracker built for cyberpunk tabletop roleplaying. Keep your gear sheets, street cred, and runners' stats secure on your device, far away from corporate cloud tracking.",
    color: "pink" as const,
    icon: "/icon_cyberpunk.png",
    mockup: "/vegas_cyberpunk_midnight_ui.png",
    features: [
      "Cyberware implant grid and planner",
      "Offline character sheets and stats tracker",
      "Hacking deck and credit ledger",
      "Zero corporate cloud tracking or net access",
    ],
  },
] as const;
