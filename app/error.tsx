"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error silently
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[75vh] bg-[#F9F9F8] flex flex-col items-center justify-center px-6 py-24 text-center text-[#111111]">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-suisse text-xs uppercase tracking-[0.25em] text-neutral-400">
          SYSTEM NOTICE • ERROR
        </span>

        <h2 className="font-suisse text-2xl md:text-3xl font-light tracking-tight text-[#111111]">
          An unexpected pause occurred
        </h2>

        <p className="font-times text-base text-neutral-600 leading-relaxed italic">
          The exhibition stream encountered a temporary interruption. You may try refreshing the view or returning to the home archive.
        </p>

        <div className="pt-4 flex items-center justify-center space-x-4 font-suisse text-xs uppercase tracking-[0.18em]">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-[#111111] text-[#F9F9F8] hover:bg-neutral-800 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 border-[0.5px] border-neutral-400 hover:border-[#111111] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
