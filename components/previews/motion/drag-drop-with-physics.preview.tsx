"use client";

import { DragDropWithPhysics } from "@/components/motion/drag-drop-with-physics";

export function DragDropWithPhysicsDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-8 min-w-0 max-w-full w-full">
      <DragDropWithPhysics className="min-w-0 max-w-full"
        title="Implement View Transitions"
        category="Frontend"
        onDropInZone={(zone) => console.log("Dropped into zone:", zone)}
      />
    </div>
  );
}