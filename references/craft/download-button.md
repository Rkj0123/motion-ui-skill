---
title: "Download with States"
description: "Raised 3D download key that sinks while downloading — arrow morphs to spinner to check — then pops back up as a solid emerald done state."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/download-button.md"
markdown: "references/craft/download-button.md"
license: "MIT"
---

# Download with States

> Raised 3D download key that sinks while downloading — arrow morphs to spinner to check — then pops back up as a solid emerald done state.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py download-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DownloadButton } from "@/components/buttons/download-button";

export function DownloadButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DownloadButton />
    </div>
  );
}
```

## API Reference

### DownloadButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
