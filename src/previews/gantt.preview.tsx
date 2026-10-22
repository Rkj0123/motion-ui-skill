"use client";

import { Gantt, type GanttTask } from "@/components/motion/gantt";

const TASKS: GanttTask[] = [
  { id: "1", name: "System Architecture & Specs", startDay: 1, duration: 4, progress: 100 },
  { id: "2", name: "Motion Tokens Integration", startDay: 4, duration: 6, progress: 75 },
  { id: "3", name: "Security Audit Alpha", startDay: 10, duration: 1, isMilestone: true },
  { id: "4", name: "Production Rollout", startDay: 11, duration: 8, progress: 20 },
];

export function GanttExample() {
  return (
    <div className="max-w-4xl p-6">
      <Gantt tasks={TASKS} totalDays={20} onTaskClick={(t) => console.log("Task:", t.name)} />
    </div>
  );
}