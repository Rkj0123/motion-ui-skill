---
title: "Dock"
description: "macOS-style dock with grouped actions and a gliding active pill."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-07-13"
documentation: "references/motion/dock.md"
markdown: "references/motion/dock.md"
license: "MIT"
---

# Dock

> macOS-style dock with grouped actions and a gliding active pill.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dock --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Calendar, Home, Mail, Music, Settings, Sparkles } from "lucide-react";
import { useState } from "react";
import { GithubIcon } from "@/components/app/icons";
import { Dock, DockItem, DockSeparator } from "@/components/motion/dock";

const ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "mail", icon: Mail, label: "Mail" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "music", icon: Music, label: "Music" },
  { id: "discover", icon: Sparkles, label: "Discover" },
];

export function DockPreview() {
  const [active, setActive] = useState("home");

  return (
    <div className="flex w-full justify-center">
      <Dock>
        {ITEMS.map(({ id, icon: Icon, label }) => (
          <DockItem
            key={id}
            aria-label={label}
            active={active === id}
            onClick={() => setActive(id)}
          >
            <Icon className="h-5 w-5" />
          </DockItem>
        ))}
        <DockSeparator />
        <DockItem
          aria-label="Settings"
          active={active === "settings"}
          onClick={() => setActive("settings")}
        >
          <Settings className="h-5 w-5" />
        </DockItem>
        <DockItem aria-label="GitHub">
          <GithubIcon className="h-5 w-5" />
        </DockItem>
      </Dock>
    </div>
  );
}
```

## API Reference

### Dock

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |
| `size` | `number` | `44` | No | Size of each item in px. |

### DockItem

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |
| `onClick` | `(() => void)` | — | No | When set, the item renders as a <button>. Omit when children carry their own link or button. |
| `active` | `boolean` | — | No | — |
| `aria-label` | `string` | — | No | — |

### DockSeparator

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

