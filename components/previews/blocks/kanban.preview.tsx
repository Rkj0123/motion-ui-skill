"use client";

import { KanbanBoard, type KanbanColumn } from "@/components/motion/kanban";

const COLUMNS: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-slate-400",
    limit: 5,
    cards: [
      {
        id: "task-1",
        title: "Audit layout thrashing in table virtualization",
        description: "Verify getBoundingClientRect calls are decoupled from style updates.",
        priority: "high",
        assignee: "Alex",
        dueDate: "Today",
      },
      {
        id: "task-2",
        title: "Integrate Web Haptics on mobile slider",
        priority: "medium",
        assignee: "Sarah",
        dueDate: "Tomorrow",
      },
    ],
  },
  {
    id: "doing",
    title: "In Progress",
    color: "bg-amber-500",
    limit: 3,
    cards: [
      {
        id: "task-3",
        title: "Refactor spring tokens to lib/ease.ts",
        priority: "medium",
        assignee: "David",
        dueDate: "Sep 8",
      },
    ],
  },
  {
    id: "done",
    title: "Completed",
    color: "bg-emerald-500",
    cards: [
      {
        id: "task-4",
        title: "Add WCAG 2.1 contrast tokens to palette",
        priority: "low",
        assignee: "Elena",
      },
    ],
  },
];

export function KanbanExample() {
  return (
    <div className="p-2 sm:p-4 min-w-0 max-w-full w-full">
      <KanbanBoard className="min-w-0 max-w-full"
        initialColumns={COLUMNS}
        onCardMove={(cardId, from, to) => console.log(`Moved ${cardId} from ${from} to ${to}`)}
      />
    </div>
  );
}