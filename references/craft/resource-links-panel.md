---
title: "Resource Links Panel"
description: "Resource link list with logo, name, description, and domain per row — same layout as the homepage Resources section. Copy and pass title + items."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/resource-links-panel.md"
markdown: "references/craft/resource-links-panel.md"
license: "MIT"
---

# Resource Links Panel

> Resource link list with logo, name, description, and domain per row — same layout as the homepage Resources section. Copy and pass title + items.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py resource-links-panel --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ResourceLinksPanel } from "@/components/resources/resource-links-panel";

export function ResourceLinksPanelDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ResourceLinksPanel />
    </div>
  );
}
```

## API Reference

### ResourceLinksPanel

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
