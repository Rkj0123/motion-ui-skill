#!/usr/bin/env python3
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
comps = catalog["components"]

def format_deps(deps):
    filtered = [d for d in deps if d not in ("clsx", "react", "tailwind-merge")]
    if not filtered:
        return "None (core)"
    return ", ".join(f"`{d}`" for d in sorted(filtered))

def format_row(item):
    name = item["name"]
    slug = item["slug"]
    desc = item["description"]
    deps_str = format_deps(item.get("dependencies", []))
    primary = item["component_files"][0]
    doc = item["doc_path"]
    return f"| **{name}** | `{slug}` | {desc} | {deps_str} | [`{primary}`]({primary}) | [Guide]({doc}) |"

# Group by category
motion_items = [c for c in comps.values() if c["category"] == "motion"]
agents_items = [c for c in comps.values() if c["category"] == "agents"]
blocks_items = [c for c in comps.values() if c["category"] == "blocks"]

# Sort alphabetically by name
motion_items.sort(key=lambda x: x["name"].lower())
agents_items.sort(key=lambda x: x["name"].lower())
blocks_items.sort(key=lambda x: x["name"].lower())

motion_table = "\n".join([
    "| Component | Slug | Description | Dependencies | Primary File | Docs |",
    "| :--- | :--- | :--- | :--- | :--- | :--- |",
    *[format_row(it) for it in motion_items]
])

agents_table = "\n".join([
    "| Component | Slug | Description | Dependencies | Primary File | Docs |",
    "| :--- | :--- | :--- | :--- | :--- | :--- |",
    *[format_row(it) for it in agents_items]
])

blocks_table = "\n".join([
    "| Component | Slug | Description | Dependencies | Primary File | Docs |",
    "| :--- | :--- | :--- | :--- | :--- | :--- |",
    *[format_row(it) for it in blocks_items]
])

# Generate SKILL.md
skill_md = f"""---
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

{motion_table}

---

### Category 2: AI Agent Surfaces (17 Components)
Specialized UI surfaces for conversational agent interfaces: message bubbles, scrollers, prompt inputs, approval cards, code blocks, diffs, tool activity, and streaming responses.

{agents_table}

---

### Category 3: Blocks & Composed Widgets (26 Components)
Complex composable animated UI widgets: kanban boards, filter builders, action sheets, dynamic island, command palette, multi-chain swap, prediction market, availability scheduler, and folder views.

{blocks_table}

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
"""

(ROOT / "SKILL.md").write_text(skill_md, encoding="utf-8")
print("Wrote SKILL.md")

# Generate README.md
readme_md = f"""# Motion UI Skill

<div align="center">

![Motion UI Banner](https://img.shields.io/badge/Components-95%20Total-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18%20%2F%2019-61dafb?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14%20%2F%2015-000000?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%20%2F%20v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Motion](https://img.shields.io/badge/Motion-Framer%20Motion-f43f5e?style=for-the-badge)
![Local](https://img.shields.io/badge/Skill-Local--First-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

<p align="center">
  <b>Comprehensive Library of 95 Animated React & Next.js UI Components</b><br/>
  Built with Motion and Tailwind CSS. Designed as an offline-first AI Agent Skill & Developer Toolkit.
</p>

</div>

---

## Overview

**Motion UI Skill** is a production-ready, fully self-contained collection of **95 interactive, animated UI components** across three distinct categories:

1. **Motion Components (52)**: Micro-interactions, spring-loaded buttons, morphing inputs, bouncily unfolding selects, bottom sheets, virtualized tables, 3D cylinder carousels, 17 loader variants, cascaders, ratings, avatar groups, celebration success checks, rich hover cards, keyboard keycaps, smart password fields, spotlight cards, glow buttons, and chronological timelines.
2. **AI Agent Surfaces (17)**: Complete modern conversational agent interfaces including message bubbles, viewport scrollers, expandable prompt composers, human-in-the-loop approval cards, streaming responses, diff viewers, syntax-highlighted code blocks, and adaptive activity streams.
3. **Blocks & Widgets (26)**: Rich, composable application widgets such as drag-and-drop kanban workflow boards, faceted query filter builders, universal mobile action sheets, Apple-style dynamic islands, ⌘K command palettes, knockout tournament fixtures, weekly availability schedulers, cross-chain swaps, prediction market tickets, and morphing tab views.

### 🌟 Key Highlights
- **Local-First**: Every bundled component source file (`.tsx`), shared utility (`lib/`), and markdown guide exists directly in this repository. No remote registry is needed to discover or copy the bundled components.
- **Physics-Based Animation**: Powered by Motion (`motion/react` or `framer-motion`) using calibrated spring configurations (`SPRING_PRESS`, `SPRING_PANEL`, `SPRING_LAYOUT`, `SPRING_BOUNCE`, `SPRING_GENTLE`, `SPRING_SNAPPY`, `SPRING_FLOAT`, `SPRING_MOUSE`, `SPRING_GLIDE`).
- **Accessible & Reduced-Motion Safe**: Every component natively respects `prefers-reduced-motion` and suppresses phantom touch `:hover` states on mobile via pointer capability detection.
- **Ecosystem Integration**: Enriched with patterns and standards from KeenThemes ReUI, Design System Checklist, Motion, Expo, Transitions.dev, shadcn/ui, Coss (Origin UI), and ibelick/ui-skills.
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

#### List all 95 components:
```bash
python scripts/install-component.py --list
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
python scripts/install-component.py spotlight-card --dest ./src
```
This automatically:
1. Copies `components/motion/spotlight-card.tsx` to `./src/components/motion/spotlight-card.tsx`.
2. Copies all required utilities (`lib/ease.ts`, `lib/utils.ts`, `lib/hooks/...`) to `./src/lib/`.
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

## Component Catalog (95 Components)

### 1. Motion Components (52)

{motion_table}

---

### 2. AI Agent Surfaces (17)

{agents_table}

---

### 3. Blocks & Widgets (26)

{blocks_table}

---

## Comprehensive Guides Suite

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

export const SPRING_PRESS = {{
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.6,
}} as const;

export const SPRING_BOUNCE = {{
  type: "spring",
  stiffness: 300,
  damping: 18,
  mass: 0.8,
}} as const;

export const SPRING_LAYOUT = {{
  type: "spring",
  stiffness: 360,
  damping: 32,
  mass: 0.6,
}} as const;

export const SPRING_PANEL = {{
  type: "spring",
  stiffness: 420,
  damping: 40,
  mass: 0.5,
}} as const;
```

---

## Validate the package

Run the dependency-free integrity gate before publishing a change:

```bash
python scripts/verify_skill.py
```

It checks the 95-component catalog, all referenced files, the single skill entrypoint, primary file paths, and the source-reference exclusion rule.

---

## Directory Structure

```text
motion-ui-skill/
├── README.md                      # Comprehensive guide & installation instructions
├── SKILL.md                       # Main agent skill definition with catalog & instructions
├── agents/openai.yaml             # Codex skill-list metadata and default prompt
├── catalog.json                   # Machine-readable metadata for all 95 components
├── components/                    # Production TypeScript/React source code
│   ├── motion/                    # 52 motion primitives and composed blocks
│   ├── agents/                    # 17 conversational agent surfaces
│   └── previews/                  # Component preview & demo implementations
├── lib/                           # Foundation tokens, easing physics, and utility hooks
│   ├── ease.ts                    # Easing curves and spring physics constants
│   ├── utils.ts                   # cn() utility
│   └── hooks/                     # Custom hooks (use-haptic, use-dismiss, use-measure, etc.)
├── references/                    # Offline-first detailed markdown component documentation
│   ├── motion/                    # 52 component guides with props & examples
│   ├── agents/                    # 17 agent component guides
│   ├── blocks/                    # 26 block guides
│   ├── guides/                    # Complete suite of 8 motion & design system guides
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
"""

(ROOT / "README.md").write_text(readme_md, encoding="utf-8")
print("Wrote README.md")
