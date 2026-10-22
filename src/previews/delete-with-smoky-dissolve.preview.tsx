"use client";

import { DeleteWithSmokyDissolve } from "@/components/motion/delete-with-smoky-dissolve";

export function DeleteWithSmokyDissolveDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <DeleteWithSmokyDissolve
        itemTitle="Contract_2026_Final.pdf"
        onDelete={() => console.log("Item deleted")}
      />
    </div>
  );
}