---
title: "Ios Earbuds"
description: "AirPods-style widget showing device name and connection status. Small, familiar, and perfect beside other iOS-style controls."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ios-earbuds.md"
markdown: "references/craft/ios-earbuds.md"
license: "MIT"
---

# Ios Earbuds

> AirPods-style widget showing device name and connection status. Small, familiar, and perfect beside other iOS-style controls.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ios-earbuds --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IosEarbudsWidget } from "@/components/widgets/ios-earbuds-widget";

export function IosEarbudsWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IosEarbudsWidget />
    </div>
  );
}
```

## API Reference

### IosEarbudsWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
