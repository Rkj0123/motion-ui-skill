---
title: "Brutal Button"
description: "Neo-brutalism button with stark borders, solid drop shadows, and high-contrast tactile depression."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/brutal-button.md"
markdown: "references/craft/brutal-button.md"
license: "MIT"
---

# Brutal Button

> Neo-brutalism button with stark borders, solid drop shadows, and high-contrast tactile depression.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py brutal-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BrutalButton } from "@/components/buttons/brutal-button";

export function BrutalButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BrutalButton>Click Me</BrutalButton>
    </div>
  );
}
```

## API Reference

### BrutalButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label or icon content |
