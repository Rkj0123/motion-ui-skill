---
title: "Spotlight Bar"
description: "Spotlight-style command search in the frosted dock shell — keyboard nav and suggestions."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/spotlight-bar.md"
markdown: "references/craft/spotlight-bar.md"
license: "MIT"
---

# Spotlight Bar

> Spotlight-style command search in the frosted dock shell — keyboard nav and suggestions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spotlight-bar --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SpotlightBar } from "@/components/docks/spotlight-bar";

export function SpotlightBarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SpotlightBar />
    </div>
  );
}
```

## API Reference

### SpotlightBar

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
