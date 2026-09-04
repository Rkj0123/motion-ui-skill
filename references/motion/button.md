---
title: "Button"
description: "Spring-pressed Button plus StatefulButton, MagneticButton, and MetallicButton variants."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-08-25"
documentation: "references/motion/button.md"
markdown: "references/motion/button.md"
license: "MIT"
---

# Button

> Spring-pressed Button plus StatefulButton, MagneticButton, and MetallicButton variants.

## Install

### Metallic Button

A neutral button surface framed by a pronounced chrome rim with a straight traveling reflection.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py button-metallic --dest ./src
```

### Button

Press scale, hover lift, variants and sizes.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py button-base --dest ./src
```

### Stateful Button

Idle → loading → success / error with blur-swap slots and morphing width.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py button-stateful --dest ./src
```

### Magnetic Button

Button composed with the Magnetic wrapper for cursor-attracted pull.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py button-magnetic --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Metallic Button usage

A neutral button surface framed by a pronounced chrome rim with a straight traveling reflection.

```tsx
"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { MetallicButton } from "@/components/motion/button";

export function ButtonMetallicPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-10">
      <MetallicButton>
        Continue
        <ArrowUpRight className="size-4" />
      </MetallicButton>
      <MetallicButton size="sm">
        <Sparkles className="size-3.5" />
        Generate
      </MetallicButton>
      <MetallicButton size="icon" aria-label="Magic tools">
        <Sparkles className="size-4" />
      </MetallicButton>
    </div>
  );
}
```

### Button usage

Press scale, hover lift, variants and sizes.

```tsx
"use client";

import { ArrowRight, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/motion/button";

export function ButtonBasePreview() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="md">
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="md">
          <Download className="h-4 w-4" />
          Download
        </Button>
        <Button variant="outline" size="md">Outline</Button>
        <Button variant="ghost" size="md">Ghost</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="secondary" size="icon" aria-label="Delete">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="md" ripple>Ripple</Button>
        <Button variant="outline" size="md" ripple>Tap me</Button>
      </div>
    </div>
  );
}
```

### Stateful Button usage

Idle → loading → success / error with blur-swap slots and morphing width.

```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { type ButtonState, StatefulButton } from "@/components/motion/button";

export function ButtonStatefulPreview() {
  const [okState, setOkState] = useState<ButtonState>("idle");
  const [errState, setErrState] = useState<ButtonState>("idle");

  const run = (target: "ok" | "err") => {
    const setter = target === "ok" ? setOkState : setErrState;
    setter("loading");
    setTimeout(() => {
      setter(target === "ok" ? "success" : "error");
      setTimeout(() => setter("idle"), 1800);
    }, 1400);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <StatefulButton
        state={okState}
        variant="primary"
        size="md"
        onClick={() => run("ok")}
        loadingText="Saving"
        successText="Saved"
        icon={<ArrowRight className="h-4 w-4" />}
      >
        Save changes
      </StatefulButton>
      <StatefulButton
        state={errState}
        variant="secondary"
        size="md"
        onClick={() => run("err")}
        loadingText="Submitting"
        errorText="Failed"
      >
        Submit
      </StatefulButton>
    </div>
  );
}
```

### Magnetic Button usage

Button composed with the Magnetic wrapper for cursor-attracted pull.

```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/motion/button";

export function ButtonMagneticPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <MagneticButton variant="primary" size="md" strength={0.35}>
        Hover me
        <ArrowRight className="h-4 w-4" />
      </MagneticButton>
      <MagneticButton variant="secondary" size="md" strength={0.25}>
        Subtle pull
      </MagneticButton>
      <MagneticButton variant="outline" size="md" strength={0.5}>
        Strong pull
      </MagneticButton>
    </div>
  );
}
```

## API Reference

### MetallicButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `md` | No | — |
| `pressScale` | `number` | — | No | — |
| `paused` | `boolean` | `false` | No | Stops the traveling reflection while preserving the chrome rim. |

### Button

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ripple` | `boolean` | `false` | No | Spawn a Material-style ripple from the press point. Off by default. |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | `primary` | No | — |
| `className` | `string` | — | No | — |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `md` | No | — |
| `pressScale` | `number` | `0.93` | No | — |

### ButtonLink

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | `primary` | No | — |
| `className` | `string` | — | No | — |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `md` | No | — |
| `pressScale` | `number` | `0.93` | No | — |

### StatefulButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ripple` | `boolean` | — | No | Spawn a Material-style ripple from the press point. Off by default. |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | — | No | — |
| `className` | `string` | — | No | — |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | — | No | — |
| `pressScale` | `number` | — | No | — |
| `icon` | `ReactNode` | — | No | — |
| `state` | `"idle" \| "loading" \| "success" \| "error"` | `idle` | No | — |
| `loadingText` | `ReactNode` | `Loading` | No | — |
| `successText` | `ReactNode` | `Done` | No | — |
| `errorText` | `ReactNode` | `Try again` | No | — |

### MagneticButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ripple` | `boolean` | — | No | Spawn a Material-style ripple from the press point. Off by default. |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | — | No | — |
| `className` | `string` | — | No | — |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | — | No | — |
| `pressScale` | `number` | — | No | — |
| `strength` | `number` | `0.25` | No | Magnetic pull strength. Default 0.25. |
| `magneticClassName` | `string` | — | No | Class applied to the magnetic wrapper. |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
