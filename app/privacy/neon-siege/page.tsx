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
        <strong>Last updated:</strong> July 30, 2026
      </p>
      <p>
        Neon Siege is built and published by {site.name}. We believe your
        privacy is fundamental. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        1. Local Storage
      </h2>
      <p>
        Neon Siege operates entirely locally on your iPhone. Your strategy
        statistics, wave records, upgrades, high scores, and settings are saved
        directly inside your device&apos;s sandbox storage and never leave your
        device.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        2. Apple iCloud Syncing
      </h2>
      <p>
        If you enable cross-device progress syncing, your high scores and upgrade
        progress are synchronized securely and directly to Apple&apos;s CloudKit
        servers using your personal Apple ID credentials. {site.name} has no
        access to your iCloud account or any synced data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        3. Device Permissions &amp; Advertising SDKs
      </h2>
      <p>
        Neon Siege does not request or require access to sensitive system
        permissions such as GPS Location Services, Contacts, Microphone, or
        Camera.
      </p>
      <p>
        To support the free version of the App, we integrate the Google Mobile
        Ads (AdMob) SDK.
      </p>
      <p>
        AdMob collects device identifiers (such as Apple&apos;s IDFA or vendor
        identifiers), usage statistics, system version, and general location
        (derived from IP address) to serve advertisements, limit frequency of
        ads, combat fraud, and attribute installs.
      </p>
      <p>
        Upon launching the App, you may be presented with an App Tracking
        Transparency (ATT) prompt asking for permission to track your activity.
      </p>
      <p>
        If you grant tracking permission, AdMob may show you personalized ads
        based on your activity across apps and websites, as permitted by your
        device settings.
      </p>
      <p>
        If you decline or have not been asked, AdMob still serves
        non-personalized ads, which use only contextual information and do not
        rely on your advertising identifier for targeting.
      </p>
      <p>
        Consent for third-party ad serving can be managed at any time via your
        iOS Settings under <em>Privacy &amp; Security &gt; Tracking</em>.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        4. Contact Information
      </h2>
      <p>
        For inquiries regarding our privacy standards, contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
