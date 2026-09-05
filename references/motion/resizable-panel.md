---
title: "Resizable Panel"
description: "Accessible multi-direction split container with smooth pointer dragging, keyboard ratio controls, and boundary snapping."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/resizable-panel.md"
markdown: "references/motion/resizable-panel.md"
license: "MIT"
---

# Resizable Panel

> Accessible multi-direction split container with smooth pointer dragging, keyboard ratio controls, and boundary snapping. Inspired by shadcn/ui and React Resizable Panels.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py resizable-panel --dest ./src
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

import { ResizablePanelGroup } from "@/components/motion/resizable-panel";

export function ResizablePanelExample() {
  return (
    <div className="h-96 w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        defaultSize={40}
        minSize={25}
        maxSize={75}
        panelA={
          <div className="p-4 bg-muted/20 h-full">
            <h3 className="text-sm font-semibold">Left Sidebar</h3>
            <p className="text-xs text-muted-foreground mt-2">File tree and navigation</p>
          </div>
        }
        panelB={
          <div className="p-4 bg-card h-full">
            <h3 className="text-sm font-semibold">Editor Surface</h3>
            <p className="text-xs text-muted-foreground mt-2">Main workspace</p>
          </div>
        }
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `direction` | `"horizontal" \| "vertical"` | `"horizontal"` | Split orientation. |
| `defaultSize` | `number` | `50` | Default percentage width/height for panel A. |
| `minSize` | `number` | `20` | Minimum percentage for panel A. |
| `maxSize` | `number` | `80` | Maximum percentage for panel A. |
| `panelA` | `React.ReactNode` | Required | First panel content. |
| `panelB` | `React.ReactNode` | Required | Second panel content. |
| `onResize` | `(size: number) => void` | `undefined` | Callback invoked when split ratio changes. |
| `className` | `string` | `undefined` | Outer container classes. |
