---
title: "App Dock"
description: "Bottom app launcher dock matching MacDock shell, spacing, and hover lift — with active state and optional labels."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/app-dock.md"
markdown: "references/craft/app-dock.md"
license: "MIT"
---

# App Dock

> Bottom app launcher dock matching MacDock shell, spacing, and hover lift — with active state and optional labels.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py app-dock --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AppDock } from "@/components/docks/app-dock";

export function AppDockDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AppDock />
    </div>
  );
}
```

## API Reference

### AppDock

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
