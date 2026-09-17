---
title: "Textarea Field Input"
description: "Multiline field with live character count, max length guard, resize support, and the same label/hint/error pattern as text fields."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/textarea-field-input.md"
markdown: "references/craft/textarea-field-input.md"
license: "MIT"
---

# Textarea Field Input

> Multiline field with live character count, max length guard, resize support, and the same label/hint/error pattern as text fields.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py textarea-field-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextareaFieldInput } from "@/components/inputs/textarea-field-input";

export function TextareaFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TextareaFieldInput />
    </div>
  );
}
```

## API Reference

### TextareaFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
