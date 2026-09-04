---
title: "Agent Loading States"
description: "Three thoughtful loading states for AI interfaces: shimmering status text, live agent progress, and cycling reasoning phrases."
category: "AI Agents"
publishedAt: "2026-07-30"
updatedAt: "2026-08-19"
documentation: "references/agents/loading-states.md"
markdown: "references/agents/loading-states.md"
license: "MIT"
---

# Agent Loading States

> Three thoughtful loading states for AI interfaces: shimmering status text, live agent progress, and cycling reasoning phrases.

## Install

### Reasoning Text

Shimmering reasoning copy with an ASCII loader and cascade, phrase-swap, or per-letter scramble transitions.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py reasoning-text --dest ./src
```

### Thinking Shimmer

A quiet shimmer that keeps the agent's current status readable while work continues.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py thinking-shimmer --dest ./src
```

### Agent Progress

A compact activity glyph, action verb, and live tabular timer for longer-running agent work.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py agent-progress --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Reasoning Text usage

Shimmering reasoning copy with an ASCII loader and cascade, phrase-swap, or per-letter scramble transitions.

```tsx
"use client";

import {
  ReasoningText,
  type ReasoningTextVariant,
} from "@/components/agents/loading-states/reasoning-text";

const EXAMPLES: {
  label: string;
  variant: ReasoningTextVariant;
  phrases: string[];
}[] = [
  {
    label: "Cascade",
    variant: "cascade",
    phrases: [
      "Thinking",
      "Reading the request",
      "Working through the details",
      "Preparing the answer",
    ],
  },
  {
    label: "Swap",
    variant: "swap",
    phrases: [
      "Thinking",
      "Reading the request",
      "Working through the details",
      "Preparing the answer",
    ],
  },
  {
    label: "Scramble",
    variant: "scramble",
    phrases: ["Thinking", "Searching", "Reasoning", "Composing"],
  },
];

export function ReasoningTextPreview() {
  return (
    <div className="grid w-full max-w-sm gap-7">
      {EXAMPLES.map(({ label, variant, phrases }) => (
        <div key={variant} className="grid gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
            {label}
          </span>
          <ReasoningText
            variant={variant}
            phrases={phrases}
            className="text-base"
          />
        </div>
      ))}
    </div>
  );
}
```

### Thinking Shimmer usage

A quiet shimmer that keeps the agent's current status readable while work continues.

```tsx
"use client";

import { ThinkingShimmer } from "@/components/agents/loading-states/thinking-shimmer";

export function ThinkingShimmerPreview() {
  return (
    <ThinkingShimmer className="text-lg" duration={1.8}>
      Thinking…
    </ThinkingShimmer>
  );
}
```

### Agent Progress usage

A compact activity glyph, action verb, and live tabular timer for longer-running agent work.

```tsx
"use client";

import { AgentProgress } from "@/components/agents/loading-states/agent-progress";

export function AgentProgressPreview() {
  return (
    <AgentProgress
      label="Churning"
      initialSeconds={151.6}
      className="text-base"
    />
  );
}
```

## API Reference

### ReasoningText

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `phrases` | `string[]` | `[ "Thinking", "Reading the context", "Connecting the details", "Forming a response", ]` | No | Phrases cycled through while the agent works. |
| `variant` | `"scramble" \| "cascade" \| "swap"` | `cascade` | No | Animation used when the active phrase changes. |
| `interval` | `number` | `1800` | No | Milliseconds each phrase remains visible. |
| `shimmerDuration` | `number` | `2.2` | No | Seconds taken for one shimmer pass. |
| `indicator` | `ReactNode` | — | No | Optional leading visual. Defaults to a terminal-style ASCII loader. |
| `className` | `string` | — | No | — |

### ThinkingShimmer

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | `Thinking…` | No | Loading message shown to the user. |
| `duration` | `number` | `1.8` | No | Seconds taken for one shimmer pass. |
| `className` | `string` | — | No | — |

### AgentProgress

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | `Churning` | No | Verb describing the agent's current activity. |
| `elapsedSeconds` | `number` | — | No | Controlled elapsed time in seconds. |
| `initialSeconds` | `number` | `0` | No | Starting time for the internal timer, in seconds. |
| `running` | `boolean` | `true` | No | Whether the internal timer should advance. Ignored when elapsedSeconds is provided. |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
