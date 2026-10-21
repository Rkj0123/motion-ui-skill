"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_SWAP } from "@/lib/ease";

export interface TextMorphProps {
  text: string;
  className?: string;
}

function findSharedAffixes(oldText: string, newText: string) {
  let start = 0;
  while (
    start < oldText.length &&
    start < newText.length &&
    oldText[start] === newText[start]
  ) {
    start++;
  }

  let end = 0;
  while (
    end < oldText.length - start &&
    end < newText.length - start &&
    oldText[oldText.length - 1 - end] === newText[newText.length - 1 - end]
  ) {
    end++;
  }

  const prefix = oldText.slice(0, start);
  const suffix = end > 0 ? oldText.slice(oldText.length - end) : "";
  const oldMiddle = oldText.slice(start, oldText.length - end);
  const newMiddle = newText.slice(start, newText.length - end);

  return { prefix, suffix, oldMiddle, newMiddle };
}

export function TextMorph({ text, className }: TextMorphProps) {
  const [prevText, setPrevText] = useState(text);
  const [currentText, setCurrentText] = useState(text);

  if (text !== currentText) {
    setPrevText(currentText);
    setCurrentText(text);
  }

  const { prefix, suffix, oldMiddle, newMiddle } = findSharedAffixes(
    prevText,
    currentText
  );

  return (
    <span
      className={cn(
        "inline-flex items-baseline font-medium tabular-nums select-none",
        className
      )}
    >
      <span>{prefix}</span>
      <span className="relative inline-grid items-baseline">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={newMiddle}
            initial={{ opacity: 0, filter: "blur(4px)", y: 2 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -2 }}
            transition={SPRING_SWAP}
            className="inline-block whitespace-pre"
          >
            {newMiddle}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>{suffix}</span>
    </span>
  );
}
