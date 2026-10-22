---
title: "Form"
description: "A modular, composable form system with accessible inputs, textareas, custom selects, checkboxes, radio groups, switches, and animated validation messages."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/form.md"
markdown: "references/blocks/form.md"
license: "MIT"
---

# Form

> A modular, composable form system with accessible inputs, textareas, custom selects, checkboxes, radio groups, switches, and animated validation messages.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py form --dest ./src
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

import { Form as Form } from "@/components/blocks/form";

export function Example() {
  return (
    <div className="p-6">
      <Form />
    </div>
  );
}
```
