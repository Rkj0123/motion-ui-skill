---
title: "Password Input"
description: "Smart password field with show/hide toggle, animated multi-segment strength meter, and live criteria validation checklist."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/password-input.md"
markdown: "references/motion/password-input.md"
license: "MIT"
---

# Password Input

> Smart password field with show/hide toggle, animated multi-segment strength meter, and live criteria validation checklist. Inspired by Coss (Origin UI) and Design System Checklist.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py password-input --dest ./src
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

import { PasswordInput } from "@/components/motion/password-input";
import { useState } from "react";

export function PasswordInputExample() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="max-w-sm p-6 bg-card rounded-2xl border border-border flex flex-col gap-4">
      <h3 className="text-sm font-semibold">Create Secure Password</h3>
      <PasswordInput
        value={password}
        onChange={(val, valid) => {
          setPassword(val);
          setIsValid(valid);
        }}
        showStrengthMeter={true}
        showCriteria={true}
        placeholder="Enter password..."
      />

      <button
        type="button"
        disabled={!isValid}
        className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `undefined` | Controlled password string value. |
| `onChange` | `(value: string, isValid: boolean) => void` | `undefined` | Callback emitted when input value or validity status updates. |
| `showStrengthMeter` | `boolean` | `true` | Displays the 4-segment animated score progress bar. |
| `showCriteria` | `boolean` | `true` | Displays the checklist of password security requirements. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
