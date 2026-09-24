import { experience, profile } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="about-title"
      className="section-space border-y border-line bg-surface/40"
    >
      <Container>
        <SectionHeading
          index="04"
          label="Quem está por trás"
          id="about-title"
          title="Prazer, Gabrielly. Engenharia com olhar de produto."
        />
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.4fr]">
          <div className="reveal">
            <p className="text-lg leading-relaxed">
              Minha experiência conecta desenvolvimento frontend, atendimento e
              operação. Isso me ensinou a olhar para o que acontece antes e
              depois de uma interface.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Trago essa perspectiva para cada projeto: entender seu contexto,
              organizar a experiência e construir uma solução que faça sentido
              para o negócio e para as pessoas.
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center gap-5 border-b border-accent text-sm font-semibold"
            >
              Minha trajetória no LinkedIn{" "}
              <span aria-hidden="true" className="text-accent">
                ↗
              </span>
            </a>
          </div>
          <div>
            {experience.map((role) => (
              <article
                key={role.title}
                className="reveal border-t border-line py-6 first:pt-0 first:border-0"
              >
                <p className="font-mono text-[10px] tracking-wider text-accent">
                  {role.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{role.title}</h3>
                <p className="mt-1 text-xs text-muted">{role.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
