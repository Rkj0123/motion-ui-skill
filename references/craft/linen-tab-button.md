---
title: "Linen Tab"
description: "Woven linen tab with dashed stitch borders and a soft fold sheen — warm, editorial, and understated."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/linen-tab-button.md"
markdown: "references/craft/linen-tab-button.md"
license: "MIT"
---

# Linen Tab

> Woven linen tab with dashed stitch borders and a soft fold sheen — warm, editorial, and understated.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py linen-tab-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LinenTabButton } from "@/components/buttons/linen-tab-button";

export function LinenTabButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LinenTabButton />
    </div>
  );
}
```

## API Reference

### LinenTabButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
