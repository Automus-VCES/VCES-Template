import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { REQUIRED_FILES, validateTemplate } from "./validate-template.mjs";

async function createFixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "vces-template-"));
  t.after(() => rm(root, { recursive: true, force: true }));

  for (const file of REQUIRED_FILES) {
    const absolute = path.join(root, file);
    await mkdir(path.dirname(absolute), { recursive: true });
    await writeFile(absolute, "# fixture\n");
  }
  return root;
}

test("accepts a complete template with valid internal links", async (t) => {
  const root = await createFixture(t);
  await writeFile(path.join(root, "README.md"), "[Standard](VIBE-CODING-STANDARD.md)\n");

  const result = await validateTemplate(root);

  assert.deepEqual(result.errors, []);
  assert.equal(result.requiredCount, REQUIRED_FILES.length);
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
