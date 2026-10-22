---
title: "Web Search"
description: "The sources behind an AI answer, shown as a search pill, source cards, a streaming answer, and inline citations."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/web-search.md"
markdown: "references/agents/web-search.md"
license: "MIT"
---

# Web Search

> The sources behind an AI answer, shown as a search pill, source cards, a streaming answer, and inline citations.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py web-search --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import WebSearch from "@/components/agents/web-search";

export function Example() {
  return (
    <div className="p-6">
      <WebSearch />
    </div>
  );
}
```
