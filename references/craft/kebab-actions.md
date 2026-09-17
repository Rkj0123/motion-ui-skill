---
title: "Kebab Actions"
description: "List row that expands inline — actions open inside the same card so widths always align."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/kebab-actions.md"
markdown: "references/craft/kebab-actions.md"
license: "MIT"
---

# Kebab Actions

> List row that expands inline — actions open inside the same card so widths always align.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py kebab-actions --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { KebabActionsDropdown } from "@/components/dropdowns/kebab-actions-dropdown";

export function KebabActionsDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <KebabActionsDropdown />
    </div>
  );
}
```

## API Reference

### KebabActionsDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
