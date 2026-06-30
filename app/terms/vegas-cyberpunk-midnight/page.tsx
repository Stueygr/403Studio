import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Vegas Cyberpunk Midnight",
  description: `Terms of service for Vegas Cyberpunk Midnight by ${site.name}.`,
};

export default function VegasCyberpunkTermsPage() {
  return (
    <LegalLayout title="Terms of Service — Vegas Cyberpunk Midnight">
      <p>
        <strong>Last updated:</strong> June 30, 2026
      </p>
      <p>
        By installing or using the Vegas Cyberpunk Midnight application, you agree to these Terms of Service. If you do not agree to these terms, please do not use the application.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. License Grant</h2>
      <p>
        {site.name} grants you a personal, non-exclusive, non-transferable, and revocable license to use Vegas Cyberpunk Midnight on your personal iPhone devices for entertainment and simulation purposes only, in accordance with Apple App Store Terms.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Zero Real Money & Virtual Currency Disclaimer</h2>
      <p>
        Vegas Cyberpunk Midnight is an offline casino simulator. <strong>There is no real money gambling or wagering of any kind inside the application.</strong>
      </p>
      <p>
        All chips, currencies, credits, balances, or stats tracked inside the app are entirely virtual and have zero real-world value. They cannot be redeemed, traded, or converted into real fiat currency or assets.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">3. Local Data Disclaimer</h2>
      <p>
        Vegas Cyberpunk Midnight stores bankroll parameters locally in sandboxed memory. We cannot recover lost virtual credits, slots progress, or hand achievements resulting from app deletes or hardware issues.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">4. Limitation of Liability</h2>
      <p>
        Vegas Cyberpunk Midnight is provided &quot;as is&quot; without warranties of any kind. {site.name} is not liable for any claims, actions, or damages resulting from your use of this casino simulation app.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">5. Contact Support</h2>
      <p>
        If you have any questions about these simulation terms, please contact:{" "}
        <a href={`mailto:${site.email}`} className="text-blue-500 hover:underline">
          {site.email}
        </a>
      </p>
    </LegalLayout>
  );
}
