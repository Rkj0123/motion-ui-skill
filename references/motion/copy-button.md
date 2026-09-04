---
title: "Copy Button"
description: "Micro-interaction copy button with spring icon swaps, status transitions, clipboard feedback, and haptic support."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/copy-button.md"
markdown: "references/motion/copy-button.md"
license: "MIT"
---

# Copy Button

> Micro-interaction copy button with spring icon swaps, status transitions, clipboard feedback, and haptic support. Inspired by Coss (Origin UI) and Transitions.dev.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py copy-button --dest ./src
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
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `textToCopy` | `string` | required | Text string dispatched to user's system clipboard. |
| `label` | `string` | `"Copy"` | Idle button accessible label. |
| `copiedLabel` | `string` | `"Copied!"` | Success confirmation label. |
| `showText` | `boolean` | `false` | Displays label text beside the icon. |
| `timeout` | `number` | `2000` | Duration in ms to retain the success state before resetting. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
