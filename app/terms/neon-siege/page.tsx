import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Neon Siege",
  description: `Official Terms of Service for Neon Siege by ${site.name}.`,
  alternates: {
    canonical: "/terms/neon-siege",
  },
};

export default function NeonSiegeTermsPage() {
  return (
    <LegalLayout title="Terms of Service — Neon Siege">
      <p>
        <strong>Last updated:</strong> July 20, 2026
      </p>
      <p>
        These Terms of Service govern your use of the Neon Siege application (the &quot;App&quot;). By installing or using Neon Siege, you agree to these Terms. If you do not agree, please do not use the App.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Scope of License</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use Neon Siege on your personal iPhone devices for entertainment and simulation purposes only, in accordance with these Terms and Apple App Store rules.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Zero Real Money & Virtual Currency Disclaimer</h2>
      <p>
        Neon Siege is an offline strategy and tower defense game. <strong>There is no real money gambling, wagering, or real-world transaction value of any kind inside the App.</strong>
      </p>
      <p>
        All scores, achievements, upgrades, tower layouts, virtual credits, or stats tracked inside the App are entirely virtual and have zero real-world value. They cannot be redeemed, traded, or converted into real fiat currency or assets.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Local Data Backup Responsibility</h2>
      <p>
        Neon Siege stores gameplay progress, stats, and tower parameters locally in sandboxed memory. We cannot recover lost virtual progress, level achievements, or stats resulting from App deletes or hardware issues. You are responsible for keeping local device backups or syncing via Apple iCloud.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Third-Party Advertisements</h2>
      <p>
        The free version of Neon Siege displays third-party advertisements served by Google AdMob. By using the App, you acknowledge that you may interact with ad content served by third parties. {site.name} does not control, endorse, or assume responsibility for the availability, content, products, or services promoted in these advertisements.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-550 mt-10 mb-4">5. Disclaimer of Warranties</h2>
      <p className="font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide text-xs">
        THE FOLLOWING SECTION IS IMPORTANT. PLEASE READ IT CAREFULLY.
      </p>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        NEON SIEGE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, 403 STUDIO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE FREE FROM BUGS, ERRORS, OR SYSTEM INTERRUPTIONS.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Limitation of Liability</h2>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL 403 STUDIO OR ITS DEVELOPERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO LOSS OF GAME RECORDS, UPGRADES, OR PROGRESS) ARISING FROM THE USE OR INABILITY TO USE THE APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR CUMULATIVE LIABILITY SHALL NOT EXCEED $10.00 CAD.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms shall be governed by, and construed in accordance with, the laws of the Province of Alberta, Canada. Any legal actions arising under these terms shall be brought exclusively in the courts located in Calgary, Alberta, Canada.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">8. Contact Support</h2>
      <p>
        If you have any questions about these terms, please contact:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
