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
    <div className="w-full min-h-[75vh] bg-[#FFFDF4] flex flex-col items-center justify-center px-6 py-24 text-center text-[#111111]">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-unica text-xs uppercase tracking-[0.3em] text-neutral-400">
          500 — CAMERA ERROR
        </span>

        <h1 className="font-suisse text-3xl sm:text-4xl font-light tracking-tight text-[#111111]">
          Shutter Jammed
        </h1>

        <p className="font-times text-base text-neutral-600 leading-relaxed italic">
          An unexpected optical anomaly occurred while loading this gallery room.
        </p>

        <div className="pt-6 flex justify-center gap-4 font-suisse text-xs uppercase tracking-[0.2em]">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-[#111111] text-[#FFFDF4] hover:bg-neutral-800 transition-colors"
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
