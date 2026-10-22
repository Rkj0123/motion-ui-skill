"use client";

import { HoverCard } from "@/components/motion/hover-card";
import { CalendarDays, Sparkles } from "lucide-react";

export function HoverCardExample() {
  return (
    <div className="p-12">
      <HoverCard
        side="bottom"
        align="center"
        openDelay={150}
        closeDelay={200}
        content={
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                NX
              </div>
              <div>
                <h4 className="text-xs font-semibold">@nextjs</h4>
                <p className="text-[11px] text-muted-foreground">The React Framework for the Web</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Production-grade React applications with server components, streaming, and edge caching.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground pt-1 border-t border-border">
              <CalendarDays className="size-3" />
              <span>Joined December 2021</span>
            </div>
          </div>
        }
      >
        <span className="text-sm font-semibold underline decoration-dotted underline-offset-4 cursor-pointer hover:text-primary transition-colors">
          @nextjs
        </span>
      </HoverCard>
    </div>
  );
}