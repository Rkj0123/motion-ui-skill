---
title: "Event Ticket"
description: "Perforated event ticket with a cover-image date block and VIP pass details on the right. Concert, conference, or launch night — same component."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/event-ticket.md"
markdown: "references/craft/event-ticket.md"
license: "MIT"
---

# Event Ticket

> Perforated event ticket with a cover-image date block and VIP pass details on the right. Concert, conference, or launch night — same component.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py event-ticket --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EventTicketCard } from "@/components/event/event-ticket-card";

export function EventTicketCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EventTicketCard />
    </div>
  );
}
```

## API Reference

### EventTicketCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
