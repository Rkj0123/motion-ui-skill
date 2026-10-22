---
title: "Changelog feed"
description: "Release notes you can filter, open in place, and scroll through month by month."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/changelog-feed.md"
markdown: "references/blocks/changelog-feed.md"
license: "MIT"
---

# Changelog feed

> Release notes you can filter, open in place, and scroll through month by month.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py changelog-feed --dest ./src
```

## Dependencies

- `@halden/node`
- `clsx`
- `lucide-react`
- `motion`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ChangelogFeed as ChangelogFeed } from "@/components/blocks/changelog-feed";

export function Example() {
  return (
    <div className="p-6">
      <ChangelogFeed />
    </div>
  );
}
```
