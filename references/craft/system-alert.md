---
title: "System Alert"
description: "Settings-style iOS alert — amber app tile, title: description in one natural line. For storage, limits, and warnings."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/system-alert.md"
markdown: "references/craft/system-alert.md"
license: "MIT"
---

# System Alert

> Settings-style iOS alert — amber app tile, title: description in one natural line. For storage, limits, and warnings.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py system-alert --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SystemAlertBanner } from "@/components/notifications/system-alert-banner";

export function SystemAlertBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SystemAlertBanner />
    </div>
  );
}
```

## API Reference

### SystemAlertBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
