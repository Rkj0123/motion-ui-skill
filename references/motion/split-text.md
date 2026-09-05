---
title: "Split Text"
description: "Typography reveal animation that splits sentences into words or individual characters with staggered spring arrivals."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/split-text.md"
markdown: "references/motion/split-text.md"
license: "MIT"
---

# Split Text

> Typography reveal animation that splits sentences into words or individual characters with staggered spring arrivals. Inspired by Motion and ibelick/ui-skills.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py split-text --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SplitText } from "@/components/motion/split-text";

export function SplitTextExample() {
  return (
    <div className="p-8 bg-card rounded-2xl border border-border">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        <SplitText
          text="Autonomous AI Agents Engineered with Precision"
          by="chars"
          mode="pop"
          staggerDuration={0.02}
        />
      </h1>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | required | Text string to split and animate. |
| `by` | `"words" \| "chars"` | `"chars"` | Granularity of split tokens. |
| `delay` | `number` | `0` | Initial start delay in seconds. |
| `staggerDuration` | `number` | `0.03` | Interval delay in seconds between adjacent tokens. |
| `mode` | `"fade-up" \| "pop" \| "wave"` | `"fade-up"` | Motion entrance style. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
