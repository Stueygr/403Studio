import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name} and our applications.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        <strong>Last updated:</strong> June 27, 2026
      </p>
      <p>
        By using {site.name}&apos;s website or applications, you agree to these terms. If you do not
        agree, please do not use our products or services.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Use of our apps</h2>
      <p>
        Our applications are provided for personal or professional use as described in each app&apos;s
        App Store listing. You are responsible for maintaining backups of your local data and for using
        the apps in compliance with applicable laws and regulations, including aviation rules where
        relevant.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">No warranty</h2>
      <p>
        Our software is provided &quot;as is&quot; without warranty of any kind. While we work hard to
        build reliable tools, {site.name} does not guarantee uninterrupted or error-free operation.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} is not liable for any indirect, incidental,
        or consequential damages arising from your use of our website or applications.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of our products after changes are
        posted constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
