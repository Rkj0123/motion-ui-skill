"use client";

import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  Plus,
  Tag,
  User,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_BOUNCE, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  tags?: string[];
  assignee?: string;
  dueDate?: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color?: string;
  limit?: number;
  cards: KanbanCard[];
}

export interface KanbanBoardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  initialColumns: KanbanColumn[];
  onCardMove?: (cardId: string, sourceColId: string, destColId: string) => void;
  onCardAdd?: (colId: string) => void;
  className?: string;
}

const PRIORITY_BADGES = {
  low: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  high: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

export function KanbanBoard({
  initialColumns,
  onCardMove,
  onCardAdd,
  className,
  ...props
}: KanbanBoardProps) {
  const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const moveCard = (cardId: string, destColId: string) => {
    let sourceColId = "";
    let movedCard: KanbanCard | undefined;

    const nextColumns = columns.map((col) => {
      const foundIndex = col.cards.findIndex((c) => c.id === cardId);
      if (foundIndex !== -1) {
        sourceColId = col.id;
        movedCard = col.cards[foundIndex];
        return {
          ...col,
          cards: col.cards.filter((c) => c.id !== cardId),
        };
      }
      return col;
    });

    if (!movedCard || sourceColId === destColId) return;

    const updated = nextColumns.map((col) => {
      if (col.id === destColId && movedCard) {
        return {
          ...col,
          cards: [...col.cards, movedCard],
        };
      }
      return col;
    });

    setColumns(updated);
    onCardMove?.(cardId, sourceColId, destColId);
  };

  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 overflow-x-auto pb-4 pt-1",
        className
      )}
      {...props}
    >
      {columns.map((column) => {
        const isOverLimit = column.limit && column.cards.length > column.limit;

        return (
          <div
            key={column.id}
            className="flex w-72 shrink-0 flex-col rounded-2xl border border-border bg-card/60 p-3 backdrop-blur-sm"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-1 py-1.5 mb-2">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "size-2.5 rounded-full",
                    column.color || "bg-primary"
                  )}
                />
                <h3 className="text-sm font-semibold text-foreground tracking-tight">
                  {column.title}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums",
                    isOverLimit
                      ? "bg-destructive/10 text-destructive border border-destructive/20"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {column.cards.length}
                  {column.limit ? ` / ${column.limit}` : ""}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                  onClick={() => onCardAdd?.(column.id)}
                  aria-label={`Add card to ${column.title}`}
                  className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <Plus className="size-4" />
                </motion.button>
              </div>
            </div>

            {/* Column Cards Drop Area */}
            <div
              className="flex min-h-[140px] flex-col gap-2.5 rounded-xl"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const cardId = e.dataTransfer.getData("text/plain");
                if (cardId) moveCard(cardId, column.id);
              }}
            >
              <AnimatePresence mode="popLayout">
                {column.cards.map((card) => (
                  <motion.div
                    key={card.id}
                    layoutId={card.id}
                    layout
                    draggable
                    onDragStart={(e) => {
                      // @ts-ignore
                      e.dataTransfer.setData("text/plain", card.id);
                      setActiveDragId(card.id);
                    }}
                    onDragEnd={() => setActiveDragId(null)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={SPRING_LAYOUT}
                    className={cn(
                      "cursor-grab active:cursor-grabbing rounded-xl border border-border bg-background p-3.5 shadow-sm transition-shadow hover:shadow-md",
                      activeDragId === card.id && "opacity-40 border-primary/50"
                    )}
                  >
                    {card.priority && (
                      <div className="mb-2">
                        <span
                          className={cn(
                            "rounded-md border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                            PRIORITY_BADGES[card.priority]
                          )}
                        >
                          {card.priority}
                        </span>
                      </div>
                    )}

                    <h4 className="text-sm font-medium text-foreground leading-snug">
                      {card.title}
                    </h4>

                    {card.description && (
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {card.description}
                      </p>
                    )}

                    {/* Metadata Footer */}
                    <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-2 text-[11px] text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        {card.assignee && (
                          <span className="flex items-center gap-1">
                            <User className="size-3" />
                            <span>{card.assignee}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {card.dueDate && (
                          <span className="flex items-center gap-1 tabular-nums">
                            <Clock className="size-3" />
                            {card.dueDate}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {column.cards.length === 0 && (
                <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border/80 text-xs text-muted-foreground">
                  Drop tasks here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
