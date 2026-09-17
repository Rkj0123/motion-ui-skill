---
title: "Blob Profile"
description: "Profile card with an organic blob-shaped photo frame, name, verified check, and handle. Stands out from every circular-avatar layout on the web."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/blob-profile.md"
markdown: "references/craft/blob-profile.md"
license: "MIT"
---

# Blob Profile

> Profile card with an organic blob-shaped photo frame, name, verified check, and handle. Stands out from every circular-avatar layout on the web.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py blob-profile --dest ./src
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

import { BlobProfileCard } from "@/components/widgets/blob-profile";

export function BlobProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BlobProfileCard />
    </div>
  );
}
```

## API Reference

### BlobProfileCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
