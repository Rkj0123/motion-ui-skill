---
title: "Spotlight Card"
description: "Interactive craft card with mouse-tracking radial spotlight glow, rotating border beam highlight, and subtle depth elevation."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/spotlight-card.md"
markdown: "references/motion/spotlight-card.md"
license: "MIT"
---

# Spotlight Card

> Interactive craft card with mouse-tracking radial spotlight glow, rotating border beam highlight, and subtle depth elevation. Inspired by ibelick/ui-skills and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spotlight-card --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Cpu, Zap } from "lucide-react";

export function SpotlightCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <SpotlightCard
        spotlightColor="rgba(59, 130, 246, 0.18)"
        showBorderBeam={true}
      >
        <div className="size-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
          <Cpu className="size-5" />
        </div>
        <h3 className="text-base font-semibold text-foreground">AI Workflow Engine</h3>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          High-throughput distributed executor supporting dynamic step routing, tool approvals, and real-time streaming traces.
        </p>
      </SpotlightCard>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | required | Content rendered within the card body. |
| `spotlightColor` | `string` | `"rgba(120, 119, 198, 0.15)"` | CSS color of the cursor-tracking radial gradient cone. |
| `spotlightSize` | `number` | `350` | Radius in px of the spotlight illumination area. |
| `showBorderBeam` | `boolean` | `true` | Enables rotating border beam highlight on hover. |
| `borderBeamDuration` | `number` | `8` | Duration in seconds for full 360-degree beam rotation. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
