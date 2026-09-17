---
title: "Team Members Table"
description: "Team members with profile photos, email, role, and status. Uses /profile-picture.png and /woman.png avatars."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/team-members-table.md"
markdown: "references/craft/team-members-table.md"
license: "MIT"
---

# Team Members Table

> Team members with profile photos, email, role, and status. Uses /profile-picture.png and /woman.png avatars.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py team-members-table --dest ./src
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

import { TeamMembersTable } from "@/components/table/team-members-table";

export function TeamMembersTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TeamMembersTable />
    </div>
  );
}
```

## API Reference

### TeamMembersTable

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
