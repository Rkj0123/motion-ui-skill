"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PRESS, SPRING_BOUNCE } from "@/lib/ease";

export interface LearnMoreHoverProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  href?: string;
}

export function LearnMoreHover({
  label = "Explore Documentation",
  href = "#",
  className,
  ...props
}: LearnMoreHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      transition={SPRING_PRESS}
      className={cn(
        "group inline-flex items-center gap-2 py-1 font-semibold text-sm",
        "text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white transition-colors",
        className
      )}
      {...props}
    >
      <span className="relative">
        {label}
        <motion.span
          className="absolute left-0 bottom-0 w-full h-[1.5px] bg-neutral-900 dark:bg-neutral-100 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>

      <div className="relative size-4 overflow-hidden flex items-center justify-center">
        <motion.svg
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{
            x: isHovered ? [0, 16, -16, 0] : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </motion.svg>
      </div>
    </motion.a>
  );
}
