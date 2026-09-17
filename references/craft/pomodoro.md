---
title: "Pomodoro"
description: "Dark pomodoro timer — thin ring, split monospace time, tap to start or pause. Polished to match the DND card size and proportions."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/pomodoro.md"
markdown: "references/craft/pomodoro.md"
license: "MIT"
---

# Pomodoro

> Dark pomodoro timer — thin ring, split monospace time, tap to start or pause. Polished to match the DND card size and proportions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py pomodoro --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PomodoroWidget } from "@/components/widgets/pomodoro-widget";

export function PomodoroWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PomodoroWidget />
    </div>
  );
}
```

## API Reference

### PomodoroWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
