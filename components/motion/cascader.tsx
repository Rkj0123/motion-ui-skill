"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  Folder,
  Layers,
  Search,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useState, useMemo } from "react";
import { EASE_OUT, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
}

export interface CascaderProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  options: CascaderOption[];
  value?: string[];
  onChange?: (path: string[], selectedOption: CascaderOption) => void;
  placeholder?: string;
  searchable?: boolean;
  className?: string;
}

export function Cascader({
  options,
  value: controlledValue,
  onChange,
  placeholder = "Select category...",
  searchable = true,
  className,
  ...props
}: CascaderProps) {
  const [selectedPath, setSelectedPath] = useState<string[]>(controlledValue ?? []);
  const [activeTierPath, setActiveTierPath] = useState<CascaderOption[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (
      controlledValue !== undefined &&
      (controlledValue.length !== selectedPath.length ||
        controlledValue.some((value, index) => value !== selectedPath[index]))
    ) {
      setSelectedPath(controlledValue);
    }
  }, [controlledValue, selectedPath]);

  // Find options for current view level
  const currentLevelOptions = useMemo(() => {
    if (activeTierPath.length === 0) return options;
    const parent = activeTierPath[activeTierPath.length - 1];
    return parent.children || [];
  }, [options, activeTierPath]);

  // Flattened options for global search
  const flatSearchMatches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: Array<{ path: string[]; option: CascaderOption; fullLabel: string }> = [];

    const traverse = (opts: CascaderOption[], currentTrail: string[], labelTrail: string[]) => {
      for (const opt of opts) {
        const nextTrail = [...currentTrail, opt.value];
        const nextLabels = [...labelTrail, opt.label];
        if (!opt.disabled && !opt.children?.length && opt.label.toLowerCase().includes(q)) {
          results.push({
            path: nextTrail,
            option: opt,
            fullLabel: nextLabels.join(" → "),
          });
        }
        if (opt.children) {
          traverse(opt.children, nextTrail, nextLabels);
        }
      }
    };

    traverse(options, [], []);
    return results;
  }, [options, searchQuery]);

  const handleSelect = (option: CascaderOption) => {
    if (option.disabled) return;

    if (option.children && option.children.length > 0) {
      // Step into children tier
      setActiveTierPath([...activeTierPath, option]);
    } else {
      // Leaf selected
      const finalPath = [...activeTierPath.map((o) => o.value), option.value];
      setSelectedPath(finalPath);
      onChange?.(finalPath, option);
      setSearchQuery("");
    }
  };

  const handleBack = () => {
    if (activeTierPath.length > 0) {
      setActiveTierPath(activeTierPath.slice(0, -1));
    }
  };

  return (
    <motion.div
      className={cn(
        "flex w-80 flex-col rounded-2xl border border-border bg-card shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Search & Breadcrumb Bar */}
      <div className="border-b border-border/70 p-2.5 bg-muted/30">
        {searchable && (
          <div className="relative mb-2">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hierarchy..."
              className="w-full rounded-lg border border-border bg-background pl-8 pr-7 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Drill-down Breadcrumbs */}
        {!searchQuery && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground overflow-x-auto py-0.5">
            {activeTierPath.length > 0 ? (
              <>
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  onClick={handleBack}
                  className="flex items-center gap-0.5 text-primary hover:underline"
                >
                  <ChevronLeft className="size-3.5" />
                  <span>Back</span>
                </motion.button>
                <span>/</span>
                {activeTierPath.map((tier, idx) => (
                  <span
                    key={tier.value}
                    className={cn(
                      idx === activeTierPath.length - 1
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground"
                    )}
                  >
                    {tier.label}
                  </span>
                ))}
              </>
            ) : (
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <Layers className="size-3.5 text-primary" />
                <span>Root Categories</span>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Options Body */}
      <div className="relative min-h-[220px] max-h-[300px] overflow-y-auto p-1.5">
        {searchQuery ? (
          // Search Results View
          <div className="flex flex-col gap-1">
            {flatSearchMatches.map((res) => (
              <button
                key={res.path.join("-")}
                type="button"
                onClick={() => {
                  if (res.option.disabled) return;
                  setSelectedPath(res.path);
                  onChange?.(res.path, res.option);
                  setSearchQuery("");
                }}
                className="flex items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs hover:bg-muted transition-colors"
              >
                <span className="text-foreground">{res.fullLabel}</span>
                {selectedPath.join("/") === res.path.join("/") && (
                  <Check className="size-3.5 text-primary" />
                )}
              </button>
            ))}
            {flatSearchMatches.length === 0 && (
              <div className="flex h-32 items-center justify-center text-xs text-muted-foreground">
                No matching options found.
              </div>
            )}
          </div>
        ) : (
          // Hierarchical Drill-down View
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTierPath.map((o) => o.value).join("/") || "root"}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
              transition={{ duration: 0.18, ease: EASE_OUT }}
              className="flex flex-col gap-1"
            >
              {currentLevelOptions.map((opt) => {
                const hasChildren = Boolean(opt.children && opt.children.length > 0);
                const isSelected = selectedPath.includes(opt.value);

                return (
                  <motion.button
                    key={opt.value}
                    type="button"
                    disabled={opt.disabled}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    onClick={() => handleSelect(opt)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors",
                      isSelected
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted/70",
                      opt.disabled && "opacity-40 cursor-not-allowed"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {hasChildren ? (
                        <Folder className="size-3.5 text-muted-foreground" />
                      ) : (
                        <div className="size-1.5 rounded-full bg-current" />
                      )}
                      <span>{opt.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isSelected && !hasChildren && (
                        <Check className="size-3.5 text-primary" />
                      )}
                      {hasChildren && (
                        <ChevronRight className="size-3.5 text-muted-foreground" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Footer Selected Summary */}
      {selectedPath.length > 0 && (
        <div className="border-t border-border/70 bg-muted/20 px-3 py-2 text-[11px] text-muted-foreground">
          Selected: <span className="font-semibold text-foreground">{selectedPath.join(" / ")}</span>
        </div>
      )}
    </motion.div>
  );
}
