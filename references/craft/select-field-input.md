---
title: "Select Field Input"
description: "Custom listbox select with styled dropdown, keyboard navigation, click-outside close, and hidden input for native form posts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/select-field-input.md"
markdown: "references/craft/select-field-input.md"
license: "MIT"
---

# Select Field Input

> Custom listbox select with styled dropdown, keyboard navigation, click-outside close, and hidden input for native form posts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py select-field-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SelectFieldInput } from "@/components/inputs/select-field-input";

export function SelectFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SelectFieldInput />
    </div>
  );
}
```

## API Reference

### SelectFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
