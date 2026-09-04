---
title: "Collapsible"
description: "Animated disclosure section with smooth height: auto expansion, rotating chevron indicator, and accessible ARIA attributes."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/collapsible.md"
markdown: "references/motion/collapsible.md"
license: "MIT"
---

# Collapsible

> Animated disclosure section with smooth `height: auto` expansion, rotating chevron indicator, and accessible ARIA attributes. Inspired by shadcn/ui and Motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py collapsible --dest ./src
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

import { Collapsible } from "@/components/motion/collapsible";
import { useState } from "react";

export function CollapsibleExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-md p-6">
      <Collapsible
        title="Agent Execution Parameters"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="space-y-2">
          <p>
            Configure max tokens, sampling temperature, tool choice policies, and retry strategies for this workflow.
          </p>
          <div className="p-2 rounded-lg bg-muted font-mono text-[11px]">
            temperature: 0.2, max_tokens: 4096
          </div>
        </div>
      </Collapsible>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `ReactNode` | required | Header trigger label or element. |
| `children` | `ReactNode` | required | Content revealed within the collapsible container. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. |
| `open` | `boolean` | `undefined` | Controlled open state. |
| `onOpenChange` | `(isOpen: boolean) => void` | `undefined` | Callback emitted when open state toggles. |
| `disabled` | `boolean` | `false` | Disables toggle interaction. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
