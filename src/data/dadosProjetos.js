export const filtros = {
  pt: ['Todos', 'Profissionais', 'Acadêmicos', 'Pessoais'],
  en: ['All', 'Professional', 'Academic', 'Personal'],
  values: ['all', 'profissional', 'academico', 'pessoal']
};

export const projetos = [
  {
    id: 'Scrum do Zero',
    titulo: 'Scrum do Zero',
    categoria: 'academico',
    resumo: {
      pt: 'Gerenciador de tarefas com painel visual, priorização e organização.',
      en: 'Task manager with a visual dashboard, prioritization and organization.'
    },
    descricao: {
      pt: 'Uma aplicação para organizar tarefas de forma visual, acompanhar prioridades e manter o fluxo de trabalho mais claro no dia a dia.',
      en: 'An application for organizing tasks visually, tracking priorities and keeping the daily workflow clear.'
    },
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    imagens: ['assets/projetos/taskflow/inicio.png', 'assets/projetos/taskflow/cadastro.png'],
    repositorio: '#',
    demonstracao: '#',
    capa: 'clipboard'
  },
  /* {
    id: 'devblog',
    titulo: 'DevBlog',
    categoria: 'pessoal',
    resumo: {
      pt: 'Blog de artigos com autenticação, editor de texto e sistema de comentários.',
      en: 'Article blog with authentication, a text editor and a comment system.'
    },
    descricao: {
      pt: 'Plataforma de publicação de artigos com autenticação de usuários, editor de texto e comentários para incentivar a troca de ideias.',
      en: 'An article publishing platform with user authentication, a text editor and comments to encourage the exchange of ideas.'
    },
    tecnologias: ['Node.js', 'Express', 'PostgreSQL'],
    imagens: [],
    repositorio: '#',
    demonstracao: '#',
    capa: 'edit'
  },
  {
    id: 'shoplite',
    titulo: 'ShopLite',
    categoria: 'profissional',
    resumo: {
      pt: 'Loja virtual com catálogo, carrinho e fluxo de checkout simulado.',
      en: 'Online store with a catalog, cart and simulated checkout flow.'
    },
    descricao: {
      pt: 'Experiência de loja virtual com catálogo de produtos, carrinho de compras e um fluxo de checkout simulado.',
      en: 'An online store experience with a product catalog, shopping cart and a simulated checkout flow.'
    },
    tecnologias: ['React', 'Node.js', 'Stripe'],
    imagens: [],
    repositorio: '#',
    demonstracao: '#',
    capa: 'cart'
  } */
];
