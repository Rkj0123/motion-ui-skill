---
title: "Tabs"
description: "Pill, segment or underline tabs with a spring layoutId indicator."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-07-13"
documentation: "references/motion/tabs.md"
markdown: "references/motion/tabs.md"
license: "MIT"
---

# Tabs

> Pill, segment or underline tabs with a spring layoutId indicator.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tabs --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/motion/tabs";

export function TabsPreview() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <Section title="Pill">
        <Tabs defaultValue="overview" variant="pill">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted-foreground">High-level summary.</TabsContent>
          <TabsContent value="activity" className="text-sm text-muted-foreground">Recent events.</TabsContent>
          <TabsContent value="settings" className="text-sm text-muted-foreground">Preferences.</TabsContent>
        </Tabs>
      </Section>
      <Section title="Segment">
        <Tabs defaultValue="day" variant="segment">
          <TabsList>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </Section>
      <Section title="Underline">
        <Tabs defaultValue="all" variant="underline">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
        </Tabs>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</span>
      {children}
    </div>
  );
}
```

## API Reference

### Tabs

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `defaultValue` | `string` | — | No | — |
| `value` | `string` | — | No | — |
| `onValueChange` | `((v: string) => void)` | — | No | — |
| `variant` | `"pill" \| "underline" \| "segment"` | `pill` | No | — |
| `className` | `string` | — | No | — |

### TabsList

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### TabsTrigger

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |
| `indicatorClassName` | `string` | — | No | — |

### TabsContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

