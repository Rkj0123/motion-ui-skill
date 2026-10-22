---
title: "Cookie consent"
description: "A consent bar that morphs into preferences and folds into a reopen button."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/cookie-consent.md"
markdown: "references/motion/cookie-consent.md"
license: "MIT"
---

# Cookie consent

> A consent bar that morphs into preferences and folds into a reopen button.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cookie-consent --dest ./src
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

import { CookieConsent as CookieConsent } from "@/components/motion/cookie-consent";

export function Example() {
  return (
    <div className="p-6">
      <CookieConsent />
    </div>
  );
}
```
