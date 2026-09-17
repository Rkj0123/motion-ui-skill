---
title: "Keyboard Shortcuts"
description: "Shortcut reference card with rendered key caps and a ⌘K header hint. Docs pages and onboarding modals use this constantly."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/keyboard-shortcuts.md"
markdown: "references/craft/keyboard-shortcuts.md"
license: "MIT"
---

# Keyboard Shortcuts

> Shortcut reference card with rendered key caps and a ⌘K header hint. Docs pages and onboarding modals use this constantly.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py keyboard-shortcuts --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { KeyboardShortcutsCard } from "@/components/text/keyboard-shortcuts-card";

export function KeyboardShortcutsCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <KeyboardShortcutsCard />
    </div>
  );
}
```

## API Reference

### KeyboardShortcutsCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
