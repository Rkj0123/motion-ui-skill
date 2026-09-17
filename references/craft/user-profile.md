---
title: "User Profile"
description: "Author byline on warm editorial paper — square portrait, serif name, and text links. Built for personal sites and portfolio sidebars."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/user-profile.md"
markdown: "references/craft/user-profile.md"
license: "MIT"
---

# User Profile

> Author byline on warm editorial paper — square portrait, serif name, and text links. Built for personal sites and portfolio sidebars.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py user-profile --dest ./src
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

import { UserProfileCard } from "@/components/profile/user-profile-card";

export function UserProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <UserProfileCard />
    </div>
  );
}
```

## API Reference

### UserProfileCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
