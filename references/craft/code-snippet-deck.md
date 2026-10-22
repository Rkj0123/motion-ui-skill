---
title: "Code Snippet Deck"
description: "An interactive multi-runtime developer code snippet deck with runtime switching (cURL, TypeScript, Python, Go, Rust), live dynamic parameter customizations, and line highlighting."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/code-snippet-deck.md"
markdown: "references/craft/code-snippet-deck.md"
license: "MIT"
---

# Code Snippet Deck

> An interactive multi-runtime developer code snippet deck with runtime switching (cURL, TypeScript, Python, Go, Rust), live dynamic parameter customizations, and line highlighting.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py code-snippet-deck --dest ./src
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

import { CodeSnippetDeck as CodeSnippetDeck } from "@/components/craft/code-snippet-deck";

export function Example() {
  return (
    <div className="p-6">
      <CodeSnippetDeck />
    </div>
  );
}
```
