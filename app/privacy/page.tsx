import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Game Vault",
  description: `Privacy policy for Game Vault by ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Game Vault">
      <p>
        <strong>Last updated:</strong> June 29, 2026
      </p>
      <p>
        Game Vault is built and published by {site.name}. We believe your gaming habits should remain private. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Data Storage & Privacy</h2>
      <p>
        Game Vault operates entirely locally on your iPhone. Your puzzle progress, high scores, active game states, and stats are stored directly in your device&apos;s sandbox storage. We do not run third-party databases, and we never collect, store, or sell your personal data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Apple iCloud Syncing</h2>
      <p>
        If you choose to sync your game progress across multiple personal devices, synchronization is handled securely and directly through Apple iCloud via your personal Apple ID login. {site.name} has no access to your iCloud account, your credentials, or the synced data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Third-Party Analytics & Ads</h2>
      <p>
        We do not integrate any tracking SDKs, cookies, or third-party analytics libraries. If we offer ad-supported features, ad delivery is handled securely using native iOS components which respect your system-level tracking preferences.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Contact Information</h2>
      <p>
        For privacy inquiries or support questions, please email us at{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
