import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Pilot Logbook",
  description: `Official Terms of Service for Pilot Logbook by ${site.name}.`,
};

export default function PilotLogbookTermsPage() {
  return (
    <LegalLayout title="Terms of Service — Pilot Logbook">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        These Terms of Service govern your use of the Pilot Logbook application (the &quot;App&quot;). By installing or using Pilot Logbook, you agree to these Terms. If you do not agree, please do not use the App.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Scope of License</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use Pilot Logbook on your personal iPhone devices for tracking flight logs and duty metrics.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Aviation Regulatory Disclaimer & User Responsibility</h2>
      <p>
        Pilot Logbook is designed as an assistant for log entry and duty tracking. <strong>It is not an officially certified flight logging system by Transport Canada or any other civil aviation authority.</strong>
      </p>
      <p>
        You are solely responsible for manually verifying the correctness of all flight parameters, block hours, night calculations, and rest compliance limits against official Canadian Aviation Regulations (CARs) or relevant local guidelines. {site.name} is not liable for duty exceedances, licensing issues, or administrative enforcement resulting from the use of this app.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Local Data Backup Responsibility</h2>
      <p>
        Pilot Logbook stores its data locally on your device. We do not operate cloud databases and cannot recover lost flight logs, duty histories, or custom entries. You are responsible for keeping local device backups or syncing via Apple iCloud.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Disclaimer of Warranties</h2>
      <p className="font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide text-xs">
        THE FOLLOWING SECTION IS IMPORTANT. PLEASE READ IT CAREFULLY.
      </p>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        PILOT LOGBOOK IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, 403 STUDIO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE FREE FROM BUGS, ERRORS, OR SYSTEM INTERRUPTIONS.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Limitation of Liability</h2>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL 403 STUDIO OR ITS DEVELOPERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO LOSS OF FLIGHT LOGS, FLIGHT RECORDS, OR DUTY HISTORY) ARISING FROM THE USE OR INABILITY TO USE THE APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR CUMULATIVE LIABILITY SHALL NOT EXCEED $10.00 CAD.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms shall be governed by, and construed in accordance with, the laws of the Province of Alberta, Canada. Any legal actions arising under these terms shall be brought exclusively in the courts located in Calgary, Alberta, Canada.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Contact Support</h2>
      <p>
        If you have any questions or feedback regarding these Terms, please contact support at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
