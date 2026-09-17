---
title: "Newsletter Form"
description: "Email subscribe form with inline button, validation, privacy note, and inline success message — built for footers and landing pages."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/newsletter-form.md"
markdown: "references/craft/newsletter-form.md"
license: "MIT"
---

# Newsletter Form

> Email subscribe form with inline button, validation, privacy note, and inline success message — built for footers and landing pages.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py newsletter-form --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NewsletterForm } from "@/components/forms/newsletter-form";

export function NewsletterFormDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <NewsletterForm />
    </div>
  );
}
```

## API Reference

### NewsletterForm

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
