"use client";

import { Minus, Plus } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { SPRING_PRESS, SPRING_SWAP } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface NumberFieldProps
  extends Omit<HTMLMotionProps<"div">, "onChange" | "defaultValue"> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function NumberField({
  value: controlledValue,
  defaultValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  onChange,
  prefix,
  suffix,
  className,
  ...props
}: NumberFieldProps) {
  const [internalVal, setInternalVal] = useState(defaultValue);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isControlled = controlledValue !== undefined;
  const currentVal = isControlled ? controlledValue : internalVal;
  const valueRef = useRef(currentVal);

  useEffect(() => {
    valueRef.current = currentVal;
  }, [currentVal]);

  const updateValue = (dir: "up" | "down") => {
    const next = valueRef.current + (dir === "up" ? step : -step);
    const clamped = Math.min(max, Math.max(min, next));
    if (clamped !== valueRef.current) {
      valueRef.current = clamped;
      setDirection(dir);
      if (!isControlled) setInternalVal(clamped);
      onChange?.(clamped);
      triggerHaptic("selection");
    }
  };

  const handleIncrement = () => updateValue("up");
  const handleDecrement = () => updateValue("down");

  const startHold = (action: () => void) => {
    action();
    let speed = 200;
    const loop = () => {
      action();
      speed = Math.max(50, speed * 0.85);
      intervalRef.current = setTimeout(loop, speed);
    };
    intervalRef.current = setTimeout(loop, speed);
  };

  const stopHold = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDecrement();
    }
  };

  return (
    <motion.div
      role="group"
      aria-label="Number stepper"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={cn(
        "inline-flex items-center rounded-xl border border-border bg-card p-1 shadow-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 focus:outline-none",
        className
      )}
      {...props}
    >
      {/* Decrement Button */}
      <motion.button
        type="button"
        disabled={currentVal <= min}
        onPointerDown={() => startHold(handleDecrement)}
        onPointerUp={stopHold}
        onPointerCancel={stopHold}
        onPointerLeave={stopHold}
        onClick={(event) => {
          if (event.detail === 0) handleDecrement();
        }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        transition={SPRING_PRESS}
        aria-label="Decrease value"
        className="flex size-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="size-3.5" />
      </motion.button>

      {/* Numeric Display with Directional Slide */}
      <div className="relative flex min-w-16 items-center justify-center px-2 py-1 text-sm font-semibold tabular-nums text-foreground overflow-hidden">
        {prefix && <span className="mr-0.5 text-xs text-muted-foreground">{prefix}</span>}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={currentVal}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: direction === "up" ? 14 : -14, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: direction === "up" ? -14 : 14, opacity: 0 }
            }
            transition={SPRING_SWAP}
            className="inline-block"
          >
            {currentVal}
          </motion.span>
        </AnimatePresence>
        {suffix && <span className="ml-0.5 text-xs text-muted-foreground">{suffix}</span>}
      </div>

      {/* Increment Button */}
      <motion.button
        type="button"
        disabled={currentVal >= max}
        onPointerDown={() => startHold(handleIncrement)}
        onPointerUp={stopHold}
        onPointerCancel={stopHold}
        onPointerLeave={stopHold}
        onClick={(event) => {
          if (event.detail === 0) handleIncrement();
        }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
        transition={SPRING_PRESS}
        aria-label="Increase value"
        className="flex size-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Plus className="size-3.5" />
      </motion.button>
    </motion.div>
  );
}
