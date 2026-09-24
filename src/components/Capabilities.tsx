import { process } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Capabilities() {
  return (
    <section
      id="processo"
      aria-labelledby="process-title"
      className="section-space"
    >
      <Container>
        <SectionHeading
          index="03"
          label="Do contexto à entrega"
          id="process-title"
          title="Um processo claro. Em cada etapa."
          description="Boas decisões vêm antes do código. É assim que conecto o objetivo do projeto à experiência de quem vai usar."
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <li key={step.title} className="reveal border-t border-line pt-6">
              <span className="font-mono text-xs text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
