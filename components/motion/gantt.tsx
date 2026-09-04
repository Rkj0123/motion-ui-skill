"use client";

import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Diamond,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_BOUNCE, SPRING_LAYOUT } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface GanttTask {
  id: string;
  name: string;
  startDay: number; // 1 to 30
  duration: number; // days
  progress?: number; // 0 to 100
  isMilestone?: boolean;
  color?: string;
}

export interface GanttProps extends Omit<HTMLMotionProps<"div">, "children"> {
  tasks: GanttTask[];
  totalDays?: number;
  onTaskClick?: (task: GanttTask) => void;
  className?: string;
}

export function Gantt({
  tasks,
  totalDays = 20,
  onTaskClick,
  className,
  ...props
}: GanttProps) {
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Header Timeline Days */}
      <div className="flex items-center border-b border-border/80 pb-2 mb-3">
        <div className="w-48 shrink-0 text-xs font-semibold text-muted-foreground">
          Task Name
        </div>
        <div className="flex flex-1 justify-between px-2 text-[10px] font-mono text-muted-foreground">
          {Array.from({ length: totalDays }).map((_, i) => (
            <span key={i} className="w-6 text-center tabular-nums">
              D{i + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Task Rows */}
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          const isHovered = hoveredTask === task.id;
          const leftPercent = ((task.startDay - 1) / totalDays) * 100;
          const widthPercent = (task.duration / totalDays) * 100;

          return (
            <div
              key={task.id}
              onMouseEnter={() => setHoveredTask(task.id)}
              onMouseLeave={() => setHoveredTask(null)}
              onClick={() => onTaskClick?.(task)}
              className={cn(
                "group flex items-center rounded-xl p-1.5 transition-colors cursor-pointer",
                isHovered ? "bg-muted/50" : "hover:bg-muted/30"
              )}
            >
              {/* Task Title */}
              <div className="flex w-48 shrink-0 items-center gap-2 pr-2">
                {task.isMilestone ? (
                  <Diamond className="size-3 text-amber-500 fill-amber-500/20 shrink-0" />
                ) : (
                  <div className="size-2 rounded-full bg-primary shrink-0" />
                )}
                <span className="truncate text-xs font-medium text-foreground">
                  {task.name}
                </span>
              </div>

              {/* Timeline Bar Track */}
              <div className="relative flex flex-1 h-7 items-center bg-muted/20 rounded-lg overflow-hidden">
                {/* Vertical grid lines */}
                {Array.from({ length: totalDays }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-y-0 border-r border-border/30"
                    style={{ left: `${(i / totalDays) * 100}%` }}
                  />
                ))}

                {/* Progress Task Bar */}
                {task.isMilestone ? (
                  <motion.div
                    style={{ left: `${leftPercent}%` }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.25 }}
                    transition={SPRING_BOUNCE}
                    className="absolute size-4 rotate-45 rounded-sm bg-amber-500 shadow-md border border-background"
                  />
                ) : (
                  <motion.div
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                    }}
                    whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                    transition={SPRING_LAYOUT}
                    className={cn(
                      "absolute h-5 rounded-md px-2 flex items-center shadow-sm overflow-hidden",
                      task.color || "bg-primary text-primary-foreground"
                    )}
                  >
                    {/* Completion Fill Layer */}
                    {task.progress !== undefined && (
                      <div
                        className="absolute inset-y-0 left-0 bg-black/15"
                        style={{ width: `${task.progress}%` }}
                      />
                    )}
                    <span className="relative z-10 text-[10px] font-semibold truncate leading-none">
                      {task.progress !== undefined ? `${task.progress}%` : `${task.duration}d`}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
