---
title: "Activity Feed"
description: "A developer telemetry and audit log stream featuring category filtering, live real-time event simulation with Framer Motion slide insertions, and expandable JSON payloads."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/activity-feed.md"
markdown: "references/blocks/activity-feed.md"
license: "MIT"
---

# Activity Feed

> A developer telemetry and audit log stream featuring category filtering, live real-time event simulation with Framer Motion slide insertions, and expandable JSON payloads.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py activity-feed --dest ./src
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

import { ActivityFeed as ActivityFeed } from "@/components/blocks/activity-feed";

export function Example() {
  return (
    <div className="p-6">
      <ActivityFeed />
    </div>
  );
}
```
