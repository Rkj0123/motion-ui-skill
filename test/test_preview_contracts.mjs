import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const previews = readdirSync(resolve(root, "components/previews"), { recursive: true })
  .filter(file => file.endsWith(".tsx"))
  .map(file => resolve(root, "components/previews", file));
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
console.log(`Preview contracts passed: ${previews.length} previews and component default exports.`);
