import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} and our applications.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 27, 2026
      </p>
      <p>
        {site.name} builds offline-first applications. We do not collect, store, or sell your personal
        data through our apps or this website.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Our apps</h2>
      <p>
        Our applications run locally on your device. Your data stays on your device unless you
        explicitly choose to export or share it. We do not operate cloud backends that sync your app
        data, and we do not use analytics or tracking SDKs inside our apps.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">This website</h2>
      <p>
        This site is a static marketing site. We do not use cookies for advertising or cross-site
        tracking. If you contact us by email, we will use your message only to respond to your inquiry.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">App Store</h2>
      <p>
        When you download our apps from the Apple App Store, Apple may collect information according to
        their own privacy policy. That collection is governed by Apple, not by {site.name}.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Contact</h2>
      <p>
        For privacy questions, email us at{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
