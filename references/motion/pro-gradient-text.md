---
title: "Pro Gradient Text"
description: "High-performance multi-stop moving gradient typography with configurable angle, speed, chromatic spectrum, and mask clipping."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/pro-gradient-text.md"
markdown: "references/motion/pro-gradient-text.md"
license: "MIT"
---

# Pro Gradient Text

> High-performance multi-stop moving gradient typography with configurable angle, speed, chromatic spectrum, and mask clipping.

High-impact headline gradient animation from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Uses GPU-composited background-position translation on background-clip: text.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py pro-gradient-text --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ProGradientText } from "@/components/motion/pro-gradient-text";

export function ProGradientTextDemo() {
  return (
    <div className="flex items-center justify-center p-8 text-center">
      <ProGradientText>Autonomous AI Components</ProGradientText>
    </div>
  );
}
```

## API Reference

### ProGradientText

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | `"Engineered for Velocity"` | No | Text content |
| `colors` | `string[]` | 6 chromatic stops | No | Array of hex or rgba color stops |
| `duration` | `number` | `6` | No | Cycle speed in seconds |
| `className` | `string` | — | No | Additional CSS classes |
