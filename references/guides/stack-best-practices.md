---
title: "Modern Stack Best Practices Guide"
description: "Framework integration guidelines for Next.js App Router, React 19, Tailwind CSS v3/v4, and Motion."
documentation: "references/guides/stack-best-practices.md"
markdown: "references/guides/stack-best-practices.md"
---

# Modern Stack Best Practices Guide

> Synthesized from `data/stacks/` for production-grade React, Next.js, and Tailwind CSS development.

## 1. Next.js App Router Integration

- **Server vs Client Components**:
  - Keep route layouts and page data fetching in Server Components (`async function Page()`).
  - Isolate animated surfaces into Client Components marked with `"use client";` at the top of the file.
  - Pass server-fetched data into client components via serializable props.
- **View Transitions**:
  - Utilize React 19 `useTransition` and native `document.startViewTransition()` for smooth page transitions without flashing blank states.
  - Pair with `layoutId` for shared-element morphs across route boundaries.

## 2. React 19 & State Primitives

- **Optimistic UI Updates**:
  - Use `useOptimistic` to instantly reflect button clicks, toggles, or list additions before API verification.
- **Form Actions & Async State**:
  - Use `useActionState` to manage pending, error, and success states for forms, pairing with `MorphStatusButton` or `HoldButton`.
- **Ref as Prop**:
  - React 19 passes `ref` directly as a component prop without requiring `forwardRef` wrapping.

## 3. Tailwind CSS & Motion Harmonization

- **Utility Classes & cn()**:
  - Always merge dynamic classes using `cn()` from `@/lib/utils` (`clsx` + `tailwind-merge`).
  - Do not concatenate raw string classes with `+` or template strings without `cn()`.
- **Motion Component Styling**:
  - Use Tailwind for visual geometry, typography, colors, and shadows.
  - Use Motion (`motion/react` or `framer-motion`) for dynamic springs, gesture tracking, physics, and exit transitions.
