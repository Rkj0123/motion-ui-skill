---
title: "Delivery Notification"
description: "Shipping update — package icon, delivery status, ETA, and order number in a compact row."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/delivery-notification.md"
markdown: "references/craft/delivery-notification.md"
license: "MIT"
---

# Delivery Notification

> Shipping update — package icon, delivery status, ETA, and order number in a compact row.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py delivery-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DeliveryNotificationBanner } from "@/components/notifications/delivery-notification-banner";

export function DeliveryNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DeliveryNotificationBanner />
    </div>
  );
}
```

## API Reference

### DeliveryNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
