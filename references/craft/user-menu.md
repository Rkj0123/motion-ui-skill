---
title: "User Menu"
description: "Account pill with avatar, name, and email that opens into profile, settings, messages, and sign out. The header dropdown every SaaS app needs, with keyboard shortcut labels."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/user-menu.md"
markdown: "references/craft/user-menu.md"
license: "MIT"
---

# User Menu

> Account pill with avatar, name, and email that opens into profile, settings, messages, and sign out. The header dropdown every SaaS app needs, with keyboard shortcut labels.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py user-menu --dest ./src
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

import { UserMenuDropdown } from "@/components/dropdowns/user-menu-dropdown";

export function UserMenuDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <UserMenuDropdown />
    </div>
  );
}
```

## API Reference

### UserMenuDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
