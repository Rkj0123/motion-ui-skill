---
title: "Slide to Confirm"
description: "Drag the knob across the track to commit an action — snaps back if you release early, locks green when confirmed. Great for irreversible or high-intent actions."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/slide-to-confirm-button.md"
markdown: "references/craft/slide-to-confirm-button.md"
license: "MIT"
---

# Slide to Confirm

> Drag the knob across the track to commit an action — snaps back if you release early, locks green when confirmed. Great for irreversible or high-intent actions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slide-to-confirm-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SlideToConfirmButton } from "@/components/buttons/slide-to-confirm-button";

export function SlideToConfirmButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SlideToConfirmButton />
    </div>
  );
}
```

## API Reference

### SlideToConfirmButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
