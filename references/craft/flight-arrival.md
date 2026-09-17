---
title: "Flight Arrival"
description: "Countdown to landing with departure and arrival airports and a plane moving along a progress bar. Built for travel dashboards and trip widgets."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/flight-arrival.md"
markdown: "references/craft/flight-arrival.md"
license: "MIT"
---

# Flight Arrival

> Countdown to landing with departure and arrival airports and a plane moving along a progress bar. Built for travel dashboards and trip widgets.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py flight-arrival --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FlightArrivalWidget } from "@/components/widgets/flight-arrival-widget";

export function FlightArrivalWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FlightArrivalWidget />
    </div>
  );
}
```

## API Reference

### FlightArrivalWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
