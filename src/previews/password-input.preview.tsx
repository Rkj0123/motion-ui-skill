"use client";

import { PasswordInput } from "@/components/motion/password-input";
import { useState } from "react";

export function PasswordInputExample() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="max-w-sm p-6 bg-card rounded-2xl border border-border flex flex-col gap-4">
      <h3 className="text-sm font-semibold">Create Secure Password</h3>
      <PasswordInput
        value={password}
        onChange={(val, valid) => {
          setPassword(val);
          setIsValid(valid);
        }}
        showStrengthMeter={true}
        showCriteria={true}
        placeholder="Enter password..."
      />

      <button
        type="button"
        disabled={!isValid}
        className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}