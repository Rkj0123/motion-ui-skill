import assert from "assert";
import { mkdtempSync, rmSync, existsSync, readFileSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { compareSemver, getLocalVersion, readCache, writeCache } from "../bin/updater.mjs";
import { upsertRuleContent, copySkillPackage, AI_HARNESSES } from "../bin/installer.mjs";

console.log("Running Motion UI installer & updater tests...");

// 1. Semver comparison tests
assert.strictEqual(compareSemver("1.0.1", "1.0.0"), 1);
assert.strictEqual(compareSemver("1.0.0", "1.0.1"), -1);
assert.strictEqual(compareSemver("1.0.0", "1.0.0"), 0);
assert.strictEqual(compareSemver("2.0.0", "1.9.9"), 1);
assert.strictEqual(compareSemver("v2.1.0", "2.0.5"), 1);

// 2. Local version detection
const ver = getLocalVersion();
assert.ok(typeof ver === "string" && ver.length > 0, "Version should be non-empty string");

// 3. Cache read/write
const tempDir = mkdtempSync(join(tmpdir(), "motion-ui-test-"));
try {
  const cachePath = join(tempDir, ".test_cache");
  writeCache("2.0.0", cachePath);
  assert.ok(existsSync(cachePath));
  const cached = readCache(cachePath);
  assert.strictEqual(cached?.latestVersion, "2.0.0");

  // 4. Upsert rule content
  const ruleFile = join(tempDir, "CLAUDE.md");
  upsertRuleContent(ruleFile, "TEST_RULE", "Line 1\nLine 2");
  let content = readFileSync(ruleFile, "utf-8");
  assert.ok(content.includes("<!-- BEGIN TEST_RULE -->"));
  assert.ok(content.includes("Line 1\nLine 2"));
  assert.ok(content.includes("<!-- END TEST_RULE -->"));

  // Upsert again: must update in place without duplicating markers
  upsertRuleContent(ruleFile, "TEST_RULE", "Line Updated");
  content = readFileSync(ruleFile, "utf-8");
  assert.ok(content.includes("Line Updated"));
  assert.ok(!content.includes("Line 1"));
  const count = (content.match(/BEGIN TEST_RULE/g) || []).length;
  assert.strictEqual(count, 1, "Should not duplicate rule block markers");

  // 5. Harness detection in mock directory
  const mockCursorDir = join(tempDir, "mock-cursor");
  writeFileSync(join(tempDir, ".cursorrules"), "");
  const cursorHarness = AI_HARNESSES.find((h) => h.id === "cursor");
  assert.ok(cursorHarness.detect(tempDir), "Should detect Cursor when .cursorrules exists");

  // 6. Test copySkillPackage in dry-run and real
  const targetSkill = join(tempDir, "installed-skill");
  copySkillPackage(targetSkill, { dryRun: true });
  assert.ok(!existsSync(targetSkill), "Dry run should not create folder");

  copySkillPackage(targetSkill, { dryRun: false });
  assert.ok(existsSync(join(targetSkill, "SKILL.md")), "SKILL.md must be copied");
  assert.ok(existsSync(join(targetSkill, "catalog.json")), "catalog.json must be copied");
  assert.ok(existsSync(join(targetSkill, "lib", "styles.ts")), "lib/styles.ts must be copied");
  assert.ok(!existsSync(join(targetSkill, "node_modules")), "node_modules must not be copied");
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

console.log("All tests passed! ✨");
