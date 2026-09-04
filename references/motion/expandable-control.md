---
title: "Expandable Control"
description: "Click-to-expand button and chip controls that reveal a label or trailing action through spring layout continuity."
category: "Components"
publishedAt: "2026-08-22"
updatedAt: "2026-08-22"
documentation: "references/motion/expandable-control.md"
markdown: "references/motion/expandable-control.md"
license: "MIT"
---

# Expandable Control

> Click-to-expand button and chip controls that reveal a label or trailing action through spring layout continuity.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expandable-control --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Bell, X } from "lucide-react";
import {
  ExpandableButton,
  ExpandableChip,
} from "@/components/motion/expandable-control";

export function ExpandableControlPreview() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <ExpandableButton
          icon={<Bell className="size-4" />}
          label="Notifications"
        />
      </div>
      <div className="flex items-center gap-2">
        <ExpandableChip
          label="React"
          actionIcon={<X className="size-3.5" />}
          actionLabel="Remove React"
        />
      </div>
    </div>
  );
}
```

## API Reference

### ExpandableButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `icon` | `ReactNode` | — | Yes | — |
| `label` | `ReactNode` | — | Yes | — |
| `className` | `string` | — | No | — |

### ExpandableChip

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | — | Yes | — |
| `actionIcon` | `ReactNode` | — | Yes | — |
| `actionLabel` | `string` | — | Yes | — |
| `onAction` | `(() => void)` | — | No | — |
| `collapseOnAction` | `boolean` | `true` | No | — |
| `disabled` | `boolean` | — | No | — |
| `className` | `string` | — | No | — |
| `labelClassName` | `string` | — | No | — |
| `actionClassName` | `string` | — | No | — |
| `expanded` | `boolean` | — | No | — |
| `defaultExpanded` | `boolean` | — | No | — |
| `onExpandedChange` | `((expanded: boolean) => void)` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
