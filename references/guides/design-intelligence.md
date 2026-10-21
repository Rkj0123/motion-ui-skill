---
title: "Design Intelligence & UI Reasoning Guide"
description: "Comprehensive design intelligence and reasoning guide covering 67 UI style families, industry-mapped color palettes, font pairings, chart selectors, and conversion rate optimization (CRO) architectures."
documentation: "references/guides/design-intelligence.md"
markdown: "references/guides/design-intelligence.md"
---

# Design Intelligence & UI Reasoning Guide

> Integrated design intelligence and reasoning engine for AI agents and frontend engineers, synthesized from [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).

Modern AI agents often produce bland, generic interfaces because they lack domain-specific design reasoning. This guide provides structured decision trees, token palettes, typography pairings, landing page CRO patterns, and terminal search commands.

---

## 1. Terminal Design Search Engine

Search across styles, color systems, typography, charts, UX patterns, and tech stacks directly from your terminal:

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

## 2. The 67 UI Style Archetypes

| Category | Primary Styles | Visual Characteristics | Best Used For |
| :--- | :--- | :--- | :--- |
| **Translucent & Dimensional** | Glassmorphism, Frosted Glass, Aurora Glow, Liquid Metal | Backdrop blur (12-24px), 1px specular white borders, layered Z-depth, vivid background mesh | Modern SaaS, Web3, FinTech dashboards, floating overlays |
| **Flat & Crisp** | Minimal Clean, Origin, Shadcn-style, Swiss Modernism | Neutral monochromes, 1px hairline borders, high contrast ratios, strict grid rhythm | Enterprise software, developer tools, B2B productivity, documentation |
| **Tactile & Physical** | Neumorphism, Soft UI, Embossed, Claymorphism, Skeuomorphic 2.0 | Soft directional dual shadows (concave/convex), debossed wells, realistic switches | Smart home dashboards, audio interfaces, consumer mobile tools |
| **Bold & High-Contrast** | Neo-Brutalism, Retro-Futurism, Cyberpunk, Terminal Geek | 2px solid black borders, hard unblurred drop shadows (`shadow-[4px_4px_0px_#000]`), monospace accents | Dev tools, consumer web apps, creative portfolios, gaming |
| **Editorial & Curated** | Editorial Modern, Magazine, Museum Placard, Polaroid Gallery | Serif headlines (Playfair/Instrument), asymmetrical whitespace, delicate borders | Publishing, lifestyle brands, portfolio showcases, luxury commerce |
| **Structured Containers** | Bento Grid, Dashboard Metric Panels, Dock-Centric Surfaces | Discrete modular cells with independent border highlights and auto-scaling density | Product feature overviews, analytics centers, workspace consoles |

---

## 3. Industry Color Harmony Matrix

Every product domain demands a specific semantic color structure:

| Domain | Primary Accent | Background / Base | Card Surface | Psychological Signal |
| :--- | :--- | :--- | :--- | :--- |
| **FinTech & Crypto** | Amber / Gold (`#F59E0B`) | Navy Charcoal (`#0F172A`) | Deep Slate (`#1E293B`) | Wealth, stability, institutional security |
| **Developer Tools** | Indigo / Violet (`#6366F1`) | Deep Black (`#0A0A0A`) | Carbon Neutral (`#171717`) | Precision, speed, low cognitive friction |
| **Enterprise SaaS** | Deep Sky (`#0284C7`) | Crisp White (`#FFFFFF`) / Off-White (`#F8FAFC`) | Clean Surface (`#FFFFFF`) | Predictability, clarity, WCAG AAA compliance |
| **Health & Wellness** | Mint Emerald (`#10B981`) | Soft Sage / Off-White (`#F7FAF8`) | Clean White (`#FFFFFF`) | Vitality, reassurance, calm hygiene |
| **E-Commerce & Retail** | Rose / Coral (`#F43F5E`) | Warm White (`#FFFDFB`) | Soft Cream (`#FAFAF9`) | Urgency, delight, high purchase conversion |
| **Cyberpunk & Gaming** | Neon Cyan (`#06B6D4`) | Obsidian Void (`#030712`) | Dark Zinc (`#18181B`) | Immersive technology, futuristic energy |

---

## 4. Typography Pairing Blueprints

1. **Modern Minimal Technical**:
   - Primary: `Geist` or `Inter` (500/600 for UI labels)
   - Code/Numbers: `Geist Mono` or `JetBrains Mono` (tabular-nums for data tables)
   - Hierarchy: H1 (32px/1.2), H2 (24px/1.3), Body (14px/1.5), Caption (12px/1.4)
2. **Editorial Premium**:
   - Headlines: `Instrument Serif` or `Playfair Display` (400 italic accents)
   - Body & Controls: `Inter` or `Plus Jakarta Sans` (400/500)
3. **Neo-Brutalist High Impact**:
   - Headlines: `Space Grotesk` (700 bold, tracking-tight)
   - Body & Badges: `Space Mono` (400/700)

---

## 5. Data Visualization Selection Decision Tree

When building dashboards, choose chart primitives based on data dimensionality:

- **Time Series Trends (1 Metric)**: Area chart with gradient fill and smooth cubic bezier spline (`recharts` / `tremor`).
- **Multi-Metric Comparison**: Grouped or stacked bar chart with accessible color contrast.
- **Part-to-Whole Composition**: Donut chart with center KPI counter (avoid pie charts with > 5 slices).
- **Correlation & Distribution**: Scatter plot with hover tooltip crosshairs or heatmaps for density.
- **Funnel & Conversion Drop-off**: Horizontal step bar chart with delta indicators.

---

## 6. High-Converting Landing Page Hierarchy

Every high-conversion product landing page follows an 8-part sequence:

1. **Hero Section**: Value proposition headline, subhead with concrete metric, dual CTAs (Primary action + Secondary demo), interactive component preview.
2. **Social Proof Strip**: Clean monochrome customer logos or quantitative social proof ("10,000+ engineers building daily").
3. **Core Feature Grid (Bento Layout)**: 3-5 modular cards showing animated micro-interactions of the real product.
4. **Interactive Playground / Deep-Dive**: Live widget that the user can click, drag, or toggle without signing up.
5. **Technical Comparison Table**: Crisp checkmark comparison matrix against legacy alternatives.
6. **Customer Testimonials & Case Studies**: Verified quotes with headshots, company badges, and measurable outcomes.
7. **Transparent Pricing Matrix**: Monthly/Annual toggle, feature tiers, "Most Popular" highlighted card, enterprise contact CTA.
8. **FAQ Accordion & Final CTA**: Interactive accordion addressing objections, followed by a bold final registration trigger.
