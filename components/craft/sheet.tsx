"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useDragControls, type PanInfo } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

function useControllableState<T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void
): [T, (next: T) => void] {
  const [internal, setInternal] = React.useState<T>(defaultValue);
  const controlled = value !== undefined;
  const current = controlled ? (value as T) : internal;

  const onChangeRef = React.useRef(onChange);
  React.useEffect(() => {
    onChangeRef.current = onChange;
  });

  const set = React.useCallback(
    (next: T) => {
      if (!controlled) setInternal(next);
      onChangeRef.current?.(next);
    },
    [controlled]
  );

  return [current, set];
}

const spring = { type: "spring", stiffness: 380, damping: 38, mass: 0.9 } as const;

export type SheetSide = "right" | "left" | "top" | "bottom";

const SIDES = {
  right: {
    pos: "inset-y-0 right-0 h-full w-[88vw] max-w-[26rem] border-l",
    from: { x: "100%" },
    to: { x: 0 },
    axis: "x",
    elastic: { left: 0, right: 0.6 },
    dismiss: (i: PanInfo) => i.offset.x > 96 || i.velocity.x > 500,
  },
  left: {
    pos: "inset-y-0 left-0 h-full w-[88vw] max-w-[26rem] border-r",
    from: { x: "-100%" },
    to: { x: 0 },
    axis: "x",
    elastic: { left: 0.6, right: 0 },
    dismiss: (i: PanInfo) => i.offset.x < -96 || i.velocity.x < -500,
  },
  top: {
    pos: "inset-x-0 top-0 mx-auto max-h-[85dvh] w-full max-w-lg rounded-b-2xl border-x border-b",
    from: { y: "-100%" },
    to: { y: 0 },
    axis: "y",
    elastic: { top: 0.6, bottom: 0 },
    dismiss: (i: PanInfo) => i.offset.y < -96 || i.velocity.y < -500,
  },
  bottom: {
    pos: "inset-x-0 bottom-0 mx-auto max-h-[85dvh] w-full max-w-lg rounded-t-2xl border-x border-t",
    from: { y: "100%" },
    to: { y: 0 },
    axis: "y",
    elastic: { top: 0, bottom: 0.6 },
    dismiss: (i: PanInfo) => i.offset.y > 96 || i.velocity.y > 500,
  },
} as const;

/* ───────────── root + context ───────────── */

interface SheetCtx {
  open: boolean;
  setOpen: (open: boolean) => void;
  titleId: string;
  descId: string;
  hasDesc: boolean;
  setHasDesc: (v: boolean) => void;
}
const SheetContext = React.createContext<SheetCtx | null>(null);
function useSheet() {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("Sheet parts must be used inside <Sheet>");
  return ctx;
}

export function Sheet({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useControllableState(open, defaultOpen, onOpenChange);
  const [hasDesc, setHasDesc] = React.useState(false);
  const titleId = React.useId();
  const descId = React.useId();
  const value = React.useMemo(
    () => ({ open: isOpen, setOpen, titleId, descId, hasDesc, setHasDesc }),
    [isOpen, setOpen, titleId, descId, hasDesc]
  );
  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
}

/** Unstyled button, bring your own classes. */
export function SheetTrigger({ onClick, ...props }: React.ComponentProps<"button">) {
  const { setOpen } = useSheet();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        setOpen(true);
      }}
    />
  );
}

export function SheetClose({ onClick, ...props }: React.ComponentProps<"button">) {
  const { setOpen } = useSheet();
  return (
    <button
      type="button"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        setOpen(false);
      }}
    />
  );
}

/* ───────────── content ───────────── */

export function SheetContent({
  side = "right",
  showClose = true,
  className,
  children,
}: {
  side?: SheetSide;
  showClose?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const { open, setOpen, titleId, descId, hasDesc } = useSheet();
  const cfg = SIDES[side];
  const horizontal = side === "left" || side === "right";
  const panelRef = React.useRef<HTMLDivElement>(null);
  const returnTo = React.useRef<HTMLElement | null>(null);
  const controls = useDragControls();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // focus in, scroll lock, Esc, focus back out
  React.useEffect(() => {
    if (!open || !mounted) return;
    returnTo.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus({ preventScroll: true });

    const bar = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (bar > 0) document.body.style.paddingRight = `${bar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.removeEventListener("keydown", onKey);
      returnTo.current?.focus({ preventScroll: true });
    };
  }, [open, mounted, setOpen]);

  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
    );
    if (!nodes?.length) {
      e.preventDefault();
      return;
    }
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const el = document.activeElement;
    if (e.shiftKey && (el === first || el === panelRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && el === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!mounted) return null;

  const handle = (
    <div
      onPointerDown={(e) => controls.start(e)}
      className="flex h-7 shrink-0 cursor-grab touch-none items-center justify-center active:cursor-grabbing"
    >
      <span className="h-1 w-9 rounded-full bg-neutral-200 dark:bg-neutral-800" />
    </div>
  );

  return createPortal(
    <AnimatePresence>
      {open && (
        <div key="sheet" className="fixed inset-0 z-50">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-neutral-950/30 backdrop-blur-[2px] dark:bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={hasDesc ? descId : undefined}
            tabIndex={-1}
            className={cn(
              "absolute flex flex-col overflow-hidden border-neutral-200 bg-white text-neutral-900 shadow-2xl outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100",
              cfg.pos,
              className
            )}
            initial={cfg.from}
            animate={cfg.to}
            exit={cfg.from}
            transition={spring}
            drag={cfg.axis}
            dragControls={controls}
            dragListener={false}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={cfg.elastic}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 700, bounceDamping: 45 }}
            onDragEnd={(_, info) => {
              if (cfg.dismiss(info)) setOpen(false);
            }}
            // left/right: swipe anywhere on touch. top/bottom: grab the handle.
            onPointerDown={horizontal ? (e) => e.pointerType !== "mouse" && controls.start(e) : undefined}
            onKeyDown={trapTab}
            style={horizontal ? { touchAction: "pan-y" } : undefined}
          >
            {side === "bottom" && handle}
            {children}
            {side === "top" && handle}

            {showClose && (
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg text-neutral-400 outline-none transition hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-400/50 active:scale-95 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus-visible:ring-neutral-600/60"
              >
                <X className="size-4" />
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ───────────── layout parts ───────────── */

export function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1 px-5 pb-3 pr-14 pt-5", className)} {...props} />;
}

export function SheetTitle({ className, ...props }: React.ComponentProps<"h2">) {
  const { titleId } = useSheet();
  return <h2 className={cn("text-base font-semibold tracking-tight", className)} {...props} id={titleId} />;
}

export function SheetDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { descId, setHasDesc } = useSheet();
  React.useEffect(() => {
    setHasDesc(true);
    return () => setHasDesc(false);
  }, [setHasDesc]);
  return (
    <p className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)} {...props} id={descId} />
  );
}

export function SheetBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex-1 overflow-y-auto px-5 py-2", className)} {...props} />;
}

export function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t border-neutral-200 px-5 py-4 dark:border-neutral-800",
        className
      )}
      {...props}
    />
  );
}
