---
title: "Movie Pass Button"
description: "Cinema pass button that tears cleanly along perforated stub notches upon click with hinge physics."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/movie-pass-button.md"
markdown: "references/craft/movie-pass-button.md"
license: "MIT"
---

# Movie Pass Button

> Cinema pass button that tears cleanly along perforated stub notches upon click with hinge physics.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py movie-pass-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MoviePassButton } from "@/components/buttons/movie-pass-button";

export function MoviePassButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MoviePassButton>Click Me</MoviePassButton>
    </div>
  );
}
```

## API Reference

### MoviePassButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button pass label content |
