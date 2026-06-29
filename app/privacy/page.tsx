import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} and all of its applications.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 29, 2026
      </p>
      <p>
        {site.name} builds and publishes iPhone applications. We believe your personal data should remain private. This policy outlines how your data is handled across all of our apps.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Data Storage &amp; Privacy</h2>
      <p>
        All {site.name} apps operate entirely locally on your iPhone. Your data — including game progress, flight logs, scores, preferences, and statistics — is stored directly on your device. We do not run third-party databases, and we never collect, store, or sell your personal data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Apple iCloud Syncing</h2>
      <p>
        Some of our apps support syncing data across your personal devices. This synchronization is handled securely and directly through Apple iCloud via your personal Apple ID. {site.name} has no access to your iCloud account, your credentials, or the synced data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Third-Party Analytics &amp; Ads</h2>
      <p>
        We do not integrate any tracking SDKs, cookies, or third-party analytics libraries into our apps. If we offer ad-supported features, ad delivery is handled securely using native iOS components which respect your system-level tracking preferences.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Children&apos;s Privacy</h2>
      <p>
        Our apps do not knowingly collect personal information from children under the age of 13. Since all data remains on-device and we do not collect any user data, our apps are safe for users of all ages.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of our apps following any changes indicates your acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Contact Information</h2>
      <p>
        For privacy inquiries or support questions, please email us at{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
