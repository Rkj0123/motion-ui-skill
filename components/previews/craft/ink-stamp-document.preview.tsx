"use client";

import { InkStampDocumentCard } from "@/components/files/ink-stamp-document-card";

export function InkStampDocumentCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <InkStampDocumentCard className="min-w-0 max-w-full" />
    </div>
  );
}