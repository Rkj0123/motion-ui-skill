---
title: "Quantity Stepper"
description: "Inline minus / count / plus control for carts and forms. Clamps between min and max, disables at the edges."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/quantity-stepper-button.md"
markdown: "references/craft/quantity-stepper-button.md"
license: "MIT"
---

# Quantity Stepper

> Inline minus / count / plus control for carts and forms. Clamps between min and max, disables at the edges.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py quantity-stepper-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { QuantityStepperButton } from "@/components/buttons/quantity-stepper-button";

export function QuantityStepperButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <QuantityStepperButton />
    </div>
  );
}
```

## API Reference

### QuantityStepperButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
