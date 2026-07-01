import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — 403 Studio",
  description: `Official Privacy Policy for ${site.name} website and our suite of iOS applications.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        403 Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website located at <a href={site.url} className="text-blue-500 hover:underline">www.403studio.ca</a> (the &quot;Site&quot;) and develops and publishes mobile applications for Apple platforms (collectively, the &quot;Applications&quot;). 
      </p>
      <p>
        This Privacy Policy is a legally binding document designed to inform you of our strict practices regarding the collection, use, and disclosure of personal data. By accessing our Site or downloading, installing, or using our Applications, you consent to the terms of this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. The Zero-Data Collection Principle</h2>
      <p>
        We believe that your digital footprints should belong exclusively to you. Consequently, {site.name} does not collect, harvest, monitor, store, share, or sell any personal data through our Applications or this Site.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>No Account Sign-Ups:</strong> Our Applications do not require registration, login, profile creation, or email address entry to function.</li>
        <li><strong>No Telemetry or Behavioral Tracking:</strong> We do not integrate tracking SDKs or user tracking frameworks (such as Google Analytics or Firebase) within our Applications. We do not monitor how long you play, how you navigate screens, or your usage habits.</li>
        <li><strong>No Crash Analytics Sharing:</strong> Crash reporting is managed exclusively via the native, opt-in Apple diagnostics framework. We do not utilize third-party crash reporting databases.</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Sandboxed Local Storage</h2>
      <p>
        All inputs, configurations, game achievements, logs, and duty data created inside our Applications are stored locally in the secure sandboxed storage of your physical device. We run zero server-side databases. Your files are fully under your own custody and are inaccessible to {site.name} or any third parties unless you manually choose to export them.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permission Disclosures</h2>
      <p>
        To ensure complete transparency, we disclose that our Applications do not request or utilize sensitive system-level permissions, including but not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li>GPS or Background Location tracking.</li>
        <li>Device Contact Lists or Address Books.</li>
        <li>Microphone or Camera access.</li>
        <li>Device Bluetooth or local network scanning (except standard system hooks).</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Apple iCloud Syncing</h2>
      <p>
        If you opt to use synchronization features inside the Applications, your data is synced directly and securely with Apple&apos;s CloudKit servers using your personal Apple ID credentials.
      </p>
      <p>
        This transmission occurs directly between your device and Apple. {site.name} has no access to your iCloud account, your credentials, or the synced files, and Apple acts as the sole data processor for this transmission.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Website Logs & Cookies</h2>
      <p>
        Our Site is a statically generated marketing page. We do not write tracking cookies to your browser, use advertising cookies, or deploy cross-site tracking systems. Any communication you send us by email is strictly used to answer your support questions and is never logged in marketing databases.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Children&apos;s Online Privacy (COPPA)</h2>
      <p>
        Because we do not collect any personal data, our Site and Applications are fully compliant with children&apos;s privacy regulations globally, including the Children&apos;s Online Privacy Protection Act (COPPA). We do not knowingly solicit or gather data from children under the age of 13.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Regulatory Compliance (PIPEDA, PIPA, GDPR, CCPA)</h2>
      <p>
        {site.name} is situated in Alberta, Canada. We comply with Alberta&apos;s Personal Information Protection Act (PIPA) and Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA).
      </p>
      <p>
        For users in the European Union (under GDPR) or California (under CCPA/CPRA), your data rights (including the right to access, export, modify, or erase your data) are fully satisfied by default. Because all data is stored on your own hardware, you hold full controller rights and can delete or export it at any time.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">8. Inquiries & Complaints</h2>
      <p>
        If you have questions regarding this Privacy Policy, please contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
      <p>
        If you are a resident of Canada and feel your inquiries have not been addressed, you have the right to lodge a complaint with the Office of the Information and Privacy Commissioner of Alberta (OIPC) or the Office of the Privacy Commissioner of Canada (OPC).
      </p>
    </LegalLayout>
  );
}
