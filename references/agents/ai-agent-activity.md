---
title: "AI Agent Activity"
description: "A timeline component for tracking AI agent reasoning, tool calls, API queries, database fetches, and execution states with inspectable parameters and results."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/ai-agent-activity.md"
markdown: "references/agents/ai-agent-activity.md"
license: "MIT"
---

# AI Agent Activity

> A timeline component for tracking AI agent reasoning, tool calls, API queries, database fetches, and execution states with inspectable parameters and results.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ai-agent-activity --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AIAgentActivity as AiAgentActivity } from "@/components/agents/ai-agent-activity";

export function Example() {
  return (
    <div className="p-6">
      <AiAgentActivity />
    </div>
  );
}
```
