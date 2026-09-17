---
title: "Forgot Password Form"
description: "Password reset request form with email validation, loading state, success screen, and back-to-login navigation."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/forgot-password-form.md"
markdown: "references/craft/forgot-password-form.md"
license: "MIT"
---

# Forgot Password Form

> Password reset request form with email validation, loading state, success screen, and back-to-login navigation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py forgot-password-form --dest ./src
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

import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";

export function ForgotPasswordFormDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ForgotPasswordForm />
    </div>
  );
}
```

## API Reference

### ForgotPasswordForm

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
