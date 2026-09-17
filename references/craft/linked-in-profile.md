---
title: "Linked In Profile"
description: "LinkedIn profile card with cover photo, avatar, headline, stats, bio, and Connect/Message buttons. Professional social, component-sized."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/linked-in-profile.md"
markdown: "references/craft/linked-in-profile.md"
license: "MIT"
---

# Linked In Profile

> LinkedIn profile card with cover photo, avatar, headline, stats, bio, and Connect/Message buttons. Professional social, component-sized.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py linked-in-profile --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LinkedInProfileCard } from "@/components/socials/linked-in-profile-card";

export function LinkedInProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LinkedInProfileCard />
    </div>
  );
}
```

## API Reference

### LinkedInProfileCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
