import React from "react";
import { motion } from "motion/react";
import { Sparkles, Star, Github, ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import { SPRING_GENTLE, SPRING_BOUNCE } from "@/lib/ease";

export function FinaleCard() {
  return (
    <div
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#07090e] p-12 text-slate-100 font-sans select-none"
      data-testid="finale-card"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={SPRING_GENTLE}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        {/* Brand Icon */}
        <div className="size-20 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.5)] ring-1 ring-white/30 mb-6">
          <Sparkles className="size-10 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl drop-shadow-lg">
          Motion UI Skill
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
          Give your coding agent better UI instincts.
        </p>

        <p className="mt-2 text-base text-zinc-400 font-medium">
          Same agent. Same prompt. Better UI.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-xl">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
            130 Components
          </span>
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            80 Motion Primitives
          </span>
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            17 Agent Surfaces
          </span>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            6 Style Presets
          </span>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            Open Source • MIT
          </span>
        </div>

        {/* GitHub Link & CTA Card */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
            <Github className="size-5 text-white" />
            <span className="font-mono text-base font-semibold text-white tracking-tight">
              github.com/Rkj0123/motion-ui-skill
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span>Star it on GitHub ⭐</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
