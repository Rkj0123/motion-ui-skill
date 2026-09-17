---
title: "Deploy Notification"
description: "Deploy alert on the iOS grid — Vercel triangle tile, short status line with project, branch, and duration."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/deploy-notification.md"
markdown: "references/craft/deploy-notification.md"
license: "MIT"
---

# Deploy Notification

> Deploy alert on the iOS grid — Vercel triangle tile, short status line with project, branch, and duration.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py deploy-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DeployNotificationBanner } from "@/components/notifications/deploy-notification-banner";

export function DeployNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DeployNotificationBanner />
    </div>
  );
}
```

## API Reference

### DeployNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
