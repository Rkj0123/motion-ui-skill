---
title: "Breadcrumb"
description: "Accessible hierarchical breadcrumb navigation with collapsible ellipsis expander, custom separators, and responsive overflow handling."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/breadcrumb.md"
markdown: "references/motion/breadcrumb.md"
license: "MIT"
---

# Breadcrumb

> Accessible hierarchical breadcrumb navigation with collapsible ellipsis expander, custom separators, and responsive overflow handling. Inspired by shadcn/ui and Design System Checklist.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py breadcrumb --dest ./src
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

import { Breadcrumb } from "@/components/motion/breadcrumb";

const PATH = [
  { id: "home", label: "Dashboard", href: "/" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "ai", label: "Agent Pipelines", href: "/projects/agent-pipelines" },
  { id: "runs", label: "Run #1842", href: "/projects/agent-pipelines/runs" },
  { id: "diff", label: "Diff Inspector" },
];

export function BreadcrumbExample() {
  return (
    <div className="p-6 bg-card rounded-2xl border border-border">
      <Breadcrumb items={PATH} maxItems={4} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `BreadcrumbItem[]` | required | Array of breadcrumb nodes with id, label, and href or onClick. |
| `maxItems` | `number` | `4` | Maximum visible path items before collapsing middle steps into an ellipsis. |
| `separator` | `ReactNode` | `<ChevronRight />` | Custom separator element placed between nodes. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
