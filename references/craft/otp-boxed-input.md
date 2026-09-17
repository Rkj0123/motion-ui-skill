---
title: "Otp Boxed Input"
description: "Full email verification card with icon header, destination text, animated square cells, progress dots, shake-on-error, and resend countdown."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/otp-boxed-input.md"
markdown: "references/craft/otp-boxed-input.md"
license: "MIT"
---

# Otp Boxed Input

> Full email verification card with icon header, destination text, animated square cells, progress dots, shake-on-error, and resend countdown.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py otp-boxed-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { OtpBoxedInput } from "@/components/otp/otp-boxed-input";

export function OtpBoxedInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <OtpBoxedInput />
    </div>
  );
}
```

## API Reference

### OtpBoxedInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
