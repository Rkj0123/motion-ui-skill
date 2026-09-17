---
title: "Combobox Field Input"
description: "Searchable combobox with filtered listbox, keyboard navigation, click-outside close, and hidden field for form posts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/combobox-field-input.md"
markdown: "references/craft/combobox-field-input.md"
license: "MIT"
---

# Combobox Field Input

> Searchable combobox with filtered listbox, keyboard navigation, click-outside close, and hidden field for form posts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py combobox-field-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ComboboxFieldInput } from "@/components/inputs/combobox-field-input";

export function ComboboxFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ComboboxFieldInput />
    </div>
  );
}
```

## API Reference

### ComboboxFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
