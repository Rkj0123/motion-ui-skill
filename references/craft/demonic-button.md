---
title: "Demonic Button"
description: "Hold-to-summon button that raises devil horns from behind while an interactive canvas fire builds into a roar."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/demonic-button.md"
markdown: "references/craft/demonic-button.md"
license: "MIT"
---

# Demonic Button

> Hold-to-summon button that raises devil horns from behind while an interactive canvas fire builds into a roar.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py demonic-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DemonicButton } from "@/components/buttons/demonic-button";

export function DemonicButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DemonicButton>Click Me</DemonicButton>
    </div>
  );
}
```

## API Reference

### DemonicButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `holdDurationMs` | `number` | 2000 | No | Required hold time to complete summon |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
