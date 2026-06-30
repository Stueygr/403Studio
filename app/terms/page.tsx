import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — 403 Studio",
  description: `Terms of Service for ${site.name} website and our suite of applications.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        Welcome to {site.name}. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website located at <a href={site.url} className="text-blue-500 hover:underline">www.403studio.ca</a> and our mobile software applications.
      </p>
      <p>
        By accessing our website or downloading, installing, or using our applications, you agree to be bound by these Terms. If you do not agree to these terms, please do not download, install, or use our software.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. License Grant</h2>
      <p>
        {site.name} grants you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to download, install, and run a copy of our applications on Apple-branded iOS devices that you own or control, for personal, non-commercial use, subject to these Terms and Apple App Store guidelines.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. User Responsibilities & Data Backups</h2>
      <p>
        Because our applications run locally and do not store your data on our own cloud infrastructure, you are solely responsible for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
        <li>Maintaining secure backups of your devices and application contents (e.g., via Apple iCloud or manual file exports).</li>
        <li>Protecting access to your physical devices.</li>
        <li>Ensuring that your use of the applications comply with all local, regional, and national laws.</li>
      </ul>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Flight Calculations & Compliance Responsibility</h2>
      <p>
        For apps assisting with specialized tracking (such as pilot logs or flight parameters), <strong>these apps are not official certification platforms.</strong> You remain solely responsible for manually verifying the accuracy of all calculations, logs, and compliance parameters against official regulatory flight safety guidelines.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Intellectual Property</h2>
      <p>
        All software, source code, designs, mockups, vector artwork, logos, icons, trademarks, and text elements displayed on our website or within our applications are the exclusive intellectual property of {site.name}. You may not copy, reverse engineer, decompile, modify, distribute, or create derivative works of our intellectual property without prior written consent.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Disclaimer of Warranties</h2>
      <p>
        Our website and applications are provided &quot;as is&quot; and &quot;as available,&quot; without warranty of any kind, either express or implied. {site.name} disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the applications will meet your requirements, operate without interruption, or be completely error-free.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted under applicable law, {site.name} and its developers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, or other intangible losses resulting from your access to, use of, or inability to use our applications or website.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">7. Governing Law & Jurisdiction</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law principles. Any legal actions or proceedings arising under these Terms shall be brought exclusively in the courts located in Calgary, Alberta, Canada.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">8. Contact Information</h2>
      <p>
        If you have any questions or feedback regarding these Terms, please contact us at:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
