import type { Project } from "@/data/portfolio";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { Tags } from "../ui/Tags";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectMetrics } from "./ProjectMetrics";
import { ButtonLink } from "../ui/ButtonLink";

export function ProjectCard({
  project,
  number,
}: {
  project: Project;
  number: number;
}) {
  return (
    <article
      key={project.id}
      className="reveal flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 sm:p-7"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs text-muted">
          {String(number).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="text-accent">
          ↗
        </span>
      </div>
      {project.preview && (
        <div className="mb-6 overflow-hidden rounded-lg border border-line">
          <Image
            src={assetPath(project.preview.src)}
            alt={project.preview.alt}
            width={project.preview.width}
            height={project.preview.height}
            sizes="(min-width: 768px) 360px, 90vw"
            className={`aspect-[16/10] w-full ${project.preview.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
          />
        </div>
      )}
      <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
        {project.category}
      </p>
      <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
        {project.title}
      </h3>
      <p className="mt-3 text-xs text-muted">{project.context}</p>
      <p className="mt-5 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ProjectMetrics metrics={project.metrics} />

      <div className="mt-auto pt-6">
        <Tags items={project.technologies} />
        {project.liveUrl && (
          <div className="mt-4">
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
