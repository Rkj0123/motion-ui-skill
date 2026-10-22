"use client";

import { CooldownButton } from "@/components/buttons/cooldown-button";

export function CooldownButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CooldownButton>Click Me</CooldownButton>
    </div>
  );
}