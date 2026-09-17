---
title: "Music Playlist"
description: "Playlist card with cover, header stats, and a track list where each row toggles play independently. One component, full playlist UI."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/music-playlist.md"
markdown: "references/craft/music-playlist.md"
license: "MIT"
---

# Music Playlist

> Playlist card with cover, header stats, and a track list where each row toggles play independently. One component, full playlist UI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py music-playlist --dest ./src
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

import { MusicPlaylistCard } from "@/components/audio/music-playlist-card";

export function MusicPlaylistCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MusicPlaylistCard />
    </div>
  );
}
```

## API Reference

### MusicPlaylistCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
