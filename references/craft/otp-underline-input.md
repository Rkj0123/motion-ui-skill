---
title: "Otp Underline Input"
description: "Editorial underline OTP with serif heading and animated focus rules. Same edge-case handling as boxed — typing, delete, paste, and one-time-code autocomplete."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/otp-underline-input.md"
markdown: "references/craft/otp-underline-input.md"
license: "MIT"
---

# Otp Underline Input

> Editorial underline OTP with serif heading and animated focus rules. Same edge-case handling as boxed — typing, delete, paste, and one-time-code autocomplete.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py otp-underline-input --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { OtpUnderlineInput } from "@/components/otp/otp-underline-input";

export function OtpUnderlineInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <OtpUnderlineInput />
    </div>
  );
}
```

## API Reference

### OtpUnderlineInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
