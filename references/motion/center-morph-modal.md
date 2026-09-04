---
title: "Center Morph Modal"
description: "A composable modal whose full-size surface unfolds from its exact center toward every edge, then folds back the same way with an inset close control."
category: "Components"
publishedAt: "2026-07-21"
updatedAt: "2026-08-20"
documentation: "references/motion/center-morph-modal.md"
markdown: "references/motion/center-morph-modal.md"
license: "MIT"
---

# Center Morph Modal

> A composable modal whose full-size surface unfolds from its exact center toward every edge, then folds back the same way with an inset close control.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py center-morph-modal --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ArrowUpRight, Check } from "lucide-react";
import {
  CenterMorphModal,
  CenterMorphModalContent,
  CenterMorphModalTrigger,
} from "@/components/motion/center-morph-modal";

export function CenterMorphModalPreview() {
  return (
    <div className="flex min-h-[420px] w-full items-center justify-center">
      <CenterMorphModal>
        <CenterMorphModalTrigger>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Open modal
          </button>
        </CenterMorphModalTrigger>

        <CenterMorphModalContent
          ariaLabel="Motion UI Pro"
          ariaDescribedBy="center-morph-pro-description"
        >
          <div className="p-7 sm:p-8">
            <p className="text-sm font-medium text-muted-foreground">
              Motion UI Pro
            </p>
            <h2 className="mt-5 max-w-xs pr-8 text-2xl font-medium tracking-tight text-foreground">
              Ship the whole experience.
            </h2>
            <p
              id="center-morph-pro-description"
              className="mt-3 text-sm leading-relaxed text-muted-foreground"
            >
              Go beyond individual components with premium animated sections
              and complete Next.js templates.
            </p>

            <div className="mt-7 space-y-3 border-y border-border py-5">
              {[
                "Premium animated sections",
                "Complete Next.js templates",
                "Editable source and private registry",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <Check
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore Motion UI Pro
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </CenterMorphModalContent>
      </CenterMorphModal>
    </div>
  );
}
```

## API Reference

### CenterMorphModal

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `open` | `boolean` | — | No | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | No | Initial state when used uncontrolled. |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |

### CenterMorphModalContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | `string` | — | Yes | Accessible name announced by screen readers. |
| `ariaDescribedBy` | `string` | — | No | Optional id of descriptive content inside the modal. |
| `dismissible` | `boolean` | `true` | No | Close on Escape or backdrop press. Default true. |
| `showCloseButton` | `boolean` | `true` | No | Render the close control inside the panel's top-right corner. Default true. |
| `closeButtonLabel` | `string` | `Close modal` | No | — |
| `className` | `string` | — | No | — |
| `backdropClassName` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
