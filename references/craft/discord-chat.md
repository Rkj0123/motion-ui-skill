---
title: "Discord Chat"
description: "Dark Discord channel with server header, threaded messages, avatars, timestamps, and a send input. Community product mockups in one card."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/discord-chat.md"
markdown: "references/craft/discord-chat.md"
license: "MIT"
---

# Discord Chat

> Dark Discord channel with server header, threaded messages, avatars, timestamps, and a send input. Community product mockups in one card.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py discord-chat --dest ./src
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

import { DiscordChatCard } from "@/components/socials/discord-chat-card";

export function DiscordChatCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DiscordChatCard />
    </div>
  );
}
```

## API Reference

### DiscordChatCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
