---
title: "Shortcut recorder"
description: "Record key combinations into key caps, with conflict warnings, Kbd, and a searchable cheatsheet."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/shortcut-recorder.md"
markdown: "references/motion/shortcut-recorder.md"
license: "MIT"
---

# Shortcut recorder

> Record key combinations into key caps, with conflict warnings, Kbd, and a searchable cheatsheet.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py shortcut-recorder --dest ./src
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

import { ShortcutRecorder as ShortcutRecorder } from "@/components/motion/shortcut-recorder";

export function Example() {
  return (
    <div className="p-6">
      <ShortcutRecorder />
    </div>
  );
}
```
