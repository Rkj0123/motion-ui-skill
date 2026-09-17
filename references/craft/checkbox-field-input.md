---
title: "Checkbox Field Input"
description: "Accessible checkbox with custom mark, inline label, hint, and error. Controlled or uncontrolled checked state."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/checkbox-field-input.md"
markdown: "references/craft/checkbox-field-input.md"
license: "MIT"
---

# Checkbox Field Input

> Accessible checkbox with custom mark, inline label, hint, and error. Controlled or uncontrolled checked state.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py checkbox-field-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CheckboxFieldInput } from "@/components/inputs/checkbox-field-input";

export function CheckboxFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CheckboxFieldInput />
    </div>
  );
}
```

## API Reference

### CheckboxFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
