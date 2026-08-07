"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
  albumArtBg: string;
};

const ABOUT_PLAYLIST: Track[] = [
  { 
    id: "classixx", 
    title: "All You're Waiting For", 
    artist: "Classixx", 
    src: "/musics/classixx-all-youre-waiting-for.mp3",
    albumArtBg: "from-blue-600 via-indigo-600 to-slate-900"
  },
  { 
    id: "mimi1", 
    title: "a new place", 
    artist: "mimi bay", 
    src: "/musics/mimi_bay_a_new_place.mp3",
    albumArtBg: "from-amber-600 via-stone-700 to-stone-900"
  },
  { 
    id: "mimi2", 
    title: "columbia road", 
    artist: "mimi bay", 
    src: "/musics/mimi_bay_columbia_road.mp3",
    albumArtBg: "from-emerald-700 via-teal-800 to-slate-950"
  },
];

const PERSONAL_PROJECT_PLAYLIST: Track[] = [
  { 
    id: "mimi1", 
    title: "a new place", 
    artist: "mimi bay", 
    src: "/musics/mimi_bay_a_new_place.mp3",
    albumArtBg: "from-amber-600 via-stone-700 to-stone-900"
  },
  { 
    id: "mimi2", 
    title: "columbia road", 
    artist: "mimi bay", 
    src: "/musics/mimi_bay_columbia_road.mp3",
    albumArtBg: "from-emerald-700 via-teal-800 to-slate-950"
  },
  { 
    id: "mimi3", 
    title: "u know me so well", 
    artist: "mimi bay", 
    src: "/musics/mimi_bay_u_know_me_so_well.mp3",
    albumArtBg: "from-rose-700 via-pink-900 to-neutral-950"
  },
  { 
    id: "classixx", 
    title: "All You're Waiting For", 
    artist: "Classixx", 
    src: "/musics/classixx-all-youre-waiting-for.mp3",
    albumArtBg: "from-blue-600 via-indigo-600 to-slate-900"
  },
];

const DEFAULT_PLAYLIST: Track[] = [
  { 
    id: "mimi1", 
    title: "a new place", 
    artist: "mimi bay", 
    src: "/musics/mimi_bay_a_new_place.mp3",
    albumArtBg: "from-amber-600 via-stone-700 to-stone-900"
  },
];

export default function AmbientAudioPlayer() {
  const pathname = usePathname();
  
  const getPlaylistForPath = useCallback((path: string) => {
    if (path === "/about") return ABOUT_PLAYLIST;
    if (path.startsWith("/personal-project")) return PERSONAL_PROJECT_PLAYLIST;
    return DEFAULT_PLAYLIST;
  }, []);

  const [playlist, setPlaylist] = useState<Track[]>(() => getPlaylistForPath(pathname));
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasUserInteracted = useRef(false);

  const currentTrack = playlist[trackIndex] || playlist[0];

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Play track
  const playTrack = useCallback((track: Track) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCurrentTime(0);
    setDuration(0);

    const audio = new Audio(track.src);
    audioRef.current = audio;

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.onended = () => {
      setTrackIndex((prev) => (prev + 1) % playlist.length);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
          console.log("Autoplay waiting for click:", err);
        });
    }
  }, [playlist.length]);

  // Handle route change
  useEffect(() => {
    const newPlaylist = getPlaylistForPath(pathname);
    setPlaylist(newPlaylist);
    setTrackIndex(0);
    playTrack(newPlaylist[0]);
  }, [pathname, getPlaylistForPath, playTrack]);

  // Autoplay on first click if blocked initially
  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasUserInteracted.current) {
        hasUserInteracted.current = true;
        if (!isPlaying && audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    };
    window.addEventListener("click", handleFirstClick, { once: true });
    return () => window.removeEventListener("click", handleFirstClick);
  }, [isPlaying]);

  // Toggle Play / Pause
  const togglePlayPause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        playTrack(currentTrack);
      }
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIdx = (trackIndex + 1) % playlist.length;
    setTrackIndex(nextIdx);
    playTrack(playlist[nextIdx]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIdx = (trackIndex - 1 + playlist.length) % playlist.length;
    setTrackIndex(prevIdx);
    playTrack(playlist[prevIdx]);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  if (!pathname.startsWith("/personal-project")) {
    return null;
  }

  return (
    <div id="ambient-audio-player" className="fixed bottom-6 right-6 z-50 select-none">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          /* ================= MINIMIZED DYNAMIC ISLAND PILL ================= */
          <motion.div
            key="minimized"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            onClick={() => setIsMinimized(false)}
            className="bg-[#121214]/90 hover:bg-[#18181b]/95 backdrop-blur-2xl border border-white/15 text-white px-4 py-2.5 flex items-center space-x-3 rounded-full shadow-2xl cursor-pointer transition-all group"
          >
            {/* Equalizer animation */}
            <div className="flex items-end justify-center space-x-[2.5px] h-3.5 w-3.5">
              {[1, 2, 3].map((bar) => (
                <motion.div
                  key={bar}
                  className={`w-[2px] rounded-full ${isPlaying ? "bg-white" : "bg-neutral-500"}`}
                  animate={{
                    height: isPlaying
                      ? bar === 2
                        ? ["30%", "100%", "50%", "100%", "30%"]
                        : ["70%", "30%", "100%", "40%", "70%"]
                      : "25%",
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "easeInOut",
                    delay: bar * 0.12,
                  }}
                  style={{ originY: 1 }}
                />
              ))}
            </div>

            {/* Title & Artist */}
            <div className="flex items-center space-x-2 text-xs font-suisse">
              <span className="max-w-[150px] sm:max-w-[200px] truncate text-neutral-100 font-medium">
                {currentTrack.artist} — {currentTrack.title}
              </span>
            </div>

            {/* Toggle play directly */}
            <button
              onClick={togglePlayPause}
              className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </motion.div>
        ) : (
          /* ================= EXPANDED iPHONE 15 / CARPLAY WIDGET ================= */
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="w-[300px] sm:w-[320px] bg-[#121214]/92 backdrop-blur-2xl border border-white/15 rounded-[32px] p-4.5 shadow-2xl text-white font-suisse flex flex-col space-y-3.5"
          >
            {/* Top Bar Header */}
            <div className="flex justify-between items-center text-[10px] tracking-widest text-neutral-400 uppercase">
              <div className="flex items-center space-x-1.5 font-medium">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-neutral-500"}`} />
                <span>NOW PLAYING</span>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="hover:text-white p-1 transition-colors text-xs cursor-pointer font-bold"
                title="Minimize"
              >
                ✕
              </button>
            </div>

            {/* Track Info Card (Artwork + Text) */}
            <div className="flex items-center space-x-3.5">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${currentTrack.albumArtBg} shadow-lg flex items-center justify-center flex-shrink-0 border border-white/15 relative overflow-hidden`}
              >
                {/* Vinyl effect icon */}
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
              </div>

              <div className="flex flex-col min-w-0 flex-1">
                <h4 className="font-semibold text-sm text-white truncate leading-snug">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-neutral-400 truncate mt-0.5 font-normal">
                  {currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Scrubber Progress Bar */}
            <div className="flex flex-col space-y-1.5 pt-1">
              <div className="relative flex items-center">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white hover:accent-neutral-200"
                />
              </div>

              <div className="flex justify-between text-[10px] font-mono text-neutral-400 px-0.5">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* iPhone / CarPlay Transport Controls */}
            <div className="flex items-center justify-between pt-1 px-4">
              {/* Previous */}
              <button
                onClick={handlePrev}
                className="text-neutral-400 hover:text-white transition-colors p-2 cursor-pointer"
                title="Previous Track"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play / Pause Toggle Button */}
              <button
                onClick={togglePlayPause}
                className="w-11 h-11 bg-white text-black hover:bg-neutral-200 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                className="text-neutral-400 hover:text-white transition-colors p-2 cursor-pointer"
                title="Next Track"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
