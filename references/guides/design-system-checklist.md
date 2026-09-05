---
title: "Design System Architecture & Production Checklist"
description: "Comprehensive engineering checklist and architectural standards for modern design systems, covering design tokens, WCAG 2.1 AA/AAA accessibility, component health, and governance."
documentation: "references/guides/design-system-checklist.md"
markdown: "references/guides/design-system-checklist.md"
---

# Design System Architecture & Production Checklist

> Synthesized from [design-system-checklist](https://github.com/ardakaracizmeli/design-system-checklist) and modern production design systems ([shadcn/ui](https://github.com/shadcn-ui/ui), Radix, Tailwind CSS).

A design system is not just a UI kit; it is the contract between design tokens, accessible components, developer experience, and governance. Use this checklist before releasing or auditing components in your design system.

---

## 1. Design Language & Brand Foundations

- [ ] **Design Principles Established**: Defined 3–5 core principles (e.g. *Predictable over clever*, *Frictionless by default*, *Accessible for all*).
- [ ] **Voice & Tone Guidelines**: Established standards for error messages, empty states, confirmation alerts, and technical explanations.
- [ ] **Brand Identity Mapping**: Logo assets, icon styles (stroke width, corner radiuses), and brand accent alignments documented.

---

## 2. Design Tokens Architecture

Design tokens represent the single source of truth for visual attributes across web, mobile, and agent interfaces.

### Color Tokens
- [ ] **Semantic Layering**: Never use raw hex codes or static palette values directly in components.
  - Primitive scale: `slate-50` through `slate-950`
  - Semantic roles: `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--ring`
- [ ] **WCAG 2.1 Contrast Standards**:
  - Minimum 4.5:1 for normal body copy (AA standard).
  - Minimum 3:1 for large text (18pt+ or 14pt bold) and active UI controls/borders.
  - Aim for 7:1 (AAA standard) on critical informational displays.
- [ ] **Dark Mode Inversion**:
  - Dark mode surfaces must use layered elevation (base is darker, elevated surfaces like cards and dialogs are lighter with subtle border rings).
  - Test pure black (`#000000`) vs deep obsidian (`#09090b` / `#0f172a`) to ensure anti-banding on OLED displays.

### Typography Scale
- [ ] **Modular Ratio Scale**:
  - `xs`: 12px / line-height 16px
  - `sm`: 14px / line-height 20px
  - `base`: 16px / line-height 24px
  - `lg`: 18px / line-height 28px
  - `xl`: 20px / line-height 28px
  - `2xl`: 24px / line-height 32px
  - `3xl`: 30px / line-height 36px
- [ ] **Tabular Figures (`tabular-nums`)**: Enabled on all metrics, counters, pricing, and streaming agent text to eliminate jitter.
- [ ] **Truncation & Ellipsis Rules**: Specified multiline clamping (`line-clamp-2`) and tooltip fallbacks for truncated titles.

### Spacing & Grid System
- [ ] **4px / 8px Spatial Rhythm**: All padding, margin, and gaps conform to multiples of 4:
  - `1`: 4px | `2`: 8px | `3`: 12px | `4`: 16px | `6`: 24px | `8`: 32px | `12`: 48px
- [ ] **Layout Containers**: Standardized container constraints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).

### Elevation & Border Radius
- [ ] **Elevation Tiers**: Defined shadow tokens for ambient, dropdown, card, modal, and popover depths.
- [ ] **Consistent Radius Scale**: `rounded-sm` (4px), `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px). Nested radiuses follow the inner formula: `R_inner = R_outer - padding`.

---

## 3. Component Health & API Contract

Every component must satisfy these 7 core requirements:

1. **Controlled & Uncontrolled Support**:
   - Provide `value` + `onChange` for controlled state.
   - Provide `defaultValue` for uncontrolled state.
2. **Class Merging**:
   - Always accept `className` and wrap with `cn(...)` (`clsx` + `tailwind-merge`) so consumer utilities override defaults without specificity hacks.
3. **Ref Forwarding**:
   - Forward DOM refs with `React.forwardRef` or modern React 19 ref attributes to allow focus management, positioning libraries, and measuring.
4. **Accessible Keyboard Navigation**:
   - Interactive elements must be reachable via `Tab` / `Shift+Tab`.
   - Menus, comboboxes, and lists must support `ArrowUp`, `ArrowDown`, `Home`, `End`, and `Enter`/`Space`.
   - Overlays must close on `Escape`.
5. **Visible Focus Rings**:
   - Distinct focus indicator using `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
   - Never suppress focus rings with `outline-none` unless replaced with a compliant visible ring.
6. **ARIA Roles & States**:
   - Proper `role` attribute (`dialog`, `listbox`, `tablist`, `menu`, `tooltip`).
   - Live states: `aria-expanded`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-invalid`.
   - Labeling: `aria-labelledby`, `aria-describedby`, or `aria-label` for icon-only buttons.
7. **Reduced Motion Adaptation**:
   - Query `useReducedMotion()`. Swap spatial translations and spring overshoots for instant opacity transitions.

---

## 4. Documentation & Governance

- [ ] **Anatomy Breakdown**: Labeled diagram of component parts (Trigger, Content, Header, Footer, Item, Indicator).
- [ ] **Do's and Don'ts**: Concrete visual examples of correct vs improper usage.
- [ ] **SemVer Release Contract**:
  - `Patch`: Bug fixes, CSS refactor without breaking consumer layouts.
  - `Minor`: New components, backward-compatible props.
  - `Major`: Removed props, changed event signatures, or modified required peer dependencies.
- [ ] **Deprecation Lifecycle**: Deprecated props emit development warnings for at least one minor version before deletion.
