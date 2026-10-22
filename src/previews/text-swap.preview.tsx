"use client";

import { TextSwap } from "@/components/motion/text-swap";
import { useState, useEffect } from "react";

const WORDS = ["Developers", "Designers", "Founders", "Teams"];

export function TextSwapExample() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 text-2xl font-bold">
      Built for <TextSwap text={WORDS[index]} className="text-primary ml-1.5" />
    </div>
  );
}