# Gabrielly Sendeski · Portfólio

Portfólio profissional com foco em sites e landing pages. Apresenta meus serviços, projetos e experiência em uma interface responsiva, com temas claro e escuro.

**[Acessar o portfólio →](https://gabysendeski.github.io/portfolio-gabrielly/)**

## Tecnologias

Next.js · React · TypeScript · Tailwind CSS · Playwright

## Executar localmente

Requer **Node.js 22.17+** e npm.

```bash
git clone https://github.com/gabysendeski/portfolio-gabrielly.git
cd portfolio-gabrielly
npm ci
npm run dev
```

Abra [localhost:3000](http://localhost:3000).

## Comandos principais

| Comando          | Descrição                                                   |
| ---------------- | ----------------------------------------------------------- |
| `npm run dev`    | Inicia o ambiente de desenvolvimento.                       |
| `npm run build`  | Gera o site estático em `out/`.                             |
| `npm run check`  | Verifica formatação, lint, tipos e testes unitários.        |
| `npm run verify` | Executa todas as verificações, build e testes de navegador. |

Os testes de navegador usam Chrome no Windows. Nos demais sistemas, instale o Chromium com `npx playwright install chromium`.

## Organização

- **`src/app/`** — página, metadados e estilos globais.
- **`src/components/`** — seções e componentes reutilizáveis.
- **`src/data/`** — conteúdo do perfil, serviços e projetos.
- **`tests/`** — testes unitários e de navegador.

A publicação no GitHub Pages é automatizada e condicionada às verificações do projeto.

Consulte o [guia de desenvolvimento](docs/development.md) para detalhes sobre arquitetura, edição de conteúdo e publicação.
