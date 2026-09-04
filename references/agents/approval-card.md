---
title: "Approval Card"
description: "A human-in-the-loop decision surface for approvals, single or multiple-choice questions, custom responses, and multi-step review flows."
category: "AI Agents"
publishedAt: "2026-08-01"
updatedAt: "2026-08-28"
documentation: "references/agents/approval-card.md"
markdown: "references/agents/approval-card.md"
license: "MIT"
---

# Approval Card

> A human-in-the-loop decision surface for approvals, single or multiple-choice questions, custom responses, and multi-step review flows.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py approval-card --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Questions usage

Guides the user through single-choice, multiple-choice, and freeform questions before returning the completed response to the agent.

```tsx
"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ApprovalCard,
  type ApprovalCardAnswers,
  type ApprovalCardQuestion,
  type ApprovalCardStatus,
} from "@/components/agents/approval-card";

const QUESTIONS: ApprovalCardQuestion[] = [
  {
    id: "scope",
    title: "How focused should the first release be?",
    options: [
      { value: "focused", label: "A focused starter set" },
      { value: "broad", label: "A broader collection" },
      { value: "flagship", label: "One flagship experience" },
    ],
    allowCustom: true,
    customPlaceholder: "Describe another scope…",
  },
  {
    id: "checks",
    title: "Which checks should block publishing?",
    description: "Select every check the agent must pass before it can continue.",
    multiple: true,
    options: [
      { value: "types", label: "Type safety" },
      { value: "accessibility", label: "Accessibility" },
      { value: "registry", label: "Registry validation" },
    ],
  },
  {
    id: "preserve",
    title: "Anything the agent should preserve?",
    allowCustom: true,
    customPlaceholder: "Add a final constraint…",
  },
];

function QuestionFlow() {
  const [status, setStatus] = useState<ApprovalCardStatus>("pending");
  const timer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const submit = (_answers: ApprovalCardAnswers) => {
    setStatus("submitting");
    timer.current = window.setTimeout(() => setStatus("answered"), 750);
  };

  return (
    <ApprovalCard
      questions={QUESTIONS}
      status={status}
      onSubmit={submit}
      result="Three responses sent to the agent."
    />
  );
}

export function ApprovalCardQuestionPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[470px] w-full max-w-lg">
      <QuestionFlow key={run} />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
```

### Review and Approve usage

Pauses an agent workflow for approval, revision, or rejection and collapses into the recorded decision.

```tsx
"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ApprovalCard,
  type ApprovalCardStatus,
} from "@/components/agents/approval-card";

function ReviewFlow() {
  const [status, setStatus] = useState<ApprovalCardStatus>("pending");
  const timer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const finish = (next: ApprovalCardStatus) => {
    setStatus("submitting");
    timer.current = window.setTimeout(() => setStatus(next), 700);
  };

  return (
    <ApprovalCard
      title="Publish the component update?"
      description="The agent has prepared the release and is waiting for your decision."
      status={status}
      onApprove={() => finish("approved")}
      onRequestChanges={() => finish("changes-requested")}
      onReject={() => finish("rejected")}
      result={
        status === "approved"
          ? "Publishing was approved."
          : status === "changes-requested"
            ? "The agent will wait for revision notes."
            : "Publishing was declined."
      }
    >
      <dl className="grid gap-1 text-xs">
        <div className="flex items-center justify-between gap-4 py-1">
          <dt className="text-muted-foreground">Release</dt>
          <dd className="font-mono text-foreground/80">approval-card</dd>
        </div>
        <div className="flex items-center justify-between gap-4 py-1">
          <dt className="text-muted-foreground">Checks</dt>
          <dd className="text-foreground/80">4 passed</dd>
        </div>
        <div className="flex items-center justify-between gap-4 py-1">
          <dt className="text-muted-foreground">Visibility</dt>
          <dd className="text-foreground/80">Public registry</dd>
        </div>
      </dl>
    </ApprovalCard>
  );
}

export function ApprovalCardReviewPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[360px] w-full max-w-lg">
      <ReviewFlow key={run} />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
```

## API Reference

### ApprovalCard

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `title` | `ReactNode` | `Approval required` | No | — |
| `description` | `ReactNode` | — | No | — |
| `questions` | `ApprovalCardQuestion[]` | `[]` | No | — |
| `status` | `"pending" \| "submitting" \| "approved" \| "rejected" \| "changes-requested" \| "answered"` | `pending` | No | — |
| `answers` | `ApprovalCardAnswers` | — | No | — |
| `defaultAnswers` | `ApprovalCardAnswers` | `{}` | No | — |
| `onAnswersChange` | `((answers: ApprovalCardAnswers) => void)` | — | No | — |
| `step` | `number` | — | No | — |
| `defaultStep` | `number` | `0` | No | — |
| `onStepChange` | `((step: number) => void)` | — | No | — |
| `onSubmit` | `((answers: ApprovalCardAnswers) => void)` | — | No | — |
| `onApprove` | `(() => void)` | — | No | — |
| `onReject` | `(() => void)` | — | No | — |
| `onRequestChanges` | `(() => void)` | — | No | — |
| `onDismiss` | `(() => void)` | — | No | — |
| `approveLabel` | `ReactNode` | `Approve` | No | — |
| `submitLabel` | `ReactNode` | `Submit response` | No | — |
| `result` | `ReactNode` | — | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
