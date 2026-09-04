// Shared motion tokens. Easing curves mirror the CSS custom properties in
// globals.css; springs are the canonical physics used across components.
// Strong custom variants — defaults like `ease-in`/`ease-out` feel weak.

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

/** CSS string form of EASE_OUT for inline style transitions. */
export const EASE_OUT_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";

/** Press feedback on buttons and other tappable surfaces. */
export const SPRING_PRESS = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.6,
} as const;

/** Content swaps — label/icon slots trading places inside a control. */
export const SPRING_SWAP = {
  type: "spring",
  stiffness: 460,
  damping: 30,
  mass: 0.55,
} as const;

/** Overlay panel entrances — modals and sheets summoned by pointer. */
export const SPRING_PANEL = {
  type: "spring",
  stiffness: 420,
  damping: 40,
  mass: 0.5,
} as const;

/** Shared-layout glides — pills, indicators and panels morphing between positions. */
export const SPRING_LAYOUT = {
  type: "spring",
  stiffness: 360,
  damping: 32,
  mass: 0.6,
} as const;

/** Cursor-follow physics for decorative mouse tracking (magnetic, tilt, dock). */
export const SPRING_MOUSE = {
  stiffness: 200,
  damping: 15,
  mass: 0.3,
} as const;

/** Dragged handles and fills (sliders) — critically damped `useSpring` config,
 * so the value follows the pointer butterily and never rebounds off an end. */
export const SPRING_GLIDE = {
  stiffness: 700,
  damping: 50,
  mass: 0.5,
} as const;

/** Playful bounce for badges, celebration checks, stars, and micro-pops. */
export const SPRING_BOUNCE = {
  type: "spring",
  stiffness: 300,
  damping: 18,
  mass: 0.8,
} as const;

/** Gentle, natural spring for spacious card expansions and drawer reveals. */
export const SPRING_GENTLE = {
  type: "spring",
  stiffness: 180,
  damping: 24,
  mass: 1.0,
} as const;

/** Snappy, high-velocity spring for fast toggles, segmented pills, and tabs. */
export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 600,
  damping: 35,
  mass: 0.5,
} as const;

/** Soft floating physics for tooltips, hover cards, and ambient elevation. */
export const SPRING_FLOAT = {
  type: "spring",
  stiffness: 120,
  damping: 14,
  mass: 0.8,
} as const;

/** Emphasized cubic bezier for expressive spatial navigation. */
export const EASE_EMPHASIZED = [0.2, 0, 0, 1] as const;
export const EASE_EMPHASIZED_CSS = "cubic-bezier(0.2, 0, 0, 1)";

/** Deceleration curve for incoming elements that enter at high velocity and brake. */
export const EASE_DECELERATE = [0.05, 0.7, 0.1, 1] as const;
export const EASE_DECELERATE_CSS = "cubic-bezier(0.05, 0.7, 0.1, 1)";

/** Acceleration curve for dismissed elements that exit without lingering. */
export const EASE_ACCELERATE = [0.3, 0, 0.8, 0.15] as const;
export const EASE_ACCELERATE_CSS = "cubic-bezier(0.3, 0, 0.8, 0.15)";

