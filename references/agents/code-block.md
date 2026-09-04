---
title: "Code Block"
description: "A syntax-highlighted code surface with stable streaming updates, line numbers, focused lines, smooth following, and copy feedback."
category: "AI Agents"
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
documentation: "references/agents/code-block.md"
markdown: "references/agents/code-block.md"
license: "MIT"
---

# Code Block

> A syntax-highlighted code surface with stable streaming updates, line numbers, focused lines, smooth following, and copy feedback.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py code-block --dest ./src
```

## Dependencies

- `ai`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `shiki`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CodeBlock } from "@/components/agents/code-block";

const LINES = [
  'import { generateText } from "ai";',
  "",
  "export async function summarize(input: string) {",
  "  const { text } = await generateText({",
  '    model: "openai/gpt-5",',
  `    prompt: \`Summarize this clearly: \${input}\`,`,
  "  });",
  "",
  "  return {",
  "    text,",
  "    generatedAt: new Date().toISOString(),",
  "  };",
  "}",
];

function StreamingCodeBlock() {
  const [visibleLines, setVisibleLines] = useState(1);
  const timer = useRef<number | undefined>(undefined);
  const complete = visibleLines === LINES.length;

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    timer.current = window.setTimeout(
      () => setVisibleLines((value) => value + 1),
      260,
    );
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [visibleLines]);

  return (
    <CodeBlock
      filename="summarize.ts"
      language="typescript"
      code={LINES.slice(0, visibleLines).join("\n")}
      status={complete ? "complete" : "streaming"}
      highlightLines={[4, 5, 6, 7]}
      maxHeight={224}
    />
  );
}

export function CodeBlockPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[340px] w-full max-w-xl">
      <StreamingCodeBlock key={run} />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
```

## API Reference

### CodeBlock

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `code` | `string` | — | Yes | — |
| `language` | `"text" \| "bash" \| "diff" \| "json" \| "tsx" \| "typescript"` | `typescript` | No | — |
| `filename` | `ReactNode` | — | No | — |
| `status` | `"streaming" \| "complete"` | `complete` | No | — |
| `showLineNumbers` | `boolean` | `true` | No | — |
| `highlightLines` | `number[]` | `[]` | No | — |
| `maxHeight` | `number` | `280` | No | — |
| `wrap` | `boolean` | `false` | No | — |
| `copyable` | `boolean` | `true` | No | — |
| `onCopy` | `(() => void \| Promise<void>)` | — | No | — |
| `className` | `string` | — | No | — |

