---
title: "Command Palette"
description: "⌘K palette with fuzzy filter, spring-animated active row and glass surface."
category: "Blocks"
publishedAt: "2026-05-17"
updatedAt: "2026-08-22"
documentation: "references/blocks/command-palette.md"
markdown: "references/blocks/command-palette.md"
license: "MIT"
---

# Command Palette

> ⌘K palette with fuzzy filter, spring-animated active row and glass surface.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py command-palette --dest ./src
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

import { FileText, Home, Plus, Settings, User } from "lucide-react";
import { useState } from "react";
import { CommandPalette } from "@/components/motion/command-palette";

export function CommandPalettePreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Open command palette
      </button>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-xs text-foreground">
          ⌘ J
        </kbd>{" "}
        (or <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-xs text-foreground">Ctrl J</kbd>) to open.
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        shortcut="j"
        items={[
          { id: "home", label: "Go to Home", group: "Navigation", icon: Home, hint: "G H", onSelect: () => {} },
          { id: "profile", label: "Open profile", group: "Navigation", icon: User, hint: "G P", onSelect: () => {} },
          { id: "settings", label: "Settings", group: "Navigation", icon: Settings, onSelect: () => {} },
          { id: "new-doc", label: "Create document", group: "Actions", icon: FileText, hint: "⌘ N", onSelect: () => {} },
          { id: "new-project", label: "New project", group: "Actions", icon: Plus, hint: "⌘ ⇧ N", onSelect: () => {} },
        ]}
      />
    </div>
  );
}
```

## API Reference

### CommandPalette

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `CommandItem[]` | — | Yes | — |
| `shortcut` | `string` | `k` | No | Opens with Cmd/Ctrl + this key. Default: "k" |
| `placeholder` | `string` | `Type a command or search…` | No | — |
| `emptyMessage` | `string` | `No results found.` | No | — |
| `open` | `boolean` | — | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
