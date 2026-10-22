---
title: "Centered login"
description: "A passkey-first login card on a quiet ring backdrop that morphs through email and code."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/login-centered.md"
markdown: "references/blocks/login-centered.md"
license: "MIT"
---

# Centered login

> A passkey-first login card on a quiet ring backdrop that morphs through email and code.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py login-centered --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LoginCentered as LoginCentered } from "@/components/blocks/login-centered";

export function Example() {
  return (
    <div className="p-6">
      <LoginCentered />
    </div>
  );
}
```
