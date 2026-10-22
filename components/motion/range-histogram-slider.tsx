"use client";

import { useId, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./range-histogram-slider.module.css";

export interface RangeHistogramSliderProps {
  /** Visible label. The thumbs are named from it unless `thumbLabels` says otherwise. */
  label: string;
  /** The raw values the histogram counts, such as every listing's price. */
  data: number[];
  value?: [number, number];
  defaultValue?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  /** Runs once a drag is released or a key changes the value. */
  onValueCommit?: (value: [number, number]) => void;
  /** Defaults to the smallest and largest data values. */
  min?: number;
  max?: number;
  step?: number;
  /** How many bars the histogram draws. */
  bins?: number;
  /** A released thumb that lands near the edge of a bar settles on that edge, so a range never cuts a bar in half. */
  snapToBins?: boolean;
  /** The closest the two thumbs may sit, in steps. */
  minStepsBetweenThumbs?: number;
  /** Formats the readout and the spoken values. */
  format?: (value: number) => string;
  thumbLabels?: [string, string];
  /** Submits the range with a form, one hidden input per thumb. */
  name?: string;
  disabled?: boolean;
  className?: string;
}

type Drag = { pointer: number; index: number | null; grab: number; x: number; raw: number; samples: { t: number; p: number }[] };

const { spring } = motionTokens;
/** Motion drops velocity on time-defined springs, so anything a gesture hands off to runs the same spring written as stiffness and damping. */
const physical = ({ visualDuration, bounce }: { visualDuration: number; bounce: number }) => { const root = (2 * Math.PI) / (visualDuration * 1.2); return { type: "spring" as const, stiffness: root * root, damping: 2 * (1 - bounce) * root, restDelta: .002, restSpeed: .02 }; };
const thumbSpring = physical(spring.snappy);
const kickSpring = physical(spring.morph);
/** Pixels of rubber-band travel past a limit, pixel reach of a bar edge on release, and the speed a key press at a limit strains with. */
const STRETCH = 10, BIN_SNAP_PX = 9, BUMP_PX = 150;
const rubber = (distance: number, limit = STRETCH) => Math.sign(distance) * (1 - 1 / (Math.abs(distance) * .55 / limit + 1)) * limit;
/** Where a release is heading, from a scroll-like deceleration (rate .99), in the same units as the velocity. */
const project = (velocity: number) => velocity * .099;
const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
const decimalsOf = (value: number) => (String(value).split(".")[1] ?? "").length;

/** Counts values into equal bars between `min` and `max`. The last bar keeps `max` itself. */
export function histogram(data: number[], min: number, max: number, bins: number) {
  const counts = new Array<number>(bins).fill(0);
  const width = (max - min) / bins || 1;
  for (const item of data) if (item >= min && item <= max) counts[Math.min(bins - 1, Math.floor((item - min) / width))]!++;
  return counts;
}

/**
 * A two thumb range over a histogram of the data it filters. Bars inside the range light up, cut exactly at each thumb on the frame it
 * moves; the thumbs follow the pointer 1:1, never cross, rubber-band at the ends, and settle on bar edges with the release velocity. A
 * press anywhere on the histogram or track springs the nearest thumb there. Arrows step, Shift+arrows and PageUp or PageDown move one
 * bar, and Home or End go to a thumb's limit.
 */
export function RangeHistogramSlider({ label, data, value, defaultValue, onValueChange, onValueCommit, min: minProp, max: maxProp, step: stepProp = 1, bins = 32, snapToBins = true, minStepsBetweenThumbs = 1, format, thumbLabels, name, disabled, className }: RangeHistogramSliderProps) {
  const reduced = useReducedMotion() ?? false;
  const labelId = useId();
  const step = stepProp > 0 ? stepProp : 1;
  const min = minProp ?? Math.floor(Math.min(...data, 0));
  const max = maxProp ?? Math.ceil(Math.max(...data, min + step));
  const span = max - min || 1;
  const decimals = Math.max(decimalsOf(step), decimalsOf(min));
  const gap = minStepsBetweenThumbs * step;
  const [internal, setInternal] = useState<[number, number]>(() => defaultValue ?? [min, max]);
  const values: [number, number] = value ?? internal;
  const formatValue = format ?? ((input: number) => input.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
  const counts = useMemo(() => histogram(data, min, max, bins), [data, min, max, bins]);
  const tallest = Math.max(1, ...counts);
  const binSpan = span / bins;

  const pct = (input: number) => ((input - min) / span) * 100;
  const valueAt = (percent: number) => min + (percent / 100) * span;
  const snap = (input: number) => Number((min + Math.round((input - min) / step) * step).toFixed(decimals));
  const lowOf = (index: number, current: [number, number]) => index === 1 ? current[0] + gap : min;
  const highOf = (index: number, current: [number, number]) => index === 0 ? current[1] - gap : max;
  const settle = (index: number, input: number, current: [number, number]) => clamp(snap(clamp(input, min, max)), lowOf(index, current), highOf(index, current));

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const latest = useRef(values);
  const goal = useRef(values.map(pct));
  const drag = useRef<Drag | null>(null);
  const [dragging, setDragging] = useState<number | null>(null);
  const [lastActive, setLastActive] = useState(1);

  const pos0 = useMotionValue(pct(values[0])), pos1 = useMotionValue(pct(values[1]));
  const lag0 = useMotionValue(0), lag1 = useMotionValue(0);
  const shown0 = useTransform(() => pos0.get() + lag0.get());
  const shown1 = useTransform(() => pos1.get() + lag1.get());
  // One clip reveals the lit copy of the bars and the track fill, so both cut at the thumb on the same frame.
  const clipPath = useTransform(() => `inset(0 ${(100 - clamp(shown1.get(), 0, 100)).toFixed(3)}% 0 ${clamp(shown0.get(), 0, 100).toFixed(3)}%)`);
  const thumbs = [{ pos: pos0, lag: lag0, shown: shown0 }, { pos: pos1, lag: lag1, shown: shown1 }];

  function commit(index: number, next: number) {
    const current = latest.current;
    if (current[index] === next) return;
    const updated: [number, number] = index === 0 ? [next, current[1]] : [current[0], next];
    latest.current = updated;
    if (value === undefined) setInternal(updated);
    onValueChange?.(updated);
  }

  useLayoutEffect(() => {
    latest.current = values;
    values.forEach((item, index) => {
      const target = pct(item), thumb = thumbs[index]!;
      if (drag.current?.index === index || goal.current[index] === target) return;
      goal.current[index] = target;
      const from = thumb.pos.get() + thumb.lag.get();
      thumb.lag.jump(0);
      thumb.pos.jump(from);
      if (reduced) thumb.pos.jump(target); else animate(thumb.pos, target, thumbSpring);
    });
  });

  const trackWidth = () => trackRef.current?.getBoundingClientRect().width || 1;
  const nearest = (at: number, current: [number, number]) => {
    const low = Math.abs(at - pct(current[0])), high = Math.abs(at - pct(current[1]));
    return low === high ? (at < pct(current[0]) ? 0 : 1) : low < high ? 0 : 1;
  };
  const focusThumb = (index: number) => thumbsRef.current?.querySelector<HTMLElement>(`[data-index="${index}"]`)?.focus({ preventScroll: true });

  function begin(state: Drag, index: number, at: number, press: boolean) {
    const thumb = thumbs[index]!;
    const from = thumb.pos.get() + thumb.lag.get();
    state.index = index;
    state.grab = press ? 0 : at - from;
    thumb.lag.jump(0);
    thumb.pos.jump(from);
    setDragging(index);
    setLastActive(index);
    focusThumb(index);
    if (press) follow(state, at, 0, true);
    state.samples = [{ t: 0, p: thumb.pos.get() }];
  }
  function follow(state: Drag, at: number, time: number, press = false) {
    const index = state.index;
    if (index === null) return;
    const thumb = thumbs[index]!, current = latest.current, width = trackWidth();
    const raw = at - state.grab;
    const edge = clamp(raw, pct(lowOf(index, current)), pct(highOf(index, current)));
    const placed = reduced ? edge : edge + (rubber(((raw - edge) / 100) * width) / width) * 100;
    if (press && !reduced) {
      const from = thumb.pos.get();
      thumb.pos.jump(placed);
      thumb.lag.jump(from - placed);
      animate(thumb.lag, 0, thumbSpring);
    } else thumb.pos.set(placed);
    state.raw = raw;
    state.samples.push({ t: time, p: placed });
    if (state.samples.length > 6) state.samples.shift();
    commit(index, settle(index, valueAt(raw), current));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (disabled || event.button !== 0 || !event.isPrimary) return;
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const at = ((event.clientX - rect.left) / (rect.width || 1)) * 100;
    const grabbed = (event.target as HTMLElement).closest<HTMLElement>("[data-thumb]");
    const current = latest.current;
    event.currentTarget.setPointerCapture(event.pointerId);
    const state: Drag = { pointer: event.pointerId, index: null, grab: 0, x: event.clientX, raw: at, samples: [] };
    drag.current = state;
    // Stacked thumbs wait for the first movement to decide which one the pointer means.
    if (grabbed && current[1] - current[0] <= gap) { focusThumb(Number(grabbed.dataset.index)); return; }
    begin(state, grabbed ? Number(grabbed.dataset.index) : nearest(at, current), at, !grabbed);
    state.samples = [{ t: event.timeStamp, p: thumbs[state.index ?? 0]!.pos.get() }];
  }
  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state || state.pointer !== event.pointerId) return;
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const at = ((event.clientX - rect.left) / (rect.width || 1)) * 100;
    if (state.index === null) {
      const dx = event.clientX - state.x;
      if (Math.abs(dx) < 2) return;
      begin(state, dx < 0 ? 0 : 1, at - (dx / (rect.width || 1)) * 100, false);
      state.samples = [{ t: event.timeStamp, p: thumbs[state.index ?? 0]!.pos.get() }];
    }
    follow(state, at, event.timeStamp);
  }
  function onPointerEnd(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state || state.pointer !== event.pointerId) return;
    drag.current = null;
    const index = state.index;
    if (index === null) return;
    const thumb = thumbs[index]!, current = latest.current, width = trackWidth();
    const samples = state.samples, first = samples[0], last = samples[samples.length - 1];
    const elapsed = last && first ? (last.t - first.t) / 1000 : 0;
    const velocity = (elapsed > .008 && event.timeStamp - last!.t < 60 ? (last!.p - first!.p) / elapsed : 0) + thumb.lag.getVelocity();
    // Momentum may carry the thumb at most one bar further; then a nearby bar edge claims it, so the range lines up with the data.
    const binPct = 100 / bins;
    const landing = clamp(state.raw + (event.type === "pointerup" ? clamp(project(velocity), -binPct, binPct) : 0), 0, 100);
    let target = valueAt(landing);
    if (snapToBins) {
      const edgeValue = min + Math.round((target - min) / binSpan) * binSpan;
      if ((Math.abs(pct(edgeValue) - landing) / 100) * width <= BIN_SNAP_PX) target = edgeValue;
    }
    const next = settle(index, target, current);
    const from = thumb.pos.get() + thumb.lag.get(), goalPct = pct(next);
    thumb.lag.jump(0);
    thumb.pos.jump(from);
    goal.current[index] = goalPct;
    if (reduced) thumb.pos.jump(goalPct); else animate(thumb.pos, goalPct, { ...thumbSpring, velocity });
    commit(index, next);
    setDragging(null);
    onValueCommit?.(latest.current);
  }

  function onKeyDown(index: number, event: KeyboardEvent<HTMLDivElement>) {
    if (disabled) return;
    const current = latest.current, now = current[index]!;
    // A large move goes to the next bar edge in that direction, so keys walk the histogram bar by bar.
    const edgeFrom = (direction: number) => { const at = (now - min) / binSpan; const next = direction > 0 ? Math.floor(at + 1e-6) + 1 : Math.ceil(at - 1e-6) - 1; return min + next * binSpan; };
    const moves: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 2, PageDown: -2 };
    let wanted: number;
    if (event.key === "Home") wanted = lowOf(index, current);
    else if (event.key === "End") wanted = highOf(index, current);
    else if (event.key in moves) { const direction = Math.sign(moves[event.key]!); wanted = Math.abs(moves[event.key]!) === 2 || event.shiftKey ? edgeFrom(direction) : now + direction * step; }
    else return;
    event.preventDefault();
    setLastActive(index);
    const next = settle(index, wanted, current);
    if (next === now) {
      const toward = Math.sign(wanted - now);
      if (toward && !reduced) animate(thumbs[index]!.pos, goal.current[index]!, { ...kickSpring, velocity: (toward * BUMP_PX / trackWidth()) * 100 });
      return;
    }
    commit(index, next);
    onValueCommit?.(latest.current);
  }

  const names = thumbLabels ?? [`${label}, minimum`, `${label}, maximum`];
  const bars = counts.map((count, index) => <span key={index} className={styles.bar} style={{ height: `${count ? Math.max(4, (count / tallest) * 100) : 0}%` }} />);

  return <div className={[styles.root, className].filter(Boolean).join(" ")} data-disabled={disabled || undefined} data-dragging={dragging !== null || undefined}>
    <div className={styles.header}>
      <span id={labelId} className={styles.label}>{label}</span>
      <span className={styles.readout} aria-hidden="true">{formatValue(values[0])}<span className={styles.dash}>–</span>{formatValue(values[1])}</span>
    </div>
    <div className={styles.control} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerCancel={onPointerEnd} onLostPointerCapture={onPointerEnd} onMouseDown={event => event.preventDefault()}>
      <div className={styles.chart} aria-hidden="true">
        <div className={styles.bars}>{bars}</div>
        <motion.div className={`${styles.bars} ${styles.lit}`} style={{ clipPath }}>{bars}</motion.div>
      </div>
      <div className={styles.row}>
        <div ref={trackRef} className={styles.track}><motion.div className={styles.fill} style={{ clipPath }} /></div>
        <div ref={thumbsRef} className={styles.thumbs}>
          {values.map((item, index) => <Thumb key={index} index={index} shown={thumbs[index]!.shown} value={item} text={formatValue(item)} low={lowOf(index, values)} high={highOf(index, values)} label={names[index]!}
            active={lastActive === index} lifted={dragging === index} disabled={disabled} reduced={reduced} onKeyDown={event => onKeyDown(index, event)} />)}
        </div>
      </div>
    </div>
    {name && values.map((item, index) => <input key={index} type="hidden" name={name} value={item} disabled={disabled} />)}
  </div>;
}

interface ThumbProps { index: number; shown: MotionValue<number>; value: number; text: string; low: number; high: number; label: string; active: boolean; lifted: boolean; disabled?: boolean; reduced: boolean; onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void; }

/** The thumb rides a layer as wide as the track, so a percentage transform places it without measuring. */
function Thumb({ index, shown, value, text, low, high, label, active, lifted, disabled, reduced, onKeyDown }: ThumbProps) {
  const x = useTransform(shown, current => `${current - 100}%`);
  return <motion.div className={styles.layer} style={{ x, zIndex: active ? 2 : 1 }}>
    <span className={styles.guide} data-on={lifted || undefined} aria-hidden="true" />
    <motion.div role="slider" data-thumb="" data-index={index} className={styles.thumb} tabIndex={disabled ? -1 : 0} aria-label={label} aria-valuemin={low} aria-valuemax={high} aria-valuenow={value} aria-valuetext={text} aria-orientation="horizontal" aria-disabled={disabled || undefined}
      initial={false} animate={{ scale: lifted ? 1.18 : 1 }} transition={reduced ? { duration: 0 } : spring.snappy} onKeyDown={onKeyDown} />
  </motion.div>;
}

export default RangeHistogramSlider;
