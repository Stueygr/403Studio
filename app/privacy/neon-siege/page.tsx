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
        <strong>Last updated:</strong> July 28, 2026
      </p>
      <p>
        Neon Siege is built and published by {site.name}. We believe your
        privacy is fundamental. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        1. Data Collection
      </h2>
      <p>
        <strong>Neon Siege does not collect any data.</strong> We do not collect,
        store, share, or sell any personal information, gameplay statistics, device
        identifiers, or usage data. No data is ever transmitted from your device
        to our servers or any third party.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        2. Local Storage
      </h2>
      <p>
        Neon Siege operates entirely locally on your iPhone. Your strategy
        statistics, wave records, upgrades, high scores, and settings are saved
        directly inside your device&apos;s sandbox storage and never leave your
        device.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        3. Apple iCloud Syncing
      </h2>
      <p>
        If you enable cross-device progress syncing, your high scores and upgrade
        progress are synchronized securely and directly to Apple&apos;s CloudKit
        servers using your personal Apple ID credentials. {site.name} has no
        access to your iCloud account or any synced data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        4. Device Permissions
      </h2>
      <p>
        Neon Siege does not request or require access to sensitive system
        permissions such as GPS Location Services, Contacts, Microphone, or
        Camera. No third-party analytics or advertising SDKs are integrated.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">
        5. Contact Information
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
