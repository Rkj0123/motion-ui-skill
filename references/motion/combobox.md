---
title: "Combobox"
description: "Searchable combobox with a morphing portal, grouped filtering, keyboard navigation, and controlled or uncontrolled state."
category: "Components"
publishedAt: "2026-08-11"
updatedAt: "2026-08-22"
documentation: "references/motion/combobox.md"
markdown: "references/motion/combobox.md"
license: "MIT"
---

# Combobox

> Searchable combobox with a morphing portal, grouped filtering, keyboard navigation, and controlled or uncontrolled state.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py combobox --dest ./src
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

import { Blocks, Box, Component, Layers3 } from "lucide-react";
import { useState } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
} from "@/components/motion/combobox";

const WORKSPACES = [
  {
    value: "studio",
    label: "Design studio",
    detail: "12 projects",
    group: "Recent",
    icon: Component,
    color: "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  },
  {
    value: "product",
    label: "Product team",
    detail: "8 projects",
    group: "Recent",
    icon: Layers3,
    color: "bg-sky-400/20 text-sky-700 dark:text-sky-300",
  },
  {
    value: "playground",
    label: "Playground",
    detail: "24 experiments",
    group: "Workspaces",
    icon: Blocks,
    color: "bg-emerald-400/20 text-emerald-700 dark:text-emerald-300",
  },
  {
    value: "archive",
    label: "Component archive",
    detail: "41 components",
    group: "Workspaces",
    icon: Box,
    color: "bg-rose-400/20 text-rose-700 dark:text-rose-300",
  },
] as const;

function WorkspaceMark({ value }: { value: string }) {
  const workspace = WORKSPACES.find((item) => item.value === value);
  if (!workspace) return null;
  const Icon = workspace.icon;
  return (
    <span
      className={`grid size-7 shrink-0 place-items-center rounded-lg ${workspace.color}`}
    >
      <Icon className="size-3.5" />
    </span>
  );
}

export function ComboboxPreview() {
  const [value, setValue] = useState("studio");

  return (
    <div className="w-full max-w-72">
      <p className="mb-2 text-xs font-medium text-muted-foreground">
        Workspace
      </p>
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxTrigger className="h-12 rounded-2xl px-2.5">
          <ComboboxInput
            aria-label="Search workspaces"
            placeholder="Search workspaces…"
          />
        </ComboboxTrigger>

        <ComboboxContent className="w-72 rounded-2xl">
          <ComboboxList ariaLabel="Workspaces" className="p-2">
            <ComboboxEmpty>No workspaces found.</ComboboxEmpty>
            {(["Recent", "Workspaces"] as const).map((group, groupIndex) => (
              <ComboboxGroup key={group}>
                {groupIndex > 0 ? <ComboboxSeparator /> : null}
                <ComboboxLabel>{group}</ComboboxLabel>
                {WORKSPACES.filter((item) => item.group === group).map(
                  (workspace) => (
                    <ComboboxItem
                      key={workspace.value}
                      value={workspace.value}
                      textValue={workspace.label}
                      keywords={[workspace.detail, workspace.group]}
                      className="py-2"
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <WorkspaceMark value={workspace.value} />
                        <span className="min-w-0">
                          <span className="block truncate font-medium text-foreground">
                            {workspace.label}
                          </span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {workspace.detail}
                          </span>
                        </span>
                      </span>
                    </ComboboxItem>
                  ),
                )}
              </ComboboxGroup>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
```

## API Reference

### ComboboxContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `side` | `"bottom" \| "top"` | `bottom` | No | — |
| `align` | `"end" \| "start" \| "center"` | `start` | No | — |
| `sideOffset` | `number` | `6` | No | — |
| `avoidCollisions` | `boolean` | `true` | No | — |
| `className` | `string` | — | No | — |

### Combobox

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `open` | `boolean` | — | No | — |
| `defaultOpen` | `boolean` | `false` | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `query` | `string` | — | No | — |
| `defaultQuery` | `string` | — | No | — |
| `onQueryChange` | `((query: string) => void)` | — | No | — |
| `filter` | `ComboboxFilter` | `(value, query, keywords) => { const needle = query.trim().toLocaleLowerCase(); if (!needle) return true; const haystack = [value, ...keywords].join(" ").toLocaleLowerCase(); let queryIndex = 0; for (const character of haystack) { if (character === needle[queryIndex]) queryIndex += 1; if (queryIndex === needle.length) return true; } return false; }` | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `className` | `string` | — | No | — |

### ComboboxEmpty

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### ComboboxGroup

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### ComboboxItem

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `textValue` | `string` | — | No | — |
| `keywords` | `string[]` | `[]` | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `onSelect` | `((value: string) => void)` | — | No | — |
| `className` | `string` | — | No | — |

### ComboboxLabel

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### ComboboxList

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | `string` | `Options` | No | — |
| `className` | `string` | — | No | — |

### ComboboxSeparator

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### ComboboxInput

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ref` | `Ref<HTMLInputElement>` | — | No | — |
| `wrapperClassName` | `string` | — | No | — |
| `className` | `string` | — | No | — |

### ComboboxTrigger

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### ComboboxValue

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `placeholder` | `ReactNode` | `Select an option` | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
