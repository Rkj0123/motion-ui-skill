---
title: "Tactile Copy Button"
description: "Copies text to the clipboard and cross-fades the copy icon into a check with a Copied label. Monospace value, resets on its own."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/craft-copy-button.md"
markdown: "references/craft/craft-copy-button.md"
license: "MIT"
---

# Tactile Copy Button

> Copies text to the clipboard and cross-fades the copy icon into a check with a Copied label. Monospace value, resets on its own.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py craft-copy-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CopyButton } from "@/components/buttons/copy-button";

export function CopyButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CopyButton />
    </div>
  );
}
```

## API Reference

### CopyButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
