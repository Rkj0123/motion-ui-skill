"use client";

import { Check, Loader2, Search, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState, useRef } from "react";
import { SPRING_PANEL } from "@/lib/ease";
import { useDismiss } from "@/lib/hooks/use-dismiss";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface AutocompleteItem {
  id: string;
  label: string;
  category?: string;
}

export interface AutocompleteProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  items: AutocompleteItem[];
  value?: string;
  onChange?: (item: AutocompleteItem) => void;
  placeholder?: string;
  loading?: boolean;
  className?: string;
}

export function Autocomplete({
  items,
  value = "",
  onChange,
  placeholder = "Search items...",
  loading = false,
  className,
  ...props
}: AutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const containerRef = useRef<HTMLDivElement>(null);
  useDismiss(isOpen, () => setIsOpen(false), containerRef);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: AutocompleteItem) => {
    setQuery(item.label);
    setIsOpen(false);
    triggerHaptic("selection");
    onChange?.(item);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter")) {
      setIsOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0 && filteredItems[activeIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const highlightMatch = (text: string, match: string) => {
    if (!match.trim()) return text;
    const regex = new RegExp(`(${match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    const normalizedMatch = match.toLowerCase();
    return parts.map((part, i) =>
      part.toLowerCase() === normalizedMatch ? (
        <span key={i} className="font-semibold text-primary underline underline-offset-2">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div ref={containerRef} className={cn("relative w-full max-w-sm", className)} {...props}>
      {/* Search Input Box */}
      <div className="relative flex items-center rounded-xl border border-border bg-card shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
        <Search className="absolute left-3 size-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
        />

        {loading ? (
          <Loader2 className={cn("absolute right-3 size-4 text-muted-foreground", !shouldReduceMotion && "animate-spin")} />
        ) : query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-2.5 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>

      {/* Autocomplete Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 2, scale: 0.98 }}
            transition={SPRING_PANEL}
            className="absolute left-0 top-full z-50 mt-1.5 w-full rounded-xl border border-border bg-card p-1 shadow-xl backdrop-blur-md max-h-60 overflow-y-auto"
          >
            {filteredItems.map((item, index) => {
              const isActive = index === activeIndex;
              const isSelected = item.label.toLowerCase() === query.toLowerCase();

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors",
                    isActive ? "bg-muted text-foreground" : "text-foreground hover:bg-muted/70",
                    isSelected && "font-medium"
                  )}
                >
                  <div className="flex flex-col">
                    <span>{highlightMatch(item.label, query)}</span>
                    {item.category && (
                      <span className="text-[10px] text-muted-foreground">
                        {item.category}
                      </span>
                    )}
                  </div>
                  {isSelected && <Check className="size-3.5 text-primary" />}
                </button>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="p-3 text-center text-xs text-muted-foreground">
                No matching results found
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
