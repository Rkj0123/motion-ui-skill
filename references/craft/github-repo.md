---
title: "Github Repo"
description: "GitHub repo card with owner, description, language dot, star/fork counts, and a toggleable Star button. Open source landing pages, simplified."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/github-repo.md"
markdown: "references/craft/github-repo.md"
license: "MIT"
---

# Github Repo

> GitHub repo card with owner, description, language dot, star/fork counts, and a toggleable Star button. Open source landing pages, simplified.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py github-repo --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GitHubRepoCard } from "@/components/socials/github-repo-card";

export function GitHubRepoCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GitHubRepoCard />
    </div>
  );
}
```

## API Reference

### GitHubRepoCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
