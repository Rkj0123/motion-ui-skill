"use client";

import { Check, Copy, Pipette } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { SPRING_PANEL, SPRING_PRESS } from "@/lib/ease";
import { useDismiss } from "@/lib/hooks/use-dismiss";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

const DEFAULT_PRESETS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#64748b",
  "#09090b",
  "#ffffff",
];

export interface ColorPickerProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  value?: string;
  onChange?: (color: string) => void;
  presets?: string[];
  className?: string;
}

export function ColorPicker({
  value = "#3b82f6",
  onChange,
  presets = DEFAULT_PRESETS,
  className,
  ...props
}: ColorPickerProps) {
  const [color, setColor] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const popoverRef = useRef<HTMLDivElement>(null);
  useDismiss(isOpen, () => setIsOpen(false), popoverRef);

  useEffect(() => {
    setColor(value);
  }, [value]);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onChange?.(newColor);
    triggerHaptic("selection");
  };

  const copyHex = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      triggerHaptic("success");
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can be denied by the browser.
    }
  };

  const openEyedropper = async () => {
    if ("EyeDropper" in window) {
      try {
        // @ts-ignore
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open();
        handleColorChange(result.sRGBHex);
      } catch {
        // user canceled
      }
    }
  };

  return (
    <motion.div className={cn("relative inline-block", className)} {...props}>
      {/* Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={SPRING_PRESS}
        className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5 pr-3 text-xs font-medium text-foreground shadow-sm hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span
          className="size-6 rounded-lg border border-border/80 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]"
          style={{ backgroundColor: color }}
        />
        <span className="font-mono text-xs uppercase">{color}</span>
      </motion.button>

      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 2 }}
            transition={SPRING_PANEL}
            className="absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border bg-card p-4 shadow-xl backdrop-blur-md space-y-3"
          >
            {/* Color Preview & Native input */}
            <div className="relative h-28 w-full rounded-xl overflow-hidden border border-border shadow-inner flex items-center justify-center">
              <div
                className="absolute inset-0 size-full"
                style={{ backgroundColor: color }}
              />
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="absolute inset-0 opacity-0 size-full cursor-pointer"
              />
              <span className="relative z-10 font-mono text-xs font-semibold px-2 py-1 rounded bg-black/40 text-white backdrop-blur-sm pointer-events-none uppercase">
                {color}
              </span>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-6 gap-2">
              {presets.map((preset) => {
                const isSelected = preset.toLowerCase() === color.toLowerCase();
                return (
                  <button
                    key={preset}
                    type="button"
                    aria-label={`Select color ${preset}`}
                    onClick={() => handleColorChange(preset)}
                    className="relative size-7 rounded-lg border border-border/60 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{ backgroundColor: preset }}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check
                          className={cn(
                            "size-3.5",
                            preset === "#ffffff" || preset === "#eab308"
                              ? "text-black"
                              : "text-white"
                          )}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Controls Bar */}
            <div className="flex items-center gap-1.5 pt-1 border-t border-border">
              <input
                type="text"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="flex-1 font-mono text-xs uppercase rounded-lg border border-border bg-muted/40 px-2.5 py-1.5 focus:outline-none focus:border-primary"
              />
              {"EyeDropper" in (typeof window !== "undefined" ? window : {}) && (
                <button
                  type="button"
                  onClick={openEyedropper}
                  aria-label="Pick color from screen"
                  className="rounded-lg border border-border p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Pipette className="size-3.5" />
                </button>
              )}
              <button
                type="button"
                onClick={copyHex}
                aria-label="Copy color hex"
                className="rounded-lg border border-border p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-500" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
