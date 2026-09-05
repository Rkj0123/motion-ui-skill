---
title: "Card Resize (Morph)"
description: "Expanding card container that morphs seamlessly from a compact card to an expanded modal dialog using shared layoutId physics."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/card-resize.md"
markdown: "references/motion/card-resize.md"
license: "MIT"
---

# Card Resize (Morph)

> Expanding card container that morphs seamlessly from a compact card to an expanded modal dialog using shared `layoutId` physics. Inspired by transitions.dev and ibelick/ui-skills.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py card-resize --dest ./src
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

import { CardResize } from "@/components/motion/card-resize";

export function CardResizeExample() {
  return (
    <div className="max-w-sm p-8">
      <CardResize
        card={{
          id: "design-systems",
          category: "Architecture",
          title: "Building World-Class Design Systems",
          description: "Explore the end-to-end token pipelines, component anatomy, and accessibility contracts required for scalable enterprise frontends.",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
        }}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `card` | `CardResizeItem` | Required | Object with id, title, category, description, and optional image. |
| `className` | `string` | `undefined` | Container classes for resting state. |
