---
title: "Password field"
description: "Capture sensitive text with a visible reveal control."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/password-field.md"
markdown: "references/motion/password-field.md"
license: "MIT"
---

# Password field

> Capture sensitive text with a visible reveal control.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py password-field --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PasswordField as PasswordField } from "@/components/motion/password-field";

export function Example() {
  return (
    <div className="p-6">
      <PasswordField />
    </div>
  );
}
```
