import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";
import { getStylePreset, type StylePreset } from "@/lib/styles";
import { PromoOverlay } from "../components/PromoOverlay";

const PRESETS: StylePreset[] = [
  "minimal",
  "origin",
  "enterprise",
  "glow",
  "ios",
  "brutalist",
];

export function StylePresetShowcase() {
  const [activePreset, setActivePreset] = useState<StylePreset>("minimal");

  // Auto-switch every 850ms if not manually clicked
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePreset((current) => {
        const nextIndex = (PRESETS.indexOf(current) + 1) % PRESETS.length;
        return PRESETS[nextIndex];
      });
    }, 850);
    return () => clearInterval(interval);
  }, []);

  const tokens = getStylePreset(activePreset);

  return (
    <div
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#07090e] p-12 font-sans select-none"
      data-testid="style-preset-showcase"
      data-active-preset={activePreset}
    >
      <PromoOverlay
        badge="Multi-Style Presets"
        title="6 distinct visual styles."
        subtitle="One unified component library · 6 calibrated design aesthetics"
      />

      {/* Ambient background lighting shifting with style */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full blur-[150px] pointer-events-none transition-all duration-700 ${
          activePreset === "glow"
            ? "bg-blue-600/25"
            : activePreset === "ios"
            ? "bg-purple-600/20"
            : activePreset === "brutalist"
            ? "bg-amber-500/15"
            : activePreset === "enterprise"
            ? "bg-emerald-600/15"
            : "bg-indigo-600/10"
        }`}
      />

      {/* Preset Selector Pill Tabs */}
      <div className="relative z-20 mb-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-1.5 backdrop-blur-xl shadow-xl ring-1 ring-white/10">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            data-testid={`preset-btn-${preset}`}
            onClick={() => setActivePreset(preset)}
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
              activePreset === preset
                ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Structurally Identical UI Card Re-styled by Style Tokens */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className={`${tokens.card} transition-all duration-300`}>
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                <Sparkles className="size-4" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground tracking-tight">
                  Autonomous Fleet Controller
                </h3>
                <p className="text-xs text-muted-foreground">{tokens.description}</p>
              </div>
            </div>

            <div className={tokens.badge}>
              <span>{tokens.name}</span>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 gap-4 my-5">
            <div className="rounded-lg border border-border/40 p-3 bg-muted/20">
              <div className="text-xs text-muted-foreground">Autonomous Requests</div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">1,420 / min</div>
              <div className="text-[11px] text-emerald-500 font-semibold mt-0.5">
                +14.2% optimized
              </div>
            </div>
            <div className="rounded-lg border border-border/40 p-3 bg-muted/20">
              <div className="text-xs text-muted-foreground">Reasoning Speed</div>
              <div className="text-xl font-bold font-mono text-foreground mt-1">42 ms median</div>
              <div className="text-[11px] text-emerald-500 font-semibold mt-0.5">
                Zero token overhead
              </div>
            </div>
          </div>

          {/* Prompt Input Form */}
          <div className="space-y-2 mb-6">
            <label className="text-xs font-semibold text-foreground">Agent Command Prompt</label>
            <input
              type="text"
              readOnly
              value="Deploy canary build to production fleet with 5% traffic split"
              className={`w-full ${tokens.input}`}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button type="button" className={`flex-1 py-2 text-xs ${tokens.buttonPrimary}`}>
              Execute Action
            </button>
            <button type="button" className={`flex-1 py-2 text-xs ${tokens.buttonSecondary}`}>
              Simulation Run
            </button>
            <button type="button" className={`px-4 py-2 text-xs ${tokens.buttonGhost}`}>
              Configure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
