/**
 * Motion UI - Multi-Style Presets & Aesthetic Themes
 *
 * Provides canonical style presets across 6 distinct design aesthetics:
 * - `minimal`: Clean, monochrome, flat surfaces, subtle borders (shadcn / Vercel style)
 * - `origin`: High-craft, micro-elevation, fine inner border glows, dark luxury (Coss / Cal.com style)
 * - `enterprise`: High information density, compact paddings, structured hierarchy (KeenThemes ReUI style)
 * - `glow`: Luminous radial glows, metallic beam accents, dark ambient highlights (ibelick style)
 * - `ios`: Fluid liquid curves, translucent backdrop blur, tactile bounce, haptics (Expo / Apple style)
 * - `brutalist`: 2px/3px solid black borders, hard offset shadows, high contrast retro (Neo-brutalist style)
 */

import { SPRING_BOUNCE, SPRING_GENTLE, SPRING_PRESS, SPRING_SNAPPY, type SpringConfig } from "./ease";

export type StylePreset =
  | "minimal"
  | "origin"
  | "enterprise"
  | "glow"
  | "ios"
  | "brutalist";

export interface StyleTokens {
  name: string;
  description: string;
  card: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonGhost: string;
  input: string;
  badge: string;
  panel: string;
  radius: string;
  spring: SpringConfig;
}

export const STYLE_PRESETS: Record<StylePreset, StyleTokens> = {
  minimal: {
    name: "Minimal",
    description: "Clean monochrome typography, flat card surfaces, crisp 1px borders, and zero-distraction layout.",
    card: "rounded-xl border border-border bg-card text-card-foreground shadow-none",
    buttonPrimary: "rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-sm",
    buttonSecondary: "rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted/60 transition-colors",
    buttonGhost: "rounded-lg text-foreground hover:bg-muted font-medium transition-colors",
    input: "rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-foreground/20",
    badge: "rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-foreground",
    panel: "rounded-xl border border-border bg-card shadow-lg",
    radius: "rounded-lg",
    spring: SPRING_PRESS,
  },
  origin: {
    name: "Origin (High-Craft)",
    description: "Subtle gradients, micro-elevation, fine inner specular borders, refined typography, and precision focus rings.",
    card: "rounded-2xl border border-border/70 bg-gradient-to-b from-card to-card/90 p-5 shadow-sm ring-1 ring-white/5 backdrop-blur-sm",
    buttonPrimary: "rounded-xl bg-primary text-primary-foreground font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:brightness-105 active:scale-[0.98] transition-all",
    buttonSecondary: "rounded-xl border border-border/80 bg-card/80 text-foreground font-medium shadow-sm hover:bg-muted/70 active:scale-[0.98] transition-all",
    buttonGhost: "rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 font-medium transition-all",
    input: "rounded-xl border border-border/80 bg-card/70 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/80 shadow-inner focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all",
    badge: "rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]",
    panel: "rounded-2xl border border-border/80 bg-card/95 p-4 shadow-xl ring-1 ring-white/10 backdrop-blur-md",
    radius: "rounded-xl",
    spring: SPRING_SNAPPY,
  },
  enterprise: {
    name: "Enterprise (Dense ReUI)",
    description: "High data-density, compact spacing, clear semantic contrast, sharp geometry, and functional clarity.",
    card: "rounded-lg border border-border bg-card p-4 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]",
    buttonPrimary: "rounded-md bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 hover:bg-primary/90 transition-colors",
    buttonSecondary: "rounded-md border border-border bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 hover:bg-muted transition-colors",
    buttonGhost: "rounded-md text-foreground text-xs hover:bg-muted px-2.5 py-1.5 transition-colors",
    input: "rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary",
    badge: "rounded border border-border bg-muted px-1.5 py-0.5 text-[11px] font-semibold text-foreground tracking-tight",
    panel: "rounded-lg border border-border bg-card p-3 shadow-md",
    radius: "rounded-md",
    spring: SPRING_PRESS,
  },
  glow: {
    name: "Luminous Glow",
    description: "Deep dark canvases with radial gradient halos, spotlight cursor highlights, and cyan/purple border beams.",
    card: "relative rounded-2xl border border-border/60 bg-gradient-to-b from-card/80 to-card/40 p-6 shadow-2xl backdrop-blur-xl overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]",
    buttonPrimary: "rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] hover:brightness-110 active:scale-[0.98] transition-all",
    buttonSecondary: "rounded-xl border border-blue-500/30 bg-card/60 text-foreground font-medium shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:border-blue-500/50 hover:bg-card active:scale-[0.98] transition-all",
    buttonGhost: "rounded-xl text-foreground/80 hover:text-white hover:bg-white/10 font-medium transition-colors",
    input: "rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    badge: "rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-0.5 text-xs font-medium text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]",
    panel: "rounded-2xl border border-border/60 bg-card/90 p-5 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl ring-1 ring-white/10",
    radius: "rounded-2xl",
    spring: SPRING_GENTLE,
  },
  ios: {
    name: "iOS Liquid",
    description: "Deep rounded squircle corners, translucent blurred glass surfaces, tactile spring bounce, and touch-first layout.",
    card: "rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 p-5 shadow-xl backdrop-blur-2xl",
    buttonPrimary: "rounded-2xl bg-blue-500 text-white font-semibold py-2.5 px-4 shadow-md hover:bg-blue-600 active:scale-95 transition-transform",
    buttonSecondary: "rounded-2xl bg-zinc-200/80 dark:bg-zinc-800/80 text-foreground font-semibold py-2.5 px-4 backdrop-blur-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition-transform",
    buttonGhost: "rounded-2xl text-blue-500 font-semibold hover:bg-blue-500/10 px-3 py-2 transition-colors active:scale-95",
    input: "rounded-2xl border border-black/5 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-800/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40",
    badge: "rounded-full bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-xs font-semibold text-foreground",
    panel: "rounded-3xl border border-white/20 dark:border-white/10 bg-white/85 dark:bg-zinc-900/85 p-6 shadow-2xl backdrop-blur-3xl",
    radius: "rounded-3xl",
    spring: SPRING_BOUNCE,
  },
  brutalist: {
    name: "Neo-Brutalist",
    description: "Bold 2px black outlines, high-contrast flat fills, hard 4px offset drop-shadows, and assertive tactile press shifts.",
    card: "rounded-none border-2 border-foreground bg-background p-5 shadow-[4px_4px_0px_0px_currentColor] text-foreground",
    buttonPrimary: "rounded-none border-2 border-foreground bg-primary text-primary-foreground font-bold px-4 py-2 shadow-[3px_3px_0px_0px_currentColor] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all",
    buttonSecondary: "rounded-none border-2 border-foreground bg-background text-foreground font-bold px-4 py-2 shadow-[3px_3px_0px_0px_currentColor] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all",
    buttonGhost: "rounded-none text-foreground font-bold hover:bg-foreground hover:text-background px-3 py-2 transition-colors",
    input: "rounded-none border-2 border-foreground bg-background px-3 py-2 text-sm font-medium text-foreground placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_currentColor] focus:outline-none focus:shadow-[4px_4px_0px_0px_currentColor]",
    badge: "rounded-none border-2 border-foreground bg-yellow-300 text-black px-2 py-0.5 text-xs font-black uppercase tracking-wider",
    panel: "rounded-none border-[3px] border-foreground bg-background p-5 shadow-[6px_6px_0px_0px_currentColor]",
    radius: "rounded-none",
    spring: SPRING_PRESS,
  },
};

/**
 * Returns the StyleTokens object for the specified preset.
 * Defaults to "origin" (high-craft) if unspecified.
 */
export function getStylePreset(preset?: StylePreset): StyleTokens {
  return STYLE_PRESETS[preset || "origin"] || STYLE_PRESETS.origin;
}
