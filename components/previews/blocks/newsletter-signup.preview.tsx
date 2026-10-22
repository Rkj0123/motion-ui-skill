"use client";

import React from "react";
import { NewsletterSignup as NewsletterSignup } from "@/components/blocks/newsletter-signup";

export function NewsletterSignupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <NewsletterSignup />
      </div>
    </div>
  );
}
