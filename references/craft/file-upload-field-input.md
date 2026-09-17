---
title: "File Upload Field Input"
description: "Card-style file upload with drag-and-drop zone, browse button, format/size hints, typed file rows, and remove actions."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/file-upload-field-input.md"
markdown: "references/craft/file-upload-field-input.md"
license: "MIT"
---

# File Upload Field Input

> Card-style file upload with drag-and-drop zone, browse button, format/size hints, typed file rows, and remove actions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py file-upload-field-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FileUploadFieldInput } from "@/components/inputs/file-upload-field-input";

export function FileUploadFieldInputDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FileUploadFieldInput />
    </div>
  );
}
```

## API Reference

### FileUploadFieldInput

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
