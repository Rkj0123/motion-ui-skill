---
title: "Notification"
description: "Square bell trigger with a gray inset tray — each notification is a small bordered card inside the panel."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/notification.md"
markdown: "references/craft/notification.md"
license: "MIT"
---

# Notification

> Square bell trigger with a gray inset tray — each notification is a small bordered card inside the panel.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NotificationDropdown } from "@/components/dropdowns/notification-dropdown";

export function NotificationDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <NotificationDropdown />
    </div>
  );
}
```

## API Reference

### NotificationDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
