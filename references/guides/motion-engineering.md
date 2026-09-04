---
title: "Motion Engineering Guide"
description: "In-depth guide to modern Motion (motion/react v12/v13+), physics-based springs, layout animations, exit orchestration, gesture velocity handoffs, and hardware acceleration."
documentation: "references/guides/motion-engineering.md"
markdown: "references/guides/motion-engineering.md"
---

# Motion Engineering Guide

> Deep technical guide to building robust, high-performance animations with **Motion** (`motion/react` / `framer-motion`), based on core principles from [motiondivision/motion](https://github.com/motiondivision/motion).

---

## 1. Physics-Based Springs vs Duration Easings

In UI engineering, duration-based transitions (`transition: all 300ms ease`) often feel robotic and interrupt-unsafe. When an interaction is canceled mid-flight, a CSS transition reverses awkwardly. **Spring physics** calculate movement continuously based on mass, tension, and damping, allowing natural velocity preservation when gestures are interrupted.

### Spring Equation Model
$$\ddot{x} + 2\zeta\omega_0 \dot{x} + \omega_0^2 x = 0$$

Where:
- **Stiffness** ($k$): Resistance to stretching. Higher values increase speed and responsiveness.
- **Damping** ($c$): Friction that resists motion. Low damping yields bouncy overshoots; high damping prevents oscillation (critically damped).
- **Mass** ($m$): Heaviness of the element. Higher mass gives slow, deliberate inertia.

### Canonical Spring Configurations (`lib/ease.ts`)

```tsx
// 1. Tappable / Press feedback (stiff, responsive, instant feedback)
export const SPRING_PRESS = { type: "spring", stiffness: 500, damping: 30, mass: 0.6 };

// 2. Playful Micro-Pops & Celebrations (springy bounce)
export const SPRING_BOUNCE = { type: "spring", stiffness: 300, damping: 18, mass: 0.8 };

// 3. Modals, Sheets, and Panels (controlled, weighted arrival)
export const SPRING_PANEL = { type: "spring", stiffness: 420, damping: 40, mass: 0.5 };

// 4. Shared Layout Glide (morphing pills, indicator glides)
export const SPRING_LAYOUT = { type: "spring", stiffness: 360, damping: 32, mass: 0.6 };

// 5. Critically Damped Slider / Handle (zero overshoot, buttery tracking)
export const SPRING_GLIDE = { stiffness: 700, damping: 50, mass: 0.5 };
```

---

## 2. Layout Animations & Shared Elements (`layoutId`)

Motion's layout engine uses an inverted FLIP (First, Last, Invert, Play) technique computed entirely with GPU-accelerated transforms.

### Rules for Flawless Layout Animations
1. **Never animate `width` and `height` directly**: Use `<motion.div layout>` or `<motion.div layoutId="unique-key">`. Motion calculates the bounding box change and applies an inverse `scale(x, y)` transform.
2. **Correcting Child Distortion**: When a parent morphs its dimensions via `layout`, children can appear stretched. Add `layout` to direct children or use `layout="position"` on the parent to restrict morphing to coordinate positioning.
3. **Pill & Indicator Gliding**:
```tsx
{tabs.map((tab) => (
  <button key={tab.id} onClick={() => setSelected(tab.id)} className="relative px-3 py-1.5">
    {selected === tab.id && (
      <motion.div
        layoutId="active-tab-indicator"
        className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20"
        transition={SPRING_LAYOUT}
      />
    )}
    <span className="relative z-10 text-sm">{tab.label}</span>
  </button>
))}
```

---

## 3. Exit Animations & `AnimatePresence`

`AnimatePresence` enables React elements to animate as they are removed from the DOM.

### Orchestration Modes
- **`mode="sync"` (default)**: Entering and exiting elements animate simultaneously. Best for independent items or list row insertions.
- **`mode="wait"`**: The exiting element finishes its exit animation completely before the new element mounts. Best for page transitions, stepped wizards, and tab panels.
- **`mode="popLayout"`**: Exiting elements are immediately taken out of the document layout flow (`position: absolute`) so sibling items glide immediately into their target positions without waiting for the exit to finish.

```tsx
<AnimatePresence mode="popLayout">
  {items.map((item) => (
    <motion.li
      key={item.id}
      layout
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
      transition={SPRING_LAYOUT}
    >
      {item.title}
    </motion.li>
  ))}
</AnimatePresence>
```

---

## 4. Imperative Sequencing with `useAnimate`

When animations require complex multi-step choreographies (e.g. badge expands $\to$ text scrambles $\to$ checkmark draws $\to$ settles), declarative props can become unwieldy. Use `useAnimate` for precise async/await timelines:

```tsx
const [scope, animate] = useAnimate();

const handleSuccess = async () => {
  // Step 1: scale down trigger
  await animate(scope.current, { scale: 0.95 }, { duration: 0.1 });
  // Step 2: pop open success container with spring
  await animate(scope.current, { scale: 1, width: 220 }, SPRING_BOUNCE);
  // Step 3: draw SVG checkmark
  await animate("path.check", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: EASE_OUT });
};
```

---

## 5. Drag Gestures & Momentum Handoff

Motion provides robust pointer gestures with built-in inertia and constraint bounding:

```tsx
<motion.div
  drag="y"
  dragConstraints={{ top: 0, bottom: 0 }}
  dragElastic={{ top: 0.1, bottom: 0.6 }} // Rubber-banding resistance
  onDragEnd={(_e, info) => {
    // If flicked with downward velocity > 300 or dragged past 100px threshold
    if (info.velocity.y > 300 || info.offset.y > 100) {
      onDismiss();
    }
  }}
>
  <SheetContent />
</motion.div>
```
