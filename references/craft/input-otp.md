---
title: "Input Otp"
description: "Component from ObsidianUI: input-otp"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/input-otp.md"
markdown: "references/craft/input-otp.md"
license: "MIT"
---

# Input Otp

> Component from ObsidianUI: input-otp

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py input-otp --dest ./src
```

## Dependencies

- `clsx`
- `input-otp`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import InputOtp from "@/components/craft/input-otp";

export function Example() {
  return (
    <div className="p-6">
      <InputOtp />
    </div>
  );
}
```
