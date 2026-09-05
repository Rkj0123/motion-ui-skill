"use client";

import { X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useId, useRef, useState, useEffect } from "react";
import { SPRING_PANEL, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface CardResizeItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  content?: React.ReactNode;
}

export interface CardResizeProps extends HTMLMotionProps<"div"> {
  card: CardResizeItem;
  className?: string;
}

const FOCUSABLE_SELECTOR = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function CardResize({ card, className, ...props }: CardResizeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();
  const compactRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const focusable = () => Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []
    );
    const frame = requestAnimationFrame(() => (focusable()[0] ?? dialogRef.current)?.focus());
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const elements = focusable();
      if (!elements.length) {
        e.preventDefault();
        dialogRef.current?.focus();
        return;
      }
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen]);

  const toggle = () => {
    triggerHaptic(isOpen ? "light" : "medium");
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Compact Resting Card */}
      <motion.div
        ref={compactRef}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        layoutId={shouldReduceMotion ? undefined : `card-container-${card.id}`}
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        }}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={SPRING_PRESS}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow",
          className
        )}
        {...props}
      >
        {card.image && (
          <motion.div
            layoutId={shouldReduceMotion ? undefined : `card-image-${card.id}`}
            className="h-44 w-full overflow-hidden bg-muted"
          >
            <img
              src={card.image}
              alt={card.title}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        )}
        <div className="p-4 space-y-1">
          <motion.span
            layoutId={shouldReduceMotion ? undefined : `card-category-${card.id}`}
            className="text-[10px] font-semibold uppercase tracking-wider text-primary"
          >
            {card.category}
          </motion.span>
          <motion.h3
            layoutId={shouldReduceMotion ? undefined : `card-title-${card.id}`}
            className="text-sm font-semibold text-foreground line-clamp-1"
          >
            {card.title}
          </motion.h3>
          <p className="text-xs text-muted-foreground line-clamp-2 pt-0.5">
            {card.description}
          </p>
        </div>
      </motion.div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Expanded Surface */}
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              tabIndex={-1}
              layoutId={shouldReduceMotion ? undefined : `card-container-${card.id}`}
              transition={SPRING_PANEL}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            >
              {card.image && (
                <motion.div
                  layoutId={shouldReduceMotion ? undefined : `card-image-${card.id}`}
                  className="h-60 w-full overflow-hidden bg-muted relative"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="size-full object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Close card"
                    onClick={toggle}
                    className="absolute top-3 right-3 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </motion.div>
              )}

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : `card-category-${card.id}`}
                    className="text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {card.category}
                  </motion.span>
                  {!card.image && (
                    <button
                      type="button"
                      aria-label="Close card"
                      onClick={toggle}
                      className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                </div>

                <motion.h2
                  id={titleId}
                  layoutId={shouldReduceMotion ? undefined : `card-title-${card.id}`}
                  className="text-xl font-bold text-foreground"
                >
                  {card.title}
                </motion.h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {card.content && (
                  <div className="pt-2 border-t border-border">
                    {card.content}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
