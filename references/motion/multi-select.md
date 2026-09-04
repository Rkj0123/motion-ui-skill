---
title: "Multi Select"
description: "Composable multi-select primitives with searchable options, removable animated tokens, and a morphing collision-aware panel."
category: "Components"
publishedAt: "2026-08-29"
updatedAt: "2026-08-29"
documentation: "references/motion/multi-select.md"
markdown: "references/motion/multi-select.md"
license: "MIT"
---

# Multi Select

> Composable multi-select primitives with searchable options, removable animated tokens, and a morphing collision-aware panel.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py multi-select --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Circle } from "lucide-react";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectInput,
  MultiSelectItem,
  MultiSelectLabel,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/motion/multi-select";

const colors = {
  design: "fill-rose-500 text-rose-500",
  engineering: "fill-sky-500 text-sky-500",
  product: "fill-amber-500 text-amber-500",
  research: "fill-violet-500 text-violet-500",
  marketing: "fill-emerald-500 text-emerald-500",
  operations: "fill-slate-500 text-slate-500",
};

function Option({
  value,
  children,
}: {
  value: keyof typeof colors;
  children: string;
}) {
  return (
    <MultiSelectItem value={value} textValue={children}>
      <span className="flex items-center gap-2.5">
        <Circle aria-hidden="true" className={`size-2.5 ${colors[value]}`} />
        {children}
      </span>
    </MultiSelectItem>
  );
}

export function MultiSelectPreview() {
  return (
    <div className="flex min-h-[420px] w-full items-start justify-center px-4 pt-24">
      <div className="w-full max-w-sm">
        <MultiSelect defaultValue={["design", "engineering"]}>
          <MultiSelectTrigger>
            <MultiSelectValue placeholder="Choose teams" />
            <MultiSelectInput aria-label="Search teams" />
          </MultiSelectTrigger>
          <MultiSelectContent>
            <MultiSelectList ariaLabel="Teams">
              <MultiSelectGroup>
                <MultiSelectLabel>Product teams</MultiSelectLabel>
                <Option value="design">Design</Option>
                <Option value="engineering">Engineering</Option>
                <Option value="product">Product</Option>
                <Option value="research">Research</Option>
              </MultiSelectGroup>
              <MultiSelectGroup>
                <MultiSelectLabel>Business teams</MultiSelectLabel>
                <Option value="marketing">Marketing</Option>
                <Option value="operations">Operations</Option>
              </MultiSelectGroup>
              <MultiSelectEmpty>No teams found.</MultiSelectEmpty>
            </MultiSelectList>
          </MultiSelectContent>
        </MultiSelect>
      </div>
    </div>
  );
}
```

## API Reference

### MultiSelect

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string[]` | — | No | — |
| `defaultValue` | `string[]` | `[]` | No | — |
| `onValueChange` | `((value: string[]) => void)` | — | No | — |
| `open` | `boolean` | — | No | — |
| `defaultOpen` | `boolean` | `false` | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `query` | `string` | — | No | — |
| `defaultQuery` | `string` | — | No | — |
| `onQueryChange` | `((query: string) => void)` | — | No | — |
| `filter` | `MultiSelectFilter` | `(value, query, keywords) => { const needle = query.trim().toLocaleLowerCase(); if (!needle) return true; const haystack = [value, ...keywords].join(" ").toLocaleLowerCase(); let queryIndex = 0; for (const character of haystack) { if (character === needle[queryIndex]) queryIndex += 1; if (queryIndex === needle.length) return true; } return false; }` | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

### MultiSelectInput

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLInputElement>` | — | No | — |
| `showIcon` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

### MultiSelectTrigger

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MultiSelectValue

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `placeholder` | `ReactNode` | `Select options` | No | — |
| `className` | `string` | — | No | — |
| `chipClassName` | `string` | — | No | — |

### MultiSelectContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `side` | `"bottom" \| "top"` | `bottom` | No | — |
| `align` | `"end" \| "start" \| "center"` | `start` | No | — |
| `sideOffset` | `number` | `6` | No | — |
| `avoidCollisions` | `boolean` | `true` | No | — |
| `className` | `string` | — | No | — |

### MultiSelectEmpty

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MultiSelectGroup

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MultiSelectItem

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `textValue` | `string` | — | No | — |
| `keywords` | `string[]` | `[]` | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `onSelect` | `((value: string) => void)` | — | No | — |
| `className` | `string` | — | No | — |

### MultiSelectLabel

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MultiSelectList

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | `string` | `Options` | No | — |
| `className` | `string` | — | No | — |

### MultiSelectSeparator

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
