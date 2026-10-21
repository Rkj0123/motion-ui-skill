"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PRESS, SPRING_SWAP } from "@/lib/ease";

export interface InputClearWithDissolveProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  className?: string;
}

export function InputClearWithDissolve({
  value: controlledValue,
  defaultValue = "search query",
  onValueChange,
  className,
  placeholder = "Type something...",
  ...props
}: InputClearWithDissolveProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [dissolvingText, setDissolvingText] = useState<string | null>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleClear = () => {
    if (!value) return;
    setDissolvingText(value);
    setInternalValue("");
    onValueChange?.("");
    setTimeout(() => {
      setDissolvingText(null);
    }, 450);
  };

  return (
    <div className={cn("relative inline-flex items-center w-full max-w-sm", className)}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setInternalValue(e.target.value);
          onValueChange?.(e.target.value);
        }}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2.5 pr-10 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700",
          "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
          "focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow",
          dissolvingText ? "text-transparent placeholder-transparent" : ""
        )}
        {...props}
      />

      {dissolvingText && (
        <div className="absolute left-4 top-2.5 pointer-events-none flex overflow-hidden">
          {dissolvingText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              animate={{
                opacity: 0,
                y: -12 - Math.random() * 8,
                x: (Math.random() - 0.5) * 16,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.015,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-sm font-normal text-neutral-900 dark:text-neutral-100 whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </div>
      )}

      <AnimatePresence>
        {value.length > 0 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={SPRING_SWAP}
            whileTap={{ scale: 0.9 }}
            onClick={handleClear}
            className="absolute right-3 p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Clear input"
          >
            <svg
              className="size-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
