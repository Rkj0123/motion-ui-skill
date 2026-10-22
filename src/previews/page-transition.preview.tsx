"use client";

import { PageTransition } from "@/components/motion/page-transition";
import { useState } from "react";

export function PageTransitionExample() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="p-8 max-w-xl">
      <div className="flex gap-2 mb-6 border-b border-border pb-2">
        {["overview", "analytics", "settings"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
              tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <PageTransition transitionKey={tab} mode="slide">
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h2 className="text-lg font-bold capitalize">{tab} Section</h2>
          <p className="text-xs text-muted-foreground mt-2">
            Dynamic view content rendered with smooth spatial spring transition.
          </p>
        </div>
      </PageTransition>
    </div>
  );
}