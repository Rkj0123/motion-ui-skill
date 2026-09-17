---
title: "Dnd Face"
description: "Focus mode as a purple moon mascot — tap to toggle DND and watch the expression shift. Makes a utilitarian setting feel a little human."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dnd-face.md"
markdown: "references/craft/dnd-face.md"
license: "MIT"
---

# Dnd Face

> Focus mode as a purple moon mascot — tap to toggle DND and watch the expression shift. Makes a utilitarian setting feel a little human.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dnd-face --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DndFaceWidget } from "@/components/widgets/dnd-face-widget";

export function DndFaceWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DndFaceWidget />
    </div>
  );
}
```

## API Reference

### DndFaceWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
