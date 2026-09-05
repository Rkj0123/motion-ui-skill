---
title: "Stepper"
description: "Multi-step wizard progress indicator with animated connecting lines, completed checkmarks, and active status indicators."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/stepper.md"
markdown: "references/motion/stepper.md"
license: "MIT"
---

# Stepper

> Multi-step wizard progress indicator with animated connecting lines, completed checkmarks, and active status indicators. Inspired by KeenThemes ReUI and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stepper --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
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
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `steps` | `StepItem[]` | required | Array of step objects with id, title, and optional description. |
| `currentStep` | `number` | required | 0-indexed current active step. |
| `onStepClick` | `(stepIndex: number) => void` | `undefined` | Callback fired when an accessible previous/current step is clicked. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Directional layout flow of the stepper. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
