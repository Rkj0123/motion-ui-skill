---
title: "Editor Tool Dock"
description: "Vertical editor tool dock using MacDock tile size, padding, and ease-smooth hover scale."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/editor-tool-dock.md"
markdown: "references/craft/editor-tool-dock.md"
license: "MIT"
---

# Editor Tool Dock

> Vertical editor tool dock using MacDock tile size, padding, and ease-smooth hover scale.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py editor-tool-dock --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EditorToolDock } from "@/components/docks/editor-tool-dock";

export function EditorToolDockDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EditorToolDock />
    </div>
  );
}
```

## API Reference

### EditorToolDock

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
