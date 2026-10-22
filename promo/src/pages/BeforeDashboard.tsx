import React, { useState, useEffect } from "react";
import {
  Activity,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Database,
  Layers,
  Search,
  Settings,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { PromoOverlay } from "../components/PromoOverlay";

export function BeforeDashboard() {
  const [overlayText, setOverlayText] = useState({
    title: "AI can write the code.",
    subtitle: "Standard prompt · Default Next.js + Tailwind",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayText({
        title: "But the UI still looks... AI-generated.",
        subtitle: "Generic layout · Static components · No motion physics",
      });
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex h-screen w-screen overflow-hidden bg-[#0a0d14] text-slate-200 font-sans select-none"
      data-testid="before-dashboard"
    >
      <PromoOverlay
        align="bottom"
        badge="Before Skill"
        title={overlayText.title}
        subtitle={overlayText.subtitle}
      />

      {/* Generic Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-[#0f141f] flex flex-col justify-between p-4 flex-shrink-0">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-3 py-2 border-b border-slate-800 pb-4 mb-4">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              PA
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-white">PulseAI Fleet</div>
              <div className="text-[11px] text-slate-500">Autonomous Operations</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 rounded bg-slate-800/80 text-white text-xs font-semibold cursor-pointer">
              <Layers className="size-4 text-blue-400" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-xs font-medium cursor-pointer">
              <Bot className="size-4" />
              <span>Agents (14)</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-xs font-medium cursor-pointer">
              <Activity className="size-4" />
              <span>Live Traces</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-xs font-medium cursor-pointer">
              <Database className="size-4" />
              <span>Evaluations</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-xs font-medium cursor-pointer">
              <Settings className="size-4" />
              <span>Settings</span>
            </div>
          </nav>
        </div>

        {/* User Card */}
        <div className="border-t border-slate-800 pt-3 flex items-center gap-3 px-2">
          <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
            RJ
          </div>
          <div className="text-xs">
            <div className="font-medium text-slate-300">raja@pulse.ai</div>
            <div className="text-[10px] text-slate-500">Enterprise Plan</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-800 bg-[#0c101a] px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-slate-400">Workspace / Production-East</span>
            <div className="relative">
              <Search className="size-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                data-testid="before-search"
                placeholder="Search agents, tasks (Ctrl+K)..."
                className="h-8 w-64 rounded border border-slate-700 bg-slate-900 pl-8 pr-3 text-xs text-slate-300 placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-[11px] font-medium">
              <span className="size-1.5 rounded-full bg-emerald-500"></span>
              <span>All Systems Operational</span>
            </div>
            <button
              data-testid="before-cta"
              className="h-8 px-4 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              + Deploy Agent
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 p-8 space-y-6 overflow-y-auto no-scrollbar">
          {/* Metrics Row */}
          <div className="grid grid-cols-4 gap-5">
            <div
              data-testid="before-metric-1"
              className="rounded-lg border border-slate-800 bg-[#101624] p-4 flex flex-col justify-between"
            >
              <div className="text-xs text-slate-400 font-medium">Active Agents</div>
              <div className="text-2xl font-bold text-white mt-2">14 / 16</div>
              <div className="text-[11px] text-emerald-400 mt-1">+12.5% vs last week</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#101624] p-4 flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-medium">Token Throughput</div>
              <div className="text-2xl font-bold text-white mt-2">2.84M /s</div>
              <div className="text-[11px] text-emerald-400 mt-1">+18.2% vs baseline</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#101624] p-4 flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-medium">Median Tool Latency</div>
              <div className="text-2xl font-bold text-white mt-2">142 ms</div>
              <div className="text-[11px] text-emerald-400 mt-1">-24ms improvement</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#101624] p-4 flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-medium">Fleet Success Rate</div>
              <div className="text-2xl font-bold text-white mt-2">99.4%</div>
              <div className="text-[11px] text-emerald-400 mt-1">+0.8% accuracy</div>
            </div>
          </div>

          {/* Main 2-column content */}
          <div className="grid grid-cols-12 gap-6 h-[480px]">
            {/* Left: Recent Activity */}
            <div className="col-span-7 rounded-lg border border-slate-800 bg-[#101624] p-5 flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Recent Agent Activity
                </span>
                <span className="text-[11px] text-slate-500">Live stream</span>
              </div>
              <div className="divide-y divide-slate-800/60 mt-2 flex-1 overflow-y-auto no-scrollbar">
                {[
                  {
                    title: "Agent-04 completed code review",
                    meta: "PR #128 · TypeScript refactor",
                    time: "1m ago",
                    status: "Done",
                  },
                  {
                    title: "Agent-09 executed migration script",
                    meta: "terminal.run · bun run migrate",
                    time: "3m ago",
                    status: "Done",
                  },
                  {
                    title: "Agent-02 fetched schema definitions",
                    meta: "postgres.query · 14ms",
                    time: "5m ago",
                    status: "Done",
                  },
                  {
                    title: "Agent-11 running unit test suite",
                    meta: "playwright test · 42 passed",
                    time: "8m ago",
                    status: "Running",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    data-testid={`before-task-row-${i}`}
                    className="py-3 flex items-center justify-between text-xs hover:bg-slate-800/30 px-2 rounded cursor-pointer"
                  >
                    <div>
                      <div className="font-medium text-slate-200">{item.title}</div>
                      <div className="text-[11px] text-slate-500">{item.meta}</div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          item.status === "Done"
                            ? "bg-emerald-950/60 text-emerald-400"
                            : "bg-blue-950/60 text-blue-400"
                        }`}
                      >
                        {item.status}
                      </span>
                      <div className="text-[10px] text-slate-500 mt-1">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pending Approvals & Tasks */}
            <div className="col-span-5 rounded-lg border border-slate-800 bg-[#101624] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Human-in-the-Loop Approval
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/60 text-amber-400 font-semibold">
                    1 Pending
                  </span>
                </div>

                <div className="mt-4 rounded border border-slate-800 bg-[#0c101a] p-4">
                  <div className="text-xs font-semibold text-slate-200">terminal.run</div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Agent wants to execute deployment command on production cluster.
                  </div>
                  <div className="mt-3 rounded bg-black/70 p-2 font-mono text-[11px] text-slate-300">
                    $ kubectl apply -f deploy/prod.yaml
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold">
                      Approve
                    </button>
                    <button className="flex-1 py-1.5 rounded border border-slate-700 bg-slate-800 text-slate-300 text-xs font-semibold">
                      Reject
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded border border-slate-800 bg-[#0c101a] p-3 text-xs text-slate-400 flex items-center justify-between">
                <span>Total Fleet Usage</span>
                <span className="font-mono text-white font-bold">$18.40</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
