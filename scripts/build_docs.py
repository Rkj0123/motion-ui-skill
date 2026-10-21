#!/usr/bin/env python3
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
version = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))["version"]
comps = catalog["components"]
total_count = len(comps)

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
craft_items = [c for c in comps.values() if c["category"] == "craft"]

# Sort alphabetically by name
motion_items.sort(key=lambda x: x["name"].lower())
agents_items.sort(key=lambda x: x["name"].lower())
blocks_items.sort(key=lambda x: x["name"].lower())
craft_items.sort(key=lambda x: x["name"].lower())

guide_counts = {}
for item in comps.values():
    guide_dir = Path(item["doc_path"]).parts[1]
    guide_counts[guide_dir] = guide_counts.get(guide_dir, 0) + 1

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

craft_table = "\n".join([
    "| Component | Slug | Description | Dependencies | Primary File | Docs |",
    "| :--- | :--- | :--- | :--- | :--- | :--- |",
    *[format_row(it) for it in craft_items]
])

# Generate SKILL.md
skill_md = f"""---
name: motion-ui
description: >-
  Production-ready animated UI component library for React and Next.js built with Motion (Framer Motion)
  and Tailwind CSS. Includes {total_count} interactive components across 4 categories: Motion Primitives ({len(motion_items)} components), AI Agent Surfaces ({len(agents_items)} components), Blocks & Widgets ({len(blocks_items)} components), and Craft & Surface Components ({len(craft_items)} components: tactile 3D buttons, neumorphic controls, device mockups, background gradients & patterns, calendar widgets, data tables, editorial typography, and interactive cards). Supports 6 aesthetic style presets (minimal, origin, enterprise, glow, ios, brutalist).
  Includes local Codex installation instructions, comprehensive design system guides, and an AI-agent install prompt.
license: MIT
metadata:
  author: Rkj0123
  version: "{version}"
---

# Motion UI Skill

> Complete offline repository of **{total_count} production-ready animated UI components** for React and Next.js, built with **Motion** (`motion/react` / `framer-motion`) and **Tailwind CSS**.

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

### 2. Multi-Style Presets Architecture (`lib/styles.ts`)
Components and wrappers support 6 distinct design aesthetics:
- **`minimal`**: Clean monochrome typography, flat card surfaces, crisp 1px borders, subtle transitions (shadcn/ui style).
- **`origin`**: High-craft, micro-elevation, fine inner specular borders, dark luxury (Coss / Cal.com style).
- **`enterprise`**: High information density, compact spacing, sharp geometry, data grids (KeenThemes ReUI style).
- **`glow`**: Luminous radial halos, spotlight cursor highlights, cyan/purple beams (ibelick style).
- **`ios`**: Fluid squircle curves, translucent blurred glass, bouncy springs, haptics (Expo / Apple style).
- **`brutalist`**: Bold 2px outlines, high-contrast flat fills, hard 4px offset drop-shadows (Neo-brutalist style).

### 3. Class Merger (`lib/utils.ts`)
Canonical `cn(...inputs)` utility combining `clsx` and `tailwind-merge` for conflict-free Tailwind utility resolution.

### 4. Pointer & Interaction Hooks (`lib/hooks/`)
- `useHoverCapable`: Restricts hover-only transformations to devices with true pointer input (prevents sticky phantom taps on mobile).
- `useDismiss`: Universal click-outside and Escape-key listener for overlays.
- `useTapGesture` & `useHoverGesture`: Physical press and hover states with reduced-motion fallbacks.
- `useHaptic`: Semantic mobile vibration feedback with cross-platform desktop fallback.
- `useInViewAnimation`: Viewport intersection trigger with reduced-motion support for staggered entry.
- `useMeasure`: Performant ResizeObserver measurement hook for zero-layout-shift container morphing.

### 5. Accessibility & Reduced Motion
Every component respects user accessibility preferences (`prefers-reduced-motion`):
- Uses Motion's `useReducedMotion()` hook.
- Gracefully degrades transforms, scale shifts, and travel distances to calm opacity fades and instant state transitions.

---

## How AI Agents Should Select & Apply Component Styles

Shared tokens support six aesthetics. `MetricCard` accepts `stylePreset` directly; other components can use `getStylePreset` for custom wrappers until they expose that prop:

1. **Detect Aesthetic Preference**:
   - For Clean/Monochrome/Vercel → use **`minimal`**
   - For High-Craft/Stripe/Cal.com → use **`origin`**
   - For Data-Dense/Admin/ERP/ReUI → use **`enterprise`**
   - For Web3/AI/Spotlight/Luminous → use **`glow`**
   - For Mobile/Touch/iOS/Expo → use **`ios`**
   - For Retro/Bold/High-Contrast → use **`brutalist`**

2. **Apply via Component Prop**:
   Pass `stylePreset` to components supporting multi-style:
   ```tsx
   <MetricCard
     title="Total Revenue"
     value="$124,592"
     change="+12.4%"
     stylePreset="origin" // or "minimal", "enterprise", "glow", "ios", "brutalist"
   />
   ```

3. **Apply via Shared Style Tokens**:
   Import `getStylePreset` from `@/lib/styles` to style any custom container, button, or input:
   ```tsx
   import {{ getStylePreset }} from "@/lib/styles";
   const tokens = getStylePreset("enterprise");
   // <div className={{tokens.card}}> ... </div>
   ```

4. **Include the Shared Tokens with the CLI**:
   ```bash
   python scripts/install-component.py <slug> --style <minimal|origin|enterprise|glow|ios|brutalist> --dest ./src
   # The flag copies lib/styles.ts; it does not rewrite component class names.
   ```

Read [`references/guides/style-presets.md`](./references/guides/style-presets.md) for full token matrices and migration recipes.

---

## How AI Agents Should Use This Skill

When the user asks for any animated component, UI widget, micro-interaction, or AI chat surface:

0. **Skill Activation & Auto-Update Check**:
   Before selecting or writing components, verify the skill is up to date:
   ```bash
   node bin/updater.mjs --silent
   ```
   *(Or from the consuming project: `node .agents/skills/motion-ui/bin/updater.mjs --silent`). If an upstream update exists, it auto-updates before proceeding.*

1. **Locate the Component**: Find the matching component from the {total_count} components listed in the catalog below or in [`catalog.json`](./catalog.json).
2. **Read Component Source & Docs**:
   - Inspect the `Primary File` path in the matching catalog entry.
   - Read the `doc_path` file from that same catalog entry for props, variants, and examples.
3. **Copy or Generate Files**:
   - Provide the complete TypeScript component code directly into the user's project (e.g. `@/components/...`).
   - If missing, also supply the shared utility files from [`lib/`](./lib) (`lib/ease.ts`, `lib/styles.ts`, `lib/utils.ts`, `lib/hooks/...`).
4. **Install NPM Dependencies**:
   - Inform the user or run: `npm install motion@^13.1.0 clsx tailwind-merge` + any specific component dependency (e.g. `lucide-react`, `shiki`, `@tanstack/react-virtual`).
5. **Alternatively, use the CLI Installer**:
   ```bash
   node bin/index.mjs add <slug> --dest ./src
   # or
   python scripts/install-component.py <slug> --dest ./src
   ```

To auto-detect and install this skill into supported AI harnesses, run:
```bash
npx motion-ui-skill
```
When the user asks to install this skill in Codex specifically, read [`references/codex-install.md`](./references/codex-install.md). When they ask an AI agent to install it, provide [`prompts/install-motion-ui.md`](./prompts/install-motion-ui.md) verbatim.

---

## Component Catalog ({total_count} Components)

### Category 1: Motion Components ({len(motion_items)} Components)
Interactive, animated primitives including buttons, inputs, tabs, modals, bottom sheets, sliders, accordions, sidebars, and loaders.

{motion_table}

---

### Category 2: AI Agent Surfaces ({len(agents_items)} Components)
Specialized UI surfaces for conversational agent interfaces: message bubbles, scrollers, prompt inputs, approval cards, code blocks, diffs, tool activity, and streaming responses.

{agents_table}

---

### Category 3: Blocks & Composed Widgets ({len(blocks_items)} Components)
Complex composable animated UI widgets: kanban boards, filter builders, action sheets, dynamic island, command palette, multi-chain swap, prediction market, availability scheduler, event calendars, and gantt timelines.

{blocks_table}

---

### Category 4: Craft & Surface Components ({len(craft_items)} Components)
Tactile 3D buttons, neumorphic controls, high-fidelity device mockups, background gradients & patterns, calendar widgets, data tables, editorial typography, and interactive surface cards.

{craft_table}

---

## Design Search Engine & UI Reasoning

Search across 67 UI style families, industry-mapped color palettes, font pairings, chart selectors, and stack guidelines:

```bash
# Search by style (e.g. glassmorphism, brutalism, minimal, retro, bento)
python scripts/search.py "glassmorphism" --domain style

# Search industry color palette (e.g. fintech, saas, healthcare, devtools)
python scripts/search.py "fintech" --domain color

# Search typography pairings (e.g. editorial, technical, playful, modern)
python scripts/search.py "editorial" --domain typography

# Search optimal chart type (e.g. time series, retention, distribution, comparison)
python scripts/search.py "retention" --domain chart

# Search UX best practices (e.g. modal, checkout, form, error)
python scripts/search.py "form" --domain ux

# Generate a complete cohesive design system for a product domain
python scripts/search.py "Crypto Trading Platform" --design-system
```

---

## Motion Guides & Best Practices

For in-depth animation principles, design system checklists, and accessibility rules, read:
- [`references/guides/style-presets.md`](./references/guides/style-presets.md): Multi-Style Presets & Aesthetic Themes Guide covering minimal, origin, enterprise, glow, ios, and brutalist tokens.
- [`references/guides/motion-patterns.md`](./references/guides/motion-patterns.md): Complete motion guidelines, physics tokens, timing tables, recipes, and accessibility rules.
- [`references/guides/design-system-checklist.md`](./references/guides/design-system-checklist.md): Comprehensive design system architecture checklist, token scales, contrast rules (WCAG 2.1 AA/AAA), and component health criteria.
- [`references/guides/motion-engineering.md`](./references/guides/motion-engineering.md): Deep dive into `motion/react`, physics-based springs, `layoutId`, `AnimatePresence`, gestures, and hardware acceleration.
- [`references/guides/motion-performance.md`](./references/guides/motion-performance.md): 60/120 FPS animation performance guide covering compositor-only properties, avoiding layout thrashing, and layer budgets.
- [`references/guides/baseline-ui-craft.md`](./references/guides/baseline-ui-craft.md): Design Engineer craft principles: optical alignment, spacing rhythm, accessible focus rings, and micro-interactions.
- [`references/guides/interaction-transitions.md`](./references/guides/interaction-transitions.md): The canonical 43 interaction transitions from Transitions.dev with token specs and timing tables.
- [`references/guides/motion-polish-rules.md`](./references/guides/motion-polish-rules.md): Complete micro-distance (4px, 6px, 8px, 12px, 30px) and timing rules from Transitions.dev.
- [`references/guides/design-intelligence.md`](./references/guides/design-intelligence.md): Master design intelligence guide synthesizing 67 UI styles, industry color systems, font pairings, chart selection, and CRO landing architectures.
- [`references/guides/stack-best-practices.md`](./references/guides/stack-best-practices.md): Framework integration guidelines covering Next.js App Router, React 19, Tailwind v3/v4, and Motion.
- [`references/guides/universal-mobile-patterns.md`](./references/guides/universal-mobile-patterns.md): Cross-platform mobile interaction patterns, touch ergonomics (44pt/48dp rules), and semantic haptics.
- [`references/guides/craft-surface-design-system.md`](./references/guides/craft-surface-design-system.md): Craft & Surface Design System covering neutral stages, tactile 3D elevation, typography pairing, and component patterns.
- [`references/guides/enterprise-dashboard-patterns.md`](./references/guides/enterprise-dashboard-patterns.md): Architecture for complex enterprise surfaces, timelines, kanban task boards, faceted query builders, and data grids.
"""

(ROOT / "SKILL.md").write_text(skill_md, encoding="utf-8")
print("Wrote SKILL.md")

# Generate README.md
readme_md = f"""# Motion UI

384 animated React and Next.js components, shipped as source you own.

| Category | Count | What is in it |
| :--- | ---: | :--- |
| Motion | {len(motion_items)} | Buttons, inputs, overlays, navigation, loaders |
| Agent surfaces | {len(agents_items)} | Messages, prompt composers, approvals, streaming responses |
| Blocks | {len(blocks_items)} | Command palettes, boards, calendars, swaps, schedulers |
| Craft | {len(craft_items)} | 3D controls, device mockups, backgrounds, tables, widgets |

**Live gallery:** https://blacknest.dev/motion/

Every component is a `.tsx` file in this repository with a markdown guide
beside it. Nothing is fetched at runtime and there is no package to depend
on: you copy the files you want into your project and they are yours to edit.

---

## Install

### As a skill, for coding agents

```bash
npx motion-ui-skill
```

Detects the agent harness, copies the skill into place, and checks the
upstream version each time the skill activates.

Works with Claude Code, Cursor, Windsurf, Codex, Antigravity, OpenCode and
GitHub Copilot. For Codex:

```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --copy -y
```

Or copy the repository into a harness that scans for skills:

```bash
git clone https://github.com/Rkj0123/motion-ui-skill.git .agents/skills/motion-ui
```

Update an installed skill:

```bash
npx motion-ui-skill update
```

### As components, in your project

```bash
npm install motion@^13.1.0 clsx tailwind-merge lucide-react
```

Then copy the components you need:

```bash
python scripts/install-component.py spotlight-card --dest ./src
```

The installer copies the component, the utilities it imports, and prints the
`npm install` command for any dependency you are missing. A few components
need more: `react-dom`, `shiki`, `lenis`, `matter-js`, `canvas-confetti`,
`next-themes`, `@tanstack/react-virtual` or `@paper-design/shaders-react`.
The catalogue lists the dependencies for every component.

The Node CLI does the same thing and works without Python:

```bash
npx motion-ui-skill list                    # every component
npx motion-ui-skill search "kanban"         # search by name or description
npx motion-ui-skill add spotlight-card --dest ./src
```

### Installer options

| Flag | Effect |
| :--- | :--- |
| `--dest <dir>` | Target directory (default `./src`) |
| `--list` | List every component |
| `--category <name>` | Filter the listing by `motion`, `agents` or `blocks` |
| `--search <term>` | Search names and descriptions |
| `--info` | Show a component's files and dependencies |
| `--with-previews` | Also copy the preview and demo files |
| `--style <preset>` | Also copy the shared style tokens |
| `--list-styles` | List the style presets |

---

## Using a component

Components import from `@/components/...` and `@/lib/...`, so the alias has
to point at your project root:

```ts
// vite.config.ts
export default defineConfig({{
  resolve: {{ alias: {{ "@": path.resolve(__dirname, "./") }} }},
}})
```

They are styled with Tailwind colour tokens: `background`, `foreground`,
`card`, `muted`, `primary`, `border` and `ring`. Define them once in your
global stylesheet. The minimal preset in
[`lib/styles.ts`](./lib/styles.ts) is a working set of values.

```tsx
import {{ TiltCard }} from "@/components/motion/tilt-card";

export function Example() {{
  return (
    <TiltCard className="w-[280px] border border-border bg-card p-8">
      <h3 className="text-2xl font-semibold text-foreground">Tilt me</h3>
    </TiltCard>
  );
}}
```

Every component honours `prefers-reduced-motion` and drops hover-only
transforms on touch devices.

---

## Style presets

Six presets share one set of token names, so you can restyle the catalogue
without touching component source.

| Preset | Geometry | Surface | Fits |
| :--- | :--- | :--- | :--- |
| `minimal` | `rounded-xl`, hairline border | Flat, monochrome | shadcn/ui, Linear |
| `origin` | `rounded-2xl`, specular edge | Gradient cards, micro-shadow | Cal.com, high-craft |
| `enterprise` | `rounded-md`, compact | Dense, structured | Admin panels, ERP |
| `glow` | `rounded-2xl`, soft border | Radial highlights, halo beams | Web3, AI platforms |
| `ios` | `rounded-3xl`, translucent | Glass, squircle bounce | Expo, iOS |
| `brutalist` | `border-2`, square | Flat fills, hard shadows | Retro, bold |

```bash
python scripts/install-component.py --list-styles
python scripts/install-component.py metric-card --style origin --dest ./src
```

`--style` copies `lib/styles.ts`. It does not rewrite class names.

The full token matrix is in
[`references/guides/style-presets.md`](./references/guides/style-presets.md).

---

## Motion tokens

Springs and curves are defined once in
[`lib/ease.ts`](./lib/ease.ts) so animations across the catalogue share the
same feel.

| Constant | Curve | Use |
| :--- | :--- | :--- |
| `EASE_OUT` | `[0.16, 1, 0.3, 1]` | Entrances that settle fast |
| `EASE_IN_OUT` | `[0.77, 0, 0.175, 1]` | Movement between two positions |
| `EASE_EMPHASIZED` | `[0.2, 0, 0, 1]` | Spatial navigation |
| `SPRING_PRESS` | 500 / 30 / 0.6 | Button and trigger feedback |
| `SPRING_BOUNCE` | 300 / 18 / 0.8 | Celebrations, micro-pops |
| `SPRING_LAYOUT` | 360 / 32 / 0.6 | Layout morphs |
| `SPRING_PANEL` | 420 / 40 / 0.5 | Modals, drawers, popovers |
| `SPRING_GENTLE` | 180 / 24 / 1.0 | Slow, calm reveals |
| `SPRING_SNAPPY` | 600 / 35 / 0.5 | Toggles, segmented controls |
| `SPRING_FLOAT` | 120 / 14 / 0.8 | Tooltips, hover cards |
| `SPRING_MOUSE` | 200 / 15 / 0.3 | Cursor tracking, magnetic effects |
| `SPRING_GLIDE` | 700 / 50 / 0.5 | Sliders, no overshoot |

Values are stiffness, damping and mass.

---

## Catalogue

### Motion ({len(motion_items)})

<details>
<summary>Show the table</summary>

{motion_table}

</details>

### Agent surfaces ({len(agents_items)})

<details>
<summary>Show the table</summary>

{agents_table}

</details>

### Blocks ({len(blocks_items)})

<details>
<summary>Show the table</summary>

{blocks_table}

</details>

### Craft ({len(craft_items)})

<details>
<summary>Show the table</summary>

{craft_table}

</details>

`catalog.json` holds the same data in a machine-readable form, including
every component's file list, dependencies and guide path.

---

## Guides

Thirteen references cover the parts that are not a component you can copy.

| Guide | Covers |
| :--- | :--- |
| [`style-presets.md`](./references/guides/style-presets.md) | Token matrices for the six presets |
| [`motion-patterns.md`](./references/guides/motion-patterns.md) | When to use which transition, with timing tables |
| [`motion-engineering.md`](./references/guides/motion-engineering.md) | Spring maths, shared layout morphs, `AnimatePresence` |
| [`motion-performance.md`](./references/guides/motion-performance.md) | Compositor-only properties, layer budgets, 60 and 120 FPS |
| [`motion-polish-rules.md`](./references/guides/motion-polish-rules.md) | Micro-distance scales and progressive disclosure |
| [`interaction-transitions.md`](./references/guides/interaction-transitions.md) | Canonical interaction patterns and their tokens |
| [`design-system-checklist.md`](./references/guides/design-system-checklist.md) | Contrast, type scale, spacing, component health |
| [`baseline-ui-craft.md`](./references/guides/baseline-ui-craft.md) | Optical alignment, spacing rhythm, micro-interactions |
| [`design-intelligence.md`](./references/guides/design-intelligence.md) | Style families, palettes, type pairings, chart choice |
| [`craft-surface-design-system.md`](./references/guides/craft-surface-design-system.md) | Tactile elevation and craft surface patterns |
| [`enterprise-dashboard-patterns.md`](./references/guides/enterprise-dashboard-patterns.md) | Data grids, boards, timelines, filter builders |
| [`stack-best-practices.md`](./references/guides/stack-best-practices.md) | Next.js App Router, React 19, Tailwind v3 and v4 |
| [`universal-mobile-patterns.md`](./references/guides/universal-mobile-patterns.md) | Touch ergonomics, haptics, swipe gestures |

---

## Checks

Run these before publishing a change:

```bash
python scripts/verify_skill.py      # package integrity and catalogue coverage
python scripts/test_release.py      # installer and release regressions
python evals/catalog_eval.py        # catalogue evaluation
```

They check the {total_count}-component catalogue, that every referenced file
exists, installer safety, generated documentation, dependency coverage and
the rule that upstream source is not referenced from the package.

---

## Layout

```text
motion-ui-skill/
├── README.md                      # this file
├── SKILL.md                       # agent-facing skill definition
├── catalog.json                   # machine-readable metadata for all {total_count} components
├── components/                    # component source
│   ├── motion/                    # {len(motion_items)} motion primitives and composed blocks
│   ├── agents/                    # {len(agents_items)} conversational agent surfaces
│   ├── previews/                  # preview and demo implementations
│   └── [category]/                # {len(craft_items)} craft and surface components
├── data/                          # style, colour, type and chart datasets
├── icons/                         # brand and annotation icons
├── lib/                           # tokens, easing physics, hooks
│   ├── ease.ts                    # easing curves and spring constants
│   ├── styles.ts                  # style preset tokens
│   ├── utils.ts                   # cn() utility
│   └── hooks/                     # use-haptic, use-dismiss, use-measure and friends
├── references/                    # component guides
│   ├── motion/                    # {guide_counts.get("motion", 0)} guides
│   ├── agents/                    # {len(agents_items)} guides
│   ├── blocks/                    # {guide_counts.get("blocks", 0)} guides
│   ├── craft/                     # {guide_counts.get("craft", 0)} guides
│   └── guides/                    # {len(list((ROOT / "references/guides").glob("*.md")))} design and motion guides
├── prompts/                       # copy-paste agent install prompt
├── evals/                         # catalogue evaluation
├── scripts/                       # installer, docs generator, checks
└── agents/openai.yaml             # Codex skill metadata
```

---

## License

[MIT](./LICENSE)
"""

(ROOT / "README.md").write_text(readme_md, encoding="utf-8")
print("Wrote README.md")
