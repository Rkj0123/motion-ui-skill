"use client";

import { JournalWritingCard } from "@/components/text/journal-writing-card";

export function JournalWritingCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <JournalWritingCard className="min-w-0 max-w-full" />
    </div>
  );
}