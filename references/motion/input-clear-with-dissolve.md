---
title: "Input Clear with Dissolve"
description: "Form input with animated character dissolve dissipation effect that scatters letters with particle blur when clearing."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/input-clear-with-dissolve.md"
markdown: "references/motion/input-clear-with-dissolve.md"
license: "MIT"
---

# Input Clear with Dissolve

> Form input with animated character dissolve dissipation effect that scatters letters with particle blur when clearing.

Transition pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). When the user clicks the clear button, characters don't disappear instantaneously; instead, individual letter spans stagger, float upward, and blur out like dispersing vapor.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py input-clear-with-dissolve --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InputClearWithDissolve } from "@/components/motion/input-clear-with-dissolve";

export function InputClearWithDissolveDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <InputClearWithDissolve defaultValue="Dynamic Motion Primitives" />
    </div>
  );
}
```

## API Reference

### InputClearWithDissolve

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value` | `string` | — | No | Controlled input value |
| `defaultValue` | `string` | `"search query"` | No | Uncontrolled default initial value |
| `onValueChange` | `(val: string) => void` | — | No | Fired on input value changes |
| `placeholder` | `string` | `"Type something..."` | No | HTML input placeholder |
| `className` | `string` | — | No | Additional CSS classes |
