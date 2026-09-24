import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { profile } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/ButtonLink";

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-line pt-14 pb-10 lg:pt-20 lg:pb-12"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> Desenvolvimento web com visão de
              negócio
            </p>
            <h1
              id="hero-title"
              className="mt-7 text-[clamp(2.8rem,6.3vw,5.65rem)] font-extrabold leading-[1.03] tracking-[-.065em]"
            >
              Seu negócio merece
              <br className="hidden sm:block" /> uma presença
              <br className="hidden sm:block" />{" "}
              <span className="text-accent">à altura.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Crio sites e landing pages que apresentam seu valor com clareza e
              ajudam a transformar interesse em contato. Design cuidadoso,
              experiência simples e uma base técnica bem construída.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vamos falar sobre seu projeto
              </ButtonLink>
              <ButtonLink href="#projetos" variant="secondary" arrow={false}>
                Conhecer meu trabalho ↓
              </ButtonLink>
            </div>
            <p className="mt-5 font-mono text-xs text-muted">
              Da primeira impressão ao próximo passo.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[430px] pb-7 lg:ml-auto">
            <div className="portrait-frame relative aspect-[4/4.7] overflow-hidden rounded-[100px_20px_20px_20px] border border-line">
              <Image
                src={assetPath(profile.portrait.src)}
                alt={profile.portrait.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-cover object-[center_28%]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#091412] via-transparent to-transparent" />
              <div className="absolute bottom-14 left-7 right-7 text-white">
                <p className="text-xl font-bold tracking-tight">
                  {profile.name}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {profile.role} · {profile.locationLabel}
                </p>
              </div>
              <span className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-2 font-mono text-[10px] text-white backdrop-blur">
                ESTRATÉGIA + DESIGN + CÓDIGO
              </span>
            </div>
            <div className="absolute -bottom-1 right-0 flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 shadow-xl sm:-right-5">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-full bg-accent/10 text-accent"
              >
                ↗
              </span>
              <div>
                <p className="text-sm font-bold">Mais que uma página bonita.</p>
                <p className="mt-1 text-xs text-muted">
                  Uma experiência com propósito.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line pt-7 text-sm text-muted">
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Cuidado em cada ponto de contato
          </span>
          {[
            "Pensado para o celular",
            "Conteúdo com direção",
            "Engenharia de software",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-accent">
                ✳
              </span>
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
