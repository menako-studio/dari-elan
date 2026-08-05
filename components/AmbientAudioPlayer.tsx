"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      // Fade out and stop audio
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 1.2
        );
        setTimeout(() => {
          audioCtxRef.current?.suspend();
          setIsPlaying(false);
        }, 1200);
      } else {
        setIsPlaying(false);
      }
    } else {
      // Start or resume ambient sound
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass =
            window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          // Main Gain (Volume)
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
          masterGain.connect(ctx.destination);
          gainNodeRef.current = masterGain;

          // Low-pass Filter for warm analog feel
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(280, ctx.currentTime);
          filter.connect(masterGain);

          // Warm harmonic oscillators (D1 = 73.42 Hz & A1 = 110 Hz)
          const osc1 = ctx.createOscillator();
          osc1.type = "sine";
          osc1.frequency.setValueAtTime(73.42, ctx.currentTime);

          const osc2 = ctx.createOscillator();
          osc2.type = "triangle";
          osc2.frequency.setValueAtTime(110.0, ctx.currentTime);

          // Subtle LFO for gentle wave modulation
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.12, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(15, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(filter.frequency);

          osc1.connect(filter);
          osc2.connect(filter);

          osc1.start();
          osc2.start();
          lfo.start();

          osc1Ref.current = osc1;
          osc2Ref.current = osc2;
        }

        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }

        if (gainNodeRef.current) {
          gainNodeRef.current.gain.linearRampToValueAtTime(
            0.15,
            audioCtxRef.current.currentTime + 2.0
          );
        }
        setIsPlaying(true);
      } catch (err) {
        console.warn("Web Audio Context initialization failed:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 z-40 bg-[#F9F9F8]/90 backdrop-blur-md border-[0.5px] border-neutral-300 px-4 py-2 flex items-center space-x-3 text-xs font-suisse tracking-[0.2em] uppercase text-[#111111] hover:bg-[#111111] hover:text-white transition-all shadow-sm"
      aria-label="Toggle Ambient Audio"
    >
      <span className="flex items-center space-x-1.5">
        <span
          className={`w-2 h-2 rounded-none inline-block ${
            isPlaying ? "bg-emerald-500 animate-pulse" : "bg-neutral-400"
          }`}
        />
        <span>AMBIENT SOUND: {isPlaying ? "ON" : "OFF"}</span>
      </span>
    </motion.button>
  );
}
