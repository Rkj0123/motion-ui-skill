"use client";

import { DragDropWithPhysics } from "@/components/motion/drag-drop-with-physics";

export function DragDropWithPhysicsDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <DragDropWithPhysics
        title="Implement View Transitions"
        category="Frontend"
        onDropInZone={(zone) => console.log("Dropped into zone:", zone)}
      />
    </div>
  );
}