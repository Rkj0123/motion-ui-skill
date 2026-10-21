"use client";

import * as React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PANEL, SPRING_SWAP } from "@/lib/ease";

export interface BannerItem {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  variant?: "default" | "success" | "warning" | "info";
}

export interface BannerStackingProps {
  banners: BannerItem[];
  onDismiss?: (id: string) => void;
  maxVisible?: number;
  className?: string;
}

export function BannerStacking({
  banners,
  onDismiss,
  maxVisible = 3,
  className,
}: BannerStackingProps) {
  const [isHovered, setIsHovered] = useState(false);

  const visibleBanners = banners.slice(0, maxVisible);

  return (
    <div
      className={cn("relative w-full max-w-md mx-auto select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("relative min-h-[80px]", isHovered ? "space-y-2" : "")}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleBanners.map((banner, index) => {
            const isTop = index === 0;
            const offset = isHovered ? 0 : index * 10;
            const scale = isHovered ? 1 : 1 - index * 0.05;
            const opacity = isHovered ? 1 : 1 - index * 0.2;
            const zIndex = visibleBanners.length - index;

            return (
              <motion.div
                key={banner.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{
                  opacity,
                  y: isHovered ? index * 68 : offset,
                  scale,
                  zIndex,
                }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={SPRING_PANEL}
                className={cn(
                  "rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-4 shadow-xl transition-colors",
                  isHovered ? "relative" : "absolute top-0 left-0 right-0",
                  banner.variant === "success" && "border-emerald-500/30",
                  banner.variant === "warning" && "border-amber-500/30",
                  banner.variant === "info" && "border-sky-500/30"
                )}
                style={{
                  transformOrigin: "top center",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {banner.title}
                      </span>
                      {banner.timestamp && (
                        <span className="text-xs text-neutral-400">
                          {banner.timestamp}
                        </span>
                      )}
                    </div>
                    {banner.description && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {banner.description}
                      </p>
                    )}
                  </div>
                  {onDismiss && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDismiss(banner.id);
                      }}
                      className="rounded-full p-1 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      aria-label="Dismiss banner"
                    >
                      <svg
                        className="size-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
