---
title: "OTP Input"
description: "One-time-code input with a gliding focus ring, digits that roll in per slot, error shake and a success check draw."
category: "Blocks"
publishedAt: "2026-06-13"
updatedAt: "2026-07-13"
documentation: "references/blocks/otp-input.md"
markdown: "references/blocks/otp-input.md"
license: "MIT"
---

# OTP Input

> One-time-code input with a gliding focus ring, digits that roll in per slot, error shake and a success check draw.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py otp-input --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { OTPInput, type OTPStatus } from "@/components/motion/otp-input";

const CODE = "123456";

export function OTPInputPreview() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<OTPStatus>("idle");

  return (
    <div className="flex flex-col items-center gap-4">
      <OTPInput
        label="Verification code"
        hint={`Enter ${CODE} to verify.`}
        successMessage="Verified."
        errorMessage="Wrong code, try again."
        value={value}
        status={status}
        onChange={(v) => {
          setValue(v);
          if (status !== "idle") setStatus("idle");
        }}
        onComplete={(v) => setStatus(v === CODE ? "success" : "error")}
      />
    </div>
  );
}
```

## API Reference

### OTPInput

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `length` | `number` | `6` | No | Number of slots. Default 6. |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onChange` | `((value: string) => void)` | — | No | — |
| `onComplete` | `((value: string) => void)` | — | No | Fires once every slot is filled. |
| `label` | `string` | — | No | Optional label rendered above the slots. |
| `hint` | `string` | — | No | Helper text shown below the slots while idle. |
| `successMessage` | `string` | — | No | Message shown below the slots when status is "success". |
| `errorMessage` | `string` | — | No | Message shown below the slots when status is "error". |
| `status` | `"error" \| "success" \| "idle"` | `idle` | No | External validation feedback. "error" shakes, "success" draws a check. |
| `mask` | `boolean` | `false` | No | Render dots instead of the typed digits. |
| `disabled` | `boolean` | `false` | No | — |
| `autoFocus` | `boolean` | `false` | No | — |
| `aria-label` | `string` | `One-time passcode` | No | Accessible label for the underlying input. |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
