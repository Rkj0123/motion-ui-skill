import React, { useState, useEffect } from "react";
import { BeforeDashboard } from "./pages/BeforeDashboard";
import { InstallShowcase } from "./pages/InstallShowcase";
import { AfterDashboard } from "./pages/AfterDashboard";
import { ComponentShowcase } from "./pages/ComponentShowcase";
import { AgentUiShowcase } from "./pages/AgentUiShowcase";
import { StylePresetShowcase } from "./pages/StylePresetShowcase";
import { FinaleCard } from "./pages/FinaleCard";
import { Sparkles, ArrowRight, Play, ExternalLink } from "lucide-react";

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  if (currentPath === "/promo/before") return <BeforeDashboard />;
  if (currentPath === "/promo/install") return <InstallShowcase />;
  if (currentPath === "/promo/after") return <AfterDashboard />;
  if (currentPath === "/promo/components") return <ComponentShowcase />;
  if (currentPath === "/promo/agent-ui") return <AgentUiShowcase />;
  if (currentPath === "/promo/styles") return <StylePresetShowcase />;
  if (currentPath === "/promo/finale") return <FinaleCard />;

  // Default Overview Index
  const routes = [
    { path: "/promo/before", label: "01. Before (Generic Dashboard)", desc: "Static baseline UI without skill" },
    { path: "/promo/install", label: "02. Install (Codex & Antigravity)", desc: "Skill discovery & terminal execution" },
    { path: "/promo/after", label: "03. After (Motion UI Dashboard)", desc: "Dynamic Island, spring cards & tool approvals" },
    { path: "/promo/components", label: "04. Component Showcase", desc: "Top 5 motion primitives & blocks" },
    { path: "/promo/agent-ui", label: "05. AI Agent UI Surfaces", desc: "Reasoning streams, tool gates & citations" },
    { path: "/promo/styles", label: "06. Style Presets", desc: "Minimal, Origin, Enterprise, Glow, iOS, Brutalist" },
    { path: "/promo/finale", label: "07. Finale Launch Card", desc: "Motion UI Skill branding & GitHub link" },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#07090e] text-white p-12 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-2xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold">
            <Sparkles className="size-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black">Motion UI Skill — Promo Studio</h1>
            <p className="text-xs text-zinc-400">Playwright Recording Suite & Demo Environment</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d111a] p-6 space-y-3 shadow-2xl">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
            Recording Routes (1920 × 1080 Viewport)
          </div>
          {routes.map((r) => (
            <div
              key={r.path}
              onClick={() => navigate(r.path)}
              className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-blue-500/40 cursor-pointer transition-all group"
            >
              <div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {r.label}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">{r.desc}</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-blue-400">
                <span>Launch</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
