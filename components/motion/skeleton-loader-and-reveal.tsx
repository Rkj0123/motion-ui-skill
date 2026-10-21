"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PANEL } from "@/lib/ease";

export interface SkeletonLoaderAndRevealProps {
  isLoading?: boolean;
  skeletonContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function SkeletonLoaderAndReveal({
  isLoading = true,
  skeletonContent,
  children,
  className,
}: SkeletonLoaderAndRevealProps) {
  return (
    <div className={cn("relative overflow-hidden w-full max-w-sm", className)}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="w-full space-y-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
          >
            {skeletonContent || (
              <>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-3.5 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                    <div className="h-2.5 w-1/3 rounded bg-neutral-100 dark:bg-neutral-800/60 animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full rounded bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
                  <div className="h-3 w-5/6 rounded bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
                  <div className="h-3 w-2/3 rounded bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={SPRING_PANEL}
            className="w-full p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
          >
            {children || (
              <>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                    AG
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      Antigravity Agent
                    </h4>
                    <p className="text-xs text-neutral-500">Systems Engineer</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
                  Autonomous component generation and layout compilation completed with zero layout shift.
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
