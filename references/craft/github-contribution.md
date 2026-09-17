---
title: "Github Contribution"
description: "GitHub-style contribution heatmap with year selector, total count, and Less/More legend. Pulls real data when you pass a username."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/github-contribution.md"
markdown: "references/craft/github-contribution.md"
license: "MIT"
---

# Github Contribution

> GitHub-style contribution heatmap with year selector, total count, and Less/More legend. Pulls real data when you pass a username.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py github-contribution --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GithubContributionCard } from "@/components/socials/github-contribution";

export function GithubContributionCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GithubContributionCard />
    </div>
  );
}
```

## API Reference

### GithubContributionCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
