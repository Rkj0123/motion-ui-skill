---
title: "Input"
description: "Text input with label, left/right icons, optional stable error row, error shake and success check draw."
category: "Components"
publishedAt: "2026-06-29"
updatedAt: "2026-08-28"
documentation: "references/motion/input.md"
markdown: "references/motion/input.md"
license: "MIT"
---

# Input

> Text input with label, left/right icons, optional stable error row, error shake and success check draw.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py input --dest ./src
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

import { Eye, EyeOff, Mail, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/motion/input";

export function InputPreview() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("hunter2");
  const [query, setQuery] = useState("Ada");
  const [show, setShow] = useState(false);

  const emailError =
    email.length > 0 && !email.includes("@") ? "Enter a valid email address." : undefined;

  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        leftIcon={<Mail />}
        value={email}
        onChange={setEmail}
        error={emailError}
        reserveErrorLine
      />
      <Input
        label="Password"
        type={show ? "text" : "password"}
        value={pass}
        onChange={setPass}
        rightIcon={
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="pointer-events-auto"
          >
            {show ? <EyeOff /> : <Eye />}
          </button>
        }
        reserveErrorLine
      />
      <Input
        label="Search"
        leftIcon={<Search />}
        value={query}
        onChange={setQuery}
        success={query.length > 1}
        reserveErrorLine
      />
    </div>
  );
}
```

## API Reference

### Input

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | — | No | — |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onChange` | `((value: string) => void)` | — | No | — |
| `error` | `string \| boolean` | — | No | Truthy error triggers a shake, red border and (if a string) a message. |
| `reserveErrorLine` | `boolean` | `false` | No | Reserve one message line so validation does not shift nearby content. |
| `success` | `boolean` | — | No | — |
| `leftIcon` | `ReactNode` | — | No | — |
| `rightIcon` | `ReactNode` | — | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `InputClassNames` | — | No | — |

