import React, { useState } from "react";
import { motion } from "motion/react";
import { Bot, Terminal, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { AgentActivity, type AgentActivityItem } from "@/components/agents/agent-activity";
import { ToolApproval, ToolApprovalCode, type ToolApprovalStatus } from "@/components/agents/tool-approval";
import { StreamingResponse } from "@/components/agents/streaming-response";
import { PromoOverlay } from "../components/PromoOverlay";

export function AgentUiShowcase() {
  const [approvalStatus, setApprovalStatus] = useState<ToolApprovalStatus>("pending");

  const handleApprove = () => {
    setApprovalStatus("approving");
    setTimeout(() => setApprovalStatus("approved"), 500);
    setTimeout(() => setApprovalStatus("running"), 1000);
    setTimeout(() => setApprovalStatus("complete"), 2000);
  };

  const activityFrames: AgentActivityItem[] = [
    {
      id: "brief",
      type: "step",
      label: "Reading design system specifications",
      status: "complete",
    },
    {
      id: "search",
      type: "search",
      query: "calibrated spring physics tokens lib/ease.ts",
      results: [
        { id: "s1", title: "SPRING_PRESS", domain: "stiffness: 500" },
        { id: "s2", title: "SPRING_BOUNCE", domain: "stiffness: 300" },
      ],
    },
    {
      id: "edit",
      type: "tool",
      action: "edit",
      target: "components/motion/dynamic-island.tsx",
      additions: 48,
      deletions: 6,
    },
    {
      id: "run",
      type: "tool",
      action: "run",
      target: "playwright test tests/motion.spec.ts",
    },
    {
      id: "verify",
      type: "step",
      label: "Autonomous quality verification passed",
      status: "complete",
    },
  ];

  return (
    <div
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#07090e] p-12 text-slate-100 font-sans select-none"
      data-testid="agent-ui-showcase"
    >
      <PromoOverlay
        badge="Autonomous Surfaces"
        title="Built for AI interfaces."
        subtitle="Live reasoning streams · Tool permission gates · Streaming responses · Citations"
      />

      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* 2-Column Showcase */}
      <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-6xl mt-12">
        {/* Left Column: Live Agent Activity Stream */}
        <div
          data-testid="agent-activity-card"
          className="rounded-2xl border border-white/10 bg-[#0d111a]/85 backdrop-blur-2xl p-6 flex flex-col justify-between h-[520px] shadow-2xl ring-1 ring-white/10"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Agent Activity Stream
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                17 Specialized Surfaces
              </span>
            </div>

            <div className="mt-4">
              <AgentActivity
                items={activityFrames}
                status="complete"
                title="Codex Autonomous Task #418"
                defaultOpen={true}
              />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-zinc-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>Full execution trace recorded</span>
            </span>
            <span className="font-mono text-white text-[11px]">1.8s total duration</span>
          </div>
        </div>

        {/* Right Column: Tool Approval + Streaming State */}
        <div className="flex flex-col gap-6 h-[520px]">
          {/* Tool Approval Card */}
          <div
            data-testid="agent-approval-card"
            className="rounded-2xl border border-white/10 bg-[#0d111a]/85 backdrop-blur-2xl p-6 shadow-2xl ring-1 ring-white/10 flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Human-in-the-Loop Permission
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Interactive Gate
                </span>
              </div>

              <div className="mt-4">
                <ToolApproval
                  tool="git.commit_and_push"
                  title={
                    approvalStatus === "complete"
                      ? "Changes Pushed to Branch"
                      : approvalStatus === "running"
                      ? "Pushing commit to origin..."
                      : "Authorize GitHub Push?"
                  }
                  description="Agent crafted 3 new motion components and is ready to push branch."
                  status={approvalStatus}
                  open={true}
                  onApprove={handleApprove}
                  parameters={[
                    {
                      id: "git-cmd",
                      label: "Git Action",
                      value: (
                        <ToolApprovalCode
                          code="git push origin feat/motion-ui-revamp"
                          language="bash"
                        />
                      ),
                    },
                  ]}
                />
              </div>
            </div>

            <div className="text-[11px] text-zinc-500 text-center">
              Stateful approval with animated feedback and parameter validation
            </div>
          </div>

          {/* Streaming Response Preview */}
          <div
            data-testid="agent-streaming-card"
            className="rounded-2xl border border-white/10 bg-[#0d111a]/85 backdrop-blur-2xl p-5 shadow-2xl ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Streaming Agent Response
              </span>
              <span className="text-[10px] font-mono text-emerald-400">● Streaming</span>
            </div>

            <StreamingResponse
              status="streaming"
              copyText="Synthesized 130 motion-ready components."
              sources={[
                { id: "1", title: "lib/ease.ts", snippet: "SPRING_PRESS config" },
                { id: "2", title: "lib/styles.ts", snippet: "6 Style Presets" },
              ]}
            >
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                I have integrated <span className="text-white font-semibold">Motion UI Skill</span> into your project. All components now utilize calibrated spring physics with zero layout shift.
              </p>
            </StreamingResponse>
          </div>
        </div>
      </div>
    </div>
  );
}
