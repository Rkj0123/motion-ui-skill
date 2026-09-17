---
title: "Segmented Toggle Button"
description: "iOS segmented control — sliding white pill between Day, Week, and Month. Pass your own options array for view modes or filters."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/segmented-toggle-button.md"
markdown: "references/craft/segmented-toggle-button.md"
license: "MIT"
---

# Segmented Toggle Button

> iOS segmented control — sliding white pill between Day, Week, and Month. Pass your own options array for view modes or filters.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py segmented-toggle-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SegmentedToggleButton } from "@/components/buttons/segmented-toggle-button";

export function SegmentedToggleButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SegmentedToggleButton />
    </div>
  );
}
```

## API Reference

### SegmentedToggleButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
