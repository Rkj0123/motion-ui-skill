---
title: "Now Playing Bar"
description: "Compact dark player bar with artwork, track info, transport controls, and a scrubber. The footer bar every music app eventually needs."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/now-playing-bar.md"
markdown: "references/craft/now-playing-bar.md"
license: "MIT"
---

# Now Playing Bar

> Compact dark player bar with artwork, track info, transport controls, and a scrubber. The footer bar every music app eventually needs.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py now-playing-bar --dest ./src
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

import { NowPlayingBar } from "@/components/audio/now-playing-bar";

export function NowPlayingBarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <NowPlayingBar />
    </div>
  );
}
```

## API Reference

### NowPlayingBar

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
