---
title: "Text Morph"
description: "In-place text transition that pins shared character prefixes and suffixes while smoothly cross-blurring and easing changing middle letters."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/text-morph.md"
markdown: "references/motion/text-morph.md"
license: "MIT"
---

# Text Morph

> In-place text transition that pins shared character prefixes and suffixes while smoothly cross-blurring and easing changing middle letters.

The canonical text morph pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Ideal for button labels and micro-states that share letters (e.g., "Copy code" $\to$ "Copied", "Follow" $\to$ "Following", "Save" $\to$ "Saved"). The shared letters stay anchored; only the differing characters cross-fade with directional blur.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-morph --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { TextMorph } from "@/components/motion/text-morph";

export function TextMorphDemo() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <button
        type="button"
        onClick={() => setCopied(!copied)}
        className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm"
      >
        <TextMorph text={copied ? "Copied" : "Copy code"} />
      </button>
    </div>
  );
}
```

## API Reference

### TextMorph

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `text` | `string` | — | Yes | Target label string to morph into |
| `className` | `string` | — | No | Additional CSS classes |
