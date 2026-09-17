---
title: "Transform Box Frame"
description: "Design-tool bounding box with separate line and handle colors — defaults to all black; pass lineColor and handleColor for dual-tone frames."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/transform-box-frame.md"
markdown: "references/craft/transform-box-frame.md"
license: "MIT"
---

# Transform Box Frame

> Design-tool bounding box with separate line and handle colors — defaults to all black; pass lineColor and handleColor for dual-tone frames.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py transform-box-frame --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TransformBoxFrame } from "@/components/frames/transform-box-frame";

export function TransformBoxFrameDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TransformBoxFrame />
    </div>
  );
}
```

## API Reference

### TransformBoxFrame

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
