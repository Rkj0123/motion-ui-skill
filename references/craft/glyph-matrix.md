---
title: "Glyph Matrix"
description: "A high-performance, canvas-driven Matrix digital rain background effect featuring streaming Katakana and numeric glyphs, glowing head highlights, decaying phosphor trails, and interactive cursor disturbances."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/glyph-matrix.md"
markdown: "references/craft/glyph-matrix.md"
license: "MIT"
---

# Glyph Matrix

> A high-performance, canvas-driven Matrix digital rain background effect featuring streaming Katakana and numeric glyphs, glowing head highlights, decaying phosphor trails, and interactive cursor disturbances.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py glyph-matrix --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GlyphMatrix as GlyphMatrix } from "@/components/craft/glyph-matrix";

export function Example() {
  return (
    <div className="p-6">
      <GlyphMatrix />
    </div>
  );
}
```
