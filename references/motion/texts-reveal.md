---
title: "Texts Reveal"
description: "Typographic text reveal container staggering words and lines along spring trajectories with opacity and directional drift."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/texts-reveal.md"
markdown: "references/motion/texts-reveal.md"
license: "MIT"
---

# Texts Reveal

> Typographic text reveal container staggering words and lines along spring trajectories with opacity and directional drift.

Editorial reveal animation from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Words rise from within masked line slots with staggered cubic-bezier velocity.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py texts-reveal --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextsReveal } from "@/components/motion/texts-reveal";

export function TextsRevealDemo() {
  return (
    <div className="flex items-center justify-center p-8 max-w-xl">
      <TextsReveal text="Building the next generation of autonomous design systems." />
    </div>
  );
}
```

## API Reference

### TextsReveal

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `text` | `string` | Default platform headline | No | Raw string decomposed into staggered word spans |
| `stagger` | `number` | `0.04` | No | Stagger delay between words in seconds |
| `className` | `string` | — | No | Additional CSS classes |
