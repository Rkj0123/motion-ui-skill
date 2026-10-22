---
title: "Profile Card"
description: "A premium dark social profile card with a painted blue cover-art panel, action row, and a detail panel with avatar, verified name, bio, follower stats, and outbound website link."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/profile-card.md"
markdown: "references/motion/profile-card.md"
license: "MIT"
---

# Profile Card

> A premium dark social profile card with a painted blue cover-art panel, action row, and a detail panel with avatar, verified name, bio, follower stats, and outbound website link.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py profile-card --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ProfileCard as ProfileCard } from "@/components/motion/profile-card";

export function Example() {
  return (
    <div className="p-6">
      <ProfileCard />
    </div>
  );
}
```
