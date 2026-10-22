---
title: "Interactive Timeline"
description: "A developer-focused milestone and deployment timeline featuring dynamic progress lines, pulsating status nodes, expandable telemetry cards, and commit hash copy."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/interactive-timeline.md"
markdown: "references/craft/interactive-timeline.md"
license: "MIT"
---

# Interactive Timeline

> A developer-focused milestone and deployment timeline featuring dynamic progress lines, pulsating status nodes, expandable telemetry cards, and commit hash copy.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py interactive-timeline --dest ./src
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

import { InteractiveTimeline as InteractiveTimeline } from "@/components/craft/interactive-timeline";

export function Example() {
  return (
    <div className="p-6">
      <InteractiveTimeline />
    </div>
  );
}
```
