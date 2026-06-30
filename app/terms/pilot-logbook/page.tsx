import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Pilot Logbook",
  description: `Terms of service for Pilot Logbook by ${site.name}.`,
};

export default function PilotLogbookTermsPage() {
  return (
    <LegalLayout title="Terms of Service — Pilot Logbook">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        By installing or using the Pilot Logbook application, you agree to these Terms of Service. If you do not agree to these terms, please do not use the application.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. License Grant</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use Pilot Logbook on your personal iPhone devices for tracking flight logs and duty metrics.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Aviation Compliance Disclaimer</h2>
      <p>
        Pilot Logbook is designed as an assistant for log entry and duty tracking. <strong>It is not an officially certified flight logging system by Transport Canada or any other civil aviation authority.</strong>
      </p>
      <p>
        You are solely responsible for manually verifying the correctness of all flight parameters, block hours, night calculations, and rest compliance limits against official Canadian Aviation Regulations (CARs) or relevant local guidelines. {site.name} is not liable for duty exceedances, licensing issues, or fines resulting from the use of this app.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Local Data & Backup Disclaimer</h2>
      <p>
        Pilot Logbook stores its data locally on your device. We do not operate cloud databases and cannot recover lost flight logs, duty histories, or custom entries. You are responsible for keeping local device backups or syncing via Apple iCloud.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Limitation of Liability</h2>
      <p>
        Pilot Logbook is provided &quot;as is&quot; and &quot;as available,&quot; without warranty of any kind. To the maximum extent permitted by law, {site.name} disclaims all liability for any direct, indirect, incidental, or consequential damages resulting from the loss of flight records or logs.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Contact Support</h2>
      <p>
        If you have any questions about these Terms, please contact support at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
