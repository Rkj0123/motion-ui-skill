---
title: "Aspect Ratio"
description: "Animated aspect ratio container maintaining strict geometric proportions with skeleton shimmer underlay."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/aspect-ratio.md"
markdown: "references/motion/aspect-ratio.md"
license: "MIT"
---

# Aspect Ratio

> Animated aspect ratio container maintaining strict geometric proportions with skeleton shimmer underlay. Inspired by shadcn/ui and Motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py aspect-ratio --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AspectRatio } from "@/components/motion/aspect-ratio";

export function AspectRatioExample() {
  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border">
      <AspectRatio ratio={16 / 9} showSkeleton={true}>
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
          alt="Abstract geometric architecture"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ratio` | `number` | `16 / 9` | Desired aspect ratio width / height (e.g. 16/9, 4/3, 1). |
| `children` | `ReactNode` | required | Media or content rendered within the container. |
| `showSkeleton` | `boolean` | `true` | Displays placeholder skeleton pulse while content loads. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
