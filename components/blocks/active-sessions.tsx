"use client";

import { Laptop, LoaderCircle, Monitor, Smartphone, Tablet } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { ComponentProps, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import "./active-sessions.css";

export type ActiveSessionDevice = "desktop" | "laptop" | "phone" | "tablet";

export type ActiveSession = {
  id: string;
  device: ActiveSessionDevice;
  /** "Chrome", "Safari", "ObsidianUI for iOS". */
  browser?: string;
  /** "macOS", "Windows 11", "iOS 19". */
  os?: string;
  /** Overrides "Browser on OS" as the row title. */
  name?: string;
  /** "Berlin, Germany". */
  location?: string;
  ip?: string;
  lastActiveAt: Date | string | number;
  /** The session in use right now. Listed first and cannot be signed out from this list. */
  current?: boolean;
  /** A short warning tag, such as "New location". */
  flag?: string;
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN = [0.55, 0, 1, 0.45] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
const MINUTE_MS = 60_000;
const SLOW_REQUEST_MS = 150;

const getSessionLabel = (session: ActiveSession) =>
  session.name ?? ([session.browser, session.os].filter(Boolean).join(" on ") || "Unknown device");

const getLastActiveTime = (session: ActiveSession) => new Date(session.lastActiveAt).getTime();

/** The current device first, then the most recently active. */
const sortSessions = (sessions: ActiveSession[]) =>
  [...sessions].sort(
    (a, b) => Number(!!b.current) - Number(!!a.current) || getLastActiveTime(b) - getLastActiveTime(a),
  );

const sessionNoun = (count: number) => (count === 1 ? "session" : "sessions");

// One clock for every list on the page. It ticks every 30 seconds while the tab is visible
// and catches up when the tab returns. The server has no "now", so relative times render on the client only.
let sharedNow = 0;
let sharedNowTimer: number | undefined;
const sharedNowSubscribers = new Set<() => void>();

const publishNow = () => {
  sharedNow = Date.now();
  sharedNowSubscribers.forEach((notify) => notify());
};

const refreshNowOnReturn = () => {
  if (!document.hidden) publishNow();
};

function subscribeToNow(notify: () => void) {
  sharedNowSubscribers.add(notify);
  if (sharedNowSubscribers.size === 1) {
    sharedNow = Date.now();
    sharedNowTimer = window.setInterval(refreshNowOnReturn, 30_000);
    document.addEventListener("visibilitychange", refreshNowOnReturn);
  }
  return () => {
    sharedNowSubscribers.delete(notify);
    if (sharedNowSubscribers.size === 0) {
      window.clearInterval(sharedNowTimer);
      document.removeEventListener("visibilitychange", refreshNowOnReturn);
    }
  };
}

function useSharedNow() {
  return useSyncExternalStore(subscribeToNow, () => sharedNow || (sharedNow = Date.now()), () => null);
}

function useSessionTimeFormat(locale?: string) {
  return useMemo(() => {
    const relativeTime = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
    const shortDate = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short" });
    const shortDateWithYear = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" });
    const fullDate = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" });

    return {
      formatRelative(time: number, now: number) {
        const seconds = Math.round((time - now) / 1000);
        const distance = Math.abs(seconds);
        if (distance < 3600) return relativeTime.format(Math.round(seconds / 60), "minute");
        if (distance < 86_400) return relativeTime.format(Math.round(seconds / 3600), "hour");
        if (distance < 86_400 * 7) return relativeTime.format(Math.round(seconds / 86_400), "day");
        return (time < now - 86_400_000 * 300 ? shortDateWithYear : shortDate).format(time);
      },
      formatFull: (time: number) => fullDate.format(time),
    };
  }, [locale]);
}

type SessionTimeFormat = ReturnType<typeof useSessionTimeFormat>;

function useControllableState<T>(value: T | undefined, defaultValue: T, onChange?: (next: T) => void) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolledValue(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );
  return [isControlled ? value : uncontrolledValue, setValue] as const;
}

function DeviceIcon({ device }: { device: ActiveSessionDevice }) {
  const iconProps = { size: 16, strokeWidth: 1.6, "aria-hidden": true } as const;
  switch (device) {
    case "laptop":
      return <Laptop {...iconProps} />;
    case "phone":
      return <Smartphone {...iconProps} />;
    case "tablet":
      return <Tablet {...iconProps} />;
    default:
      return <Monitor {...iconProps} />;
  }
}

export type ActiveSessionsProps = Omit<ComponentProps<"section">, "title" | "defaultValue" | "onChange"> & {
  /** Controlled list of sessions. */
  sessions?: ActiveSession[];
  /** Initial sessions when uncontrolled. */
  defaultSessions?: ActiveSession[];
  onSessionsChange?: (sessions: ActiveSession[]) => void;
  /** Signs one session out. The row folds away when it resolves and shows an error if it rejects. */
  onRevoke?: (session: ActiveSession) => void | Promise<unknown>;
  /** Signs out every session except the current one. Falls back to onRevoke for each session. */
  onRevokeOthers?: (sessions: ActiveSession[]) => void | Promise<unknown>;
  /** Shows skeleton rows while the first load is in flight. */
  loading?: boolean;
  heading?: ReactNode;
  /** Heading element to match the surrounding page outline. */
  headingLevel?: 2 | 3 | 4;
  description?: ReactNode;
  /** Minutes within which a session counts as "Active now". */
  activeWithin?: number;
  /** Locale for relative and full dates. Defaults to the browser locale. */
  locale?: string;
};

export function ActiveSessions({
  sessions: sessionsProp,
  defaultSessions = [],
  onSessionsChange,
  onRevoke,
  onRevokeOthers,
  loading = false,
  heading = "Active sessions",
  headingLevel = 3,
  description = "Devices signed in to your account. Sign out any you don’t recognize.",
  activeWithin = 5,
  locale,
  className,
  ...rest
}: ActiveSessionsProps) {
  const headingId = useId();
  const reduceMotion = !!useReducedMotion();
  const now = useSharedNow();
  const timeFormat = useSessionTimeFormat(locale);
  const [sessions, setSessions] = useControllableState(sessionsProp, defaultSessions, onSessionsChange);
  const [pendingIds, setPendingIds] = useState<ReadonlySet<string>>(() => new Set());
  const [rowErrors, setRowErrors] = useState<Record<string, string>>({});
  const [isConfirmingRevokeOthers, setIsConfirmingRevokeOthers] = useState(false);
  const [isRevokingOthers, setIsRevokingOthers] = useState(false);
  const [revokeOthersError, setRevokeOthersError] = useState<string | null>(null);
  // Exit order for a sign-out-everywhere cascade. Single sign-outs have no entry and leave at once.
  const [exitOrder, setExitOrder] = useState<ReadonlyMap<string, number>>(() => new Map());
  const [announcement, setAnnouncement] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const revokeButtons = useRef(new Map<string, HTMLButtonElement>());
  // Where focus lands once removed rows finish leaving. No sessionId means the heading.
  const focusAfterExit = useRef<{ sessionId?: string } | null>(null);
  const restoreActionFocus = useRef(false);
  // Overlapping sign-outs each remove their row from the newest list, not the one they started with.
  const latestSessions = useRef(sessions);
  useEffect(() => {
    latestSessions.current = sessions;
  });

  const orderedSessions = useMemo(() => sortSessions(sessions), [sessions]);
  const otherSessions = useMemo(() => orderedSessions.filter((session) => !session.current), [orderedSessions]);
  const showConfirmation = isConfirmingRevokeOthers && otherSessions.length > 0;
  const HeadingTag = `h${headingLevel}` as "h2" | "h3" | "h4";

  const registerRevokeButton = useCallback((id: string, button: HTMLButtonElement | null) => {
    if (button) revokeButtons.current.set(id, button);
    else revokeButtons.current.delete(id);
  }, []);

  // Updates the ref before the next render, so sign-outs that settle together each see the other's removal.
  const commitSessions = (next: ActiveSession[]) => {
    latestSessions.current = next;
    setSessions(next);
  };

  // Focus moves only when it would disappear with the removed rows or the header action,
  // never away from wherever the user put it while the request ran.
  const isLosingFocus = (removed: ActiveSession[], actionLeaves: boolean) => {
    const focused = document.activeElement;
    if (!focused || focused === document.body) return true;
    if (actionLeaves && headerRef.current?.contains(focused)) return true;
    return removed.some((session) => revokeButtons.current.get(session.id) === focused);
  };

  const setRowError = (id: string, message: string | null) =>
    setRowErrors((previous) => {
      if (!message && !(id in previous)) return previous;
      const next = { ...previous };
      if (message) next[id] = message;
      else delete next[id];
      return next;
    });

  const revokeSession = async (session: ActiveSession) => {
    setRowError(session.id, null);
    setPendingIds((previous) => new Set(previous).add(session.id));
    try {
      await onRevoke?.(session);
      if (isLosingFocus([session], false)) {
        const others = sortSessions(latestSessions.current).filter((item) => !item.current);
        const index = others.findIndex((other) => other.id === session.id);
        focusAfterExit.current = { sessionId: (others[index + 1] ?? others[index - 1])?.id };
      }
      setExitOrder(new Map());
      commitSessions(latestSessions.current.filter((item) => item.id !== session.id));
      setAnnouncement(`Signed out ${getSessionLabel(session)}`);
    } catch {
      setRowError(session.id, "Couldn’t sign out this session. Try again.");
    } finally {
      setPendingIds((previous) => {
        const next = new Set(previous);
        next.delete(session.id);
        return next;
      });
    }
  };

  /** Resolves with the sessions that could not be signed out. */
  const signOutSessions = async (targets: ActiveSession[]) => {
    if (onRevokeOthers) {
      await onRevokeOthers(targets);
      return [];
    }
    // One request per session: the ones that succeed leave the list even if others fail.
    const results = await Promise.allSettled(targets.map((session) => onRevoke?.(session)));
    return targets.filter((_, index) => results[index].status === "rejected");
  };

  const revokeOtherSessions = async () => {
    const targets = otherSessions;
    setRevokeOthersError(null);
    setIsRevokingOthers(true);
    try {
      const failed = await signOutSessions(targets);
      const revoked = targets.filter((session) => !failed.includes(session));
      if (revoked.length > 0) {
        const revokedIds = new Set(revoked.map((session) => session.id));
        setExitOrder(new Map(revoked.map((session, index) => [session.id, index])));
        setRowErrors({});
        commitSessions(latestSessions.current.filter((item) => !revokedIds.has(item.id)));
        setAnnouncement(`Signed out ${revoked.length} other ${sessionNoun(revoked.length)}`);
      }
      if (failed.length > 0) {
        // The confirmation stays open over the sessions that are left, ready for another try.
        setRevokeOthersError(`Couldn’t sign out ${failed.length} ${sessionNoun(failed.length)}. Try again.`);
      } else {
        if (isLosingFocus(revoked, true)) focusAfterExit.current = {};
        setIsConfirmingRevokeOthers(false);
      }
    } catch {
      setRevokeOthersError("Couldn’t sign out the other sessions. Try again.");
    } finally {
      setIsRevokingOthers(false);
    }
  };

  const restoreFocusAfterExit = () => {
    const target = focusAfterExit.current;
    focusAfterExit.current = null;
    if (!target) return;
    const button = target.sessionId ? revokeButtons.current.get(target.sessionId) : undefined;
    (button ?? headingRef.current)?.focus({ preventScroll: true });
  };

  return (
    <section
      aria-labelledby={headingId}
      aria-busy={loading || undefined}
      data-slot="active-sessions"
      className={cn("obsidian-active-sessions @container flex w-full min-w-0 flex-col gap-3 text-foreground", className)}
      {...rest}
    >
      {/* The heading and the sign-out-everywhere action share a row; in a narrow column the action drops beneath. */}
      <header ref={headerRef} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2.5 px-0.5 @max-[30rem]:grid-cols-1">
        <div className="flex min-w-0 flex-col gap-0.5">
          <HeadingTag
            ref={headingRef}
            id={headingId}
            tabIndex={-1}
            className="rounded-sm text-[14px] font-medium leading-5 tracking-[-0.015em] outline-none"
          >
            {heading}
          </HeadingTag>
          {description && <p className="text-pretty text-[12.5px] leading-[18px] text-muted-foreground">{description}</p>}
        </div>
        <AnimatePresence initial={false} mode="popLayout">
          {/* Present but disabled while loading, so the header keeps its height when the list arrives. */}
          {(loading || otherSessions.length > 0) && (
            <motion.div
              key={showConfirmation ? "confirm" : "action"}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4, filter: "blur(2px)", transition: { duration: 0.12 } }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="flex min-w-0 items-center gap-2 justify-self-start @min-[30rem]:justify-self-end"
            >
              {showConfirmation ? (
                <RevokeOthersConfirmation
                  count={otherSessions.length}
                  isPending={isRevokingOthers}
                  onCancel={() => {
                    restoreActionFocus.current = true;
                    setIsConfirmingRevokeOthers(false);
                  }}
                  onConfirm={() => void revokeOtherSessions()}
                />
              ) : (
                <SessionButton
                  variant="secondary"
                  // A single sign-out still in flight would race the bulk request.
                  disabled={loading || pendingIds.size > 0}
                  onClick={() => setIsConfirmingRevokeOthers(true)}
                  // Backing out of the confirmation returns focus to where it started.
                  buttonRef={(button) => {
                    if (button && restoreActionFocus.current) {
                      restoreActionFocus.current = false;
                      button.focus({ preventScroll: true });
                    }
                  }}
                >
                  Sign out other sessions
                </SessionButton>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {revokeOthersError && (
        <p
          role="alert"
          className="rounded-lg bg-(--obsidian-active-sessions-danger)/10 px-3 py-2 text-[12.5px] leading-[18px] text-(--obsidian-active-sessions-danger)"
        >
          {revokeOthersError}
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-xs">
        {loading ? (
          <ul aria-label="Loading sessions" className="flex flex-col">
            {[0, 1, 2].map((index) => (
              <li key={index} className="flex gap-3 border-t border-border px-4 py-3 first:border-t-0">
                {/* Shaped like a real row, so nothing moves when the sessions arrive. */}
                <span className="obsidian-active-sessions__pulse mt-0.5 size-8 shrink-0 self-start rounded-lg bg-foreground/[0.06]" />
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="flex h-5 items-center">
                    <span className="obsidian-active-sessions__pulse h-3 w-36 rounded-sm bg-foreground/[0.06]" />
                  </span>
                  <span className="flex h-4 items-center">
                    <span className="obsidian-active-sessions__pulse h-2.5 w-52 max-w-full rounded-sm bg-foreground/[0.05]" />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul aria-labelledby={headingId} className="flex flex-col">
            <AnimatePresence initial={false} custom={exitOrder} onExitComplete={restoreFocusAfterExit}>
              {orderedSessions.map((session) => (
                <motion.li
                  key={session.id}
                  data-session={session.id}
                  custom={exitOrder}
                  initial={false}
                  exit="signedOut"
                  variants={{
                    // Signing out everywhere folds the rows shut from top to bottom, 45ms apart.
                    signedOut: (order: ReadonlyMap<string, number>) => {
                      const delay = Math.min(order.get(session.id) ?? 0, 8) * 0.045;
                      return reduceMotion
                        ? { opacity: 0, transition: { duration: 0.12, delay: delay / 2 } }
                        : {
                            opacity: 0,
                            height: 0,
                            x: 8,
                            transition: {
                              opacity: { duration: 0.14, delay },
                              x: { duration: 0.18, ease: EASE_IN, delay },
                              height: { duration: 0.26, ease: EASE_IN_OUT, delay: delay + 0.06 },
                            },
                          };
                    },
                  }}
                  className="overflow-hidden border-t border-border first:border-t-0"
                >
                  <SessionRow
                    session={session}
                    now={now}
                    timeFormat={timeFormat}
                    activeWithin={activeWithin}
                    isPending={pendingIds.has(session.id) || (isRevokingOthers && !session.current)}
                    error={rowErrors[session.id]}
                    onRevoke={() => void revokeSession(session)}
                    revokeButtonRef={(button) => registerRevokeButton(session.id, button)}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
        <AnimatePresence initial={false}>
          {!loading && otherSessions.length === 0 && (
            <motion.p
              key="only-this-device"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ height: { duration: 0.24, ease: EASE_IN_OUT, delay: 0.2 }, opacity: { duration: 0.2, delay: 0.3 } }}
              className="overflow-hidden text-[12.5px] text-muted-foreground"
            >
              <span className={cn("block px-4 py-3", orderedSessions.length > 0 && "border-t border-border")}>
                {orderedSessions.length > 0 ? "No other sessions. You’re only signed in here." : "No active sessions."}
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </section>
  );
}

function SessionRow({
  session,
  now,
  timeFormat,
  activeWithin,
  isPending,
  error,
  onRevoke,
  revokeButtonRef,
}: {
  session: ActiveSession;
  now: number | null;
  timeFormat: SessionTimeFormat;
  activeWithin: number;
  isPending: boolean;
  error?: string;
  onRevoke: () => void;
  revokeButtonRef: Ref<HTMLButtonElement>;
}) {
  const errorId = useId();
  const lastActiveTime = getLastActiveTime(session);
  const isActive = session.current || (now !== null && now - lastActiveTime < activeWithin * MINUTE_MS);
  const label = getSessionLabel(session);
  const hasPlace = Boolean(session.location || session.ip);

  return (
    <div
      data-current={session.current || undefined}
      data-active={isActive || undefined}
      className="flex min-w-0 items-start gap-3 px-4 py-3"
    >
      <span
        aria-hidden
        className="relative mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-foreground/[0.04] text-foreground/75 shadow-[inset_0_0_0_1px_var(--border)]"
      >
        <DeviceIcon device={session.device} />
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium leading-5">
          <span className="min-w-0">{label}</span>
          {session.current && (
            <span className="rounded-full bg-foreground/[0.07] px-1.5 py-px text-[11px] font-medium leading-4 text-foreground/75">
              This device
            </span>
          )}
          {session.flag && (
            <span className="rounded-full bg-(--obsidian-active-sessions-warning)/12 px-1.5 py-px text-[11px] font-medium leading-4 text-(--obsidian-active-sessions-warning)">
              {session.flag}
            </span>
          )}
        </p>
        <p className="flex min-w-0 flex-wrap items-center gap-x-1.5 text-[12px] leading-4 text-muted-foreground">
          {hasPlace && (
            // The place stays on one line; when space runs out the address trims instead of leaving a dangling dot.
            <span
              className="flex min-w-0 max-w-full items-center gap-x-1.5 overflow-hidden whitespace-nowrap"
              title={[session.location, session.ip].filter(Boolean).join(" · ")}
            >
              {session.location && <span className="shrink-0">{session.location}</span>}
              {session.location && session.ip && <MetaSeparator />}
              {session.ip && <span className="min-w-0 truncate font-mono text-[11px] tracking-[0.01em]">{session.ip}</span>}
            </span>
          )}
          {/* In a narrow column the status takes its own line instead of leaving a dot at a line end. */}
          {hasPlace && <MetaSeparator className="@max-[30rem]:hidden" />}
          {isActive ? (
            <span className="inline-flex items-center gap-1.5 text-(--obsidian-active-sessions-success) @max-[30rem]:basis-full">
              <span aria-hidden className="relative grid size-1.5 place-items-center">
                <span className="obsidian-active-sessions__ping absolute inset-0 rounded-full bg-(--obsidian-active-sessions-success)/70" />
                <span className="size-1.5 rounded-full bg-(--obsidian-active-sessions-success)" />
              </span>
              Active now
            </span>
          ) : (
            <time
              dateTime={now !== null ? new Date(lastActiveTime).toISOString() : undefined}
              title={now !== null ? timeFormat.formatFull(lastActiveTime) : undefined}
              className="tabular-nums @max-[30rem]:basis-full"
            >
              {now !== null ? `Last active ${timeFormat.formatRelative(lastActiveTime, now)}` : "\u00a0"}
            </time>
          )}
        </p>
        {error && (
          <p id={errorId} role="alert" className="pt-1 text-[12px] leading-4 text-(--obsidian-active-sessions-danger)">
            {error}
          </p>
        )}
      </div>

      {!session.current && (
        <SessionButton
          buttonRef={revokeButtonRef}
          variant="ghost"
          isPending={isPending}
          onClick={onRevoke}
          aria-label={`Sign out ${label}${session.location ? `, ${session.location}` : ""}`}
          aria-describedby={error ? errorId : undefined}
          className="-mr-1.5 mt-0.5"
        >
          Sign out
        </SessionButton>
      )}
    </div>
  );
}

const MetaSeparator = ({ className }: { className?: string }) => (
  <span aria-hidden className={cn("text-muted-foreground/60", className)}>
    ·
  </span>
);

function SessionButton({
  variant,
  isPending = false,
  buttonRef,
  className,
  children,
  onClick,
  ...props
}: Omit<ComponentProps<"button">, "type" | "ref"> & {
  variant: "secondary" | "ghost" | "danger";
  isPending?: boolean;
  buttonRef?: Ref<HTMLButtonElement>;
}) {
  // The spinner only appears once a request runs past SLOW_REQUEST_MS, so quick sign-outs never flash it.
  const [isSlow, setIsSlow] = useState(false);
  useEffect(() => {
    if (!isPending) return;
    const timer = window.setTimeout(() => setIsSlow(true), SLOW_REQUEST_MS);
    return () => {
      window.clearTimeout(timer);
      setIsSlow(false);
    };
  }, [isPending]);
  const showSpinner = isPending && isSlow;

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-busy={isPending || undefined}
      data-variant={variant}
      onClick={isPending ? undefined : onClick}
      className={cn(
        "relative inline-grid h-7 shrink-0 select-none place-items-center rounded-md px-2.5 text-[12.5px] font-medium outline-none",
        "transition-[background-color,border-color,color,scale] duration-150 active:scale-[0.97] active:duration-75 aria-busy:active:scale-100",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid",
        // A taller touch target on coarse pointers without changing the visual size.
        "before:absolute before:inset-x-0 before:-inset-y-2 before:content-[''] pointer-fine:before:hidden",
        variant === "secondary" &&
          "border border-border bg-background text-foreground shadow-xs enabled:hover:bg-accent enabled:hover:text-accent-foreground disabled:opacity-50",
        variant === "ghost" &&
          (isPending
            ? "text-muted-foreground"
            : "text-muted-foreground hover:bg-(--obsidian-active-sessions-danger)/10 hover:text-(--obsidian-active-sessions-danger)"),
        variant === "danger" &&
          "bg-(--obsidian-active-sessions-danger-solid) text-white shadow-xs hover:bg-(--obsidian-active-sessions-danger-solid)/90 disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {/* The label keeps its place under the spinner, so the button never changes width. */}
      <span className={cn("col-start-1 row-start-1 transition-opacity duration-150", showSpinner && "opacity-0")}>{children}</span>
      {showSpinner && (
        <span className="col-start-1 row-start-1 grid place-items-center">
          <LoaderCircle size={14} className="animate-spin" aria-hidden />
        </span>
      )}
    </button>
  );
}

function RevokeOthersConfirmation({
  count,
  isPending,
  onCancel,
  onConfirm,
}: {
  count: number;
  isPending: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  // Keyboard users land on the confirming action; Escape backs out.
  useEffect(() => {
    confirmButtonRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div
      role="group"
      aria-label="Confirm signing out other sessions"
      className="flex flex-wrap items-center gap-2"
      onKeyDown={(event) => {
        if (event.key === "Escape" && !isPending) {
          event.preventDefault();
          onCancel();
        }
      }}
    >
      <span className="text-[12.5px] text-muted-foreground">
        Sign out {count} other {sessionNoun(count)}?
      </span>
      <SessionButton variant="secondary" onClick={onCancel} disabled={isPending}>
        Cancel
      </SessionButton>
      <SessionButton buttonRef={confirmButtonRef} variant="danger" isPending={isPending} onClick={onConfirm}>
        Sign out
      </SessionButton>
    </div>
  );
}

export default ActiveSessions;
