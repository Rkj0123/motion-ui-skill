"use client";

import React from "react";
import { CookieConsent as CookieConsent } from "@/components/motion/cookie-consent";

export function CookieConsentPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CookieConsent />
      </div>
    </div>
  );
}
