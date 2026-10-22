#!/usr/bin/env python3
import os
import sys
import subprocess
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
PROMO = ROOT / "promo"
RAW_DIR = PROMO / "output" / "raw"
FINAL_DIR = PROMO / "output" / "final"
THUMB_DIR = PROMO / "output" / "thumbnails"
COPY_DIR = PROMO / "output" / "copy"
ASSETS_DIR = ROOT / "assets"

FINAL_DIR.mkdir(parents=True, exist_ok=True)
THUMB_DIR.mkdir(parents=True, exist_ok=True)
COPY_DIR.mkdir(parents=True, exist_ok=True)
ASSETS_DIR.mkdir(parents=True, exist_ok=True)

def run_cmd(cmd):
    print("Running:", " ".join(cmd[:6]), "...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("ERROR:", res.stderr)
        raise RuntimeError(f"Command failed: {res.stderr}")
    return res

def build_16x9():
    print("\n🎬 1. Assembling 16:9 Master Video (30s, 1920x1080)...")
    temp_dir = PROMO / "output" / "temp_segments"
    temp_dir.mkdir(parents=True, exist_ok=True)

    # Segment specs: (filename, start_time, duration)
    # Total = 3 + 3 + 5 + 6 + 5 + 4 + 4 = 30s
    segments = [
        ("01-before.webm", "00:00:00.500", "3.0"),
        ("02-install.webm", "00:00:01.500", "3.0"),
        ("03-after.webm", "00:00:01.000", "5.0"),
        ("04-components.webm", "00:00:00.000", "6.0"),
        ("05-agent-ui.webm", "00:00:00.000", "5.0"),
        ("06-styles.webm", "00:00:00.000", "4.0"),
        ("07-finale.webm", "00:00:00.000", "4.0"),
    ]

    concat_list = []
    for idx, (fname, start, dur) in enumerate(segments):
        in_path = RAW_DIR / fname
        seg_out = temp_dir / f"seg_{idx:02d}.mp4"
        cmd = [
            "ffmpeg", "-y",
            "-ss", start,
            "-t", dur,
            "-i", str(in_path),
            "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30",
            "-c:v", "libx264",
            "-preset", "fast",
            "-crf", "18",
            "-pix_fmt", "yuv420p",
            str(seg_out)
        ]
        run_cmd(cmd)
        concat_list.append(f"file \x27{seg_out.resolve()}\x27")

    concat_file = temp_dir / "concat.txt"
    concat_file.write_text("\n".join(concat_list))

    out_16x9 = FINAL_DIR / "motion-ui-launch-16x9.mp4"
    cmd_concat = [
        "ffmpeg", "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", str(concat_file),
        "-c", "copy",
        str(out_16x9)
    ]
    run_cmd(cmd_concat)
    shutil.rmtree(temp_dir, ignore_errors=True)

    size_mb = out_16x9.stat().st_size / (1024 * 1024)
    print(f"✅ 16:9 Master Created: {out_16x9} ({size_mb:.2f} MB)")
    return out_16x9

def build_vertical(master_16x9):
    print("\n📱 2. Assembling 9:16 Vertical Video (30s, 1080x1920)...")
    out_9x16 = FINAL_DIR / "motion-ui-launch-9x16.mp4"

    # Split into background (blurred, scaled to fill 1080x1920) and foreground (sharp 1080x608 in center)
    filter_complex = (
        "[0:v]split=2[bg_in][fg_in];"
        "[bg_in]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=20:5[bg];"
        "[fg_in]scale=1080:608[fg];"
        "[bg][fg]overlay=0:(1920-608)/2[v]"
    )

    cmd = [
        "ffmpeg", "-y",
        "-i", str(master_16x9),
        "-filter_complex", filter_complex,
        "-map", "[v]",
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "19",
        "-pix_fmt", "yuv420p",
        str(out_9x16)
    ]
    run_cmd(cmd)
    size_mb = out_9x16.stat().st_size / (1024 * 1024)
    print(f"✅ 9:16 Vertical Created: {out_9x16} ({size_mb:.2f} MB)")
    return out_9x16

def build_square(master_16x9):
    print("\n🔲 3. Assembling 1:1 Square Video (30s, 1080x1080)...")
    out_square = FINAL_DIR / "motion-ui-launch-square.mp4"

    filter_complex = (
        "[0:v]split=2[bg_in][fg_in];"
        "[bg_in]scale=1080:1080:force_original_aspect_ratio=increase,crop=1080:1080,boxblur=18:5[bg];"
        "[fg_in]scale=1080:608[fg];"
        "[bg][fg]overlay=0:(1080-608)/2[v]"
    )

    cmd = [
        "ffmpeg", "-y",
        "-i", str(master_16x9),
        "-filter_complex", filter_complex,
        "-map", "[v]",
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "19",
        "-pix_fmt", "yuv420p",
        str(out_square)
    ]
    run_cmd(cmd)
    size_mb = out_square.stat().st_size / (1024 * 1024)
    print(f"✅ 1:1 Square Created: {out_square} ({size_mb:.2f} MB)")
    return out_square

def build_readme_asset():
    print("\n🖼️ 4. Generating Before -> After README Asset (GIF & MP4)...")
    before_clip = RAW_DIR / "01-before.webm"
    after_clip = RAW_DIR / "03-after.webm"

    temp_dir = PROMO / "output" / "temp_readme"
    temp_dir.mkdir(parents=True, exist_ok=True)

    # 3s Before + 3s After
    seg_before = temp_dir / "b.mp4"
    seg_after = temp_dir / "a.mp4"

    run_cmd([
        "ffmpeg", "-y", "-ss", "00:00:00.500", "-t", "3.0",
        "-i", str(before_clip),
        "-vf", "scale=1280:720,fps=24",
        "-c:v", "libx264", "-crf", "22", "-pix_fmt", "yuv420p",
        str(seg_before)
    ])

    run_cmd([
        "ffmpeg", "-y", "-ss", "00:00:01.000", "-t", "3.5",
        "-i", str(after_clip),
        "-vf", "scale=1280:720,fps=24",
        "-c:v", "libx264", "-crf", "22", "-pix_fmt", "yuv420p",
        str(seg_after)
    ])

    concat_file = temp_dir / "list.txt"
    concat_file.write_text(f"file \x27{seg_before.resolve()}\x27\nfile \x27{seg_after.resolve()}\x27")

    out_mp4 = ASSETS_DIR / "motion-ui-comparison.mp4"
    run_cmd([
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", str(concat_file),
        "-c", "copy",
        str(out_mp4)
    ])

    out_gif = ASSETS_DIR / "motion-ui-comparison.gif"
    palette = temp_dir / "palette.png"
    run_cmd([
        "ffmpeg", "-y", "-i", str(out_mp4),
        "-vf", "fps=15,scale=960:-1:flags=lanczos,palettegen=stats_mode=diff",
        str(palette)
    ])
    run_cmd([
        "ffmpeg", "-y", "-i", str(out_mp4), "-i", str(palette),
        "-lavfi", "fps=15,scale=960:-1:flags=lanczos [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=3",
        str(out_gif)
    ])

    shutil.rmtree(temp_dir, ignore_errors=True)
    print(f"✅ README Asset Created: {out_gif} ({(out_gif.stat().st_size / (1024*1024)):.2f} MB)")
    print(f"✅ README Video Created: {out_mp4} ({(out_mp4.stat().st_size / (1024*1024)):.2f} MB)")

def build_thumbnails():
    print("\n🎨 5. Generating Promotional Static Thumbnails...")
    after_frame = PROMO / "output" / "snapshots" / "03-after.png"
    thumb_x = THUMB_DIR / "thumbnail-x.png"
    thumb_vert = THUMB_DIR / "thumbnail-vertical.png"

    # 16:9 Landscape Thumbnail
    run_cmd([
        "ffmpeg", "-y", "-i", str(after_frame),
        "-vf", "scale=1920:1080",
        str(thumb_x)
    ])

    # 9:16 Vertical Thumbnail
    filter_vert = (
        "[0:v]split=2[bg_in][fg_in];"
        "[bg_in]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=20:5[bg];"
        "[fg_in]scale=1080:608[fg];"
        "[bg][fg]overlay=0:(1920-608)/2"
    )
    run_cmd([
        "ffmpeg", "-y", "-i", str(after_frame),
        "-filter_complex", filter_vert,
        str(thumb_vert)
    ])

    print(f"✅ Landscape Thumbnail: {thumb_x}")
    print(f"✅ Vertical Thumbnail: {thumb_vert}")

def build_copy():
    print("\n✍️ 6. Generating Promotional Social Copy...")

    x_launch = """AI coding agents are great at writing React.
Their UI taste can be another story.

Stop giving coding agents better prompts.
Give them better skills.

Motion UI Skill adds 130 production-ready animated components, 6 aesthetic presets, and AI-agent surfaces directly into your workspace:

Dynamic Island, Morphing Search, Tool Approval Gates, Streaming Tokens & physics-calibrated springs.

Works offline in Codex & Google Antigravity.

https://github.com/Rkj0123/motion-ui-skill
"""
    (COPY_DIR / "x-launch.txt").write_text(x_launch.strip())

    reddit_launch = """[Show / Experiment] I gave my coding agent an offline UI skill instead of writing 500-word design prompts (130 components, 6 styles)

Hey everyone,

Like many of you, I have been using Codex and Google Antigravity to build full-stack apps. The agents write solid TypeScript logic, but every dashboard ends up looking like the exact same generic AI template: rigid borders, static cards, and zero tactile feedback.

I tried an experiment: instead of stuffing my prompts with complex CSS design instructions, what if we gave the agent a localized, offline Agent Skill with curated components, physics curves, and design tokens?

The result is Motion UI Skill:
- 130 production-ready components (80 motion primitives, 17 AI-agent surfaces, 33 blocks)
- 6 visual style presets: Minimal (shadcn), Origin (Cal.com), Enterprise (ReUI), Glow (ibelick), iOS (Expo), Brutalist
- Calibrated spring tokens in `lib/ease.ts` (SPRING_PRESS, SPRING_BOUNCE, SPRING_LAYOUT)
- Offline-first: zero remote registry calls needed, 100% copy-paste or CLI installable

Check out the before vs after comparison and let me know your thoughts on agent skill architectures:
GitHub: https://github.com/Rkj0123/motion-ui-skill
"""
    (COPY_DIR / "reddit-launch.txt").write_text(reddit_launch.strip())

    x_before_after = """Same agent.
Same prompt.
Better UI.

Here is what happens when you give an AI coding agent Motion UI Skill instead of generic Tailwind defaults.

Notice the difference in interaction design:
- Dynamic Island status
- Calibrated spring cards
- Stateful tool approvals
- Smooth layout morphing

Repo: https://github.com/Rkj0123/motion-ui-skill
"""
    (COPY_DIR / "x-followup-before-after.txt").write_text(x_before_after.strip())

    x_styles = """One component library. 6 calibrated design aesthetics:

1. Minimal (shadcn / Vercel monochrome)
2. Origin (Coss / Cal.com high-craft)
3. Enterprise (KeenThemes ReUI dense hierarchy)
4. Glow (ibelick luminous radial beams)
5. iOS (Apple liquid glass & squircle bounce)
6. Brutalist (Neo-brutalist high contrast)

Switch aesthetics with a single token:
https://github.com/Rkj0123/motion-ui-skill
"""
    (COPY_DIR / "x-followup-styles.txt").write_text(x_styles.strip())

    x_agent_ui = """Most component libraries were designed before LLM agents existed.

Motion UI Skill includes 17 dedicated AI-agent surfaces:
- Streaming markdown with citations
- Human-in-the-loop tool approvals
- Live reasoning activity streams
- Dynamic prompt composers

Build modern agentic apps faster:
https://github.com/Rkj0123/motion-ui-skill
"""
    (COPY_DIR / "x-followup-agent-ui.txt").write_text(x_agent_ui.strip())

    print("✅ All 5 social copy files created in promo/output/copy/")

def main():
    m16 = build_16x9()
    build_vertical(m16)
    build_square(m16)
    build_readme_asset()
    build_thumbnails()
    build_copy()
    print("\n🎉 CAMPAIGN ASSET PRODUCTION COMPLETE!")

if __name__ == "__main__":
    main()
