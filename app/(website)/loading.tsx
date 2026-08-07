export default function Loading() {
  return (
    <div className="w-full min-h-[80vh] bg-[#F9F9F8] flex flex-col justify-center items-center px-6 py-24">
      <div className="flex flex-col items-center space-y-6 animate-pulse max-w-lg text-center">
        <div className="font-suisse text-xs uppercase tracking-[0.3em] text-neutral-400">
          DARI ELAN — EXHIBITION ARCHIVE
        </div>
        
        {/* Skeleton Photo Grid Frame */}
        <div className="w-48 h-64 bg-neutral-200/70 border-[0.5px] border-neutral-300/60 shadow-sm flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-[0.5px] border-neutral-400 border-t-transparent animate-spin" />
        </div>

        <div className="font-times italic text-neutral-500 text-sm">
          Loading light, texture & quiet moments...
        </div>
      </div>
    </div>
  );
}
