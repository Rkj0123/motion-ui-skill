---
title: "Text Animation"
description: "Animated text primitives for spring reveals, chromatic sweeps, shimmer loading states, letter-cascade swaps and character scrambles."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-08-19"
documentation: "references/motion/text-animation.md"
markdown: "references/motion/text-animation.md"
license: "MIT"
---

# Text Animation

> Animated text primitives for spring reveals, chromatic sweeps, shimmer loading states, letter-cascade swaps and character scrambles.

## Install

### Text Scramble

A controlled character scramble that resolves changed text while keeping its final value accessible.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-scramble --dest ./src
```

### Dia Text Animation

A Dia-inspired text effect with a fixed sentence prefix and a cycling final word revealed by a colorful sweep.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chromatic-text-reveal --dest ./src
```

### Text Reveal

Word or character reveal with spring slide-up and blur.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-reveal --dest ./src
```

### Text Shimmer

Gradient sweep across text for loading or emphasis.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-shimmer --dest ./src
```

### Text Cascade

Letter-by-letter slot roll for standalone text — old letters drop away as new ones land, left to right.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-cascade --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Text Scramble usage

A controlled character scramble that resolves changed text while keeping its final value accessible.

```tsx
"use client";

import { useState } from "react";
import { TextScramble } from "@/components/motion/text-scramble";

const PHRASES = [
  "Inspecting the repository",
  "Running the checks",
  "Preparing the update",
];

export function TextScramblePreview() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-8 text-center">
      <TextScramble
        text={PHRASES[index]}
        className="font-mono text-xl font-medium text-foreground"
      />

      <button
        type="button"
        onClick={() => setIndex((current) => (current + 1) % PHRASES.length)}
        className="inline-flex h-9 items-center rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Next phrase
      </button>
    </div>
  );
}
```

### Dia Text Animation usage

A Dia-inspired text effect with a fixed sentence prefix and a cycling final word revealed by a colorful sweep.

```tsx
import { ChromaticTextReveal } from "@/components/motion/chromatic-text-reveal";

export function ChromaticTextRevealPreview() {
  return (
    // The sentence never wraps, so it has to be sized against the space it
    // actually gets — the surrounding column, not the viewport.
    <div className="@container flex w-full justify-center">
      <ChromaticTextReveal
        prefix="Motion that feels"
        words={["natural.", "intentional.", "alive."]}
        startOnView={false}
        className="shrink-0 font-medium tracking-[-0.04em] text-foreground [font-size:clamp(1.25rem,7.8cqw,3rem)]"
      />
    </div>
  );
}
```

### Text Reveal usage

Word or character reveal with spring slide-up and blur.

```tsx
"use client";

import { useState } from "react";
import { TextReveal } from "@/components/motion/text-reveal";

export function TextRevealPreview() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex w-full flex-col items-center gap-8 text-center">
      <div key={key} className="flex flex-col gap-2">
        <TextReveal
          as="h2"
          text={["Motion that feels", "considered."]}
          className="text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl"
        />
        <TextReveal
          text="Word by word, with a soft blur."
          delay={0.9}
          stagger={0.05}
          blur={6}
          yOffset="20%"
          className="text-sm text-muted-foreground"
        />
      </div>

      <button
        type="button"
        onClick={() => setKey((k) => k + 1)}
        className="inline-flex h-9 items-center rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Replay
      </button>
    </div>
  );
}
```

### Text Shimmer usage

Gradient sweep across text for loading or emphasis.

```tsx
"use client";

import { TextShimmer } from "@/components/motion/text-shimmer";

export function TextShimmerPreview() {
  return (
    <div className="flex flex-col gap-4">
      <TextShimmer className="text-3xl font-semibold">Loading projects…</TextShimmer>
      <TextShimmer duration={1.5} className="text-sm">Faster shimmer</TextShimmer>
    </div>
  );
}
```

### Text Cascade usage

Letter-by-letter slot roll for standalone text — old letters drop away as new ones land, left to right.

```tsx
"use client";

import { useEffect, useState } from "react";
import { TextCascade } from "@/components/motion/text-cascade";

const PHRASES = ["Install skills", "Open settings", "Ship updates"];

export function TextCascadePreview() {
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhrase((p) => (p + 1) % PHRASES.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex w-full justify-center">
      <p className="text-lg font-medium text-foreground">
        <TextCascade text={PHRASES[phrase] ?? PHRASES[0]} />
      </p>
    </div>
  );
}
```

## API Reference

### TextScramble

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | — | Yes | Final text revealed by the scramble animation. |
| `duration` | `number` | — | No | Maximum animation duration in milliseconds. |
| `glyphs` | `string` | `ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&@$?/` | No | Characters sampled while unresolved positions are scrambling. |
| `className` | `string` | — | No | — |
| `style` | `CSSProperties` | — | No | — |

### ChromaticTextReveal

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `prefix` | `string` | — | Yes | Sentence fragment that remains fixed while the final word changes. |
| `words` | `string[]` | — | Yes | Words revealed one after another after the fixed prefix. |
| `colors` | `string[]` | `[ "#60a5fa", "#818cf8", "#c084fc", "#fb7185", "#fbbf24", ]` | No | Colors used along the moving chromatic edge. |
| `foregroundColor` | `string` | `var(--foreground)` | No | Final text color after the sweep passes. |
| `duration` | `number` | `1.2` | No | Sweep duration in seconds. |
| `delay` | `number` | `0` | No | Delay before the first sweep, in seconds. |
| `pauseDuration` | `number` | `0.8` | No | Rest after a word finishes revealing, in seconds. |
| `loop` | `boolean` | `true` | No | Returns to the first word after the final word. |
| `startOnView` | `boolean` | `true` | No | Starts when the text enters the viewport. |
| `once` | `boolean` | `true` | No | Only starts on the first viewport entry. |
| `inViewMargin` | `MarginType` | — | No | IntersectionObserver root margin used by the viewport trigger. |
| `className` | `string` | — | No | — |

### TextReveal

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `text` | `string \| string[]` | — | Yes | — |
| `as` | `ElementType` | `span` | No | — |
| `className` | `string` | — | No | — |
| `split` | `"word" \| "char"` | `word` | No | — |
| `stagger` | `number` | `0.09` | No | — |
| `delay` | `number` | `0` | No | — |
| `blur` | `number` | `12` | No | — |
| `yOffset` | `string \| number` | `40%` | No | — |
| `spring` | `{ stiffness?: number; damping?: number; mass?: number \| undefined; } \| undefined` | — | No | — |
| `once` | `boolean` | `true` | No | — |
| `whileInView` | `boolean` | `false` | No | — |

### TextShimmer

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `as` | `ElementType` | `span` | No | — |
| `duration` | `number` | `2.5` | No | — |
| `className` | `string` | — | No | — |

### TextCascade

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `text` | `string` | — | Yes | Current text. Changing it cascades the letters to the new value. |
| `className` | `string` | — | No | — |

