import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Pilot Logbook",
  description: `Privacy policy for Pilot Logbook by ${site.name}.`,
};

export default function PilotLogbookPrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Pilot Logbook">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        Pilot Logbook is built and published by {site.name}. We understand the critical nature of flight deck data and are committed to maintaining the absolute confidentiality of your logs and duty metrics.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Flight Data & Privacy</h2>
      <p>
        Pilot Logbook operates entirely locally on your iPhone. Your logged flight entries, block times, air times, landing counts, night calculations, and duty tracking parameters are stored directly inside your device&apos;s sandboxed local database. We do not operate third-party databases, and we never collect, store, share, or sell your flight logs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Secure iCloud Sync</h2>
      <p>
        If you enable synchronization inside the app, your flight logs and duty stats are synced directly and securely with Apple&apos;s CloudKit servers using your personal Apple ID credentials. {site.name} has no access to your iCloud account, your flight data, or your login credentials.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Crash Reports & Diagnostics</h2>
      <p>
        To ensure app stability, standard diagnostics and crash logs may be collected through Apple&apos;s opt-in developer console. These reports contain zero personally identifiable information or flight coordinates and are subject to Apple&apos;s privacy policy.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Contact Information</h2>
      <p>
        If you have questions regarding data privacy on the flight deck, please contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
