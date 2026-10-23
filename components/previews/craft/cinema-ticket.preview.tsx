"use client";

import { CinemaTicketCard } from "@/components/text/cinema-ticket-card";

export function CinemaTicketCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <CinemaTicketCard className="min-w-0 max-w-full" />
    </div>
  );
}