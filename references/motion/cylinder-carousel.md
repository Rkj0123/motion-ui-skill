---
title: "Cylinder Carousel"
description: "A carousel whose items line the inside of a cylinder, receding into the center and growing toward the edges. Drag, scroll or arrow-key to roll it, with a springy glide and snap. Reduced-motion drops the glide."
category: "Components"
publishedAt: "2026-07-04"
updatedAt: "2026-07-13"
documentation: "references/motion/cylinder-carousel.md"
markdown: "references/motion/cylinder-carousel.md"
license: "MIT"
---

# Cylinder Carousel

> A carousel whose items line the inside of a cylinder, receding into the center and growing toward the edges. Drag, scroll or arrow-key to roll it, with a springy glide and snap. Reduced-motion drops the glide.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cylinder-carousel --dest ./src
```

## Dependencies

- `@paper-design/shaders-react`
- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { type ComponentType, useState } from "react";
import { CylinderCarousel } from "@/components/motion/cylinder-carousel";
import {
  ShaderBackground,
  type ShaderBackgroundVariant,
} from "@/components/motion/shader-background";
import { Tabs, TabsList, TabsTrigger } from "@/components/motion/tabs";

// Each variant has its own prop shape; the slides only spread their own preset.
const Background = ShaderBackground as ComponentType<
  { variant: ShaderBackgroundVariant; className?: string } & Record<
    string,
    unknown
  >
>;

const SLIDES: { variant: ShaderBackgroundVariant; props: Record<string, unknown> }[] = [
  {
    variant: "dithering",
    props: { colorBack: "#1a1030", colorFront: "#b98cff", speed: 0.3 },
  },
  {
    variant: "metaballs",
    props: { colors: ["#e8e8ef", "#8a8a9a", "#1a1a22"], colorBack: "#c9b9a8", speed: 0.4 },
  },
  {
    variant: "warp",
    props: { colors: ["#c8ff00", "#3a5a00", "#c8ff00", "#88bb00"], speed: 0.4 },
  },
  {
    variant: "god-rays",
    props: { colors: ["#6a7bff", "#00114d"], colorBack: "#000000", speed: 0.5 },
  },
  {
    variant: "swirl",
    props: { colorBack: "#1a0000", colors: ["#ffd1a8", "#ff6a3d", "#b31a57"], speed: 0.3 },
  },
  {
    variant: "mesh-gradient",
    props: { colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"], speed: 0.3 },
  },
  {
    variant: "voronoi",
    props: { colors: ["#ff8247", "#ffe53d"], speed: 0.3 },
  },
  {
    variant: "neuro-noise",
    props: { colorFront: "#ffffff", colorMid: "#47a6ff", colorBack: "#000000", speed: 0.4 },
  },
];

export function CylinderCarouselPreview() {
  const [variant, setVariant] = useState<"concave" | "convex">("concave");

  return (
    <div className="flex w-full flex-col items-center gap-4 p-6">
      <Tabs
        value={variant}
        onValueChange={(v) => setVariant(v as "concave" | "convex")}
        variant="segment"
      >
        <TabsList>
          <TabsTrigger value="concave">Concave</TabsTrigger>
          <TabsTrigger value="convex">Convex</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* clip-path (not overflow) so the rounded corner also clips the GPU-composited balls */}
      <div className="w-full rounded-3xl border border-border/60 bg-muted/20 py-6 [clip-path:inset(0_round_1.5rem)]">
        <CylinderCarousel
          variant={variant}
          itemSize={230}
          height={310}
          className="w-full"
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.variant}
              className="h-full w-full overflow-hidden rounded-full border border-border/40"
            >
              <Background
                variant={slide.variant}
                className="h-full w-full"
                {...slide.props}
              />
            </div>
          ))}
        </CylinderCarousel>
      </div>
      <p className="text-xs text-muted-foreground">
        Drag, scroll or use arrow keys to roll
      </p>
    </div>
  );
}
```

## API Reference

### CylinderCarousel

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `itemSize` | `number` | `200` | No | Max item box size in px (square) at full size, i.e. at the container edge. Balls shrink below this automatically so the row keeps breathing room in narrow containers. |
| `visibleItems` | `number` | `5` | No | How many item slots span the container width. |
| `variant` | `"concave" \| "convex"` | `concave` | No | "concave" (default): inside of the cylinder — center ball smallest and dipped, growing toward the edges. "convex": outside of the cylinder — center ball biggest and raised, shrinking toward the edges. |
| `minScale` | `number` | `0.55` | No | Scale of the smallest ball (center for concave, edges for convex); the biggest reaches 1. |
| `dragSpeed` | `number` | `1.5` | No | Items rolled per item-width dragged — above 1 the wall outruns the pointer, which reads as a lighter, freer roll. |
| `arc` | `number` | — | No | Curve depth in px: for concave, how far the edge balls ride above the center one (valley); for convex, how far below (arch). 0 = flat line. Defaults to 35% of the item size. |
| `snap` | `boolean` | `true` | No | Snap to the nearest item when the roll settles. |
| `autoRotate` | `boolean` | `false` | No | Roll on its own until interacted with. |
| `autoRotateSpeed` | `number` | `0.4` | No | Auto-roll speed in items per second. |
| `defaultIndex` | `number` | `0` | No | — |
| `onIndexChange` | `((index: number) => void)` | — | No | — |
| `height` | `number` | — | No | Stage height in px. Defaults to `itemSize`. |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
