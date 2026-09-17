---
title: "Email Notification"
description: "Mail alert on the iOS grid — sender avatar, app name header, natural from: subject — preview body line."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/email-notification.md"
markdown: "references/craft/email-notification.md"
license: "MIT"
---

# Email Notification

> Mail alert on the iOS grid — sender avatar, app name header, natural from: subject — preview body line.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py email-notification --dest ./src
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

import { EmailNotificationBanner } from "@/components/notifications/email-notification-banner";

export function EmailNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EmailNotificationBanner />
    </div>
  );
}
```

## API Reference

### EmailNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
