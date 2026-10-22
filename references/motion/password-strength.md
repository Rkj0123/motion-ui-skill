---
title: "Password strength"
description: "Show how strong a new password is while it is typed."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/password-strength.md"
markdown: "references/motion/password-strength.md"
license: "MIT"
---

# Password strength

> Show how strong a new password is while it is typed.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py password-strength --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PasswordStrength as PasswordStrength } from "@/components/motion/password-strength";

export function Example() {
  return (
    <div className="p-6">
      <PasswordStrength />
    </div>
  );
}
```
