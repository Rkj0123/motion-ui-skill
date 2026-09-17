---
title: "Switch Field Input"
description: "Toggle switch with role=switch, keyboard support, hidden input for forms, and label/hint/error layout."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/switch-field-input.md"
markdown: "references/craft/switch-field-input.md"
license: "MIT"
---

# Switch Field Input

> Toggle switch with role=switch, keyboard support, hidden input for forms, and label/hint/error layout.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py switch-field-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SwitchFieldInput } from "@/components/inputs/switch-field-input";

export function SwitchFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SwitchFieldInput />
    </div>
  );
}
```

## API Reference

### SwitchFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
