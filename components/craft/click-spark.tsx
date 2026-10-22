"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { useReducedMotion } from "motion/react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
}

export const ClickSpark = ({
  sparkColor,
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1,
}: ClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const sparksRef = useRef<Spark[]>([]);
  const startTimeRef = useRef<number | null>(null);
  const { resolvedTheme } = useTheme();

  const effectiveColor = sparkColor || (resolvedTheme === "dark" ? "#fff" : "#000");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeTimeout: NodeJS.Timeout;

    const resizeCanvas = () => {
      if (typeof window !== "undefined") {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
      }
    };

    const handleResize = () => {
      if (typeof window !== "undefined") {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 100);
      }
    };

    if (typeof window !== "undefined") {
      resizeCanvas();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, []);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case "ease-out":
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (reduceMotion) {
      sparksRef.current = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animationId: number;

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = effectiveColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, effectiveColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale, reduceMotion]);

  const createSparks = useCallback((x: number, y: number) => {
    if (reduceMotion) return;
    const now = performance.now();
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
  }, [sparkCount, reduceMotion]);

  const handleClick = useCallback((e: MouseEvent) => {
    createSparks(e.clientX, e.clientY);
  }, [createSparks]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    // Handle all touch points for multi-touch support
    Array.from(e.changedTouches).forEach((touch) => {
      createSparks(touch.clientX, touch.clientY);
    });
  }, [createSparks]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [handleClick, handleTouchStart]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};
