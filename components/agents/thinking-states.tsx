"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_SWAP, SPRING_PANEL } from "@/lib/ease";

export type AgentStage =
  | "evaluating"
  | "searching"
  | "reasoning"
  | "synthesizing"
  | "finalizing";

export interface ThinkingStatesProps {
  stage?: AgentStage;
  autoCycle?: boolean;
  className?: string;
}

const STAGE_LABELS: Record<AgentStage, { label: string; detail: string; color: string }> = {
  evaluating: {
    label: "Evaluating context",
    detail: "Analyzing constraints and contract criteria...",
    color: "bg-sky-500",
  },
  searching: {
    label: "Searching codebase",
    detail: "Querying token definitions and component indices...",
    color: "bg-indigo-500",
  },
  reasoning: {
    label: "Deep reasoning",
    detail: "Determining zero-redundancy integration topology...",
    color: "bg-purple-500",
  },
  synthesizing: {
    label: "Synthesizing output",
    detail: "Compiling verified TypeScript and design tokens...",
    color: "bg-amber-500",
  },
  finalizing: {
    label: "Verifying integrity",
    detail: "Running test gates and evaluation matrix...",
    color: "bg-emerald-500",
  },
};

const STAGES: AgentStage[] = [
  "evaluating",
  "searching",
  "reasoning",
  "synthesizing",
  "finalizing",
];

export function ThinkingStates({
  stage: controlledStage,
  autoCycle = true,
  className,
}: ThinkingStatesProps) {
  const [internalStageIndex, setInternalStageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!autoCycle || controlledStage !== undefined) return;
    const interval = setInterval(() => {
      setInternalStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [autoCycle, controlledStage]);

  const currentStage = controlledStage || STAGES[internalStageIndex];
  const info = STAGE_LABELS[currentStage];

  return (
    <div
      className={cn(
        "inline-flex flex-col gap-2 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800",
        "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg w-full max-w-sm",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex size-3">
            {!shouldReduceMotion && (
              <span
                className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  info.color
                )}
              />
            )}
            <span
              className={cn("relative inline-flex rounded-full size-3", info.color)}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentStage}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
              transition={shouldReduceMotion ? { duration: 0.15 } : SPRING_SWAP}
              className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200"
            >
              {info.label}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.6 }
                  : {
                      scale: [0.7, 1.2, 0.7],
                      opacity: [0.3, 1, 0.3],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }
              }
              className="size-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStage}
          initial={{ opacity: 0, filter: shouldReduceMotion ? "none" : "blur(2px)" }}
          animate={{ opacity: 1, filter: "none" }}
          exit={{ opacity: 0, filter: shouldReduceMotion ? "none" : "blur(2px)" }}
          transition={{ duration: 0.2 }}
          className="text-xs text-neutral-500 dark:text-neutral-400 pl-5 leading-relaxed"
        >
          {info.detail}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
