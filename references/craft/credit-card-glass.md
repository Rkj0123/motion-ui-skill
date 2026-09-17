---
title: "Credit Card Glass"
description: "Glassmorphism payment card with chip, masked number, holder name, and expiry. Glow on hover — fintech landing pages eat this up."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/credit-card-glass.md"
markdown: "references/craft/credit-card-glass.md"
license: "MIT"
---

# Credit Card Glass

> Glassmorphism payment card with chip, masked number, holder name, and expiry. Glow on hover — fintech landing pages eat this up.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py credit-card-glass --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CreditCardGlass } from "@/components/users/credit-card-glass";

export function CreditCardGlassDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CreditCardGlass />
    </div>
  );
}
```

## API Reference

### CreditCardGlass

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
