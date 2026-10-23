"use client";

import React from "react";
import { SmartComparison as SmartComparison } from "@/components/craft/smart-comparison";

export function SmartComparisonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SmartComparison
          plans={[{ id: "starter", name: "Starter", tagline: "For personal projects", price: "$0" }, { id: "team", name: "Team", tagline: "For growing teams", price: "$19" }]}
          categories={[{ id: "features", title: "Features", features: [{ id: "components", name: "Components", values: { starter: "50", team: "Unlimited" } }] }]}
        />
      </div>
    </div>
  );
}
