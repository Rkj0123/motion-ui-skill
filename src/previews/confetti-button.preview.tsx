"use client";

import { ConfettiButton } from "@/components/buttons/confetti-button";

export function ConfettiButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ConfettiButton>Click Me</ConfettiButton>
    </div>
  );
}