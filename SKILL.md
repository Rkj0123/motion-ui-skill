---
name: motion-ui
description: >-
  Production-ready animated UI component library for React and Next.js built with Motion (Framer Motion)
  and Tailwind CSS. Includes 95 interactive components across 3 categories: Motion Primitives (buttons,
  inputs, tabs, modals, bottom sheets, sliders, accordions, dock, carousels, loaders, cascader, rating, avatar group, success check, hover card, kbd, password input, spotlight card, glow button, timeline), AI Agent Surfaces
  (message bubbles, scrollers, prompt inputs, streaming responses, diff viewers, approval cards, activity streams),
  and Blocks & Widgets (kanban board, filter builder, action sheet, dynamic island, command palette, cross-chain swap, prediction market, availability scheduler).
  Includes local Codex installation instructions, comprehensive design system guides, and an AI-agent install prompt.
---

# Motion UI Skill

> Complete offline repository of **95 production-ready animated UI components** for React and Next.js, built with **Motion** (`motion/react` / `framer-motion`) and **Tailwind CSS**.

This skill is **self-contained and offline-first** for the bundled components. All source code, shared animation utilities, hooks, physics tokens, component guides, and Codex setup instructions exist directly in this repository.

---

## Architecture & Shared Foundation

All components in this skill share a clean, high-performance foundation located in [`lib/`](./lib):

### 1. Motion Tokens & Physics Curves (`lib/ease.ts`)
Physics curves mirror CSS variables and drive all spring animations:
- `EASE_OUT` (`[0.16, 1, 0.3, 1]`): Fast responsive entrances that settle smoothly.
- `EASE_IN_OUT` (`[0.77, 0, 0.175, 1]`): Movement between existing onscreen positions.
- `EASE_EMPHASIZED` (`[0.2, 0, 0, 1]`): Material & Transitions.dev emphasized spatial navigation.
- `SPRING_PRESS` (`stiffness: 500, damping: 30, mass: 0.6`): Physical tactile press feedback for buttons and triggers.
- `SPRING_BOUNCE` (`stiffness: 300, damping: 18, mass: 0.8`): Playful bounce for badges, celebration checks, stars, and micro-pops.
- `SPRING_SWAP` (`stiffness: 460, damping: 30, mass: 0.55`): Content/icon trades within fixed slots.
- `SPRING_PANEL` (`stiffness: 420, damping: 40, mass: 0.5`): Entrances for modals, drawers, and popovers.
- `SPRING_LAYOUT` (`stiffness: 360, damping: 32, mass: 0.6`): Morphing layout pills and active indicator glides.
- `SPRING_GENTLE` (`stiffness: 180, damping: 24, mass: 1.0`): Natural calm spring for spacious card expansions and drawer reveals.
- `SPRING_SNAPPY` (`stiffness: 600, damping: 35, mass: 0.5`): Snappy, high-velocity spring for fast toggles, segmented pills, and tabs.
- `SPRING_FLOAT` (`stiffness: 120, damping: 14, mass: 0.8`): Soft floating physics for tooltips, hover cards, and ambient elevation.
- `SPRING_MOUSE` (`stiffness: 200, damping: 15, mass: 0.3`): Decorative cursor-tracking (dock, tilt, magnetic).
- `SPRING_GLIDE` (`stiffness: 700, damping: 50, mass: 0.5`): Critically damped slider handles with zero overshoot.

### 2. Class Merger (`lib/utils.ts`)
Canonical `cn(...inputs)` utility combining `clsx` and `tailwind-merge` for conflict-free Tailwind utility resolution.

### 3. Pointer & Interaction Hooks (`lib/hooks/`)
- `useHoverCapable`: Restricts hover-only transformations to devices with true pointer input (prevents sticky phantom taps on mobile).
- `useDismiss`: Universal click-outside and Escape-key listener for overlays.
- `useTapGesture` & `useHoverGesture`: Physical press and hover states with reduced-motion fallbacks.
- `useHaptic`: Semantic mobile vibration feedback with cross-platform desktop fallback.
- `useInViewAnimation`: Viewport intersection trigger with reduced-motion support for staggered entry.
- `useMeasure`: Performant ResizeObserver measurement hook for zero-layout-shift container morphing.

### 4. Accessibility & Reduced Motion
Every component respects user accessibility preferences (`prefers-reduced-motion`):
- Uses Motion's `useReducedMotion()` hook.
- Gracefully degrades transforms, scale shifts, and travel distances to calm opacity fades and instant state transitions.

---

## How AI Agents Should Use This Skill

When the user asks for any animated component, UI widget, micro-interaction, or AI chat surface:

1. **Locate the Component**: Find the matching component from the 95 components listed in the catalog below or in [`catalog.json`](./catalog.json).
2. **Read Component Source & Docs**:
   - Inspect the component file in `components/<category>/<slug>.tsx`
   - Read props, variants, and copy-paste examples in `references/<category>/<slug>.md`
3. **Copy or Generate Files**:
   - Provide the complete TypeScript component code directly into the user's project (e.g. `@/components/...`).
   - If missing, also supply the shared utility files from [`lib/`](./lib) (`lib/ease.ts`, `lib/utils.ts`, `lib/hooks/...`).
4. **Install NPM Dependencies**:
   - Inform the user or run: `npm install motion@^13.1.0 clsx tailwind-merge` + any specific component dependency (e.g. `lucide-react`, `shiki`, `@tanstack/react-virtual`).
5. **Alternatively, use the CLI Installer**:
   ```bash
   python scripts/install-component.py <slug> --dest ./src
   ```

When the user asks to install this skill in Codex, read [`references/codex-install.md`](./references/codex-install.md). When they ask an AI agent to install it, provide [`prompts/install-motion-ui.md`](./prompts/install-motion-ui.md) verbatim.

---

## Component Catalog (95 Components)

### Category 1: Motion Components (52 Components)
Interactive, animated primitives including buttons, inputs, tabs, modals, bottom sheets, sliders, accordions, sidebars, and loaders.

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Action Swap** | `action-swap` | CTA button and slot primitives for swapping text and icons with blur motion. | `lucide-react`, `motion` | [`components/motion/action-swap.tsx`](components/motion/action-swap.tsx) | [Guide](references/motion/action-swap.md) |
| **Adaptive Stepper** | `adaptive-stepper` | Composable numeric stepper whose fixed footprint adapts at its minimum and maximum while the value rolls between steps. | `lucide-react`, `motion` | [`components/motion/adaptive-stepper.tsx`](components/motion/adaptive-stepper.tsx) | [Guide](references/motion/adaptive-stepper.md) |
| **Animated Badge** | `animated-badge` | Status badge with animated state icons, pulse feedback and compact size variants. | `lucide-react`, `motion` | [`components/motion/animated-badge.tsx`](components/motion/animated-badge.tsx) | [Guide](references/motion/animated-badge.md) |
| **Animated Context Menu** | `context-menu` | Composable context-menu primitives with a pointer-origin clip morph, a gliding active row, checkbox and radio choices, keyboard navigation, typeahead, and long-press support. | `lucide-react`, `motion`, `react-dom` | [`components/motion/context-menu.tsx`](components/motion/context-menu.tsx) | [Guide](references/motion/context-menu.md) |
| **Animated CTA Buttons** | `expanding-arrow-button` | Expressive call-to-action buttons with expanding, hold, and slide interactions. | `motion` | [`components/motion/expanding-arrow-button.tsx`](components/motion/expanding-arrow-button.tsx) | [Guide](references/motion/expanding-arrow-button.md) |
| **Animated Sidebar** | `animated-sidebar` | A composable application sidebar with morphing nested navigation that folds into an animated icon rail on desktop and becomes a focus-managed sheet on mobile. | `lucide-react`, `motion`, `react-dom` | [`components/motion/animated-sidebar.tsx`](components/motion/animated-sidebar.tsx) | [Guide](references/motion/animated-sidebar.md) |
| **Animated Toast Stack** | `animated-toast-stack` | Stacked toasts with status morphs, swipe dismissal, actions and layout-aware motion. | `lucide-react`, `motion`, `react-dom` | [`components/motion/animated-toast-stack.tsx`](components/motion/animated-toast-stack.tsx) | [Guide](references/motion/animated-toast-stack.md) |
| **Avatar Group** | `avatar-group` | Interactive stacked avatar pile where hovering an avatar springs it forward while adjacent neighbors fan out with distance falloff. | `motion` | [`components/motion/avatar-group.tsx`](components/motion/avatar-group.tsx) | [Guide](references/motion/avatar-group.md) |
| **Bottom Sheet** | `bottom-sheet` | Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface. | `motion`, `react-dom` | [`components/motion/bottom-sheet.tsx`](components/motion/bottom-sheet.tsx) | [Guide](references/motion/bottom-sheet.md) |
| **Bounce Sidebar** | `bounce-sidebar` | A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path. | `motion` | [`components/motion/bounce-sidebar.tsx`](components/motion/bounce-sidebar.tsx) | [Guide](references/motion/bounce-sidebar.md) |
| **Bouncy Accordion** | `bouncy-accordion` | Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals. | `lucide-react`, `motion` | [`components/motion/bouncy-accordion.tsx`](components/motion/bouncy-accordion.tsx) | [Guide](references/motion/bouncy-accordion.md) |
| **Button** | `button` | Spring-pressed Button plus StatefulButton, MagneticButton, and MetallicButton variants. | `lucide-react`, `motion` | [`components/motion/button/index.tsx`](components/motion/button/index.tsx) | [Guide](references/motion/button.md) |
| **Cascader** | `cascader` | Multi-level cascading drill-down selector with sliding column transitions, breadcrumb trails, instant global search, and keyboard navigation. | `lucide-react`, `motion` | [`components/motion/cascader.tsx`](components/motion/cascader.tsx) | [Guide](references/motion/cascader.md) |
| **Center Morph Modal** | `center-morph-modal` | A composable modal whose full-size surface unfolds from its exact center toward every edge, then folds back the same way with an inset close control. | `lucide-react`, `motion`, `react-dom` | [`components/motion/center-morph-modal.tsx`](components/motion/center-morph-modal.tsx) | [Guide](references/motion/center-morph-modal.md) |
| **Checkbox** | `checkbox` | Form choice control with a draw-on checkmark, spring press feedback and indeterminate state support. | `motion` | [`components/motion/checkbox.tsx`](components/motion/checkbox.tsx) | [Guide](references/motion/checkbox.md) |
| **Combobox** | `combobox` | Searchable combobox with a morphing portal, grouped filtering, keyboard navigation, and controlled or uncontrolled state. | `lucide-react`, `motion`, `react-dom` | [`components/motion/combobox.tsx`](components/motion/combobox.tsx) | [Guide](references/motion/combobox.md) |
| **Cylinder Carousel** | `cylinder-carousel` | A carousel whose items line the inside of a cylinder, receding into the center and growing toward the edges. Drag, scroll or arrow-key to roll it, with a springy glide and snap. Reduced-motion drops the glide. | `@paper-design/shaders-react`, `motion` | [`components/motion/cylinder-carousel.tsx`](components/motion/cylinder-carousel.tsx) | [Guide](references/motion/cylinder-carousel.md) |
| **Dock** | `dock` | macOS-style dock with grouped actions and a gliding active pill. | `lucide-react`, `motion` | [`components/motion/dock.tsx`](components/motion/dock.tsx) | [Guide](references/motion/dock.md) |
| **Drawer** | `drawer` | Side panel that slides in from the left or right with a spring, backdrop blur, body scroll lock and esc-to-close. | `motion` | [`components/motion/drawer.tsx`](components/motion/drawer.tsx) | [Guide](references/motion/drawer.md) |
| **Expandable Control** | `expandable-control` | Click-to-expand button and chip controls that reveal a label or trailing action through spring layout continuity. | `lucide-react`, `motion` | [`components/motion/expandable-control.tsx`](components/motion/expandable-control.tsx) | [Guide](references/motion/expandable-control.md) |
| **File Tree** | `file-tree` | Composable file and folder primitives with springing branches, a gliding selection, and complete keyboard navigation. | `lucide-react`, `motion` | [`components/motion/file-tree.tsx`](components/motion/file-tree.tsx) | [Guide](references/motion/file-tree.md) |
| **Glow Button** | `glow-button` | Premium CTA button featuring an iridescent glowing perimeter gradient, magnetic pointer attraction, and tactile spring feedback. | `motion` | [`components/motion/glow-button.tsx`](components/motion/glow-button.tsx) | [Guide](references/motion/glow-button.md) |
| **Hover Card** | `hover-card` | Rich contextual hover card popover with open/close delay buffering, spring entrance, and collision avoidance. | `motion` | [`components/motion/hover-card.tsx`](components/motion/hover-card.tsx) | [Guide](references/motion/hover-card.md) |
| **Input** | `input` | Text input with label, left/right icons, optional stable error row, error shake and success check draw. | `lucide-react`, `motion` | [`components/motion/input.tsx`](components/motion/input.tsx) | [Guide](references/motion/input.md) |
| **Keyboard Keycap** | `kbd` | Hardware-styled keyboard shortcut cap with OS auto-detection (macOS ⌘ vs Windows Ctrl), key combination joins, and tactile spring press feedback. | `motion` | [`components/motion/kbd.tsx`](components/motion/kbd.tsx) | [Guide](references/motion/kbd.md) |
| **Loader** | `loader` | Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble, metaballs, newton, helix, percent, and five terminal-style ascii spinners. Scales from one size prop, uses currentColor, and reduced-motion swaps every transform for a calm opacity pulse. | `motion` | [`components/motion/loader.tsx`](components/motion/loader.tsx) | [Guide](references/motion/loader.md) |
| **Marquee** | `marquee` | Infinite horizontal or vertical scroll with pause-on-hover. | None (core) | [`components/motion/marquee.tsx`](components/motion/marquee.tsx) | [Guide](references/motion/marquee.md) |
| **Morphing Modal** | `morphing-modal` | Family-app-style modal. A single panel that morphs its height as you navigate between inner views, with blur cross-fade on content. | `lucide-react`, `motion` | [`components/motion/morphing-modal.tsx`](components/motion/morphing-modal.tsx) | [Guide](references/motion/morphing-modal.md) |
| **Multi Select** | `multi-select` | Composable multi-select primitives with searchable options, removable animated tokens, and a morphing collision-aware panel. | `lucide-react`, `motion`, `react-dom` | [`components/motion/multi-select/index.tsx`](components/motion/multi-select/index.tsx) | [Guide](references/motion/multi-select.md) |
| **Number Animation** | `number` | Animated number primitives for count-up values, rolling tickers, and fixed-slot digit swaps. | `motion` | [`components/motion/animated-number.tsx`](components/motion/animated-number.tsx) | [Guide](references/motion/number.md) |
| **Password Input** | `password-input` | Smart password field with show/hide toggle, animated multi-segment strength meter, and live criteria validation checklist. | `lucide-react`, `motion` | [`components/motion/password-input.tsx`](components/motion/password-input.tsx) | [Guide](references/motion/password-input.md) |
| **Popover** | `popover` | Gooey popover whose panel oozes out of the trigger through an SVG goo filter — a liquid neck that stretches and pinches — with crisp content fading in on top, plus a Morph variant that clip-morphs open from the trigger corner. Click or hover trigger, controlled or uncontrolled. | `lucide-react`, `motion`, `react-dom` | [`components/motion/popover.tsx`](components/motion/popover.tsx) | [Guide](references/motion/popover.md) |
| **Preview Rail** | `preview-rail` | Codex app-inspired navigation rail with compact ticks that form a hover pyramid and reveal a floating destination preview. | `motion` | [`components/motion/preview-rail.tsx`](components/motion/preview-rail.tsx) | [Guide](references/motion/preview-rail.md) |
| **Pull to Refresh** | `pull-to-refresh` | Native-feeling pull-to-refresh container with drag resistance, threshold feedback and async refresh handling. | `lucide-react`, `motion` | [`components/motion/pull-to-refresh.tsx`](components/motion/pull-to-refresh.tsx) | [Guide](references/motion/pull-to-refresh.md) |
| **Radio Group** | `radio` | Single-select choice control with a gliding layoutId indicator dot and spring press feedback. | `motion` | [`components/motion/radio.tsx`](components/motion/radio.tsx) | [Guide](references/motion/radio.md) |
| **Range Slider** | `range-slider` | Slider with tick dots and a vertical-bar thumb that bounces as it lands on each step. Drag or keyboard, reduced-motion safe. | `motion` | [`components/motion/range-slider.tsx`](components/motion/range-slider.tsx) | [Guide](references/motion/range-slider.md) |
| **Rating** | `rating` | Interactive star rating component with half-star fractional hover detection, spring bounce micro-interactions on click, and keyboard accessibility. | `lucide-react`, `motion` | [`components/motion/rating.tsx`](components/motion/rating.tsx) | [Guide](references/motion/rating.md) |
| **Scroll Animation** | `scroll-animation` | Scroll-driven motion: a Lenis smooth-scroll provider and a reading-progress indicator that reads from it. | `lenis`, `motion` | [`components/motion/smooth-scroll.tsx`](components/motion/smooth-scroll.tsx) | [Guide](references/motion/scroll-animation.md) |
| **Select** | `select` | Composable select primitives whose panel bouncily unfolds out of the trigger and separates, plus a Morph variant where the trigger grows into the panel via shared layout. | `lucide-react`, `motion` | [`components/motion/select.tsx`](components/motion/select.tsx) | [Guide](references/motion/select.md) |
| **Shader Background** | `shader-background` | Canvas shader backgrounds (mesh gradient, grain, warp, waves, voronoi, dot orbit and more) with a single typed variant prop. Reduced-motion freezes animated variants. | `@paper-design/shaders-react`, `motion` | [`components/motion/shader-background.tsx`](components/motion/shader-background.tsx) | [Guide](references/motion/shader-background.md) |
| **Shared Layout Background** | `shared-layout-bg` | A pill that glides between hovered items via motion's shared layout, with blur enter/exit. | `lucide-react`, `motion` | [`components/motion/shared-layout-bg.tsx`](components/motion/shared-layout-bg.tsx) | [Guide](references/motion/shared-layout-bg.md) |
| **Spotlight Card** | `spotlight-card` | Interactive craft card with mouse-tracking radial spotlight glow, rotating border beam highlight, and subtle depth elevation. | `motion` | [`components/motion/spotlight-card.tsx`](components/motion/spotlight-card.tsx) | [Guide](references/motion/spotlight-card.md) |
| **Success Check** | `success-check` | Celebration confirmation micro-interaction featuring an expanding circle halo, spring pop-in, SVG path draw checkmark, and haptic feedback. | `motion` | [`components/motion/success-check.tsx`](components/motion/success-check.tsx) | [Guide](references/motion/success-check.md) |
| **Switch** | `switch` | Toggle with a spring-driven thumb and press feedback. | `motion` | [`components/motion/switch.tsx`](components/motion/switch.tsx) | [Guide](references/motion/switch.md) |
| **Table** | `table` | Virtualized data table that stays smooth at 10k+ rows, with sortable headers, row selection, column resize and reorder, and a sticky header. Minimal, reduced-motion-safe motion. | `@tanstack/react-virtual`, `lucide-react`, `motion`, `react-dom` | [`components/motion/table/index.tsx`](components/motion/table/index.tsx) | [Guide](references/motion/table.md) |
| **Tabs** | `tabs` | Pill, segment or underline tabs with a spring layoutId indicator. | `motion` | [`components/motion/tabs.tsx`](components/motion/tabs.tsx) | [Guide](references/motion/tabs.md) |
| **Text Animation** | `text-animation` | Animated text primitives for spring reveals, chromatic sweeps, shimmer loading states, letter-cascade swaps and character scrambles. | `motion` | [`components/motion/text-reveal.tsx`](components/motion/text-reveal.tsx) | [Guide](references/motion/text-animation.md) |
| **Theme Toggle** | `theme-toggle` | Theme toggle button that repaints the whole page through the View Transition API — a rectangle or circle clip-path reveal, or slats that open across the screen like a shutter. | `lucide-react`, `motion`, `next-themes` | [`components/motion/theme-toggle.tsx`](components/motion/theme-toggle.tsx) | [Guide](references/motion/theme-toggle.md) |
| **Tilt Card** | `tilt-card` | 3D perspective tilt on hover with cursor-tracked glare. | `motion` | [`components/motion/tilt-card.tsx`](components/motion/tilt-card.tsx) | [Guide](references/motion/tilt-card.md) |
| **Timeline** | `timeline` | Interactive chronological milestone and audit tracker with animated progress lines, status badges, and expandable step disclosures. | `lucide-react`, `motion` | [`components/motion/timeline.tsx`](components/motion/timeline.tsx) | [Guide](references/motion/timeline.md) |
| **Tooltip** | `tooltip` | Hover or focus tooltip with blur enter/exit and spring spawn. | `lucide-react`, `motion`, `react-dom` | [`components/motion/tooltip.tsx`](components/motion/tooltip.tsx) | [Guide](references/motion/tooltip.md) |
| **Wheel Picker** | `wheel-picker` | iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and keyboard control. Composes side by side for date and time pickers, reduced-motion safe. | `motion` | [`components/motion/wheel-picker.tsx`](components/motion/wheel-picker.tsx) | [Guide](references/motion/wheel-picker.md) |

---

### Category 2: AI Agent Surfaces (17 Components)
Specialized UI surfaces for conversational agent interfaces: message bubbles, scrollers, prompt inputs, approval cards, code blocks, diffs, tool activity, and streaming responses.

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

### Category 3: Blocks & Composed Widgets (26 Components)
Complex composable animated UI widgets: kanban boards, filter builders, action sheets, dynamic island, command palette, multi-chain swap, prediction market, availability scheduler, and folder views.

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **404 / Not Found** | `not-found` | Animated 404 pages in five styles: glitch scramble, magnetic digits, cursor spotlight, a fanning card stack and a typed terminal. | `motion` | [`components/motion/not-found/index.tsx`](components/motion/not-found/index.tsx) | [Guide](references/blocks/not-found.md) |
| **Action Sheet** | `action-sheet` | Universal mobile action sheet menu with drag gesture dismissal, rubber-band resistance, haptic feedback, and desktop center modal fallback. | `lucide-react`, `motion`, `react-dom` | [`components/motion/action-sheet.tsx`](components/motion/action-sheet.tsx) | [Guide](references/motion/action-sheet.md) |
| **Availability Scheduler** | `availability-scheduler` | Weekly availability editor where each day springs between available and unavailable, time ranges add and remove with blur-slide motion, times pick from a scrollable dropdown, and a copy menu clones hours to other days. | `lucide-react`, `motion`, `react-dom` | [`components/motion/availability-scheduler/index.tsx`](components/motion/availability-scheduler/index.tsx) | [Guide](references/blocks/availability-scheduler.md) |
| **Bloom Menu** | `bloom-menu` | A button that morphs open into a menu and blooms iris-out from the center, the grid revealing in every direction with radially staggered items. | `lucide-react`, `motion` | [`components/motion/bloom-menu.tsx`](components/motion/bloom-menu.tsx) | [Guide](references/blocks/bloom-menu.md) |
| **Card Folder** | `card-folder` | A landscape card tucked into a stitched purse pocket that lifts forward as the purse compresses into its bottom seam, with controlled open and card-detail visibility plus a separate overflow action. | `lucide-react`, `motion` | [`components/motion/card-folder.tsx`](components/motion/card-folder.tsx) | [Guide](references/blocks/card-folder.md) |
| **Command Palette** | `command-palette` | ⌘K palette with fuzzy filter, spring-animated active row and glass surface. | `lucide-react`, `motion`, `react-dom` | [`components/motion/command-palette.tsx`](components/motion/command-palette.tsx) | [Guide](references/blocks/command-palette.md) |
| **Dynamic Island** | `dynamic-island` | iOS-style island pill that morphs between live activity views with bouncy shell resize and blur crossfades. | `lucide-react`, `motion` | [`components/motion/dynamic-island.tsx`](components/motion/dynamic-island.tsx) | [Guide](references/blocks/dynamic-island.md) |
| **Expandable Action Bar** | `expandable-action-bar` | Compact icon actions that expand into labeled controls on hover or focus with shared layout motion. | `lucide-react`, `motion` | [`components/motion/expandable-action-bar.tsx`](components/motion/expandable-action-bar.tsx) | [Guide](references/blocks/expandable-action-bar.md) |
| **Expandable Tabs** | `expandable-tabs` | Icon tab bar where the active tab expands to a labelled pill, with a panel above that morphs height and slides content direction-aware on switch. | `lucide-react`, `motion` | [`components/motion/expandable-tabs.tsx`](components/motion/expandable-tabs.tsx) | [Guide](references/blocks/expandable-tabs.md) |
| **Feedback Widget** | `feedback-widget` | Corner trigger that morphs open into a feedback popup with message entry and animated sending, success and retry states. | `lucide-react`, `motion` | [`components/motion/feedback-widget.tsx`](components/motion/feedback-widget.tsx) | [Guide](references/blocks/feedback-widget.md) |
| **File Upload** | `file-upload` | Two file upload patterns: an attachment workspace for mixed files, links, audio and media, plus a progress queue with retry and removal. | `lucide-react`, `motion`, `react-dom` | [`components/motion/file-upload.tsx`](components/motion/file-upload.tsx) | [Guide](references/blocks/file-upload.md) |
| **Filter Builder** | `filter-builder` | Faceted stepped query filter builder with dynamic attribute selectors, operator dropdowns, AND/OR logic toggles, and animated chip tags. | `lucide-react`, `motion` | [`components/motion/filter-builder.tsx`](components/motion/filter-builder.tsx) | [Guide](references/motion/filter-builder.md) |
| **Fixtures** | `knockout-bracket` | Animated tournament fixtures in two styles: a knockout bracket that pages through rounds, and a wheel that wraps the same tree around the champion. Both read the same array of rounds, so one dataset draws either. | `lucide-react`, `motion`, `react-dom` | [`components/motion/knockout-bracket.tsx`](components/motion/knockout-bracket.tsx) | [Guide](references/blocks/knockout-bracket.md) |
| **Infinite Masonry** | `infinite-masonry` | Responsive virtualized masonry that measures variable-height cards and loads more data as the user nears the end. | `@tanstack/react-virtual`, `lucide-react`, `motion`, `next` | [`components/motion/infinite-masonry.tsx`](components/motion/infinite-masonry.tsx) | [Guide](references/blocks/infinite-masonry.md) |
| **Kanban Board** | `kanban` | Interactive drag-and-drop task workflow board with spring layoutId reordering, column drop zones, WIP counters, and priority tags. | `lucide-react`, `motion` | [`components/motion/kanban.tsx`](components/motion/kanban.tsx) | [Guide](references/motion/kanban.md) |
| **Morphing Search** | `morphing-search` | Search field or compact icon that morphs into a glass results surface, whether opened by click or keyboard shortcut. | `lucide-react`, `motion`, `react-dom` | [`components/motion/morphing-search.tsx`](components/motion/morphing-search.tsx) | [Guide](references/blocks/morphing-search.md) |
| **Morphing Tabs** | `morphing-tabs` | Reorderable tabs whose selected item grows into a white content surface, with the active shape gliding as tabs move and a shared morph between rooms. | `lucide-react`, `motion`, `react-dom` | [`components/motion/morphing-tabs.tsx`](components/motion/morphing-tabs.tsx) | [Guide](references/blocks/morphing-tabs.md) |
| **Multi-chain Swap** | `swap` | Cross-chain swap widget with chain + token selectors, morphing views, animated flip and quote. | `lucide-react`, `motion` | [`components/motion/swap.tsx`](components/motion/swap.tsx) | [Guide](references/blocks/swap.md) |
| **Notification Stack** | `notification-stack` | Compact notification cards that spring from a stacked summary into a readable list on hover, focus or tap. | `lucide-react`, `motion` | [`components/motion/notification-stack.tsx`](components/motion/notification-stack.tsx) | [Guide](references/blocks/notification-stack.md) |
| **OTP Input** | `otp-input` | One-time-code input with a gliding focus ring, digits that roll in per slot, error shake and a success check draw. | `motion` | [`components/motion/otp-input.tsx`](components/motion/otp-input.tsx) | [Guide](references/blocks/otp-input.md) |
| **Overflow Actions** | `overflow-actions` | Connected pill rail for primary actions that springs open to reveal extra controls. | `lucide-react`, `motion` | [`components/motion/overflow-actions.tsx`](components/motion/overflow-actions.tsx) | [Guide](references/blocks/overflow-actions.md) |
| **Prediction Market** | `prediction-market` | Prediction market trade ticket with buy/sell modes, outcome prices, rolling amount entry, quick add chips and trade states. | `lucide-react`, `motion` | [`components/motion/prediction-market.tsx`](components/motion/prediction-market.tsx) | [Guide](references/blocks/prediction-market.md) |
| **Project Folder** | `project-folder` | An interactive project folder that opens its file fan on hover or focus, expands into a focus-managed overlay, then retraces the complete path when closed. | `lucide-react`, `motion`, `react-dom` | [`components/motion/project-folder.tsx`](components/motion/project-folder.tsx) | [Guide](references/blocks/project-folder.md) |
| **Sign Up Form** | `signup-form` | Composed sign-up form that flags a field only once it is left, then clears the moment it is fixed, with a length-weighted strength meter, password reveal and an animated submit lifecycle. | `lucide-react`, `motion` | [`components/motion/signup-form.tsx`](components/motion/signup-form.tsx) | [Guide](references/blocks/signup-form.md) |
| **Swipeable List** | `swipeable-list` | Mobile-style list rows that swipe left or right to reveal contextual action buttons. | `lucide-react`, `motion` | [`components/motion/swipeable-list.tsx`](components/motion/swipeable-list.tsx) | [Guide](references/blocks/swipeable-list.md) |
| **Wallet Card** | `wallet-card` | Wallet overview card with an account switcher and search that morph open from their triggers, a cascading balance with a live change pill and privacy toggle, copy-address, and Send / Deposit / Swap / Buy actions. | `lucide-react`, `motion` | [`components/motion/wallet-card/index.tsx`](components/motion/wallet-card/index.tsx) | [Guide](references/blocks/wallet-card.md) |

---

## Motion Guides & Best Practices

For in-depth animation principles, design system checklists, and accessibility rules, read:
- [`references/guides/motion-patterns.md`](./references/guides/motion-patterns.md): Complete motion guidelines, physics tokens, timing tables, recipes, and accessibility rules.
- [`references/guides/design-system-checklist.md`](./references/guides/design-system-checklist.md): Comprehensive design system architecture checklist, token scales, contrast rules (WCAG 2.1 AA/AAA), and component health criteria.
- [`references/guides/motion-engineering.md`](./references/guides/motion-engineering.md): Deep dive into `motion/react`, physics-based springs, `layoutId`, `AnimatePresence`, gestures, and hardware acceleration.
- [`references/guides/motion-performance.md`](./references/guides/motion-performance.md): 60/120 FPS animation performance guide covering compositor-only properties, avoiding layout thrashing, and layer budgets.
- [`references/guides/baseline-ui-craft.md`](./references/guides/baseline-ui-craft.md): Design Engineer craft principles: optical alignment, spacing rhythm, accessible focus rings, and micro-interactions.
- [`references/guides/interaction-transitions.md`](./references/guides/interaction-transitions.md): The 12 canonical interaction transitions from Transitions.dev with token specs and timing tables.
- [`references/guides/universal-mobile-patterns.md`](./references/guides/universal-mobile-patterns.md): Cross-platform mobile interaction patterns, touch ergonomics (44pt/48dp rules), and semantic haptics.
- [`references/guides/enterprise-dashboard-patterns.md`](./references/guides/enterprise-dashboard-patterns.md): Architecture for complex enterprise surfaces, timelines, kanban task boards, faceted query builders, and data grids.
