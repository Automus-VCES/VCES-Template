import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function validateRelease({ tag, version, isOnMain }) {
  const errors = [];
  const semverPattern = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

  if (typeof tag !== "string" || !semverPattern.test(tag)) {
    errors.push("Release tag must use vMAJOR.MINOR.PATCH format.");
  }
  if (typeof version !== "string" || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(version)) {
    errors.push("Canonical VCES version is missing or is not valid SemVer.");
  } else if (tag !== "v" + version) {
    errors.push("Release tag must exactly match canonical VCES version v" + version + ".");
  }
  if (isOnMain !== true) {
    errors.push("Tagged commit is not verified as an ancestor of origin/main.");
  }

  return errors;
}

async function main() {
  const [tag, commitSha] = process.argv.slice(2);
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const standard = await readFile(path.join(root, "VIBE-CODING-STANDARD.md"), "utf8");
  const versionMatch = standard.match(/^\*\*Version:\*\*\s*(\d+\.\d+\.\d+)/m);
  const version = versionMatch?.[1] ?? null;

  const ancestry = commitSha
    ? spawnSync("git", ["merge-base", "--is-ancestor", commitSha, "origin/main"], { encoding: "utf8" })
    : null;
  const isOnMain = ancestry?.status === 0;

  const errors = validateRelease({ tag, version, isOnMain });
  if (errors.length) {
    for (const error of errors) console.error("FAIL: " + error);
    process.exitCode = 1;
    return;
  }

  console.log("Release validation passed: " + tag + " matches VCES " + version + " and is reachable from main.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
