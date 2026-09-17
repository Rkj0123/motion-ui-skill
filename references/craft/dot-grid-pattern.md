---
title: "Dot Grid"
description: "Soft dotted grid on neutral paper — watch mockup stages, device demos, and minimal product sections."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dot-grid-pattern.md"
markdown: "references/craft/dot-grid-pattern.md"
license: "MIT"
---

# Dot Grid

> Soft dotted grid on neutral paper — watch mockup stages, device demos, and minimal product sections.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dot-grid-pattern --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DotGridPattern } from "@/components/background-pattern/dot-grid-pattern";

export function DotGridPatternDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DotGridPattern />
    </div>
  );
}
```

## API Reference

### DotGridPattern

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
