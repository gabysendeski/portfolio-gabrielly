import { projects } from "@/data/portfolio";
import { selectProjects } from "@/lib/projects";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FeaturedProject } from "./projects/FeaturedProject";
import { ProjectCard } from "./projects/ProjectCard";

export function Projects() {
  const { featured, remaining } = selectProjects(projects);
  if (!projects.length) return null;
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="section-space border-y border-line bg-surface/40"
    >
      <Container>
        <SectionHeading
          index="02"
          label="Trabalho na prática"
          id="projects-title"
          title="Intenção que vira experiência."
          description="Da presença digital a produtos de operação: projetos que conectam contexto, interface e engenharia."
        />

        {featured && <FeaturedProject project={featured} />}
        {remaining.length > 0 && (
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {remaining.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                number={index + (featured ? 2 : 1)}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
