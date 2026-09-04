---
title: "Project Folder"
description: "An interactive project folder that opens its file fan on hover or focus, expands into a focus-managed overlay, then retraces the complete path when closed."
category: "Blocks"
publishedAt: "2026-08-15"
updatedAt: "2026-08-20"
documentation: "references/blocks/project-folder.md"
markdown: "references/blocks/project-folder.md"
license: "MIT"
---

# Project Folder

> An interactive project folder that opens its file fan on hover or focus, expands into a focus-managed overlay, then retraces the complete path when closed.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py project-folder --dest ./src
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

import { ProjectFolder } from "@/components/motion/project-folder";

const previews = [
  { id: "moss", color: "bg-emerald-200", mark: "A" },
  { id: "clay", color: "bg-orange-200", mark: "B" },
  { id: "sky", color: "bg-sky-200", mark: "C" },
  { id: "lilac", color: "bg-violet-200", mark: "D" },
  { id: "sand", color: "bg-amber-100", mark: "E" },
].map((preview) => ({
  id: preview.id,
  content: (
    <span className={cn("relative block h-full w-full", preview.color)}>
      <span className="absolute left-3 top-3 h-2 w-8 rounded-full bg-black/15" />
      <span className="absolute inset-x-3 top-8 h-px bg-black/10" />
      <span className="absolute inset-x-3 top-11 h-px bg-black/10" />
      <span className="absolute bottom-3 right-3 text-sm font-medium text-black/50">
        {preview.mark}
      </span>
    </span>
  ),
}));

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectFolderPreview() {
  return (
    <div className="flex min-h-80 w-full items-center justify-center px-6 py-10">
      <ProjectFolder
        title="Brand direction"
        description="Updated recently"
        count={5}
        previews={previews}
        onClick={() => {}}
      />
    </div>
  );
}
```

## API Reference

### ProjectFolder

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `title` | `string` | — | Yes | — |
| `description` | `string` | `Updated recently` | No | — |
| `previews` | `ProjectFolderPreview[]` | `[]` | No | — |
| `count` | `number` | `previews.length` | No | — |
| `itemLabel` | `string` | `file` | No | — |
| `open` | `boolean` | — | No | — |
| `defaultOpen` | `boolean` | `false` | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `expanded` | `boolean` | — | No | — |
| `defaultExpanded` | `boolean` | `false` | No | — |
| `onExpandedChange` | `((expanded: boolean) => void)` | — | No | — |
| `onClick` | `(() => void)` | — | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `ariaLabel` | `string` | — | No | — |
| `className` | `string` | — | No | — |

