---
title: "Copy Email Button"
description: "One-click copy maintainer email address with inline tooltip feedback (\"Click to copy\" / \"Copied\") and zero mailbox popup."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/copy-email.md"
markdown: "references/craft/copy-email.md"
license: "MIT"
---

# Copy Email Button

> One-click copy maintainer email address with inline tooltip feedback ("Click to copy" / "Copied") and zero mailbox popup.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py copy-email --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CopyEmail } from "@/components/contact/copy-email";

export function CopyEmailDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CopyEmail email="hello@example.com" />
    </div>
  );
}
```

## API Reference

### CopyEmail

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `email` | `string` | `"hello@example.com"` | No | Email address to copy |
| `children` | `string` | — | No | Visible label. Defaults to email address. |
| `className` | `string` | — | No | Additional CSS classes |
