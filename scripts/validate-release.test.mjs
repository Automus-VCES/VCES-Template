import test from "node:test";
import assert from "node:assert/strict";
import { validateRelease } from "./validate-release.mjs";

test("accepts the canonical release tag on main", () => {
  assert.deepEqual(validateRelease({ tag: "v1.0.0", version: "1.0.0", isOnMain: true }), []);
});

test("rejects malformed and non-SemVer release tags", () => {
  const errors = validateRelease({ tag: "release-1.0", version: "1.0.0", isOnMain: true });
  assert.ok(errors.some((error) => error.includes("vMAJOR.MINOR.PATCH")));
});

test("rejects a tag that does not match the standard version", () => {
  const errors = validateRelease({ tag: "v1.1.0", version: "1.0.0", isOnMain: true });
  assert.ok(errors.some((error) => error.includes("exactly match")));
});

test("rejects commits that are not ancestors of main", () => {
  const errors = validateRelease({ tag: "v1.0.0", version: "1.0.0", isOnMain: false });
  assert.ok(errors.some((error) => error.includes("ancestor of origin/main")));
});

test("fails closed when canonical version is invalid", () => {
  const errors = validateRelease({ tag: "v1.0.0", version: "1.0", isOnMain: true });
  assert.ok(errors.some((error) => error.includes("Canonical VCES version")));
});
