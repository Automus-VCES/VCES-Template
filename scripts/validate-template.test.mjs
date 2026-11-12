import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { REQUIRED_FILES, REQUIRED_SKILLS, validateTemplate } from "./validate-template.mjs";

const validSkill = "# Example Skill\n\n## When to use\nUse when needed.\n\n## Workflow\nDo the work.\n\n## Verification\nVerify it.\n\n## Avoid\nAvoid excess.\n";

async function createFixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "vces-template-"));
  t.after(() => rm(root, { recursive: true, force: true }));

  for (const file of REQUIRED_FILES) {
    const absolute = path.join(root, file);
    await mkdir(path.dirname(absolute), { recursive: true });
    await writeFile(absolute, REQUIRED_SKILLS.includes(file) ? validSkill : "# fixture\n");
  }
  return root;
}

test("accepts a complete template with valid skills and internal links", async (t) => {
  const root = await createFixture(t);
  await writeFile(path.join(root, "README.md"), "[Standard](VIBE-CODING-STANDARD.md)\n");

  const result = await validateTemplate(root);

  assert.deepEqual(result.errors, []);
  assert.equal(result.requiredCount, REQUIRED_FILES.length);
  assert.equal(result.skillCount, 5);
});

test("requires all reusable workflow examples", async (t) => {
  const root = await createFixture(t);
  await rm(path.join(root, "templates/workflows/flutter-ci.yml.example"));

  const result = await validateTemplate(root);

  assert.ok(result.errors.some((error) => error.includes("flutter-ci.yml.example")));
});

test("rejects broken internal Markdown links", async (t) => {
  const root = await createFixture(t);
  await writeFile(path.join(root, "README.md"), "[Missing](docs/not-present.md)\n");

  const result = await validateTemplate(root);

  assert.ok(result.errors.some((error) => error.includes("Broken internal link")));
});

test("rejects links that escape the repository root", async (t) => {
  const root = await createFixture(t);
  await writeFile(path.join(root, "README.md"), "[Outside](../outside.md)\n");

  const result = await validateTemplate(root);

  assert.ok(result.errors.some((error) => error.includes("Link escapes repository")));
});

test("rejects malformed percent-encoding in local links", async (t) => {
  const root = await createFixture(t);
  await writeFile(path.join(root, "README.md"), "[Bad](%E0%A4%A.md)\n");

  const result = await validateTemplate(root);

  assert.ok(result.errors.some((error) => error.includes("Invalid URL encoding")));
});

test("requires the five flat skill files", async (t) => {
  const root = await createFixture(t);
  await rm(path.join(root, REQUIRED_SKILLS[0]));

  const result = await validateTemplate(root);

  assert.ok(result.errors.some((error) => error.includes("Missing required file: " + REQUIRED_SKILLS[0])));
});

test("rejects skills missing required guidance sections", async (t) => {
  const root = await createFixture(t);
  await writeFile(path.join(root, REQUIRED_SKILLS[0]), "# Incomplete\n## Workflow\n");

  const result = await validateTemplate(root);

  assert.ok(result.errors.some((error) => error.includes("Missing skill section") && error.includes("## Verification")));
});
