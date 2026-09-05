---
title: "Universal Mobile-First Interaction Patterns"
description: "Cross-platform touch guidelines, mobile gesture physics, haptic feedback semantics, and responsive adaptive component adaptations inspired by Expo."
documentation: "references/guides/universal-mobile-patterns.md"
markdown: "references/guides/universal-mobile-patterns.md"
---

# Universal Mobile-First Interaction Patterns

> Engineering resilient cross-platform web and mobile interfaces, synthesizing principles from [expo/expo](https://github.com/expo/expo) and Apple HIG / Material Design standards.

---

## 1. Touch Target Ergonomics

On mobile devices, human thumbs and index fingers lack pixel-level precision.
- **Minimum Interactive Touch Region**:
  - Apple Human Interface Guidelines: **$44 \times 44\text{pt}$**
  - Android Material Design: **$48 \times 48\text{dp}$**
- **Visual vs Tap Target**: An icon button may visually measure $28 \times 28\text{px}$, but its clickable hit area must be expanded via padding or pseudo-elements (`after:absolute after:-inset-2`).
- **Pointer Media Query Guard**:
  ```tsx
  // lib/hooks/use-hover-capable.ts
  // Only enable hover transforms on devices with a true pointer
  @media (hover: hover) and (pointer: fine) { ... }
  ```
  Prevents mobile browsers from entering sticky tap states where a tapped button permanently retains its desktop `:hover` appearance.

---

## 2. Semantic Haptic Feedback

Haptics bridge the gap between digital software and physical tactile perception.

### Haptic Trigger Taxonomy
| Haptic Role | Sensation | Use Case |
| :--- | :--- | :--- |
| `selection` | 10ms crisp tap | Wheel picker notches, slider steps, tab switching. |
| `light` | 15ms soft impulse | Button tap, toggle switch, dropdown menu item click. |
| `medium` | 30ms firm impulse | Long-press activation, reordering item pickup. |
| `heavy` | 50ms deep thump | Bottom sheet snap to max height, pull-to-refresh trigger threshold. |
| `success` | Light-pause-medium | Form submission success, transaction confirmed, task completed. |
| `warning` | Medium-pause-medium | Destructive action confirmation, near limit alert. |
| `error` | Rapid 3-pulse vibration | Validation failure, unauthorized action, network error. |

---

## 3. Gesture Physics & Sheet Dynamics

### Dragging & Rubber-Banding
When an overlay or bottom sheet is pulled past its boundary, apply exponential decay rather than hard clamping:
$$\text{offset}_{\text{damped}} = \text{threshold} + (\text{excess} \times 0.2)$$
This gives the interface a tactile, elastic physical boundary.

### Velocity Handoff (Flick vs Distance)
When dismissing a bottom sheet or swipeable row:
- If velocity $v_y > 400\text{px/s}$, dismiss the sheet regardless of distance moved.
- If velocity is low, dismiss only if dragged past 40% of the total height.
- If released before 40% with low velocity, spring back to open state using `SPRING_PANEL`.

---

## 4. Adaptive Responsive Primitives

Universal components gracefully adapt between mobile and desktop form factors:

| Mobile Primitive | Desktop Adaptation | Rationale |
| :--- | :--- | :--- |
| **Action Sheet** | Dropdown Menu / Popover | Mobile thumbs reach bottom edge easily; desktop users click near mouse cursor. |
| **Bottom Sheet** | Center Modal Dialog | Bottom sheet fills mobile viewport ergonomically; modals center on widescreen displays. |
| **Segmented Control** | Tabs / Underline Bar | Touch thumbs tap wide pills; desktop users navigate compact tab rows. |
| **Full-Screen Search** | Command Palette (⌘K) | Mobile keyboards need full screen space; desktop keyboards favor centered palettes. |
