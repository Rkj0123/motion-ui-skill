# Motion UI Skill — Promotional Video Campaign Suite

Automated, deterministic recording and video assembly pipeline for **Motion UI Skill**.

> **Campaign Core Message**: *"Stop giving AI coding agents better prompts. Give them better skills."*  
> **Secondary Message**: *"Same agent. Same prompt. Better UI."*

---

## 📁 System Architecture

```
promo/
├── README.md                  # Complete documentation
├── playwright.config.ts       # 1920x1080 60fps Playwright camera config
├── tests/                     # Playwright deterministic camera scenarios
│   ├── 01-before.spec.ts
│   ├── 02-install.spec.ts
│   ├── 03-after.spec.ts
│   ├── 04-components.spec.ts
│   ├── 05-agent-ui.spec.ts
│   ├── 06-styles.spec.ts
│   └── 07-finale.spec.ts
├── scripts/                   # Automation runners
│   ├── record.js              # Playwright virtual camera orchestrator
│   ├── build_videos.py        # FFmpeg assembly, formats, GIF & copy
│   └── run_all.js             # End-to-end single command runner
├── src/                       # Production promo routes
│   ├── App.tsx                # Client-side router & overview switcher
│   ├── main.tsx
│   ├── index.css              # Tailwind base + custom styling
│   ├── components/            # Promotional HUD overlays
│   └── pages/                 # Full-scale 1080p demo environments
│       ├── BeforeDashboard.tsx      # /promo/before
│       ├── InstallShowcase.tsx      # /promo/install
│       ├── AfterDashboard.tsx       # /promo/after
│       ├── ComponentShowcase.tsx    # /promo/components
│       ├── AgentUiShowcase.tsx      # /promo/agent-ui
│       ├── StylePresetShowcase.tsx  # /promo/styles
│       └── FinaleCard.tsx           # /promo/finale
└── output/                    # Generated campaign deliverables
    ├── raw/                   # Raw Playwright 1080p screen captures (.webm)
    ├── final/                 # Rendered video deliverables
    │   ├── motion-ui-launch-16x9.mp4   # 1920x1080 landscape master (~29s)
    │   ├── motion-ui-launch-9x16.mp4   # 1080x1920 vertical format (~29s)
    │   └── motion-ui-launch-square.mp4 # 1080x1080 square format (~29s)
    ├── thumbnails/            # High-resolution static launch posters
    │   ├── thumbnail-x.png             # 1920x1080 landscape
    │   └── thumbnail-vertical.png      # 1080x1920 vertical
    └── copy/                  # Ready-to-publish social copy
        ├── x-launch.txt
        ├── reddit-launch.txt
        ├── x-followup-before-after.txt
        ├── x-followup-styles.txt
        └── x-followup-agent-ui.txt
```

---

## ⚡ Quick Start & Commands

All campaign operations are automated via `npm` scripts:

```bash
# 1. Install dependencies:
npm run promo:setup

# 2. Preview promo pages interactively in your browser (port 5173):
npm run promo:dev

# 3. Record raw clips with Playwright virtual camera:
npm run promo:record

# 4. Assemble final videos, GIF, posters & copy:
npm run promo:build-video

# 5. One-shot end-to-end regeneration of ALL assets:
npm run promo:all
```

---

## 🎬 Narrative Breakdown (~30 Seconds)

| Timestamp | Scene | Primary Message & Visuals |
| :--- | :--- | :--- |
| **0 – 3s** | **Generic Dashboard** | *"AI can write the code. But the UI still looks... AI-generated."* Baseline static React dashboard. |
| **3 – 6s** | **Install / Activation** | *"Give the agent a UI skill."* Codex CLI command adding `Rkj0123/motion-ui-skill`. |
| **6 – 11s** | **Motion UI Dashboard** | *"Same agent. Same prompt. Better UI."* Dynamic Island status, animated sparklines, spring cards. |
| **11 – 17s** | **Component Showcase** | *"130 production-ready components."* Dynamic Island, Glow Button, Morphing Search, Metric Card. |
| **17 – 22s** | **AI-Agent Surfaces** | *"Built for AI interfaces."* Streaming markdown responses, live reasoning stream, tool approval gates. |
| **22 – 26s** | **Style Presets** | *"6 visual styles."* One unified dashboard cycling through Minimal, Origin, Enterprise, Glow, iOS, Brutalist. |
| **26 – 30s** | **Finale Card** | *"Motion UI Skill · Give your coding agent better UI instincts."* `github.com/Rkj0123/motion-ui-skill` · MIT. |

---

## 🚀 Deliverables & Publishing Guidelines

The following files in `promo/output/` are ready to publish:

1. **X / Twitter / Reddit**:
   - Video: `promo/output/final/motion-ui-launch-16x9.mp4` (or `motion-ui-launch-square.mp4`)
   - Copy: `promo/output/copy/x-launch.txt` or `promo/output/copy/reddit-launch.txt`
   - Poster: `promo/output/thumbnails/thumbnail-x.png`
2. **TikTok / Reels / YouTube Shorts**:
   - Video: `promo/output/final/motion-ui-launch-9x16.mp4`
   - Poster: `promo/output/thumbnails/thumbnail-vertical.png`
3. **GitHub README**:
   - Asset: `assets/motion-ui-comparison.gif` & `assets/motion-ui-comparison.mp4` (embedded in README)
