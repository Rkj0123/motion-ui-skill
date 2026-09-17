---
title: "Apple iPad"
description: "iPad Air frame with metallic bezel, top-edge buttons, and a full-screen preview slot. Pass variant for space gray, space black, silver, starlight, blue, purple, pink, or yellow finishes. Use visibleRatio to crop from the top, and showCamera to toggle the front camera dot."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ipad.md"
markdown: "references/craft/ipad.md"
license: "MIT"
---

# Apple iPad

> iPad Air frame with metallic bezel, top-edge buttons, and a full-screen preview slot. Pass variant for space gray, space black, silver, starlight, blue, purple, pink, or yellow finishes. Use visibleRatio to crop from the top, and showCamera to toggle the front camera dot.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ipad --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IpadMockupCard } from "@/components/mockups/tablet-mockup-card";

export function IpadMockupCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IpadMockupCard />
    </div>
  );
}
```

## API Reference

### IpadMockupCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
