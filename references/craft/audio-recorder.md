---
title: "Audio Recorder"
description: "Dark recording card with title, date, animated red waveform, and elapsed time. Play and pause feel like a native voice memo app."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/audio-recorder.md"
markdown: "references/craft/audio-recorder.md"
license: "MIT"
---

# Audio Recorder

> Dark recording card with title, date, animated red waveform, and elapsed time. Play and pause feel like a native voice memo app.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py audio-recorder --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AudioRecorderWidget } from "@/components/widgets/audio-recorder-widget";

export function AudioRecorderWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AudioRecorderWidget />
    </div>
  );
}
```

## API Reference

### AudioRecorderWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
