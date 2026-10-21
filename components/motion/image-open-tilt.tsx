"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PANEL, SPRING_PRESS } from "@/lib/ease";

export interface ImageOpenTiltProps {
  src?: string;
  alt?: string;
  title?: string;
  className?: string;
}

export function ImageOpenTilt({
  src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  alt = "Abstract architectural forms",
  title = "Parametric Structure",
  className,
}: ImageOpenTiltProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("inline-block", className)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={SPRING_PRESS}
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md"
      >
        <img
          src={src}
          alt={alt}
          className="h-48 w-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
          <span className="text-xs font-medium text-white/80">Click to expand</span>
          <span className="text-sm font-semibold text-white">{title}</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.85, rotateX: 25, y: 40, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, rotateX: -15, y: 20, opacity: 0 }}
              transition={SPRING_PANEL}
              style={{ transformPerspective: 1000 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden border border-white/20 bg-neutral-950 shadow-2xl"
            >
              <img src={src} alt={alt} className="w-full h-auto max-h-[75vh] object-contain" />
              <div className="p-4 flex items-center justify-between bg-neutral-900/90 border-t border-white/10">
                <span className="text-sm font-semibold text-white">{title}</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
