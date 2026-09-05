"use client";

import {
  Check,
  ChevronDown,
  Filter,
  Plus,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { EASE_OUT, SPRING_BOUNCE, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface FilterField {
  id: string;
  label: string;
  type: "text" | "select" | "number";
  options?: string[];
}

export interface FilterRule {
  id: string;
  fieldId: string;
  operator: string;
  value: string;
}

export interface FilterBuilderProps extends Omit<HTMLMotionProps<"div">, "children" | "onChange"> {
  fields: FilterField[];
  initialRules?: FilterRule[];
  conjunction?: "AND" | "OR";
  onChange?: (rules: FilterRule[], conjunction: "AND" | "OR") => void;
  className?: string;
}

const OPERATORS_BY_TYPE = {
  text: [
    { label: "contains", value: "contains" },
    { label: "equals", value: "equals" },
    { label: "starts with", value: "starts_with" },
  ],
  select: [
    { label: "is", value: "is" },
    { label: "is not", value: "is_not" },
  ],
  number: [
    { label: "equals", value: "=" },
    { label: "greater than", value: ">" },
    { label: "less than", value: "<" },
  ],
};

export function FilterBuilder({
  fields,
  initialRules = [],
  conjunction: initialConjunction = "AND",
  onChange,
  className,
  ...props
}: FilterBuilderProps) {
  const [rules, setRules] = useState<FilterRule[]>(initialRules);
  const [conjunction, setConjunction] = useState<"AND" | "OR">(initialConjunction);
  const shouldReduceMotion = useReducedMotion();

  const addRule = () => {
    if (fields.length === 0) return;
    const defaultField = fields[0];
    const defaultOperator = OPERATORS_BY_TYPE[defaultField.type][0].value;
    const defaultVal = defaultField.options ? defaultField.options[0] : "";

    const newRule: FilterRule = {
      id: `rule-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      fieldId: defaultField.id,
      operator: defaultOperator,
      value: defaultVal,
    };

    const next = [...rules, newRule];
    setRules(next);
    onChange?.(next, conjunction);
  };

  const removeRule = (id: string) => {
    const next = rules.filter((r) => r.id !== id);
    setRules(next);
    onChange?.(next, conjunction);
  };

  const updateRule = (id: string, partial: Partial<FilterRule>) => {
    const next = rules.map((r) => {
      if (r.id === id) {
        const updated = { ...r, ...partial };
        if (partial.fieldId && partial.fieldId !== r.fieldId) {
          const field = fields.find((f) => f.id === partial.fieldId);
          if (field) {
            updated.operator = OPERATORS_BY_TYPE[field.type][0].value;
            updated.value = field.options ? field.options[0] : "";
          }
        }
        return updated;
      }
      return r;
    });
    setRules(next);
    onChange?.(next, conjunction);
  };

  const toggleConjunction = () => {
    const next = conjunction === "AND" ? "OR" : "AND";
    setConjunction(next);
    onChange?.(rules, next);
  };

  const resetFilters = () => {
    setRules([]);
    onChange?.([], conjunction);
  };

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="size-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground tracking-tight">
            Filters
          </h3>
          {rules.length > 0 && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary tabular-nums">
              {rules.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {rules.length > 1 && (
            <motion.button
              type="button"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              onClick={toggleConjunction}
              className="rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              Match: <span className="font-semibold text-primary">{conjunction}</span>
            </motion.button>
          )}

          {rules.length > 0 && (
            <motion.button
              type="button"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              onClick={resetFilters}
              aria-label="Reset all filters"
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="size-3.5" />
              <span>Clear</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Rules List */}
      <div className="flex flex-col gap-2">
        <AnimatePresence mode="popLayout">
          {rules.map((rule, idx) => {
            const field = fields.find((f) => f.id === rule.fieldId) || fields[0];
            if (!field) return null;
            const availableOps = OPERATORS_BY_TYPE[field.type];

            return (
              <motion.div
                key={rule.id}
                layout
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                transition={SPRING_LAYOUT}
                className="flex flex-wrap items-center gap-2 rounded-xl border border-border/70 bg-background/80 p-2 text-xs"
              >
                {idx > 0 && (
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground uppercase">
                    {conjunction}
                  </span>
                )}

                {/* Field Selector */}
                <select
                  value={rule.fieldId}
                  onChange={(e) => updateRule(rule.id, { fieldId: e.target.value })}
                  className="rounded-lg border border-border bg-card px-2.5 py-1.5 font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {fields.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
                </select>

                {/* Operator Selector */}
                <select
                  value={rule.operator}
                  onChange={(e) => updateRule(rule.id, { operator: e.target.value })}
                  className="rounded-lg border border-border bg-card px-2 py-1.5 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {availableOps.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))}
                </select>

                {/* Value Input */}
                {field.options ? (
                  <select
                    value={rule.value}
                    onChange={(e) => updateRule(rule.id, { value: e.target.value })}
                    className="flex-1 min-w-[120px] rounded-lg border border-border bg-card px-2.5 py-1.5 font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type === "number" ? "number" : "text"}
                    value={rule.value}
                    placeholder="Enter value..."
                    onChange={(e) => updateRule(rule.id, { value: e.target.value })}
                    className="flex-1 min-w-[120px] rounded-lg border border-border bg-card px-2.5 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                )}

                {/* Delete Button */}
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                  onClick={() => removeRule(rule.id)}
                  aria-label="Remove filter rule"
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  <X className="size-3.5" />
                </motion.button>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {rules.length === 0 && (
          <div className="flex h-20 flex-col items-center justify-center rounded-xl border border-dashed border-border/80 text-xs text-muted-foreground">
            <span>No filters currently applied.</span>
          </div>
        )}
      </div>

      {/* Add Filter Button */}
      <motion.button
        type="button"
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        onClick={addRule}
        className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-border py-2 text-xs font-medium text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors"
      >
        <Plus className="size-3.5" />
        <span>Add Filter Rule</span>
      </motion.button>
    </motion.div>
  );
}
