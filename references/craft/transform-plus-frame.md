---
title: "Transform Plus Frame"
description: "Bounding box with plus corner handles — thicker handle strokes than border lines. Defaults to all black; pass lineColor and handleColor for dual-tone frames."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/transform-plus-frame.md"
markdown: "references/craft/transform-plus-frame.md"
license: "MIT"
---

# Transform Plus Frame

> Bounding box with plus corner handles — thicker handle strokes than border lines. Defaults to all black; pass lineColor and handleColor for dual-tone frames.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py transform-plus-frame --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TransformPlusFrame } from "@/components/frames/transform-plus-frame";

export function TransformPlusFrameDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TransformPlusFrame />
    </div>
  );
}
```

## API Reference

### TransformPlusFrame

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
