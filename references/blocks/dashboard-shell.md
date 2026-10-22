---
title: "Dashboard Shell"
description: "Component from ObsidianUI: dashboard-shell"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/dashboard-shell.md"
markdown: "references/blocks/dashboard-shell.md"
license: "MIT"
---

# Dashboard Shell

> Component from ObsidianUI: dashboard-shell

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dashboard-shell --dest ./src
```

## Dependencies

- `@radix-ui/react-alert-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-popover`
- `@radix-ui/react-tabs`
- `class-variance-authority`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DashboardShell as DashboardShell } from "@/components/blocks/dashboard-shell";

export function Example() {
  return (
    <div className="p-6">
      <DashboardShell />
    </div>
  );
}
```
