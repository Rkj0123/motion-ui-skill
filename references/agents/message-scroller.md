---
title: "Message Scroller"
description: "A reader-aware conversation viewport that follows streamed output at the live edge and releases control when the reader moves away."
category: "AI Agents"
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
documentation: "references/agents/message-scroller.md"
markdown: "references/agents/message-scroller.md"
license: "MIT"
---

# Message Scroller

> A reader-aware conversation viewport that follows streamed output at the live edge and releases control when the reader moves away.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py message-scroller --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import {
  ChatPreview,
  type ChatPreviewMessage,
} from "@/components/previews/agents/chat-preview";

const MESSAGES: ChatPreviewMessage[] = [
  {
    id: "scope-question",
    from: "user",
    content: "What should the first release include?",
  },
  {
    id: "scope-answer",
    from: "assistant",
    content: "Start with the smallest workflow that still feels complete.",
  },
  {
    id: "states-question",
    from: "user",
    content: "Include streaming and recovery states too.",
  },
  {
    id: "states-answer",
    from: "assistant",
    content: "Yes. Those states make the first version feel dependable.",
  },
  {
    id: "evidence-question",
    from: "user",
    content: "How should we present tool results?",
  },
  {
    id: "evidence-answer",
    from: "assistant",
    content: "Keep results close to the action that produced them.",
  },
  {
    id: "approval-question",
    from: "user",
    content: "What about actions that need confirmation?",
  },
  {
    id: "approval-answer",
    from: "assistant",
    content: "Pause the run, explain the impact, and ask before continuing.",
  },
  {
    id: "summary-question",
    from: "user",
    content: "Can the transcript stay easy to navigate?",
  },
  {
    id: "summary-answer",
    from: "assistant",
    content: "Use the rail to jump between turns without losing your place.",
  },
];

export function MessageScrollerPreview() {
  return (
    <ChatPreview
      initialMessages={MESSAGES}
      showRail
      reply="The viewport follows while you stay at the live edge. Scroll upward while this response streams and it will leave your reading position alone."
      placeholder="Send another message…"
    />
  );
}
```

## API Reference

### MessageScroller

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `followOutput` | `boolean` | `true` | No | Keep streamed output pinned while the reader remains near the end. |
| `followThreshold` | `number` | `56` | No | Distance from the end that still counts as following the output. |
| `smooth` | `boolean` | `true` | No | Smoothly follow growing content. |
| `onFollowChange` | `((following: boolean) => void)` | — | No | Reports when the reader leaves or returns to the live edge. |
| `label` | `string` | `Conversation` | No | Accessible label for the scrollable transcript. |
| `busy` | `boolean` | — | No | Marks the transcript as waiting for more streamed content. |
| `navigation` | `"rail"` | — | No | Adds a compact rail for navigating between rendered Message rows. |
| `navigationLabel` | `string` | `Message navigation` | No | Accessible label for the optional message navigation rail. |
| `viewportClassName` | `string` | — | No | — |
| `contentClassName` | `string` | — | No | — |
| `railClassName` | `string` | — | No | — |
| `viewportRef` | `Ref<HTMLElement>` | — | No | — |
| `viewportProps` | `Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "ref" \| "className" \| "children">` | — | No | — |
| `contentProps` | `Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref" \| "className" \| "children">` | — | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
