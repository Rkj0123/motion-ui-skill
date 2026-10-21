---
title: "Thruster Button"
description: "Air-jet thruster button that lifts off container floor and flies toward cursor with particle vapor trails."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/thruster-button.md"
markdown: "references/craft/thruster-button.md"
license: "MIT"
---

# Thruster Button

> Air-jet thruster button that lifts off container floor and flies toward cursor with particle vapor trails.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py thruster-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThrusterButton } from "@/components/buttons/thruster-button";

export function ThrusterButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ThrusterButton>Click Me</ThrusterButton>
    </div>
  );
}
```

## API Reference

### ThrusterButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
