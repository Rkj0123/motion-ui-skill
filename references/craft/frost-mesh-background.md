---
title: "Frost Mesh"
description: "Cool frost-white mesh with teal and emerald corner washes — SaaS dashboards, health apps, and minimal product launches."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/frost-mesh-background.md"
markdown: "references/craft/frost-mesh-background.md"
license: "MIT"
---

# Frost Mesh

> Cool frost-white mesh with teal and emerald corner washes — SaaS dashboards, health apps, and minimal product launches.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py frost-mesh-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FrostMeshBackground } from "@/components/background-gradient/frost-mesh-background";

export function FrostMeshBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FrostMeshBackground />
    </div>
  );
}
```

## API Reference

### FrostMeshBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
