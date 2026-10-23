import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
function previewFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = resolve(dir, entry.name);
    return entry.isDirectory() ? previewFiles(file) : entry.name.endsWith(".tsx") ? [file] : [];
  });
}
const previews = previewFiles(resolve(root, "components/previews"));
const responsivePreviews = [...previews, ...previewFiles(resolve(root, "src/previews"))];

// Check literal layout classes. Runtime checks still cover CSS modules, inline sizes and portals.
function unconstrainedWidths(source) {
  const file = ts.createSourceFile("preview.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const failures = [];
  const visit = node => {
    if (ts.isJsxAttribute(node) && node.name.getText(file) === "className" &&
        node.initializer && ts.isStringLiteral(node.initializer)) {
      const classes = node.initializer.text.split(/\s+/);
      for (const token of classes) {
        const numeric = /^w-(\d+(?:\.\d+)?)$/.exec(token);
        const arbitrary = /^w-\[(\d+(?:\.\d+)?)(px|rem)\]$/.exec(token);
        const pixels = numeric ? Number(numeric[1]) * 4 : arbitrary
          ? Number(arbitrary[1]) * (arbitrary[2] === "rem" ? 16 : 1) : 0;
        if (pixels > 264 && !classes.some(item => item.startsWith("max-w-"))) {
          failures.push(token);
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(file);
  return failures;
}
assert.deepEqual(unconstrainedWidths('<div className="w-80" />'), ["w-80"]);
assert.deepEqual(unconstrainedWidths('<div className="w-[280px]" />'), ["w-[280px]"]);
assert.deepEqual(unconstrainedWidths('<div className="w-[17.125rem]" />'), ["w-[17.125rem]"]);
assert.deepEqual(unconstrainedWidths('<div className="w-full max-w-80" />'), []);
assert.deepEqual(unconstrainedWidths('<div className="w-72 max-w-full" />'), []);
assert.deepEqual(unconstrainedWidths('<div className="w-72 max-w-[calc(100vw-2rem)]" />'), []);
for (const file of responsivePreviews) {
  assert.deepEqual(unconstrainedWidths(readFileSync(file, "utf8")), [],
    `${file}: fixed preview widths above 264px need a responsive max-width`);
}
assert.ok(previews.length, "No preview contracts found");
const composedCallsites = new Map([
  ["components/blocks/plan-comparison.tsx", ["SegmentedControl"]],
  ["components/blocks/page-header.tsx", ["AvatarGroup", "Button"]],
].map(([file, names]) => [resolve(root, file), new Set(names)]));
const options = {
  jsx: ts.JsxEmit.ReactJSX,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  target: ts.ScriptTarget.ES2023,
  esModuleInterop: true,
  skipLibCheck: true,
  baseUrl: root,
  paths: { "@/*": ["./*"] },
  noEmit: true,
};
const program = ts.createProgram(previews, options);
const checker = program.getTypeChecker();
const problems = [];

for (const file of program.getSourceFiles()) {
  if (previews.includes(file.fileName)) {
    // Framework adapters and optional component dependencies are supplied by the host app.
    problems.push(...program.getSyntacticDiagnostics(file));
    problems.push(...program.getSemanticDiagnostics(file).filter(item => item.code !== 2307));
  }
  const names = composedCallsites.get(file.fileName);
  if (names) {
    // Check the repaired component contracts without type-checking unrelated host markup.
    const ranges = [];
    const visit = node => {
      if ((ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
          names.has(node.tagName.getText(file))) {
        ranges.push([node.getStart(file), node.end]);
      }
      ts.forEachChild(node, visit);
    };
    visit(file);
    problems.push(...program.getSemanticDiagnostics(file).filter(item =>
      item.code !== 2307 && ranges.some(([start, end]) => item.start >= start && item.start < end)
    ));
  }
  if (!file.fileName.startsWith(resolve(root, "components"))) continue;
  for (const statement of file.statements) {
    if (ts.isImportDeclaration(statement) && statement.moduleSpecifier.text === "react-dom" &&
        statement.importClause?.namedBindings && ts.isNamedImports(statement.importClause.namedBindings)) {
      assert.ok(!statement.importClause.namedBindings.elements.some(item =>
        (item.propertyName ?? item.name).text === "createPortal"),
        `${file.fileName}: use @/lib/portal so portalled overlays inherit the preview theme`);
    }
  }

  for (const statement of file.statements) {
    if (!ts.isExportAssignment(statement) || !ts.isIdentifier(statement.expression)) continue;
    const symbol = checker.getSymbolAtLocation(statement.expression);
    if (!symbol?.declarations?.length) {
      problems.push({
        file,
        start: statement.expression.pos,
        length: statement.expression.end - statement.expression.pos,
        category: ts.DiagnosticCategory.Error,
        code: 2304,
        messageText: `Default export '${statement.expression.text}' has no local binding.`,
      });
    }
  }
}

const formatted = ts.formatDiagnosticsWithColorAndContext(problems, {
  getCurrentDirectory: () => root,
  getCanonicalFileName: file => file,
  getNewLine: () => "\n",
});
assert.equal(problems.length, 0, formatted);
console.log(`Preview contracts passed: ${previews.length} typed previews, ${responsivePreviews.length} responsive previews and component default exports.`);
