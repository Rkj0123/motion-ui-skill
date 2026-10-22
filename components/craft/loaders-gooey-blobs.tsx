"use client";

import { useId } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface LoaderGooeyBlobsProps extends Omit<HTMLMotionProps<"div">, "children"> {
  size?: number;
  color?: string;
  duration?: number;
}

export function LoaderGooeyBlobs({
  className,
  size = 20,
  color = "currentColor",
  duration = 1.5,
  style,
  ...props
}: LoaderGooeyBlobsProps) {
  const filterId = `gooey-${useId().replace(/:/g, "")}`;
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className={cn("flex items-center justify-center", className)}
      style={style}
      {...props}
    >
      <svg aria-hidden="true" focusable="false" className="absolute h-0 w-0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      <span aria-hidden="true" className="flex gap-1" style={{ filter: `url(#${filterId})` }}>
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="rounded-full"
            style={{ width: size, height: size, backgroundColor: color }}
            animate={reducedMotion ? undefined : { x: [0, 15, 0, -15, 0], scale: [1, 1.2, 1, 1.2, 1] }}
            transition={{ duration, ease: "easeInOut", repeat: Infinity, delay: index * 0.2 }}
          />
        ))}
      </span>
    </motion.div>
  );
}

export default LoaderGooeyBlobs;
