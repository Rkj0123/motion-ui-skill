---
title: "Contact Profile"
description: "Museum placard contact directory — mono labels, serif name, and typographic rows without icon clutter."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/contact-profile.md"
markdown: "references/craft/contact-profile.md"
license: "MIT"
---

# Contact Profile

> Museum placard contact directory — mono labels, serif name, and typographic rows without icon clutter.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py contact-profile --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ContactProfileCard } from "@/components/profile/contact-profile-card";

export function ContactProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ContactProfileCard />
    </div>
  );
}
```

## API Reference

### ContactProfileCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
