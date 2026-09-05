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
    expected_categories = {"motion": 80, "agents": 17, "blocks": 33}
    actual_categories = {
        category: sum(item.get("category") == category for item in components.values())
        for category in expected_categories
    }
    require(len(components) == 130, len(components))
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
        if path.is_file() and not {".git", "node_modules", "__pycache__"}.intersection(path.parts)
    ).lower()
    for name in ("README.md", "SKILL.md"):
        require(b"\r" not in (ROOT / name).read_bytes(), f"carriage return in {name}")
    for forbidden in FORBIDDEN:
        require(forbidden not in text, forbidden)

    row_sets = []
    for name in ("README.md", "SKILL.md"):
        content = (ROOT / name).read_text(encoding="utf-8")
        rows = re.findall(
            r"^\| \*\*(.+?)\*\* \| `([^`]+)` \| .*? \| \[`[^`]+`\]\(([^)]+)\) \| \[Guide\]\(([^)]+)\) \|",
            content,
            re.M,
        )
        require(len(rows) == 130, (name, len(rows)))
        require({slug for _, slug, _, _ in rows} == set(listed), name)
        for _, _, primary, doc in rows:
            require((ROOT / primary).is_file(), primary)
            require((ROOT / doc).is_file(), doc)
        row_sets.append(rows)
    require(row_sets[0] == row_sets[1], "README and SKILL tables differ")
    require((ROOT / "agents/openai.yaml").is_file(), "agents/openai.yaml")
    require((ROOT / "references/codex-install.md").is_file(), "references/codex-install.md")
    require((ROOT / "prompts/install-motion-ui.md").is_file(), "prompts/install-motion-ui.md")
    require((ROOT / "scripts/test_release.py").is_file(), "scripts/test_release.py")
    require((ROOT / "evals/catalog_eval.py").is_file(), "evals/catalog_eval.py")
    print("Motion UI skill integrity: PASS (130 components, 80/17/33 categories)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
