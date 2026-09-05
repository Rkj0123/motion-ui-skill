---
title: "Glow Button"
description: "Premium CTA button featuring an iridescent glowing perimeter gradient, magnetic pointer attraction, and tactile spring feedback."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/glow-button.md"
markdown: "references/motion/glow-button.md"
license: "MIT"
---

# Glow Button

> Premium CTA button featuring an iridescent glowing perimeter gradient, magnetic pointer attraction, and tactile spring feedback. Inspired by ibelick/ui-skills and Transitions.dev.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py glow-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GlowButton } from "@/components/motion/glow-button";
import { ArrowRight, Sparkles } from "lucide-react";

export function GlowButtonExample() {
  return (
    <div className="flex items-center gap-4 p-8">
      <GlowButton onClick={() => console.log("Clicked")}>
        <Sparkles className="size-4 text-purple-400" />
        <span>Deploy Autonomous Agent</span>
        <ArrowRight className="size-4" />
      </GlowButton>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | required | Button label or icon content. |
| `magnetic` | `boolean` | `true` | Enables subtle magnetic pointer displacement toward cursor. |
| `magneticDistance` | `number` | `0.25` | Fraction of cursor offset applied to the button element. |
| `glowColor` | `string` | `"from-primary via-purple-500 to-pink-500"` | Tailwind gradient color classes for perimeter glow. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
