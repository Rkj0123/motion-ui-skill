---
title: "Date Field Input"
description: "Custom calendar popover with month navigation, today shortcut, min/max limits, and styled day grid — no native browser picker."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/date-field-input.md"
markdown: "references/craft/date-field-input.md"
license: "MIT"
---

# Date Field Input

> Custom calendar popover with month navigation, today shortcut, min/max limits, and styled day grid — no native browser picker.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py date-field-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DateFieldInput } from "@/components/inputs/date-field-input";

export function DateFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DateFieldInput />
    </div>
  );
}
```

## API Reference

### DateFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
