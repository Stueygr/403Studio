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
        Pilot Logbook allows you to log flight entries, block times, air times, landing counts, night calculations, and duty tracking parameters. Your logbook entries are securely synced directly to our website servers so you can access your records across your devices. We will never share, sell, or monetize your flight logs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Cloud Synchronization & Accounts</h2>
      <p>
        By signing into your Pilot Logbook account on your iPhone or iPad, your logbook data is synchronized securely with our website database. This ensures your logs are backed up and accessible from any supported browser or device.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permissions & SDKs</h2>
      <p>
        Pilot Logbook does not request or require access to sensitive system permissions such as GPS Location Services, Contacts, Microphone, or Camera. The app does not integrate any third-party behavioral tracking SDKs.
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
