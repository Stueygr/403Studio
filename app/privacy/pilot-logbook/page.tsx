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
        <strong>Last updated:</strong> July 14, 2026
      </p>
      <p>
        Pilot Logbook is built and published by {site.name}. We understand the critical nature of flight deck data and are committed to maintaining the absolute confidentiality of your logs and duty metrics. This policy outlines how your data is handled.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Flight Data & Privacy</h2>
      <p>
        Pilot Logbook allows you to log flight entries, block times, air times, landing counts, night calculations, duty tracking parameters, and aviation documents. Your flight logs are securely backed up on our Supabase server and can be accessed by PC or on your iOS device using your own credentials—which we do not have access to. We will never share, sell, or monetize your flight logs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Cloud Synchronization & Accounts</h2>
      <p>
        By signing into your Pilot Logbook account on your iPhone or iPad, your logbook data is synchronized securely with our website database. This ensures your logs are backed up and accessible from any supported browser on PC or iOS devices.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & SDKs</h2>
      <p>
        Pilot Logbook requests camera access for one purpose only: scanning your paper logbook pages and aviation documents so you can import them without retyping. Scanning is processed entirely on your device—text recognition and AI extraction run locally, and your scanned images themselves are never uploaded to our servers or any third party. The entries you review and save from a scan become part of your logbook and are synced and backed up like any entry you type in (see Section 2). The app does not request access to GPS Location Services, Contacts, or Microphone, and does not integrate any third-party behavioral tracking SDKs. If you add the home screen widget, the widget&apos;s copy of your hour totals and next document expiry is stored on your device and never uploaded; your logbook itself remains backed up to your account.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. GDPR & CCPA Rights</h2>
      <p>
        You have full control over your data. You can access, export, modify, or delete your account and all associated flight logs at any time directly through the app settings or by logging into your profile on our website.
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
