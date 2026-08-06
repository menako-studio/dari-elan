import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] bg-[#F9F9F8] flex flex-col items-center justify-center px-6 py-24 text-center text-[#111111]">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-unica text-xs uppercase tracking-[0.3em] text-neutral-400">
          404 — PAGE NOT FOUND
        </span>

        <h1 className="font-suisse text-3xl sm:text-4xl font-light tracking-tight text-[#111111]">
          Frame Beyond Range
        </h1>

        <p className="font-times text-base text-neutral-600 leading-relaxed italic">
          The frame or archive page you are looking for has been moved, archived, or never existed in this collection.
        </p>

        <div className="pt-6">
          <Link
            href="/personal-project"
            className="inline-block px-6 py-3 border-[0.5px] border-neutral-400 text-xs font-suisse uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#F9F9F8] transition-colors"
          >
            ← Explore Photobook Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
