# Motion UI Skill

<div align="center">

![Motion UI Banner](https://img.shields.io/badge/Components-82%20Total-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18%20%2F%2019-61dafb?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14%20%2F%2015-000000?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%20%2F%20v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Motion](https://img.shields.io/badge/Motion-Framer%20Motion-f43f5e?style=for-the-badge)
![Offline](https://img.shields.io/badge/Offline-100%25%20Self--Contained-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<p align="center">
  <b>Comprehensive Library of 82 Animated React & Next.js UI Components</b><br/>
  Built with Motion and Tailwind CSS. Designed as an offline-first AI Agent Skill & Developer Toolkit.
</p>

</div>

---

## Overview

**Motion UI Skill** is a production-ready, fully self-contained collection of **82 interactive, animated UI components** across three distinct categories:

1. **Motion Components (42)**: Micro-interactions, spring-loaded buttons, morphing inputs, bouncily unfolding selects, bottom sheets, virtualized tables, 3D cylinder carousels, and 17 loader variants.
2. **AI Agent Surfaces (17)**: Complete modern conversational agent interfaces including message bubbles, viewport scrollers, expandable prompt composers, human-in-the-loop approval cards, streaming responses, diff viewers, syntax-highlighted code blocks, and adaptive activity streams.
3. **Blocks & Widgets (23)**: Rich, composable application widgets such as Apple-style dynamic islands, ⌘K command palettes, knockout tournament fixtures, weekly availability schedulers, cross-chain swaps, prediction market tickets, and morphing tab views.

### 🌟 Key Highlights
- **100% Self-Contained & Offline-First**: Every single component source file (`.tsx`), shared utility (`lib/`), and markdown documentation guide exists directly in this repository. Zero reliance on external registries, APIs, or internet connectivity.
- **Physics-Based Animation**: Powered by Motion (`motion/react` or `framer-motion`) using calibrated spring configurations (`SPRING_PRESS`, `SPRING_PANEL`, `SPRING_LAYOUT`, `SPRING_MOUSE`).
- **Accessible & Reduced-Motion Safe**: Every component natively respects `prefers-reduced-motion` and suppresses phantom touch `:hover` states on mobile via pointer capability detection.
- **Copy-Paste & Drop-In Ready**: Drop files directly into your project's `components/` and `lib/` folders, or use the included CLI installer.

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

#### B. Skills CLI (`skills.dev` / `npx skills`)
Install directly using the universal skills CLI:
```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui
```

#### C. Claude Code
Add to your local project or global configuration:
```bash
# Add to workspace skills
mkdir -p .claude/skills
git clone https://github.com/Rkj0123/motion-ui-skill.git .claude/skills/motion-ui
```

#### D. Cursor, Windsurf & Copilot
Add this repository as a submodule or copy it into your project:
```bash
git submodule add https://github.com/Rkj0123/motion-ui-skill.git .skills/motion-ui
```
Reference `SKILL.md` in your `.cursorrules` or prompt:
> "Consult `.skills/motion-ui/SKILL.md` and `catalog.json` for UI components and animation patterns."

---

### 2. Using the CLI Component Installer

A standalone Python script is included in [`scripts/install-component.py`](./scripts/install-component.py) to inspect, search, and copy any component directly into any Next.js or React codebase.

#### List all 82 components:
```bash
python scripts/install-component.py --list
```

#### Search components by keyword:
```bash
python scripts/install-component.py --search "modal"
python scripts/install-component.py --search "agent"
```

#### Inspect component files & dependencies:
```bash
python scripts/install-component.py tilt-card --info
```

#### Install a component into your project:
```bash
python scripts/install-component.py tilt-card --dest ./src
```
This automatically:
1. Copies `components/motion/tilt-card.tsx` to `./src/components/motion/tilt-card.tsx`.
2. Copies all required utilities (`lib/ease.ts`, `lib/utils.ts`, `lib/hooks/...`) to `./src/lib/`.
3. Outputs the exact `npm install` command for any missing dependencies.

---

## Prerequisites for Projects

Ensure your target React or Next.js project has the base dependencies installed:

```bash
npm install motion clsx tailwind-merge lucide-react
# or: pnpm add motion clsx tailwind-merge lucide-react
```

### Tailwind Configuration
Ensure your `tailwind.config.js` or `globals.css` supports CSS variable colors (`background`, `foreground`, `muted`, `border`, etc.). The canonical `cn` helper is provided in [`lib/utils.ts`](./lib/utils.ts).

---

## Component Catalog (82 Components)

### 1. Motion Components (42)

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Action Swap** | `action-swap` | CTA button and slot primitives for swapping text and icons with blur motion. | `lucide-react`, `motion` | [`components/motion/action-swap.tsx`](components/motion/action-swap.tsx) | [Guide](references/motion/action-swap.md) |
| **Adaptive Stepper** | `adaptive-stepper` | Composable numeric stepper whose fixed footprint adapts at its minimum and maximum while the value rolls between steps. | `lucide-react`, `motion` | [`components/motion/adaptive-stepper.tsx`](components/motion/adaptive-stepper.tsx) | [Guide](references/motion/adaptive-stepper.md) |
| **Animated Badge** | `animated-badge` | Status badge with animated state icons, pulse feedback and compact size variants. | `lucide-react`, `motion` | [`components/motion/animated-badge.tsx`](components/motion/animated-badge.tsx) | [Guide](references/motion/animated-badge.md) |
| **Animated CTA Buttons** | `expanding-arrow-button` | Expressive call-to-action buttons with expanding, hold, and slide interactions. | `motion` | [`components/motion/expanding-arrow-button.tsx`](components/motion/expanding-arrow-button.tsx) | [Guide](references/motion/expanding-arrow-button.md) |
| **Animated Context Menu** | `context-menu` | Composable context-menu primitives with a pointer-origin clip morph, a gliding active row, checkbox and radio choices, keyboard navigation, typeahead, and long-press support. | `lucide-react`, `motion`, `react-dom` | [`components/motion/context-menu.tsx`](components/motion/context-menu.tsx) | [Guide](references/motion/context-menu.md) |
| **Animated Sidebar** | `animated-sidebar` | A composable application sidebar with morphing nested navigation that folds into an animated icon rail on desktop and becomes a focus-managed sheet on mobile. | `lucide-react`, `motion`, `react-dom` | [`components/motion/animated-sidebar.tsx`](components/motion/animated-sidebar.tsx) | [Guide](references/motion/animated-sidebar.md) |
| **Animated Toast Stack** | `animated-toast-stack` | Stacked toasts with status morphs, swipe dismissal, actions and layout-aware motion. | `lucide-react`, `motion`, `react-dom` | [`components/motion/animated-toast-stack.tsx`](components/motion/animated-toast-stack.tsx) | [Guide](references/motion/animated-toast-stack.md) |
| **Bottom Sheet** | `bottom-sheet` | Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface. | `motion`, `react-dom` | [`components/motion/bottom-sheet.tsx`](components/motion/bottom-sheet.tsx) | [Guide](references/motion/bottom-sheet.md) |
| **Bounce Sidebar** | `bounce-sidebar` | A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path. | `motion` | [`components/motion/bounce-sidebar.tsx`](components/motion/bounce-sidebar.tsx) | [Guide](references/motion/bounce-sidebar.md) |
| **Bouncy Accordion** | `bouncy-accordion` | Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals. | `lucide-react`, `motion` | [`components/motion/bouncy-accordion.tsx`](components/motion/bouncy-accordion.tsx) | [Guide](references/motion/bouncy-accordion.md) |
| **Button** | `button` | Spring-pressed Button plus StatefulButton, MagneticButton, and MetallicButton variants. | `lucide-react`, `motion` | [`components/motion/button/base.tsx`](components/motion/button/base.tsx) | [Guide](references/motion/button.md) |
| **Center Morph Modal** | `center-morph-modal` | A composable modal whose full-size surface unfolds from its exact center toward every edge, then folds back the same way with an inset close control. | `lucide-react`, `motion`, `react-dom` | [`components/motion/center-morph-modal.tsx`](components/motion/center-morph-modal.tsx) | [Guide](references/motion/center-morph-modal.md) |
| **Checkbox** | `checkbox` | Form choice control with a draw-on checkmark, spring press feedback and indeterminate state support. | `motion` | [`components/motion/checkbox.tsx`](components/motion/checkbox.tsx) | [Guide](references/motion/checkbox.md) |
| **Combobox** | `combobox` | Searchable combobox with a morphing portal, grouped filtering, keyboard navigation, and controlled or uncontrolled state. | `lucide-react`, `motion`, `react-dom` | [`components/motion/combobox.tsx`](components/motion/combobox.tsx) | [Guide](references/motion/combobox.md) |
| **Cylinder Carousel** | `cylinder-carousel` | A carousel whose items line the inside of a cylinder, receding into the center and growing toward the edges. Drag, scroll or arrow-key to roll it, with a springy glide and snap. Reduced-motion drops the glide. | `@paper-design/shaders-react`, `motion` | [`components/motion/cylinder-carousel.tsx`](components/motion/cylinder-carousel.tsx) | [Guide](references/motion/cylinder-carousel.md) |
| **Dock** | `dock` | macOS-style dock with grouped actions and a gliding active pill. | `lucide-react`, `motion` | [`components/motion/dock.tsx`](components/motion/dock.tsx) | [Guide](references/motion/dock.md) |
| **Drawer** | `drawer` | Side panel that slides in from the left or right with a spring, backdrop blur, body scroll lock and esc-to-close. | `motion` | [`components/motion/drawer.tsx`](components/motion/drawer.tsx) | [Guide](references/motion/drawer.md) |
| **Expandable Control** | `expandable-control` | Click-to-expand button and chip controls that reveal a label or trailing action through spring layout continuity. | `lucide-react`, `motion` | [`components/motion/expandable-control.tsx`](components/motion/expandable-control.tsx) | [Guide](references/motion/expandable-control.md) |
| **File Tree** | `file-tree` | Composable file and folder primitives with springing branches, a gliding selection, and complete keyboard navigation. | `lucide-react`, `motion` | [`components/motion/file-tree.tsx`](components/motion/file-tree.tsx) | [Guide](references/motion/file-tree.md) |
| **Input** | `input` | Text input with label, left/right icons, optional stable error row, error shake and success check draw. | `lucide-react`, `motion` | [`components/motion/input.tsx`](components/motion/input.tsx) | [Guide](references/motion/input.md) |
| **Loader** | `loader` | Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble, metaballs, newton, helix, percent, and five terminal-style ascii spinners. Scales from one size prop, uses currentColor, and reduced-motion swaps every transform for a calm opacity pulse. | `motion` | [`components/motion/loader.tsx`](components/motion/loader.tsx) | [Guide](references/motion/loader.md) |
| **Marquee** | `marquee` | Infinite horizontal or vertical scroll with pause-on-hover. | None (core) | [`components/motion/marquee.tsx`](components/motion/marquee.tsx) | [Guide](references/motion/marquee.md) |
| **Morphing Modal** | `morphing-modal` | Family-app-style modal. A single panel that morphs its height as you navigate between inner views, with blur cross-fade on content. | `lucide-react`, `motion` | [`components/motion/morphing-modal.tsx`](components/motion/morphing-modal.tsx) | [Guide](references/motion/morphing-modal.md) |
| **Multi Select** | `multi-select` | Composable multi-select primitives with searchable options, removable animated tokens, and a morphing collision-aware panel. | `lucide-react`, `motion`, `react-dom` | [`components/motion/multi-select/content.tsx`](components/motion/multi-select/content.tsx) | [Guide](references/motion/multi-select.md) |
| **Number Animation** | `number` | Animated number primitives for count-up values, rolling tickers, and fixed-slot digit swaps. | `motion` | [`components/motion/animated-number.tsx`](components/motion/animated-number.tsx) | [Guide](references/motion/number.md) |
| **Popover** | `popover` | Gooey popover whose panel oozes out of the trigger through an SVG goo filter — a liquid neck that stretches and pinches — with crisp content fading in on top, plus a Morph variant that clip-morphs open from the trigger corner. Click or hover trigger, controlled or uncontrolled. | `lucide-react`, `motion`, `react-dom` | [`components/motion/popover.tsx`](components/motion/popover.tsx) | [Guide](references/motion/popover.md) |
| **Preview Rail** | `preview-rail` | Codex app-inspired navigation rail with compact ticks that form a hover pyramid and reveal a floating destination preview. | `motion` | [`components/motion/preview-rail.tsx`](components/motion/preview-rail.tsx) | [Guide](references/motion/preview-rail.md) |
| **Pull to Refresh** | `pull-to-refresh` | Native-feeling pull-to-refresh container with drag resistance, threshold feedback and async refresh handling. | `lucide-react`, `motion` | [`components/motion/pull-to-refresh.tsx`](components/motion/pull-to-refresh.tsx) | [Guide](references/motion/pull-to-refresh.md) |
| **Radio Group** | `radio` | Single-select choice control with a gliding layoutId indicator dot and spring press feedback. | `motion` | [`components/motion/radio.tsx`](components/motion/radio.tsx) | [Guide](references/motion/radio.md) |
| **Range Slider** | `range-slider` | Slider with tick dots and a vertical-bar thumb that bounces as it lands on each step. Drag or keyboard, reduced-motion safe. | `motion` | [`components/motion/range-slider.tsx`](components/motion/range-slider.tsx) | [Guide](references/motion/range-slider.md) |
| **Scroll Animation** | `scroll-animation` | Scroll-driven motion: a Lenis smooth-scroll provider and a reading-progress indicator that reads from it. | `lenis`, `motion` | [`components/motion/parallax.tsx`](components/motion/parallax.tsx) | [Guide](references/motion/scroll-animation.md) |
| **Select** | `select` | Composable select primitives whose panel bouncily unfolds out of the trigger and separates, plus a Morph variant where the trigger grows into the panel via shared layout. | `lucide-react`, `motion` | [`components/motion/select.tsx`](components/motion/select.tsx) | [Guide](references/motion/select.md) |
| **Shader Background** | `shader-background` | Canvas shader backgrounds (mesh gradient, grain, warp, waves, voronoi, dot orbit and more) with a single typed variant prop. Reduced-motion freezes animated variants. | `@paper-design/shaders-react`, `motion` | [`components/motion/shader-background.tsx`](components/motion/shader-background.tsx) | [Guide](references/motion/shader-background.md) |
| **Shared Layout Background** | `shared-layout-bg` | A pill that glides between hovered items via motion's shared layout, with blur enter/exit. | `lucide-react`, `motion` | [`components/motion/shared-layout-bg.tsx`](components/motion/shared-layout-bg.tsx) | [Guide](references/motion/shared-layout-bg.md) |
| **Switch** | `switch` | Toggle with a spring-driven thumb and press feedback. | `motion` | [`components/motion/switch.tsx`](components/motion/switch.tsx) | [Guide](references/motion/switch.md) |
| **Table** | `table` | Virtualized data table that stays smooth at 10k+ rows, with sortable headers, row selection, column resize and reorder, and a sticky header. Minimal, reduced-motion-safe motion. | `@tanstack/react-virtual`, `lucide-react`, `motion`, `react-dom` | [`components/motion/table/index.tsx`](components/motion/table/index.tsx) | [Guide](references/motion/table.md) |
| **Tabs** | `tabs` | Pill, segment or underline tabs with a spring layoutId indicator. | `motion` | [`components/motion/tabs.tsx`](components/motion/tabs.tsx) | [Guide](references/motion/tabs.md) |
| **Text Animation** | `text-animation` | Animated text primitives for spring reveals, chromatic sweeps, shimmer loading states, letter-cascade swaps and character scrambles. | `motion` | [`components/motion/chromatic-text-reveal.tsx`](components/motion/chromatic-text-reveal.tsx) | [Guide](references/motion/text-animation.md) |
| **Theme Toggle** | `theme-toggle` | Theme toggle button that repaints the whole page through the View Transition API — a rectangle or circle clip-path reveal, or slats that open across the screen like a shutter. | `lucide-react`, `motion`, `next-themes` | [`components/motion/theme-toggle.tsx`](components/motion/theme-toggle.tsx) | [Guide](references/motion/theme-toggle.md) |
| **Tilt Card** | `tilt-card` | 3D perspective tilt on hover with cursor-tracked glare. | `motion` | [`components/motion/tilt-card.tsx`](components/motion/tilt-card.tsx) | [Guide](references/motion/tilt-card.md) |
| **Tooltip** | `tooltip` | Hover or focus tooltip with blur enter/exit and spring spawn. | `lucide-react`, `motion`, `react-dom` | [`components/motion/tooltip.tsx`](components/motion/tooltip.tsx) | [Guide](references/motion/tooltip.md) |
| **Wheel Picker** | `wheel-picker` | iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and keyboard control. Composes side by side for date and time pickers, reduced-motion safe. | `motion` | [`components/motion/wheel-picker.tsx`](components/motion/wheel-picker.tsx) | [Guide](references/motion/wheel-picker.md) |

---

### 2. AI Agent Surfaces (17)

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AI Sidebar** | `ai-sidebar` | A collapsible AI workspace sidebar for folders, projects, files, and bookmarks with keyboard navigation, optimistic moves, inline rename, and overflow-aware labels. | `lucide-react`, `motion`, `react-dom` | [`components/agents/ai-sidebar.tsx`](components/agents/ai-sidebar.tsx) | [Guide](references/agents/ai-sidebar.md) |
| **Agent Activity** | `agent-activity` | One adaptive activity stream for reasoning, searches, tool calls, structured execution traces, or a chronological mix. | `lucide-react`, `motion` | [`components/agents/agent-activity/index.tsx`](components/agents/agent-activity/index.tsx) | [Guide](references/agents/agent-activity.md) |
| **Agent Loading States** | `loading-states` | Three thoughtful loading states for AI interfaces: shimmering status text, live agent progress, and cycling reasoning phrases. | `motion` | [`components/agents/loading-states/agent-progress.tsx`](components/agents/loading-states/agent-progress.tsx) | [Guide](references/agents/loading-states.md) |
| **Approval Card** | `approval-card` | A human-in-the-loop decision surface for approvals, single or multiple-choice questions, custom responses, and multi-step review flows. | `lucide-react`, `motion` | [`components/agents/approval-card/index.tsx`](components/agents/approval-card/index.tsx) | [Guide](references/agents/approval-card.md) |
| **Chat App** | `chat-app` | A complete agent conversation workspace composing navigation, messages, streaming, planning, approvals, tools, code, diffs, generated media, sources, and prompt input. | `lucide-react`, `motion`, `react-dom`, `shiki` | [`components/agents/agent-activity/index.tsx`](components/agents/agent-activity/index.tsx) | [Guide](references/agents/chat-app.md) |
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

### 3. Blocks & Widgets (23)

| Component | Slug | Description | Dependencies | Primary File | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **404 / Not Found** | `not-found` | Animated 404 pages in five styles: glitch scramble, magnetic digits, cursor spotlight, a fanning card stack and a typed terminal. | `motion` | [`components/motion/not-found/glitch.tsx`](components/motion/not-found/glitch.tsx) | [Guide](references/blocks/not-found.md) |
| **Availability Scheduler** | `availability-scheduler` | Weekly availability editor where each day springs between available and unavailable, time ranges add and remove with blur-slide motion, times pick from a scrollable dropdown, and a copy menu clones hours to other days. | `lucide-react`, `motion`, `react-dom` | [`components/motion/availability-scheduler/index.tsx`](components/motion/availability-scheduler/index.tsx) | [Guide](references/blocks/availability-scheduler.md) |
| **Bloom Menu** | `bloom-menu` | A button that morphs open into a menu and blooms iris-out from the center, the grid revealing in every direction with radially staggered items. | `lucide-react`, `motion` | [`components/motion/bloom-menu.tsx`](components/motion/bloom-menu.tsx) | [Guide](references/blocks/bloom-menu.md) |
| **Card Folder** | `card-folder` | A landscape card tucked into a stitched purse pocket that lifts forward as the purse compresses into its bottom seam, with controlled open and card-detail visibility plus a separate overflow action. | `lucide-react`, `motion` | [`components/motion/card-folder.tsx`](components/motion/card-folder.tsx) | [Guide](references/blocks/card-folder.md) |
| **Command Palette** | `command-palette` | ⌘K palette with fuzzy filter, spring-animated active row and glass surface. | `lucide-react`, `motion`, `react-dom` | [`components/motion/command-palette.tsx`](components/motion/command-palette.tsx) | [Guide](references/blocks/command-palette.md) |
| **Dynamic Island** | `dynamic-island` | iOS-style island pill that morphs between live activity views with bouncy shell resize and blur crossfades. | `lucide-react`, `motion` | [`components/motion/dynamic-island.tsx`](components/motion/dynamic-island.tsx) | [Guide](references/blocks/dynamic-island.md) |
| **Expandable Action Bar** | `expandable-action-bar` | Compact icon actions that expand into labeled controls on hover or focus with shared layout motion. | `lucide-react`, `motion` | [`components/motion/expandable-action-bar.tsx`](components/motion/expandable-action-bar.tsx) | [Guide](references/blocks/expandable-action-bar.md) |
| **Expandable Tabs** | `expandable-tabs` | Icon tab bar where the active tab expands to a labelled pill, with a panel above that morphs height and slides content direction-aware on switch. | `lucide-react`, `motion` | [`components/motion/expandable-tabs.tsx`](components/motion/expandable-tabs.tsx) | [Guide](references/blocks/expandable-tabs.md) |
| **Feedback Widget** | `feedback-widget` | Corner trigger that morphs open into a feedback popup with message entry and animated sending, success and retry states. | `lucide-react`, `motion` | [`components/motion/feedback-widget.tsx`](components/motion/feedback-widget.tsx) | [Guide](references/blocks/feedback-widget.md) |
| **File Upload** | `file-upload` | Two file upload patterns: an attachment workspace for mixed files, links, audio and media, plus a progress queue with retry and removal. | `lucide-react`, `motion`, `react-dom` | [`components/motion/attachment-upload.tsx`](components/motion/attachment-upload.tsx) | [Guide](references/blocks/file-upload.md) |
| **Fixtures** | `knockout-bracket` | Animated tournament fixtures in two styles: a knockout bracket that pages through rounds, and a wheel that wraps the same tree around the champion. Both read the same array of rounds, so one dataset draws either. | `lucide-react`, `motion`, `react-dom` | [`components/motion/knockout-bracket.tsx`](components/motion/knockout-bracket.tsx) | [Guide](references/blocks/knockout-bracket.md) |
| **Infinite Masonry** | `infinite-masonry` | Responsive virtualized masonry that measures variable-height cards and loads more data as the user nears the end. | `@tanstack/react-virtual`, `lucide-react`, `motion`, `next` | [`components/motion/infinite-masonry.tsx`](components/motion/infinite-masonry.tsx) | [Guide](references/blocks/infinite-masonry.md) |
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

## Animation Physics & Motion Tokens

Components use standardized spring and easing constants defined in [`lib/ease.ts`](./lib/ease.ts):

```typescript
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

export const SPRING_PRESS = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.6,
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

For full animation principles and accessibility patterns, see [`references/guides/motion-patterns.md`](./references/guides/motion-patterns.md).

---

## Directory Structure

```text
motion-ui-skill/
├── README.md                      # Comprehensive guide & installation instructions
├── SKILL.md                       # Main agent skill definition with catalog & instructions
├── catalog.json                   # Machine-readable metadata for all 82 components
├── components/                    # Production TypeScript/React source code
│   ├── motion/                    # 42 interactive motion components
│   ├── agents/                    # 17 conversational agent surfaces
│   ├── blocks/                    # 23 composed application widgets
│   └── previews/                  # Component preview & demo implementations
├── lib/                           # Foundation tokens, easing physics, and utility hooks
│   ├── ease.ts                    # Easing curves and spring physics constants
│   ├── utils.ts                   # cn() utility
│   ├── touch.ts                   # Touch interaction helpers
│   ├── favicon.ts                 # Favicon loading helper
│   └── hooks/                     # Custom hooks (use-hover-capable, use-dismiss, etc.)
├── references/                    # Offline-first detailed markdown component documentation
│   ├── motion/                    # 42 component guides with props & examples
│   ├── agents/                    # 17 agent component guides
│   ├── blocks/                    # 23 block guides
│   └── guides/                    # Motion patterns, timing & accessibility guide
├── scripts/
│   └── install-component.py       # Standalone CLI tool to install components into projects
└── skills/
    └── motion-ui/
        └── SKILL.md               # Mirrored skill definition for package managers
```

---

## License

This project is licensed under the [MIT License](./LICENSE).
