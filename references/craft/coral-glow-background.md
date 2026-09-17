---
title: "Coral Glow"
description: "Warm aurora wash in rose, peach, coral, and gold over a blush paper base — beauty, lifestyle, and invitation hero sections."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/coral-glow-background.md"
markdown: "references/craft/coral-glow-background.md"
license: "MIT"
---

# Coral Glow

> Warm aurora wash in rose, peach, coral, and gold over a blush paper base — beauty, lifestyle, and invitation hero sections.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py coral-glow-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CoralGlowBackground } from "@/components/background-gradient/coral-glow-background";

export function CoralGlowBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CoralGlowBackground />
    </div>
  );
}
```

## API Reference

### CoralGlowBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
