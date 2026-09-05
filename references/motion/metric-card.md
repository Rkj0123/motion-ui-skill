---
title: "Metric Card"
description: "KPI stat card with animated SVG sparkline charts, positive/negative delta badges, and full multi-style preset support."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/metric-card.md"
markdown: "references/motion/metric-card.md"
license: "MIT"
---

# Metric Card

> KPI stat card with animated SVG sparkline charts, positive/negative delta badges, and full multi-style preset support (`minimal`, `origin`, `enterprise`, `glow`, `ios`, `brutalist`). Inspired by Origin UI (Coss), KeenThemes ReUI, and ibelick.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py metric-card --dest ./src

# Or install with a specific style preset:
python scripts/install-component.py metric-card --style origin --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MetricCard } from "@/components/motion/metric-card";

export function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
      <MetricCard
        title="Total Revenue"
        value="$124,592"
        change="+12.4%"
        isPositive={true}
        stylePreset="origin"
      />
      <MetricCard
        title="Active Subscriptions"
        value="1,429"
        change="+8.1%"
        isPositive={true}
        stylePreset="enterprise"
      />
      <MetricCard
        title="Churn Rate"
        value="2.14%"
        change="-0.4%"
        isPositive={true}
        stylePreset="glow"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Required | Metric header label. |
| `value` | `string \| number` | Required | Main KPI numerical/currency value. |
| `change` | `string` | `undefined` | Delta percentage or indicator text (e.g. `"+12.4%"`). |
| `isPositive` | `boolean` | `true` | Changes badge color between emerald and rose. |
| `timeframe` | `string` | `"vs last month"` | Subtitle timeframe text. |
| `sparklineData` | `number[]` | Default array | Array of numerical data points rendered into SVG trend line. |
| `stylePreset` | `"minimal" \| "origin" \| "enterprise" \| "glow" \| "ios" \| "brutalist"` | `"origin"` | Selected design system aesthetic preset. |
| `className` | `string` | `undefined` | Container classes. |
