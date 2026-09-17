---
title: "Team Member Profile Grid"
description: "Responsive team grid with vertical portrait cards — section header plus name, role, bio, and profile link per member."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/team-member-profile-grid.md"
markdown: "references/craft/team-member-profile-grid.md"
license: "MIT"
---

# Team Member Profile Grid

> Responsive team grid with vertical portrait cards — section header plus name, role, bio, and profile link per member.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py team-member-profile-grid --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TeamMemberProfileGrid } from "@/components/profile/team-member-profile-grid";

export function TeamMemberProfileGridDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TeamMemberProfileGrid />
    </div>
  );
}
```

## API Reference

### TeamMemberProfileGrid

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
