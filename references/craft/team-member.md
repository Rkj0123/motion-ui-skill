---
title: "Team Member"
description: "Full-bleed portrait card — hover reveals GitHub and mail buttons, role, name, and bio. About pages without the generic card grid."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/team-member.md"
markdown: "references/craft/team-member.md"
license: "MIT"
---

# Team Member

> Full-bleed portrait card — hover reveals GitHub and mail buttons, role, name, and bio. About pages without the generic card grid.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py team-member --dest ./src
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

import { TeamMemberCard } from "@/components/users/team-member-card";

export function TeamMemberCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TeamMemberCard />
    </div>
  );
}
```

## API Reference

### TeamMemberCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
