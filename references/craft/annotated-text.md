---
title: "Annotated Text"
description: "Hand-drawn text annotations — wavy underlines, highlights, arrows, brackets, and more. Pass variant and optional color to style any inline label or callout."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/annotated-text.md"
markdown: "references/craft/annotated-text.md"
license: "MIT"
---

# Annotated Text

> Hand-drawn text annotations — wavy underlines, highlights, arrows, brackets, and more. Pass variant and optional color to style any inline label or callout.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py annotated-text --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AnnotatedText } from "@/components/underlines/annotated-text";

export function AnnotatedTextDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AnnotatedText />
    </div>
  );
}
```

## API Reference

### AnnotatedText

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
