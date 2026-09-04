"use client";

import { Check } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React from "react";
import { SPRING_BOUNCE, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface StepItem {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  onStepClick,
  orientation = "horizontal",
  className,
  ...props
}: StepperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="navigation"
      aria-label="Progress Stepper"
      className={cn(
        "flex w-full",
        orientation === "horizontal"
          ? "items-center justify-between"
          : "flex-col space-y-6",
        className
      )}
      {...props}
    >
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isCurrent = idx === currentStep;
        const isUpcoming = idx > currentStep;
        const isClickable = onStepClick && idx <= currentStep;

        return (
          <React.Fragment key={step.id}>
            <div
              className={cn(
                "flex items-center gap-3",
                orientation === "horizontal" ? "flex-col text-center" : "flex-row text-left"
              )}
            >
              {/* Step Circle Indicator */}
              <motion.button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(idx)}
                whileTap={isClickable && !shouldReduceMotion ? { scale: 0.92 } : undefined}
                transition={SPRING_PRESS}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "relative flex size-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isCompleted && "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/25",
                  isCurrent && "border-primary bg-background text-primary ring-4 ring-primary/20 font-bold",
                  isUpcoming && "border-border bg-muted/60 text-muted-foreground",
                  !isClickable && "cursor-default"
                )}
              >
                {isCompleted ? (
                  <motion.div
                    initial={shouldReduceMotion ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={SPRING_BOUNCE}
                  >
                    <Check className="size-4 stroke-[3]" />
                  </motion.div>
                ) : (
                  <span>{idx + 1}</span>
                )}
              </motion.button>

              {/* Step Label */}
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xs font-medium tracking-tight transition-colors",
                    isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
                {step.description && (
                  <span className="text-[11px] text-muted-foreground/70 hidden sm:inline">
                    {step.description}
                  </span>
                )}
              </div>
            </div>

            {/* Connecting Line Between Steps */}
            {idx < steps.length - 1 && orientation === "horizontal" && (
              <div className="relative mx-2 h-0.5 flex-1 bg-border/70 overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{ width: isCompleted ? "100%" : "0%" }}
                  transition={SPRING_LAYOUT}
                  className="absolute inset-y-0 left-0 bg-primary"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
