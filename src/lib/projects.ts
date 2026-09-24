import type { Project } from "../data/portfolio.ts";

/** The first flagged project wins; without a flag all projects remain in the list. */
export function selectProjects(projects: readonly Project[]) {
  const featured = projects.find((project) => project.featured);
  return {
    featured,
    remaining: projects.filter((project) => project !== featured),
  };
}
