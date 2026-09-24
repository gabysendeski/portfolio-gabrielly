import { services } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function Services() {
  return (
    <section
      id="solucoes"
      aria-labelledby="services-title"
      className="section-space"
    >
      <Container>
        <SectionHeading
          index="01"
          label="Como posso ajudar"
          id="services-title"
          title="O próximo passo do seu negócio começa aqui."
          description="Uma página para apresentar seu trabalho. Um site para fortalecer sua marca. Uma interface para tornar o dia a dia mais simples."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="reveal rounded-2xl border border-line p-7 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-sm text-accent">
                {service.number} /
              </span>
              <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-7 space-y-3 border-t border-line pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-xs">
                    <span aria-hidden="true" className="text-accent">
                      ↗
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
