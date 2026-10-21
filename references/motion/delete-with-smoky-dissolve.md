---
title: "Delete with Smoky Dissolve"
description: "Interactive delete button trigger that disintegrates its target element into dissolving smoke particles and embers upon confirmation."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/delete-with-smoky-dissolve.md"
markdown: "references/motion/delete-with-smoky-dissolve.md"
license: "MIT"
---

# Delete with Smoky Dissolve

> Interactive delete button trigger that disintegrates its target element into dissolving smoke particles and embers upon confirmation.

Based on the canonical pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Instead of an abrupt element removal or standard fade out, the target card disperses into rising smoke and ash particles before collapsing its footprint.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py delete-with-smoky-dissolve --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DeleteWithSmokyDissolve } from "@/components/motion/delete-with-smoky-dissolve";

export function DeleteWithSmokyDissolveDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <DeleteWithSmokyDissolve
        itemTitle="Contract_2026_Final.pdf"
        onDelete={() => console.log("Item deleted")}
      />
    </div>
  );
}
```

## API Reference

### DeleteWithSmokyDissolve

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `label` | `string` | `"Delete Item"` | No | Action trigger button label |
| `itemTitle` | `string` | `"Project Invoice #1042"` | No | Title of the targeted document or record |
| `onDelete` | `() => void` | — | No | Callback invoked after the smoke particle dissolution completes |
| `className` | `string` | — | No | Additional CSS classes for root container |
