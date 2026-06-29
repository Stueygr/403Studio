import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — 403 Studio",
  description: `Privacy Policy for ${site.name} and our suite of iOS applications.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 29, 2026
      </p>
      <p>
        At {site.name}, your privacy is a core design principle, not an afterthought. We build offline-first applications that protect your digital autonomy. This Privacy Policy explains our commitment to transparency and details how data is handled across our website and all of our software applications (including Game Vault, Pilot Logbook, and Vegas Cyberpunk Midnight).
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. Information We Do Not Collect</h2>
      <p>
        Because we build applications that run locally and utilize Apple&apos;s native ecosystem, {site.name} does not collect, store, share, or sell any of your personal information.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li><strong>No User Accounts:</strong> You do not need to register, create a username, or set up a profile to use our apps.</li>
        <li><strong>No Telemetry or Tracking:</strong> We do not integrate analytics libraries (such as Google Analytics or Firebase) to track your in-app actions, mouse paths, screen times, or behavior.</li>
        <li><strong>No Crash Databases:</strong> Crash reports are handled exclusively through Apple&apos;s standard App Store diagnostics. We do not transmit crash logs to third-party reporting servers.</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Application Data Storage</h2>
      <p>
        All application files, flight logs, duty calculations, game records, puzzle stats, and custom settings reside entirely inside your iPhone&apos;s local sandbox storage. This data is private and remains fully on your device unless you choose to delete the application, export data manually (e.g., CSV/PDF exports), or sync it using Apple iCloud.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Apple iCloud Syncing</h2>
      <p>
        If you enable iCloud synchronization inside our apps, your local data is synchronized directly and securely with Apple&apos;s CloudKit servers using your personal Apple ID. 
      </p>
      <p>
        This process is governed entirely by Apple&apos;s iCloud security and privacy policies. {site.name} does not manage these databases, has no access to your iCloud files or login credentials, and cannot read, alter, or recover any synchronized data.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Website Visitor Data</h2>
      <p>
        Our website (<a href={site.url} className="text-blue-500 hover:underline">www.403studio.ca</a>) is a static marketing landing page. We do not use tracking pixels, behavioral cookies, or visitor identification cookies. If you send us an email inquiry, we will only use your email address to respond to your specific questions, and we will never share your contact details.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Children&apos;s Privacy</h2>
      <p>
        Because our apps collect zero personal information, they are fully compliant with children&apos;s privacy regulations globally, including the Children&apos;s Online Privacy Protection Act (COPPA). We do not solicit or gather data from children under the age of 13.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Jurisdiction & Legal Compliance</h2>
      <p>
        {site.name} is headquartered in Alberta, Canada. We operate in compliance with the Personal Information Protection Act (PIPA) of Alberta and the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada. By design, our zero-data collection model complies with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Contact Information</h2>
      <p>
        If you have any questions or concerns regarding our privacy practices, please contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
