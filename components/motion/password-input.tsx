"use client";

import { Check, Eye, EyeOff, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import React, { useState } from "react";
import { EASE_OUT, SPRING_BOUNCE, SPRING_PRESS, SPRING_SWAP } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface PasswordCriterion {
  id: string;
  label: string;
  validator: (pass: string) => boolean;
}

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
  showStrengthMeter?: boolean;
  showCriteria?: boolean;
  className?: string;
}

const DEFAULT_CRITERIA: PasswordCriterion[] = [
  { id: "length", label: "At least 8 characters", validator: (p) => p.length >= 8 },
  { id: "number", label: "Contains at least one number", validator: (p) => /\d/.test(p) },
  { id: "uppercase", label: "Contains an uppercase letter", validator: (p) => /[A-Z]/.test(p) },
  { id: "special", label: "Contains a special symbol (!@#$%^&*)", validator: (p) => /[^A-Za-z0-9]/.test(p) },
];

export function PasswordInput({
  value: controlledValue,
  onChange,
  showStrengthMeter = true,
  showCriteria = true,
  className,
  ...props
}: PasswordInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const password = controlledValue !== undefined ? controlledValue : internalValue;

  // Calculate score (0 to 4)
  const criteriaResults = DEFAULT_CRITERIA.map((c) => ({
    ...c,
    passed: c.validator(password),
  }));
  const score = criteriaResults.filter((c) => c.passed).length;
  const isComplete = score === DEFAULT_CRITERIA.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value;
    if (controlledValue === undefined) setInternalValue(nextVal);
    const valid = DEFAULT_CRITERIA.every((c) => c.validator(nextVal));
    onChange?.(nextVal, valid);
  };

  const getStrengthMeta = () => {
    if (score === 0) return { label: "Empty", color: "bg-muted text-muted-foreground" };
    if (score === 1) return { label: "Weak", color: "bg-rose-500 text-rose-500" };
    if (score === 2) return { label: "Fair", color: "bg-amber-500 text-amber-500" };
    if (score === 3) return { label: "Good", color: "bg-blue-500 text-blue-500" };
    return { label: "Strong", color: "bg-emerald-500 text-emerald-500" };
  };

  const meta = getStrengthMeta();

  return (
    <div className={cn("flex w-full flex-col gap-2.5", className)}>
      {/* Input Row */}
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          aria-describedby="password-strength-status"
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
          {...props}
        />

        <motion.button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          transition={SPRING_PRESS}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-2.5 text-muted-foreground hover:text-foreground p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {showPassword ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </motion.button>
      </div>

      {/* Animated Multi-Segment Strength Bar */}
      {showStrengthMeter && password.length > 0 && (
        <div className="space-y-1.5">
          <div className="flex h-1.5 w-full gap-1.5 overflow-hidden rounded-full bg-muted/60">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: i < score ? 1 : 0.2,
                  scaleY: i < score ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "h-full flex-1 rounded-full transition-colors",
                  i < score ? meta.color.split(" ")[0] : "bg-muted"
                )}
              />
            ))}
          </div>

          <div
            id="password-strength-status"
            className="flex items-center justify-between text-xs text-muted-foreground"
          >
            <span>Password strength</span>
            <span className={cn("font-medium", meta.color.split(" ")[1])}>
              {meta.label}
            </span>
          </div>
        </div>
      )}

      {/* Live Criteria Checklist */}
      {showCriteria && password.length > 0 && !isComplete && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-1 pt-1 text-xs text-muted-foreground"
        >
          {criteriaResults.map((crit) => (
            <li
              key={crit.id}
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                crit.passed ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
              )}
            >
              {crit.passed ? (
                <Check className="size-3.5 stroke-[2.5]" />
              ) : (
                <div className="size-1.5 rounded-full bg-muted-foreground/40 ml-1 mr-1" />
              )}
              <span>{crit.label}</span>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
