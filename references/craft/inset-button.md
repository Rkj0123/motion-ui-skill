---
title: "Recessed Inset"
description: "Recessed inset button — looks pressed into the surface. Light or dark variant. Pass any children."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/inset-button.md"
markdown: "references/craft/inset-button.md"
license: "MIT"
---

# Recessed Inset

> Recessed inset button — looks pressed into the surface. Light or dark variant. Pass any children.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py inset-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InsetButton } from "@/components/buttons/inset-button";

export function InsetButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <InsetButton />
    </div>
  );
}
```

## API Reference

### InsetButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
