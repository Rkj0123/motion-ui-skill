---
title: "Baseline UI Craft & Anti-Slop Guidelines"
description: "Opinionated design engineering standards to eliminate generic AI interface slop, enforce optical alignment, establish spacing rhythm, and elevate craft details."
documentation: "references/guides/baseline-ui-craft.md"
markdown: "references/guides/baseline-ui-craft.md"
---

# Baseline UI Craft & Anti-Slop Guidelines

> The Design Engineer's playbook for high-craft user interfaces, synthesizing principles from [ibelick/ui-skills](https://github.com/ibelick/ui-skills) (`baseline-ui`) and [cosscom/coss](https://github.com/cosscom/coss) (Origin UI / Cal.com).

---

## 1. Eliminating "AI UI Slop"

AI-generated interfaces frequently share telltale flaws:
- Uniform generic purple/blue gradients with massive oversaturated blur spheres.
- Excessive nested cards with 1px border lines everywhere.
- Inconsistent spacing (e.g. mixing 13px, 15px, 22px without a scale).
- Low-contrast light grey text on white backgrounds that fails accessibility.
- Buttons and inputs that lack tactile press feedback or focus rings.
- Jittery tabular numbers that jump horizontally as counts update.

---

## 2. The Craft Foundations

### 1. Spacing & Rhythm
- Use a strict $4\text{px}$ spatial scale (`p-1` through `p-8`).
- Related elements should have half the distance of unrelated elements:
  - Input label to input field: `mb-1.5` (6px)
  - Input field to helper text / error message: `mt-1.5` (6px)
  - Field group to next field group: `space-y-4` (16px) or `space-y-6` (24px)
  - Card inner padding: `p-4` (mobile) to `p-6` (desktop)

### 2. Optical Alignment & Icon Balance
- **Centering Icons**: Icons inside circular buttons or badges rarely look centered with pure mathematical center coordinates due to visual weight. For example, play icons (`Play`) need a 1px offset to the right.
- **Icon Sizing Proportions**:
  - Small button (`h-8`): `size-3.5` or `size-4` icon
  - Medium button (`h-9` / `h-10`): `size-4` or `size-4.5` icon
  - Large button (`h-11` / `h-12`): `size-5` icon
- **Icon-Only Buttons**: MUST always provide an explicit `aria-label` (e.g. `aria-label="Close dialog"`).

### 3. Typography Hierarchy
- Keep font weight variations disciplined: use `font-medium` (500) for interactive labels and subheadings, `font-semibold` (600) for primary section headings, and `font-normal` (400) for body copy. Avoid overusing `font-bold` (700) or `font-black` (900).
- Always specify `tabular-nums` on numbers, timers, dates, and financial metrics.

### 4. Interactive Feedback & Press Physics
- Every pressable element must communicate its physical affordance:
  - Hover: Subtle brightness lift or background fill (`hover:bg-muted/80`).
  - Active Press: Tactile scale compression (`whileTap={{ scale: 0.97 }}`).
  - Focus-Visible: Never use `outline-none` without an explicit replacement ring:
    ```css
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    ```

### 5. Micro-Interactions That Signal Craft
- **Radial Spotlight on Hover**: Subtle cursor-following light cone across dark cards.
- **Border Beams**: An animated highlight gradient that tracks along the perimeter of high-priority cards.
- **Password Strength Indicators**: Live multi-bar strength meter with color-coded feedback (red, amber, emerald).
- **Badge Pops**: Notification counter digits that pop in with a spring bounce when the count increments.
