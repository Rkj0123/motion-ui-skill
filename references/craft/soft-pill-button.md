---
title: "Floating Pill"
description: "Floating rounded pill with a soft drop shadow — light or dark. Pass any children. Nudges down slightly on press."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/soft-pill-button.md"
markdown: "references/craft/soft-pill-button.md"
license: "MIT"
---

# Floating Pill

> Floating rounded pill with a soft drop shadow — light or dark. Pass any children. Nudges down slightly on press.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py soft-pill-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SoftPillButton } from "@/components/buttons/soft-pill-button";

export function SoftPillButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SoftPillButton />
    </div>
  );
}
```

## API Reference

### SoftPillButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
