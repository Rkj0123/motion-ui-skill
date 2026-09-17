---
title: "Filter Sort"
description: "Native select-style box — dropdown is flush below the trigger with matching width and a left-border active state."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/filter-sort.md"
markdown: "references/craft/filter-sort.md"
license: "MIT"
---

# Filter Sort

> Native select-style box — dropdown is flush below the trigger with matching width and a left-border active state.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py filter-sort --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FilterSortDropdown } from "@/components/dropdowns/filter-sort-dropdown";

export function FilterSortDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FilterSortDropdown />
    </div>
  );
}
```

## API Reference

### FilterSortDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
