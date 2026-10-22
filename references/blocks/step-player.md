---
title: "Step Player"
description: "An iOS-style stepped progress track with a play, pause and replay control. The active step stretches into a bar that fills as it plays."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/step-player.md"
markdown: "references/blocks/step-player.md"
license: "MIT"
---

# Step Player

> An iOS-style stepped progress track with a play, pause and replay control. The active step stretches into a bar that fills as it plays.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py step-player --dest ./src
```

## Dependencies

- `clsx`
- `flubber`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import StepPlayer from "@/components/blocks/step-player";

export function Example() {
  return (
    <div className="p-6">
      <StepPlayer />
    </div>
  );
}
```
