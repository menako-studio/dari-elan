import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] bg-[#FFFDF4] flex flex-col items-center justify-center px-6 py-24 text-center text-[#111111]">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-suisse text-xs uppercase tracking-[0.3em] text-neutral-400">
          404 — EXIF NOT FOUND
        </span>

        <h1 className="font-times text-4xl sm:text-5xl italic font-normal tracking-tight">
          Lost in the Frame
        </h1>

        <p className="font-times text-sm sm:text-base text-neutral-600 leading-relaxed italic">
          The page or exhibition you are looking for has been moved, archived, or does not exist in this roll.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 border-[0.5px] border-neutral-400 text-xs font-suisse uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#FFFDF4] transition-colors"
          >
            ← Explore Photobook Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
