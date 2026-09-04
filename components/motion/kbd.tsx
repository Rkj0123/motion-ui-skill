"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useState } from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export type KeyModifier =
  | "cmd"
  | "command"
  | "ctrl"
  | "control"
  | "alt"
  | "option"
  | "shift"
  | "enter"
  | "esc"
  | "tab"
  | "space"
  | "backspace"
  | "up"
  | "down"
  | "left"
  | "right";

export interface KbdProps extends Omit<HTMLMotionProps<"kbd">, "children"> {
  keys?: (KeyModifier | string)[];
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md";
  className?: string;
}

const SYMBOLS_MAC: Record<string, string> = {
  cmd: "⌘",
  command: "⌘",
  ctrl: "⌃",
  control: "⌃",
  alt: "⌥",
  option: "⌥",
  shift: "⇧",
  enter: "↵",
  esc: "⎋",
  tab: "⇥",
  space: "␣",
  backspace: "⌫",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
};

const SYMBOLS_WIN: Record<string, string> = {
  cmd: "Ctrl",
  command: "Ctrl",
  ctrl: "Ctrl",
  control: "Ctrl",
  alt: "Alt",
  option: "Alt",
  shift: "Shift",
  enter: "Enter",
  esc: "Esc",
  tab: "Tab",
  space: "Space",
  backspace: "Backspace",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
};

const SIZE_STYLES = {
  xs: "h-5 min-w-5 px-1.5 text-[10px]",
  sm: "h-6 min-w-6 px-2 text-xs",
  md: "h-7 min-w-7 px-2.5 text-sm",
};

export function Kbd({
  keys = [],
  children,
  size = "sm",
  className,
  ...props
}: KbdProps) {
  const [isMac, setIsMac] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform || ""));
    }
  }, []);

  const symbolMap = isMac ? SYMBOLS_MAC : SYMBOLS_WIN;

  const formatKey = (key: string) => {
    const lower = key.toLowerCase();
    return symbolMap[lower] || key.toUpperCase();
  };

  return (
    <motion.kbd
      whileTap={shouldReduceMotion ? undefined : { y: 1 }}
      transition={SPRING_PRESS}
      className={cn(
        "inline-flex select-none items-center justify-center gap-1 rounded-md border border-border/80 bg-muted/70 font-mono font-medium text-muted-foreground shadow-[0_1px_0_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_1px_rgba(255,255,255,0.06)] transition-all",
        SIZE_STYLES[size],
        className
      )}
      {...props}
    >
      {keys.length > 0 ? (
        keys.map((k, i) => (
          <React.Fragment key={i}>
            <span>{formatKey(k)}</span>
            {i < keys.length - 1 && <span className="opacity-40">+</span>}
          </React.Fragment>
        ))
      ) : (
        children
      )}
    </motion.kbd>
  );
}
