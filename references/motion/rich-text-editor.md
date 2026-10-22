---
title: "Rich text editor"
description: "A lightweight editor with markdown shortcuts, a floating toolbar, a slash menu, and HTML and markdown output."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/rich-text-editor.md"
markdown: "references/motion/rich-text-editor.md"
license: "MIT"
---

# Rich text editor

> A lightweight editor with markdown shortcuts, a floating toolbar, a slash menu, and HTML and markdown output.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py rich-text-editor --dest ./src
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

import { RichTextEditor as RichTextEditor } from "@/components/motion/rich-text-editor";

export function Example() {
  return (
    <div className="p-6">
      <RichTextEditor />
    </div>
  );
}
```
