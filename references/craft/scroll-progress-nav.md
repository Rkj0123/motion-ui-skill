---
title: "Scroll Progress Navigation"
description: "A floating table-of-contents navigation pill that tracks scroll depth, dynamically morphs between resting and floating states, highlights active sections, and enables smooth scrolling."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/scroll-progress-nav.md"
markdown: "references/craft/scroll-progress-nav.md"
license: "MIT"
---

# Scroll Progress Navigation

> A floating table-of-contents navigation pill that tracks scroll depth, dynamically morphs between resting and floating states, highlights active sections, and enables smooth scrolling.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scroll-progress-nav --dest ./src
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

import { ScrollProgressNav as ScrollProgressNav } from "@/components/craft/scroll-progress-nav";

export function Example() {
  return (
    <div className="p-6">
      <ScrollProgressNav />
    </div>
  );
}
```
