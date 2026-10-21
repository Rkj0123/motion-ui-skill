---
title: "Morph Status Button"
description: "Button that morphs through idle, loading, success, and error states seamlessly in place with zero layout shift."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/morph-status-button.md"
markdown: "references/craft/morph-status-button.md"
license: "MIT"
---

# Morph Status Button

> Button that morphs through idle, loading, success, and error states seamlessly in place with zero layout shift.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morph-status-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MorphStatusButton } from "@/components/buttons/morph-status-button";

export function MorphStatusButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MorphStatusButton>Click Me</MorphStatusButton>
    </div>
  );
}
```

## API Reference

### MorphStatusButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `status` | `"idle" | "loading" | "success" | "error"` | "idle" | No | Current interactive state |
| `className` | `string` | — | No | Additional CSS classes |
