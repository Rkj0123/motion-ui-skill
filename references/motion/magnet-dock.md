---
title: "Magnet Dock"
description: "Interactive application dock whose icons magnify continuously based on pointer proximity using spring physics and motion values."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/magnet-dock.md"
markdown: "references/motion/magnet-dock.md"
license: "MIT"
---

# Magnet Dock

> Interactive application dock whose icons magnify continuously based on pointer proximity using spring physics and motion values. Inspired by ibelick/ui-skills and macOS.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py magnet-dock --dest ./src
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

import { MagnetDock } from "@/components/motion/magnet-dock";
import { Home, Compass, MessageCircle, Settings, Bell } from "lucide-react";

export function MagnetDockExample() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <MagnetDock
        items={[
          { id: "home", label: "Home", icon: <Home className="size-5" /> },
          { id: "explore", label: "Explore", icon: <Compass className="size-5" /> },
          { id: "chat", label: "Messages", icon: <MessageCircle className="size-5" /> },
          { id: "notifications", label: "Activity", icon: <Bell className="size-5" /> },
          { id: "settings", label: "Settings", icon: <Settings className="size-5" /> },
        ]}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `MagnetDockItem[]` | Required | Array of dock items with icon, label, and callback. |
| `magnification` | `number` | `64` | Maximum magnified size in pixels. |
| `baseSize` | `number` | `42` | Resting icon width/height in pixels. |
| `distance` | `number` | `140` | Radial influence distance of cursor in pixels. |
| `className` | `string` | `undefined` | Container classes. |
