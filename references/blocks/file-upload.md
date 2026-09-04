---
title: "File Upload"
description: "Two file upload patterns: an attachment workspace for mixed files, links, audio and media, plus a progress queue with retry and removal."
category: "Blocks"
publishedAt: "2026-06-18"
updatedAt: "2026-08-20"
documentation: "references/blocks/file-upload.md"
markdown: "references/blocks/file-upload.md"
license: "MIT"
---

# File Upload

> Two file upload patterns: an attachment workspace for mixed files, links, audio and media, plus a progress queue with retry and removal.

## Install

### Attachment Upload

A mixed attachment workspace with a dropzone, staggered file and image rows, animated upload, success, failure, retry and removal feedback, shared-layout image previews, and an audio waveform.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py attachment-upload --dest ./src
```

### Upload Queue

A drag-and-drop upload queue with progress rows, upload states, retry, and removal.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py file-upload --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

### Attachment Upload usage

A mixed attachment workspace with a dropzone, staggered file and image rows, animated upload, success, failure, retry and removal feedback, shared-layout image previews, and an audio waveform.

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  AttachmentUpload,
  type AttachmentUploadItem,
} from "@/components/motion/attachment-upload";

const INITIAL_ITEMS: AttachmentUploadItem[] = [
  {
    id: "brief",
    name: "launch-brief.pdf",
    kind: "file",
    size: 32_400_000,
    href: "data:application/pdf,Motion UI%20launch%20brief",
    status: "failed",
    error: "Upload failed",
  },
  {
    id: "flowers",
    name: "orange-flowers.jpg",
    kind: "image",
    size: 9_800_000,
    previewUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "voice-note",
    name: "launch-note.m4a",
    kind: "audio",
    currentTime: 12,
    duration: 48,
  },
];

export function AttachmentUploadPreview() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [playingId, setPlayingId] = useState<string>();
  const retryTimersRef = useRef<number[]>([]);

  useEffect(
    () => () => {
      for (const timer of retryTimersRef.current) {
        window.clearTimeout(timer);
      }
    },
    [],
  );

  useEffect(() => {
    if (!playingId) return;

    const timer = window.setInterval(() => {
      setItems((current) =>
        current.map((item) => {
          if (item.id !== playingId || !item.duration) return item;
          const nextTime = Math.min(
            item.duration,
            (item.currentTime ?? 0) + 1,
          );
          return { ...item, currentTime: nextTime };
        }),
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, [playingId]);

  useEffect(() => {
    if (!playingId) return;
    const playingItem = items.find((item) => item.id === playingId);
    if (
      playingItem?.duration &&
      (playingItem.currentTime ?? 0) >= playingItem.duration
    ) {
      setPlayingId(undefined);
    }
  }, [items, playingId]);

  return (
    <div className="w-full max-w-2xl px-3 py-6 sm:px-6">
      <AttachmentUpload
        value={items}
        onValueChange={setItems}
        onRetry={(retryItem) => {
          setItems((current) =>
            current.map((item) =>
              item.id === retryItem.id
                ? { ...item, status: "uploading", error: undefined }
                : item,
            ),
          );

          const completeTimer = window.setTimeout(() => {
            setItems((current) =>
              current.map((item) =>
                item.id === retryItem.id
                  ? { ...item, status: "complete" }
                  : item,
              ),
            );
          }, 900);
          const readyTimer = window.setTimeout(() => {
            setItems((current) =>
              current.map((item) =>
                item.id === retryItem.id
                  ? { ...item, status: "idle" }
                  : item,
              ),
            );
          }, 1900);
          retryTimersRef.current.push(completeTimer, readyTimer);
        }}
        playingId={playingId}
        onAudioToggle={(item) => {
          setPlayingId((current) =>
            current === item.id ? undefined : item.id,
          );
        }}
        attachmentsLabel="Attachments:"
      />
    </div>
  );
}
```

### Upload Queue usage

A drag-and-drop upload queue with progress rows, upload states, retry, and removal.

```tsx
"use client";

import { RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FileUpload,
  type FileUploadItem,
  type FileUploadVariant,
} from "@/components/motion/file-upload";

const initialItems: FileUploadItem[] = [
  {
    id: "brand-assets",
    name: "brand-assets.zip",
    size: 18_400_000,
    type: "application/zip",
    progress: 100,
    status: "success",
  },
  {
    id: "release-video",
    name: "release-cut.mov",
    size: 84_200_000,
    type: "video/quicktime",
    progress: 58,
    status: "uploading",
  },
  {
    id: "contracts",
    name: "vendor-contract.pdf",
    size: 2_800_000,
    type: "application/pdf",
    progress: 32,
    status: "error",
    error: "Connection lost",
  },
];

const variants: { id: FileUploadVariant; label: string }[] = [
  { id: "centered", label: "Centered" },
  { id: "default", label: "Row" },
];

export function FileUploadPreview() {
  const [items, setItems] = useState(initialItems);
  const [variant, setVariant] = useState<FileUploadVariant>("centered");
  const timersRef = useRef<Map<string, ReturnType<typeof setInterval>>>(
    new Map(),
  );

  const stopUpload = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (!timer) return;
    clearInterval(timer);
    timersRef.current.delete(id);
  }, []);

  const startUpload = useCallback(
    (id: string) => {
      stopUpload(id);

      const timer = setInterval(() => {
        setItems((current) => {
          const target = current.find((item) => item.id === id);
          if (target?.status !== "uploading") {
            stopUpload(id);
            return current;
          }

          const nextProgress = Math.min(
            100,
            (target.progress ?? 0) + 7 + Math.random() * 12,
          );

          if (nextProgress >= 100) {
            stopUpload(id);
          }

          return current.map((item) =>
            item.id === id
              ? {
                  ...item,
                  progress: nextProgress,
                  status: nextProgress >= 100 ? "success" : "uploading",
                }
              : item,
          );
        });
      }, 520);

      timersRef.current.set(id, timer);
    },
    [stopUpload],
  );

  useEffect(() => {
    startUpload("release-video");

    return () => {
      for (const timer of timersRef.current.values()) {
        clearInterval(timer);
      }
      timersRef.current.clear();
    };
  }, [startUpload]);

  return (
    <div className="flex min-h-[30rem] w-full items-center justify-center">
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-background p-3">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Upload package
            </p>
            <p className="text-xs text-muted-foreground">
              {items.filter((item) => item.status === "success").length} of{" "}
              {items.length} files ready
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex rounded-full border border-border bg-muted p-1">
              {variants.map((entry) => {
                const selected = entry.id === variant;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setVariant(entry.id)}
                    data-selected={selected}
                    className="h-7 rounded-full px-3 text-xs font-medium text-muted-foreground transition-[background-color,color,transform] duration-150 hover:text-foreground active:scale-95 data-[selected=true]:bg-background data-[selected=true]:text-foreground"
                  >
                    {entry.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                for (const item of items) {
                  stopUpload(item.id);
                }
                setItems(initialItems);
                startUpload("release-video");
              }}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground active:scale-95"
              aria-label="Reset upload queue"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <FileUpload
          value={items}
          variant={variant}
          onValueChange={setItems}
          onFilesAdded={(added) => {
            for (const item of added) {
              startUpload(item.id);
            }
          }}
          onRetry={(item) => startUpload(item.id)}
          onRemove={(item) => stopUpload(item.id)}
          maxFiles={5}
          title={variant === "centered" ? "Drop files to upload" : "Drop release files"}
          description="PDF, images, video or zipped assets"
        />
      </div>
    </div>
  );
}
```

## API Reference

### AttachmentUpload

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `AttachmentUploadItem[]` | — | No | — |
| `defaultValue` | `AttachmentUploadItem[]` | — | No | — |
| `onValueChange` | `((items: AttachmentUploadItem[]) => void)` | — | No | — |
| `onFilesAdded` | `((items: AttachmentUploadItem[], files: File[]) => void)` | — | No | — |
| `onFilesRejected` | `((files: File[], reason: AttachmentRejectReason) => void)` | — | No | — |
| `onRemove` | `((item: AttachmentUploadItem) => void)` | — | No | — |
| `onRetry` | `((item: AttachmentUploadItem) => void)` | — | No | — |
| `playingId` | `string` | — | No | — |
| `onAudioToggle` | `((item: AttachmentUploadItem) => void)` | — | No | — |
| `accept` | `string` | — | No | — |
| `multiple` | `boolean` | `true` | No | — |
| `maxFiles` | `number` | `12` | No | — |
| `maxFileSize` | `number` | `500 * 1024 * 1024` | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `title` | `string` | `Drag and drop or browse files` | No | — |
| `description` | `string` | — | No | — |
| `attachmentsLabel` | `string` | `Attachments` | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `AttachmentUploadClassNames` | — | No | — |

### FileUpload

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `FileUploadItem[]` | — | No | — |
| `defaultValue` | `FileUploadItem[]` | — | No | — |
| `onValueChange` | `((items: FileUploadItem[]) => void)` | — | No | — |
| `onFilesAdded` | `((items: FileUploadItem[], files: File[]) => void)` | — | No | — |
| `onRemove` | `((item: FileUploadItem) => void)` | — | No | — |
| `onRetry` | `((item: FileUploadItem) => void)` | — | No | — |
| `accept` | `string` | — | No | — |
| `multiple` | `boolean` | `true` | No | — |
| `maxFiles` | `number` | — | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `variant` | `"default" \| "centered"` | `default` | No | — |
| `title` | `string` | `Drop files here` | No | — |
| `description` | `string` | `Add files to the upload queue` | No | — |
| `browseLabel` | `string` | `Browse` | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `FileUploadClassNames` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
