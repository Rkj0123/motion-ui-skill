---
title: "GitHub Activity"
description: "A contribution heatmap with a footer panel that expands over the grid to rank your top repositories."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/github-activity.md"
markdown: "references/craft/github-activity.md"
license: "MIT"
---

# GitHub Activity

> A contribution heatmap with a footer panel that expands over the grid to rank your top repositories.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py github-activity --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import GithubActivity from "@/components/craft/github-activity";

export function Example() {
  return (
    <div className="p-6">
      <GithubActivity />
    </div>
  );
}
```
