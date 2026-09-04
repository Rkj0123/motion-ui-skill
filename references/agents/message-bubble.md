---
title: "Message Bubble"
description: "A focused conversational surface with visual tones, independent alignment, grouped messages, expandable content, and interactive link or button support."
category: "AI Agents"
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
documentation: "references/agents/message-bubble.md"
markdown: "references/agents/message-bubble.md"
license: "MIT"
---

# Message Bubble

> A focused conversational surface with visual tones, independent alignment, grouped messages, expandable content, and interactive link or button support.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py message-bubble --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

### Animated Surfaces usage

An interactive conversation where each newly sent user row pops up once while the assistant streams into a stable row.

```tsx
"use client";

import { ChatPreview } from "@/components/previews/agents/chat-preview";

export function MessageBubblePreview() {
  return (
    <ChatPreview
      reply="That message mounted once with a spring pop. Streaming updates only change its content, so the entrance does not replay."
      placeholder="Send a bubble…"
    />
  );
}
```

### With Avatars usage

Progressively arriving messages with sender avatars, metadata, delivery state, and grouped follow-up alignment.

```tsx
"use client";

import { Bot, RotateCcw, User } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/components/agents/message-bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/agents/message";
import { StreamingResponse } from "@/components/agents/streaming-response";

export function MessageBubbleAvatarsPreview() {
  const timer = useRef<number | undefined>(undefined);
  const [run, setRun] = useState(0);
  const [step, setStep] = useState(0);

  const replay = useCallback(() => {
    if (timer.current) window.clearTimeout(timer.current);
    setStep(0);
    setRun((value) => value + 1);
  }, []);

  useEffect(() => {
    if (step >= 2) return;
    timer.current = window.setTimeout(
      () => setStep((value) => value + 1),
      step === 0 ? 650 : 900,
    );
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [step]);

  return (
    <div className="flex h-[410px] w-full max-w-xl flex-col justify-center px-3">
      <MessageGroup key={run} spacing="default">
        <Message from="user">
          <MessageAvatar className="bg-foreground text-background">
            <User />
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>
              <span className="font-medium text-foreground/70">You</span>
              <span>Now</span>
            </MessageHeader>
            <MessageBubble variant="solid">
              <MessageBubbleContent>
                Can you turn these notes into a launch update?
              </MessageBubbleContent>
            </MessageBubble>
            <MessageFooter>Delivered</MessageFooter>
          </MessageContent>
        </Message>

        <AnimatePresence mode="popLayout">
          {step >= 1 ? (
            <Message key="draft" from="assistant">
              <MessageAvatar>
                <Bot />
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>
                  <span className="font-medium text-foreground/70">Assistant</span>
                  <span>Just now</span>
                </MessageHeader>
                <MessageBubble variant="soft">
                  <MessageBubbleContent>
                    <StreamingResponse status="complete" showActions={false}>
                      Absolutely. I’ll keep it concise and lead with what changed.
                    </StreamingResponse>
                  </MessageBubbleContent>
                </MessageBubble>
              </MessageContent>
            </Message>
          ) : null}

          {step >= 2 ? (
            <Message key="follow-up" from="assistant">
              <MessageAvatar placeholder />
              <MessageContent>
                <MessageBubble variant="soft">
                  <MessageBubbleContent>
                    <StreamingResponse status="complete" showActions={false}>
                      Do you want the tone to feel more technical or more customer-facing?
                    </StreamingResponse>
                  </MessageBubbleContent>
                </MessageBubble>
              </MessageContent>
            </Message>
          ) : null}
        </AnimatePresence>
      </MessageGroup>

      <div className="flex h-11 items-end justify-center">
        <button
          type="button"
          onClick={replay}
          className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <RotateCcw className="size-3.5" />
          Replay
        </button>
      </div>
    </div>
  );
}
```

### Show More usage

A long assistant message with a compact line-clamped preview and animated disclosure control.

```tsx
"use client";

import { Bot } from "lucide-react";
import {
  MessageBubble,
  MessageBubbleCollapsible,
  MessageBubbleContent,
} from "@/components/agents/message-bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/agents/message";
import { StreamingResponse } from "@/components/agents/streaming-response";

export function MessageBubbleCollapsiblePreview() {
  return (
    <div className="flex h-[410px] w-full max-w-xl items-start px-3 pt-14">
      <Message from="assistant">
        <MessageAvatar>
          <Bot />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>
            <span className="font-medium text-foreground/70">Assistant</span>
            <span>Summary</span>
          </MessageHeader>
          <MessageBubble variant="soft" animateIn={false}>
            <MessageBubbleContent className="max-w-[90%]">
              <StreamingResponse status="complete" showActions={false}>
                <MessageBubbleCollapsible collapsedLines={4}>
                  <p>
                    The release is ready for a focused rollout. The main conversation flow,
                    keyboard navigation, error recovery, and reduced-motion behavior are all
                    covered.
                  </p>
                  <p>
                    I would keep advanced workflow controls out of this version. They add
                    configuration without improving the first-run experience, and the usage
                    data from this release will give us a better basis for those decisions.
                  </p>
                  <p>
                    Before publishing, run the accessibility suite once more and verify the
                    streaming behavior with a long response on a smaller viewport.
                  </p>
                </MessageBubbleCollapsible>
              </StreamingResponse>
            </MessageBubbleContent>
          </MessageBubble>
        </MessageContent>
      </Message>
    </div>
  );
}
```

## API Reference

### MessageBubble

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"outline" \| "solid" \| "danger" \| "ghost" \| "soft" \| "tint"` | `soft` | No | — |
| `align` | `"end" \| "start"` | — | No | Defaults to the surrounding Message alignment when omitted. |
| `animateIn` | `boolean` | `false` | No | Plays the bubble entrance once when this component mounts. |
| `className` | `string` | — | No | — |

### MessageBubbleContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `render` | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | — | No | Replaces the content element while preserving bubble styling. |
| `className` | `string` | — | No | — |

### MessageBubbleGroup

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `spacing` | `"default" \| "compact"` | `compact` | No | — |
| `className` | `string` | — | No | — |

### MessageBubbleCollapsible

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `open` | `boolean` | — | No | — |
| `defaultOpen` | `boolean` | `false` | No | — |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `collapsedLines` | `2 \| 3 \| 4 \| 5 \| 6` | `4` | No | — |
| `moreLabel` | `ReactNode` | `Show more` | No | — |
| `lessLabel` | `ReactNode` | `Show less` | No | — |
| `contentClassName` | `string` | — | No | — |
| `triggerClassName` | `string` | — | No | — |
| `className` | `string` | — | No | — |

