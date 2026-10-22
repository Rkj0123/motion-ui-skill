"use client";

import { Breadcrumb } from "@/components/motion/breadcrumb";

const PATH = [
  { id: "home", label: "Dashboard", href: "/" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "ai", label: "Agent Pipelines", href: "/projects/agent-pipelines" },
  { id: "runs", label: "Run #1842", href: "/projects/agent-pipelines/runs" },
  { id: "diff", label: "Diff Inspector" },
];

export function BreadcrumbExample() {
  return (
    <div className="p-6 bg-card rounded-2xl border border-border">
      <Breadcrumb items={PATH} maxItems={4} />
    </div>
  );
}