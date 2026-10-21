---
title: "Glitch Button"
description: "Cyberpunk button with chromatic aberration RGB splitting, scanline jitter, and glitch slices on hover."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/glitch-button.md"
markdown: "references/craft/glitch-button.md"
license: "MIT"
---

# Glitch Button

> Cyberpunk button with chromatic aberration RGB splitting, scanline jitter, and glitch slices on hover.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py glitch-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GlitchButton } from "@/components/buttons/glitch-button";

export function GlitchButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GlitchButton>Click Me</GlitchButton>
    </div>
  );
}
```

## API Reference

### GlitchButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
