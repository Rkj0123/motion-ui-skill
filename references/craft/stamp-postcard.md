---
title: "Stamp Postcard"
description: "Vintage postcard with landscape photo, postage stamp overlay, handwritten message, and posted-from address. Travel and lifestyle brands love this one."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/stamp-postcard.md"
markdown: "references/craft/stamp-postcard.md"
license: "MIT"
---

# Stamp Postcard

> Vintage postcard with landscape photo, postage stamp overlay, handwritten message, and posted-from address. Travel and lifestyle brands love this one.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stamp-postcard --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StampPostcardCard } from "@/components/gallery/stamp-postcard-card";

export function StampPostcardCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StampPostcardCard />
    </div>
  );
}
```

## API Reference

### StampPostcardCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
