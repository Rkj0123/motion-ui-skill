---
title: "Animated Toast Stack"
description: "Stacked toasts with status morphs, swipe dismissal, actions and layout-aware motion."
category: "Components"
publishedAt: "2026-06-05"
updatedAt: "2026-07-13"
documentation: "references/motion/animated-toast-stack.md"
markdown: "references/motion/animated-toast-stack.md"
license: "MIT"
---

# Animated Toast Stack

> Stacked toasts with status morphs, swipe dismissal, actions and layout-aware motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py animated-toast-stack --dest ./src
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

import { Check, LoaderCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";
import {
  AnimatedToastStack,
  type ToastInput,
  type ToastPosition,
  useAnimatedToastStack,
} from "@/components/motion/animated-toast-stack";
import { cn } from "@/lib/utils";

const POSITIONS: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const EXAMPLES: Array<ToastInput & { label: string }> = [
  {
    label: "Promise",
    status: "loading",
    title: "Publishing component",
    description: "Bundling source, preview, and registry metadata.",
    duration: 0,
  },
  {
    label: "Success",
    status: "success",
    title: "Component published",
    description: "Registry endpoint and raw source are available.",
  },
  {
    label: "Error",
    status: "error",
    title: "Snapshot failed",
    description: "Retry after the browser target settles.",
  },
];

export function AnimatedToastStackPreview() {
  const [position, setPosition] = useState<ToastPosition>("bottom-right");
  const {
    toasts,
    showToast,
    updateToast,
    dismissToast,
    clearToasts,
  } = useAnimatedToastStack({
    defaultDuration: 3600,
    limit: 5,
  });

  const openToast = (input: ToastInput) => {
    const id = showToast(input);
    if (input.status === "loading") {
      window.setTimeout(() => {
        updateToast(id, {
          status: "success",
          title: "Publish complete",
          description: "Toast updated in-place from loading to success.",
          duration: 3200,
        });
      }, 1800);
    }
  };

  const moveStack = (nextPosition: ToastPosition) => {
    setPosition(nextPosition);
    showToast({
      status: "info",
      title: "Position changed",
      description: `New toasts open from ${nextPosition}.`,
    });
  };

  return (
    <div className="flex min-h-72 w-full flex-col items-center justify-center gap-6">
      <AnimatedToastStack
        toasts={toasts}
        onDismiss={dismissToast}
        position={position}
        placement="fixed"
        maxVisible={4}
        classNames={{
          surface: "bg-card/95",
        }}
        icons={{
          neutral: <Sparkles className="h-3.5 w-3.5" />,
        }}
      />

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium text-foreground">Open a real toast</p>
        <p className="max-w-sm text-xs leading-5 text-muted-foreground">
          Toasts render fixed on the screen. Change position to open a toast from that edge.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {EXAMPLES.map((example) => {
          return (
            <button
              key={example.label}
              type="button"
              onClick={() => openToast(example)}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground transition-colors press hover:border-(--color-border-strong)"
            >
              {example.status === "loading" ? (
                <LoaderCircle className="h-3.5 w-3.5" />
              ) : example.status === "success" ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <X className="h-3.5 w-3.5" />
              )}
              {example.label}
            </button>
          );
        })}
        <button
          type="button"
          onClick={clearToasts}
          className="inline-flex h-9 items-center rounded-full px-4 text-xs font-medium text-muted-foreground press hover:bg-foreground/[0.06] hover:text-foreground"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {POSITIONS.map((positionOption) => (
          <button
            key={positionOption}
            type="button"
            onClick={() => moveStack(positionOption)}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors press",
              position === positionOption
                ? "bg-foreground text-background"
                : "bg-foreground/[0.04] text-muted-foreground hover:bg-foreground/[0.08] hover:text-foreground",
            )}
          >
            {positionOption}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## API Reference

### useAnimatedToastStack

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `initialToasts` | `ToastInput[]` | `[]` | No | — |
| `defaultDuration` | `number` | `4200` | No | — |
| `limit` | `number` | — | No | — |

### AnimatedToastStack

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `toasts` | `AnimatedToast[]` | — | Yes | — |
| `onDismiss` | `((id: string) => void)` | — | No | — |
| `position` | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right"` | `bottom-right` | No | — |
| `placement` | `"static" \| "fixed" \| "absolute"` | — | No | — |
| `fixed` | `boolean` | `false` | No | — |
| `portal` | `boolean` | — | No | — |
| `portalRoot` | `Element \| null` | — | No | — |
| `maxVisible` | `number` | `4` | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `ToastClassNames` | — | No | — |
| `icons` | `Partial<Record<ToastStatus, ReactNode>>` | — | No | — |
| `renderToast` | `((toast: AnimatedToast) => ReactNode)` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
