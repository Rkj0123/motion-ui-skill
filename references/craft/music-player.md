---
title: "Music Player"
description: "Full dark player card with cover art, album info, progress scrubber with times, and transport controls. Not a bar — the whole now-playing screen."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/music-player.md"
markdown: "references/craft/music-player.md"
license: "MIT"
---

# Music Player

> Full dark player card with cover art, album info, progress scrubber with times, and transport controls. Not a bar — the whole now-playing screen.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py music-player --dest ./src
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

import { MusicPlayerCard } from "@/components/audio/music-player-card";

export function MusicPlayerCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MusicPlayerCard />
    </div>
  );
}
```

## API Reference

### MusicPlayerCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
