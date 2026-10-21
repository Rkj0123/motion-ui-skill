---
title: "Reveal Button"
description: "Button that conceals and reveals a sensitive secret value on hold or toggle with blur-in transitions."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/reveal-button.md"
markdown: "references/craft/reveal-button.md"
license: "MIT"
---

# Reveal Button

> Button that conceals and reveals a sensitive secret value on hold or toggle with blur-in transitions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py reveal-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RevealButton } from "@/components/buttons/reveal-button";

export function RevealButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RevealButton>Click Me</RevealButton>
    </div>
  );
}
```

## API Reference

### RevealButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `secret` | `string` | — | Yes | Confidential text string revealed on interaction |
| `className` | `string` | — | No | Additional CSS classes |
