---
title: "Keyboard Keycap (Kbd)"
description: "Hardware-styled keyboard shortcut cap with OS auto-detection (macOS ⌘ vs Windows Ctrl), key combination joins, and tactile spring press feedback."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/kbd.md"
markdown: "references/motion/kbd.md"
license: "MIT"
---

# Keyboard Keycap (Kbd)

> Hardware-styled keyboard shortcut cap with OS auto-detection (macOS ⌘ vs Windows Ctrl), key combination joins, and tactile spring press feedback. Inspired by shadcn/ui and Coss (Origin UI).

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py kbd --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Kbd } from "@/components/motion/kbd";

export function KbdExample() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-6 bg-card rounded-2xl border border-border">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Quick Search:</span>
        <Kbd keys={["cmd", "k"]} size="sm" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Command Execution:</span>
        <Kbd keys={["shift", "enter"]} size="sm" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Close:</span>
        <Kbd keys={["esc"]} size="xs" />
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `keys` | `(KeyModifier \| string)[]` | `[]` | Array of key names/modifiers joined with plus symbols. |
| `children` | `ReactNode` | `undefined` | Custom label or icon inside the keycap. |
| `size` | `"xs" \| "sm" \| "md"` | `"sm"` | Physical keycap dimension scale. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
