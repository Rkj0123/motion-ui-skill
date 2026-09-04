---
title: "Sign Up Form"
description: "Composed sign-up form that flags a field only once it is left, then clears the moment it is fixed, with a length-weighted strength meter, password reveal and an animated submit lifecycle."
category: "Blocks"
publishedAt: "2026-08-08"
updatedAt: "2026-08-28"
documentation: "references/blocks/signup-form.md"
markdown: "references/blocks/signup-form.md"
license: "MIT"
---

# Sign Up Form

> Composed sign-up form that flags a field only once it is left, then clears the moment it is fixed, with a length-weighted strength meter, password reveal and an animated submit lifecycle.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py signup-form --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { SignUpForm } from "@/components/motion/signup-form";

export function SignUpFormPreview() {
  const [formError, setFormError] = useState<string>();

  return (
    <div className="flex w-full justify-center py-4">
      <SignUpForm
        description="Sign up with taken@example.com to see the failure state."
        errorMessage={formError}
        onSubmit={async (values) => {
          setFormError(undefined);
          await new Promise((resolve) => setTimeout(resolve, 1200));
          if (values.email.toLowerCase().startsWith("taken@")) {
            setFormError("That email is already registered.");
            throw new Error("Email already registered");
          }
        }}
        footer={
          <>
            Already have an account?{" "}
            <button
              type="button"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Sign in
            </button>
          </>
        }
      />
    </div>
  );
}
```

## API Reference

### SignUpForm

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `values` | `SignUpValues` | — | No | Controlled values. Omit for uncontrolled. |
| `defaultValues` | `Partial<SignUpValues>` | — | No | — |
| `onValuesChange` | `((values: SignUpValues) => void)` | — | No | — |
| `onSubmit` | `((values: SignUpValues) => void \| Promise<void>)` | — | No | Called with valid values only. Return a promise to drive the button state. |
| `validate` | `((values: SignUpValues) => Partial<Record<keyof SignUpValues, string>>)` | — | No | Replace the built-in rules — return a message per invalid field. |
| `status` | `"error" \| "success" \| "loading" \| "idle"` | — | No | Controlled submit state. Omit to let the form track it. |
| `errorMessage` | `string` | — | No | Form-level failure message, shown above the submit button. |
| `title` | `ReactNode` | `Create your account` | No | — |
| `description` | `ReactNode` | `Start building in under a minute.` | No | — |
| `submitLabel` | `string` | `Create account` | No | — |
| `footer` | `ReactNode` | — | No | — |
| `strengthMeter` | `boolean` | `true` | No | Show the password strength meter. |
| `className` | `string` | — | No | — |
| `classNames` | `SignUpFormClassNames` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
