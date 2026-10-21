---
title: "Spinner to Check Morph"
description: "Continuous SVG arc loading spinner that morphs smoothly into an animated checkmark path upon async task completion."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/spinner-to-check-morph.md"
markdown: "references/motion/spinner-to-check-morph.md"
license: "MIT"
---

# Spinner to Check Morph

> Continuous SVG arc loading spinner that morphs smoothly into an animated checkmark path upon async task completion.

The canonical success transition from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). The spinning perimeter ring resolves cleanly into a full circle while an SVG checkmark traces itself across the center.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spinner-to-check-morph --dest ./src
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
import { SpinnerToCheckMorph } from "@/components/motion/spinner-to-check-morph";

export function SpinnerToCheckMorphDemo() {
  const [status, setStatus] = useState<"loading" | "success">("loading");

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <SpinnerToCheckMorph status={status} size={48} />
      <button
        type="button"
        onClick={() => setStatus(status === "loading" ? "success" : "loading")}
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
      >
        Toggle Status
      </button>
    </div>
  );
}
```

## API Reference

### SpinnerToCheckMorph

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `status` | `"loading" \| "success" \| "idle"` | `"loading"` | No | Current visual state |
| `size` | `number` | `40` | No | Bounding diameter in pixels |
| `strokeWidth` | `number` | `3.5` | No | SVG stroke width |
| `className` | `string` | — | No | Additional CSS classes |
