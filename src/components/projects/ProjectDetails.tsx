import type { Project } from "@/data/portfolio";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <details className="case-details mt-6 border-t border-line pt-5">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold">
        Entenda o projeto
        <span aria-hidden="true" className="details-plus text-accent">
          +
        </span>
      </summary>
      <div className="mt-5 grid gap-5 text-sm leading-relaxed text-muted">
        <div>
          <h4 className="mb-2 font-semibold text-foreground">O desafio</h4>
          <p>{project.challenge}</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-foreground">A construção</h4>
          <p>{project.solution}</p>
        </div>
      </div>
    </details>
  );
}
