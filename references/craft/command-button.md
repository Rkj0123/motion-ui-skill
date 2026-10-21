---
title: "Command Button"
description: "Interactive command button with live shortcut key badge and mechanical key switch feedback."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/command-button.md"
markdown: "references/craft/command-button.md"
license: "MIT"
---

# Command Button

> Interactive command button with live shortcut key badge and mechanical key switch feedback.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py command-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CommandButton } from "@/components/buttons/command-button";

export function CommandButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CommandButton>Click Me</CommandButton>
    </div>
  );
}
```

## API Reference

### CommandButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `shortcut` | `string` | "⌘K" | No | Keyboard shortcut modifier string |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
