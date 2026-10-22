import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, Check, Sparkles, FolderCheck, Cpu } from "lucide-react";
import { PromoOverlay } from "../components/PromoOverlay";
import { SPRING_GENTLE } from "@/lib/ease";

export function InstallShowcase() {
  const [typedCommand, setTypedCommand] = useState("");
  const [stage, setStage] = useState(0);

  const fullCommand =
    "npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --copy -y";

  useEffect(() => {
    // Type out command smoothly
    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullCommand.length) {
        current += fullCommand[i];
        setTypedCommand(current);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setStage(1), 300);
        setTimeout(() => setStage(2), 700);
        setTimeout(() => setStage(3), 1100);
        setTimeout(() => setStage(4), 1500);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#07090e] font-sans select-none"
      data-testid="install-showcase"
    >
      <PromoOverlay
        badge="Instant Skill Activation"
        title="Give the agent a UI skill."
        subtitle="Zero runtime lock-in · 100% offline-first · Direct workspace integration"
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* macOS Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={SPRING_GENTLE}
        className="w-[980px] rounded-2xl border border-white/10 bg-[#0d111a]/95 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-2xl overflow-hidden ring-1 ring-white/10"
      >
        {/* Terminal Titlebar */}
        <div className="h-11 border-b border-white/10 bg-[#121824] px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="size-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="size-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 font-mono">
            <Terminal className="size-3.5 text-blue-400" />
            <span>codex-cli — zsh — 80×24</span>
          </div>
          <div className="w-12" />
        </div>

        {/* Terminal Body */}
        <div className="p-8 font-mono text-sm leading-relaxed text-slate-200 min-h-[380px]">
          {/* Prompt line */}
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold">workspace</span>
            <span className="text-slate-500">on</span>
            <span className="text-purple-400">main</span>
            <span className="text-blue-400 font-bold">❯</span>
            <span className="text-white font-semibold">
              {typedCommand}
              <span className="inline-block w-2.5 h-4 bg-blue-400 ml-1 translate-y-0.5 animate-pulse" />
            </span>
          </div>

          {/* Execution stages */}
          <div className="mt-6 space-y-3 pl-2">
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-slate-400"
              >
                <Cpu className="size-4 text-blue-400 animate-spin" />
                <span>Resolving remote skill repository: <span className="text-white font-medium">Rkj0123/motion-ui-skill</span></span>
              </motion.div>
            )}

            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Check className="size-4 text-emerald-400" />
                <span>Discovered: <span className="text-emerald-400 font-bold">130 components</span> (80 motion, 17 agent surfaces, 33 blocks)</span>
              </motion.div>
            )}

            {stage >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <FolderCheck className="size-4 text-blue-400" />
                <span>Copied local skill into: <span className="text-blue-300">.agents/skills/motion-ui</span></span>
              </motion.div>
            )}

            {stage >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Motion UI Skill Activated</div>
                    <div className="text-xs text-slate-400">6 aesthetic presets · Native spring physics · Agent UI enabled</div>
                  </div>
                </div>
                <div className="flex gap-2 text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Codex</span>
                  <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Antigravity</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
