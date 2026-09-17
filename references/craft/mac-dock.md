---
title: "Home"
description: "Frosted macOS-style app dock with smooth hover lift, tooltips, and brand icons — Tailwind-only, no motion library."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/mac-dock.md"
markdown: "references/craft/mac-dock.md"
license: "MIT"
---

# Home

> Frosted macOS-style app dock with smooth hover lift, tooltips, and brand icons — Tailwind-only, no motion library.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py mac-dock --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MacDock } from "@/components/docks/mac-dock";

export function MacDockDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MacDock />
    </div>
  );
}
```

## API Reference

### MacDock

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
