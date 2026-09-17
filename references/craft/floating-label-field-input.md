---
title: "Floating Label Field Input"
description: "Outlined floating label that rests on the border notch when focused or filled — matches Material-style fields with autofill detection."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/floating-label-field-input.md"
markdown: "references/craft/floating-label-field-input.md"
license: "MIT"
---

# Floating Label Field Input

> Outlined floating label that rests on the border notch when focused or filled — matches Material-style fields with autofill detection.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py floating-label-field-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FloatingLabelFieldInput } from "@/components/inputs/floating-label-field-input";

export function FloatingLabelFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FloatingLabelFieldInput />
    </div>
  );
}
```

## API Reference

### FloatingLabelFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
