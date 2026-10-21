---
title: "Shiny Button"
description: "Glossy button with high-contrast inner glow layers and a specular glint that sweeps across on every click."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/shiny-button.md"
markdown: "references/craft/shiny-button.md"
license: "MIT"
---

# Shiny Button

> Glossy button with high-contrast inner glow layers and a specular glint that sweeps across on every click.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py shiny-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ShinyButton } from "@/components/buttons/shiny-button";

export function ShinyButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ShinyButton>Click Me</ShinyButton>
    </div>
  );
}
```

## API Reference

### ShinyButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
