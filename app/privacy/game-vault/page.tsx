import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Game Vault",
  description: `Official Privacy Policy for Game Vault by ${site.name}.`,
  alternates: {
    canonical: "/privacy/game-vault",
  },
};

export default function GameVaultPrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Game Vault">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        Game Vault is built and published by {site.name}. We believe your gaming habits and high scores should remain private. This Privacy Policy details how Game Vault handles your data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Local Storage & Zero-Data Collection</h2>
      <p>
        Game Vault runs fully locally on your iPhone. Your active game boards, score configurations, high scores, levels, active configurations, and puzzle stats are stored inside your device&apos;s sandboxed local filesystem. 
      </p>
      <p>
        {site.name} does not operate external database servers, and we never collect, monitor, track, store, or sell any information related to your gameplay.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Secure iCloud Synchronization</h2>
      <p>
        If you choose to sync your board game progress across multiple personal devices, synchronization is handled securely and directly through Apple iCloud via your personal Apple ID login. {site.name} has no access to your iCloud account, your credentials, or the synced game data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & SDKs</h2>
      <p>
        Game Vault does not request or require access to sensitive device permissions such as Location Services, Contacts, Address Books, Microphone, or Camera. The app does not integrate any third-party behavioral tracking SDKs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. GDPR & CCPA Rights</h2>
      <p>
        Because we do not store, transfer, or process user data on our own servers, your regulatory rights under GDPR or CCPA (access, export, modify, or erase your data) are fully under your own control. You can delete all local records simply by deleting the app or purging your local iCloud app storage.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Contact Information</h2>
      <p>
        For inquiries regarding our privacy standards or Game Vault support, contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
