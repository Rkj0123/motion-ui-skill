#!/usr/bin/env python3
"""Fast, dependency-free integrity gate for the Motion UI skill package."""

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
FORBIDDEN = ("b" + "eui", "starc" + "007/ui-components")


def main() -> int:
    catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
    components = catalog.get("components", {})
    expected_categories = {"motion": 80, "agents": 17, "blocks": 33}
    actual_categories = {
        category: sum(item.get("category") == category for item in components.values())
        for category in expected_categories
    }
    assert len(components) == 130, len(components)
    assert actual_categories == expected_categories, actual_categories
    assert (ROOT / "SKILL.md").is_file()
    assert (ROOT / "lib/styles.ts").is_file()
    assert (ROOT / "references/guides/style-presets.md").is_file()
    assert not list((ROOT / "skills").rglob("SKILL.md"))
    assert not list((ROOT / ".agents").rglob("SKILL.md"))

    listed = []
    for slug, item in components.items():
        listed.append(slug)
        for field in ("component_files", "util_files", "preview_files"):
            for relative in item.get(field, []):
                assert (ROOT / relative).is_file(), relative
        assert (ROOT / item["doc_path"]).is_file(), item["doc_path"]

    text = "\n".join(
        path.read_text(encoding="utf-8", errors="ignore")
        for path in ROOT.rglob("*")
        if path.is_file() and not {".git", "node_modules"}.intersection(path.parts)
    ).lower()
    for forbidden in FORBIDDEN:
        assert forbidden not in text, forbidden

    row_sets = []
    for name in ("README.md", "SKILL.md"):
        content = (ROOT / name).read_text(encoding="utf-8")
        rows = re.findall(
            r"^\| \*\*(.+?)\*\* \| `([^`]+)` \| .*? \| \[`[^`]+`\]\(([^)]+)\) \|",
            content,
            re.M,
        )
        assert len(rows) == 130, (name, len(rows))
        assert {slug for _, slug, _ in rows} == set(listed), name
        row_sets.append(rows)
    assert row_sets[0] == row_sets[1]
    assert (ROOT / "agents/openai.yaml").is_file()
    assert (ROOT / "references/codex-install.md").is_file()
    assert (ROOT / "prompts/install-motion-ui.md").is_file()
    print("Motion UI skill integrity: PASS (130 components, 80/17/33 categories)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
