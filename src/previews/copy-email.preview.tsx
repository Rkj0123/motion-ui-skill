"use client";

import { CopyEmail } from "@/components/contact/copy-email";

export function CopyEmailDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CopyEmail email="hello@example.com" />
    </div>
  );
}