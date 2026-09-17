---
title: "Focus Breath"
description: "A breathing guide that pulses between inhale and exhale every four seconds. One tap to start — useful in wellness or focus flows."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/focus-breath.md"
markdown: "references/craft/focus-breath.md"
license: "MIT"
---

# Focus Breath

> A breathing guide that pulses between inhale and exhale every four seconds. One tap to start — useful in wellness or focus flows.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py focus-breath --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FocusBreathWidget } from "@/components/widgets/focus-breath-widget";

export function FocusBreathWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FocusBreathWidget />
    </div>
  );
}
```

## API Reference

### FocusBreathWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
