---
title: "Page Loader Overlay"
description: "Full-screen page loader overlay with an ink spinner, subtle backdrop, and polite accessibility announcements."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/page-loader-overlay.md"
markdown: "references/craft/page-loader-overlay.md"
license: "MIT"
---

# Page Loader Overlay

> Full-screen page loader overlay with an ink spinner, subtle backdrop, and polite accessibility announcements.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py page-loader-overlay --dest ./src
```

## Dependencies

- `lucide-react`
- `react`

## Usage

```tsx
import { PageLoaderOverlay } from "@/components/system/loaders/page-loader-overlay";

export function PageLoaderOverlayDemo() {
  return (
    <div className="relative h-64 w-full">
      <PageLoaderOverlay />
    </div>
  );
}
```

## API Reference

### PageLoaderOverlay

A full-screen loading screen overlay providing an accessible loading status indicator.
