import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — 403 Studio",
  description: `Official Terms of Service governing the use of ${site.name} website and our applications.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        <strong>Last updated:</strong> July 10, 2026
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot; or &quot;you&quot;) and 403 Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) regarding your use of the website located at <a href={site.url} className="text-blue-500 hover:underline">www.403studio.ca</a> (the &quot;Site&quot;) and our mobile applications (the &quot;Applications&quot;).
      </p>
      <p>
        By downloading, installing, accessing, or using our Site or Applications, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not access or use our software or Site.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. License Grant & Restrictions</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, non-sublicensable, and revocable license to run our Applications on Apple-branded iOS devices that you own or control, in accordance with these Terms and the Apple Media Services Terms and Conditions.
      </p>
      <p>
        You shall not: (a) decompile, reverse engineer, or disassemble the Applications; (b) distribute, rent, lease, lend, or sell the Applications; or (c) modify or create derivative works based on the Applications or Site content.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Intellectual Property Ownership</h2>
      <p>
        All rights, titles, and interests in and to the Site and Applications—including all source code, graphic designs, mockups, vector artwork, logos, icons, trademarks, and text elements—are and shall remain the exclusive intellectual property of {site.name}. These properties are protected by Canadian and international copyright, trademark, and intellectual property laws.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Data Storage, Sync & Backup Responsibility</h2>
      <p>
        All inputs, configurations, game achievements, logs, and duty data created inside our Applications are stored locally in the secure sandboxed storage of your physical device. Depending on the Application:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>Local & iCloud Sync Apps:</strong> Your data is stored on your device and, if enabled, synced only via your personal Apple iCloud account and Apple services, which we have no access to. You are solely responsible for maintaining secure backups of your device files and configurations.</li>
        <li><strong>Pilot Logbook App:</strong> Your flight log entries, duty times, and calculations are securely backed up on our Supabase server. This data can be accessed via PC or on your iOS devices using your own secure credentials, which we do not have access to. You are responsible for keeping your credentials confidential.</li>
      </ul>
      <p className="mt-4">
        {site.name} is not responsible for data loss resulting from application deletion, device failures, iCloud sync interruptions, or unauthorized account access due to credential sharing.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Third-Party Advertisements</h2>
      <p>
        Some of our Applications (specifically free-to-play games like Game Vault and Vegas Cyberpunk Midnight) are supported by advertisements served by third-party ad networks (specifically Google AdMob). 
      </p>
      <p>
        We do not control, endorse, or assume any responsibility for the content, privacy policies, products, or services advertised. Any interactions or transactions you have with third-party advertisers are solely between you and the advertiser.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless {site.name}, its developers, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney&apos;s fees) arising from: (a) your use of and access to the Applications or Site; (b) your violation of any term of these Terms; or (c) your violation of any third-party right or applicable law.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Disclaimer of Warranties</h2>
      <p className="font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wide text-xs">
        THE FOLLOWING SECTION IS IMPORTANT. PLEASE READ IT CAREFULLY.
      </p>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        THE APPLICATIONS AND SITE ARE PROVIDED BY 403 STUDIO ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, 403 STUDIO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APPLICATIONS WILL MEET YOUR REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, BE COMPLETELY SECURE, OR BE ENTIRELY FREE OF ERRORS OR BUG FIXES.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Limitation of Liability</h2>
      <p className="uppercase text-sm leading-relaxed text-zinc-700 dark:text-zinc-350 bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL 403 STUDIO, ITS DEVELOPERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, LOSS OF DATA, LOSS OF USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE APPLICATIONS; (B) ANY FAILS OR ERRORS IN CALCULATIONS, FLIGHT DATA, OR GAMEPLAY BALANCES; OR (C) ANY UNAUTHORIZED ACCESS OR SYSTEM INTERRUPTIONS. OUR TOTAL CUMULATIVE LIABILITY SHALL BE LIMITED TO THE GREATER OF $10.00 CAD OR THE AMOUNT YOU PAID FOR THE APPLICATION.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">8. Severability & Entire Agreement</h2>
      <p>
        These Terms constitute the entire agreement between you and {site.name} regarding your use of our Site and Applications. If any provision of these Terms is deemed invalid or unenforceable by a court of competent jurisdiction, the remaining provisions of these Terms will remain in full force and effect.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">9. Governing Law & Venue</h2>
      <p>
        These Terms shall be governed by, and construed in accordance with, the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the courts of Calgary, Alberta, Canada.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">10. Contact Support</h2>
      <p>
        If you have any questions or feedback regarding these Terms, please contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
