"use client";

import { DeleteWithSmokyDissolve } from "@/components/motion/delete-with-smoky-dissolve";

export function DeleteWithSmokyDissolveDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-8 min-w-0 max-w-full w-full">
      <DeleteWithSmokyDissolve className="min-w-0 max-w-full"
        itemTitle="Contract_2026_Final.pdf"
        onDelete={() => console.log("Item deleted")}
      />
    </div>
  );
}