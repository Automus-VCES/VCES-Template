import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "README.md", "VIBE-CODING-STANDARD.md", "AGENTS.md", "CONTRIBUTING.md",
  "SECURITY.md", "CHANGELOG.md", "LICENSE",
  "templates/PROJECT-STANDARD.md", "templates/PROJECT-STATUS.md",
  "templates/AGENTS.md", "templates/CONTRIBUTING.md", "templates/SECURITY.md",
  "templates/adr/ADR-TEMPLATE.md", "docs/ADOPTION-GUIDE.md",
  "docs/ENGINEERING-HEALTH-CHECK.md", "docs/RELEASE-PROCESS.md",
  "docs/GITHUB-SECURITY-CONFIGURATION.md",
  ".github/workflows/ci.yml", ".github/workflows/security.yml",
  ".github/workflows/release.yml"
];
const markdown = required.filter((file) => file.endsWith(".md"));
const errors = [];

for (const file of required) {
  try { await access(path.join(root, file)); }
  catch { errors.push("Missing required file: " + file); }
}

for (const file of markdown) {
  let source;
  try { source = await readFile(path.join(root, file), "utf8"); }
  catch { continue; }

  for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].trim().split("#")[0].split("?")[0];
    if (!target || /^(https?:|mailto:|#)/i.test(target)) continue;

    let decoded;
    try { decoded = decodeURIComponent(target); }
    catch { errors.push("Invalid URL encoding in " + file + ": " + target); continue; }

    const resolved = path.resolve(path.dirname(path.join(root, file)), decoded);
    const relative = path.relative(root, resolved);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      errors.push("Link escapes repository in " + file + ": " + target);
      continue;
    }
    try { await access(resolved); }
    catch { errors.push("Broken internal link in " + file + ": " + target); }
  }
}

if (errors.length) {
  for (const error of errors) console.error("FAIL: " + error);
  process.exitCode = 1;
} else {
  console.log("VCES template validation passed.");
  console.log(required.length + " required files present.");
  console.log(markdown.length + " Markdown files checked for broken local links.");
}
