"use client";

import { TestimonialCard } from "@/components/users/testimonial-card";

export function TestimonialCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <TestimonialCard className="min-w-0 max-w-full" />
    </div>
  );
}