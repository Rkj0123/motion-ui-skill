---
title: "Dark Midnight Mesh"
description: "Midnight frost mesh with whisper-soft grid, teal and sky blooms, and a gentle vignette — dashboards, terminals, and refined dark UI."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-midnight-mesh-background.md"
markdown: "references/craft/dark-midnight-mesh-background.md"
license: "MIT"
---

# Dark Midnight Mesh

> Midnight frost mesh with whisper-soft grid, teal and sky blooms, and a gentle vignette — dashboards, terminals, and refined dark UI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-midnight-mesh-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkMidnightMeshBackground } from "@/components/background-gradient/dark-midnight-mesh-background";

export function DarkMidnightMeshBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkMidnightMeshBackground />
    </div>
  );
}
```

## API Reference

### DarkMidnightMeshBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
