---
title: "Learn More Hover"
description: "Editorial action link with continuous arrow loop trail, underline reveal, and spring overshoot trajectory on hover."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/learn-more-hover.md"
markdown: "references/motion/learn-more-hover.md"
license: "MIT"
---

# Learn More Hover

> Editorial action link with continuous arrow loop trail, underline reveal, and spring overshoot trajectory on hover.

Micro-interaction from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). On hover, the arrow icon flies out the right edge and re-enters smoothly from the left while the underline expands across the text width.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py learn-more-hover --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LearnMoreHover } from "@/components/motion/learn-more-hover";

export function LearnMoreHoverDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <LearnMoreHover label="Read Architecture Guide" href="/guides" />
    </div>
  );
}
```

## API Reference

### LearnMoreHover

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `label` | `string` | `"Explore Documentation"` | No | Action link text |
| `href` | `string` | `"#"` | No | Destination URL |
| `className` | `string` | — | No | Additional CSS classes |
