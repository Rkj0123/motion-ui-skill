---
title: "Text Scramble Decoder"
description: "A controlled text reveal that resolves scrambled glyphs into readable copy without changing the text semantics."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/text-scramble-decoder.md"
markdown: "references/craft/text-scramble-decoder.md"
license: "MIT"
---

# Text Scramble Decoder

> A controlled text reveal that resolves scrambled glyphs into readable copy without changing the text semantics.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-scramble-decoder --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextScrambleDecoder as TextScrambleDecoder } from "@/components/craft/text-scramble-decoder";

export function Example() {
  return (
    <div className="p-6">
      <TextScrambleDecoder />
    </div>
  );
}
```
