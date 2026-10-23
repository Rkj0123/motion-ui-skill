"use client";

import { SlideToConfirmButton } from "@/components/buttons/slide-to-confirm-button";

export function SlideToConfirmButtonDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <SlideToConfirmButton className="min-w-0 max-w-full" />
    </div>
  );
}