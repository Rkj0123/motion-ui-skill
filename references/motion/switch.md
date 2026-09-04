---
title: "Switch"
description: "Toggle with a spring-driven thumb and press feedback."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-06-10"
documentation: "references/motion/switch.md"
markdown: "references/motion/switch.md"
license: "MIT"
---

# Switch

> Toggle with a spring-driven thumb and press feedback.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py switch --dest ./src
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
import { Switch } from "@/components/motion/switch";

export function SwitchPreview() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex flex-col gap-3">
      <Switch checked={on} onCheckedChange={setOn} label="Enable notifications" />
      <Switch checked={false} onCheckedChange={() => {}} label="Off" />
      <Switch checked disabled onCheckedChange={() => {}} label="Disabled" />
    </div>
  );
}
```

## API Reference

### Switch

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `checked` | `boolean` | — | Yes | — |
| `onCheckedChange` | `(checked: boolean) => void` | — | Yes | — |
| `disabled` | `boolean` | — | No | — |
| `label` | `string` | — | No | — |
| `ariaLabel` | `string` | — | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
