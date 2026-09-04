---
title: "Morphing Search"
description: "Search field or compact icon that morphs into a glass results surface, whether opened by click or keyboard shortcut."
category: "Blocks"
publishedAt: "2026-08-18"
updatedAt: "2026-08-22"
documentation: "references/blocks/morphing-search.md"
markdown: "references/blocks/morphing-search.md"
license: "MIT"
---

# Morphing Search

> Search field or compact icon that morphs into a glass results surface, whether opened by click or keyboard shortcut.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-search --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Blocks, BookOpen, Bot, FolderOpen, Palette } from "lucide-react";
import {
  MorphingSearch,
  type MorphingSearchItem,
} from "@/components/motion/morphing-search";

const ITEMS: MorphingSearchItem[] = [
  {
    id: "project-folder",
    title: "Project Folder",
    description: "Block · Files and previews",
    keywords: ["files", "overlay"],
    icon: FolderOpen,
  },
  {
    id: "motion-components",
    title: "Motion components",
    description: "Collection · Interaction primitives",
    keywords: ["animation", "components"],
    icon: Blocks,
  },
  {
    id: "agent-interfaces",
    title: "Agent interfaces",
    description: "Collection · AI building blocks",
    keywords: ["ai", "chat"],
    icon: Bot,
  },
  {
    id: "installation",
    title: "Installation guide",
    description: "Documentation · Add your first component",
    keywords: ["setup", "shadcn"],
    icon: BookOpen,
  },
  {
    id: "design-tokens",
    title: "Design tokens",
    description: "Documentation · Color, type, and motion",
    keywords: ["theme", "styles"],
    icon: Palette,
  },
];

export function MorphingSearchPreview() {
  return (
    <div className="flex w-full max-w-[22rem] items-center gap-3">
      <MorphingSearch items={ITEMS} placeholder="Find components" />
      <MorphingSearch
        items={ITEMS}
        placeholder="Find components"
        shortcut=""
        iconOnly
      />
    </div>
  );
}
```

## API Reference

### MorphingSearch

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `MorphingSearchItem[]` | — | Yes | — |
| `placeholder` | `string` | `Search` | No | — |
| `shortcut` | `string` | `f` | No | — |
| `iconOnly` | `boolean` | `false` | No | Render the closed trigger as a compact search icon. |
| `emptyMessage` | `string` | `No results found.` | No | — |
| `open` | `boolean` | — | No | — |
| `defaultOpen` | `boolean` | `false` | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `onQueryChange` | `((query: string) => void)` | — | No | — |
| `onSelect` | `((item: MorphingSearchItem) => void)` | — | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
