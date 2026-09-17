---
title: "Sticky Note Polaroid Frame"
description: "Polaroid-style frame with a paper-clipped sticky note overlay — pass noteHeader, noteBody, noteFooter, and any image or video as children."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/sticky-note-polaroid-frame.md"
markdown: "references/craft/sticky-note-polaroid-frame.md"
license: "MIT"
---

# Sticky Note Polaroid Frame

> Polaroid-style frame with a paper-clipped sticky note overlay — pass noteHeader, noteBody, noteFooter, and any image or video as children.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sticky-note-polaroid-frame --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StickyNotePolaroidFrame } from "@/components/frames/sticky-note-polaroid-frame";

export function StickyNotePolaroidFrameDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StickyNotePolaroidFrame />
    </div>
  );
}
```

## API Reference

### StickyNotePolaroidFrame

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
