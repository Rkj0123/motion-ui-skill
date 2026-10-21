"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PRESS, SPRING_PANEL } from "@/lib/ease";

export interface DeleteWithSmokyDissolveProps {
  label?: string;
  itemTitle?: string;
  onDelete?: () => void;
  className?: string;
}

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  color: string;
}

export function DeleteWithSmokyDissolve({
  label = "Delete Item",
  itemTitle = "Project Invoice #1042",
  onDelete,
  className,
}: DeleteWithSmokyDissolveProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDelete = () => {
    if (isDeleting) return;
    setIsDeleting(true);

    const colors = ["#404040", "#525252", "#737373", "#a3a3a3", "#f97316", "#ef4444"];
    const newParticles: SmokeParticle[] = [];

    for (let i = 0; i < 32; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 260 - 130,
        y: Math.random() * -60 - 20,
        vx: (Math.random() - 0.5) * 80,
        vy: -Math.random() * 70 - 30,
        size: Math.random() * 16 + 6,
        opacity: Math.random() * 0.7 + 0.3,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles(newParticles);

    setTimeout(() => {
      onDelete?.();
    }, 700);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-flex flex-col items-center", className)}
    >
      <AnimatePresence mode="wait">
        {!isDeleting ? (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(8px)",
              scale: 0.95,
              transition: { duration: 0.35 },
            }}
            className="flex items-center justify-between gap-4 w-72 px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-neutral-400">Document</span>
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                {itemTitle}
              </span>
            </div>
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              transition={SPRING_PRESS}
              onClick={handleDelete}
              className="px-3 py-1.5 text-xs font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/40 rounded-lg transition-colors border border-red-200 dark:border-red-900/50"
            >
              {label}
            </motion.button>
          </motion.div>
        ) : (
          <div className="relative w-72 h-14 flex items-center justify-center pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: p.opacity,
                  rotate: 0,
                }}
                animate={{
                  x: p.x + p.vx,
                  y: p.y + p.vy,
                  scale: 0,
                  opacity: 0,
                  rotate: p.rotation,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: "absolute",
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  borderRadius: p.size > 12 ? "50%" : "30%",
                }}
              />
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 0], scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium text-neutral-400"
            >
              Dissolved
            </motion.span>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
