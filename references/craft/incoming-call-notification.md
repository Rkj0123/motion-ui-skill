---
title: "Incoming Call Notification"
description: "Incoming call card — large avatar, caller name, FaceTime label, Accept and Decline buttons."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/incoming-call-notification.md"
markdown: "references/craft/incoming-call-notification.md"
license: "MIT"
---

# Incoming Call Notification

> Incoming call card — large avatar, caller name, FaceTime label, Accept and Decline buttons.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py incoming-call-notification --dest ./src
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

import { IncomingCallNotificationBanner } from "@/components/notifications/incoming-call-notification-banner";

export function IncomingCallNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IncomingCallNotificationBanner />
    </div>
  );
}
```

## API Reference

### IncomingCallNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
