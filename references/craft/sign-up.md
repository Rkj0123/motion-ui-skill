---
title: "Sign Up"
description: "A comprehensive registration card with live password strength metrics, password confirmation matching, terms validation, and social onboarding."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/sign-up.md"
markdown: "references/craft/sign-up.md"
license: "MIT"
---

# Sign Up

> A comprehensive registration card with live password strength metrics, password confirmation matching, terms validation, and social onboarding.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sign-up --dest ./src
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

import { SignUp as SignUp } from "@/components/craft/sign-up";

export function Example() {
  return (
    <div className="p-6">
      <SignUp />
    </div>
  );
}
```
