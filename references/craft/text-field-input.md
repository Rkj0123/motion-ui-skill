---
title: "Text Field Input"
description: "Standard labeled text field with hint and error states. Supports all native input types, required marker, disabled, and full a11y wiring."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/text-field-input.md"
markdown: "references/craft/text-field-input.md"
license: "MIT"
---

# Text Field Input

> Standard labeled text field with hint and error states. Supports all native input types, required marker, disabled, and full a11y wiring.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-field-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextFieldInput } from "@/components/inputs/text-field-input";

export function TextFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TextFieldInput />
    </div>
  );
}
```

## API Reference

### TextFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
