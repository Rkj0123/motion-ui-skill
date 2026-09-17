---
title: "Search Input"
description: "Search field with leading icon and clear button. Controlled or uncontrolled value, hidden native cancel, and keyboard-friendly reset."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/search-input.md"
markdown: "references/craft/search-input.md"
license: "MIT"
---

# Search Input

> Search field with leading icon and clear button. Controlled or uncontrolled value, hidden native cancel, and keyboard-friendly reset.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py search-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SearchInput } from "@/components/inputs/search-input";

export function SearchInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SearchInput />
    </div>
  );
}
```

## API Reference

### SearchInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
