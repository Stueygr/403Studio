"use client";

import React, { useState } from "react";

type Props = {
  appSlug: string;
};

export function WaitlistForm({ appSlug }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Simulate API call for waitlist registration
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Store in localStorage as a backup / demonstration
      const waitlist = JSON.parse(localStorage.getItem(`waitlist_${appSlug}`) || "[]");
      if (!waitlist.includes(email)) {
        waitlist.push(email);
        localStorage.setItem(`waitlist_${appSlug}`, JSON.stringify(waitlist));
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-md p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 animate-fadeIn">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div className="text-sm font-semibold">
            {"You're on the list! We'll email you the moment it's live."}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <p className="text-xs font-semibold text-zinc-550 dark:text-zinc-400 mb-3">
        {"Be first in the cockpit. Join the waitlist and we'll email you the moment it's live."}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 dark:focus:border-blue-500/60 transition-all shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 text-sm font-semibold hover:bg-zinc-850 dark:hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 active:scale-98 transition-all shrink-0 flex items-center justify-center gap-2 shadow-sm border border-zinc-900/10 dark:border-zinc-50/10"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            "Notify Me"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-500 font-medium mt-2">{errorMessage}</p>
      )}
    </div>
  );
}
