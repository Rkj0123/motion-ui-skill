---
title: "Phone Input"
description: "International phone number input with search-filtered country selector dropdown, flags, dial codes, and spring transitions."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/phone-input.md"
markdown: "references/motion/phone-input.md"
license: "MIT"
---

# Phone Input

> International phone number input with search-filtered country selector dropdown, flags, dial codes, and spring transitions. Inspired by Origin UI (Coss) and KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py phone-input --dest ./src
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

import { PhoneInput, type CountryCode } from "@/components/motion/phone-input";
import { useState } from "react";

export function PhoneInputExample() {
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-xs p-8">
      <PhoneInput
        value={phone}
        onChange={(val, country) => setPhone(val)}
        placeholder="(555) 000-0000"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `""` | Phone number input string. |
| `onChange` | `(val: string, country: CountryCode) => void` | `undefined` | Change callback returning value and selected country. |
| `countries` | `CountryCode[]` | Default list | List of country flags and dialing prefixes. |
| `defaultCountry` | `string` | `"United States"` | Initially selected country. |
| `disabled` | `boolean` | `false` | Disables country picker and input field. |
| `className` | `string` | `undefined` | Custom outer wrapper classes. |
