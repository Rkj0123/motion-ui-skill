"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PRESS } from "@/lib/ease";

export interface GetProButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  glow?: boolean;
}

export function GetProButton({
  children = "Upgrade to Pro",
  glow = true,
  className,
  ...props
}: GetProButtonProps) {
  return (
    <div className="relative inline-flex group">
      {glow && (
        <div
          className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200"
          aria-hidden="true"
        />
      )}
      <motion.button
        type="button"
        whileTap={{ scale: 0.96 }}
        transition={SPRING_PRESS}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm",
          "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950",
          "border border-white/20 dark:border-neutral-800 shadow-xl overflow-hidden",
          className
        )}
        {...props}
      >
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
          aria-hidden="true"
        />
        <svg
          className="size-4 text-amber-400 dark:text-amber-500 fill-current animate-pulse"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span>{children}</span>
      </motion.button>
    </div>
  );
}
