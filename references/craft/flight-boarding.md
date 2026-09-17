---
title: "Flight Boarding"
description: "Airline boarding pass with tear line, route codes, seat, gate, boarding time, and passenger name. Travel mockups that feel airport-real."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/flight-boarding.md"
markdown: "references/craft/flight-boarding.md"
license: "MIT"
---

# Flight Boarding

> Airline boarding pass with tear line, route codes, seat, gate, boarding time, and passenger name. Travel mockups that feel airport-real.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py flight-boarding --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FlightBoardingCard } from "@/components/travel/flight-boarding-card";

export function FlightBoardingCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FlightBoardingCard />
    </div>
  );
}
```

## API Reference

### FlightBoardingCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
