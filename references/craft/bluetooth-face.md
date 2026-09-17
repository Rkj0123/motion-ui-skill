---
title: "Bluetooth Face"
description: "A teal mascot face that reacts when Bluetooth connects or drops. Toggle on/off with an expression change — playful, but still reads as a real status widget."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/bluetooth-face.md"
markdown: "references/craft/bluetooth-face.md"
license: "MIT"
---

# Bluetooth Face

> A teal mascot face that reacts when Bluetooth connects or drops. Toggle on/off with an expression change — playful, but still reads as a real status widget.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py bluetooth-face --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BluetoothFaceWidget } from "@/components/widgets/bluetooth-face-widget";

export function BluetoothFaceWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BluetoothFaceWidget />
    </div>
  );
}
```

## API Reference

### BluetoothFaceWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
