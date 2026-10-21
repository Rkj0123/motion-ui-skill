"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_SWAP } from "@/lib/ease";

export interface SpinningCounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
}

function DigitColumn({ digit }: { digit: string }) {
  const num = parseInt(digit, 10);
  if (isNaN(num)) {
    return <span className="inline-block px-0.5">{digit}</span>;
  }

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="relative inline-block h-8 overflow-hidden">
      <motion.div
        animate={{ y: -num * 32 }}
        transition={SPRING_SWAP}
        className="flex flex-col items-center"
      >
        {digits.map((d) => (
          <span
            key={d}
            className="flex h-8 items-center justify-center font-mono font-bold text-xl tabular-nums"
          >
            {d}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SpinningCounter({
  value,
  className,
}: SpinningCounterProps) {
  const formatted = value.toLocaleString();
  const chars = formatted.split("");

  return (
    <div
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-sm",
        className
      )}
    >
      <div className="flex items-center">
        {chars.map((char, index) => (
          <DigitColumn key={`${index}-${char}`} digit={char} />
        ))}
      </div>
    </div>
  );
}
