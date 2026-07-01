import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Vegas Cyberpunk Midnight",
  description: `Privacy policy for Vegas Cyberpunk Midnight by ${site.name}.`,
  alternates: {
    canonical: "/privacy/vegas-cyberpunk-midnight",
  },
};

export default function VegasCyberpunkPrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Vegas Cyberpunk Midnight">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        Vegas Cyberpunk Midnight is built and published by {site.name}. We believe your simulation stats and offline gaming metrics should remain entirely your own. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Game Stats & Privacy</h2>
      <p>
        Vegas Cyberpunk Midnight operates entirely locally on your iPhone. Your virtual bankroll balance, blackjack hands, roulette spins, video poker metrics, slot parameters, and settings are saved directly inside your device&apos;s sandbox storage. We do not run remote game databases, and we never collect, store, share, or sell your play stats.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Apple iCloud Syncing</h2>
      <p>
        If you enable cross-device progress syncing, your bankroll balances and slots progress are synchronized securely and directly to Apple&apos;s CloudKit servers using your personal Apple ID credentials. {site.name} has no access to your iCloud account or any synced gaming variables.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & SDKs</h2>
      <p>
        Vegas Cyberpunk Midnight does not request or require access to sensitive system permissions such as GPS Location Services, Contacts, Microphone, or Camera. The app does not integrate any third-party behavioral tracking SDKs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. GDPR & CCPA Rights</h2>
      <p>
        Because we do not store, transfer, or process user data on our own servers, your regulatory rights under GDPR or CCPA (access, export, modify, or erase your data) are fully under your own control. You can delete all local records simply by deleting the app or purging your local iCloud app storage.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Contact Information</h2>
      <p>
        For inquiries regarding our privacy standards, contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
