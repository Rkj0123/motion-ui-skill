---
title: "Apple Hello Loader"
description: "Apple-style greeting loader that cycles through hello, bonjour, hola, and more with a soft fade. Pass greetings, intervalMs, and fadeMs to tune the loop."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/apple-hello-loader.md"
markdown: "references/craft/apple-hello-loader.md"
license: "MIT"
---

# Apple Hello Loader

> Apple-style greeting loader that cycles through hello, bonjour, hola, and more with a soft fade. Pass greetings, intervalMs, and fadeMs to tune the loop.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py apple-hello-loader --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AppleHelloLoader } from "@/components/loaders/apple-hello-loader";

export function AppleHelloLoaderDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AppleHelloLoader />
    </div>
  );
}
```

## API Reference

### AppleHelloLoader

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
