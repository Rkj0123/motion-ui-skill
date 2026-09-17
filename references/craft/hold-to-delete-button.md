---
title: "Hold to Delete"
description: "Press and hold as a fill sweeps across; release early to cancel, hold to the end to delete. Prevents accidental destructive taps."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/hold-to-delete-button.md"
markdown: "references/craft/hold-to-delete-button.md"
license: "MIT"
---

# Hold to Delete

> Press and hold as a fill sweeps across; release early to cancel, hold to the end to delete. Prevents accidental destructive taps.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hold-to-delete-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HoldToDeleteButton } from "@/components/buttons/hold-to-delete-button";

export function HoldToDeleteButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HoldToDeleteButton />
    </div>
  );
}
```

## API Reference

### HoldToDeleteButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
