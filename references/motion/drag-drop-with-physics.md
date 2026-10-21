---
title: "Drag Drop with Physics"
description: "Physics-based drag-and-drop card surface with rotational inertia, velocity preservation, and magnetic slot snapping."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/drag-drop-with-physics.md"
markdown: "references/motion/drag-drop-with-physics.md"
license: "MIT"
---

# Drag Drop with Physics

> Physics-based drag-and-drop card surface with rotational inertia, velocity preservation, and magnetic slot snapping.

Synthesized from the interaction patterns in [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Unlike rigid standard drag implementations, this component uses angular tilt proportional to lateral velocity and spring settling on release.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py drag-drop-with-physics --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DragDropWithPhysics } from "@/components/motion/drag-drop-with-physics";

export function DragDropWithPhysicsDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <DragDropWithPhysics
        title="Implement View Transitions"
        category="Frontend"
        onDropInZone={(zone) => console.log("Dropped into zone:", zone)}
      />
    </div>
  );
}
```

## API Reference

### DragDropWithPhysics

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `title` | `string` | `"Design System Refactor"` | No | Card header label |
| `category` | `string` | `"Engineering"` | No | Pill tag shown on top-left of card |
| `onDropInZone` | `(zoneId: string) => void` | — | No | Callback fired when item crosses threshold into target |
| `className` | `string` | — | No | Additional CSS classes for root container |
