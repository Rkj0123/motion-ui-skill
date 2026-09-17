---
title: "Circle Cut Frame"
description: "Ticket-style frame with circle-cut edges on all sides — defaults to white; pass width, height, frameColor, and any image, video, or content as children."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/circle-cut-frame.md"
markdown: "references/craft/circle-cut-frame.md"
license: "MIT"
---

# Circle Cut Frame

> Ticket-style frame with circle-cut edges on all sides — defaults to white; pass width, height, frameColor, and any image, video, or content as children.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py circle-cut-frame --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CircleCutFrame } from "@/components/frames/circle-cut-frame";

export function CircleCutFrameDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CircleCutFrame />
    </div>
  );
}
```

## API Reference

### CircleCutFrame

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
