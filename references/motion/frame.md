---
title: "Frame"
description: "Interactive browser/device mockup frame with viewport size toggles (desktop, tablet, mobile) and smooth layout resizing."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/frame.md"
markdown: "references/motion/frame.md"
license: "MIT"
---

# Frame

> Interactive browser/device mockup frame with viewport size toggles (desktop, tablet, mobile) and smooth layout resizing. Inspired by KeenThemes ReUI and ibelick/ui-skills.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py frame --dest ./src
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

import { Frame } from "@/components/motion/frame";

export function FrameExample() {
  return (
    <div className="p-8">
      <Frame url="https://acme.inc/dashboard" defaultViewport="desktop">
        <div className="p-6 space-y-4">
          <h1 className="text-xl font-bold">Analytics Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Responsive preview of the application layout across multiple breakpoints.
          </p>
        </div>
      </Frame>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `url` | `string` | `"https://acme.inc"` | Address bar URL text. |
| `defaultViewport` | `"desktop" \| "tablet" \| "mobile"` | `"desktop"` | Initial viewport width mode. |
| `children` | `React.ReactNode` | Required | Content rendered inside the mockup frame. |
| `className` | `string` | `undefined` | Outer container classes. |
