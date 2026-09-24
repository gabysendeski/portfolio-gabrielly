import { stack } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { Tags } from "./ui/Tags";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.7fr_2fr]">
          <div>
            <p className="eyebrow">Base técnica</p>
            <h2
              id="stack-title"
              className="mt-4 text-2xl font-semibold tracking-tight"
            >
              Tecnologia a serviço da ideia.
            </h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-3">
            {stack.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-xs font-semibold">{group.title}</h3>
                <Tags items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
