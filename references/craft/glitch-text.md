---
title: "Glitch Text"
description: "A multi-modal cybernetic glitch typography component featuring 5 distinct animation variants (RGB split chromatic aberration, cyberpunk clip-slicing, analog VHS tracking loss, matrix rune scramble decode, and electrical voltage surge)."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/glitch-text.md"
markdown: "references/craft/glitch-text.md"
license: "MIT"
---

# Glitch Text

> A multi-modal cybernetic glitch typography component featuring 5 distinct animation variants (RGB split chromatic aberration, cyberpunk clip-slicing, analog VHS tracking loss, matrix rune scramble decode, and electrical voltage surge).

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py glitch-text --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GlitchText as GlitchText } from "@/components/craft/glitch-text";

export function Example() {
  return (
    <div className="p-6">
      <GlitchText />
    </div>
  );
}
```
