---
title: "Scroll Animation"
description: "Scroll-driven motion: a Lenis smooth-scroll provider and a reading-progress indicator that reads from it."
category: "Components"
publishedAt: "2026-06-24"
updatedAt: "2026-06-28"
documentation: "references/motion/scroll-animation.md"
markdown: "references/motion/scroll-animation.md"
license: "MIT"
---

# Scroll Animation

> Scroll-driven motion: a Lenis smooth-scroll provider and a reading-progress indicator that reads from it.

## Install

### Smooth Scroll

Smooth-scroll provider over Lenis with a useSmoothScroll hook exposing scroll offset, progress and velocity. Reduced-motion safe.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py smooth-scroll --dest ./src
```

### Scroll Progress

Reading-progress indicator — fixed bar or circular ring — driven by scroll position via useSmoothScroll, with spring smoothing.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scroll-progress --dest ./src
```

### Parallax

Wrapper that drifts its children at a speed factor as they cross the viewport, on either axis. Reduced-motion safe.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py parallax --dest ./src
```

### Scroll To

Button that smooth-scrolls to a target (offset, selector or element) via the active SmoothScroll provider; reduced-motion jumps instantly.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scroll-to --dest ./src
```

### Scroll Reveal

Reveals its children with a spring slide and blur as they enter the viewport, once or every time. Reduced-motion keeps a fade.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scroll-reveal --dest ./src
```

## Dependencies

- `clsx`
- `lenis`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Smooth Scroll usage

Smooth-scroll provider over Lenis with a useSmoothScroll hook exposing scroll offset, progress and velocity. Reduced-motion safe.

```tsx
"use client";

import { ArrowUp } from "lucide-react";

import { SmoothScroll, useSmoothScroll } from "@/components/motion/smooth-scroll";

// In production <SmoothScroll> wraps the page (root). Here it runs in contained
// mode (root={false}) so the box itself smooth-scrolls — the same engine, and
// the button uses the useSmoothScroll() hook to glide back to the top.
const SECTIONS = Array.from({ length: 16 }, (_, i) => i + 1);

function ScrollTopButton() {
  const { scrollTo } = useSmoothScroll();
  return (
    <button
      type="button"
      onClick={() => scrollTo(0)}
      className="sticky bottom-3 left-[calc(100%-3rem)] z-10 grid size-9 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export function SmoothScrollPreview() {
  return (
    <SmoothScroll
      root={false}
      className="h-64 w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <div className="space-y-3 p-4">
        {SECTIONS.map((n) => (
          <div
            key={`section-${n}`}
            className="rounded-lg bg-muted/60 px-3 py-4 text-sm text-muted-foreground"
          >
            Section {n}
          </div>
        ))}
      </div>
      <ScrollTopButton />
    </SmoothScroll>
  );
}
```

### Scroll Progress usage

Reading-progress indicator — fixed bar or circular ring — driven by scroll position via useSmoothScroll, with spring smoothing.

```tsx
"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";

import { ScrollProgress } from "@/components/motion/scroll-progress";

// Real usage: drop <ScrollProgress /> anywhere — it reads page scroll via
// useSmoothScroll and pins itself with `fixed`. Here we scope it to a box by
// passing a contained `progress` source and `fixed={false}`.
const SECTIONS = Array.from({ length: 18 }, (_, i) => i + 1);

export function ScrollProgressPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card">
      <ScrollProgress progress={scrollYProgress} fixed={false} height={3} />
      <div className="absolute right-3 top-3 z-10 rounded-full bg-background/70 p-1 backdrop-blur">
        <ScrollProgress variant="circle" progress={scrollYProgress} size={36} />
      </div>
      <div ref={ref} className="h-64 overflow-y-auto scrollbar-hide">
        <div className="space-y-3 p-4">
          {SECTIONS.map((n) => (
            <div
              key={`row-${n}`}
              className="rounded-lg bg-muted/60 px-3 py-4 text-sm text-muted-foreground"
            >
              Section {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Parallax usage

Wrapper that drifts its children at a speed factor as they cross the viewport, on either axis. Reduced-motion safe.

```tsx
"use client";

import { useRef } from "react";

import { Parallax } from "@/components/motion/parallax";

// On a real page <Parallax> tracks the viewport. Here it's scoped to the box
// via the container prop. Scroll inside the box: the background image drifts
// against the scroll, the label and avatar drift with it at different speeds.
export function ParallaxPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative h-[600px] w-full max-w-2xl overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <div className="flex h-80 items-center justify-center text-sm text-muted-foreground">
        Scroll down ↓
      </div>

      <div className="relative h-96 overflow-hidden">
        <Parallax
          container={containerRef}
          speed={-0.6}
          className="absolute inset-x-0 -top-1/4 h-[150%]"
        >
          {/* biome-ignore lint/performance/noImgElement: plain img keeps the copy-paste preview portable (no next/image host config). */}
          <img
            src="https://picsum.photos/seed/motion-ui-parallax/800/600"
            alt=""
            className="size-full object-cover"
          />
        </Parallax>

        <Parallax
          container={containerRef}
          speed={0.5}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="rounded-full bg-background/85 px-5 py-2 text-base font-medium text-foreground backdrop-blur">
            Parallax
          </span>
        </Parallax>

        <Parallax
          container={containerRef}
          speed={0.9}
          className="absolute bottom-4 right-4"
        >
          {/* biome-ignore lint/performance/noImgElement: plain img keeps the copy-paste preview portable (no next/image host config). */}
          <img
            src="https://picsum.photos/seed/motion-ui-avatar/120/120"
            alt=""
            className="size-12 rounded-full border-2 border-background object-cover shadow-lg"
          />
        </Parallax>
      </div>

      <div className="flex h-80 items-center justify-center text-sm text-muted-foreground">
        ↑ Scroll up
      </div>
    </div>
  );
}
```

### Scroll To usage

Button that smooth-scrolls to a target (offset, selector or element) via the active SmoothScroll provider; reduced-motion jumps instantly.

```tsx
"use client";

import { ScrollTo } from "@/components/motion/scroll-to";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

// ScrollTo uses the active SmoothScroll provider. Here it's contained
// (root={false}); the nav buttons glide the box to each section.
const SECTIONS = [
  { id: "sec-intro", label: "Intro" },
  { id: "sec-features", label: "Features" },
  { id: "sec-pricing", label: "Pricing" },
  { id: "sec-faq", label: "FAQ" },
];

export function ScrollToPreview() {
  return (
    <SmoothScroll
      root={false}
      className="relative h-80 w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <nav className="sticky top-0 z-10 flex gap-1.5 border-b border-border bg-background/80 p-2 backdrop-blur">
        {SECTIONS.map((s) => (
          <ScrollTo
            key={s.id}
            to={`#${s.id}`}
            offset={-48}
            className="rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {s.label}
          </ScrollTo>
        ))}
      </nav>

      {SECTIONS.map((s) => (
        <section
          id={s.id}
          key={s.id}
          className="flex h-64 items-center justify-center text-lg font-medium text-foreground"
        >
          {s.label}
        </section>
      ))}
    </SmoothScroll>
  );
}
```

### Scroll Reveal usage

Reveals its children with a spring slide and blur as they enter the viewport, once or every time. Reduced-motion keeps a fade.

```tsx
"use client";

import { useRef } from "react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

// On a page <ScrollReveal> tracks the viewport. Here root points at the box so
// each card reveals as it scrolls into the contained view.
const CARDS = ["Spring slide", "Blur in", "Staggered by delay", "Reveal once"];

export function ScrollRevealPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-80 w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <div className="flex flex-col gap-16 p-6">
        <div className="text-center text-sm text-muted-foreground">
          Scroll ↓
        </div>
        {CARDS.map((label, i) => (
          <ScrollReveal
            key={label}
            root={containerRef}
            once={false}
            delay={i * 0.05}
            className="rounded-xl border border-border bg-muted/50 px-4 py-16 text-center text-base font-medium text-foreground"
          >
            {label}
          </ScrollReveal>
        ))}
        <div className="text-center text-sm text-muted-foreground">End</div>
      </div>
    </div>
  );
}
```

## API Reference

### SmoothScroll

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `root` | `boolean` | `true` | No | Drive the page (window) when true, or a contained scroll area when false. |
| `lerp` | `number` | `0.1` | No | Smoothing factor; lower is smoother and heavier. |
| `duration` | `number` | `1.2` | No | Wheel / programmatic ease duration in seconds. |
| `orientation` | `"horizontal" \| "vertical"` | `vertical` | No | — |
| `wheelMultiplier` | `number` | `1` | No | Wheel scroll speed multiplier. |
| `touch` | `boolean` | `false` | No | Smooth touch scrolling. Off by default — native momentum is good on mobile. |
| `className` | `string` | — | No | — |

### ScrollProgress

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"circle" \| "bar"` | — | No | — |
| `position` | `"bottom" \| "top"` | — | No | — |
| `height` | `number` | — | No | Bar thickness in px. |
| `fixed` | `boolean` | — | No | Position the bar with `fixed` (page) or `absolute` (embedded). |
| `progress` | `MotionValue<number>` | — | No | Override the scroll source. Defaults to the page via useSmoothScroll. |
| `spring` | `boolean` | — | No | Spring-smooth the value. Disabled automatically under reduced motion. |
| `className` | `string` | — | No | — |
| `size` | `number` | — | No | Diameter in px. |
| `thickness` | `number` | — | No | Stroke width in px. |

### Parallax

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `speed` | `number` | `0.3` | No | Drift as a fraction of the element's travel through the viewport. Positive moves with the scroll (foreground), negative against it (background). ~0.1–0.5 reads best. |
| `axis` | `"x" \| "y"` | `y` | No | — |
| `container` | `RefObject<HTMLElement \| null>` | — | No | Scroll container for contained scroll areas. Defaults to the viewport. |
| `spring` | `boolean` | `true` | No | Spring-smooth the drift. Disabled automatically under reduced motion. |
| `className` | `string` | — | No | — |

### ScrollTo

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `to` | `ScrollTarget` | — | Yes | Where to scroll: px offset, selector string or element. |
| `offset` | `number` | — | No | Extra px offset from the target (e.g. to clear a sticky header). |
| `duration` | `number` | — | No | Override the ease duration in seconds. |
| `className` | `string` | — | No | — |

### ScrollReveal

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `y` | `number` | `16` | No | Slide distance in px before reveal. |
| `blur` | `number` | `8` | No | Enter blur in px (kept ≤ 10 per motion conventions). |
| `duration` | `number` | `0.6` | No | Reveal duration in seconds. |
| `delay` | `number` | `0` | No | — |
| `once` | `boolean` | `true` | No | Reveal only once (default) or every time it enters view. |
| `amount` | `number \| "all" \| "some"` | `0.3` | No | Portion of the element that must be visible to trigger. |
| `root` | `RefObject<Element \| null>` | — | No | Scroll root for contained scroll areas. Defaults to the viewport. |
| `className` | `string` | — | No | — |

