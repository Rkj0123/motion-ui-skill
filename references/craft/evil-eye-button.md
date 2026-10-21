---
title: "Evil Eye Button"
description: "Obsidian pill button with a burning eye behind the label that tracks cursor movement across the viewport."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/evil-eye-button.md"
markdown: "references/craft/evil-eye-button.md"
license: "MIT"
---

# Evil Eye Button

> Obsidian pill button with a burning eye behind the label that tracks cursor movement across the viewport.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py evil-eye-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EvilEyeButton } from "@/components/buttons/evil-eye-button";

export function EvilEyeButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EvilEyeButton>Click Me</EvilEyeButton>
    </div>
  );
}
```

## API Reference

### EvilEyeButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
