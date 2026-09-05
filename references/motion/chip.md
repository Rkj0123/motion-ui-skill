---
title: "Chip"
description: "Interactive selectable and dismissible tag chip with icon prefixes, count badges, and spring exit animations."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/chip.md"
markdown: "references/motion/chip.md"
license: "MIT"
---

# Chip

> Interactive selectable and dismissible tag chip with icon prefixes, count badges, and spring exit animations. Inspired by Coss (Origin UI) and Expo.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chip --dest ./src
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

import { Chip } from "@/components/motion/chip";
import { AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export function ChipExample() {
  const [tags, setTags] = useState([
    { id: "ai", label: "Autonomous Agent", badge: 4 },
    { id: "react", label: "React 19", badge: 12 },
    { id: "motion", label: "Motion Physics", badge: 8 },
  ]);
  const [selectedTag, setSelectedTag] = useState("ai");

  return (
    <div className="flex flex-wrap gap-2 p-6 bg-card rounded-2xl border border-border">
      <AnimatePresence>
        {tags.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.label}
            badge={tag.badge}
            selected={selectedTag === tag.id}
            onSelect={() => setSelectedTag(tag.id)}
            onDismiss={() => setTags(tags.filter((t) => t.id !== tag.id))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `ReactNode` | required | Text label displayed in chip. |
| `icon` | `ReactNode` | `undefined` | Leading icon element. |
| `badge` | `string \| number` | `undefined` | Numerical or status count badge shown on right. |
| `selected` | `boolean` | `false` | Visual highlighted selection state. |
| `onSelect` | `() => void` | `undefined` | Callback emitted when chip body is clicked. |
| `onDismiss` | `() => void` | `undefined` | Renders a dismiss X button and emits callback on click. |
| `variant` | `"default" \| "outline" \| "secondary"` | `"default"` | Visual style variant. |
| `size` | `"sm" \| "md"` | `"md"` | Chip scale tier. |
| `disabled` | `boolean` | `false` | Disables interaction and dims opacity. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
