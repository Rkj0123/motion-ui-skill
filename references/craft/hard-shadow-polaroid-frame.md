---
title: "Hard Shadow Polaroid Frame"
description: "Polaroid frame with a crisp inner border, thick caption chin, and hard offset shadow — pass caption and any image or video as children."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/hard-shadow-polaroid-frame.md"
markdown: "references/craft/hard-shadow-polaroid-frame.md"
license: "MIT"
---

# Hard Shadow Polaroid Frame

> Polaroid frame with a crisp inner border, thick caption chin, and hard offset shadow — pass caption and any image or video as children.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hard-shadow-polaroid-frame --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HardShadowPolaroidFrame } from "@/components/frames/hard-shadow-polaroid-frame";

export function HardShadowPolaroidFrameDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HardShadowPolaroidFrame />
    </div>
  );
}
```

## API Reference

### HardShadowPolaroidFrame

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
