---
title: "Multi-Style Presets & Aesthetic Themes Guide"
description: "Architecture and guidelines for AI agents to select, switch, and apply distinct design aesthetics across all components."
category: "Design Systems"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/guides/style-presets.md"
markdown: "references/guides/style-presets.md"
license: "MIT"
---

# Multi-Style Presets & Aesthetic Themes

> Architecture and guidelines for AI agents to select, switch, and apply distinct design aesthetics across all components in this skill.

Modern web and mobile applications span dramatically different visual aesthetics. Rather than forcing a single rigid look, the Motion UI Skill equips agents with **6 Canonical Style Presets**:

1. **`minimal`** — Clean, flat monochrome, crisp 1px borders, subtle hover transitions (inspired by *shadcn/ui* and *Linear*).
2. **`origin`** — High-craft, micro-elevation, subtle specular inner borders, precision focus rings, dark-mode luxury (inspired by *Coss* and *Cal.com*).
3. **`enterprise`** — High information density, compact spacing, clear semantic contrast, sharp geometry, data-heavy (inspired by *KeenThemes ReUI*).
4. **`glow`** — Luminous radial gradient halos, spotlight cursor highlights, dark ambient glass, metallic beams (inspired by *ibelick/ui-skills*).
5. **`ios`** — Deep rounded squircle curves (`rounded-2xl` to `rounded-3xl`), translucent blurred glass (`backdrop-blur-2xl`), tactile spring bounce, haptic vibrations (inspired by *Expo* and *Apple iOS*).
6. **`brutalist`** — Bold 2px/3px black outlines, high-contrast flat fills, hard 4px offset drop-shadows, tactile press translations (Neo-brutalist aesthetic).

---

## The Style Tokens Architecture (`lib/styles.ts`)

Every preset is formalized into reusable Tailwind utility tokens and spring physics configurations:

```ts
import { STYLE_PRESETS, getStylePreset, type StylePreset } from "@/lib/styles";

const tokens = getStylePreset("origin");
// tokens.card          -> Card surface classes
// tokens.buttonPrimary -> Primary action button classes
// tokens.input         -> Text/search field classes
// tokens.badge         -> Status badge classes
// tokens.panel         -> Modal/drawer/popover container classes
// tokens.radius        -> Corner rounding token
// tokens.spring        -> Corresponding Motion spring curve
```

---

## Visual Comparison of the 6 Styles

| Style Preset | Border & Geometry | Surface & Lighting | Shadows & Elevation | Motion Physics | Target Archetype |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`minimal`** | `border-border`, `rounded-xl` | Flat `bg-card`, monochrome | `shadow-none` / `shadow-sm` | `SPRING_PRESS` (stiff) | Minimalist SaaS, developer tools |
| **`origin`** | `border-border/70`, `rounded-2xl`, `ring-1 ring-white/5` | Gradient `from-card to-card/90`, glass | Refined micro-shadows | `SPRING_SNAPPY` (velocity) | Cal.com, Stripe, high-craft web apps |
| **`enterprise`** | `border-border`, `rounded-md`, compact | High contrast, clear cells | Minimal `shadow-xs` | `SPRING_PRESS` (subtle) | ReUI dashboards, ERP, CRM, data grids |
| **`glow`** | `border-border/60`, `rounded-2xl` | Radial gradient spotlights, cyan/indigo | `shadow-2xl`, glow blooms | `SPRING_GENTLE` (smooth) | Web3, AI platforms, luxury landing pages |
| **`ios`** | `border-white/10`, `rounded-3xl` | Translucent glass `backdrop-blur-2xl` | Diffuse ambient soft shadows | `SPRING_BOUNCE` (playful) | Expo mobile apps, consumer iOS PWAs |
| **`brutalist`** | `border-2 border-foreground`, `rounded-none` | High contrast flat fills, saturated accents | Hard offset `shadow-[4px_4px_0px_0px_currentColor]` | Snappy step transitions | Creative studios, modern editorial, web zines |

---

## How AI Agents Should Select Styles

When generating UI code or answering user prompts, follow these decision heuristics:

### Step 1: Detect User Aesthetic Preference
- If the user specifies an aesthetic (e.g. *"make it look like Apple"*, *"make a high-craft Stripe/Cal.com interface"*, *"make a compact admin dashboard"*, *"make a cyber glow look"*), map immediately to the preset:
  - *"Apple / Mobile / Expo"* $\rightarrow$ **`ios`**
  - *"Stripe / Linear / Cal.com / High Craft"* $\rightarrow$ **`origin`**
  - *"Shadcn / Minimal / Clean"* $\rightarrow$ **`minimal`**
  - *"KeenThemes / ReUI / Enterprise / Compact / Admin"* $\rightarrow$ **`enterprise`**
  - *"Glow / Cyber / Dark Modern / Spotlight"* $\rightarrow$ **`glow`**
  - *"Retro / Brutalist / Bold / Outline"* $\rightarrow$ **`brutalist`**

### Step 2: If Unspecified, Ask or Default Wisely
- Default for web apps: **`origin`** (balanced high-craft, works in both dark and light mode).
- Default for mobile / touch-first: **`ios`**.
- Default for heavy data tables / Gantt / Kanban: **`enterprise`**.

### Step 3: Implement with Style Preset Props or Utility Tokens
Many components in this skill accept a `stylePreset` prop directly:

```tsx
<MetricCard
  title="Monthly Recurring Revenue"
  value="$48,250"
  change="+14.2%"
  stylePreset="origin"
/>
```

Or consume `STYLE_PRESETS` in custom wrappers:

```tsx
import { STYLE_PRESETS, type StylePreset } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function CustomCard({ stylePreset = "origin", children }: { stylePreset?: StylePreset; children: React.ReactNode }) {
  const tokens = STYLE_PRESETS[stylePreset];
  return <div className={cn(tokens.card)}>{children}</div>;
}
```

---

## CLI Style Flag

The CLI component installer supports explicit style selection:

```bash
# Install component with a specific style preset
python scripts/install-component.py metric-card --style origin --dest ./src

# List all available styles and tokens
python scripts/install-component.py --list-styles
```
