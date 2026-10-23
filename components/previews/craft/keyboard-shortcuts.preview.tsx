"use client";

import { KeyboardShortcutsCard } from "@/components/text/keyboard-shortcuts-card";

export function KeyboardShortcutsCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <KeyboardShortcutsCard className="min-w-0 max-w-full" />
    </div>
  );
}