---
title: "Ios Calender"
description: "Today's date in the classic iOS calendar tile — red weekday, big day number, month underneath. Updates live, no refresh needed."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ios-calender.md"
markdown: "references/craft/ios-calender.md"
license: "MIT"
---

# Ios Calender

> Today's date in the classic iOS calendar tile — red weekday, big day number, month underneath. Updates live, no refresh needed.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ios-calender --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IosCalenderWidget } from "@/components/widgets/ios-calender-widget";

export function IosCalenderWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IosCalenderWidget />
    </div>
  );
}
```

## API Reference

### IosCalenderWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
