---
title: "Contact Form"
description: "Contact form with honeypot spam guard, character count, field validation, loading state, and success confirmation screen."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/contact-form.md"
markdown: "references/craft/contact-form.md"
license: "MIT"
---

# Contact Form

> Contact form with honeypot spam guard, character count, field validation, loading state, and success confirmation screen.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py contact-form --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ContactForm } from "@/components/forms/contact-form";

export function ContactFormDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ContactForm />
    </div>
  );
}
```

## API Reference

### ContactForm

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
