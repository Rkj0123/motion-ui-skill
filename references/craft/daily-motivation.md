---
title: "Daily Motivation"
description: "Editorial poster with multi-line headline, flower icon, tilted polaroid, and a GOOD DAY sticker. Morning routine apps and wellness newsletters."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/daily-motivation.md"
markdown: "references/craft/daily-motivation.md"
license: "MIT"
---

# Daily Motivation

> Editorial poster with multi-line headline, flower icon, tilted polaroid, and a GOOD DAY sticker. Morning routine apps and wellness newsletters.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py daily-motivation --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DailyMotivationCard } from "@/components/text/daily-motivation-card";

export function DailyMotivationCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DailyMotivationCard />
    </div>
  );
}
```

## API Reference

### DailyMotivationCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
