---
title: "Audio Player"
description: "Interactive sound player with animated equalizer waveforms, spring play/pause morphs, volume controls, and scrubbing trackbar."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/audio-player.md"
markdown: "references/motion/audio-player.md"
license: "MIT"
---

# Audio Player

> Interactive sound player with animated equalizer waveforms, spring play/pause morphs, volume controls, and scrubbing trackbar. Inspired by Origin UI (Coss) and KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py audio-player --dest ./src
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

import { AudioPlayer } from "@/components/motion/audio-player";

export function AudioPlayerExample() {
  return (
    <div className="p-8 flex justify-center">
      <AudioPlayer
        title="Midnight City Serenade"
        artist="Synthetic Dreams"
        durationSeconds={195}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Required | Audio track title. |
| `artist` | `string` | `undefined` | Performer or creator name. |
| `durationSeconds` | `number` | `184` | Total audio duration in seconds. |
| `src` | `string` | `undefined` | Optional audio source URI. |
| `className` | `string` | `undefined` | Container classes. |
