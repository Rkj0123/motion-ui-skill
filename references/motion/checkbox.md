---
title: "Checkbox"
description: "Form choice control with a draw-on checkmark, spring press feedback and indeterminate state support."
category: "Components"
publishedAt: "2026-06-23"
updatedAt: "2026-07-01"
documentation: "references/motion/checkbox.md"
markdown: "references/motion/checkbox.md"
license: "MIT"
---

# Checkbox

> Form choice control with a draw-on checkmark, spring press feedback and indeterminate state support.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py checkbox --dest ./src
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
import { Checkbox } from "@/components/motion/checkbox";

export function CheckboxPreview() {
  const [terms, setTerms] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        checked={terms}
        onCheckedChange={setTerms}
        label="Accept terms and conditions"
      />
      <Checkbox
        checked={updates}
        onCheckedChange={setUpdates}
        label="Email me product updates"
      />
      <Checkbox checked indeterminate onCheckedChange={() => {}} label="Select all (partial)" />
      <Checkbox checked disabled onCheckedChange={() => {}} label="Disabled" />
    </div>
  );
}
```

## API Reference

### Checkbox

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `checked` | `boolean` | — | Yes | — |
| `onCheckedChange` | `(checked: boolean) => void` | — | Yes | — |
| `disabled` | `boolean` | — | No | — |
| `indeterminate` | `boolean` | — | No | — |
| `label` | `string` | — | No | — |
| `className` | `string` | — | No | — |
| `id` | `string` | — | No | — |
| `aria-label` | `string` | — | No | — |
| `aria-describedby` | `string` | — | No | Associates an external message (e.g. a form error) with the control. |

