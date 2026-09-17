---
title: "Neumorphic Soft UI"
description: "Universal soft-UI / neumorphic button — even light and dark shadows. Pass any children. Press flips to an inset look."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/soft-ui-button.md"
markdown: "references/craft/soft-ui-button.md"
license: "MIT"
---

# Neumorphic Soft UI

> Universal soft-UI / neumorphic button — even light and dark shadows. Pass any children. Press flips to an inset look.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py soft-ui-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SoftUiButton } from "@/components/buttons/soft-ui-button";

export function SoftUiButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SoftUiButton />
    </div>
  );
}
```

## API Reference

### SoftUiButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
