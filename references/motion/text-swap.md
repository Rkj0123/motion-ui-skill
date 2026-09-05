---
title: "Text Swap"
description: "Slot-machine vertical ticker transition that rolls text or numbers with subtle blur and spring velocity handoffs."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/text-swap.md"
markdown: "references/motion/text-swap.md"
license: "MIT"
---

# Text Swap

> Slot-machine vertical ticker transition that rolls text or numbers with subtle blur and spring velocity handoffs. Inspired by transitions.dev and ibelick/ui-skills.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-swap --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextSwap } from "@/components/motion/text-swap";
import { useState, useEffect } from "react";

const WORDS = ["Developers", "Designers", "Founders", "Teams"];

export function TextSwapExample() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 text-2xl font-bold">
      Built for <TextSwap text={WORDS[index]} className="text-primary ml-1.5" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string \| number` | Required | Content string or number that triggers rolling animation on change. |
| `direction` | `"up" \| "down"` | `"up"` | Rolling direction. |
| `className` | `string` | `undefined` | Container classes. |
