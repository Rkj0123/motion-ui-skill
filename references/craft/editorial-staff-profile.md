---
title: "Editorial Staff Profile"
description: "Numbered editorial roster row with serif name, uppercase role, and a square photo. Built for about pages and team indexes."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/editorial-staff-profile.md"
markdown: "references/craft/editorial-staff-profile.md"
license: "MIT"
---

# Editorial Staff Profile

> Numbered editorial roster row with serif name, uppercase role, and a square photo. Built for about pages and team indexes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py editorial-staff-profile --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EditorialStaffProfileCard } from "@/components/profile/editorial-staff-profile-card";

export function EditorialStaffProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EditorialStaffProfileCard />
    </div>
  );
}
```

## API Reference

### EditorialStaffProfileCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
