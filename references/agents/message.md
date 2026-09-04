---
title: "Message"
description: "Composable conversation primitives for message rows, grouped bubbles, avatars, metadata, live markers, and a mount-only trailing-edge pop-up for newly sent rows."
category: "AI Agents"
publishedAt: "2026-08-02"
updatedAt: "2026-08-02"
documentation: "references/agents/message.md"
markdown: "references/agents/message.md"
license: "MIT"
---

# Message

> Composable conversation primitives for message rows, grouped bubbles, avatars, metadata, live markers, and a mount-only trailing-edge pop-up for newly sent rows.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py message --dest ./src
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

import { ChatPreview } from "@/components/previews/agents/chat-preview";

export function MessagePreview() {
  return (
    <ChatPreview
      showAvatars
      showMetadata
      assistantVariant="ghost"
      placeholder="Ask a follow-up…"
    />
  );
}
```

## API Reference

### Message

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `from` | `"user" \| "assistant"` | — | Yes | — |
| `animateIn` | `boolean` | `false` | No | Plays a trailing-edge pop-up once when this message row mounts. |
| `className` | `string` | — | No | — |

### MessageGroup

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `spacing` | `"default" \| "compact"` | `compact` | No | — |
| `className` | `string` | — | No | — |

### MessageAvatar

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `placeholder` | `boolean` | `false` | No | Keep an empty avatar slot so grouped messages remain aligned. |
| `className` | `string` | — | No | — |

### MessageContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MessageHeader

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MessageFooter

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MessageMarker

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MessageTyping

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | `Responding` | No | — |
| `className` | `string` | — | No | — |

### MessageBubble

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"outline" \| "solid" \| "danger" \| "ghost" \| "soft" \| "tint"` | `soft` | No | — |
| `align` | `"end" \| "start"` | — | No | Defaults to the surrounding Message alignment when omitted. |
| `animateIn` | `boolean` | `false` | No | Plays the bubble entrance once when this component mounts. |
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
