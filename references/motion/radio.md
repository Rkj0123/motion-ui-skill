---
title: "Radio Group"
description: "Single-select choice control with a gliding layoutId indicator dot and spring press feedback."
category: "Components"
publishedAt: "2026-06-23"
updatedAt: "2026-07-13"
documentation: "references/motion/radio.md"
markdown: "references/motion/radio.md"
license: "MIT"
---

# Radio Group

> Single-select choice control with a gliding layoutId indicator dot and spring press feedback.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py radio --dest ./src
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
import { RadioGroup, RadioGroupItem } from "@/components/motion/radio";

export function RadioPreview() {
  const [plan, setPlan] = useState("pro");

  return (
    <RadioGroup value={plan} onValueChange={setPlan} className="min-w-48">
      <RadioGroupItem value="starter" label="Starter — free" />
      <RadioGroupItem value="pro" label="Pro — $12/mo" />
      <RadioGroupItem value="team" label="Team — $29/mo" />
      <RadioGroupItem value="legacy" label="Legacy plan" disabled />
    </RadioGroup>
  );
}
```

## API Reference

### RadioGroup

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `className` | `string` | — | No | — |
| `orientation` | `"horizontal" \| "vertical"` | `vertical` | No | — |

### RadioGroupItem

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `label` | `string` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `className` | `string` | — | No | — |
| `id` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
