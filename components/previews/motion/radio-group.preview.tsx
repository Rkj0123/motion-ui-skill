"use client";

import React from "react";
import { RadioGroup as RadioGroup } from "@/components/motion/radio-group";

export function RadioGroupPreview() {
  const [plan, setPlan] = React.useState("starter");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RadioGroup
          label="Plan"
          options={[{ value: "starter", label: "Starter" }, { value: "team", label: "Team" }]}
          value={plan}
          onValueChange={setPlan}
        />
      </div>
    </div>
  );
}
