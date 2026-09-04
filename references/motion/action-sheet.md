---
title: "Action Sheet"
description: "Universal mobile action sheet menu with drag gesture dismissal, rubber-band resistance, haptic feedback, and desktop center modal fallback."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/action-sheet.md"
markdown: "references/motion/action-sheet.md"
license: "MIT"
---

# Action Sheet

> Universal mobile action sheet menu with drag gesture dismissal, rubber-band resistance, haptic feedback, and desktop center modal fallback. Inspired by Expo and Apple HIG.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py action-sheet --dest ./src
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

import { ActionSheet, type ActionSheetAction } from "@/components/motion/action-sheet";
import { Copy, Share2, Trash2 } from "lucide-react";
import { useState } from "react";

export function ActionSheetExample() {
  const [isOpen, setIsOpen] = useState(false);

  const actions: ActionSheetAction[] = [
    {
      id: "share",
      label: "Share Workflow Link",
      icon: <Share2 className="size-4" />,
      onClick: () => console.log("Shared"),
    },
    {
      id: "copy",
      label: "Copy Configuration JSON",
      icon: <Copy className="size-4" />,
      onClick: () => console.log("Copied"),
    },
    {
      id: "delete",
      label: "Delete Project",
      icon: <Trash2 className="size-4" />,
      destructive: true,
      onClick: () => console.log("Deleted"),
    },
  ];

  return (
    <div className="p-8">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
      >
        Open Action Sheet
      </button>

      <ActionSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Project Options"
        description="Choose an action to perform on this workspace."
        actions={actions}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | required | Visibility state of the action sheet overlay. |
| `onClose` | `() => void` | required | Callback triggered on backdrop tap, Escape key, or drag dismissal. |
| `title` | `string` | `undefined` | Header title displayed above action items. |
| `description` | `string` | `undefined` | Explanatory subtitle below header title. |
| `actions` | `ActionSheetAction[]` | required | List of action buttons with labels, icons, and destructive flags. |
| `cancelLabel` | `string` | `"Cancel"` | Label text on the bottom dismissal button. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
