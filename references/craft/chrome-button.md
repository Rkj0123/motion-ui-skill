---
title: "Chrome Button"
description: "Metallic pill button whose border is a ring of flowing liquid chrome reflection around a solid face."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/chrome-button.md"
markdown: "references/craft/chrome-button.md"
license: "MIT"
---

# Chrome Button

> Metallic pill button whose border is a ring of flowing liquid chrome reflection around a solid face.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chrome-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ChromeButton } from "@/components/buttons/chrome-button";

export function ChromeButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ChromeButton>Click Me</ChromeButton>
    </div>
  );
}
```

## API Reference

### ChromeButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `size` | `"default" | "compact" | "icon"` | "default" | No | Button dimensions and padding scale |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
