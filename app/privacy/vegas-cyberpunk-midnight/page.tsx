import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Vegas Cyberpunk Midnight",
  description: `Privacy policy for Vegas Cyberpunk Midnight by ${site.name}.`,
};

export default function VegasCyberpunkPrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Vegas Cyberpunk Midnight">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        Vegas Cyberpunk Midnight is built and published by {site.name}. We believe your simulation stats and offline gaming metrics should remain entirely your own.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Game Stats & Privacy</h2>
      <p>
        Vegas Cyberpunk Midnight operates entirely locally on your iPhone. Your virtual bankroll balance, blackjack hands, roulette spins, video poker metrics, slot parameters, and settings are saved directly inside your device&apos;s sandbox storage. We do not run remote game databases, and we never collect, store, share, or sell your play stats.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Apple iCloud Syncing</h2>
      <p>
        If you enable cross-device progress syncing, your bankroll balances and slots progress are synchronized securely and directly to Apple&apos;s CloudKit servers using your personal Apple ID credentials. {site.name} has no access to your iCloud account or any synced gaming variables.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Ads & System-Level Tracking</h2>
      <p>
        If we offer ad-supported gameplay features, ad delivery is handled securely using Apple&apos;s native iOS components which strictly respect your system-level tracking preferences. We do not track you across other applications.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Contact Information</h2>
      <p>
        For inquiries regarding our privacy standards, contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
