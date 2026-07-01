import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Vegas Cyberpunk Midnight",
  description: `Official Terms of Service for Vegas Cyberpunk Midnight by ${site.name}.`,
  alternates: {
    canonical: "/terms/vegas-cyberpunk-midnight",
  },
};

export default function VegasCyberpunkTermsPage() {
  return (
    <LegalLayout title="Terms of Service — Vegas Cyberpunk Midnight">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        These Terms of Service govern your use of the Vegas Cyberpunk Midnight application (the &quot;App&quot;). By installing or using Vegas Cyberpunk Midnight, you agree to these Terms. If you do not agree, please do not use the App.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Scope of License</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use Vegas Cyberpunk Midnight on your personal iPhone devices for entertainment and simulation purposes only, in accordance with these Terms and Apple App Store rules.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Zero Real Money & Virtual Currency Disclaimer</h2>
      <p>
        Vegas Cyberpunk Midnight is an offline casino simulator. <strong>There is no real money gambling or wagering of any kind inside the App.</strong>
      </p>
      <p>
        All chips, currencies, credits, balances, or stats tracked inside the App are entirely virtual and have zero real-world value. They cannot be redeemed, traded, or converted into real fiat currency or assets.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Local Data Backup Responsibility</h2>
      <p>
        Vegas Cyberpunk Midnight stores bankroll parameters locally in sandboxed memory. We cannot recover lost virtual credits, slots progress, or hand achievements resulting from App deletes or hardware issues. You are responsible for keeping local device backups or syncing via Apple iCloud.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Disclaimer of Warranties</h2>
      <p className="font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide text-xs">
        THE FOLLOWING SECTION IS IMPORTANT. PLEASE READ IT CAREFULLY.
      </p>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        VEGAS CYBERPUNK MIDNIGHT IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, 403 STUDIO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE FREE FROM BUGS, ERRORS, OR SYSTEM INTERRUPTIONS.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Limitation of Liability</h2>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL 403 STUDIO OR ITS DEVELOPERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO LOSS OF VIRTUAL CHIPS, GAME RECORDS, OR BALANCES) ARISING FROM THE USE OR INABILITY TO USE THE APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR CUMULATIVE LIABILITY SHALL NOT EXCEED $10.00 CAD.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms shall be governed by, and construed in accordance with, the laws of the Province of Alberta, Canada. Any legal actions arising under these terms shall be brought exclusively in the courts located in Calgary, Alberta, Canada.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Contact Support</h2>
      <p>
        If you have any questions about these simulation terms, please contact:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
