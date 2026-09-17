---
title: "Workspace Switcher"
description: "Rectangular org bar that expands inline — workspace list opens inside the same bordered box, not a floating panel."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/workspace-switcher.md"
markdown: "references/craft/workspace-switcher.md"
license: "MIT"
---

# Workspace Switcher

> Rectangular org bar that expands inline — workspace list opens inside the same bordered box, not a floating panel.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py workspace-switcher --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { WorkspaceSwitcherDropdown } from "@/components/dropdowns/workspace-switcher-dropdown";

export function WorkspaceSwitcherDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <WorkspaceSwitcherDropdown />
    </div>
  );
}
```

## API Reference

### WorkspaceSwitcherDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
