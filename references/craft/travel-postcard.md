---
title: "Travel Postcard"
description: "Vintage sepia postcard with map badge, greeting title, location, and author signature. Wanderlust landing pages and newsletter headers."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/travel-postcard.md"
markdown: "references/craft/travel-postcard.md"
license: "MIT"
---

# Travel Postcard

> Vintage sepia postcard with map badge, greeting title, location, and author signature. Wanderlust landing pages and newsletter headers.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py travel-postcard --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TravelPostcardCard } from "@/components/travel/travel-postcard-card";

export function TravelPostcardCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TravelPostcardCard />
    </div>
  );
}
```

## API Reference

### TravelPostcardCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
