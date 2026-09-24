import { profile } from "@/data/portfolio";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col justify-between gap-6 text-xs text-muted sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-foreground">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} · Feito com intenção, do design ao
            código.
          </p>
        </div>
        <nav aria-label="Redes sociais" className="flex gap-6">
          <a
            className="py-2 hover:text-foreground"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="py-2 hover:text-foreground"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a className="py-2 hover:text-foreground" href="#topo">
            Voltar ao topo ↑
          </a>
        </nav>
      </Container>
    </footer>
  );
}
