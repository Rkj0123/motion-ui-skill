---
title: "Timeline"
description: "Interactive chronological milestone and audit tracker with animated progress lines, status badges, and expandable step disclosures."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/timeline.md"
markdown: "references/motion/timeline.md"
license: "MIT"
---

# Timeline

> Interactive chronological milestone and audit tracker with animated progress lines, status badges, and expandable step disclosures. Inspired by KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py timeline --dest ./src
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

import { Timeline, type TimelineItem } from "@/components/motion/timeline";
import { GitBranch, Rocket, ShieldCheck } from "lucide-react";

const ITEMS: TimelineItem[] = [
  {
    id: "step-1",
    title: "Code Review Approved",
    description: "2 senior engineers signed off on PR #142 across security and performance checks.",
    timestamp: "10:45 AM",
    status: "completed",
    icon: GitBranch,
    tags: ["GitHub", "Verified"],
  },
  {
    id: "step-2",
    title: "Security Sandbox Verification",
    description: "Running automated SAST scanning and container isolation policy tests.",
    timestamp: "10:48 AM",
    status: "current",
    icon: ShieldCheck,
    tags: ["In Progress"],
  },
  {
    id: "step-3",
    title: "Production Deployment",
    description: "Canary rollout to 10% edge traffic nodes across us-east and eu-west.",
    timestamp: "Pending",
    status: "upcoming",
    icon: Rocket,
  },
];

export function TimelineExample() {
  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border">
      <h3 className="text-base font-semibold mb-6">Deployment Pipeline</h3>
      <Timeline items={ITEMS} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `TimelineItem[]` | required | Array of timeline steps with statuses, icons, timestamps, and tags. |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Directional layout of the timeline stream. |
| `collapsible` | `boolean` | `true` | Allows clicking on milestone headers to expand or collapse step details. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
