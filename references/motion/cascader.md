---
title: "Cascader"
description: "Multi-level cascading drill-down selector with sliding column transitions, breadcrumb trails, instant global search, and keyboard navigation."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/cascader.md"
markdown: "references/motion/cascader.md"
license: "MIT"
---

# Cascader

> Multi-level cascading drill-down selector with sliding column transitions, breadcrumb trails, instant global search, and keyboard navigation. Inspired by KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cascader --dest ./src
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

import { Cascader, type CascaderOption } from "@/components/motion/cascader";
import { useState } from "react";

const OPTIONS: CascaderOption[] = [
  {
    value: "engineering",
    label: "Engineering",
    children: [
      {
        value: "frontend",
        label: "Frontend Systems",
        children: [
          { value: "react", label: "React & Next.js" },
          { value: "animation", label: "Motion & WebGL" },
        ],
      },
      {
        value: "infrastructure",
        label: "Infrastructure",
        children: [
          { value: "kubernetes", label: "Kubernetes" },
          { value: "terraform", label: "Terraform & IaC" },
        ],
      },
    ],
  },
  {
    value: "design",
    label: "Design",
    children: [
      { value: "tokens", label: "Design Tokens & WCAG" },
      { value: "prototyping", label: "Interactive Prototyping" },
    ],
  },
];

export function CascaderExample() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="p-6">
      <Cascader
        options={OPTIONS}
        value={value}
        onChange={(path, opt) => {
          setValue(path);
          console.log("Picked:", opt.label, "Path:", path);
        }}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `options` | `CascaderOption[]` | required | Nested tree array of selectable options and children. |
| `value` | `string[]` | `[]` | Selected leaf path array of string IDs. |
| `onChange` | `(path: string[], selectedOption: CascaderOption) => void` | `undefined` | Callback emitted when a leaf is chosen. |
| `placeholder` | `string` | `"Select category..."` | Placeholder text for header. |
| `searchable` | `boolean` | `true` | Enables flat recursive search across all levels. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
