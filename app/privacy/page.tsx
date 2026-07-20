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
        <strong>Last updated:</strong> July 14, 2026
      </p>
      <p>
        403 Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website located at <a href={site.url} className="text-blue-500 hover:underline">www.403studio.ca</a> (the &quot;Site&quot;) and develops and publishes mobile applications for Apple platforms (collectively, the &quot;Applications&quot;). 
      </p>
      <p>
        This Privacy Policy is a legally binding document designed to inform you of our practices regarding the collection, use, and disclosure of personal data. By accessing our Site or downloading, installing, or using our Applications, you consent to the terms of this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Privacy & Data Collection Principles</h2>
      <p>
        We believe that your digital footprints should belong exclusively to you. Consequently, {site.name} does not directly collect, harvest, monitor, store, share, or sell any personal data through our Applications or this Site.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>No Account Sign-Ups:</strong> Our Applications do not require registration, login, profile creation, or email address entry to function.</li>
        <li><strong>No Direct Telemetry or Behavioral Tracking:</strong> We do not integrate direct behavioral tracking SDKs or analytics frameworks (such as Google Analytics or Firebase) to monitor how you navigate screens or your usage habits.</li>
        <li><strong>No Crash Analytics Sharing:</strong> Crash reporting is managed exclusively via the native, opt-in Apple diagnostics framework. We do not utilize third-party crash reporting databases.</li>
        <li><strong>Ad-Supported Exceptions:</strong> While premium utility applications like Pilot Logbook remain entirely free of advertising and third-party tracking, some of our free games (such as Game Vault and Neon Siege) display advertisements served by Google AdMob. AdMob may collect and process device identifiers and usage statistics as detailed in Section 5.</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Sandboxed Local Storage & Cloud Syncing</h2>
      <p>
        All inputs, configurations, game achievements, logs, and duty data created inside our Applications are stored locally in the secure sandboxed storage of your physical device. Depending on the Application:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>Local & iCloud Sync Apps:</strong> For our offline games and strategy/tower defense simulators, we run zero server-side databases. Your data is stored on your device and, if enabled, synced only via your personal Apple iCloud account and Apple services, which we have no access to.</li>
        <li><strong>Pilot Logbook App:</strong> Your flight log entries, duty times, and calculations are securely backed up on our Supabase server. This data can be accessed via PC or on your iOS devices using your own secure credentials, which we do not have access to.</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Device Permission Disclosures</h2>
      <p>
        To ensure complete transparency, we disclose that our Applications do not request or utilize sensitive system-level permissions, including but not limited to GPS background location, contacts, address books, or microphone access. The only exception is Pilot Logbook, which requests camera access solely for on-device scanning of paper logbooks and aviation documents, processing everything locally on your device.
      </p>
      <p>
        For our ad-supported games, a request for App Tracking Transparency (ATT) permission may be presented on launch to facilitate personalized ad serving. You are free to deny this permission, in which case only non-personalized ads are displayed.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Data Synchronization</h2>
      <p>
        Depending on the Application, synchronization features may sync your data directly and securely with Apple&apos;s CloudKit servers (using your personal Apple ID credentials) or with our secure website database (using your user credentials). 
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Third-Party Advertising & Data Collection (AdMob)</h2>
      <p>
        To support the ongoing development of our free-to-play games, Game Vault and Neon Siege integrate the Google Mobile Ads (AdMob) SDK. When you play these games, AdMob may collect, process, and share specific device-level identifiers.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>Data Collected:</strong> AdMob collects device identifiers (such as Apple&apos;s IDFA or vendor identifiers), usage statistics, device manufacturer, system version, IP address (for general location), and diagnostic logs.</li>
        <li><strong>Purpose of Collection:</strong> This data is used to deliver ads, limit the number of times you see the same ad (frequency capping), combat spam and fraud, attribute installations, and (where consented to) serve personalized ads.</li>
        <li><strong>User Controls & Opt-Out:</strong>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>App Tracking Transparency (ATT):</strong> Upon launching the game, you may be presented with a prompt asking for permission to track your activity. Denying this prompt instructs AdMob to serve non-personalized ads, though AdMob will still collect basic device data for non-personalized operational purposes.</li>
            <li><strong>iOS Settings:</strong> You can manage or reset your advertising identifier at any time through your iOS device settings by navigating to <em>Settings &gt; Privacy &amp; Security &gt; Tracking</em>.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Website Logs & Cookies</h2>
      <p>
        Our Site is a statically generated marketing page. We do not write tracking cookies to your browser, use advertising cookies, or deploy cross-site tracking systems. Any communication you send us by email is strictly used to answer your support questions and is never logged in marketing databases.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Children&apos;s Online Privacy (COPPA)</h2>
      <p>
        Because we do not directly collect any personal data, our Site and Applications are designed with children&apos;s privacy in mind. Our ad-supported games serve non-personalized ads to users who are identified as children or where required by COPPA guidelines, and we do not knowingly solicit or gather data from children under the age of 13.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">8. Regulatory Compliance (PIPEDA, PIPA, GDPR, CCPA)</h2>
      <p>
        {site.name} is situated in Alberta, Canada. We comply with Alberta&apos;s Personal Information Protection Act (PIPA) and Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA).
      </p>
      <p>
        For users in the European Union (under GDPR) or California (under CCPA/CPRA), your data rights (including the right to access, export, modify, or erase your data) are fully satisfied by default. Because all data is stored on your own hardware, you hold full controller rights and can delete or export it at any time. Third-party ad serving consent can be managed directly via the iOS tracking settings.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">9. Inquiries & Complaints</h2>
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
