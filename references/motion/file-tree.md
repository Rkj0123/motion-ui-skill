---
title: "File Tree"
description: "Composable file and folder primitives with springing branches, a gliding selection, and complete keyboard navigation."
category: "Components"
publishedAt: "2026-08-27"
updatedAt: "2026-08-27"
documentation: "references/motion/file-tree.md"
markdown: "references/motion/file-tree.md"
license: "MIT"
---

# File Tree

> Composable file and folder primitives with springing branches, a gliding selection, and complete keyboard navigation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py file-tree --dest ./src
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

import {
  Braces,
  FileCode2,
  FileJson2,
  FileText,
  Palette,
} from "lucide-react";
import {
  FileTree,
  FileTreeFile,
  FileTreeFolder,
} from "@/components/motion/file-tree";

export function FileTreePreview() {
  return (
    <div className="flex min-h-[420px] w-full items-start justify-center px-4 pt-10">
      <div className="w-full max-w-xs p-2">
        <FileTree
          defaultValue="file-tree"
          defaultExpandedIds={["app", "components"]}
          ariaLabel="Project files"
        >
          <FileTreeFolder value="app" name="app">
            <FileTreeFolder value="components" name="components">
              <FileTreeFile
                value="file-tree"
                name="file-tree.tsx"
                icon={<Braces className="size-4 text-sky-500" />}
              />
              <FileTreeFile
                value="button"
                name="button.tsx"
                icon={<Braces className="size-4 text-sky-500" />}
              />
            </FileTreeFolder>
            <FileTreeFile
              value="page"
              name="page.tsx"
              icon={<FileCode2 className="size-4 text-sky-500" />}
            />
            <FileTreeFile
              value="styles"
              name="globals.css"
              icon={<Palette className="size-4 text-violet-500" />}
            />
          </FileTreeFolder>
          <FileTreeFolder value="public" name="public">
            <FileTreeFile value="logo" name="logo.svg" />
            <FileTreeFile value="grid" name="grid.svg" />
          </FileTreeFolder>
          <FileTreeFile
            value="package"
            name="package.json"
            icon={<FileJson2 className="size-4 text-amber-500" />}
          />
          <FileTreeFile
            value="readme"
            name="README.md"
            icon={<FileText className="size-4 text-muted-foreground" />}
          />
        </FileTree>
      </div>
    </div>
  );
}
```

## API Reference

### FileTreeFolder

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `name` | `string` | — | Yes | — |
| `icon` | `ReactNode` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `className` | `string` | — | No | — |

### FileTreeFile

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `name` | `string` | — | Yes | — |
| `icon` | `ReactNode` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `className` | `string` | — | No | — |

### FileTree

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string \| null` | — | No | — |
| `defaultValue` | `string \| null` | `null` | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `expandedIds` | `string[]` | — | No | — |
| `defaultExpandedIds` | `string[]` | `[]` | No | — |
| `onExpandedChange` | `((expandedIds: string[]) => void)` | — | No | — |
| `ariaLabel` | `string` | `Files` | No | — |
| `indent` | `number` | `18` | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `FileTreeClassNames` | — | No | — |

