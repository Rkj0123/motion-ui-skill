---
title: "Newsletter signup"
description: "An email signup framed by a stack of past issues; subscribing drops the next issue, addressed to you, onto the front."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/newsletter-signup.md"
markdown: "references/blocks/newsletter-signup.md"
license: "MIT"
---

# Newsletter signup

> An email signup framed by a stack of past issues; subscribing drops the next issue, addressed to you, onto the front.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py newsletter-signup --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NewsletterSignup as NewsletterSignup } from "@/components/blocks/newsletter-signup";

export function Example() {
  return (
    <div className="p-6">
      <NewsletterSignup />
    </div>
  );
}
```
