#!/usr/bin/env python3
"""Fast, dependency-free integrity gate for the Motion UI skill package."""

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
FORBIDDEN = ("b" + "eui", "starc" + "007/ui-components")


def require(condition, detail):
    if not condition:
        raise RuntimeError(f"Integrity check failed: {detail}")


def main() -> int:
    catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
    components = catalog.get("components", {})
    expected_categories = {"motion": 194, "agents": 28, "blocks": 76, "craft": 319}
    actual_categories = {
        category: sum(item.get("category") == category for item in components.values())
        for category in expected_categories
    }
    require(len(components) == 617, len(components))
    require(actual_categories == expected_categories, actual_categories)
    require((ROOT / "SKILL.md").is_file(), "SKILL.md")
    require((ROOT / "lib/styles.ts").is_file(), "lib/styles.ts")
    require((ROOT / "references/guides/style-presets.md").is_file(), "style guide")
    require(not list((ROOT / "skills").rglob("SKILL.md")), "nested skill entrypoint")
    require(not list((ROOT / ".agents").rglob("SKILL.md")), "nested skill entrypoint")

    listed = []
    for slug, item in components.items():
        listed.append(slug)
        for field in ("component_files", "util_files", "preview_files"):
            for relative in item.get(field, []):
                path = Path(relative)
                require(not path.is_absolute() and ".." not in path.parts, relative)
                require((ROOT / path).is_file(), relative)
        doc_path = Path(item["doc_path"])
        require(not doc_path.is_absolute() and ".." not in doc_path.parts, item["doc_path"])
        require((ROOT / doc_path).is_file(), item["doc_path"])

    text = "\n".join(
        path.read_text(encoding="utf-8", errors="ignore")
        for path in ROOT.rglob("*")
        if path.is_file()
        and not {".git", "node_modules", "__pycache__", "promo"}.intersection(path.parts)
        and path.suffix.lower() in {".md", ".json", ".ts", ".tsx", ".py", ".yaml", ".yml", ".html", ".js", ".css", ".txt"}
    ).lower()
    for name in ("README.md", "SKILL.md"):
        require(b"\r" not in (ROOT / name).read_bytes(), f"carriage return in {name}")
    for forbidden in FORBIDDEN:
        require(forbidden not in text, forbidden)

    content = (ROOT / "SKILL.md").read_text(encoding="utf-8")
    rows = re.findall(
        r"^\| \*\*(.+?)\*\* \| `([^`]+)` \| .*? \| \[`[^`]+`\]\(([^)]+)\) \| \[Guide\]\(([^)]+)\) \|",
        content,
        re.M,
    )
    require(len(rows) == 617, ("SKILL.md", len(rows)))
    require({slug for _, slug, _, _ in rows} == set(listed), "SKILL.md")
    for _, _, primary, doc in rows:
        require((ROOT / primary).is_file(), primary)
        require((ROOT / doc).is_file(), doc)

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    require("https://blacknest.dev/motion/" in readme, "README live site")
    require("SKILL.md" in readme and "catalog.json" in readme, "README catalogue links")
    require(not re.search(r"\.(?:gif|mp4|webm|png)\b", readme, re.I), "README media embed")
    require(not re.search(r"<(?:img|video|source)\b", readme, re.I), "README media embed")
    motion_pin = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))["devDependencies"]["motion"]
    require(motion_pin == "^13.1.0", motion_pin)
    require(f"motion@{motion_pin}" in readme, "README motion pin")
    require((ROOT / "agents/openai.yaml").is_file(), "agents/openai.yaml")
    require((ROOT / "references/codex-install.md").is_file(), "references/codex-install.md")
    require((ROOT / "prompts/install-motion-ui.md").is_file(), "prompts/install-motion-ui.md")
    require((ROOT / "scripts/test_release.py").is_file(), "scripts/test_release.py")
    require((ROOT / "evals/catalog_eval.py").is_file(), "evals/catalog_eval.py")
    print("Motion UI skill integrity: PASS (617 components, 194/28/76/319 categories)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
