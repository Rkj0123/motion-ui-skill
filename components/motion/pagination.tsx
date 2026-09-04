"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useId } from "react";
import { SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface PaginationProps extends Omit<HTMLMotionProps<"nav">, "onChange"> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}: PaginationProps) {
  const layoutId = useId();
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const handlePageSelect = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
      triggerHaptic("selection");
    }
  };

  // Generate page numbers range
  const generatePages = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "dots-right", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, "dots-left", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, "dots-left", ...middleRange, "dots-right", lastPageIndex];
    }

    return [];
  };

  const pages = generatePages();

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      {/* Previous Button */}
      <motion.button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => handlePageSelect(currentPage - 1)}
        whileTap={shouldReduceMotion || currentPage <= 1 ? undefined : { scale: 0.92 }}
        transition={SPRING_PRESS}
        aria-label="Previous page"
        className="flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="size-4" />
      </motion.button>

      {/* Page Items */}
      {pages.map((p, idx) => {
        if (typeof p === "string") {
          return (
            <span
              key={`${p}-${idx}`}
              aria-hidden="true"
              className="flex size-8 items-center justify-center text-muted-foreground"
            >
              <MoreHorizontal className="size-3.5" />
            </span>
          );
        }

        const isCurrent = p === currentPage;

        return (
          <motion.button
            key={p}
            type="button"
            aria-current={isCurrent ? "page" : undefined}
            onClick={() => handlePageSelect(p)}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
            transition={SPRING_PRESS}
            className={cn(
              "relative flex size-8 items-center justify-center rounded-lg text-xs font-medium tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none",
              isCurrent ? "text-primary-foreground font-semibold" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {/* Active Sliding Indicator */}
            {isCurrent && (
              <motion.div
                layoutId={`pagination-active-${layoutId}`}
                transition={shouldReduceMotion ? { duration: 0 } : SPRING_LAYOUT}
                className="absolute inset-0 z-[-1] rounded-lg bg-primary shadow-sm shadow-primary/20"
              />
            )}
            <span>{p}</span>
          </motion.button>
        );
      })}

      {/* Next Button */}
      <motion.button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageSelect(currentPage + 1)}
        whileTap={shouldReduceMotion || currentPage >= totalPages ? undefined : { scale: 0.92 }}
        transition={SPRING_PRESS}
        aria-label="Next page"
        className="flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="size-4" />
      </motion.button>
    </nav>
  );
}
