"use client";

import { CopyButton } from "@/components/motion/copy-button";

export function CopyButtonExample() {
  const codeSnippet = "npx skills add motion-ui";

  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border max-w-sm">
      <code className="text-xs font-mono text-foreground">{codeSnippet}</code>
      <CopyButton textToCopy={codeSnippet} showText={true} />
    </div>
  );
}