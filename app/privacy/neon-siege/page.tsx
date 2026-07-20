import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Neon Siege",
  description: `Privacy policy for Neon Siege by ${site.name}.`,
  alternates: {
    canonical: "/privacy/neon-siege",
  },
};

export default function NeonSiegePrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Neon Siege">
      <p>
        <strong>Last updated:</strong> July 20, 2026
      </p>
      <p>
        Neon Siege is built and published by {site.name}. We believe your strategy stats and offline gaming metrics should remain entirely your own. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Game Stats & Local Storage</h2>
      <p>
        Neon Siege operates entirely locally on your iPhone. Your virtual strategy statistics, wave records, upgrades, high scores, defense parameters, and settings are saved directly inside your device&apos;s sandbox storage. We do not run remote game databases, and we never collect, store, share, or sell your play stats.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Apple iCloud Syncing</h2>
      <p>
        If you enable cross-device progress syncing, your high scores and upgrades progress are synchronized securely and directly to Apple&apos;s CloudKit servers using your personal Apple ID credentials. {site.name} has no access to your iCloud account or any synced gaming variables.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & Advertising SDKs</h2>
      <p>
        Neon Siege does not request or require access to sensitive system permissions such as GPS Location Services, Contacts, Microphone, or Camera.
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

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-550 mt-10 mb-4">5. Contact Information</h2>
      <p>
        For inquiries regarding our privacy standards, contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
