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
        <strong>Last updated:</strong> July 10, 2026
      </p>
      <p>
        Game Vault is built and published by {site.name}. We believe your gaming habits and high scores should remain private. This Privacy Policy details how Game Vault handles your data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Core Gameplay & Local Storage</h2>
      <p>
        Game Vault runs fully locally on your iPhone. Your active game boards, score configurations, high scores, levels, active configurations, and puzzle stats are stored inside your device&apos;s sandboxed local filesystem. 
      </p>
      <p>
        {site.name} does not operate external database servers, and we never collect, monitor, store, or sell any information related to your gameplay.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Secure iCloud Synchronization</h2>
      <p>
        If you choose to sync your board game progress across multiple personal devices, synchronization is handled securely and directly through Apple iCloud via your personal Apple ID login. {site.name} has no access to your iCloud account, your credentials, or the synced game data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & Advertising SDKs</h2>
      <p>
        Game Vault does not request or require access to sensitive device permissions such as Location Services, Contacts, Address Books, Microphone, or Camera.
      </p>
      <p>
        To support the free version of the App, we integrate the Google Mobile Ads (AdMob) SDK. AdMob collects device identifiers (such as Apple&apos;s IDFA or vendor identifiers), usage statistics, system version, and general location (derived from IP address) to serve advertisements, limit frequency of ads, combat fraud, and attribute installs.
      </p>
      <p>
        Upon launching the App, you may be presented with an App Tracking Transparency (ATT) prompt asking for permission to track your activity. You can choose to allow or deny this:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>Consenting (Allow Tracking):</strong> AdMob will serve personalized advertisements tailored to your interests using your device identifier.</li>
        <li><strong>Declining (Ask App Not to Track):</strong> AdMob will serve only non-personalized ads. Basic device identifiers are still processed for essential operations (such as frequency capping and fraud detection).</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. GDPR & CCPA Rights</h2>
      <p>
        Because we do not store, transfer, or process gameplay data on our own servers, your regulatory rights under GDPR or CCPA (access, export, modify, or erase your data) are fully under your own control. You can delete all local records simply by deleting the app or purging your local iCloud app storage. Consent for third-party ad serving can be managed at any time via your iOS Settings under <em>Privacy &amp; Security &gt; Tracking</em>.
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
