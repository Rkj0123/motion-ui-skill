---
title: "Editorial Quote"
description: "Pull quote with issue metadata and a highlighted word inside the line — author and role at the bottom. Built for case studies and long reads."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/editorial-quote.md"
markdown: "references/craft/editorial-quote.md"
license: "MIT"
---

# Editorial Quote

> Pull quote with issue metadata and a highlighted word inside the line — author and role at the bottom. Built for case studies and long reads.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py editorial-quote --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EditorialQuoteCard } from "@/components/text/editorial-quote-card";

export function EditorialQuoteCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EditorialQuoteCard />
    </div>
  );
}
```

## API Reference

### EditorialQuoteCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
