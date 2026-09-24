import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { Container } from "./ui/Container";
import { navigation, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-3">
        <a
          href="#topo"
          aria-label="Início — Gabrielly Sendeski"
          className="flex items-center gap-3"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line font-mono text-sm text-accent">
            gs.
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            Gabrielly<span className="text-accent">.</span>
          </span>
        </a>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-xs text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-accent/40 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-accent/10 lg:block"
          >
            Vamos conversar ↗
          </a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
