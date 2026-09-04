---
title: "Select"
description: "Composable select primitives whose panel bouncily unfolds out of the trigger and separates, plus a Morph variant where the trigger grows into the panel via shared layout."
category: "Components"
publishedAt: "2026-06-28"
updatedAt: "2026-07-13"
documentation: "references/motion/select.md"
markdown: "references/motion/select.md"
license: "MIT"
---

# Select

> Composable select primitives whose panel bouncily unfolds out of the trigger and separates, plus a Morph variant where the trigger grows into the panel via shared layout.

## Install

### Select

Composable primitives (Select, SelectTrigger, SelectValue, SelectContent, SelectItem); the panel pinches off the trigger and separates, with staggered items. Position-aware (opens upward when needed).

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py select --dest ./src
```

### Morph Select

Composable primitives (MorphSelect, MorphSelectTrigger, MorphSelectValue, MorphSelectContent, MorphSelectItem) where the trigger morphs into the panel via a shared layoutId — one continuous surface that grows open and shrinks back, never detaching.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py select-morph --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Select usage

Composable primitives (Select, SelectTrigger, SelectValue, SelectContent, SelectItem); the panel pinches off the trigger and separates, with staggered items. Position-aware (opens upward when needed).

```tsx
"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/motion/select";

export function SelectPreview() {
  const [value, setValue] = useState("next");
  return (
    <div className="w-56">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Pick a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="vite">Vite</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
```

### Morph Select usage

Composable primitives (MorphSelect, MorphSelectTrigger, MorphSelectValue, MorphSelectContent, MorphSelectItem) where the trigger morphs into the panel via a shared layoutId — one continuous surface that grows open and shrinks back, never detaching.

```tsx
"use client";

import { useState } from "react";
import {
  MorphSelect,
  MorphSelectContent,
  MorphSelectItem,
  MorphSelectTrigger,
  MorphSelectValue,
} from "@/components/motion/select-morph";

export function SelectMorphPreview() {
  const [value, setValue] = useState("next");
  return (
    <div className="w-56">
      <MorphSelect value={value} onValueChange={setValue}>
        <MorphSelectTrigger>
          <MorphSelectValue placeholder="Pick a framework" />
        </MorphSelectTrigger>
        <MorphSelectContent>
          <MorphSelectItem value="next">Next.js</MorphSelectItem>
          <MorphSelectItem value="remix">Remix</MorphSelectItem>
          <MorphSelectItem value="astro">Astro</MorphSelectItem>
          <MorphSelectItem value="vite">Vite</MorphSelectItem>
        </MorphSelectContent>
      </MorphSelect>
    </div>
  );
}
```

## API Reference

### Select

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `open` | `boolean` | — | No | Controlled open state of the panel. A layout that stacks selects can hold this to keep exactly one panel open — the panel is absolutely positioned inside its field, so two open at once paint over each other's options. |
| `defaultOpen` | `boolean` | `false` | No | Uncontrolled initial open state. Default false. |
| `onOpenChange` | `((open: boolean) => void)` | — | No | Fires whenever the panel opens or closes. The panel is absolutely positioned inside the field, so a layout that stacks selects has to know which one is open to paint it above its neighbours. |
| `disabled` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

### SelectTrigger

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### SelectValue

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `placeholder` | `string` | — | No | — |
| `className` | `string` | — | No | — |

### SelectContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### SelectItem

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `disabled` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

### MorphSelect

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

### MorphSelectValue

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `placeholder` | `string` | — | No | — |
| `className` | `string` | — | No | — |

### MorphSelectTrigger

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MorphSelectContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MorphSelectItem

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `disabled` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

