"use client";

import { ErrorShake } from "@/components/motion/error-shake";
import { useState } from "react";

export function ErrorShakeExample() {
  const [hasError, setHasError] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setHasError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs p-8 space-y-4">
      <ErrorShake
        error={hasError}
        intensity="medium"
        onShakeEnd={() => setHasError(false)}
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (min 8 chars)"
          className={`w-full px-3.5 py-2 rounded-xl border ${
            hasError ? "border-rose-500 bg-rose-500/10" : "border-border bg-card"
          }`}
        />
      </ErrorShake>
      <button
        type="submit"
        className="w-full py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
      >
        Sign In
      </button>
    </form>
  );
}