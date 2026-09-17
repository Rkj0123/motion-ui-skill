---
title: "Progress Ring Card"
description: "Animated SVG ring with percentage label and clickable stage rows below. Defaults to Design/Development/Testing — pass your own milestones."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/progress-ring-card.md"
markdown: "references/craft/progress-ring-card.md"
license: "MIT"
---

# Progress Ring Card

> Animated SVG ring with percentage label and clickable stage rows below. Defaults to Design/Development/Testing — pass your own milestones.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py progress-ring-card --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ProgressRingCard } from "@/components/others/progress-ring-card";

export function ProgressRingCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ProgressRingCard />
    </div>
  );
}
```

## API Reference

### ProgressRingCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
