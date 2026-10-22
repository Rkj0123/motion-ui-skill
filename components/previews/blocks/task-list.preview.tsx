"use client";

import React from "react";
import { TaskList as TaskList } from "@/components/blocks/task-list";

export function TaskListPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TaskList />
      </div>
    </div>
  );
}
