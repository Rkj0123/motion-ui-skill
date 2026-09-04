# Motion UI Skill

<div align="center">

![Motion UI Banner](https://img.shields.io/badge/Components-130%20Total-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18%20%2F%2019-61dafb?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14%20%2F%2015-000000?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%20%2F%20v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Motion](https://img.shields.io/badge/Motion-Framer%20Motion-f43f5e?style=for-the-badge)
![Local](https://img.shields.io/badge/Skill-Local--First-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<p align="center">
  <b>Comprehensive Library of 130 Animated React & Next.js UI Components</b><br/>
  Built with Motion and Tailwind CSS. Designed as an offline-first AI Agent Skill & Developer Toolkit with 6 aesthetic style presets.
</p>

</div>

---

## Overview

**Motion UI Skill** is a production-ready, fully self-contained collection of **130 interactive, animated UI components** across three distinct categories:

1. **Motion Components (80)**: Micro-interactions, spring-loaded buttons, morphing inputs, bouncily unfolding selects, bottom sheets, virtualized tables, 3D cylinder carousels, 17 loader variants, cascaders, ratings, avatar groups, celebration success checks, rich hover cards, keyboard keycaps, smart password fields, spotlight cards, glow buttons, chronological timelines, steppers, segmented controls, breadcrumbs, pagination, collapsibles, chips, copy buttons, progress rings, tree views, sortable lists, date range pickers, icon stacks, phone inputs, speed dials, color pickers, magnet docks, page transitions, card resizes, error shakes, text swaps, and autocompletes.
2. **AI Agent Surfaces (17)**: Complete modern conversational agent interfaces including message bubbles, viewport scrollers, expandable prompt composers, human-in-the-loop approval cards, streaming responses, diff viewers, syntax-highlighted code blocks, and adaptive activity streams.
3. **Blocks & Widgets (33)**: Rich, composable application widgets such as drag-and-drop kanban workflow boards, faceted query filter builders, universal mobile action sheets, Apple-style dynamic islands, ⌘K command palettes, knockout tournament fixtures, weekly availability schedulers, cross-chain swaps, prediction market tickets, morphing tab views, event calendars, gantt timeline charts, resizable split panels, audio players, metric stat cards with sparklines, reorder grids, and browser frame mockups.

### 🌟 Key Highlights
- **Local-First**: Every bundled component source file (`.tsx`), shared utility (`lib/`), and markdown guide exists directly in this repository. No remote registry is needed to discover or copy the bundled components.
- **6 Aesthetic Style Presets**: Built-in support for `minimal` (shadcn), `origin` (Coss / Cal.com), `enterprise` (ReUI), `glow` (ibelick), `ios` (Expo), and `brutalist` (neo-brutalist) styles.
- **Physics-Based Animation**: Powered by Motion (`motion/react` or `framer-motion`) using calibrated spring configurations (`SPRING_PRESS`, `SPRING_PANEL`, `SPRING_LAYOUT`, `SPRING_BOUNCE`, `SPRING_GENTLE`, `SPRING_SNAPPY`, `SPRING_FLOAT`, `SPRING_MOUSE`, `SPRING_GLIDE`).
- **Accessible & Reduced-Motion Safe**: Every component natively respects `prefers-reduced-motion` and suppresses phantom touch `:hover` states on mobile via pointer capability detection.
- **Ecosystem Integration**: Enriched with patterns and standards from KeenThemes ReUI, Design System Checklist, Motion, Expo, Transitions.dev, shadcn/ui, Coss (Origin UI), and ibelick/ui-skills.
- **Copy-Paste & Drop-In Ready**: Drop files directly into your project's `components/` and `lib/` folders, or use the included CLI installer.

---

## Multi-Style Selection for AI Agents & Developers

Components can be styled in 6 distinct design aesthetics:

| Style Preset | Border & Geometry | Surface & Lighting | Target Aesthetic |
| :--- | :--- | :--- | :--- |
| **`minimal`** | `border-border`, `rounded-xl` | Flat monochrome, subtle transitions | shadcn/ui, Linear clean |
| **`origin`** | `border-border/70`, `rounded-2xl`, inner specular | Subtle gradient cards, micro-shadows | Cal.com, Coss high-craft |
| **`enterprise`** | `border-border`, `rounded-md`, compact | High data density, structured hierarchy | KeenThemes ReUI, admin ERP |
| **`glow`** | `border-border/60`, `rounded-2xl` | Radial gradient spotlights, halo beams | ibelick, Web3, AI platforms |
| **`ios`** | `border-white/10`, `rounded-3xl` | Translucent glass, fluid squircle bounce | Expo mobile, Apple iOS |
| **`brutalist`** | `border-2 border-foreground`, `rounded-none` | High contrast flat fills, 4px drop shadows | Neo-brutalist, retro bold |

```bash
# List available style presets:
python scripts/install-component.py --list-styles

# Install component with a specific style:
python scripts/install-component.py metric-card --style origin --dest ./src
```

Read [`references/guides/style-presets.md`](./references/guides/style-presets.md) for complete token documentation.

---

## Installation & Setup Guide

### 1. Using in AI Agent Environments

#### A. Google Antigravity
This repository is pre-configured with workspace skill discovery:
- Clone or copy into your workspace's `.agents/skills/motion-ui`:
  ```bash
  git clone https://github.com/Rkj0123/motion-ui-skill.git .agents/skills/motion-ui
  ```
- Antigravity automatically detects the skill and activates it whenever you ask for UI components, animations, or agent interfaces.

#### B. Codex app or Codex CLI
Recommended project-scoped install:
```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --copy -y
```
This creates `.agents/skills/motion-ui` in the current project. For a global install visible in every project:
```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --global --copy -y
```

---

## CLI Component Installer

A standalone Python resolver and installer is included in `scripts/install-component.py`:

#### List all 130 components:
```bash
python scripts/install-component.py --list
```

#### List available aesthetic styles:
```bash
python scripts/install-component.py --list-styles
```

#### Search components by keyword:
```bash
python scripts/install-component.py --search "kanban"
python scripts/install-component.py --search "agent"
```

#### Inspect component files & dependencies:
```bash
python scripts/install-component.py spotlight-card --info
```

#### Install a component into your project:
```bash
python scripts/install-component.py spotlight-card --style glow --dest ./src
```
This automatically:
1. Copies the component file to `./src/components/motion/spotlight-card.tsx`.
2. Copies all required utilities (`lib/ease.ts`, `lib/styles.ts`, `lib/utils.ts`, `lib/hooks/...`) to `./src/lib/`.
3. Outputs the exact `npm install` command for any missing dependencies.

---

## Prerequisites for Projects

Ensure your target React or Next.js project has the base dependencies installed:

```bash
npm install motion@^13.1.0 clsx tailwind-merge lucide-react
# or: pnpm add motion@^13.1.0 clsx tailwind-merge lucide-react
```

### Tailwind Configuration
Ensure your `tailwind.config.js` or `globals.css` supports CSS variable colors (`background`, `foreground`, `muted`, `border`, etc.). The canonical `cn` helper is provided in [`lib/utils.ts`](./lib/utils.ts).

---

## Component Catalog (130 Components)

### 1. Motion Components (80)

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Action Swap** | `action-swap` | CTA button and slot primitives for swapping text and icons with blur motion. | `lucide-react`, `motion` | [`components/motion/action-swap.tsx`](components/motion/action-swap.tsx) | [Guide](references/motion/action-swap.md) |
| **Adaptive Stepper** | `adaptive-stepper` | Composable numeric stepper whose fixed footprint adapts at its minimum and maximum while the value rolls between steps. | `lucide-react`, `motion` | [`components/motion/adaptive-stepper.tsx`](components/motion/adaptive-stepper.tsx) | [Guide](references/motion/adaptive-stepper.md) |
| **Animated Badge** | `animated-badge` | Status badge with animated state icons, pulse feedback and compact size variants. | `lucide-react`, `motion` | [`components/motion/animated-badge.tsx`](components/motion/animated-badge.tsx) | [Guide](references/motion/animated-badge.md) |
| **Animated Context Menu** | `context-menu` | Composable context-menu primitives with a pointer-origin clip morph, a gliding active row, checkbox and radio choices, keyboard navigation, typeahead, and long-press support. | `lucide-react`, `motion`, `react-dom` | [`components/motion/context-menu.tsx`](components/motion/context-menu.tsx) | [Guide](references/motion/context-menu.md) |
| **Animated CTA Buttons** | `expanding-arrow-button` | Expressive call-to-action buttons with expanding, hold, and slide interactions. | `motion` | [`components/motion/expanding-arrow-button.tsx`](components/motion/expanding-arrow-button.tsx) | [Guide](references/motion/expanding-arrow-button.md) |
| **Animated Sidebar** | `animated-sidebar` | A composable application sidebar with morphing nested navigation that folds into an animated icon rail on desktop and becomes a focus-managed sheet on mobile. | `lucide-react`, `motion`, `react-dom` | [`components/motion/animated-sidebar.tsx`](components/motion/animated-sidebar.tsx) | [Guide](references/motion/animated-sidebar.md) |
| **Animated Toast Stack** | `animated-toast-stack` | Stacked toasts with status morphs, swipe dismissal, actions and layout-aware motion. | `lucide-react`, `motion`, `react-dom` | [`components/motion/animated-toast-stack.tsx`](components/motion/animated-toast-stack.tsx) | [Guide](references/motion/animated-toast-stack.md) |
| **Aspect Ratio** | `aspect-ratio` | Adaptive aspect ratio container with smooth geometry transitions when switching ratios and zero cumulative layout shift. | `motion` | [`components/motion/aspect-ratio.tsx`](components/motion/aspect-ratio.tsx) | [Guide](references/motion/aspect-ratio.md) |
| **Autocomplete** | `autocomplete` | Searchable combobox with debounced substring highlighting, keyboard arrow navigation, clear trigger, and spring panel reveal. | `lucide-react`, `motion` | [`components/motion/autocomplete.tsx`](components/motion/autocomplete.tsx) | [Guide](references/motion/autocomplete.md) |
| **Avatar Group** | `avatar-group` | Interactive stacked avatar pile where hovering an avatar springs it forward while adjacent neighbors fan out with distance falloff. | `motion` | [`components/motion/avatar-group.tsx`](components/motion/avatar-group.tsx) | [Guide](references/motion/avatar-group.md) |
| **Bottom Sheet** | `bottom-sheet` | Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface. | `motion`, `react-dom` | [`components/motion/bottom-sheet.tsx`](components/motion/bottom-sheet.tsx) | [Guide](references/motion/bottom-sheet.md) |
| **Bounce Sidebar** | `bounce-sidebar` | A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path. | `motion` | [`components/motion/bounce-sidebar.tsx`](components/motion/bounce-sidebar.tsx) | [Guide](references/motion/bounce-sidebar.md) |
| **Bouncy Accordion** | `bouncy-accordion` | Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals. | `lucide-react`, `motion` | [`components/motion/bouncy-accordion.tsx`](components/motion/bouncy-accordion.tsx) | [Guide](references/motion/bouncy-accordion.md) |
| **Breadcrumb** | `breadcrumb` | Accessible hierarchical navigation trail with animated item insertions, collapsed dropdown menu, and spring hover highlights. | `lucide-react`, `motion` | [`components/motion/breadcrumb.tsx`](components/motion/breadcrumb.tsx) | [Guide](references/motion/breadcrumb.md) |
| **Button** | `button` | Spring-pressed Button plus StatefulButton, MagneticButton, and MetallicButton variants. | `lucide-react`, `motion` | [`components/motion/button/index.tsx`](components/motion/button/index.tsx) | [Guide](references/motion/button.md) |
| **Card Resize (Morph)** | `card-resize` | Expanding card container that morphs seamlessly from a compact card to an expanded modal dialog using shared layoutId physics. | `lucide-react`, `motion` | [`components/motion/card-resize.tsx`](components/motion/card-resize.tsx) | [Guide](references/motion/card-resize.md) |
| **Cascader** | `cascader` | Multi-level cascading drill-down selector with sliding column transitions, breadcrumb trails, instant global search, and keyboard navigation. | `lucide-react`, `motion` | [`components/motion/cascader.tsx`](components/motion/cascader.tsx) | [Guide](references/motion/cascader.md) |
| **Center Morph Modal** | `center-morph-modal` | A composable modal whose full-size surface unfolds from its exact center toward every edge, then folds back the same way with an inset close control. | `lucide-react`, `motion`, `react-dom` | [`components/motion/center-morph-modal.tsx`](components/motion/center-morph-modal.tsx) | [Guide](references/motion/center-morph-modal.md) |
| **Checkbox** | `checkbox` | Form choice control with a draw-on checkmark, spring press feedback and indeterminate state support. | `motion` | [`components/motion/checkbox.tsx`](components/motion/checkbox.tsx) | [Guide](references/motion/checkbox.md) |
| **Chip** | `chip` | Interactive filter chip and badge with removable dismissal animation, selection toggle, and status dot. | `lucide-react`, `motion` | [`components/motion/chip.tsx`](components/motion/chip.tsx) | [Guide](references/motion/chip.md) |
| **Collapsible** | `collapsible` | Interactive disclosure panel with smooth spring height animation, rotating trigger icon, and zero layout shift. | `lucide-react`, `motion` | [`components/motion/collapsible.tsx`](components/motion/collapsible.tsx) | [Guide](references/motion/collapsible.md) |
| **Color Picker** | `color-picker` | Interactive hex/rgb color selector with preset swatches, native eyedropper API integration, spring popover, and one-click copy. | `lucide-react`, `motion` | [`components/motion/color-picker.tsx`](components/motion/color-picker.tsx) | [Guide](references/motion/color-picker.md) |
| **Combobox** | `combobox` | Searchable combobox with a morphing portal, grouped filtering, keyboard navigation, and controlled or uncontrolled state. | `lucide-react`, `motion`, `react-dom` | [`components/motion/combobox.tsx`](components/motion/combobox.tsx) | [Guide](references/motion/combobox.md) |
| **Confetti** | `confetti` | Hardware-accelerated celebratory particle burst with realistic air-resistance physics, rotations, and color palettes. | `motion` | [`components/motion/confetti.tsx`](components/motion/confetti.tsx) | [Guide](references/motion/confetti.md) |
| **Copy Button** | `copy-button` | One-click clipboard copy button with spring checkmark morph, haptic confirmation, and tooltip feedback. | `lucide-react`, `motion` | [`components/motion/copy-button.tsx`](components/motion/copy-button.tsx) | [Guide](references/motion/copy-button.md) |
| **Cylinder Carousel** | `cylinder-carousel` | A carousel whose items line the inside of a cylinder, receding into the center and growing toward the edges. Drag, scroll or arrow-key to roll it, with a springy glide and snap. Reduced-motion drops the glide. | `@paper-design/shaders-react`, `motion` | [`components/motion/cylinder-carousel.tsx`](components/motion/cylinder-carousel.tsx) | [Guide](references/motion/cylinder-carousel.md) |
| **Date Range Picker** | `date-range-picker` | Interactive calendar popover for selecting start and end date ranges with preset shortcuts, month navigation, and spring micro-interactions. | `lucide-react`, `motion` | [`components/motion/date-range-picker.tsx`](components/motion/date-range-picker.tsx) | [Guide](references/motion/date-range-picker.md) |
| **Dock** | `dock` | macOS-style dock with grouped actions and a gliding active pill. | `lucide-react`, `motion` | [`components/motion/dock.tsx`](components/motion/dock.tsx) | [Guide](references/motion/dock.md) |
| **Drawer** | `drawer` | Side panel that slides in from the left or right with a spring, backdrop blur, body scroll lock and esc-to-close. | `motion` | [`components/motion/drawer.tsx`](components/motion/drawer.tsx) | [Guide](references/motion/drawer.md) |
| **Error Shake** | `error-shake` | Damped oscillation shake wrapper with haptic error vibration feedback and configurable intensity for form validations. | `motion` | [`components/motion/error-shake.tsx`](components/motion/error-shake.tsx) | [Guide](references/motion/error-shake.md) |
| **Expandable Control** | `expandable-control` | Click-to-expand button and chip controls that reveal a label or trailing action through spring layout continuity. | `lucide-react`, `motion` | [`components/motion/expandable-control.tsx`](components/motion/expandable-control.tsx) | [Guide](references/motion/expandable-control.md) |
| **File Tree** | `file-tree` | Composable file and folder primitives with springing branches, a gliding selection, and complete keyboard navigation. | `lucide-react`, `motion` | [`components/motion/file-tree.tsx`](components/motion/file-tree.tsx) | [Guide](references/motion/file-tree.md) |
| **Glow Button** | `glow-button` | Premium CTA button featuring an iridescent glowing perimeter gradient, magnetic pointer attraction, and tactile spring feedback. | `motion` | [`components/motion/glow-button.tsx`](components/motion/glow-button.tsx) | [Guide](references/motion/glow-button.md) |
| **Haptic Pressable** | `haptic-pressable` | Universal touch-first interactive wrapper with physical spring compression, semantic vibration feedback, and hover guards. | `motion` | [`components/motion/haptic-pressable.tsx`](components/motion/haptic-pressable.tsx) | [Guide](references/motion/haptic-pressable.md) |
| **Hover Card** | `hover-card` | Rich contextual hover card popover with open/close delay buffering, spring entrance, and collision avoidance. | `motion` | [`components/motion/hover-card.tsx`](components/motion/hover-card.tsx) | [Guide](references/motion/hover-card.md) |
| **Icon Stack** | `icon-stack` | Overlapping icon and avatar cluster with hover fan-out expansion, spring elevation, and automated tooltip reveals. | `motion` | [`components/motion/icon-stack.tsx`](components/motion/icon-stack.tsx) | [Guide](references/motion/icon-stack.md) |
| **Input** | `input` | Text input with label, left/right icons, optional stable error row, error shake and success check draw. | `lucide-react`, `motion` | [`components/motion/input.tsx`](components/motion/input.tsx) | [Guide](references/motion/input.md) |
| **Keyboard Keycap** | `kbd` | Hardware-styled keyboard shortcut cap with OS auto-detection (macOS ⌘ vs Windows Ctrl), key combination joins, and tactile spring press feedback. | `motion` | [`components/motion/kbd.tsx`](components/motion/kbd.tsx) | [Guide](references/motion/kbd.md) |
| **Loader** | `loader` | Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble, metaballs, newton, helix, percent, and five terminal-style ascii spinners. Scales from one size prop, uses currentColor, and reduced-motion swaps every transform for a calm opacity pulse. | `motion` | [`components/motion/loader.tsx`](components/motion/loader.tsx) | [Guide](references/motion/loader.md) |
| **Magnet Dock** | `magnet-dock` | Interactive application dock whose icons magnify continuously based on pointer proximity using spring physics and motion values. | `lucide-react`, `motion` | [`components/motion/magnet-dock.tsx`](components/motion/magnet-dock.tsx) | [Guide](references/motion/magnet-dock.md) |
| **Marquee** | `marquee` | Infinite horizontal or vertical scroll with pause-on-hover. | None (core) | [`components/motion/marquee.tsx`](components/motion/marquee.tsx) | [Guide](references/motion/marquee.md) |
| **Morphing Modal** | `morphing-modal` | Family-app-style modal. A single panel that morphs its height as you navigate between inner views, with blur cross-fade on content. | `lucide-react`, `motion` | [`components/motion/morphing-modal.tsx`](components/motion/morphing-modal.tsx) | [Guide](references/motion/morphing-modal.md) |
| **Multi Select** | `multi-select` | Composable multi-select primitives with searchable options, removable animated tokens, and a morphing collision-aware panel. | `lucide-react`, `motion`, `react-dom` | [`components/motion/multi-select/index.tsx`](components/motion/multi-select/index.tsx) | [Guide](references/motion/multi-select.md) |
| **Number Animation** | `number` | Animated number primitives for count-up values, rolling tickers, and fixed-slot digit swaps. | `motion` | [`components/motion/animated-number.tsx`](components/motion/animated-number.tsx) | [Guide](references/motion/number.md) |
| **Number Field** | `number-field` | Precision numeric stepper input with increment/decrement hold acceleration, rolling number animation, and min/max limits. | `lucide-react`, `motion` | [`components/motion/number-field.tsx`](components/motion/number-field.tsx) | [Guide](references/motion/number-field.md) |
| **Page Transition** | `page-transition` | Composable page and view transition container supporting fade, slide, scale, push, and 3D flip modes with AnimatePresence. | `motion` | [`components/motion/page-transition.tsx`](components/motion/page-transition.tsx) | [Guide](references/motion/page-transition.md) |
| **Pagination** | `pagination` | Accessible multi-page navigation bar with sliding active page pill, ellipsis jumps, and previous/next page triggers. | `lucide-react`, `motion` | [`components/motion/pagination.tsx`](components/motion/pagination.tsx) | [Guide](references/motion/pagination.md) |
| **Password Input** | `password-input` | Smart password field with show/hide toggle, animated multi-segment strength meter, and live criteria validation checklist. | `lucide-react`, `motion` | [`components/motion/password-input.tsx`](components/motion/password-input.tsx) | [Guide](references/motion/password-input.md) |
| **Phone Input** | `phone-input` | International phone number input with search-filtered country selector dropdown, flags, dial codes, and spring transitions. | `lucide-react`, `motion` | [`components/motion/phone-input.tsx`](components/motion/phone-input.tsx) | [Guide](references/motion/phone-input.md) |
| **Popover** | `popover` | Gooey popover whose panel oozes out of the trigger through an SVG goo filter — a liquid neck that stretches and pinches — with crisp content fading in on top, plus a Morph variant that clip-morphs open from the trigger corner. Click or hover trigger, controlled or uncontrolled. | `lucide-react`, `motion`, `react-dom` | [`components/motion/popover.tsx`](components/motion/popover.tsx) | [Guide](references/motion/popover.md) |
| **Preview Rail** | `preview-rail` | Codex app-inspired navigation rail with compact ticks that form a hover pyramid and reveal a floating destination preview. | `motion` | [`components/motion/preview-rail.tsx`](components/motion/preview-rail.tsx) | [Guide](references/motion/preview-rail.md) |
| **Progress Ring** | `progress-ring` | Circular animated SVG progress gauge with spring stroke dashoffset, customizable gradient stroke, and center label. | `motion` | [`components/motion/progress-ring.tsx`](components/motion/progress-ring.tsx) | [Guide](references/motion/progress-ring.md) |
| **Pull to Refresh** | `pull-to-refresh` | Native-feeling pull-to-refresh container with drag resistance, threshold feedback and async refresh handling. | `lucide-react`, `motion` | [`components/motion/pull-to-refresh.tsx`](components/motion/pull-to-refresh.tsx) | [Guide](references/motion/pull-to-refresh.md) |
| **Radio Group** | `radio` | Single-select choice control with a gliding layoutId indicator dot and spring press feedback. | `motion` | [`components/motion/radio.tsx`](components/motion/radio.tsx) | [Guide](references/motion/radio.md) |
| **Range Slider** | `range-slider` | Slider with tick dots and a vertical-bar thumb that bounces as it lands on each step. Drag or keyboard, reduced-motion safe. | `motion` | [`components/motion/range-slider.tsx`](components/motion/range-slider.tsx) | [Guide](references/motion/range-slider.md) |
| **Rating** | `rating` | Interactive star rating component with half-star fractional hover detection, spring bounce micro-interactions on click, and keyboard accessibility. | `lucide-react`, `motion` | [`components/motion/rating.tsx`](components/motion/rating.tsx) | [Guide](references/motion/rating.md) |
| **Scroll Animation** | `scroll-animation` | Scroll-driven motion: a Lenis smooth-scroll provider and a reading-progress indicator that reads from it. | `lenis`, `motion` | [`components/motion/smooth-scroll.tsx`](components/motion/smooth-scroll.tsx) | [Guide](references/motion/scroll-animation.md) |
| **Segmented Control** | `segmented-control` | iOS / macOS-style segmented pill selector with continuous sliding layoutId spring indicator and haptic touch. | `motion` | [`components/motion/segmented-control.tsx`](components/motion/segmented-control.tsx) | [Guide](references/motion/segmented-control.md) |
| **Segmented Progress** | `segmented-progress` | Instagram / WhatsApp Stories-style segmented progress bar with auto-advancing timers, pause on hold, and step jumps. | `motion` | [`components/motion/segmented-progress.tsx`](components/motion/segmented-progress.tsx) | [Guide](references/motion/segmented-progress.md) |
| **Select** | `select` | Composable select primitives whose panel bouncily unfolds out of the trigger and separates, plus a Morph variant where the trigger grows into the panel via shared layout. | `lucide-react`, `motion` | [`components/motion/select.tsx`](components/motion/select.tsx) | [Guide](references/motion/select.md) |
| **Shader Background** | `shader-background` | Canvas shader backgrounds (mesh gradient, grain, warp, waves, voronoi, dot orbit and more) with a single typed variant prop. Reduced-motion freezes animated variants. | `@paper-design/shaders-react`, `motion` | [`components/motion/shader-background.tsx`](components/motion/shader-background.tsx) | [Guide](references/motion/shader-background.md) |
| **Shared Layout Background** | `shared-layout-bg` | A pill that glides between hovered items via motion's shared layout, with blur enter/exit. | `lucide-react`, `motion` | [`components/motion/shared-layout-bg.tsx`](components/motion/shared-layout-bg.tsx) | [Guide](references/motion/shared-layout-bg.md) |
| **Sortable List** | `sortable-list` | Accessible drag-to-reorder list with drag handle controls, shadow elevation, layout spring realignment, and drop callbacks. | `lucide-react`, `motion` | [`components/motion/sortable-list.tsx`](components/motion/sortable-list.tsx) | [Guide](references/motion/sortable-list.md) |
| **Speed Dial** | `speed-dial` | Mobile-first floating action button (FAB) that blossoms outwards with staggered action items, 45-degree icon morph, and haptic feedback. | `lucide-react`, `motion` | [`components/motion/speed-dial.tsx`](components/motion/speed-dial.tsx) | [Guide](references/motion/speed-dial.md) |
| **Split Text** | `split-text` | High-performance typography reveal that splits sentences into characters or words with staggered spring entrances. | `motion` | [`components/motion/split-text.tsx`](components/motion/split-text.tsx) | [Guide](references/motion/split-text.md) |
| **Spotlight Card** | `spotlight-card` | Interactive craft card with mouse-tracking radial spotlight glow, rotating border beam highlight, and subtle depth elevation. | `motion` | [`components/motion/spotlight-card.tsx`](components/motion/spotlight-card.tsx) | [Guide](references/motion/spotlight-card.md) |
| **Stepper** | `stepper` | Multi-step wizard progress indicator with animated connecting lines, completed checkmarks, and active status indicators. | `lucide-react`, `motion` | [`components/motion/stepper.tsx`](components/motion/stepper.tsx) | [Guide](references/motion/stepper.md) |
| **Success Check** | `success-check` | Celebration confirmation micro-interaction featuring an expanding circle halo, spring pop-in, SVG path draw checkmark, and haptic feedback. | `motion` | [`components/motion/success-check.tsx`](components/motion/success-check.tsx) | [Guide](references/motion/success-check.md) |
| **Switch** | `switch` | Toggle with a spring-driven thumb and press feedback. | `motion` | [`components/motion/switch.tsx`](components/motion/switch.tsx) | [Guide](references/motion/switch.md) |
| **Table** | `table` | Virtualized data table that stays smooth at 10k+ rows, with sortable headers, row selection, column resize and reorder, and a sticky header. Minimal, reduced-motion-safe motion. | `@tanstack/react-virtual`, `lucide-react`, `motion`, `react-dom` | [`components/motion/table/index.tsx`](components/motion/table/index.tsx) | [Guide](references/motion/table.md) |
| **Tabs** | `tabs` | Pill, segment or underline tabs with a spring layoutId indicator. | `motion` | [`components/motion/tabs.tsx`](components/motion/tabs.tsx) | [Guide](references/motion/tabs.md) |
| **Text Animation** | `text-animation` | Animated text primitives for spring reveals, chromatic sweeps, shimmer loading states, letter-cascade swaps and character scrambles. | `motion` | [`components/motion/text-reveal.tsx`](components/motion/text-reveal.tsx) | [Guide](references/motion/text-animation.md) |
| **Text Swap** | `text-swap` | Slot-machine vertical ticker transition that rolls text or numbers with subtle blur and spring velocity handoffs. | `motion` | [`components/motion/text-swap.tsx`](components/motion/text-swap.tsx) | [Guide](references/motion/text-swap.md) |
| **Theme Toggle** | `theme-toggle` | Theme toggle button that repaints the whole page through the View Transition API — a rectangle or circle clip-path reveal, or slats that open across the screen like a shutter. | `lucide-react`, `motion`, `next-themes` | [`components/motion/theme-toggle.tsx`](components/motion/theme-toggle.tsx) | [Guide](references/motion/theme-toggle.md) |
| **Tilt Card** | `tilt-card` | 3D perspective tilt on hover with cursor-tracked glare. | `motion` | [`components/motion/tilt-card.tsx`](components/motion/tilt-card.tsx) | [Guide](references/motion/tilt-card.md) |
| **Timeline** | `timeline` | Interactive chronological milestone and audit tracker with animated progress lines, status badges, and expandable step disclosures. | `lucide-react`, `motion` | [`components/motion/timeline.tsx`](components/motion/timeline.tsx) | [Guide](references/motion/timeline.md) |
| **Toggle Group** | `toggle-group` | Multi-item selection toggle bar supporting single and multiple choice modes with sliding layout springs. | `motion` | [`components/motion/toggle-group.tsx`](components/motion/toggle-group.tsx) | [Guide](references/motion/toggle-group.md) |
| **Tooltip** | `tooltip` | Hover or focus tooltip with blur enter/exit and spring spawn. | `lucide-react`, `motion`, `react-dom` | [`components/motion/tooltip.tsx`](components/motion/tooltip.tsx) | [Guide](references/motion/tooltip.md) |
| **Tree View** | `tree-view` | Hierarchical nested folder tree with animated node collapse/expand, file type icons, selection highlights, and keyboard navigation. | `lucide-react`, `motion` | [`components/motion/tree-view.tsx`](components/motion/tree-view.tsx) | [Guide](references/motion/tree-view.md) |
| **Wheel Picker** | `wheel-picker` | iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and keyboard control. Composes side by side for date and time pickers, reduced-motion safe. | `motion` | [`components/motion/wheel-picker.tsx`](components/motion/wheel-picker.tsx) | [Guide](references/motion/wheel-picker.md) |

---

### 2. AI Agent Surfaces (17)

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Agent Activity** | `agent-activity` | One adaptive activity stream for reasoning, searches, tool calls, structured execution traces, or a chronological mix. | `lucide-react`, `motion` | [`components/agents/agent-activity/index.tsx`](components/agents/agent-activity/index.tsx) | [Guide](references/agents/agent-activity.md) |
| **Agent Loading States** | `loading-states` | Three thoughtful loading states for AI interfaces: shimmering status text, live agent progress, and cycling reasoning phrases. | `motion` | [`components/agents/loading-states/index.ts`](components/agents/loading-states/index.ts) | [Guide](references/agents/loading-states.md) |
| **AI Sidebar** | `ai-sidebar` | A collapsible AI workspace sidebar for folders, projects, files, and bookmarks with keyboard navigation, optimistic moves, inline rename, and overflow-aware labels. | `lucide-react`, `motion`, `react-dom` | [`components/agents/ai-sidebar.tsx`](components/agents/ai-sidebar.tsx) | [Guide](references/agents/ai-sidebar.md) |
| **Approval Card** | `approval-card` | A human-in-the-loop decision surface for approvals, single or multiple-choice questions, custom responses, and multi-step review flows. | `lucide-react`, `motion` | [`components/agents/approval-card/index.tsx`](components/agents/approval-card/index.tsx) | [Guide](references/agents/approval-card.md) |
| **Chat App** | `chat-app` | A complete agent conversation workspace composing navigation, messages, streaming, planning, approvals, tools, code, diffs, generated media, sources, and prompt input. | `lucide-react`, `motion`, `react-dom`, `shiki` | [`components/agents/chat-app.tsx`](components/agents/chat-app.tsx) | [Guide](references/agents/chat-app.md) |
| **Citations** | `citations` | Inline citation markers paired with a collapsible, progressively rendered reference collection for grounded agent responses. | `lucide-react`, `motion` | [`components/agents/citations.tsx`](components/agents/citations.tsx) | [Guide](references/agents/citations.md) |
| **Code Block** | `code-block` | A syntax-highlighted code surface with stable streaming updates, line numbers, focused lines, smooth following, and copy feedback. | `ai`, `lucide-react`, `motion`, `shiki` | [`components/agents/code-block.tsx`](components/agents/code-block.tsx) | [Guide](references/agents/code-block.md) |
| **File Diff** | `file-diff` | A syntax-highlighted file change disclosure with progressive rows, line numbers, live change counts, smooth following, and completion collapse. | `lucide-react`, `motion`, `shiki` | [`components/agents/file-diff.tsx`](components/agents/file-diff.tsx) | [Guide](references/agents/file-diff.md) |
| **Image Generation** | `image-generation` | A stable generated-image surface that moves from queued work through progressive refinement to a completed result without layout shift. | `lucide-react`, `motion` | [`components/agents/image-generation.tsx`](components/agents/image-generation.tsx) | [Guide](references/agents/image-generation.md) |
| **Message** | `message` | Composable conversation primitives for message rows, grouped bubbles, avatars, metadata, live markers, and a mount-only trailing-edge pop-up for newly sent rows. | `lucide-react`, `motion`, `react-dom` | [`components/agents/message.tsx`](components/agents/message.tsx) | [Guide](references/agents/message.md) |
| **Message Bubble** | `message-bubble` | A focused conversational surface with visual tones, independent alignment, grouped messages, expandable content, and interactive link or button support. | `lucide-react`, `motion`, `react-dom` | [`components/agents/message-bubble.tsx`](components/agents/message-bubble.tsx) | [Guide](references/agents/message-bubble.md) |
| **Message Scroller** | `message-scroller` | A reader-aware conversation viewport that follows streamed output at the live edge and releases control when the reader moves away. | `lucide-react`, `motion`, `react-dom` | [`components/agents/message-scroller.tsx`](components/agents/message-scroller.tsx) | [Guide](references/agents/message-scroller.md) |
| **Prompt Input** | `prompt-input` | An auto-growing agent composer with prompt actions, model selection, keyboard submission, and animated send and stop states. | `lucide-react`, `motion`, `react-dom` | [`components/agents/prompt-input.tsx`](components/agents/prompt-input.tsx) | [Guide](references/agents/prompt-input.md) |
| **Streaming Response** | `streaming-response` | A stable response surface with completion actions, rendered content, and an expandable source summary. | `lucide-react`, `motion` | [`components/agents/streaming-response.tsx`](components/agents/streaming-response.tsx) | [Guide](references/agents/streaming-response.md) |
| **Todo List** | `todo-list` | A collapsible agent task plan with morphing status marks, a completion count, compact metadata, and smooth list updates. | `lucide-react`, `motion` | [`components/agents/todo-list.tsx`](components/agents/todo-list.tsx) | [Guide](references/agents/todo-list.md) |
| **Tool Approval** | `tool-approval` | A human-in-the-loop permission card for reviewing tool details, allowing once, remembering access, or denying execution. | `lucide-react`, `motion`, `shiki` | [`components/agents/tool-approval.tsx`](components/agents/tool-approval.tsx) | [Guide](references/agents/tool-approval.md) |
| **Tool Result** | `tool-result` | A lightweight execution disclosure for syntax-highlighted terminal output and request responses that collapses into a compact completed state. | `lucide-react`, `motion`, `shiki` | [`components/agents/tool-result.tsx`](components/agents/tool-result.tsx) | [Guide](references/agents/tool-result.md) |

---

### 3. Blocks & Widgets (33)

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **404 / Not Found** | `not-found` | Animated 404 pages in five styles: glitch scramble, magnetic digits, cursor spotlight, a fanning card stack and a typed terminal. | `motion` | [`components/motion/not-found/index.tsx`](components/motion/not-found/index.tsx) | [Guide](references/blocks/not-found.md) |
| **Action Sheet** | `action-sheet` | Universal mobile action sheet menu with drag gesture dismissal, rubber-band resistance, haptic feedback, and desktop center modal fallback. | `lucide-react`, `motion`, `react-dom` | [`components/motion/action-sheet.tsx`](components/motion/action-sheet.tsx) | [Guide](references/motion/action-sheet.md) |
| **Audio Player** | `audio-player` | Interactive sound player with animated equalizer waveforms, spring play/pause morphs, volume controls, and scrubbing trackbar. | `lucide-react`, `motion` | [`components/motion/audio-player.tsx`](components/motion/audio-player.tsx) | [Guide](references/motion/audio-player.md) |
| **Availability Scheduler** | `availability-scheduler` | Weekly availability editor where each day springs between available and unavailable, time ranges add and remove with blur-slide motion, times pick from a scrollable dropdown, and a copy menu clones hours to other days. | `lucide-react`, `motion`, `react-dom` | [`components/motion/availability-scheduler/index.tsx`](components/motion/availability-scheduler/index.tsx) | [Guide](references/blocks/availability-scheduler.md) |
| **Bloom Menu** | `bloom-menu` | A button that morphs open into a menu and blooms iris-out from the center, the grid revealing in every direction with radially staggered items. | `lucide-react`, `motion` | [`components/motion/bloom-menu.tsx`](components/motion/bloom-menu.tsx) | [Guide](references/blocks/bloom-menu.md) |
| **Card Folder** | `card-folder` | A landscape card tucked into a stitched purse pocket that lifts forward as the purse compresses into its bottom seam, with controlled open and card-detail visibility plus a separate overflow action. | `lucide-react`, `motion` | [`components/motion/card-folder.tsx`](components/motion/card-folder.tsx) | [Guide](references/blocks/card-folder.md) |
| **Command Palette** | `command-palette` | ⌘K palette with fuzzy filter, spring-animated active row and glass surface. | `lucide-react`, `motion`, `react-dom` | [`components/motion/command-palette.tsx`](components/motion/command-palette.tsx) | [Guide](references/blocks/command-palette.md) |
| **Dynamic Island** | `dynamic-island` | iOS-style island pill that morphs between live activity views with bouncy shell resize and blur crossfades. | `lucide-react`, `motion` | [`components/motion/dynamic-island.tsx`](components/motion/dynamic-island.tsx) | [Guide](references/blocks/dynamic-island.md) |
| **Event Calendar** | `event-calendar` | Full-featured interactive scheduling calendar with month/week views, animated day cells, event pills, and popover creation. | `lucide-react`, `motion` | [`components/motion/event-calendar.tsx`](components/motion/event-calendar.tsx) | [Guide](references/motion/event-calendar.md) |
| **Expandable Action Bar** | `expandable-action-bar` | Compact icon actions that expand into labeled controls on hover or focus with shared layout motion. | `lucide-react`, `motion` | [`components/motion/expandable-action-bar.tsx`](components/motion/expandable-action-bar.tsx) | [Guide](references/blocks/expandable-action-bar.md) |
| **Expandable Tabs** | `expandable-tabs` | Icon tab bar where the active tab expands to a labelled pill, with a panel above that morphs height and slides content direction-aware on switch. | `lucide-react`, `motion` | [`components/motion/expandable-tabs.tsx`](components/motion/expandable-tabs.tsx) | [Guide](references/blocks/expandable-tabs.md) |
| **Feedback Widget** | `feedback-widget` | Corner trigger that morphs open into a feedback popup with message entry and animated sending, success and retry states. | `lucide-react`, `motion` | [`components/motion/feedback-widget.tsx`](components/motion/feedback-widget.tsx) | [Guide](references/blocks/feedback-widget.md) |
| **File Upload** | `file-upload` | Two file upload patterns: an attachment workspace for mixed files, links, audio and media, plus a progress queue with retry and removal. | `lucide-react`, `motion`, `react-dom` | [`components/motion/file-upload.tsx`](components/motion/file-upload.tsx) | [Guide](references/blocks/file-upload.md) |
| **Filter Builder** | `filter-builder` | Faceted stepped query filter builder with dynamic attribute selectors, operator dropdowns, AND/OR logic toggles, and animated chip tags. | `lucide-react`, `motion` | [`components/motion/filter-builder.tsx`](components/motion/filter-builder.tsx) | [Guide](references/motion/filter-builder.md) |
| **Fixtures** | `knockout-bracket` | Animated tournament fixtures in two styles: a knockout bracket that pages through rounds, and a wheel that wraps the same tree around the champion. Both read the same array of rounds, so one dataset draws either. | `lucide-react`, `motion`, `react-dom` | [`components/motion/knockout-bracket.tsx`](components/motion/knockout-bracket.tsx) | [Guide](references/blocks/knockout-bracket.md) |
| **Frame** | `frame` | Interactive browser/device mockup frame with viewport size toggles (desktop, tablet, mobile) and smooth layout resizing. | `lucide-react`, `motion` | [`components/motion/frame.tsx`](components/motion/frame.tsx) | [Guide](references/motion/frame.md) |
| **Gantt Timeline Chart** | `gantt` | Enterprise project management timeline with draggable milestone bars, percentage progress fills, and dependency connections. | `lucide-react`, `motion` | [`components/motion/gantt.tsx`](components/motion/gantt.tsx) | [Guide](references/motion/gantt.md) |
| **Infinite Masonry** | `infinite-masonry` | Responsive virtualized masonry that measures variable-height cards and loads more data as the user nears the end. | `@tanstack/react-virtual`, `lucide-react`, `motion`, `next` | [`components/motion/infinite-masonry.tsx`](components/motion/infinite-masonry.tsx) | [Guide](references/blocks/infinite-masonry.md) |
| **Kanban Board** | `kanban` | Interactive drag-and-drop task workflow board with spring layoutId reordering, column drop zones, WIP counters, and priority tags. | `lucide-react`, `motion` | [`components/motion/kanban.tsx`](components/motion/kanban.tsx) | [Guide](references/motion/kanban.md) |
| **Metric Card** | `metric-card` | KPI stat card with animated SVG sparkline charts, positive/negative delta badges, and full multi-style preset support. | `lucide-react`, `motion` | [`components/motion/metric-card.tsx`](components/motion/metric-card.tsx) | [Guide](references/motion/metric-card.md) |
| **Morphing Search** | `morphing-search` | Search field or compact icon that morphs into a glass results surface, whether opened by click or keyboard shortcut. | `lucide-react`, `motion`, `react-dom` | [`components/motion/morphing-search.tsx`](components/motion/morphing-search.tsx) | [Guide](references/blocks/morphing-search.md) |
| **Morphing Tabs** | `morphing-tabs` | Reorderable tabs whose selected item grows into a white content surface, with the active shape gliding as tabs move and a shared morph between rooms. | `lucide-react`, `motion`, `react-dom` | [`components/motion/morphing-tabs.tsx`](components/motion/morphing-tabs.tsx) | [Guide](references/blocks/morphing-tabs.md) |
| **Multi-chain Swap** | `swap` | Cross-chain swap widget with chain + token selectors, morphing views, animated flip and quote. | `lucide-react`, `motion` | [`components/motion/swap.tsx`](components/motion/swap.tsx) | [Guide](references/blocks/swap.md) |
| **Notification Stack** | `notification-stack` | Compact notification cards that spring from a stacked summary into a readable list on hover, focus or tap. | `lucide-react`, `motion` | [`components/motion/notification-stack.tsx`](components/motion/notification-stack.tsx) | [Guide](references/blocks/notification-stack.md) |
| **OTP Input** | `otp-input` | One-time-code input with a gliding focus ring, digits that roll in per slot, error shake and a success check draw. | `motion` | [`components/motion/otp-input.tsx`](components/motion/otp-input.tsx) | [Guide](references/blocks/otp-input.md) |
| **Overflow Actions** | `overflow-actions` | Connected pill rail for primary actions that springs open to reveal extra controls. | `lucide-react`, `motion` | [`components/motion/overflow-actions.tsx`](components/motion/overflow-actions.tsx) | [Guide](references/blocks/overflow-actions.md) |
| **Prediction Market** | `prediction-market` | Prediction market trade ticket with buy/sell modes, outcome prices, rolling amount entry, quick add chips and trade states. | `lucide-react`, `motion` | [`components/motion/prediction-market.tsx`](components/motion/prediction-market.tsx) | [Guide](references/blocks/prediction-market.md) |
| **Project Folder** | `project-folder` | An interactive project folder that opens its file fan on hover or focus, expands into a focus-managed overlay, then retraces the complete path when closed. | `lucide-react`, `motion`, `react-dom` | [`components/motion/project-folder.tsx`](components/motion/project-folder.tsx) | [Guide](references/blocks/project-folder.md) |
| **Reorder Grid** | `reorder-grid` | Drag-and-drop sortable grid driven by Motion's native Reorder primitives with spring elevation and haptic feedback. | `lucide-react`, `motion` | [`components/motion/reorder-grid.tsx`](components/motion/reorder-grid.tsx) | [Guide](references/motion/reorder-grid.md) |
| **Resizable Panel** | `resizable-panel` | Accessible multi-direction split container with smooth pointer dragging, keyboard ratio controls, and boundary snapping. | `lucide-react`, `motion` | [`components/motion/resizable-panel.tsx`](components/motion/resizable-panel.tsx) | [Guide](references/motion/resizable-panel.md) |
| **Sign Up Form** | `signup-form` | Composed sign-up form that flags a field only once it is left, then clears the moment it is fixed, with a length-weighted strength meter, password reveal and an animated submit lifecycle. | `lucide-react`, `motion` | [`components/motion/signup-form.tsx`](components/motion/signup-form.tsx) | [Guide](references/blocks/signup-form.md) |
| **Swipeable List** | `swipeable-list` | Mobile-style list rows that swipe left or right to reveal contextual action buttons. | `lucide-react`, `motion` | [`components/motion/swipeable-list.tsx`](components/motion/swipeable-list.tsx) | [Guide](references/blocks/swipeable-list.md) |
| **Wallet Card** | `wallet-card` | Wallet overview card with an account switcher and search that morph open from their triggers, a cascading balance with a live change pill and privacy toggle, copy-address, and Send / Deposit / Swap / Buy actions. | `lucide-react`, `motion` | [`components/motion/wallet-card/index.tsx`](components/motion/wallet-card/index.tsx) | [Guide](references/blocks/wallet-card.md) |

---

## Comprehensive Guides Suite

- [Multi-Style Presets Guide](./references/guides/style-presets.md): Architecture and token matrices for minimal, origin, enterprise, glow, ios, and brutalist styles.
- [Motion Guides & Principles](./references/guides/motion-patterns.md): Decision framework, physics tokens, timing tables, recipes, and accessibility rules.
- [Design System Architecture & Checklist](./references/guides/design-system-checklist.md): Standards for color contrast (WCAG 2.1 AA/AAA), typography scales, spacing grids, and component health.
- [Motion Engineering Guide](./references/guides/motion-engineering.md): Motion v12/v13+ architecture, spring formulas, shared layoutId morphs, and AnimatePresence.
- [Motion Performance & 60/120 FPS](./references/guides/motion-performance.md): Compositor properties, avoiding layout thrashing, and layer budgets.
- [Baseline UI Craft & Anti-Slop](./references/guides/baseline-ui-craft.md): Design engineering principles, optical alignment, spacing rhythm, and micro-interactions.
- [The 12 Canonical Interaction Transitions](./references/guides/interaction-transitions.md): Transitions.dev interaction patterns and token specs.
- [Universal Mobile-First Interaction Patterns](./references/guides/universal-mobile-patterns.md): Touch ergonomics, haptic feedback semantics, and swipe gestures.
- [Enterprise Dashboard Architecture](./references/guides/enterprise-dashboard-patterns.md): High-density data grids, kanban boards, faceted query builders, and timelines.

---

## Animation Physics & Motion Tokens

Components use standardized spring and easing constants defined in [`lib/ease.ts`](./lib/ease.ts):

```typescript
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
export const EASE_EMPHASIZED = [0.2, 0, 0, 1] as const;

export const SPRING_PRESS = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.6,
} as const;

export const SPRING_BOUNCE = {
  type: "spring",
  stiffness: 300,
  damping: 18,
  mass: 0.8,
} as const;

export const SPRING_LAYOUT = {
  type: "spring",
  stiffness: 360,
  damping: 32,
  mass: 0.6,
} as const;

export const SPRING_PANEL = {
  type: "spring",
  stiffness: 420,
  damping: 40,
  mass: 0.5,
} as const;
```

---

## Validate the package

Run the dependency-free integrity gate before publishing a change:

```bash
python scripts/verify_skill.py
```

It checks the 130-component catalog, all referenced files, the single skill entrypoint, primary file paths, and the source-reference exclusion rule.

---

## Directory Structure

```text
motion-ui-skill/
├── README.md                      # Comprehensive guide & installation instructions
├── SKILL.md                       # Main agent skill definition with catalog & instructions
├── agents/openai.yaml             # Codex skill-list metadata and default prompt
├── catalog.json                   # Machine-readable metadata for all 130 components
├── components/                    # Production TypeScript/React source code
│   ├── motion/                    # 80 motion primitives and composed blocks
│   ├── agents/                    # 17 conversational agent surfaces
│   └── previews/                  # Component preview & demo implementations
├── lib/                           # Foundation tokens, easing physics, and utility hooks
│   ├── ease.ts                    # Easing curves and spring physics constants
│   ├── styles.ts                  # Multi-style preset tokens (minimal, origin, enterprise, glow, ios, brutalist)
│   ├── utils.ts                   # cn() utility
│   └── hooks/                     # Custom hooks (use-haptic, use-dismiss, use-measure, etc.)
├── references/                    # Offline-first detailed markdown component documentation
│   ├── motion/                    # 80 component guides with props & examples
│   ├── agents/                    # 17 agent component guides
│   ├── blocks/                    # 33 block guides
│   ├── guides/                    # Complete suite of 9 motion & design system guides
│   └── codex-install.md            # Codex app and CLI installation guide
├── prompts/
│   └── install-motion-ui.md        # Copy-paste prompt for AI-agent installation
└── scripts/
    ├── install-component.py       # Standalone CLI tool to install components into projects
    ├── build_docs.py              # Script to synchronize SKILL.md and README.md from catalog
    └── verify_skill.py            # Dependency-free package integrity gate
```

---

## License

This project is licensed under the [MIT License](./LICENSE).
