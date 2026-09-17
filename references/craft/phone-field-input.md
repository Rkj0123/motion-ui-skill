---
title: "Phone Field Input"
description: "Phone field with dial-code prefix and live US-style formatting. Returns raw digits via onChange for validation and API calls."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/phone-field-input.md"
markdown: "references/craft/phone-field-input.md"
license: "MIT"
---

# Phone Field Input

> Phone field with dial-code prefix and live US-style formatting. Returns raw digits via onChange for validation and API calls.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py phone-field-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PhoneFieldInput } from "@/components/inputs/phone-field-input";

export function PhoneFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PhoneFieldInput />
    </div>
  );
}
```

## API Reference

### PhoneFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
