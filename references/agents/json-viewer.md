---
title: "JSON viewer"
description: "A collapsible JSON tree with search, paging for long arrays, and copy value or path."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/json-viewer.md"
markdown: "references/agents/json-viewer.md"
license: "MIT"
---

# JSON viewer

> A collapsible JSON tree with search, paging for long arrays, and copy value or path.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py json-viewer --dest ./src
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

import { JsonViewer as JsonViewer } from "@/components/agents/json-viewer";

export function Example() {
  return (
    <div className="p-6">
      <JsonViewer />
    </div>
  );
}
```
