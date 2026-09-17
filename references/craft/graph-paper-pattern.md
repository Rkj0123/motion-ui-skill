---
title: "Graph Paper"
description: "Clean square grid for sketches, wireframes, and planning boards — subtle ink lines on white."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/graph-paper-pattern.md"
markdown: "references/craft/graph-paper-pattern.md"
license: "MIT"
---

# Graph Paper

> Clean square grid for sketches, wireframes, and planning boards — subtle ink lines on white.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py graph-paper-pattern --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GraphPaperPattern } from "@/components/background-pattern/graph-paper-pattern";

export function GraphPaperPatternDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GraphPaperPattern />
    </div>
  );
}
```

## API Reference

### GraphPaperPattern

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
