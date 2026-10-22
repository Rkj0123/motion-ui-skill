---
title: "CTA section"
description: "A call to action as a centered closing section, a split beside a setup card that completes itself, or a dismissible banner."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/cta-section.md"
markdown: "references/blocks/cta-section.md"
license: "MIT"
---

# CTA section

> A call to action as a centered closing section, a split beside a setup card that completes itself, or a dismissible banner.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cta-section --dest ./src
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

import { CtaSection as CtaSection } from "@/components/blocks/cta-section";

export function Example() {
  return (
    <div className="p-6">
      <CtaSection />
    </div>
  );
}
```
