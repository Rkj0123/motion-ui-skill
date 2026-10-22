"use client";

import { Stepper, type StepItem } from "@/components/motion/stepper";
import { useState } from "react";

const STEPS: StepItem[] = [
  { id: "account", title: "Account Details", description: "Email & credentials" },
  { id: "profile", title: "Company Profile", description: "Team & domain" },
  { id: "billing", title: "Subscription", description: "Select plan" },
  { id: "confirm", title: "Complete", description: "Ready to launch" },
];

export function StepperExample() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-xl p-8 bg-card rounded-2xl border border-border space-y-6">
      <Stepper
        steps={STEPS}
        currentStep={step}
        onStepClick={(i) => setStep(i)}
      />
      <div className="flex justify-end gap-2 pt-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          className="px-4 py-2 text-xs font-semibold rounded-xl border border-border"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))}
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}