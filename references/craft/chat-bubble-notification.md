---
title: "Chat Bubble Notification"
description: "Messenger-style bubble — small avatar, sender name, rounded message bubble with a flat tail corner."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/chat-bubble-notification.md"
markdown: "references/craft/chat-bubble-notification.md"
license: "MIT"
---

# Chat Bubble Notification

> Messenger-style bubble — small avatar, sender name, rounded message bubble with a flat tail corner.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chat-bubble-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ChatBubbleNotificationBanner } from "@/components/notifications/chat-bubble-notification-banner";

export function ChatBubbleNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ChatBubbleNotificationBanner />
    </div>
  );
}
```

## API Reference

### ChatBubbleNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
