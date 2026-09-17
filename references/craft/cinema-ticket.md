---
title: "Cinema Ticket"
description: "Split cinema ticket with film title, venue, screen, seats, show time, and a perforated stub. Dark ticket stock that feels printed, not flat."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/cinema-ticket.md"
markdown: "references/craft/cinema-ticket.md"
license: "MIT"
---

# Cinema Ticket

> Split cinema ticket with film title, venue, screen, seats, show time, and a perforated stub. Dark ticket stock that feels printed, not flat.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cinema-ticket --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CinemaTicketCard } from "@/components/text/cinema-ticket-card";

export function CinemaTicketCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CinemaTicketCard />
    </div>
  );
}
```

## API Reference

### CinemaTicketCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
