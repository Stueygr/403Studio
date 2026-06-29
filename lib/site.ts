export const site = {
  name: "403 Studio",
  tagline: "Software, Beautifully Local.",
  description:
    "We build uncompromising, offline-first applications for iPhone, iPad, and Mac. Fast, native experiences with no forced cloud sync and no tracking.",
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
    features: [
      "Cyberware implant grid and planner",
      "Offline character sheets and stats tracker",
      "Hacking deck and credit ledger",
      "Zero corporate cloud tracking or net access",
    ],
  },
] as const;
