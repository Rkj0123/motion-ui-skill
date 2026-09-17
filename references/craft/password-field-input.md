---
title: "Password Field Input"
description: "Password input with show/hide toggle, hint text, and error state. Keeps autocomplete defaults and accessible visibility control."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/password-field-input.md"
markdown: "references/craft/password-field-input.md"
license: "MIT"
---

# Password Field Input

> Password input with show/hide toggle, hint text, and error state. Keeps autocomplete defaults and accessible visibility control.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py password-field-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PasswordFieldInput } from "@/components/inputs/password-field-input";

export function PasswordFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PasswordFieldInput />
    </div>
  );
}
```

## API Reference

### PasswordFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
