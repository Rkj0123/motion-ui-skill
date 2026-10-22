---
title: "Active Sessions"
description: "Component from ObsidianUI: active-sessions"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/active-sessions.md"
markdown: "references/blocks/active-sessions.md"
license: "MIT"
---

# Active Sessions

> Component from ObsidianUI: active-sessions

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py active-sessions --dest ./src
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

import { ActiveSessions as ActiveSessions } from "@/components/blocks/active-sessions";

export function Example() {
  return (
    <div className="p-6">
      <ActiveSessions />
    </div>
  );
}
```
