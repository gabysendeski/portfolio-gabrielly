export const profile = {
  name: "Gabrielly Sendeski",
  role: "Software Engineer",
  location: "Curitiba, Brasil",
  locationLabel: "Curitiba, BR",
  portrait: {
    src: "/profile.jpg",
    alt: "Gabrielly Sendeski, engenheira de software e desenvolvedora web",
  },
  email: "gaby.sendeski@hotmail.com",
  linkedin: "https://www.linkedin.com/in/gabrielly-sendeski/",
  github: "https://github.com/gabysendeski",
  whatsapp:
    "https://wa.me/5541984559193?text=" +
    encodeURIComponent(
      "Olá, Gabrielly! Conheci seu portfólio e gostaria de conversar sobre um projeto ou oportunidade.",
    ),
} as const;

export const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#experiencia", label: "Sobre mim" },
  { href: "#contato", label: "Contato" },
] as const;

export type Project = {
  id: string;
  name: string;
  featured?: boolean;
  category: string;
  title: string;
  context: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: readonly string[];
  liveUrl?: `https://${string}`;
  linkLabel?: string;
  preview?: {
    src: `/${string}`;
    alt: string;
    width: number;
    height: number;
    fit?: "contain" | "cover";
  };
  metrics?: readonly { value: string; label: string }[];
};

export const projects: readonly Project[] = [
  {
    id: "sis-monitoring",
    name: "SIS Monitoring",
    preview: {
      src: "/projects/sys-monitoring-original.jpg",
      alt: "Sys Monitoring com indicadores de status dos pedidos, filtros e gráficos de distribuição por transportadora.",
      width: 1600,
      height: 768,
      fit: "contain",
    },
    category: "Produto digital · Observabilidade",
    title: "Clareza para uma operação de 95 mil pedidos.",
    context: "SIS Monitoring · Produto interno B2C",
    description:
      "Um painel operacional que conecta indicadores, filtros e análise de atrasos para transformar uma operação complexa em informação acionável.",
    challenge:
      "Organizar a leitura de milhares de pedidos e seus diferentes estágios logísticos em uma interface que apoiasse decisões do dia a dia.",
    solution:
      "Reestruturação do painel com KPIs, filtros avançados, navegação protegida e experiência responsiva. Autenticação corporativa com Auth.js e Keycloak.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Auth.js",
      "Keycloak",
    ],
    metrics: [
      { value: "95 mil", label: "pedidos monitorados/mês" },
      { value: "5", label: "estágios logísticos" },
      { value: "8 h", label: "sessão corporativa" },
    ],
  },
  {
    id: "metanoia-21",
    name: "Metanoia 21",
    featured: true,
    category: "Landing page · Mentoria",
    title: "Metanoia 21: uma jornada apresentada com propósito.",
    context: "Metanoia 21 · Ketlyn Carvalho",
    description:
      "Uma landing page para apresentar a mentoria de 21 dias da Ketlyn Carvalho, conectando a proposta da jornada, suas etapas e o convite à participação em uma experiência visual acolhedora.",
    challenge:
      "Apresentar a proposta da mentoria, quem a conduz e o que está incluído de forma clara para mulheres interessadas em uma jornada de fé, reflexão e prática.",
    solution:
      "Conteúdo organizado em uma sequência que apresenta o público, as três etapas da jornada, a mentora e os recursos oferecidos, com chamadas para participação ao longo da página.",
    technologies: [],
    liveUrl: "https://metanoia-21-ketlyn.gaby-sendeski.chatgpt.site/",
    linkLabel: "Visitar landing page",
    preview: {
      src: "/projects/metanoia-21.png",
      width: 1440,
      height: 1000,
      alt: "Página inicial do Metanoia 21, por Ketlyn Carvalho, com fundo verde, tipografia dourada e apresentação da mentoria de 21 dias.",
    },
  },
  {
    id: "akyama",
    name: "Akyama",
    preview: {
      src: "/projects/gestao-escolar.png",
      alt: "Sistema de gestão escolar com formulários de alunos, matérias e provas, incluindo seleção de aluno, matéria e nota.",
      width: 1638,
      height: 868,
      fit: "contain",
    },
    category: "Aplicação web · Educação",
    title: "Gestão escolar conectada, do cadastro às notas.",
    context: "Akyama · Sistema de gestão escolar",
    description:
      "Alunos, matérias e provas organizados em um sistema de gestão escolar, com registro de notas e cálculo de médias para acompanhar o desempenho dos estudantes.",
    challenge:
      "Reunir os cadastros escolares e as avaliações em uma interface que facilite a consulta e a atualização dos dados, mantendo a relação entre alunos, matérias e provas.",
    solution:
      "Frontend em Vue.js com operações de cadastro, edição e exclusão, integrado via Axios a uma API em Node.js e Express. Dados relacionados em PostgreSQL e cálculo de médias apresentado no painel de gestão.",
    technologies: [
      "Vue.js",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Axios",
    ],
  },
  {
    id: "ecommerce-cadastra",
    name: "E-commerce Cadastra",
    category: "E-commerce · Experiência de compra",
    title: "Da busca ao carrinho, uma experiência de compra intuitiva.",
    context: "Cadastra · Desafio front-end",
    description:
      "Catálogo de produtos com filtros por cor, tamanho e preço, ordenação e carrinho de compras. Uma interface responsiva para explorar produtos no desktop e no celular.",
    challenge:
      "Transformar o layout proposto no desafio em uma experiência de navegação funcional, conectando filtros, produtos e carrinho em diferentes tamanhos de tela.",
    solution:
      "Interface em React e TypeScript, estilizada com Sass, com carregamento progressivo de produtos e consumo de uma API simulada com JSON Server. Build organizado com Gulp e Webpack.",
    technologies: [
      "React",
      "TypeScript",
      "Sass",
      "Gulp",
      "Webpack",
      "JSON Server",
    ],
    preview: {
      src: "/projects/cadastra.png",
      alt: "E-commerce Cadastra com catálogo de roupas, filtros por cor, tamanho e preço e botões de compra.",
      width: 1440,
      height: 1000,
    },
  },
] satisfies readonly Project[];

export const services = [
  {
    number: "01",
    title: "Landing pages com intenção",
    description:
      "Sua proposta de valor apresentada com clareza, identidade visual e um caminho simples até o contato.",
    items: [
      "Conteúdo e hierarquia visual",
      "Experiência mobile",
      "Chamadas para ação",
    ],
  },
  {
    number: "02",
    title: "Interfaces que fazem sentido",
    description:
      "Produtos digitais que traduzem regras de negócio em experiências consistentes e fáceis de usar.",
    items: [
      "React, Next.js e TypeScript",
      "Componentes reutilizáveis",
      "Acessibilidade e performance",
    ],
  },
  {
    number: "03",
    title: "Integrações que conectam",
    description:
      "Dados, autenticação e automações conectados à experiência para atender necessidades reais da operação.",
    items: [
      "Integração de APIs",
      "Dashboards operacionais",
      "Jornadas de atendimento",
    ],
  },
] as const;

export const process = [
  {
    title: "Entender",
    description:
      "Objetivo, público e contexto. A primeira decisão é o problema que precisamos resolver.",
  },
  {
    title: "Estruturar",
    description:
      "Conteúdo, fluxo e prioridades. Cada parte da experiência precisa ter uma função.",
  },
  {
    title: "Construir",
    description:
      "Interface e engenharia juntas, com componentes consistentes e atenção aos detalhes.",
  },
  {
    title: "Refinar",
    description:
      "Revisar responsividade, acessibilidade e jornadas antes de colocar o projeto no ar.",
  },
] as const;

export const experience = [
  {
    label: "ATUAÇÃO",
    title: profile.role,
    company: "Cia. Hering · Squad B2C",
    description:
      "Produtos digitais, chatbot Herica, jornadas de WhatsApp, dashboards e plataformas operacionais internas.",
  },
  {
    label: "EXPERIÊNCIA",
    title: "Frontend & Customer Experience",
    company: "Interfaces e jornadas digitais",
    description:
      "Desenvolvimento de interfaces, experiências de autoatendimento e integrações que aproximam negócio e tecnologia.",
  },
  {
    label: "BASE",
    title: "Suporte técnico & análise de incidentes",
    company: "Uma perspectiva construída na operação",
    description:
      "Triagem, diagnóstico, documentação e comunicação com diferentes áreas: a base prática da minha visão de produto.",
  },
] as const;

export const stack = [
  {
    title: "Interface & experiência",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "styled-components",
      "Redux Toolkit",
      "React Hook Form",
    ],
  },
  {
    title: "Dados & integrações",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Auth.js",
      "Keycloak",
    ],
  },
  {
    title: "Desenvolvimento & entrega",
    items: ["Git", "GitHub", "Vercel", "Vite", "Figma"],
  },
] as const;

export const questions = [
  {
    question: "Podemos conversar sobre uma landing page?",
    answer:
      "Sim. Me conte sobre seu negócio, o público que você quer alcançar e o principal objetivo da página. Esse contexto ajuda a definir o conteúdo, as funcionalidades e o escopo do projeto.",
  },
  {
    question: "Como são definidos prazo e investimento?",
    answer:
      "A partir do escopo: quantidade de conteúdo, materiais disponíveis, integrações e necessidades da experiência. Podemos alinhar esses pontos em uma primeira conversa, antes de definir a proposta.",
  },
  {
    question: "O que preciso ter para começar?",
    answer:
      "Uma ideia do objetivo da página e de quem você quer alcançar. Se já tiver identidade visual, fotos, textos ou referências, podemos usá-los como ponto de partida e identificar juntos o que ainda precisa ser preparado.",
  },
] as const;
