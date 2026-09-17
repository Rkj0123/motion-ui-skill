---
title: "Presence Dock"
description: "Collaborator presence dock with MacDock-sized avatar tiles and expandable member list."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/presence-dock.md"
markdown: "references/craft/presence-dock.md"
license: "MIT"
---

# Presence Dock

> Collaborator presence dock with MacDock-sized avatar tiles and expandable member list.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py presence-dock --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PresenceDock } from "@/components/docks/presence-dock";

export function PresenceDockDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PresenceDock />
    </div>
  );
}
```

## API Reference

### PresenceDock

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
