"use client";

import { MetricCard } from "@/components/motion/metric-card";

export function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
      <MetricCard
        title="Total Revenue"
        value="$124,592"
        change="+12.4%"
        isPositive={true}
        stylePreset="origin"
      />
      <MetricCard
        title="Active Subscriptions"
        value="1,429"
        change="+8.1%"
        isPositive={true}
        stylePreset="enterprise"
      />
      <MetricCard
        title="Churn Rate"
        value="2.14%"
        change="-0.4%"
        isPositive={true}
        stylePreset="glow"
      />
    </div>
  );
}