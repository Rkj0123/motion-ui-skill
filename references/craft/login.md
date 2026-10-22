---
title: "Login"
description: "A production-ready authentication card built with the EasyUI form system, featuring password show/hide, remember me, validation states, and social logins."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/login.md"
markdown: "references/craft/login.md"
license: "MIT"
---

# Login

> A production-ready authentication card built with the EasyUI form system, featuring password show/hide, remember me, validation states, and social logins.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py login --dest ./src
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

import { Login as Login } from "@/components/craft/login";

export function Example() {
  return (
    <div className="p-6">
      <Login />
    </div>
  );
}
```
