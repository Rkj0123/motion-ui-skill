---
title: "Radio Group Field Input"
description: "Card-style radio group for checkout and settings flows. Vertical or horizontal layout, descriptions, and arrow-key navigation."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/radio-group-field-input.md"
markdown: "references/craft/radio-group-field-input.md"
license: "MIT"
---

# Radio Group Field Input

> Card-style radio group for checkout and settings flows. Vertical or horizontal layout, descriptions, and arrow-key navigation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py radio-group-field-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RadioGroupFieldInput } from "@/components/inputs/radio-group-field-input";

export function RadioGroupFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RadioGroupFieldInput />
    </div>
  );
}
```

## API Reference

### RadioGroupFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
