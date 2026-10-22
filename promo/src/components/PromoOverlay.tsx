import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { SPRING_GENTLE, SPRING_LAYOUT } from "@/lib/ease";

interface PromoOverlayProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "top" | "bottom" | "center";
}

export function PromoOverlay({
  badge,
  title,
  subtitle,
  align = "top",
}: PromoOverlayProps) {
  const posClasses =
    align === "top"
      ? "top-8 left-1/2 -translate-x-1/2"
      : align === "bottom"
      ? "bottom-8 left-1/2 -translate-x-1/2"
      : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <motion.div
      initial={{ opacity: 0, y: align === "bottom" ? 20 : -20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={SPRING_GENTLE}
      className={`fixed ${posClasses} z-50 pointer-events-none flex flex-col items-center text-center`}
    >
      <div className="rounded-2xl border border-white/15 bg-black/80 px-7 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-2xl ring-1 ring-white/10">
        {badge && (
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              {badge}
            </span>
          </div>
        )}
        <h1 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm font-medium text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
