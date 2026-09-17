---
title: "Minimal Agenda"
description: "Today's tasks with times — tap a row to mark it done with a strikethrough and checkmark. Clean enough for a daily planner sidebar."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/minimal-agenda.md"
markdown: "references/craft/minimal-agenda.md"
license: "MIT"
---

# Minimal Agenda

> Today's tasks with times — tap a row to mark it done with a strikethrough and checkmark. Clean enough for a daily planner sidebar.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py minimal-agenda --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MinimalAgendaWidget } from "@/components/widgets/minimal-agenda-widget";

export function MinimalAgendaWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MinimalAgendaWidget />
    </div>
  );
}
```

## API Reference

### MinimalAgendaWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
