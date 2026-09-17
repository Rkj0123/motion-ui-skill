---
title: "Voice Assistant"
description: "Animated equalizer bars and a mic button that flip between idle and listening. Builds the voice-AI moment without building the whole assistant."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/voice-assistant.md"
markdown: "references/craft/voice-assistant.md"
license: "MIT"
---

# Voice Assistant

> Animated equalizer bars and a mic button that flip between idle and listening. Builds the voice-AI moment without building the whole assistant.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py voice-assistant --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { VoiceAssistantWidget } from "@/components/widgets/voice-assistant-widget";

export function VoiceAssistantWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <VoiceAssistantWidget />
    </div>
  );
}
```

## API Reference

### VoiceAssistantWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
