import type { Transition } from "motion/react";

/**
 * Motion Design Tokens
 * Philosophy: Soft + physical + immediate + controlled
 *
 * Tuning philosophy:
 *  - Critical-damping ratio around 0.85-1.0 for buttery, never-bouncy motion.
 *  - Stiffness chosen so the spring reaches ~95% of the target in 350-450ms.
 *  - Mass kept low (0.4-0.8) so motion feels light and immediate.
 *  - Stagger and duration for choreographed reveals.
 */

export const motionTransitions = {
  // Gentle fluid transitions (for tabs, smooth accordion, dialog fades)
  // ~400ms to settle, near-critical damping — no overshoot, no oscillation.
  springGentle: {
    type: "spring",
    stiffness: 170,
    damping: 26,
    mass: 0.9,
  } as Transition,

  // Smooth standard motion
  // Slightly underdamped (~0.85) for the slightest organic feel on cards.
  springSmooth: {
    type: "spring",
    stiffness: 200,
    damping: 28,
    mass: 0.85,
  } as Transition,

  // Snappy responsive feedback (for buttons, hover indicators, dock icons)
  // High stiffness, low mass — settles in ~200ms with a subtle settle.
  springSnappy: {
    type: "spring",
    stiffness: 380,
    damping: 30,
    mass: 0.5,
  } as Transition,

  // Bouncy micro-pops (for celebration badges, stars, success checks)
  // Underdamped (~0.65) — gives a crisp pop before settling.
  springBouncy: {
    type: "spring",
    stiffness: 420,
    damping: 18,
    mass: 0.6,
  } as Transition,

  // Stiff immediate tracking (for cursor followers, drag-handles, magnetic buttons)
  // Very high stiffness, low damping — tracks pointer without lag.
  springImmediate: {
    type: "spring",
    stiffness: 550,
    damping: 35,
    mass: 0.4,
  } as Transition,

  // Timed layout transitions (for list reordering, width/height shifts)
  timingStandard: {
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1], // Apple-style ease-out curve
  } as Transition,

  timingFast: {
    duration: 0.18,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  timingSlow: {
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,
};
