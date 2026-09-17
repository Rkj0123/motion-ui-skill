---
title: "Payment Notification"
description: "Payment received on the iOS grid — emerald tile, amount, and sender name."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/payment-notification.md"
markdown: "references/craft/payment-notification.md"
license: "MIT"
---

# Payment Notification

> Payment received on the iOS grid — emerald tile, amount, and sender name.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py payment-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PaymentNotificationBanner } from "@/components/notifications/payment-notification-banner";

export function PaymentNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PaymentNotificationBanner />
    </div>
  );
}
```

## API Reference

### PaymentNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
