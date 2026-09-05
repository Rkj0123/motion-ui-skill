---
title: "Motion Performance & 60/120 FPS Engineering"
description: "Auditing and optimizing animation performance: compositor-only properties, eliminating layout thrashing, scroll-linked motion decoupling, layer budgets, and GPU compositing rules."
documentation: "references/guides/motion-performance.md"
markdown: "references/guides/motion-performance.md"
---

# Motion Performance & 60/120 FPS Engineering

> Production performance guidelines for fluid, stutter-free animations, directly synthesized from [ibelick/ui-skills](https://github.com/ibelick/ui-skills) (`/fixing-motion-performance`).

---

## 1. The Rendering Pipeline

Modern browsers render every frame through three distinct phases:

| Phase | Affected Properties | Cost & FPS Risk |
| :--- | :--- | :--- |
| **Composite** | `transform` (`translate`, `scale`, `rotate`), `opacity`, `filter` (partial) | **Low (Best)**: Runs off-thread directly on the GPU. Never causes reflow. |
| **Paint** | `background-color`, `color`, `box-shadow`, `border-radius`, `outline` | **Medium**: Repaints pixels into bitmap layers. Costly on large surfaces. |
| **Layout** | `width`, `height`, `top`, `left`, `margin`, `padding`, `display`, `flex` | **Critical (Worst)**: Triggers geometry recalculation across the entire document tree. |

### Rule #1: Only Animate Composite Properties
Stick strictly to `transform` and `opacity` for animation. If a component appears to change size, use Motion's `layout` prop (which simulates dimension shifts via transform scaling) or CSS scale transforms.

---

## 2. The "Never Patterns" (Critical Performance Violations)

1. **Never Interleave Layout Reads & Writes in the Same Frame**:
   - Reading `offsetWidth`, `scrollTop`, `getBoundingClientRect()` immediately after modifying CSS forces the browser to synchronously recalculate layout (**forced reflow** or **layout thrashing**).
   - Solution: Read all metrics in one phase, then apply style mutations in `requestAnimationFrame`.
2. **Never Drive Animations from Raw Scroll Events**:
   - Never attach heavy state updates or DOM manipulation directly to `window.addEventListener("scroll", ...)`.
   - Solution: Use `useScroll` with Motion values or native CSS `animation-timeline: scroll()`.
3. **No Infinite `requestAnimationFrame` Loops Without a Stop Condition**:
   - Every continuous rAF loop burns CPU cycles and drains battery life on mobile devices. Ensure an active velocity threshold or time limit breaks the loop when the value settles.
4. **Never Animate `blur()` Dynamically Across Large Screens**:
   - Real-time Gaussian blur calculation over large surfaces (`backdrop-filter: blur(20px)`) is computationally intensive on integrated GPUs and mobile chipsets. Keep blur radii static and animate opacity instead.

---

## 3. Layer Promotion & `will-change`

`will-change: transform` informs the browser's compositing engine to allocate a dedicated GPU backing store (layer) for the element.

### Rules for Layer Budgeting:
- **Do not apply `will-change` globally or perpetually**: Each promoted layer consumes VRAM. 100 promoted layers can exhaust GPU memory and cause mobile browser crashes.
- **Apply conditionally**: Only apply `will-change: transform` while an interaction is actively occurring (e.g. during hover, drag, or active slide), and remove it once the element is at rest.
- **Hardware Acceleration Hack**: If an element stutters during entrance, apply `transform: translateZ(0)` or `backface-visibility: hidden` to force hardware compositing without memory bloat.

---

## 4. Diagnostics & Profiling Workflow

When an animation drops frames:
1. **Chrome DevTools Performance Panel**:
   - Record a 5-second trace of the interaction.
   - Look for long red bars under the **Main thread** flame graph.
   - Look for **Layout** or **Recalculate Style** events occurring every frame (16.6ms at 60Hz or 8.3ms at 120Hz).
2. **Rendering Tab**:
   - Enable **Paint Flashing**: Green flashes reveal which elements are being repainted each frame. Good animations only flash when entering/exiting, never during movement.
   - Enable **Layer Borders**: Inspect which elements have their own composite layers (orange borders) and tile borders (cyan).
3. **Core Web Vitals Check**:
   - Ensure animations do not cause Cumulative Layout Shift (CLS). Elements entering the page must be absolutely positioned or have pre-reserved container bounds.
