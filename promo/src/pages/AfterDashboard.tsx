import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  Bot,
  ChevronRight,
  Database,
  Layers,
  Search,
  Settings,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import { DynamicIsland, DynamicIslandView } from "@/components/motion/dynamic-island";
import { GlowButton } from "@/components/motion/glow-button";
import { MetricCard } from "@/components/motion/metric-card";
import { MorphingSearch } from "@/components/motion/morphing-search";
import { AgentActivity, type AgentActivityItem } from "@/components/agents/agent-activity";
import { ToolApproval, ToolApprovalCode, type ToolApprovalStatus } from "@/components/agents/tool-approval";
import { PromoOverlay } from "../components/PromoOverlay";
import { SPRING_PRESS, SPRING_GENTLE } from "@/lib/ease";

export function AfterDashboard() {
  const [islandView, setIslandView] = useState<string | null>(null);
  const [approvalStatus, setApprovalStatus] = useState<ToolApprovalStatus>("pending");

  const handleApprove = () => {
    setApprovalStatus("approving");
    setTimeout(() => setApprovalStatus("approved"), 500);
    setTimeout(() => setApprovalStatus("running"), 1000);
    setTimeout(() => setApprovalStatus("complete"), 2000);
  };

  const activityItems: AgentActivityItem[] = [
    {
      id: "step-1",
      type: "step",
      label: "Reading deployment manifest",
      status: "complete",
    },
    {
      id: "search-1",
      type: "search",
      query: "kubectl deployment configuration prod-east",
      results: [
        { id: "r1", title: "deploy/prod.yaml", domain: "k8s-cluster" },
        { id: "r2", title: "secrets/env.prod", domain: "vault-east" },
      ],
    },
    {
      id: "tool-1",
      type: "tool",
      action: "edit",
      target: "deploy/prod.yaml",
      additions: 18,
      deletions: 4,
    },
    {
      id: "step-2",
      type: "step",
      label: "Synthesizing canary rollout plan",
      status: "active",
    },
  ];

  return (
    <div
      className="relative flex h-screen w-screen overflow-hidden bg-[#07090e] text-slate-100 font-sans select-none"
      data-testid="after-dashboard"
    >
      <PromoOverlay
        align="bottom"
        badge="After Skill"
        title="Same agent. Same prompt. Better UI."
        subtitle="Dynamic Island · Spring physics · Agent surfaces · Ambient lighting"
      />

      {/* Ambient background depth lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Sleek Modern Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0d111a]/80 backdrop-blur-xl flex flex-col justify-between p-4 flex-shrink-0 z-20">
        <div>
          {/* Logo with Specular Ring */}
          <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10 pb-4 mb-4">
            <div className="size-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Sparkles className="size-4" />
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                <span>PulseAI</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 font-mono border border-blue-500/30">
                  SKILL
                </span>
              </div>
              <div className="text-[11px] text-zinc-400">Autonomous Operations</div>
            </div>
          </div>

          {/* Navigation with Spring Glide */}
          <nav className="space-y-1.5">
            {[
              { icon: Layers, label: "Dashboard", active: true },
              { icon: Bot, label: "Agents (14)", active: false },
              { icon: Activity, label: "Live Traces", active: false },
              { icon: Database, label: "Evaluations", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 3 }}
                transition={SPRING_PRESS}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                  item.active
                    ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/10 border border-blue-500/30 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className={`size-4 ${item.active ? "text-blue-400" : "text-zinc-400"}`} />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* User Card */}
        <div className="border-t border-white/10 pt-3 flex items-center gap-3 px-2">
          <div className="size-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shadow-sm ring-1 ring-white/20">
            RJ
          </div>
          <div className="text-xs">
            <div className="font-semibold text-white">Raja Jaiswal</div>
            <div className="text-[10px] text-zinc-400">Enterprise Pilot</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Top Navbar with Dynamic Island */}
        <header className="h-16 border-b border-white/10 bg-[#0d111a]/60 backdrop-blur-xl px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-zinc-400">Workspace / Production-East</span>
            <div className="w-64" data-testid="after-morphing-search">
              <MorphingSearch
                items={[
                  { id: "1", title: "Agent-04 (Rollout)", description: "Canary active" },
                  { id: "2", title: "terminal.run", description: "Tool execution" },
                  { id: "3", title: "deploy/prod.yaml", description: "Config file" },
                ]}
                placeholder="Search fleet (⌘K)..."
              />
            </div>
          </div>

          {/* Centered Dynamic Island */}
          <div
            data-testid="after-dynamic-island"
            className="cursor-pointer"
            onClick={() => setIslandView(islandView ? null : "agent-status")}
          >
            <DynamicIsland
              view={islandView}
              compact={
                <div className="flex items-center gap-2 px-1 text-xs">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="size-2 rounded-full bg-emerald-400 -ml-4" />
                  <span className="font-semibold text-white">8 Agents Running</span>
                  <span className="text-zinc-500">|</span>
                  <span className="font-mono text-zinc-400">1,420 req/s</span>
                </div>
              }
            >
              <DynamicIslandView id="agent-status" className="gap-4 px-2 py-1">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                    Autonomous Fleet Status
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Agent-04 executing Canary Rollout v2.4
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-500/30">
                  <span>99.8% nominal</span>
                </div>
              </DynamicIslandView>
            </DynamicIsland>
          </div>

          {/* Glow Button CTA */}
          <div data-testid="after-glow-button">
            <GlowButton
              glowColor="from-blue-500 via-indigo-500 to-cyan-400"
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-xl"
            >
              + Deploy Agent
            </GlowButton>
          </div>
        </header>

        {/* Content Container */}
        <div className="flex-1 p-8 space-y-6 overflow-y-auto no-scrollbar">
          {/* Spring-Animated Metric Cards */}
          <div className="grid grid-cols-4 gap-5" data-testid="after-metric-cards">
            <MetricCard
              title="Active Agents"
              value="14 / 16"
              change="+12.5%"
              isPositive={true}
              timeframe="vs last week"
              stylePreset="origin"
              sparklineData={[10, 14, 12, 16, 15, 20, 22, 25, 28]}
            />
            <MetricCard
              title="Token Throughput"
              value="2.84M /s"
              change="+18.2%"
              isPositive={true}
              timeframe="vs baseline"
              stylePreset="origin"
              sparklineData={[18, 22, 20, 28, 26, 34, 38, 42, 48]}
            />
            <MetricCard
              title="Median Tool Latency"
              value="142 ms"
              change="-24 ms"
              isPositive={true}
              timeframe="optimized"
              stylePreset="origin"
              sparklineData={[180, 172, 165, 158, 150, 146, 142]}
            />
            <MetricCard
              title="Fleet Success Rate"
              value="99.4%"
              change="+0.8%"
              isPositive={true}
              timeframe="calibrated"
              stylePreset="origin"
              sparklineData={[96, 97, 98, 98.5, 99.1, 99.4]}
            />
          </div>

          {/* Main 2-column Grid: Agent Activity & Tool Approval */}
          <div className="grid grid-cols-12 gap-6 h-[480px]">
            {/* Left: Real AgentActivity Component */}
            <div
              data-testid="after-agent-activity"
              className="col-span-7 rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-5 flex flex-col shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-400 animate-ping" />
                  <span className="size-2 rounded-full bg-blue-400 -ml-4" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Autonomous Reasoning Stream
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  agent-04 · active
                </span>
              </div>
              <div className="mt-3 flex-1 overflow-y-auto no-scrollbar">
                <AgentActivity
                  items={activityItems}
                  status="active"
                  title="Agent-04 Rollout Workflow"
                  defaultOpen={true}
                />
              </div>
            </div>

            {/* Right: Real ToolApproval Component */}
            <div
              data-testid="after-tool-approval"
              className="col-span-5 rounded-2xl border border-white/10 bg-[#0d111a]/80 backdrop-blur-xl p-5 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Tool Approval
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
                    Human-in-the-Loop
                  </span>
                </div>

                <div className="mt-4">
                  <ToolApproval
                    tool="terminal.run"
                    title={
                      approvalStatus === "complete"
                        ? "Execution Complete"
                        : approvalStatus === "running"
                        ? "Executing in sandbox..."
                        : "Allow Production Deployment?"
                    }
                    description="Agent requests authorization to run canary deployment script on cluster."
                    status={approvalStatus}
                    open={true}
                    onApprove={handleApprove}
                    parameters={[
                      {
                        id: "cmd",
                        label: "Command",
                        value: (
                          <ToolApprovalCode
                            code="kubectl apply -f deploy/prod.yaml --record"
                            language="bash"
                          />
                        ),
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Bottom Micro Metric */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-zinc-400 flex items-center justify-between">
                <span>Fleet Gas & Token Allocation</span>
                <span className="font-mono text-emerald-400 font-bold">$18.40 (99.8% eff)</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
