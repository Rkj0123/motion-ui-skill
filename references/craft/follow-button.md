---
title: "Follow Toggle"
description: "Social follow toggle — dark Follow pill becomes a quiet Following state with a user-check icon. Tap again to unfollow."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/follow-button.md"
markdown: "references/craft/follow-button.md"
license: "MIT"
---

# Follow Toggle

> Social follow toggle — dark Follow pill becomes a quiet Following state with a user-check icon. Tap again to unfollow.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py follow-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FollowButton } from "@/components/buttons/follow-button";

export function FollowButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FollowButton />
    </div>
  );
}
```

## API Reference

### FollowButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
