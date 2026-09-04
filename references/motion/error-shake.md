---
title: "Error Shake"
description: "Damped oscillation shake wrapper with haptic error vibration feedback and configurable intensity for form validations."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/error-shake.md"
markdown: "references/motion/error-shake.md"
license: "MIT"
---

# Error Shake

> Damped oscillation shake wrapper with haptic error vibration feedback and configurable intensity for form validations. Inspired by transitions.dev and mobile design patterns.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py error-shake --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ErrorShake } from "@/components/motion/error-shake";
import { useState } from "react";

export function ErrorShakeExample() {
  const [hasError, setHasError] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setHasError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs p-8 space-y-4">
      <ErrorShake
        error={hasError}
        intensity="medium"
        onShakeEnd={() => setHasError(false)}
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (min 8 chars)"
          className={`w-full px-3.5 py-2 rounded-xl border ${
            hasError ? "border-rose-500 bg-rose-500/10" : "border-border bg-card"
          }`}
        />
      </ErrorShake>
      <button
        type="submit"
        className="w-full py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
      >
        Sign In
      </button>
    </form>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `error` | `boolean` | `false` | When changed to `true`, triggers the shake animation. |
| `intensity` | `"mild" \| "medium" \| "strong"` | `"medium"` | Amplitude of oscillation. |
| `onShakeEnd` | `() => void` | `undefined` | Callback invoked once the shake animation finishes. |
| `children` | `React.ReactNode` | Required | Element or form wrapped by the shake container. |
| `className` | `string` | `undefined` | Container classes. |
