---
title: "The Canonical Interaction Transitions Guide"
description: "Reference catalog and implementation blueprints for all 43 UI interaction transitions from Transitions.dev, including cubic-bezier tokens, spring physics, and zero-layout-shift formulas."
documentation: "references/guides/interaction-transitions.md"
markdown: "references/guides/interaction-transitions.md"
---

# The Canonical Interaction Transitions Guide

> Synthesized from [transitions.dev](https://github.com/Jakubantalik/transitions.dev) by Jakub Antalík.

Micro-interactions make the difference between an application that feels static and one that feels responsive, continuous, and physical. Here is the comprehensive catalog of UI transitions, their physics parameters, and exact implementation patterns.

---

## 1. Complete Interaction Transition Catalog

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
| **13** | **Banner Stacking** | Notifications stack with scale & elevation falloff; hovering fans into list. | `SPRING_PANEL` | 320ms / stagger 30ms |
| **14** | **Smoky Dissolve** | Destructive deletion disintegrates element into rising ash and smoke particles. | Particle physics | 600–700ms |
| **15** | **Drag & Drop Physics** | Dragging card with angular inertia, velocity preservation, and magnetic slot snap. | `SPRING_BOUNCE` | Stiffness: 300, Damping: 18 |
| **16** | **Dropdown Morph** | Navigation dropdown whose container bounds and caret morph fluidly across tabs. | `SPRING_LAYOUT` | Stiffness: 360, Damping: 32 |
| **17** | **Get Pro Conic Glow** | Chromatic moving gradient border with ambient blur halo and specular sheen. | Infinite linear / sweep | 1000ms hover sweep |
| **18** | **Image Open Tilt** | Media preview modal opens with 3D perspective pitch before settling squarely. | `SPRING_PANEL` | Transform perspective 1000px |
| **19** | **Input Clear Dissolve** | Characters dissolve and scatter upward with particle blur when clearing text. | Staggered float | 350ms / stagger 15ms |
| **20** | **Learn More Hover** | Action link where arrow flies out right edge and loops in from left with underline. | `EASE_OUT` | 450ms |
| **21** | **Matrix Dot Loader** | Sci-fi dot grid whose scale and opacity oscillate in harmonic diagonal phase waves. | Sine wave / harmonic | 1200ms loop |
| **22** | **Organic Shimmer** | Natural fluid light sheen moving across card surfaces at oblique angles. | Ease-in-out sweep | 2400ms cycle |
| **23** | **Pro Gradient Text** | High-velocity multi-stop moving gradient typography with mask clipping. | Continuous linear | 6000ms loop |
| **24** | **Skeleton & Reveal** | Structured bone skeleton that cross-fades directly into live UI with zero CLS. | `SPRING_PANEL` | 300ms crossfade |
| **25** | **Spinner Check Morph** | Circular SVG arc spinner that morphs seamlessly into an animated checkmark path. | Dual-stage timeline | 500ms total |
| **26** | **Spinning Counter** | Mechanical odometer dial with vertical digit slots and velocity spring damping. | `SPRING_SWAP` | Stiffness: 460, Damping: 30 |
| **27** | **Texts Reveal** | Staggered word-by-word typographic entrance rising from masked overflow slots. | `EASE_OUT` | 500ms / stagger 40ms |
| **28** | **Thinking States** | Cognitive AI status surface morphing through pulse dots and cognitive stages. | `SPRING_SWAP` | 2400ms stage interval |
| **29** | **3D Card Tilt** | Mouse-following perspective tilt with dynamic specular glare highlight. | `SPRING_MOUSE` | Stiffness: 200, Damping: 15 |
| **30** | **Bouncy Accordion** | Expandable panel that springs open with natural overshoot and content crossfade. | `SPRING_PANEL` | Stiffness: 420, Damping: 40 |
| **31** | **Confetti Burst** | Celebratory radial particle explosion firing from trigger coordinates. | Gravity + velocity decay | 1200ms dissipation |
| **32** | **Gooey Plus Menu** | Action FAB that splits into radial sub-action buttons with SVG gooey filter. | `SPRING_BOUNCE` | Stiffness: 320, Damping: 22 |
| **33** | **Streaming Response** | Live typewriter text streaming with blinking cursor and chunk auto-scrolling. | Linear / RAF | 16–30ms per token |
| **34** | **Sliding Tabs** | Segmented tab indicator that glides smoothly under active label via layoutId. | `SPRING_LAYOUT` | Stiffness: 360, Damping: 32 |
| **35** | **Floating Tooltip** | Tooltip popping into view with directional origin scaling and arrow indicator. | `SPRING_SWAP` | 180ms |
| **36** | **Like Button Pop** | Heart icon that shrinks slightly on tap then pops outward with radial star burst. | `SPRING_BOUNCE` | 350ms total |
| **37** | **Elastic Toggle** | Switch knob that elongates horizontally while dragging before snapping to side. | Spring glide | Stiffness: 700, Damping: 50 |
| **38** | **Checkbox Check** | Bounding box sinks on tap while checkmark SVG stroke draws diagonally. | `SPRING_PRESS` + PathLength | 280ms |
| **39** | **Toast Notification** | Bottom/top alert rising in with blur and settling with soft spring deceleration. | `SPRING_PANEL` | Stiffness: 420, Damping: 40 |
| **40** | **Drawer Pull** | High-velocity sheet dragging with rubber-band resistance beyond boundaries. | `EASE_DRAWER` | Stiffness: 350, Damping: 36 |
| **41** | **Stacked Cards** | Multiple cards resting in layered deck, fanning apart smoothly on hover. | `SPRING_PANEL` | Stiffness: 360, Damping: 30 |
| **42** | **Shimmering Text** | Ambient reflective sheen traversing text characters repeatedly. | Linear mask translation | 2000ms loop |
| **43** | **Dynamic Island** | Floating pill container morphing width, height, and border-radius between states. | `SPRING_LAYOUT` | Stiffness: 400, Damping: 35 |

---

## 2. Key Interaction Formulas

### Avatar Group Distance Falloff
When hovering over avatar $i$, calculate each neighbor's offset based on its distance $|j - i|$:
$$\Delta x = \operatorname{sign}(j - i) \times \frac{24\text{px}}{1 + |j - i|}$$
This produces an organic magnetic dispersal effect where immediate neighbors move substantially and distant avatars remain undisturbed.

### Success Check Stroke Animation
```tsx
<motion.circle
  cx="12" cy="12" r="10"
  stroke="currentColor" strokeWidth="2" fill="none"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 0.3, ease: EASE_OUT }}
/>
<motion.path
  d="M8 12.5l2.5 2.5L16 9"
  stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 0.25, delay: 0.2, ease: EASE_OUT }}
/>
```
