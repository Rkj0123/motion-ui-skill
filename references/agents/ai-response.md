---
title: "AI Response"
description: "A production-ready, accessible AI response component supporting streaming markdown, syntax-styled code blocks, citations, feedback actions, and tool execution status."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/ai-response.md"
markdown: "references/agents/ai-response.md"
license: "MIT"
---

# AI Response

> A production-ready, accessible AI response component supporting streaming markdown, syntax-styled code blocks, citations, feedback actions, and tool execution status.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ai-response --dest ./src
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

import { AIResponse as AiResponse } from "@/components/agents/ai-response";

export function Example() {
  return (
    <div className="p-6">
      <AiResponse />
    </div>
  );
}
```
