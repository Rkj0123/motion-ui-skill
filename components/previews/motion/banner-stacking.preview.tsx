"use client";

import { useState } from "react";
import { BannerStacking, type BannerItem } from "@/components/motion/banner-stacking";

export function BannerStackingDemo() {
  const [banners, setBanners] = useState<BannerItem[]>([
    { id: "1", title: "Deployment successful", description: "Production environment updated to v2.4.0", timestamp: "Just now", variant: "success" },
    { id: "2", title: "High memory utilization", description: "Node pool reaching 85% threshold", timestamp: "2m ago", variant: "warning" },
    { id: "3", title: "New collaborator added", description: "Sarah joined the workspace", timestamp: "5m ago" },
  ]);

  return (
    <div className="flex min-h-40 w-full min-w-0 items-center justify-center p-2 sm:p-8">
      <BannerStacking
        banners={banners}
        onDismiss={(id) => setBanners((prev) => prev.filter((b) => b.id !== id))}
      />
    </div>
  );
}