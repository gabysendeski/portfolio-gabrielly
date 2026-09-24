import type { Project } from "@/data/portfolio";
import { Tags } from "../ui/Tags";
import { ButtonLink } from "../ui/ButtonLink";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectMetrics } from "./ProjectMetrics";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      className={`reveal grid overflow-hidden rounded-2xl border border-line bg-surface ${project.preview ? "lg:grid-cols-2" : ""}`}
    >
      <ProjectPreview project={project} />

      <div className="flex flex-col p-7 sm:p-10">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-5 text-3xl font-bold leading-tight tracking-[-.04em] sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-xs text-muted">{project.context}</p>
        <p className="mt-6 mb-6 leading-relaxed text-muted">
          {project.description}
        </p>
        <ProjectMetrics metrics={project.metrics} />
        {project.technologies.length > 0 && (
          <Tags items={project.technologies} />
        )}
        {project.liveUrl && (
          <div className="mt-2">
            <ButtonLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel || "Visitar projeto"}
            </ButtonLink>
          </div>
        )}
        <ProjectDetails project={project} />
      </div>
    </article>
  );
}
