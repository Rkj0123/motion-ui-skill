---
title: "Recorder Face"
description: "A quirky record button with a mascot face, circular dial, and live timer. Tap to start and pause — feels like a tiny dedicated recorder app."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/recorder-face.md"
markdown: "references/craft/recorder-face.md"
license: "MIT"
---

# Recorder Face

> A quirky record button with a mascot face, circular dial, and live timer. Tap to start and pause — feels like a tiny dedicated recorder app.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py recorder-face --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RecorderFaceWidget } from "@/components/widgets/recorder-face-widget";

export function RecorderFaceWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RecorderFaceWidget />
    </div>
  );
}
```

## API Reference

### RecorderFaceWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
