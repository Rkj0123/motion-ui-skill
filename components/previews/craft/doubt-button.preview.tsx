"use client";

import { DoubtButton } from "@/components/buttons/doubt-button";

export function DoubtButtonDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <DoubtButton className="min-w-0 max-w-full">Click Me</DoubtButton>
    </div>
  );
}