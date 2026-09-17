---
title: "Testimonial"
description: "Auto-advancing testimonial carousel with stars, quote, avatar, and dot navigation. Social proof that moves on its own."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/testimonial.md"
markdown: "references/craft/testimonial.md"
license: "MIT"
---

# Testimonial

> Auto-advancing testimonial carousel with stars, quote, avatar, and dot navigation. Social proof that moves on its own.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py testimonial --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TestimonialCard } from "@/components/users/testimonial-card";

export function TestimonialCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TestimonialCard />
    </div>
  );
}
```

## API Reference

### TestimonialCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
