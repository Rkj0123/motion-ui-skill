---
title: "Speed Dial"
description: "Mobile-first floating action button (FAB) that blossoms outwards with staggered action items, 45-degree icon morph, and haptic feedback."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/speed-dial.md"
markdown: "references/motion/speed-dial.md"
license: "MIT"
---

# Speed Dial

> Mobile-first floating action button (FAB) that blossoms outwards with staggered action items, 45-degree icon morph, and haptic feedback. Inspired by Expo and universal mobile design patterns.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py speed-dial --dest ./src
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

import { SpeedDial } from "@/components/motion/speed-dial";
import { Copy, Mail, MessageSquare, Share2 } from "lucide-react";

export function SpeedDialExample() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <SpeedDial
        direction="up"
        actions={[
          { id: "share", label: "Share", icon: <Share2 className="size-4" />, onClick: () => console.log("share") },
          { id: "copy", label: "Copy Link", icon: <Copy className="size-4" />, onClick: () => console.log("copy") },
          { id: "chat", label: "Message", icon: <MessageSquare className="size-4" />, onClick: () => console.log("chat") },
          { id: "email", label: "Email", icon: <Mail className="size-4" />, onClick: () => console.log("email") },
        ]}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `actions` | `SpeedDialAction[]` | Required | Array of action items with icon, label, and onClick. |
| `direction` | `"up" \| "down" \| "left" \| "right"` | `"up"` | Direction in which child actions expand. |
| `icon` | `React.ReactNode` | `<Plus />` | Custom center icon for the main FAB button. |
| `className` | `string` | `undefined` | Container classes. |
