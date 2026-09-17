---
title: "Step Count"
description: "Editorial step stat — light wide card, large number, goal in a quiet footer row. No progress bars or icons."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/step-count.md"
markdown: "references/craft/step-count.md"
license: "MIT"
---

# Step Count

> Editorial step stat — light wide card, large number, goal in a quiet footer row. No progress bars or icons.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py step-count --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StepCountWidget } from "@/components/widgets/step-count-widget";

export function StepCountWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StepCountWidget />
    </div>
  );
}
```

## API Reference

### StepCountWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
