# Portfólio — Gabrielly Sendeski

Portfólio em React, Next.js (App Router), TypeScript e Tailwind CSS.
Landing page profissional voltada à captação de clientes para sites e landing pages.
Conteúdo orientado a proposta de valor, serviços, projetos, processo e contato.

## Desenvolvimento

Requer Node.js 22.17 ou superior.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. No PowerShell, caso `npm` seja bloqueado pela política de execução, use `npm.cmd`.

## Verificação e build

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run test:e2e
```

O build gera o site estático em `out/`. Para visualizar esse resultado, sirva a pasta com um servidor HTTP estático. A configuração de exportação estática não utiliza `next start`.

`npm run verify` executa todas as verificações: formatação, lint, TypeScript, testes unitários, build de produção e testes de navegador.

Os testes E2E verificam navegação mobile, persistência do tema, contatos, detalhes dos projetos, carregamento da prévia, layout responsivo e conteúdo sem JavaScript. No Windows usam o Google Chrome instalado; nos demais sistemas execute `npx playwright install chromium` antes.

`npm run test:e2e` compila o site e serve a pasta `out/` na porta 3100 com um servidor HTTP local. Não inicia outro `next dev` nem interrompe o servidor de desenvolvimento existente. A porta 3100 precisa estar livre. Os testes respeitam `NEXT_PUBLIC_BASE_PATH`, permitindo validar a mesma subpasta usada na publicação.

Os testes unitários cobrem a seleção do destaque, ausência de projetos e múltiplos destaques, sem instalar outro framework de testes.

Use `npm run format` para formatar o código e `npm run format:check` para verificar a formatação.

## Publicar no GitHub Pages

1. Envie o projeto para a branch `main` no GitHub.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` executa todas as verificações antes de publicar o artefato testado. Pull requests para `main` também passam pelas verificações, sem publicação. Falhas de testes disponibilizam diagnósticos como artefatos do workflow.

O caminho base é calculado pelo GitHub Pages. Para um build manual em subpasta, defina `NEXT_PUBLIC_BASE_PATH` antes do build (exemplo: `/portfolio-gabrielly`, sem barra final).
Na Vercel, importe como projeto Next.js e deixe essa variável vazia para publicar na raiz.

## Estrutura

- `src/app/page.tsx`: composição da página.
- `src/app/layout.tsx`: idioma, fontes e metadados.
- `src/app/globals.css`: Tailwind, temas e estilos visuais complementares.
- `src/components/`: seções do portfólio e interações React.
- `src/components/ui/`: elementos reutilizáveis de layout, títulos, links e tags.
- `src/components/projects/`: apresentação do destaque, prévia, cartões, métricas e detalhes.
- `src/data/portfolio.ts`: conteúdo tipado, projetos, serviços, tecnologias e contatos.
- `src/lib/`: seleção dos projetos e resolução dos caminhos dos arquivos públicos.
- `scripts/serve-export.mjs`: servidor local do build de produção, usado nos testes.
- `tests/unit/`: regras de seleção e integridade dos projetos.
- `tests/e2e/`: verificações de comportamento no navegador.
- `public/profile.jpg`: foto profissional.

## Decisões de arquitetura

- Server Components por padrão. Apenas navegação mobile, tema e efeitos de rolagem usam JavaScript no cliente.
- Conteúdo e contatos centralizados em `src/data/portfolio.ts`, separados da apresentação.
- Tokens de cores e tipografia no Tailwind; componentes de UI evitam repetir padrões visuais.
- Links de contato funcionam diretamente, sem backend ou coleta de dados no site.
- Projetos e FAQ usam elementos `details` nativos, acessíveis por teclado e disponíveis sem JavaScript.
- Navegação por âncoras com compensação do cabeçalho, foco visível e respeito à preferência por movimento reduzido.
- Exportação estática para hospedagem simples, com suporte a subpastas no GitHub Pages.

## Atualizar projetos e perfil

Edite o cargo, nome, localização e foto em `profile`, dentro de `src/data/portfolio.ts`. O cargo é reutilizado na apresentação e na experiência; o nome também alimenta os metadados.

Para destacar um projeto, defina `featured: true` no cadastro. Sem destaque, todos aparecem na listagem; se houver mais de um, o primeiro é destacado e os demais continuam visíveis. Uma lista vazia omite a seção. IDs devem ser únicos.

`preview` inclui caminho local, texto alternativo e dimensões da imagem. Sem prévia, o destaque ocupa toda a largura; sem `liveUrl`, a prévia é apenas visual. Sem tecnologias ou métricas, os respectivos elementos são omitidos. Nome, contexto e links da prévia vêm do cadastro do projeto.

O destaque Metanoia 21 usa uma captura real da landing page, armazenada em `public/projects/metanoia-21.png`, com link para o site publicado. Atualize a imagem caso o visual do projeto mude. Os números do SIS Monitoring vieram do conteúdo original; não representam métricas de conversão da landing page. Metadados de compartilhamento estão em `src/app/layout.tsx`.
