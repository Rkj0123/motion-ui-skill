---
title: "Thinking States"
description: "Conversational AI agent thinking bubble morphing through cognitive stages (evaluating, searching, reasoning, finalizing) with organic pulse dots."
category: "Agents"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/agents/thinking-states.md"
markdown: "references/agents/thinking-states.md"
license: "MIT"
---

# Thinking States

> Conversational AI agent thinking bubble morphing through cognitive stages (evaluating, searching, reasoning, finalizing) with organic pulse dots.

Synthesized from conversational agent UX patterns in [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Replaces static spinners with dynamic status morphs that give users clear transparency into LLM planning and tool execution.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py thinking-states --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThinkingStates } from "@/components/agents/thinking-states";

export function ThinkingStatesDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <ThinkingStates autoCycle={true} />
    </div>
  );
}
```

## API Reference

### ThinkingStates

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `stage` | `"evaluating" \| "searching" \| "reasoning" \| "synthesizing" \| "finalizing"` | Controlled / internal cycle | No | Explicit stage override |
| `autoCycle` | `boolean` | `true` | No | Automatically cycle through stages for demonstration |
| `className` | `string` | — | No | Additional CSS classes |
