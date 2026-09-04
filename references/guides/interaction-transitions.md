---
title: "The 12 Canonical Interaction Transitions"
description: "Reference catalog and implementation blueprints for the 12 essential UI transitions from Transitions.dev, including cubic-bezier tokens, spring physics, and zero-layout-shift formulas."
documentation: "references/guides/interaction-transitions.md"
markdown: "references/guides/interaction-transitions.md"
---

# The 12 Canonical Interaction Transitions

> Synthesized from [transitions.dev](https://github.com/Jakubantalik/transitions.dev) by Jakub Antalík.

Micro-interactions make the difference between an application that feels static and one that feels responsive, continuous, and physical. Here are the 12 canonical transitions, their physics parameters, and exact implementation patterns.

---

## 1. Interaction Transition Catalog

| # | Pattern Name | Interaction Description | Physics / Curve | Duration / Spring |
|---|:---|:---|:---|:---|
| **1** | **Card Resize** | Container expands or contracts its footprint smoothly without layout distortion. | `cubic-bezier(0.16, 1, 0.3, 1)` | 280–350ms or `SPRING_PANEL` |
| **2** | **Number Pop-In** | Value changes with rolling digit slot animation and subtle directional blur. | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 200–280ms / stagger 20ms |
| **3** | **Notification Badge** | Badge pops onto an icon with a spring overshoot and scales in from center. | `SPRING_BOUNCE` | Stiffness: 300, Damping: 18 |
| **4** | **Text States Swap** | Label trades places (e.g. "Save" $\to$ "Saved") with directional fade & blur. | `SPRING_SWAP` | Stiffness: 460, Damping: 30 |
| **5** | **Menu Dropdown** | Menu unfolds from the trigger origin using clip-path or scaleY with blur. | `cubic-bezier(0.16, 1, 0.3, 1)` | 180–220ms |
| **6** | **Modal Open/Close** | Backdrop fades while panel scales from 0.95 to 1.0 with subtle spring brake. | `SPRING_PANEL` | Stiffness: 420, Damping: 40 |
| **7** | **Panel Reveal** | Side or bottom drawer slides along axis with inertia and edge damping. | `cubic-bezier(0.32, 0.72, 0, 1)` | 300–400ms |
| **8** | **Page Side-by-Side** | Multi-step navigation slides current view left while incoming view slides in. | `cubic-bezier(0.2, 0, 0, 1)` | 320ms / `mode="wait"` |
| **9** | **Icon Swap** | Action icon changes (e.g. Hamburger $\to$ X, Play $\to$ Pause) with rotation and scale. | `SPRING_SWAP` | Stiffness: 460, Damping: 30 |
| **10** | **Success Check** | Circle halo pulses outward while checkmark draws itself along SVG path. | Multi-stage timeline | 350ms total sequence |
| **11** | **Avatar Group Hover** | Hovered avatar springs up and scales up while neighbor avatars fan apart. | `SPRING_BOUNCE` + Falloff | Stiffness: 300, Damping: 20 |
| **12** | **Error Shake** | Input shakes horizontally 3–4 times on validation failure then returns to neutral. | Keyframe oscillate | 350ms (`[-4px, 4px, -3px, 3px, 0]`) |

---

## 2. Key Interaction Recipes

### Pattern 10: Success Check Animation
The success check is a compound celebration micro-interaction:
1. Halo circle scales out with fading opacity.
2. Background pill or circle pops in with `SPRING_BOUNCE`.
3. SVG checkmark uses `pathLength: 0` to `pathLength: 1` stroke animation.

```tsx
<motion.svg viewBox="0 0 24 24" className="size-6 text-emerald-500" fill="none">
  <motion.circle
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="2"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.3, ease: EASE_OUT }}
  />
  <motion.path
    d="M8 12.5l2.5 2.5L16 9"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 0.25, delay: 0.2, ease: EASE_OUT }}
  />
</motion.svg>
```

### Pattern 11: Avatar Group Distance Falloff
When hovering over avatar $i$, calculate each neighbor's offset based on its distance $|j - i|$:
$$\Delta x = \operatorname{sign}(j - i) \times \frac{24\text{px}}{1 + |j - i|}$$
This produces an organic magnetic dispersal effect where immediate neighbors move substantially and distant avatars remain undisturbed.
