---
title: "Duration Picker"
description: "A gooey, spring-animated picker for entering a duration in hours and minutes."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/duration-picker.md"
markdown: "references/craft/duration-picker.md"
license: "MIT"
---

# Duration Picker

> A gooey, spring-animated picker for entering a duration in hours and minutes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py duration-picker --dest ./src
```

## Dependencies

- `@radix-ui/react-slot`
- `clsx`
- `figma-squircle`
- `flubber`
- `motion`
- `react`
- `react-use-measure`
- `tailwind-merge`

## Usage

```tsx
"use client";

import DurationPicker from "@/components/craft/duration-picker";

export function Example() {
  return (
    <div className="p-6">
      <DurationPicker />
    </div>
  );
}
```
