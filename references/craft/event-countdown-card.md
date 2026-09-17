---
title: "Event Countdown Card"
description: "Live countdown to an event — days, hours, and minutes update every minute. Editorial typography, no ticker gimmicks."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/event-countdown-card.md"
markdown: "references/craft/event-countdown-card.md"
license: "MIT"
---

# Event Countdown Card

> Live countdown to an event — days, hours, and minutes update every minute. Editorial typography, no ticker gimmicks.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py event-countdown-card --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EventCountdownCard } from "@/components/calender/event-countdown-card";

export function EventCountdownCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EventCountdownCard />
    </div>
  );
}
```

## API Reference

### EventCountdownCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
