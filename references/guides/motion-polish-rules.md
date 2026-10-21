---
title: "Motion Polish & Interaction Rules Guide"
description: "Master motion polish, micro-distance formulas, layer budgets, and progressive skeleton generation rules synthesized from Transitions.dev."
documentation: "references/guides/motion-polish-rules.md"
markdown: "references/guides/motion-polish-rules.md"
---

# Motion Polish & Interaction Rules Guide

> Synthesized from [transitions.dev](https://github.com/Jakubantalik/transitions.dev) by Jakub Antalík (`transitions-polish` and `transitions-ui-generation`).

Micro-interactions separate amateur interfaces from world-class software. To achieve physical, organic UI that never feels stiff or floaty, apply these exact distance formulas, timing scales, and compositor constraints.

---

## 1. The 5 Canonical Micro-Distance Rules

Never pick random pixel translation values. All motion distances are categorized by functional usage:

| Scale | Offset Distance | Interaction Usage | Physics Curve / Duration |
| :--- | :--- | :--- | :--- |
| **Micro** | `4px` | Label state swaps, button icon nudges, inline pill trades | `SPRING_SWAP` or `150ms` |
| **Small** | `6px` | Error input shakes, badge pop-ins, small segment switches | `Keyframe oscillate [-4px, 4px, -2px, 0]` |
| **Base** | `8px` | Modal dialog reveals, page step slides, dropdown menus | `cubic-bezier(0.16, 1, 0.3, 1)` / `220ms` |
| **Medium** | `12px` | Word-by-word typographic reveals, floating tooltip entrances | `EASE_OUT` / `280ms` |
| **Large** | `30px+` | Bottom drawer reveals, full-screen overlay expansions | `SPRING_PANEL` / `350ms` |

---

## 2. Timing Tables & Spring Physics Constants

### Cubic-Bezier Curves
- `EASE_OUT` (`[0.16, 1, 0.3, 1]`): Standard entrance for cards, menus, and text elements.
- `EASE_IN_OUT` (`[0.77, 0, 0.175, 1]`): Reversible position changes between two fixed points.
- `EASE_DRAWER` (`[0.32, 0.72, 0, 1]`): High-inertia lateral drawers with soft deceleration.
- `EASE_EMPHASIZED` (`[0.2, 0, 0, 1]`): Material Design 3 and Android spatial transitions.

### Spring Tokens
- **Tappable Surface Press (`SPRING_PRESS`)**: `stiffness: 500, damping: 30, mass: 0.6`
- **Slot Trades & Swaps (`SPRING_SWAP`)**: `stiffness: 460, damping: 30, mass: 0.55`
- **Overlay Panels & Modals (`SPRING_PANEL`)**: `stiffness: 420, damping: 40, mass: 0.5`
- **Playful Pops & Badges (`SPRING_BOUNCE`)**: `stiffness: 300, damping: 18, mass: 0.8`
- **Cursor Tracking Parallax (`SPRING_MOUSE`)**: `stiffness: 200, damping: 15, mass: 0.3`

---

## 3. Progressive UI Generation & Zero-CLS Formula

When streaming or fetching asynchronous content, follow the 3-step progressive reveal:

1. **Exact Footprint Preservation**:
   - The skeleton container must have the identical `min-height`, `padding`, `border-radius`, and `max-width` as the target populated card.
   - Zero Cumulative Layout Shift (CLS score must remain `< 0.01`).

2. **Rhythmic Shimmer Phase**:
   - Skeletons use continuous gradient sweeps (`bg-gradient-to-r from-transparent via-neutral-300/20 to-transparent`) at a 2.4s cycle with 1.2s rest.

3. **Directional Blur Cross-Fade**:
   - When data arrives, the skeleton exits with `opacity: 0, filter: blur(4px)`.
   - The live card enters simultaneously with `opacity: 1, filter: blur(0px), scale: 1` using `SPRING_PANEL`.

---

## 4. Hardware Acceleration & Layer Budgets

- **Animate only compositor properties**:
  - `transform` (`translate`, `scale`, `rotate`, `skew`)
  - `opacity`
  - `filter` (`blur`)
- **Never animate layout triggers in hot loops**:
  - `width`, `height`, `top`, `left`, `margin`, `padding` trigger browser reflow and layout recalculation on every frame.
  - When container bounds must resize (such as tabs or cards), use Motion's `layout` and `layoutId` props, which translate bounding boxes via hardware-accelerated matrix transforms.
- **`prefers-reduced-motion` Enforcement**:
  - All components must respect user accessibility settings via `useReducedMotion()`.
  - When reduced motion is requested, replace spatial displacements with instantaneous or subtle opacity-only fades (`duration: 0.15s`).
