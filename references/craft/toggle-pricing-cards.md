---
title: "Toggle Pricing Cards"
description: "Monthly and yearly billing toggle that updates three plan cards side by side — price and feature checklist included. SaaS pricing page, one paste away."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/toggle-pricing-cards.md"
markdown: "references/craft/toggle-pricing-cards.md"
license: "MIT"
---

# Toggle Pricing Cards

> Monthly and yearly billing toggle that updates three plan cards side by side — price and feature checklist included. SaaS pricing page, one paste away.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py toggle-pricing-cards --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TogglePricingCards } from "@/components/pricing/toggle-pricing-cards";

export function TogglePricingCardsDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TogglePricingCards />
    </div>
  );
}
```

## API Reference

### TogglePricingCards

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
