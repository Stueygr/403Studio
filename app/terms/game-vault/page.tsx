import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Game Vault",
  description: `Terms of service for Game Vault by ${site.name}.`,
};

export default function GameVaultTermsPage() {
  return (
    <LegalLayout title="Terms of Service — Game Vault">
      <p>
        <strong>Last updated:</strong> June 29, 2026
      </p>
      <p>
        By installing or using the Game Vault application, you agree to these Terms of Service. If you do not agree to these terms, please do not install or use the app.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. License & Scope of Use</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use Game Vault on your personal iPhone devices for entertainment purposes only, in accordance with the Apple App Store Terms of Service.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Local Data & Backup Disclaimer</h2>
      <p>
        Game Vault stores its game files, records, and preferences locally on your device. While you can synchronize your progress across devices via Apple iCloud, {site.name} does not operate cloud backends and cannot recover lost data, scores, or achievements.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Limitation of Liability</h2>
      <p>
        Game Vault is provided &quot;as is&quot; and &quot;as available,&quot; without warranty of any kind. To the maximum extent permitted by law, {site.name} disclaims all liability for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the application.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Updates & Changes</h2>
      <p>
        We may update Game Vault from time to time to add new games, fix bugs, or tweak features. These Terms will apply to all future updates. Continued use of the application following updates indicates your acceptance of any revised terms.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Contact Support</h2>
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
