---
title: "Login Form"
description: "Production login form with email/password validation, remember me, show password, loading state, and forgot-password link."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/login-form.md"
markdown: "references/craft/login-form.md"
license: "MIT"
---

# Login Form

> Production login form with email/password validation, remember me, show password, loading state, and forgot-password link.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py login-form --dest ./src
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

import { LoginForm } from "@/components/forms/login-form";

export function LoginFormDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LoginForm />
    </div>
  );
}
```

## API Reference

### LoginForm

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
