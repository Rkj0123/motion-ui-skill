---
title: "Loader"
description: "Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble, metaballs, newton, helix, percent, and five terminal-style ascii spinners. Scales from one size prop, uses currentColor, and reduced-motion swaps every transform for a calm opacity pulse."
category: "Components"
publishedAt: "2026-07-04"
updatedAt: "2026-07-13"
documentation: "references/motion/loader.md"
markdown: "references/motion/loader.md"
license: "MIT"
---

# Loader

> Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble, metaballs, newton, helix, percent, and five terminal-style ascii spinners. Scales from one size prop, uses currentColor, and reduced-motion swaps every transform for a calm opacity pulse.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py loader --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Loader, type LoaderVariant } from "@/components/motion/loader";

const VARIANTS: { variant: LoaderVariant; label: string }[] = [
  { variant: "spinner", label: "Spinner" },
  { variant: "dots", label: "Dots" },
  { variant: "bars", label: "Bars" },
  { variant: "dot-matrix", label: "Dot Matrix" },
  { variant: "dither", label: "Dither" },
  { variant: "morph", label: "Morph" },
  { variant: "comet", label: "Comet" },
  { variant: "metaballs", label: "Metaballs" },
  { variant: "newton", label: "Newton" },
  { variant: "helix", label: "Helix" },
  { variant: "scramble", label: "Scramble" },
  { variant: "percent", label: "Percent" },
  { variant: "ascii", label: "ASCII" },
  { variant: "ascii-line", label: "ASCII Line" },
  { variant: "ascii-braille", label: "ASCII Braille" },
  { variant: "ascii-blocks", label: "ASCII Blocks" },
  { variant: "ascii-bounce", label: "ASCII Bounce" },
];

export function LoaderPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-8">
      {VARIANTS.map(({ variant, label }) => (
        <div key={variant} className="flex flex-col items-center gap-4">
          <Loader variant={variant} size={36} />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
```

## API Reference

### Loader

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"spinner" \| "dots" \| "bars" \| "dot-matrix" \| "dither" \| "ascii" \| "ascii-line" \| "ascii-braille" \| "ascii-blocks" \| "ascii-bounce" \| "morph" \| "comet" \| "scramble" \| "metaballs" \| "newton" \| "helix" \| "percent"` | `spinner` | No | Which animation to render. |
| `size` | `number` | `32` | No | Base square size in px. Everything scales from this. |
| `speed` | `number` | `1` | No | Seconds per animation cycle. |
| `label` | `string` | `Loading` | No | Accessible label announced to screen readers. |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
