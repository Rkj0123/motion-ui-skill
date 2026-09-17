---
title: "Apple Notification"
description: "Frosted iOS notification with app name, sender, message, and avatar — dismisses with animation and can be triggered again via button."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/apple-notification.md"
markdown: "references/craft/apple-notification.md"
license: "MIT"
---

# Apple Notification

> Frosted iOS notification with app name, sender, message, and avatar — dismisses with animation and can be triggered again via button.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py apple-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AppleNotificationBanner } from "@/components/notifications/apple-notification-banner";

export function AppleNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AppleNotificationBanner />
    </div>
  );
}
```

## API Reference

### AppleNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
