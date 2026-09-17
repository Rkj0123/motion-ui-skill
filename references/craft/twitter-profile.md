---
title: "Twitter Profile"
description: "Twitter/X profile with cover, avatar, bio, location, website link, and follower counts. Follow button included."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/twitter-profile.md"
markdown: "references/craft/twitter-profile.md"
license: "MIT"
---

# Twitter Profile

> Twitter/X profile with cover, avatar, bio, location, website link, and follower counts. Follow button included.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py twitter-profile --dest ./src
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

import { TwitterProfileCard } from "@/components/socials/twitter-profile-card";

export function TwitterProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TwitterProfileCard />
    </div>
  );
}
```

## API Reference

### TwitterProfileCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
