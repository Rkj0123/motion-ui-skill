---
title: "Cinder Latch"
description: "Charcoal latch button with a warm ember under-glow, center groove, and face sheen — built for secure-action CTAs."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/cinder-latch-button.md"
markdown: "references/craft/cinder-latch-button.md"
license: "MIT"
---

# Cinder Latch

> Charcoal latch button with a warm ember under-glow, center groove, and face sheen — built for secure-action CTAs.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cinder-latch-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CinderLatchButton } from "@/components/buttons/cinder-latch-button";

export function CinderLatchButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CinderLatchButton />
    </div>
  );
}
```

## API Reference

### CinderLatchButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
