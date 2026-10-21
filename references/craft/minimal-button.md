---
title: "Minimal Button"
description: "Quiet dark button with hairline ring, inner specular highlight, soft shadow, and subtle chevron hover nudge."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/minimal-button.md"
markdown: "references/craft/minimal-button.md"
license: "MIT"
---

# Minimal Button

> Quiet dark button with hairline ring, inner specular highlight, soft shadow, and subtle chevron hover nudge.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py minimal-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MinimalButton } from "@/components/buttons/minimal-button";

export function MinimalButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MinimalButton>Click Me</MinimalButton>
    </div>
  );
}
```

## API Reference

### MinimalButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
