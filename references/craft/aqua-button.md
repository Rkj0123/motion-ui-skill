---
title: "Aqua Button"
description: "Glossy pill button inspired by Apple classic Aqua interface, with layered highlights and soft inner glow."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/aqua-button.md"
markdown: "references/craft/aqua-button.md"
license: "MIT"
---

# Aqua Button

> Glossy pill button inspired by Apple classic Aqua interface, with layered highlights and soft inner glow.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py aqua-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AquaButton } from "@/components/buttons/aqua-button";

export function AquaButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AquaButton>Click Me</AquaButton>
    </div>
  );
}
```

## API Reference

### AquaButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `variant` | `"primary" | "secondary"` | "primary" | No | Visual colorway style |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label or icon content |
