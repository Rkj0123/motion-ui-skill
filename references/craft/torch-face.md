---
title: "Torch Face"
description: "Yellow flashlight toggle with a face that lights up when the torch is on. Small detail, but the kind people notice on a control sheet."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/torch-face.md"
markdown: "references/craft/torch-face.md"
license: "MIT"
---

# Torch Face

> Yellow flashlight toggle with a face that lights up when the torch is on. Small detail, but the kind people notice on a control sheet.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py torch-face --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TorchFaceWidget } from "@/components/widgets/torch-face-widget";

export function TorchFaceWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TorchFaceWidget />
    </div>
  );
}
```

## API Reference

### TorchFaceWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
