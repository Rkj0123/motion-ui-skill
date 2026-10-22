---
title: "Notification center"
description: "A home for updates with read state, grouped information, and animated disclosure."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/notification-center.md"
markdown: "references/blocks/notification-center.md"
license: "MIT"
---

# Notification center

> A home for updates with read state, grouped information, and animated disclosure.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py notification-center --dest ./src
```

## Dependencies

- `@radix-ui/react-popover`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NotificationCenter as NotificationCenter } from "@/components/blocks/notification-center";

export function Example() {
  return (
    <div className="p-6">
      <NotificationCenter />
    </div>
  );
}
```
