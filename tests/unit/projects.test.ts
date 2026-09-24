import assert from "node:assert/strict";
import { test } from "node:test";
import { selectProjects } from "../../src/lib/projects.ts";
import { projects } from "../../src/data/portfolio.ts";

test("removing the featured project preserves the remaining portfolio", () => {
  const remaining = projects.filter((project) => !project.featured);
  const result = selectProjects(remaining);
  assert.equal(result.featured, undefined);
  assert.deepEqual(result.remaining, remaining);
});

test("an empty portfolio has no featured project and no cards", () => {
  assert.deepEqual(selectProjects([]), { featured: undefined, remaining: [] });
});

test("multiple flags show one feature without dropping or duplicating projects", () => {
  const flagged = projects.map((project) => ({ ...project, featured: true }));
  const result = selectProjects(flagged);
  assert.equal(result.featured, flagged[0]);
  assert.deepEqual(result.remaining, flagged.slice(1));
});

test("project IDs are unique and the configured feature has a usable preview", () => {
  assert.equal(
    new Set(projects.map((project) => project.id)).size,
    projects.length,
  );
  const { featured } = selectProjects(projects);
  assert.ok(featured?.liveUrl);
  assert.ok(featured?.preview?.src);
  assert.equal(new URL(featured.liveUrl).protocol, "https:");
});
