---
title: "Apple iPhone"
description: "iPhone 15 Pro frame with Dynamic Island and a full-screen preview slot. Pass variant for purple, orange, white, titanium, or cherry finishes. Use visibleRatio to crop from the top, and showDynamicIsland to toggle the island and camera."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/phone.md"
markdown: "references/craft/phone.md"
license: "MIT"
---

# Apple iPhone

> iPhone 15 Pro frame with Dynamic Island and a full-screen preview slot. Pass variant for purple, orange, white, titanium, or cherry finishes. Use visibleRatio to crop from the top, and showDynamicIsland to toggle the island and camera.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py phone --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";

export function PhoneMockupCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PhoneMockupCard />
    </div>
  );
}
```

## API Reference

### PhoneMockupCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
