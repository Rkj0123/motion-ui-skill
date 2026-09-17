---
title: "Notepad"
description: "Sticky notepad with an italic quote, author line, and checkbox task list. Bookmark ribbon on top — good for editorial or productivity layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/notepad.md"
markdown: "references/craft/notepad.md"
license: "MIT"
---

# Notepad

> Sticky notepad with an italic quote, author line, and checkbox task list. Bookmark ribbon on top — good for editorial or productivity layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py notepad --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NotepadCard } from "@/components/text/notepad-card";

export function NotepadCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <NotepadCard />
    </div>
  );
}
```

## API Reference

### NotepadCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
