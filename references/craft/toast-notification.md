---
title: "Toast Notification"
description: "Light snackbar with check icon — message, undo action, slides up on dismiss. For save confirmations and quick feedback."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/toast-notification.md"
markdown: "references/craft/toast-notification.md"
license: "MIT"
---

# Toast Notification

> Light snackbar with check icon — message, undo action, slides up on dismiss. For save confirmations and quick feedback.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py toast-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ToastNotificationBanner } from "@/components/notifications/toast-notification-banner";

export function ToastNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ToastNotificationBanner />
    </div>
  );
}
```

## API Reference

### ToastNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
