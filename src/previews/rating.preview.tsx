"use client";

import { Rating } from "@/components/motion/rating";
import { useState } from "react";

export function RatingExample() {
  const [score, setScore] = useState(4.5);

  return (
    <div className="flex flex-col gap-4 p-6 bg-card rounded-2xl border border-border max-w-sm">
      <h3 className="text-sm font-semibold">User Experience Rating</h3>
      <Rating
        value={score}
        allowHalf={true}
        size="md"
        onChange={(val) => setScore(val)}
      />
      <p className="text-xs text-muted-foreground">Current rating: {score} stars</p>
    </div>
  );
}