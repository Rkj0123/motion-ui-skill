"use client";

import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { SPRING_PRESS, SPRING_BOUNCE } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface AudioPlayerProps extends HTMLMotionProps<"div"> {
  src?: string;
  title: string;
  artist?: string;
  durationSeconds?: number;
  className?: string;
}

export function AudioPlayer({
  src,
  title,
  artist,
  durationSeconds = 184, // 3:04
  className,
  ...props
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(durationSeconds);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (src) {
      const audio = audioRef.current;
      if (!audio) return;
      if (isPlaying) {
        void audio.play().catch(() => setIsPlaying(false));
      } else {
        audio.pause();
      }
      return;
    }

    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, src, durationSeconds]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted, src]);

  useEffect(() => {
    setDuration(durationSeconds);
    setCurrentTime(0);
    setIsPlaying(false);
  }, [src, durationSeconds]);

  const togglePlay = () => {
    triggerHaptic(isPlaying ? "light" : "medium");
    setIsPlaying((playing) => !playing);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Waveform bars simulation
  const waveformBars = [
    24, 45, 78, 55, 90, 65, 40, 75, 95, 30, 60, 85, 45, 100, 70, 40, 65, 80, 50, 30,
  ];

  return (
    <motion.div
      className={cn(
        "relative w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Track info & Mute toggle */}
      <div className="flex items-center justify-between pb-3">
        <div className="min-w-0 flex-1 pr-2">
          <h4 className="text-xs font-semibold text-foreground truncate">{title}</h4>
          {artist && (
            <p className="text-[11px] text-muted-foreground truncate">{artist}</p>
          )}
        </div>
        <button
          type="button"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          onClick={() => {
            triggerHaptic("selection");
            setIsMuted(!isMuted);
          }}
          className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
        >
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>
      </div>

      {src && (
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || durationSeconds)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onEnded={() => {
            setIsPlaying(false);
            setCurrentTime(0);
          }}
          className="sr-only"
          aria-label={title}
        />
      )}

      {/* Waveform graphic */}
      <div className="flex items-center justify-between gap-1 h-10 px-1 my-2">
        {waveformBars.map((height, i) => {
          const barProgress = (i / waveformBars.length) * 100;
          const isPassed = barProgress <= progress;

          return (
            <motion.div
              key={i}
              className={cn(
                "w-1 rounded-full transition-colors",
                isPassed ? "bg-primary" : "bg-muted"
              )}
              animate={
                isPlaying && !shouldReduceMotion
                  ? {
                      height: [`${height * 0.4}%`, `${height}%`, `${height * 0.3}%`],
                      transition: {
                        duration: 0.6 + (i % 3) * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }
                  : { height: `${height * 0.6}%` }
              }
            />
          );
        })}
      </div>

      {/* Progress scrub bar */}
      <div className="space-y-1 pt-1">
        <div
          role="slider"
          aria-label="Seek audio"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          tabIndex={0}
          className="relative h-1.5 w-full bg-muted rounded-full overflow-hidden cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = Math.max(0, Math.min(1, clickX / rect.width));
            const nextTime = pct * duration;
            setCurrentTime(nextTime);
            if (audioRef.current && src) audioRef.current.currentTime = nextTime;
            triggerHaptic("selection");
          }}
          onKeyDown={(e) => {
            if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
            e.preventDefault();
            const nextTime = Math.max(
              0,
              Math.min(duration, currentTime + (e.key === "ArrowRight" ? 5 : -5))
            );
            setCurrentTime(nextTime);
            if (audioRef.current && src) audioRef.current.currentTime = nextTime;
          }}
        >
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          type="button"
          aria-label="Restart audio"
          onClick={() => {
            setCurrentTime(0);
            if (audioRef.current && src) audioRef.current.currentTime = 0;
            triggerHaptic("selection");
          }}
          className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
        >
          <RotateCcw className="size-4" />
        </button>

        <motion.button
          type="button"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
          onClick={togglePlay}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
          transition={SPRING_PRESS}
          className="size-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={SPRING_BOUNCE}
              >
                <Pause className="size-5 fill-current" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={SPRING_BOUNCE}
                className="translate-x-0.5"
              >
                <Play className="size-5 fill-current" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
