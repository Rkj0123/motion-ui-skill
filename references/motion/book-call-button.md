---
title: "Book Call Button"
description: "A premium "Book a call" pill with a green expanding capsule. At rest, a 36% accent capsule holds a dotted arrow + label; on hover, the capsule fills the pill, the label slides out, and a phone icon with ringing lines fades in centered."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/book-call-button.md"
markdown: "references/motion/book-call-button.md"
license: "MIT"
---

# Book Call Button

> A premium "Book a call" pill with a green expanding capsule. At rest, a 36% accent capsule holds a dotted arrow + label; on hover, the capsule fills the pill, the label slides out, and a phone icon with ringing lines fades in centered.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py book-call-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BookCallButton as BookCallButton } from "@/components/motion/book-call-button";

export function Example() {
  return (
    <div className="p-6">
      <BookCallButton />
    </div>
  );
}
```
