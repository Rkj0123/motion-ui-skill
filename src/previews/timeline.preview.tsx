"use client";

import { Timeline, type TimelineItem } from "@/components/motion/timeline";
import { GitBranch, Rocket, ShieldCheck } from "lucide-react";

const ITEMS: TimelineItem[] = [
  {
    id: "step-1",
    title: "Code Review Approved",
    description: "2 senior engineers signed off on PR #142 across security and performance checks.",
    timestamp: "10:45 AM",
    status: "completed",
    icon: GitBranch,
    tags: ["GitHub", "Verified"],
  },
  {
    id: "step-2",
    title: "Security Sandbox Verification",
    description: "Running automated SAST scanning and container isolation policy tests.",
    timestamp: "10:48 AM",
    status: "current",
    icon: ShieldCheck,
    tags: ["In Progress"],
  },
  {
    id: "step-3",
    title: "Production Deployment",
    description: "Canary rollout to 10% edge traffic nodes across us-east and eu-west.",
    timestamp: "Pending",
    status: "upcoming",
    icon: Rocket,
  },
];

export function TimelineExample() {
  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border">
      <h3 className="text-base font-semibold mb-6">Deployment Pipeline</h3>
      <Timeline items={ITEMS} />
    </div>
  );
}