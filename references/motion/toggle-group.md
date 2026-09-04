---
title: "Toggle Group"
description: "Single or multiple selection button group with active state elevation, icon labels, and tactile spring feedback."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/toggle-group.md"
markdown: "references/motion/toggle-group.md"
license: "MIT"
---

# Toggle Group

> Single or multiple selection button group with active state elevation, icon labels, and tactile spring feedback. Inspired by shadcn/ui and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py toggle-group --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ToggleGroup } from "@/components/motion/toggle-group";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useState } from "react";

export function ToggleGroupExample() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="p-6 bg-card rounded-2xl border border-border inline-block">
      <ToggleGroup
        type="single"
        value={alignment}
        onChange={setAlignment}
        items={[
          { value: "left", icon: <AlignLeft className="size-4" />, ariaLabel: "Align left" },
          { value: "center", icon: <AlignCenter className="size-4" />, ariaLabel: "Align center" },
          { value: "right", icon: <AlignRight className="size-4" />, ariaLabel: "Align right" },
          { value: "justify", icon: <AlignJustify className="size-4" />, ariaLabel: "Justify" },
        ]}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `ToggleItem[]` | required | Array of toggle button definitions with value, label, icon, and ariaLabel. |
| `type` | `"single" \| "multiple"` | `"single"` | Selection mode allowing one or multiple active toggles. |
| `value` | `string \| string[]` | `undefined` | Controlled active value(s). |
| `onChange` | `(val: any) => void` | `undefined` | Callback emitted on toggle state changes. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size tier. |
| `variant` | `"default" \| "outline"` | `"default"` | Background wrapper visual style. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
