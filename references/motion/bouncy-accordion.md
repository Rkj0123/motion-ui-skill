---
title: "Bouncy Accordion"
description: "Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals."
category: "Components"
publishedAt: "2026-06-16"
updatedAt: "2026-07-13"
documentation: "references/motion/bouncy-accordion.md"
markdown: "references/motion/bouncy-accordion.md"
license: "MIT"
---

# Bouncy Accordion

> Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py bouncy-accordion --dest ./src
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

import {
  CalendarClock,
  FileText,
  FolderKanban,
  PackageCheck,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { BouncyAccordion } from "@/components/motion/bouncy-accordion";

const items = [
  {
    id: "brief",
    title: "Release Brief",
    description:
      "Collect launch notes, owners, and risks in one compact handoff before the release window opens.",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: "launch",
    title: "Launch Checklist",
    description:
      "Verify copy, links, analytics, rollback steps, and final approvals without leaving the queue.",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
  {
    id: "campaign",
    title: "Campaign Notes",
    description:
      "Keep channel-specific notes close to the task while preserving a calm collapsed list.",
    icon: <RadioTower className="h-4 w-4" />,
  },
  {
    id: "calendar",
    title: "Rollout Calendar",
    description:
      "Plan announcements, staging checks, reminders, and quiet periods around the same timeline.",
    icon: <CalendarClock className="h-4 w-4" />,
  },
  {
    id: "ship",
    title: "Ship Build",
    description:
      "Track the current artifact, deploy status, and final sign-off before marking the release complete.",
    icon: <PackageCheck className="h-4 w-4" />,
  },
  {
    id: "archive",
    title: "Archive Assets",
    description:
      "Move final copy, images, and source files into the campaign folder once the rollout is done.",
    icon: <FolderKanban className="h-4 w-4" />,
  },
];

export function BouncyAccordionPreview() {
  return (
    <div className="flex min-h-96 w-full items-center justify-center">
      <div className="w-full max-w-sm h-[480px]">
        <BouncyAccordion items={items} defaultValue="calendar" />
      </div>
    </div>
  );
}
```

## API Reference

### BouncyAccordion

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `BouncyAccordionItem[]` | — | Yes | — |
| `value` | `string \| null` | — | No | — |
| `defaultValue` | `string \| null` | `null` | No | — |
| `onValueChange` | `((value: string \| null) => void)` | — | No | — |
| `collapsible` | `boolean` | `true` | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `BouncyAccordionClassNames` | — | No | — |

