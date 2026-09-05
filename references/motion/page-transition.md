---
title: "Page Transition"
description: "Composable page and view transition container supporting fade, slide, scale, push, and 3D flip modes with AnimatePresence."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/page-transition.md"
markdown: "references/motion/page-transition.md"
license: "MIT"
---

# Page Transition

> Composable page and view transition container supporting fade, slide, scale, push, and 3D flip modes with AnimatePresence. Inspired by transitions.dev and Motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py page-transition --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PageTransition } from "@/components/motion/page-transition";
import { useState } from "react";

export function PageTransitionExample() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="p-8 max-w-xl">
      <div className="flex gap-2 mb-6 border-b border-border pb-2">
        {["overview", "analytics", "settings"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
              tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <PageTransition transitionKey={tab} mode="slide">
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h2 className="text-lg font-bold capitalize">{tab} Section</h2>
          <p className="text-xs text-muted-foreground mt-2">
            Dynamic view content rendered with smooth spatial spring transition.
          </p>
        </div>
      </PageTransition>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `transitionKey` | `string \| number` | Required | Key that triggers transition when changed (e.g. pathname or tab id). |
| `mode` | `"fade" \| "slide" \| "scale" \| "push" \| "flip"` | `"fade"` | Transition animation mode. |
| `direction` | `1 \| -1` | `1` | Spatial navigation direction (1 for forward, -1 for backward). |
| `children` | `React.ReactNode` | Required | Content to animate. |
| `className` | `string` | `undefined` | Container classes. |
