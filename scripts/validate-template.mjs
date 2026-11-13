import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const REQUIRED_SKILLS = Object.freeze([
  "skills/project-planning-skill.md",
  "skills/architecture-review-skill.md",
  "skills/secure-development-skill.md",
  "skills/testing-debugging-skill.md",
  "skills/code-review-skill.md"
]);

export const REQUIRED_FILES = Object.freeze([
  "README.md", "VIBE-CODING-STANDARD.md", "AGENTS.md", "CONTRIBUTING.md",
  "SECURITY.md", "CHANGELOG.md", "LICENSE",
  "templates/PROJECT-STANDARD.md", "templates/PROJECT-STATUS.md",
  "templates/AGENTS.md", "templates/CONTRIBUTING.md", "templates/SECURITY.md",
  "templates/SECURE-VIBE-CODING-CHECKLIST.md",
  "templates/adr/ADR-TEMPLATE.md", "docs/ADOPTION-GUIDE.md",
  "docs/ENGINEERING-HEALTH-CHECK.md", "docs/RELEASE-PROCESS.md",
  "docs/GITHUB-SECURITY-CONFIGURATION.md",
  "templates/workflows/node-ci.yml.example",
  "templates/workflows/python-ci.yml.example",
  "templates/workflows/flutter-ci.yml.example",
  "templates/workflows/security-codeql.yml.example",
  "templates/workflows/security-gate.yml.example",
  ...REQUIRED_SKILLS,
  "scripts/validate-template.mjs", "scripts/validate-template.test.mjs",
  "scripts/validate-release.mjs", "scripts/validate-release.test.mjs",
  ".github/workflows/ci.yml", ".github/workflows/security.yml",
  ".github/workflows/release.yml"
]);

const REQUIRED_SKILL_SECTIONS = [
  "## When to use",
  "## Workflow",
  "## Verification",
  "## Avoid"
];

export async function validateTemplate(root) {
  const repositoryRoot = path.resolve(root);
  const markdownFiles = REQUIRED_FILES.filter((file) => file.endsWith(".md"));
  const errors = [];

  for (const file of REQUIRED_FILES) {
    try {
      await access(path.join(repositoryRoot, file));
    } catch {
      errors.push("Missing required file: " + file);
    }
  }

  for (const file of REQUIRED_SKILLS) {
    let source;
    try {
      source = await readFile(path.join(repositoryRoot, file), "utf8");
    } catch {
      continue;
    }
    for (const section of REQUIRED_SKILL_SECTIONS) {
      if (!source.includes(section)) {
        errors.push("Missing skill section in " + file + ": " + section);
      }
    }
  }

  for (const file of markdownFiles) {
    let source;
    try {
      source = await readFile(path.join(repositoryRoot, file), "utf8");
    } catch {
      continue;
    }

    for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].trim().split("#")[0].split("?")[0];
      if (!target || /^(https?:|mailto:|#)/i.test(target)) continue;

      let decoded;
      try {
        decoded = decodeURIComponent(target);
      } catch {
        errors.push("Invalid URL encoding in " + file + ": " + target);
        continue;
      }

      const resolved = path.resolve(path.dirname(path.join(repositoryRoot, file)), decoded);
      const relative = path.relative(repositoryRoot, resolved);
      if (relative === ".." || relative.startsWith(".." + path.sep) || path.isAbsolute(relative)) {
        errors.push("Link escapes repository in " + file + ": " + target);
        continue;
      }

      try {
        await access(resolved);
      } catch {
        errors.push("Broken internal link in " + file + ": " + target);
      }
    }
  }

  return {
    errors,
    requiredCount: REQUIRED_FILES.length,
    skillCount: REQUIRED_SKILLS.length,
    markdownCount: markdownFiles.length
  };
}

async function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const result = await validateTemplate(root);

  if (result.errors.length) {
    for (const error of result.errors) console.error("FAIL: " + error);
    process.exitCode = 1;
    return;
  }

  console.log("VCES template validation passed.");
  console.log(result.requiredCount + " required files present.");
  console.log(result.skillCount + " flat skills checked for required sections.");
  console.log(result.markdownCount + " Markdown files checked for broken local links.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
