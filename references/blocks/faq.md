---
title: "FAQ"
description: "An FAQ styled as a message thread, with each answer sent as a reply bubble."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/faq.md"
markdown: "references/blocks/faq.md"
license: "MIT"
---

# FAQ

> An FAQ styled as a message thread, with each answer sent as a reply bubble.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py faq --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Faq as Faq } from "@/components/blocks/faq";

export function Example() {
  return (
    <div className="p-6">
      <Faq />
    </div>
  );
}
```
