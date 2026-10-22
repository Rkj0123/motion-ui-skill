"use client";

import { IconStack, type IconStackItem } from "@/components/motion/icon-stack";

const ITEMS: IconStackItem[] = [
  { id: "1", label: "Alex Rivera", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
  { id: "2", label: "Elena Rostova", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" },
  { id: "3", label: "Marcus Chen", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: "4", label: "Sarah Kim", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: "5", label: "David Park", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { id: "6", label: "Rachel Zane" },
];

export function IconStackExample() {
  return (
    <div className="p-8">
      <IconStack items={ITEMS} maxVisible={4} size="md" overlap="normal" />
    </div>
  );
}