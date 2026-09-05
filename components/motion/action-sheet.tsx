"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import React, { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { EASE_OUT, SPRING_PANEL, SPRING_PRESS } from "@/lib/ease";
import { useDismiss } from "@/lib/hooks/use-dismiss";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ActionSheetAction {
  id: string;
  label: string;
  icon?: ReactNode;
  destructive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  actions: ActionSheetAction[];
  cancelLabel?: string;
  className?: string;
}

export function ActionSheet({
  isOpen,
  onClose,
  title,
  description,
  actions,
  cancelLabel = "Cancel",
  className,
}: ActionSheetProps) {
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();
  const titleId = useId();
  const descriptionId = useId();

  const sheetRef = useRef<HTMLDivElement>(null);
  useDismiss(isOpen, onClose, sheetRef);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const focusable = () => Array.from(
      sheetRef.current?.querySelectorAll<HTMLElement>(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      ) ?? []
    );
    const frame = requestAnimationFrame(() => focusable()[0]?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const elements = focusable();
      if (!elements.length) {
        event.preventDefault();
        sheetRef.current?.focus();
        return;
      }
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen, sheetRef]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end p-3 sm:items-center sm:justify-center sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Sheet Container */}
          <motion.div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            aria-label={title ? undefined : "Action sheet"}
            tabIndex={-1}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.05, bottom: 0.6 }}
            onDragEnd={(_e, info) => {
              if (info.velocity.y > 350 || info.offset.y > 100) {
                triggerHaptic("selection");
                onClose();
              }
            }}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: "100%", opacity: 0.5 }
            }
            animate={{ y: 0, opacity: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: "100%", opacity: 0, transition: { duration: 0.2 } }
            }
            transition={SPRING_PANEL}
            className={cn(
              "relative z-10 flex w-full max-w-sm flex-col gap-2.5",
              className
            )}
          >
            {/* Grab Handle for Touch */}
            <div className="mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/30 sm:hidden" />

            {/* Action Items Box */}
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-2xl backdrop-blur-xl">
              {(title || description) && (
                <div className="border-b border-border/60 px-4 py-3 text-center">
                  {title && (
                    <h3 id={titleId} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {title}
                    </h3>
                  )}
                  {description && (
                    <p id={descriptionId} className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              )}

              <div className="divide-y divide-border/60">
                {actions.map((action) => (
                  <motion.button
                    key={action.id}
                    type="button"
                    disabled={action.disabled}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={SPRING_PRESS}
                    onClick={() => {
                      if (action.destructive) {
                        triggerHaptic("warning");
                      } else {
                        triggerHaptic("light");
                      }
                      action.onClick?.();
                      onClose();
                    }}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:bg-muted/80",
                      action.destructive
                        ? "text-destructive font-semibold"
                        : "text-foreground",
                      action.disabled && "opacity-40 cursor-not-allowed"
                    )}
                  >
                    {action.icon && <span className="size-4">{action.icon}</span>}
                    <span>{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Cancel Button */}
            <motion.button
              type="button"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={SPRING_PRESS}
              onClick={() => {
                triggerHaptic("selection");
                onClose();
              }}
              className="flex w-full items-center justify-center rounded-2xl border border-border/80 bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-lg backdrop-blur-xl hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {cancelLabel}
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
