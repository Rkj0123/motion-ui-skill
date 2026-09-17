---
title: "Craft Signup Form"
description: "Registration form with name, email, password strength rules, confirm password match, and required terms acceptance."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/craft-signup-form.md"
markdown: "references/craft/craft-signup-form.md"
license: "MIT"
---

# Craft Signup Form

> Registration form with name, email, password strength rules, confirm password match, and required terms acceptance.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py craft-signup-form --dest ./src
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

import { SignupForm } from "@/components/forms/signup-form";

export function SignupFormDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SignupForm />
    </div>
  );
}
```

## API Reference

### SignupForm

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
