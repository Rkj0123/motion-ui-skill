import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Terminal, Phone, Music, Flame, Check } from "lucide-react";
import { DynamicIsland, DynamicIslandView } from "@/components/motion/dynamic-island";
import { GlowButton } from "@/components/motion/glow-button";
import { MetricCard } from "@/components/motion/metric-card";
import { MorphingSearch } from "@/components/motion/morphing-search";
import { ToolApproval, ToolApprovalCode, type ToolApprovalStatus } from "@/components/agents/tool-approval";
import { PromoOverlay } from "../components/PromoOverlay";

export function ComponentShowcase() {
  const [islandView, setIslandView] = useState<string | null>("active-run");
  const [status, setStatus] = useState<ToolApprovalStatus>("pending");

  const handleApprove = () => {
    setStatus("approving");
    setTimeout(() => setStatus("approved"), 600);
    setTimeout(() => setStatus("running"), 1200);
    setTimeout(() => setStatus("complete"), 2200);
  };

  return (
    <div
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#07090e] p-12 text-slate-100 font-sans select-none"
      data-testid="component-showcase"
    >
      <PromoOverlay
        badge="Motion Primitives"
        title="130 production-ready components."
        subtitle="Physics-calibrated springs · Accessible · Zero remote dependencies"
      />

      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid of Highlight Components */}
      <div className="relative z-10 grid grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        {/* 1. Dynamic Island */}
        <div
          data-testid="showcase-dynamic-island"
          className="rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-6 flex flex-col items-center justify-between h-[300px] shadow-2xl ring-1 ring-white/5"
        >
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Dynamic Island
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">
              SPRING_BOUNCE
            </span>
          </div>

          <div
            className="flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => setIslandView(islandView === "active-run" ? "timer" : "active-run")}
          >
            <DynamicIsland
              view={islandView}
              compact={
                <div className="flex items-center gap-2 px-2 text-xs">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">9:41</span>
                </div>
              }
            >
              <DynamicIslandView id="active-run" className="gap-4 px-3 py-1">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-blue-400">
                    Agent Synthesizing
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Optimizing React AST...
                  </span>
                </div>
                <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">
                  ⚡
                </div>
              </DynamicIslandView>

              <DynamicIslandView id="timer" className="gap-3 px-3 py-1">
                <div className="text-xs font-mono text-emerald-400 font-bold">02:34 elapsed</div>
              </DynamicIslandView>
            </DynamicIsland>
          </div>

          <div className="text-[11px] text-zinc-500 text-center">
            Click to morph between compact, task, and timer states
          </div>
        </div>

        {/* 2. Glow Button & Magnetic Cursor */}
        <div
          data-testid="showcase-glow-button"
          className="rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-6 flex flex-col items-center justify-between h-[300px] shadow-2xl ring-1 ring-white/5"
        >
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Magnetic Glow Button
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-400">
              SPRING_MOUSE
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <GlowButton
              magneticDistance={0.35}
              glowColor="from-blue-500 via-purple-500 to-pink-500"
              className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="size-4" />
                <span>Hover With Cursor</span>
              </span>
            </GlowButton>
          </div>

          <div className="text-[11px] text-zinc-500 text-center">
            Cursor-following magnetic spring physics & specular halo
          </div>
        </div>

        {/* 3. Morphing Search */}
        <div
          data-testid="showcase-morphing-search"
          className="rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-6 flex flex-col items-center justify-between h-[300px] shadow-2xl ring-1 ring-white/5"
        >
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Morphing Search
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">
              SPRING_LAYOUT
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center w-full px-4">
            <MorphingSearch
              items={[
                { id: "1", title: "Dynamic Island", description: "Apple-style status capsule" },
                { id: "2", title: "Agent Activity", description: "Live execution trace" },
                { id: "3", title: "Metric Card", description: "Animated sparkline charts" },
              ]}
              placeholder="Search components (⌘K)..."
            />
          </div>

          <div className="text-[11px] text-zinc-500 text-center">
            Fluid layout morphing from icon to expandable command palette
          </div>
        </div>

        {/* 4. Metric Card */}
        <div
          data-testid="showcase-metric-card"
          className="col-span-1 rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-4 flex flex-col justify-between h-[260px] shadow-2xl ring-1 ring-white/5"
        >
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Metric Card
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
              SPRING_PRESS
            </span>
          </div>

          <div className="py-2">
            <MetricCard
              title="Token Throughput"
              value="2,840,120 /s"
              change="+18.4%"
              isPositive={true}
              timeframe="vs yesterday"
              stylePreset="glow"
              sparklineData={[15, 24, 20, 32, 28, 45, 42, 58, 64]}
            />
          </div>

          <div className="text-[11px] text-zinc-500 text-center">
            Live animated SVG sparkline with tactile spring hover
          </div>
        </div>

        {/* 5. Tool Approval Card */}
        <div
          data-testid="showcase-tool-approval"
          className="col-span-2 rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-5 flex flex-col justify-between h-[260px] shadow-2xl ring-1 ring-white/5"
        >
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Human-in-the-Loop Tool Approval
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">
              AGENT SURFACES
            </span>
          </div>

          <div>
            <ToolApproval
              tool="terminal.run"
              title={
                status === "complete"
                  ? "Execution Complete"
                  : status === "running"
                  ? "Running tests..."
                  : "Allow Test Suite Execution?"
              }
              description="Agent requested shell execution permission."
              status={status}
              open={true}
              onApprove={handleApprove}
              parameters={[
                {
                  id: "cmd",
                  label: "Command",
                  value: <ToolApprovalCode code="bun test tests/motion.test.ts" language="bash" />,
                },
              ]}
            />
          </div>

          <div className="text-[11px] text-zinc-500 text-center">
            Interactive state machine with spring-governed button morphs
          </div>
        </div>
      </div>
    </div>
  );
}
