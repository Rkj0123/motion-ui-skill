---
title: "Skeleton Loader and Reveal"
description: "Adaptive content skeleton with rhythmic shimmer wave that cross-fades directly into live UI surfaces with zero cumulative layout shift."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/skeleton-loader-and-reveal.md"
markdown: "references/motion/skeleton-loader-and-reveal.md"
license: "MIT"
---

# Skeleton Loader and Reveal

> Adaptive content skeleton with rhythmic shimmer wave that cross-fades directly into live UI surfaces with zero cumulative layout shift.

The canonical progressive loading pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Preserves exact bounding dimensions between loading skeletons and incoming data cards, using directional blur crossfades.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py skeleton-loader-and-reveal --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { SkeletonLoaderAndReveal } from "@/components/motion/skeleton-loader-and-reveal";

export function SkeletonLoaderAndRevealDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <SkeletonLoaderAndReveal isLoading={loading} />
      <button
        type="button"
        onClick={() => setLoading(!loading)}
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
      >
        Toggle Loaded State
      </button>
    </div>
  );
}
```

## API Reference

### SkeletonLoaderAndReveal

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `isLoading` | `boolean` | `true` | No | Current loading status |
| `skeletonContent` | `React.ReactNode` | Default profile skeleton | No | Custom skeleton placeholder UI |
| `children` | `React.ReactNode` | Default card content | No | Live populated UI surface |
| `className` | `string` | — | No | Additional CSS classes |
