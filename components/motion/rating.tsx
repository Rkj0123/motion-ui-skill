"use client";

import { Star } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_BOUNCE, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface RatingProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  value?: number;
  defaultValue?: number;
  max?: number;
  allowHalf?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (val: number) => void;
  className?: string;
}

const SIZE_CLASSES = {
  sm: "size-4",
  md: "size-5",
  lg: "size-7",
};

export function Rating({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  allowHalf = true,
  readOnly = false,
  disabled = false,
  size = "md",
  onChange,
  className,
  ...props
}: RatingProps) {
  const [uncontrolledVal, setUncontrolledVal] = useState(defaultValue);
  const [hoverVal, setHoverVal] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const isControlled = controlledValue !== undefined;
  const currentVal = isControlled ? controlledValue : uncontrolledVal;
  const activeVal = hoverVal !== null ? hoverVal : currentVal;

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>, index: number) => {
    if (readOnly || disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isFirstHalf = x < rect.width / 2;

    const calculatedVal = allowHalf && isFirstHalf ? index + 0.5 : index + 1;
    if (calculatedVal !== hoverVal) {
      setHoverVal(calculatedVal);
      triggerHaptic("selection");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (readOnly || disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isFirstHalf = x < rect.width / 2;

    const newVal = allowHalf && isFirstHalf ? index + 0.5 : index + 1;
    if (!isControlled) setUncontrolledVal(newVal);
    onChange?.(newVal);
    triggerHaptic("success");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (readOnly || disabled) return;
    const step = allowHalf ? 0.5 : 1;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(max, currentVal + step);
      if (!isControlled) setUncontrolledVal(next);
      onChange?.(next);
      triggerHaptic("selection");
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(0, currentVal - step);
      if (!isControlled) setUncontrolledVal(next);
      onChange?.(next);
      triggerHaptic("selection");
    }
  };

  return (
    <div
      role="radiogroup"
      tabIndex={readOnly || disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onPointerLeave={() => setHoverVal(null)}
      aria-label={`Rating: ${currentVal} of ${max} stars`}
      className={cn(
        "inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg p-1",
        disabled && "opacity-50 cursor-not-allowed",
        readOnly && "cursor-default",
        className
      )}
      {...props}
    >
      {Array.from({ length: max }).map((_, idx) => {
        const starNumber = idx + 1;
        const fillPercent = Math.max(
          0,
          Math.min(100, (activeVal - idx) * 100)
        );

        return (
          <motion.button
            key={idx}
            type="button"
            tabIndex={-1}
            disabled={disabled || readOnly}
            onClick={(e) => handleClick(e, idx)}
            onPointerMove={(e) => handlePointerMove(e, idx)}
            whileTap={shouldReduceMotion || readOnly || disabled ? undefined : { scale: 0.85 }}
            whileHover={shouldReduceMotion || readOnly || disabled ? undefined : { scale: 1.15 }}
            transition={SPRING_BOUNCE}
            className="relative p-0.5 rounded focus:outline-none cursor-pointer disabled:cursor-not-allowed"
          >
            {/* Background Empty Star */}
            <Star
              className={cn(
                SIZE_CLASSES[size],
                "text-muted-foreground/30 transition-colors"
              )}
            />

            {/* Foreground Filled Star with Clip Path */}
            <div
              className="absolute inset-0 p-0.5 overflow-hidden text-amber-500 pointer-events-none"
              style={{ width: `${fillPercent}%` }}
            >
              <Star
                className={cn(
                  SIZE_CLASSES[size],
                  "fill-current stroke-current"
                )}
              />
            </div>
          </motion.button>
        );
      })}

      {!readOnly && (
        <span className="ml-2 text-xs font-semibold tabular-nums text-muted-foreground min-w-[2.5rem]">
          {activeVal.toFixed(1)}
        </span>
      )}
    </div>
  );
}
