import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Pilot Logbook",
  description: `Privacy policy for Pilot Logbook by ${site.name}.`,
  alternates: {
    canonical: "/privacy/pilot-logbook",
  },
};

export default function PilotLogbookPrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy — Pilot Logbook">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        Pilot Logbook is built and published by {site.name}. We understand the critical nature of flight deck data and are committed to maintaining the absolute confidentiality of your logs and duty metrics. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Flight Data & Privacy</h2>
      <p>
        Pilot Logbook operates entirely locally on your iPhone. Your logged flight entries, block times, air times, landing counts, night calculations, and duty tracking parameters are stored directly inside your device&apos;s sandboxed local database. We do not operate third-party databases, and we never collect, store, share, or sell your flight logs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Apple iCloud Synchronization</h2>
      <p>
        If you enable iCloud sync inside the app, your flight logs and duty stats are synced directly and securely with Apple&apos;s CloudKit servers using your personal Apple ID credentials. {site.name} has no access to your iCloud account, your flight data, or your login credentials.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & SDKs</h2>
      <p>
        Pilot Logbook does not request or require access to sensitive system permissions such as GPS Location Services, Contacts, Microphone, or Camera. The app does not integrate any third-party behavioral tracking SDKs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. GDPR & CCPA Rights</h2>
      <p>
        Because we do not store, transfer, or process user data on our own servers, your regulatory rights under GDPR or CCPA (access, export, modify, or erase your data) are fully under your own control. You can delete all local records simply by deleting the app or purging your local iCloud app storage.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Contact Information</h2>
      <p>
        If you have questions regarding data privacy on the flight deck, please contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
