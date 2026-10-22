"use client";

import React from "react";
import { OnboardingChecklist as OnboardingChecklist } from "@/components/motion/onboarding-checklist";

export function OnboardingChecklistPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <OnboardingChecklist />
      </div>
    </div>
  );
}
