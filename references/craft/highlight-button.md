---
title: "Highlight Button"
description: "Button with an ambient continuous border highlight tracing its perimeter smoothly on hover."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/highlight-button.md"
markdown: "references/craft/highlight-button.md"
license: "MIT"
---

# Highlight Button

> Button with an ambient continuous border highlight tracing its perimeter smoothly on hover.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py highlight-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HighlightButton } from "@/components/buttons/highlight-button";

export function HighlightButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HighlightButton>Click Me</HighlightButton>
    </div>
  );
}
```

## API Reference

### HighlightButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
