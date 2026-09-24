import { questions } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function FAQ() {
  return (
    <section
      aria-labelledby="faq-title"
      className="section-space border-t border-line"
    >
      <Container>
        <SectionHeading
          index="05"
          label="Antes de começar"
          id="faq-title"
          title="Uma boa conversa resolve o primeiro passo."
        />
        <div className="md:ml-[26%]">
          {questions.map((item) => (
            <details
              key={item.question}
              className="case-details border-b border-line py-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 font-semibold">
                {item.question}
                <span
                  aria-hidden="true"
                  className="details-plus text-xl text-accent"
                >
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
