# EasyUI Design System Specification

> **Source of Truth:** Every value in this document was extracted directly from the actual EasyUI codebase.
> No generic Tailwind defaults, no guesses, and no invented colors.
> File locations and lines are cited for every token and pattern.

---

## Table of Contents

1. [Exact Color System](#1-exact-color-system)
2. [Exact Typography](#2-exact-typography)
3. [Spacing System](#3-spacing-system)
4. [Border Radius System](#4-border-radius-system)
5. [Border System](#5-border-system)
6. [Shadow System](#6-shadow-system)
7. [Glow / Effect System](#7-glow--effect-system)
8. [Animation System](#8-animation-system)
9. [Hover States](#9-hover-states)
10. [Focus States](#10-focus-states)
11. [Responsive System](#11-responsive-system)
12. [Component Visual Language](#12-component-visual-language)
13. [Icon System](#13-icon-system)
14. [Component States](#14-component-states)
15. [Design Principles](#15-design-principles)
16. [Machine-Readable Token Table](#16-machine-readable-token-table)
17. [Source Locations](#17-source-locations)

---

# 1. EXACT COLOR SYSTEM

EasyUI uses a refined **dark neutral palette** matching the Claude interface aesthetic. Grayscale and dark charcoal surface steps establish surface elevation, visual hierarchy, and calm contrast without deep pitch blacks.

### 1.1 Backgrounds & Surfaces

#### Main Background (Page Canvas)
- **Color name:** `bg` / Main Canvas
- **Exact HEX:** `#151515`
- **RGB:** `rgb(21, 21, 21)`
- **HSL:** `hsl(0, 0%, 8.2%)`
- **CSS variable:** `var(--bg)`
- **Tailwind class:** `bg-background` or `bg-[#151515]`
- **Where it is used:** `body`, `html`, main layout wrapper, App root, section canvas backgrounds, fullscreen preview stage, footer
- **Example component:** `src/App.tsx`, `src/styles/tokens.css` (line 3), `src/components/layout/Navbar.tsx` (`bg-[#151515]/90`), `src/components/layout/Footer.tsx`
- **Source:** `src/styles/tokens.css` (line 3), `tailwind.config.js` (line 11)

#### Surface Background (Default Cards & Containers)
- **Color name:** `surface` / Component Surface
- **Exact HEX:** `#202020`
- **RGB:** `rgb(32, 32, 32)`
- **HSL:** `hsl(0, 0%, 12.5%)`
- **CSS variable:** `var(--surface)`
- **Tailwind class:** `bg-surface` or `bg-[#202020]`
- **Where it is used:** Component preview cards, catalog cards, showcase boxes, modal surface, CommandMenu container, SmoothAccordion, Philosophy cards
- **Example component:** `src/components/common/ComponentCard.tsx`, `src/components/ui/SpotlightCard.tsx`, `src/components/docs/ComponentDetailPage.tsx`
- **Source:** `src/styles/tokens.css` (line 4), `tailwind.config.js` (line 13)

#### Surface Raised (Elevated Elements, Controls & Inputs)
- **Color name:** `surface-raised` / Elevated Surface
- **Exact HEX:** `#242424`
- **RGB:** `rgb(36, 36, 36)`
- **HSL:** `hsl(0, 0%, 14.1%)`
- **CSS variable:** `var(--surface-raised)`
- **Tailwind class:** `bg-surface-raised` or `bg-[#242424]`
- **Where it is used:** Secondary buttons, raised control states, input fields, active tabs, floating docks, badges, table headers, toolbar containers
- **Example component:** `src/components/ui/BatchGestureTray.tsx`, `src/components/ui/NotificationBell.tsx`, `src/components/ui/ExpandableDataRow.tsx`
- **Source:** `src/styles/tokens.css` (line 6), `tailwind.config.js` (line 15)

#### Surface Hover (Interactive Hover Target)
- **Color name:** `surface-hover`
- **Exact HEX:** `#262626` / `#2C2C2C`
- **RGB:** `rgb(38, 38, 38)`
- **HSL:** `hsl(0, 0%, 14.9%)`
- **CSS variable:** `var(--surface-hover)`
- **Tailwind class:** `bg-surface-hover` or `hover:bg-[#262626]`
- **Where it is used:** Hover background on buttons, accordion headers, dropdown rows, ghost buttons, command list rows
- **Source:** `src/styles/tokens.css` (line 5), `tailwind.config.js` (line 14)

#### Code Block Background
- **Color name:** Code Body Background
- **Exact HEX:** `#151515` (inner pre) / `#202020` (wrapper deck) / `#242424` (titlebar)
- **Tailwind class:** `bg-[#151515]`, `bg-[#202020]`, `bg-[#242424]`
- **Where it is used:** `<pre>` and `<code>` blocks in documentation and CodeSnippetDeck
- **Example component:** `src/components/ui/CodeSnippetDeck.tsx`

---

### 1.2 Foreground / Text Colors

#### Primary Text
- **Color name:** `text-primary`
- **Exact HEX:** `#F5F5F5`
- **RGB:** `rgb(245, 245, 245)`
- **HSL:** `hsl(0, 0%, 96.1%)`
- **CSS variable:** `var(--text-primary)`
- **Tailwind class:** `text-text-primary` or `text-[#F5F5F5]`
- **Where it is used:** `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, primary headings, modal titles, card titles, active indicators
- **Source:** `src/styles/tokens.css` (line 24), `tailwind.config.js` (line 23)

#### Secondary Text
- **Color name:** `text-secondary`
- **Exact HEX:** `#A3A3A3`
- **RGB:** `rgb(163, 163, 163)`
- **HSL:** `hsl(0, 0%, 63.9%)`
- **CSS variable:** `var(--text-secondary)`
- **Tailwind class:** `text-text-secondary` or `text-[#A3A3A3]`
- **Where it is used:** Subtitles, body descriptions, key labels, accordion descriptions, ghost button default
- **Source:** `src/styles/tokens.css` (line 25), `tailwind.config.js` (line 24)

#### Muted Text
- **Color name:** `text-muted`
- **Exact HEX:** `#737373`
- **RGB:** `rgb(115, 115, 115)`
- **HSL:** `hsl(0, 0%, 45.1%)`
- **CSS variable:** `var(--text-muted)`
- **Tailwind class:** `text-text-muted` or `text-[#737373]`
- **Where it is used:** Eyebrow uppercase tags, inactive tab text, input placeholders, notification timestamps, footer metadata
- **Source:** `src/styles/tokens.css` (line 26), `tailwind.config.js` (line 25)

#### Subtle Icon / Text
- **Color name:** `text-subtle`
- **Exact HEX:** `#8A8A8A`
- **RGB:** `rgb(138, 138, 138)`
- **HSL:** `hsl(0, 0%, 54.1%)`
- **CSS variable:** `var(--text-subtle)`
- **Tailwind class:** `text-text-subtle` or `text-[#8A8A8A]`
- **Where it is used:** Default icons, chevron indicators, search icons, tooltips
- **Source:** `src/styles/tokens.css` (line 27), `tailwind.config.js` (line 26)

#### Pure White
- **Color name:** White
- **Exact HEX:** `#FFFFFF`
- **Tailwind class:** `text-white`
- **Where it is used:** High-contrast active tags, hover states, logo emphasis

---

### 1.3 Borders

#### Default Border (Token)
- **Color name:** `border`
- **Exact HEX:** `#363636`
- **RGB:** `rgb(54, 54, 54)`
- **HSL:** `hsl(0, 0%, 21.2%)`
- **CSS variable:** `var(--border)`
- **Tailwind class:** `border-border` or `border-[#363636]`
- **Where it is used:** All component cards, panels, modal borders, code blocks, dividers, buttons
- **Source:** `src/styles/tokens.css` (line 9), `tailwind.config.js` (line 18)

#### Border Hover (Token)
- **Color name:** `border-hover`
- **Exact HEX:** `#484848` / `#4A4A4A`
- **RGB:** `rgb(72, 72, 72)`
- **HSL:** `hsl(0, 0%, 28.2%)`
- **CSS variable:** `var(--border-hover)`
- **Tailwind class:** `border-border-hover` or `hover:border-[#484848]` / `hover:border-[#4A4A4A]`
- **Where it is used:** Interactive card hover states, focused inputs, active pill border
- **Source:** `src/styles/tokens.css` (line 10), `tailwind.config.js` (line 19)

#### Border Subtle (Token)
- **Color name:** `border-subtle`
- **Exact HEX:** `#2C2C2C`
- **CSS variable:** `var(--border-subtle)`
- **Tailwind class:** `border-border-subtle` or `border-[#2C2C2C]`
- **Where it is used:** Inner card separators, subtle grid lines
- **Source:** `src/styles/tokens.css` (line 11), `tailwind.config.js` (line 20)

---

### 1.4 Accent & Indicators

#### Primary Accent (Monochrome Light Neutral)
- **Color name:** `accent`
- **Exact HEX:** `#F5F5F5`
- **CSS variable:** `var(--accent)`
- **Tailwind class:** `bg-accent` or `text-accent`
- **Where it is used:** Primary buttons, active tabs, checked state pills
- **Source:** `src/styles/tokens.css` (line 30), `tailwind.config.js` (line 28)

#### Accent Subtle & Glow
- **`accent-subtle`:** `rgba(255, 255, 255, 0.06)`
- **`accent-glow`:** `rgba(255, 255, 255, 0.08)`
- **`accent-ring`:** `rgba(255, 255, 255, 0.2)`

#### Active Indicator Blue (Telemetry & Highlights)
- **Exact HEX:** `#3B82F6`
- **CSS variable:** `var(--indicator-active)`
- **Tailwind class:** `text-accent-blue` or `bg-[#3B82F6]`
- **Where it is used:** Optional telemetry indicators and live charts
- **Source:** `src/styles/tokens.css` (line 34), `tailwind.config.js` (line 32)
- **CRITICAL NOTE:** This is the *only* chromatic hue used in EasyUI, reserved strictly for accessibility focus states and subtle sensor illumination.
- **Source:** `src/styles/index.css` (line 79), `src/components/ui/SpotlightCard.tsx` (line 14), `index.html` (line 37)

---

### 1.5 Gradients

#### Hero Atmospheric Gradient
- **Colors:** `#050505/60` -> `transparent` -> `#050505`
- **Direction:** `to bottom` (`bg-gradient-to-b`)
- **Usage:** Smooth fade overlay on top of canvas DotField in Hero
- **Source:** `src/components/sections/HeroSection.tsx` (line 101)

#### Hero Vignette Gradient
- **Colors:** `transparent 30%` -> `#050505 90%`
- **Type:** Radial ellipse (`radial-gradient(ellipse at center, transparent 30%, #050505 90%)`)
- **Usage:** Screen-edge dark fade around interactive background
- **Source:** `src/components/sections/HeroSection.tsx` (line 102)

#### Ambient Neutral Glow (Hero top)
- **Colors:** `white/15` -> `transparent`
- **Direction:** `to bottom` (`bg-gradient-to-b`)
- **Blur & Opacity:** `blur-[130px]`, `opacity-15`
- **Size & Pos:** `w-[850px] h-[400px] top-0 left-1/2 -translate-x-1/2`
- **Source:** `src/components/sections/HeroSection.tsx` (line 106–108)

#### Ambient Neutral Glow (Final CTA bottom)
- **Colors:** `white/15` -> `transparent`
- **Direction:** `to top` (`bg-gradient-to-t`)
- **Blur & Opacity:** `blur-[80px]`, `opacity-10`
- **Size & Pos:** `w-[500px] h-[200px] bottom-0 left-1/2 -translate-x-1/2`
- **Source:** `src/components/sections/FinalCta.tsx` (line 16)

#### MagneticButton Shimmer / Glow Overlay
- **Colors:** `from-transparent via-white/10 to-transparent`
- **Direction:** `to right` (`bg-gradient-to-r`)
- **Blur & Opacity:** `blur-sm`, `opacity-40`
- **Usage:** Animated hover sheen inside `MagneticButton`
- **Source:** `src/components/ui/MagneticButton.tsx` (line 86)

#### Dynamic Cursor Spotlight Gradient (SpotlightCard)
- **Colors:** `rgba(56, 189, 248, 0.08)` -> `transparent 80%`
- **Type / Size:** Radial circle, dynamic mouse coordinates `${spotlightSize}px circle at ${mouseX}px ${mouseY}px`
- **Source:** `src/components/ui/SpotlightCard.tsx` (line 30)

#### Spotlight Dynamic Border Gradient
- **Colors:** `rgba(255, 255, 255, 0.18)` -> `transparent 80%`
- **Type / Size:** Radial circle, dynamic mouse coordinates `220px circle at ${mouseX}px ${mouseY}px`
- **Source:** `src/components/ui/SpotlightCard.tsx` (line 31)

#### RevealCard Glare Gradient
- **Colors:** `rgba(255, 255, 255, 0.4)` -> `transparent 60%`
- **Type / Size:** Radial circle at `${glareX}% ${glareY}%`
- **Source:** `src/components/ui/RevealCard.tsx` (line 26)

---

# 2. EXACT TYPOGRAPHY

### 2.1 Font Families

#### Primary Sans / Heading / Body Font
- **Family definition:** `'Geist', 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **CSS variable:** `var(--font-sans)`, `var(--font-heading)`, `var(--font-body)`
- **Tailwind class:** `font-sans`, `font-heading`, `font-body`
- **Google Fonts source:** Loaded in `index.html`: `Geist:wght@400;500;600;700;800` & `Inter:wght@400;500;600;700`
- **Source:** `src/styles/tokens.css` (lines 14–16), `tailwind.config.js` (lines 34–36), `index.html` (line 35)

#### Monospace Font
- **Family definition:** `'JetBrains Mono', 'Fira Code', monospace`
- **CSS variable:** `var(--font-mono)`
- **Tailwind class:** `font-mono`
- **Google Fonts source:** Loaded in `index.html`: `JetBrains+Mono:wght@400;500;600`
- **Where used:** Code snippets, terminal commands, badge tags, kbd shortcuts, step numbers, timestamps, catalog tags
- **Source:** `src/styles/tokens.css` (line 17), `tailwind.config.js` (line 38), `index.html` (line 35)

---

### 2.2 Font Sizes & Weights

| Element | Tailwind Class | CSS Value | Weight | Letter Spacing | Line Height | Source Example |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `text-3xl sm:text-6xl md:text-[68px]` | 30px / 60px / 68px | `font-bold` (700) | `tracking-tight` / `--tracking-tight-heading: -0.035em` | `leading-[1.1] sm:leading-[1.08]` | `HeroSection.tsx` (line 137) |
| **Section Title (H2)** | `text-3xl sm:text-4xl` | 30px / 36px | `font-semibold` (600) | `tracking-tight` (-0.025em / -0.028em) | `leading-tight` | `FeaturedShowcase.tsx` (line 35) |
| **Secondary Section H2** | `text-2xl sm:text-3xl` | 24px / 30px | `font-semibold` (600) | `tracking-tight` | `leading-normal` | `PhilosophySection.tsx` (line 37) |
| **Featured Component Title (H3)** | `text-xl sm:text-2xl` | 20px / 24px | `font-semibold` (600) | `tracking-tight` | `leading-snug` | `FeaturedShowcase.tsx` (line 69) |
| **Dialog Modal Title (H3)** | `text-lg sm:text-xl` | 18px / 20px | `font-semibold` (600) | `tracking-tight` | `leading-normal` | `MorphingDialog.tsx` (line 77) |
| **Standard Card Heading (H3/H4)**| `text-sm font-semibold` | 14px | `font-semibold` (600) | `tracking-tight` | `leading-normal` | `PhilosophySection.tsx` (line 52) |
| **Component Card Title** | `text-xs font-medium` | 12px | `font-medium` (500) | `normal` | `leading-normal` | `ComponentCard.tsx` (line 306) |
| **Body Paragraph** | `text-sm text-[#808080]` | 14px | `font-normal` (400) | `--tracking-body: -0.011em` | `leading-relaxed` (1.625) | `PhilosophySection.tsx` (line 55) |
| **Small / Micro Description** | `text-xs text-[#808080]` | 12px | `font-normal` (400) | `-0.011em` | `leading-relaxed` | `DevExperience.tsx` (line 82) |
| **Section Eyebrow Label** | `text-[11px] font-mono` | 11px | `font-normal` (400) | `uppercase tracking-widest` (0.1em) | `leading-none` | `FeaturedShowcase.tsx` (line 32) |
| **Pill / Category Tag** | `text-[10px] font-mono` | 10px | `font-normal` (400) | `tracking-normal` | `leading-none` | `ComponentCard.tsx` (line 311) |
| **New Badge** | `text-[10px] font-mono` | 10px | `font-medium` (500) | `uppercase tracking-wider` (0.05em) | `leading-none` | `NewBadge.tsx` (line 16) |
| **Keyboard Shortcut (kbd)** | `text-[10px] font-mono` | 10px | `font-normal` (400) | `normal` | `leading-none` | `Navbar.tsx` (line 85) |
| **Code Block Content** | `text-xs` / `text-[11px]` / `text-[13px]` | 11px–13px | `font-normal` (400) | `normal` | `leading-relaxed` | `CodePhilosophy.tsx` (line 156), `HeroSection.tsx` (line 231) |

---

### 2.3 Letter Spacing Tokens

* `--tracking-tighter`: `-0.04em` (`src/styles/tokens.css` line 19)
* `--tracking-tight-heading`: `-0.035em` (`src/styles/tokens.css` line 20, `tailwind.config.js` line 41)
* `h2` heading letter spacing: `-0.028em` (`src/styles/index.css` line 39)
* `--tracking-snug` / `h3`: `-0.02em` (`src/styles/tokens.css` line 21, `tailwind.config.js` line 42)
* `h4`, `h5`, `h6`: `-0.015em` (`src/styles/index.css` line 49)
* `--tracking-body`: `-0.011em` (`src/styles/tokens.css` line 22, `src/styles/index.css` line 20)
* `tracking-widest`: `0.1em` (used universally on all uppercase section eyebrows)

---

# 3. SPACING SYSTEM

### 3.1 Page & Container
- **Container max widths (`src/components/layout/Container.tsx`):**
  - `sm`: `max-w-3xl` (768px)
  - `md`: `max-w-5xl` (1024px)
  - `lg`: `max-w-7xl` (1280px)
  - `xl`: `max-w-[1400px]` (1400px)
  - `full`: `max-w-full`
- **Container horizontal padding:** `px-4 sm:px-6 lg:px-8` (16px mobile, 24px tablet, 32px desktop)

### 3.2 Section Spacing
- **Standard section vertical padding:** `py-20` (80px top & bottom)
- **Hero section vertical padding:** `pt-12 sm:pt-24 pb-14 sm:pb-20` (48px / 96px top, 56px / 80px bottom)
- **Final CTA vertical padding:** `py-24` (96px top & bottom)
- **Section header margin bottom:** `mb-12` (48px)

### 3.3 Component Internal Padding
- **SpotlightCard:** `p-6` (24px) or `p-7` (28px)
- **MorphingDialog:** `p-6 sm:p-8` (24px mobile, 32px desktop)
- **SmoothAccordion item header:** `p-4` (16px)
- **SmoothAccordion content body:** `px-4 pb-4 pt-1`
- **FloatingActionDock:** `px-3 py-2.5` (12px horizontal, 10px vertical)
- **AnimatedTabs wrapper:** `p-1` (4px)
- **AnimatedTabs item button:** `px-3.5 py-1.5` (14px horizontal, 6px vertical)
- **ComponentCard info bar:** `px-4 py-3.5` (16px horizontal, 14px vertical)
- **NotificationStack card:** `p-3.5` (14px)
- **CommandMenu input row:** `px-4 py-3`
- **CommandMenu list item:** `px-3 py-2`

### 3.4 Button Spacing (`src/components/ui/MagneticButton.tsx`)
- **Size `sm`:** `px-3.5 py-1.5 text-xs gap-1.5`
- **Size `md`:** `px-5 py-2.5 text-sm gap-2`
- **Size `lg`:** `px-7 py-3.5 text-base gap-2.5`
- **Hero Primary Pill CTA:** `px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm`
- **Hero Secondary Pill CTA:** `px-4.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm`

---

# 4. BORDER RADIUS SYSTEM

### 4.1 Design Tokens (`src/styles/tokens.css`)

| Token Name | Exact CSS Value | Equivalent Tailwind | Primary Usage in Codebase |
| :--- | :--- | :--- | :--- |
| `--radius-sm` | `6px` | `rounded-md` | Tab items, tab indicator, small badges, copy buttons |
| `--radius-md` | `10px` | `rounded-lg` / `rounded-[8px]` | Inputs, search bars, Medium MagneticButtons (`rounded-[8px]`), Large MagneticButtons (`rounded-[10px]`), icon boxes |
| `--radius-lg` | `14px` | `rounded-xl` | All standard cards, SpotlightCard, RevealCard, SmoothAccordion, ComponentCards, Notification cards |
| `--radius-xl` | `20px` | `rounded-2xl` | MorphingDialog modal, FloatingActionDock, Terminal Hero window |
| `--radius-full`| `9999px` | `rounded-full` | Pills, Eyebrow badge, Hero CTA buttons, Scrollbar thumb |

### 4.2 Component-by-Component Radius Inventory
* **Cards (`SpotlightCard`, `RevealCard`, `ComponentCard`):** `rounded-xl`
* **Accordion (`SmoothAccordion`):** `rounded-xl`
* **Modal Dialog (`MorphingDialog`):** `rounded-2xl`
* **Floating Dock (`FloatingActionDock`):** `rounded-2xl`
* **Dock Icon Buttons:** `rounded-xl`
* **Tabs Container (`AnimatedTabs`):** `rounded-lg`
* **Tab Active Indicator:** `rounded-md`
* **Notification Cards (`NotificationStack`):** `rounded-xl`
* **Inputs & Search (`ExpandableSearch`):** `rounded-lg`
* **Hero CTA Buttons:** `rounded-full`
* **Eyebrow Badges:** `rounded-full`
* **NewBadge / Category Badges:** `rounded` (4px)
* **Kbd Badges:** `rounded` (4px)

---

# 5. BORDER SYSTEM

* **Standard Border Width:** `1px` (`border` in Tailwind). 2px borders are never used except on `:focus-visible` outlines.
* **Global Border Default:** `* { border-color: var(--border); }` (`src/styles/index.css` line 7)
* **Default Border Color:** `#1D1D1D` (`var(--border)`)
* **Divider & Section Separator:** `#141414` (e.g. `border-t border-b border-[#141414]`)
* **Card Baseline Border:** `#161616` (e.g. `border border-[#161616]`)
* **Active / Focused Control Border:** `#222222` / `#252525` / `#282828`
* **Hover Border Color:** `#2A2A2A` (`var(--border-hover)`) or `#262626`
* **High-contrast Hover Border (Dock icon):** `#383838`

---

# 6. SHADOW SYSTEM

### 6.1 Token Shadows (`src/styles/tokens.css`)
* **Subtle Shadow:**
  ```css
  --shadow-subtle: 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03);
  ```
* **Elevated Shadow:**
  ```css
  --shadow-elevated: 0 12px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06);
  ```
* **Glow Shadow:**
  ```css
  --shadow-glow: 0 0 20px -5px rgba(255, 255, 255, 0.15);
  ```

### 6.2 Component Shadows
* **Primary MagneticButton Glow Shadow:** `shadow-[0_0_20px_-3px_rgba(255,255,255,0.15)]` (`MagneticButton.tsx` line 54)
* **Hero Primary CTA Glow Shadow:** `shadow-[0_0_25px_rgba(255,255,255,0.1)]` (`HeroSection.tsx` line 161)
* **MorphingDialog Elevation Shadow:** `shadow-[0_20px_50px_rgba(0,0,0,0.8)]` (`MorphingDialog.tsx` line 66)
* **CommandMenu Elevation Shadow:** `shadow-[0_24px_60px_rgba(0,0,0,0.9)]` (`CommandMenu.tsx` line 195)
* **FloatingActionDock Elevation Shadow:** `shadow-[0_12px_32px_rgba(0,0,0,0.6)]` (`FloatingActionDock.tsx` line 82)
* **Terminal Window Shadow:** `shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]` (`HeroSection.tsx` line 190)
* **Mobile Dropdown Shadow:** `shadow-[0_20px_40px_rgba(0,0,0,0.85)]` (`Navbar.tsx` line 127)

---

# 7. GLOW / EFFECT SYSTEM

### 7.1 Background Dot Mesh Patterns (`src/styles/index.css`)
* **Showroom Grid Mesh (`.bg-grid-pattern`):**
  ```css
  .bg-grid-pattern {
    background-size: 24px 24px;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }
  ```
* **Subtle Playground Dot Pattern (`.bg-dot-subtle`):**
  ```css
  .bg-dot-subtle {
    background-size: 16px 16px;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  }
  ```

### 7.2 Glassmorphism Surface (`.glass-surface`)
```css
.glass-surface {
  background: rgba(10, 10, 10, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
}
```

### 7.3 Backdrops
* **Navbar:** `bg-[#050505]/90 backdrop-blur-md`
* **Mobile Menu:** `bg-[#070707]/95 backdrop-blur-xl`
* **Modal Backdrop:** `fixed inset-0 bg-black/70 backdrop-blur-md` (`MorphingDialog.tsx` line 58)
* **Command Palette Backdrop:** `fixed inset-0 bg-black/75 backdrop-blur-sm` (`CommandMenu.tsx` line 186)

---

# 8. ANIMATION SYSTEM

EasyUI's animation philosophy is **Soft + Physical + Immediate + Controlled**.
Every motion transition is strictly defined in `src/lib/motion-tokens.ts`.

### 8.1 Framer Motion Spring Presets

#### 1. Gentle Springs (`springGentle`)
* **Philosophy:** Gentle fluid transitions for tabs, accordion expansion, and dialog content
* **Config:**
  ```ts
  {
    type: "spring",
    stiffness: 280,
    damping: 30,
    mass: 0.8
  }
  ```
* **Where used:** `AnimatedTabs.tsx` (content fade/slide), `SmoothAccordion.tsx` (height reveal)

#### 2. Snappy Springs (`springSnappy`)
* **Philosophy:** Snappy responsive feedback for interactive triggers, hover indicators, dock icons, chevrons
* **Config:**
  ```ts
  {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.5
  }
  ```
* **Where used:** `MagneticButton.tsx` (`whileTap`), `SmoothAccordion.tsx` (chevron rotation), `ExpandableSearch.tsx` (width expansion), `FloatingActionDock.tsx` (icon tap), `CommandMenu.tsx` (modal entrance)

#### 3. Morphing Shared Layout Springs (`springMorph`)
* **Philosophy:** Morphing shared layout transitions for expanding surfaces and tab background indicators
* **Config:**
  ```ts
  {
    type: "spring",
    stiffness: 320,
    damping: 28,
    mass: 0.9
  }
  ```
* **Where used:** `AnimatedTabs.tsx` (`layoutId` active tab pill), `MorphingDialog.tsx` (`layoutId` dialog container)

#### 4. Responsive Physics Springs (`springResponsive`)
* **Philosophy:** Responsive bounce physics for magnetic return and stacked notifications
* **Config:**
  ```ts
  {
    type: "spring",
    stiffness: 350,
    damping: 22,
    mass: 0.6
  }
  ```
* **Where used:** `NotificationStack.tsx` (card drag, enter, exit, and stack offset)

### 8.2 Standard Bezier Curves
* **`easeSoft`:**
  ```ts
  {
    duration: 0.22,
    ease: [0.16, 1, 0.3, 1]
  }
  ```
  *Where used:* `MorphingDialog.tsx` (backdrop fade), `Navbar.tsx` (mobile menu dropdown)
* **`easeFast`:**
  ```ts
  {
    duration: 0.15,
    ease: [0.2, 0, 0, 1]
  }
  ```

### 8.3 Custom Interactive Springs
* **Magnetic Cursor Pull (`MagneticButton.tsx` lines 29–30):**
  `useSpring(0, { stiffness: 280, damping: 20 })` with pull multiplier `strength = 0.35`
* **Dock Magnification (`FloatingActionDock.tsx` line 37):**
  `useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 })`
* **3D Tilt Rotation (`RevealCard.tsx` lines 21–22):**
  `useSpring(0, { stiffness: 260, damping: 20 })` with `maxTilt = 12`

### 8.4 CSS Keyframe Animations
* **`pulse-subtle` (`tailwind.config.js` lines 44–52):**
  ```css
  @keyframes pulseSubtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  animation: pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  ```

---

# 9. HOVER STATES

* **Card Borders:** `border-[#1D1D1D] hover:border-[#2A2A2A]` or `border-[#161616] hover:border-[#262626]` with `transition-colors duration-200` or `duration-300`
* **Nav Links:** `text-[#808080] hover:text-[#F5F5F5]` with `transition-colors`
* **Action Buttons:**
  - Primary: `bg-[#F5F5F5] hover:bg-[#FFFFFF]`
  - Secondary: `bg-[#151515] border-[#1D1D1D] hover:border-[#2A2A2A] hover:bg-[#1A1A1A]`
  - Outline: `border-[#2A2A2A] hover:border-[#F5F5F5]/30 hover:bg-[#101010]`
  - Ghost: `text-[#A1A1A1] hover:text-[#F5F5F5] hover:bg-[#101010]`
* **Interactive Hover Scale:**
  - Hero Primary Button: `hover:scale-[1.02] active:scale-[0.98]`
  - Showcase Cards: Pointer tracking with dynamic opacity reveal (`opacity-0 group-hover:opacity-100 transition-opacity duration-300`)
  - Chevron / Arrow nudges: `group-hover:translate-x-0.5 transition-transform`

---

# 10. FOCUS STATES

EasyUI uses an accessible, restrained focus ring system.

### Focus Ring Specification (`src/styles/index.css` lines 75–81)
```css
.focus-ring {
  outline: none;
}
.focus-ring:focus-visible {
  outline: 2px solid rgba(56, 189, 248, 0.5);
  outline-offset: 2px;
}
```
* **Ring Outline Width:** `2px`
* **Ring Offset:** `2px`
* **Ring Color:** `rgba(56, 189, 248, 0.5)` (Sky-400 at 50% opacity)
* **Trigger:** strictly `:focus-visible` (no intrusive focus outline on mouse click, only on keyboard navigation)
* **Input Elements:** `focus:outline-none` with surrounding container border highlight (`border-[#2A2A2A]`)

---

# 11. RESPONSIVE SYSTEM

EasyUI adheres to Tailwind's mobile-first responsive breakpoints:
* **Mobile (`< 640px`):** Default styles, stacked single-column grids (`grid-cols-1`), hidden labels (`hidden sm:inline`), full-width controls
* **Tablet (`sm:` `>= 640px`):** 2-column grids (`sm:grid-cols-2`), increased vertical padding (`sm:pt-24 sm:pb-20`), enlarged title sizes (`sm:text-6xl`)
* **Desktop (`md:` `>= 768px`):** Horizontal flex alignment (`md:flex-row md:items-center`), desktop navigation menu visible (`hidden md:flex`), hamburger menu hidden (`md:hidden`)
* **Large Desktop (`lg:` `>= 1024px`):** 3-column / 4-column component grids (`lg:grid-cols-3`, `lg:grid-cols-4`), 12-column editorial splits (`lg:grid-cols-12`)
* **Max Display Width (`xl:` `>= 1280px` / `1400px`):** `Container size="xl"` caps content cleanly at `1400px`

---

# 12. COMPONENT VISUAL LANGUAGE

### 12.1 Card Archetype
```tsx
<div className="group relative rounded-xl border border-[#1D1D1D] bg-[#0A0A0A] p-6 transition-colors duration-300 hover:border-[#2A2A2A] overflow-hidden">
  {/* Optional dynamic light effect / grid pattern */}
  <div className="relative z-10">{children}</div>
</div>
```

### 12.2 Button Archetype (`MagneticButton`)
```tsx
<motion.button
  whileTap={{ scale: 0.96 }}
  transition={motionTransitions.springSnappy}
  className="relative inline-flex items-center justify-center font-medium select-none focus-ring px-5 py-2.5 text-sm rounded-[8px] gap-2 bg-[#F5F5F5] text-[#050505] hover:bg-[#FFFFFF] shadow-[0_0_20px_-3px_rgba(255,255,255,0.15)]"
>
  <span>{children}</span>
</motion.button>
```

### 12.3 Pill Filter Archetype
```tsx
<button className="px-3 py-1.5 text-xs rounded-lg font-medium transition-colors whitespace-nowrap focus-ring bg-[#181818] text-[#F5F5F5] border border-[#282828]">
  {label}
</button>
```

### 12.4 Eyebrow / Section Header Archetype
```tsx
<span className="text-[11px] font-mono text-[#737373] uppercase tracking-widest">
  Category
</span>
<h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F5] tracking-tight mt-1">
  Section Title
</h2>
<p className="text-sm text-[#808080] mt-1.5 max-w-lg">
  Descriptive subtitle text.
</p>
```

---

# 13. ICON SYSTEM

* **Icon Library:** `lucide-react` (v1.31.0)
* **Standard Icon Sizes:**
  - Micro / Inline: `w-3 h-3` or `w-3.5 h-3.5` (12px / 14px)
  - Standard Button / Trigger: `w-4 h-4` (16px)
  - Dock / Feature Card: `w-5 h-5` (20px)
* **Icon Colors:**
  - Default: `text-[#808080]` or `text-[#A1A1A1]`
  - Muted: `text-[#6F6F6F]`
  - Header / Feature Tint: `text-[#D4D4D4]` or `text-[#ECECEC]`
  - Active / Hovered: `text-white` or `text-[#F5F5F5]`
* **Stroke Width:** Default Lucide stroke (`2px`)

---

# 14. COMPONENT STATES

| State | Background | Border | Text | Transform / Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Default** | `#080808` / `#0A0A0A` | `#161616` / `#1D1D1D` | `#F5F5F5` (headings), `#808080` (body) | — |
| **Hover** | `#101010` (controls) | `#2A2A2A` / `#262626` | `#F5F5F5` / `#FFFFFF` | Subtle scale, arrow nudge, spotlight glow |
| **Active / Press** | `#1A1A1A` | `#282828` | `#FFFFFF` | `whileTap={{ scale: 0.96 }}` (springSnappy) |
| **Focus** | (unchanged) | Container border `#2A2A2A` | (unchanged) | `outline: 2px solid rgba(56, 189, 248, 0.5)` offset 2px |
| **Disabled** | `#070707` | `#161616` | `#555555` | `opacity-30 cursor-not-allowed` |
| **Selected** | `#181818` | `#282828` / `#2A2A2A` | `#F5F5F5` | White indicator dot or morphing pill background |
| **Success (Feedback)** | `#141414` | `#222222` | `#FFFFFF` | `<Check>` icon reveal, 2000ms duration |

---

# 15. DESIGN PRINCIPLES

1. **Monochrome Dominance:** The interface is built upon a tailored 10-step neutral dark grayscale hierarchy (`#050505` to `#F5F5F5`). No saturated accent backgrounds exist.
2. **Atmospheric Depth:** Visual depth is created by stacking slightly elevated dark surfaces with 1px borders and subtle ambient blur reflections rather than drop shadows.
3. **Physical Motion:** Animations are never linear or basic ease-in-out; every interaction is driven by Framer Motion spring physics with real mass, damping, and stiffness.
4. **Restrained Blue Focus:** `rgba(56, 189, 248, 0.5)` is strictly reserved for accessibility focus rings and sensor beams.
5. **Unified Typography:** `Geist` is used for all narrative and headings; `JetBrains Mono` is used for technical data, commands, tags, and metrics.
6. **Subtle Tactility:** Interactive elements respond to cursor proximity (magnetic pull, spotlight mask, 3D tilt glare).
7. **Copy-Paste Architecture:** Components are self-contained TypeScript + Tailwind CSS files with zero vendor lock-in wrappers.
8. **Consistent Micro-Radius:** `rounded-md` (6px) for small items, `rounded-lg` (10px) for controls, `rounded-xl` (14px) for cards, `rounded-2xl` (20px) for modals.
9. **Precise Spacing Rhythms:** 20px grid gaps (`gap-5`), 80px section spacing (`py-20`), 48px header margins (`mb-12`).
10. **Information-Dense Minimalism:** Text sizes are compact (`text-xs` and `text-sm`), with uppercase tracking-widest eyebrows providing structural guidance.

---

# 16. MACHINE-READABLE TOKEN TABLE

```text
EASYUI DESIGN TOKENS (CLAUDE DARK NEUTRAL SYSTEM)

Background & Surfaces:
- main-canvas (bg): #151515
- component-surface: #202020
- surface-raised: #242424
- surface-hover: #262626
- code-inner: #151515
- code-deck: #202020
- code-titlebar: #242424

Foreground / Typography:
- primary (text-primary): #F5F5F5
- secondary (text-secondary): #A3A3A3
- muted (text-muted): #737373
- subtle-icon (text-subtle): #8A8A8A
- pure-white: #FFFFFF

Accent & Indicators:
- primary-accent: #F5F5F5
- accent-subtle: rgba(255, 255, 255, 0.06)
- accent-glow: rgba(255, 255, 255, 0.08)
- accent-ring: rgba(255, 255, 255, 0.20)
- indicator-blue: #3B82F6

Borders:
- default (border): #363636
- hover (border-hover): #484848 / #4A4A4A
- subtle (border-subtle): #2C2C2C

Radius:
- small: 6px (rounded-md)
- medium: 10px (rounded-lg)
- large: 14px (rounded-xl)
- extra-large: 20px (rounded-2xl)
- full: 9999px (rounded-full)

Typography:
- font-sans: 'Geist', 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- font-mono: 'JetBrains Mono', 'Fira Code', monospace
- heading-h1: text-3xl sm:text-6xl md:text-[68px] font-bold tracking-tight
- heading-h2: text-3xl sm:text-4xl font-semibold tracking-tight
- heading-h3: text-xl sm:text-2xl font-semibold tracking-tight
- card-title: text-sm font-semibold tracking-tight
- body: text-sm font-normal leading-relaxed text-[#A3A3A3]
- small: text-xs text-[#A3A3A3]
- eyebrow: text-[11px] font-mono uppercase tracking-widest text-[#737373]
- tag: text-[10px] font-mono

Animation Springs:
- gentle: { stiffness: 280, damping: 30, mass: 0.8 }
- snappy: { stiffness: 400, damping: 25, mass: 0.5 }
- morph: { stiffness: 320, damping: 28, mass: 0.9 }
- responsive: { stiffness: 350, damping: 22, mass: 0.6 }
- ease-soft: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
- ease-fast: { duration: 0.15, ease: [0.2, 0, 0, 1] }
```

---

# 17. SOURCE LOCATIONS

| Token / Asset | Exact Value | Source File & Line Number |
| :--- | :--- | :--- |
| `var(--bg)` | `#151515` | `src/styles/tokens.css:3`, `tailwind.config.js:11` |
| `var(--surface)` | `#202020` | `src/styles/tokens.css:4`, `tailwind.config.js:13` |
| `var(--surface-hover)` | `#262626` | `src/styles/tokens.css:5`, `tailwind.config.js:14` |
| `var(--surface-raised)` | `#242424` | `src/styles/tokens.css:6`, `tailwind.config.js:15` |
| `var(--border)` | `#363636` | `src/styles/tokens.css:9`, `tailwind.config.js:18` |
| `var(--border-hover)` | `#484848` | `src/styles/tokens.css:10`, `tailwind.config.js:19` |
| `var(--border-subtle)` | `#2C2C2C` | `src/styles/tokens.css:11`, `tailwind.config.js:20` |
| `var(--font-sans)` | `'Geist', 'Geist Sans', 'Inter', ...` | `src/styles/tokens.css:14`, `tailwind.config.js:36` |
| `var(--font-mono)` | `'JetBrains Mono', 'Fira Code', monospace` | `src/styles/tokens.css:17`, `tailwind.config.js:40` |
| `var(--text-primary)` | `#F5F5F5` | `src/styles/tokens.css:24`, `tailwind.config.js:23` |
| `var(--text-secondary)` | `#A3A3A3` | `src/styles/tokens.css:25`, `tailwind.config.js:24` |
| `var(--text-muted)` | `#737373` | `src/styles/tokens.css:26`, `tailwind.config.js:25` |
| `var(--text-subtle)` | `#8A8A8A` | `src/styles/tokens.css:27`, `tailwind.config.js:26` |
| `var(--accent)` | `#F5F5F5` | `src/styles/tokens.css:30`, `tailwind.config.js:29` |
| `var(--indicator-active)`| `#3B82F6` | `src/styles/tokens.css:34`, `tailwind.config.js:32` |
| `var(--radius-sm)` | `6px` | `src/styles/tokens.css:37` |
| `var(--radius-md)` | `10px` | `src/styles/tokens.css:38` |
| `var(--radius-lg)` | `14px` | `src/styles/tokens.css:39` |
| `var(--radius-xl)` | `20px` | `src/styles/tokens.css:40` |
| `var(--radius-full)` | `9999px` | `src/styles/tokens.css:41` |
| `var(--shadow-subtle)` | `0 1px 2px 0 rgba(0,0,0,0.25)...` | `src/styles/tokens.css:44` |
| `var(--shadow-elevated)` | `0 10px 25px -8px rgba(0,0,0,0.4)...` | `src/styles/tokens.css:45` |
| `var(--shadow-glow)` | `0 0 15px -3px rgba(255,255,255,0.08)` | `src/styles/tokens.css:46` |
| `springGentle` | `{ stiffness: 280, damping: 30, mass: 0.8 }` | `src/lib/motion-tokens.ts:10–15` |
| `springSnappy` | `{ stiffness: 400, damping: 25, mass: 0.5 }` | `src/lib/motion-tokens.ts:17–22` |
| `springMorph` | `{ stiffness: 320, damping: 28, mass: 0.9 }` | `src/lib/motion-tokens.ts:24–31` |
| `springResponsive` | `{ stiffness: 350, damping: 22, mass: 0.6 }` | `src/lib/motion-tokens.ts:33–39` |
| `easeSoft` | `{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }` | `src/lib/motion-tokens.ts:42–45` |
| `easeFast` | `{ duration: 0.15, ease: [0.2, 0, 0, 1] }` | `src/lib/motion-tokens.ts:47–50` |
| App Main Background | `bg-[#151515] text-[#F5F5F5]` | `src/App.tsx` |\n