"use client";

import { useState } from "react";
import { TextMorph } from "@/components/motion/text-morph";

export function TextMorphDemo() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <button
        type="button"
        onClick={() => setCopied(!copied)}
        className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm"
      >
        <TextMorph text={copied ? "Copied" : "Copy code"} />
      </button>
    </div>
  );
}