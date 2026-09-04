---
title: "Segmented Control"
description: "Tactile iOS/macOS segmented control with layoutId gliding indicator, icon labels, haptic taps, and keyboard arrow navigation."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/segmented-control.md"
markdown: "references/motion/segmented-control.md"
license: "MIT"
---

# Segmented Control

> Tactile iOS/macOS segmented control with `layoutId` gliding indicator, icon labels, haptic taps, and keyboard arrow navigation. Inspired by Expo and Transitions.dev.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py segmented-control --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SegmentedControl } from "@/components/motion/segmented-control";
import { Grid, List, Table } from "lucide-react";
import { useState } from "react";

export function SegmentedControlExample() {
  const [view, setView] = useState("grid");

  return (
    <div className="p-8 bg-card rounded-2xl border border-border inline-block">
      <SegmentedControl
        value={view}
        onChange={(val) => setView(val)}
        items={[
          { value: "grid", label: "Grid", icon: <Grid className="size-3.5" /> },
          { value: "list", label: "List", icon: <List className="size-3.5" /> },
          { value: "table", label: "Table", icon: <Table className="size-3.5" /> },
        ]}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `SegmentedItem[]` | required | Array of selectable segments with label, value, and optional icon. |
| `value` | `string` | `undefined` | Controlled active segment value. |
| `defaultValue` | `string` | `items[0].value` | Uncontrolled initial segment value. |
| `onChange` | `(value: string) => void` | `undefined` | Callback emitted on segment change. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size scale of segments. |
| `fullWidth` | `boolean` | `false` | Stretches segments to fill container width equally. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
