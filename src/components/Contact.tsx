import { profile } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/ButtonLink";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="pb-16 pt-4"
    >
      <Container>
        <div className="contact-panel relative overflow-hidden rounded-3xl border border-accent/25 px-6 py-16 text-center sm:px-14 sm:py-24">
          <p className="eyebrow justify-center">Seu próximo projeto</p>
          <h2
            id="contact-title"
            className="mx-auto mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.8rem)] font-bold leading-[1.07] tracking-[-.055em]"
          >
            Vamos dar forma à sua{" "}
            <span className="text-accent">presença digital?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Me conte o que você faz, quem quer alcançar e o que imagina para seu
            site. Vamos entender o próximo passo juntos.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar sobre meu projeto
            </ButtonLink>
            <ButtonLink
              href={
                "mailto:" +
                profile.email +
                "?subject=Vamos%20conversar%20sobre%20um%20projeto"
              }
              variant="secondary"
            >
              Prefiro enviar um e-mail
            </ButtonLink>
          </div>
          <a
            className="mt-7 inline-block break-all text-xs text-muted hover:text-foreground"
            href={"mailto:" + profile.email}
          >
            {profile.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
