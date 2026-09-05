"use client";

import { Check, Copy } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { SPRING_BOUNCE, SPRING_PRESS, SPRING_SWAP } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface CopyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  showText?: boolean;
  timeout?: number;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label = "Copy",
  copiedLabel = "Copied!",
  showText = false,
  timeout = 2000,
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    try {
      if (typeof navigator === "undefined" || !navigator.clipboard) return;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      triggerHaptic("success");
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), timeout);
    } catch {
      // Fallback
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
      transition={SPRING_PRESS}
      aria-label={copied ? copiedLabel : label}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none",
        copied && "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
        className
      )}
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={shouldReduceMotion ? false : { scale: 0.5, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.1 } }}
            transition={SPRING_BOUNCE}
            className="flex items-center"
          >
            <Check className="size-3.5 stroke-[2.5]" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={shouldReduceMotion ? false : { scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.1 } }}
            transition={SPRING_SWAP}
            className="flex items-center"
          >
            <Copy className="size-3.5" />
          </motion.span>
        )}
      </AnimatePresence>

      {showText && (
        <span className="tabular-nums font-medium">
          {copied ? copiedLabel : label}
        </span>
      )}
    </motion.button>
  );
}
