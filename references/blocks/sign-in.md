---
title: "Sign in"
description: "A sign in card that morphs from email to a six digit code to your account."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/sign-in.md"
markdown: "references/blocks/sign-in.md"
license: "MIT"
---

# Sign in

> A sign in card that morphs from email to a six digit code to your account.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sign-in --dest ./src
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

import { SignIn as SignIn } from "@/components/blocks/sign-in";

export function Example() {
  return (
    <div className="p-6">
      <SignIn />
    </div>
  );
}
```
