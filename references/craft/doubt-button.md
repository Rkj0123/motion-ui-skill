---
title: "Doubt Button"
description: "Escalating-confirmation button that prompts the user through comical guilt-tripping steps before firing."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/doubt-button.md"
markdown: "references/craft/doubt-button.md"
license: "MIT"
---

# Doubt Button

> Escalating-confirmation button that prompts the user through comical guilt-tripping steps before firing.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py doubt-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DoubtButton } from "@/components/buttons/doubt-button";

export function DoubtButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DoubtButton>Click Me</DoubtButton>
    </div>
  );
}
```

## API Reference

### DoubtButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `onConfirmed` | `() => void` | — | No | Callback invoked once final doubt prompt is accepted |
| `className` | `string` | — | No | Additional CSS classes |
