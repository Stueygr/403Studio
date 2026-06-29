import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name} and all of its applications.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        <strong>Last updated:</strong> June 29, 2026
      </p>
      <p>
        By installing or using any application published by {site.name}, you agree to these Terms of Service. If you do not agree to these terms, please do not install or use our apps.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. License &amp; Scope of Use</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use our applications on your personal iPhone devices for personal entertainment and utility purposes only, in accordance with the Apple App Store Terms of Service.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Local Data &amp; Backup Disclaimer</h2>
      <p>
        Our apps store data locally on your device. While some apps support synchronization via Apple iCloud, {site.name} does not operate cloud backends and cannot recover lost data, progress, or preferences. You are responsible for maintaining your own backups.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. In-App Purchases</h2>
      <p>
        Some apps may offer optional in-app purchases or premium features. All transactions are processed securely through the Apple App Store. {site.name} does not directly process payments or store payment information.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Limitation of Liability</h2>
      <p>
        Our applications are provided &quot;as is&quot; and &quot;as available,&quot; without warranty of any kind. To the maximum extent permitted by law, {site.name} disclaims all liability for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use any of our applications.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Updates &amp; Changes</h2>
      <p>
        We may update our apps from time to time to add new features, fix bugs, or improve performance. These Terms apply to all current and future applications and updates. Continued use of any application following updates indicates your acceptance of any revised terms.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Contact Support</h2>
      <p>
        If you have any questions about these Terms, please contact support at{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
