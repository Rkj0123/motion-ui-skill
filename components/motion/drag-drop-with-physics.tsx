"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_BOUNCE } from "@/lib/ease";

export interface DragDropWithPhysicsProps {
  title?: string;
  category?: string;
  onDropInZone?: (zoneId: string) => void;
  className?: string;
}

export function DragDropWithPhysics({
  title = "Design System Refactor",
  category = "Engineering",
  onDropInZone,
  className,
}: DragDropWithPhysicsProps) {
  const [currentZone, setCurrentZone] = useState<"todo" | "done">("todo");
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-12, 12]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    setIsDragging(false);
    if (info.offset.x > 100) {
      setCurrentZone("done");
      onDropInZone?.("done");
    } else if (info.offset.x < -100) {
      setCurrentZone("todo");
      onDropInZone?.("todo");
    }
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-6 p-6 w-full max-w-lg mx-auto select-none",
        className
      )}
    >
      <div className="grid grid-cols-2 gap-4 w-full">
        <div
          className={cn(
            "h-32 rounded-2xl border-2 border-dashed p-4 flex flex-col justify-between transition-colors",
            currentZone === "todo"
              ? "border-sky-500/50 bg-sky-50/50 dark:bg-sky-950/20"
              : "border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20"
          )}
        >
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            In Progress
          </span>
          <span className="text-xs text-neutral-400">Drag here to queue</span>
        </div>

        <div
          className={cn(
            "h-32 rounded-2xl border-2 border-dashed p-4 flex flex-col justify-between transition-colors",
            currentZone === "done"
              ? "border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-950/20"
              : "border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20"
          )}
        >
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Completed
          </span>
          <span className="text-xs text-neutral-400">Drag here to finish</span>
        </div>
      </div>

      <motion.div
        drag
        dragConstraints={{ left: -140, right: 140, top: -50, bottom: 50 }}
        dragElastic={0.2}
        style={{ x, y, rotate }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        animate={{
          scale: isDragging ? 1.05 : 1,
          boxShadow: isDragging
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        }}
        transition={SPRING_BOUNCE}
        className={cn(
          "w-64 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-grab active:cursor-grabbing",
          "hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
            {category}
          </span>
          <span className="text-[10px] text-neutral-400">
            {currentZone === "done" ? "✓ Done" : "⚡ Active"}
          </span>
        </div>
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          {title}
        </h4>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Hold and drag left or right to switch destination zone.
        </p>
      </motion.div>
    </div>
  );
}
