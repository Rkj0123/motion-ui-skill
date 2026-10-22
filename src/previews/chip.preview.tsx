"use client";

import { Chip } from "@/components/motion/chip";
import { AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export function ChipExample() {
  const [tags, setTags] = useState([
    { id: "ai", label: "Autonomous Agent", badge: 4 },
    { id: "react", label: "React 19", badge: 12 },
    { id: "motion", label: "Motion Physics", badge: 8 },
  ]);
  const [selectedTag, setSelectedTag] = useState("ai");

  return (
    <div className="flex flex-wrap gap-2 p-6 bg-card rounded-2xl border border-border">
      <AnimatePresence>
        {tags.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.label}
            badge={tag.badge}
            selected={selectedTag === tag.id}
            onSelect={() => setSelectedTag(tag.id)}
            onDismiss={() => setTags(tags.filter((t) => t.id !== tag.id))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}