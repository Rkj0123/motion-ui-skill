---
title: "Color Picker"
description: "Interactive hex/rgb color selector with preset swatches, native eyedropper API integration, spring popover, and one-click copy."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/color-picker.md"
markdown: "references/motion/color-picker.md"
license: "MIT"
---

# Color Picker

> Interactive hex/rgb color selector with preset swatches, native eyedropper API integration, spring popover, and one-click copy. Inspired by Origin UI (Coss) and KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py color-picker --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ColorPicker } from "@/components/motion/color-picker";
import { useState } from "react";

export function ColorPickerExample() {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="p-8">
      <ColorPicker value={color} onChange={(val) => setColor(val)} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `"#3b82f6"` | Selected color hex string. |
| `onChange` | `(color: string) => void` | `undefined` | Callback fired when hex value changes. |
| `presets` | `string[]` | Default 12 colors | Array of preset hex color swatches. |
| `className` | `string` | `undefined` | Container classes. |
