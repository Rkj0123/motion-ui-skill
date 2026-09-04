---
title: "Tool Result"
description: "A lightweight execution disclosure for syntax-highlighted terminal output and request responses that collapses into a compact completed state."
category: "AI Agents"
publishedAt: "2026-08-01"
updatedAt: "2026-08-02"
documentation: "references/agents/tool-result.md"
markdown: "references/agents/tool-result.md"
license: "MIT"
---

# Tool Result

> A lightweight execution disclosure for syntax-highlighted terminal output and request responses that collapses into a compact completed state.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tool-result --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `shiki`
- `tailwind-merge`

## Usage

### Terminal Output usage

Streams command output into a bounded viewport, follows new lines, then collapses into the completed run summary.

```tsx
"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";
import {
  ToolResult,
  ToolResultOutput,
} from "@/components/agents/tool-result";
import { useToolResultDemo } from "./use-tool-result-demo";

const OUTPUT = [
  "$ bun test tests/a11y.test.tsx",
  "bun test v1.3.14",
  "✓ StreamingResponse complete",
  "✓ ToolApproval pending",
  "✓ Citations expanded",
  "49 pass · 0 fail",
] as const;

function TerminalRun({ onReplay }: { onReplay: () => void }) {
  const { visible, status } = useToolResultDemo(OUTPUT.length);
  const output = OUTPUT.slice(0, visible).join("\n");

  return (
    <ToolResult
      tool="terminal.run"
      title={status === "running" ? "Running accessibility tests" : "Tests passed"}
      kind="terminal"
      status={status}
      meta={status === "success" ? "2.9s" : undefined}
      copyText={output}
      onRetry={onReplay}
      maxHeight={150}
    >
      <ToolResultOutput>{output}</ToolResultOutput>
    </ToolResult>
  );
}

export function ToolResultTerminalPreview() {
  const [run, setRun] = useState(0);
  const replay = () => setRun((value) => value + 1);

  return (
    <div className="relative h-[330px] w-full max-w-lg">
      <TerminalRun key={run} onReplay={replay} />
      <button
        type="button"
        onClick={replay}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
```

### Request Result usage

Presents an in-flight request and its highlighted response payload with retry and copy actions.

```tsx
"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { AgentCode } from "@/components/agents/agent-code";
import {
  ToolResult,
  ToolResultOutput,
} from "@/components/agents/tool-result";
import { useToolResultDemo } from "./use-tool-result-demo";

const RESPONSE = `{
  "error": "rate_limit_exceeded",
  "retryAfter": 30,
  "requestId": "req_8f21"
}`;

function RequestRun({ onReplay }: { onReplay: () => void }) {
  const { visible, status } = useToolResultDemo(3, 600, "error");

  return (
    <ToolResult
      tool="http.request"
      title={status === "running" ? "Fetching project activity" : "Request failed"}
      kind="request"
      status={status}
      meta={status === "error" ? "429" : "GET /v1/activity"}
      copyText={RESPONSE}
      onRetry={onReplay}
      collapseOnComplete={false}
      maxHeight={150}
    >
      {visible < 3 ? (
        <ToolResultOutput>
          {visible === 0
            ? "Preparing request…"
            : visible === 1
              ? "GET /v1/activity\nConnecting…"
              : "GET /v1/activity\nWaiting for response…"}
        </ToolResultOutput>
      ) : (
        <AgentCode code={RESPONSE} language="json" />
      )}
    </ToolResult>
  );
}

export function ToolResultRequestPreview() {
  const [run, setRun] = useState(0);
  const replay = () => setRun((value) => value + 1);

  return (
    <div className="relative h-[330px] w-full max-w-lg">
      <RequestRun key={run} onReplay={replay} />
      <button
        type="button"
        onClick={replay}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
```

## API Reference

### ToolResultOutput

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `language` | `"text" \| "bash" \| "diff" \| "json" \| "tsx" \| "typescript"` | `bash` | No | — |
| `className` | `string` | — | No | — |

### ToolResult

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `tool` | `ReactNode` | — | Yes | — |
| `title` | `ReactNode` | — | Yes | — |
| `status` | `"error" \| "success" \| "running" \| "cancelled"` | `running` | No | — |
| `kind` | `"custom" \| "terminal" \| "request"` | `custom` | No | — |
| `meta` | `ReactNode` | — | No | — |
| `icon` | `ReactNode` | — | No | — |
| `open` | `boolean` | — | No | — |
| `defaultOpen` | `boolean` | `true` | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `collapseOnComplete` | `boolean` | `true` | No | — |
| `maxHeight` | `number` | `220` | No | — |
| `copyText` | `string` | — | No | — |
| `onCopy` | `(() => void \| Promise<void>)` | — | No | — |
| `onRetry` | `(() => void)` | — | No | — |
| `className` | `string` | — | No | — |
| `contentClassName` | `string` | — | No | — |

