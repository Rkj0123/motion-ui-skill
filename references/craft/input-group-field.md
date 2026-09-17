---
title: "Input Group Field"
description: "Grouped input with prefix and suffix slots — URLs, currency, units. Wrapper border highlights on focus; inputs use border-only focus with ring-0."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/input-group-field.md"
markdown: "references/craft/input-group-field.md"
license: "MIT"
---

# Input Group Field

> Grouped input with prefix and suffix slots — URLs, currency, units. Wrapper border highlights on focus; inputs use border-only focus with ring-0.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py input-group-field --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InputGroupField } from "@/components/inputs/input-group-field";

export function InputGroupFieldDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <InputGroupField />
    </div>
  );
}
```

## API Reference

### InputGroupField

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
