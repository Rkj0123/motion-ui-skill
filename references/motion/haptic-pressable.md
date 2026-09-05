---
title: "Haptic Pressable"
description: "Cross-platform touchable component with multi-tier semantic haptic feedback, scale press physics, and touch ripple effects."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/haptic-pressable.md"
markdown: "references/motion/haptic-pressable.md"
license: "MIT"
---

# Haptic Pressable

> Cross-platform touchable component with multi-tier semantic haptic feedback, scale press physics, and touch ripple effects. Inspired by Expo and Apple HIG.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py haptic-pressable --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HapticPressable } from "@/components/motion/haptic-pressable";
import { Sparkles } from "lucide-react";

export function HapticPressableExample() {
  return (
    <div className="p-8">
      <HapticPressable
        haptic="medium"
        pressScale={0.94}
        onClick={() => console.log("Pressed with haptic feedback")}
        className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md"
      >
        <Sparkles className="size-4" />
        <span>Tactile Mobile Action</span>
      </HapticPressable>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | required | Pressable inner content. |
| `haptic` | `HapticType` | `"selection"` | Sensation type (`selection`, `light`, `medium`, `heavy`, `success`, `error`). |
| `pressScale` | `number` | `0.96` | Downward scale compression factor during active press. |
| `showRipple` | `boolean` | `true` | Renders a radial expanding ripple wave at click point. |
| `disabled` | `boolean` | `false` | Disables interaction and suppresses haptics. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
