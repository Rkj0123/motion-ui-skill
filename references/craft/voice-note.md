---
title: "Voice Note"
description: "A voice message bar with a scrubbable waveform and a play control."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/voice-note.md"
markdown: "references/craft/voice-note.md"
license: "MIT"
---

# Voice Note

> A voice message bar with a scrubbable waveform and a play control.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py voice-note --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import VoiceNote from "@/components/craft/voice-note";

export function Example() {
  return (
    <div className="p-6">
      <VoiceNote />
    </div>
  );
}
```
