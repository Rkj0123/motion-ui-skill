---
title: "Notification Bell"
description: "An iOS-style notification bell with an unread count badge."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/notification-bell.md"
markdown: "references/craft/notification-bell.md"
license: "MIT"
---

# Notification Bell

> An iOS-style notification bell with an unread count badge.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py notification-bell --dest ./src
```

## Dependencies

- `@radix-ui/react-slot`
- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NotificationBell as NotificationBell } from "@/components/craft/notification-bell";

export function Example() {
  return (
    <div className="p-6">
      <NotificationBell />
    </div>
  );
}
```
