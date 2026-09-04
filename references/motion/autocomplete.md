---
title: "Autocomplete"
description: "Searchable combobox with debounced substring highlighting, keyboard arrow navigation, clear trigger, and spring panel reveal."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/autocomplete.md"
markdown: "references/motion/autocomplete.md"
license: "MIT"
---

# Autocomplete

> Searchable combobox with debounced substring highlighting, keyboard arrow navigation, clear trigger, and spring panel reveal. Inspired by shadcn/ui and KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py autocomplete --dest ./src
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

import { Autocomplete, type AutocompleteItem } from "@/components/motion/autocomplete";

const COUNTRIES: AutocompleteItem[] = [
  { id: "us", label: "United States", category: "North America" },
  { id: "ca", label: "Canada", category: "North America" },
  { id: "de", label: "Germany", category: "Europe" },
  { id: "fr", label: "France", category: "Europe" },
  { id: "jp", label: "Japan", category: "Asia" },
  { id: "in", label: "India", category: "Asia" },
];

export function AutocompleteExample() {
  return (
    <div className="p-8">
      <Autocomplete
        items={COUNTRIES}
        placeholder="Select destination..."
        onChange={(item) => console.log("Selected:", item)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `AutocompleteItem[]` | Required | Array of searchable items (`{ id, label, category? }`). |
| `value` | `string` | `""` | Initial input value. |
| `onChange` | `(item: AutocompleteItem) => void` | `undefined` | Callback fired on item selection. |
| `placeholder` | `string` | `"Search items..."` | Input placeholder text. |
| `loading` | `boolean` | `false` | Shows loading spinner. |
| `className` | `string` | `undefined` | Container classes. |
