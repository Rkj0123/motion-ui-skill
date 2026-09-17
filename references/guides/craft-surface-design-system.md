---
title: "Craft & Surface Design System"
description: "Design specifications, typography, elevation, and component patterns for Motion UI Craft & Surface components."
category: "Design Systems"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/guides/craft-surface-design-system.md"
markdown: "references/guides/craft-surface-design-system.md"
license: "MIT"
---

# Craft & Surface Design System

The Craft & Surface aesthetic is built around the concept of a clean, quiet workbench: tools and components laid out with tactile precision, ready for production. The brand and showcase surfaces remain neutral so that interactive controls and components remain the focal point.

---

## 1. Color Palette

The palette pairs deep neutral ink with crisp white surfaces and restrained, purposeful accents:

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `ink` | `#171717` | Primary text, high-contrast headings, solid button fills |
| `ink-soft` | `#262626` | Secondary headings, active icons, subtle text |
| `body` | `#404040` | Body copy, descriptions, article text |
| `muted` | `#737373` | Secondary labels, captions, metadata |
| `faint` | `#a3a3a3` | Placeholder text, disabled glyphs |
| `border` | `#e5e5e5` | Standard structural borders, dividers |
| `border-subtle` | `#f5f5f5` | Inner container borders, secondary cards |
| `paper` | `#ffffff` | Primary background, card surfaces, button labels |
| `paper-tint` | `#fafafa` | Subtle stage backgrounds, preview containers |
| `accent-rose` | `#f43f5e` | Active likes, bookmark highlights, badges |
| `accent-cyan` | `#a5f3fc` | Highlight glows, subtle cyan badges |
| `danger` | `#fda4af` | Error borders, destructive states |

---

## 2. Typography

Components utilize a pairing of expressive serif display typography and crisp geometric sans-serif for UI controls:

- **Display & Headline**: `Instrument Serif`, `ui-serif`, `Georgia`, `serif`
  - Font size: `1.875rem` (Display), `1.5rem` (Headline)
  - Weight: `400`
  - Purpose: Editorial headers, hero titles, ticket labels, certificate cards
- **Title & UI Labels**: `Geist`, `ui-sans-serif`, `system-ui`, `sans-serif`
  - Font size: `0.875rem` (Title, 600 weight), `0.75rem` (Label, 500 weight)
  - Purpose: Button labels, form inputs, table headers, widget status
- **Body**: `Geist`, `ui-sans-serif`, `system-ui`, `sans-serif`
  - Font size: `1rem` / `0.875rem`, weight `400`, letter spacing `-0.025em`
- **Monospace**: `Geist Mono`, `ui-monospace`, `monospace`
  - Font size: `0.75rem` / `0.625rem`
  - Purpose: Timestamps, transaction IDs, code snippets, coordinates

---

## 3. Geometry & Elevation

- **Radii Tokens**:
  - `rounded-md` (`6px` - `8px`): Buttons, input fields, badges, tags
  - `rounded-lg` (`12px` - `16px`): Cards, dropdown menus, notification banners
  - `rounded-2xl` (`24px`): Editorial cards, mockups, large containers
  - `rounded-full` (`9999px`): Pills, avatar rings, slider handles
- **Internal Spacing**:
  - Standard container padding: `p-4` or `p-6`
  - Compact widget spacing: `gap-2` or `gap-3`
- **Border-Based Focus**:
  - Input focus states avoid neon rings. Instead, focus transitions to a darker border (`border-neutral-800`) with `ring-0` or `outline-none`.

---

## 4. Tactile & Physical Interactions

Craft components incorporate physical, skeuomorphic cues without visual clutter:

1. **Tactile 3D Buttons**:
   - Built with multi-layered box-shadows mimicking physical keycaps:
     `shadow-[0_4px_0_0_#171717] active:shadow-[0_0px_0_0_#171717] active:translate-y-1`
   - Tactile feedback indicates exact button depression upon press.
2. **Neumorphic Soft UI**:
   - Dual-shadow light/dark balance on soft neutral surfaces:
     `shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.08)]`
   - Transitions to inset shadows when toggled active.
3. **Physical Widgets & Mockups**:
   - High-fidelity SVG frames for Apple iPhone, MacBook, iPad, Watch, and iPod.
   - Dynamic indicators for battery, audio recording, stopwatch, compass, and hydration.

---

## 5. Integration with Multi-Style Presets

Craft components fit into the `origin` and `minimal` style presets of Motion UI, offering developers pre-built editorial layouts, device mockups, and physical tactile buttons that complement standard motion primitives.
