---
title: "Availability Scheduler"
description: "Weekly availability editor where each day springs between available and unavailable, time ranges add and remove with blur-slide motion, times pick from a scrollable dropdown, and a copy menu clones hours to other days."
category: "Blocks"
publishedAt: "2026-07-10"
updatedAt: "2026-08-24"
documentation: "references/blocks/availability-scheduler.md"
markdown: "references/blocks/availability-scheduler.md"
license: "MIT"
---

# Availability Scheduler

> Weekly availability editor where each day springs between available and unavailable, time ranges add and remove with blur-slide motion, times pick from a scrollable dropdown, and a copy menu clones hours to other days.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py availability-scheduler --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AvailabilityScheduler } from "@/components/motion/availability-scheduler";

export function AvailabilitySchedulerPreview() {
  return (
    <div className="flex w-full justify-center">
      <AvailabilityScheduler />
    </div>
  );
}
```

## API Reference

### AvailabilityScheduler

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `WeekAvailability` | — | No | — |
| `defaultValue` | `WeekAvailability` | — | No | — |
| `onChange` | `((value: WeekAvailability) => void)` | — | No | — |
| `step` | `number` | `30` | No | Minutes between selectable times. Default 30. |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
