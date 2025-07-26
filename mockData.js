// Dados mockados para demonstração do PartnerSync AI

export const userProfile = {
  name: "Marina Silva",
  role: "Product Manager",
  company: "iFood",
  experience: "8 anos",
  avatar: "/api/placeholder/150/150"
};

export const dnaData = {
  dimensions: [
    { name: "Liderança", value: 85, max: 100 },
    { name: "Técnico", value: 45, max: 100 },
    { name: "Vendas", value: 70, max: 100 },
    { name: "Estratégia", value: 90, max: 100 },
    { name: "Execução", value: 80, max: 100 },
    { name: "Networking", value: 75, max: 100 }
  ],
  strengths: [
    "Visão estratégica excepcional",
    "Liderança natural e inspiradora",
    "Excelente em execução de projetos",
    "Forte capacidade de networking"
  ],
  gaps: [
    "Conhecimento técnico limitado",
    "Experiência em vendas B2B",
    "Gestão financeira avançada"
  ],
  idealPartner: {
    type: "CTO Estratégico",
    description: "Profissional técnico com visão de negócio, capaz de traduzir estratégia em arquitetura de produto.",
    compatibility: 87
  }
};

export const evolutionData = [
  { month: "Jan", lideranca: 80, tecnico: 40, vendas: 65, estrategia: 85, execucao: 75, networking: 70 },
  { month: "Fev", lideranca: 82, tecnico: 42, vendas: 67, estrategia: 87, execucao: 77, networking: 72 },
  { month: "Mar", lideranca: 85, tecnico: 45, vendas: 70, estrategia: 90, execucao: 80, networking: 75 }
];

export const chatHistory = [
  {
    id: 1,
    type: "bot",
    message: "Olá Marina! Notei que você mencionou dificuldades com sócios técnicos no passado. Pode me contar mais sobre isso?",
    timestamp: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    type: "user",
    message: "Sim, tive dois sócios CTOs que eram muito focados em detalhes técnicos e não conseguiam ver o big picture do negócio.",
    timestamp: "2024-01-15T10:02:00Z"
  },
  {
    id: 3,
    type: "bot",
    message: "Entendo. Isso sugere que você precisa de alguém mais estratégico. Como você se sente quando precisa tomar decisões técnicas rápidas?",
    timestamp: "2024-01-15T10:03:00Z"
  },
  {
    id: 4,
    type: "user",
    message: "Fico ansiosa porque não tenho o conhecimento técnico suficiente, mas também me frustro quando o CTO não consegue me explicar de forma simples.",
    timestamp: "2024-01-15T10:05:00Z"
  },
  {
    id: 5,
    type: "bot",
    message: "Perfeito! Isso confirma que você precisa de um CTO que seja um 'tradutor' - técnico mas com habilidade de comunicação estratégica. Vou ajustar seu perfil.",
    timestamp: "2024-01-15T10:06:00Z",
    insight: "Perfil atualizado: Preferência por CTO com forte comunicação estratégica"
  }
];

export const matches = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "CTO & Co-founder",
    company: "TechFlow (Exit: R$ 50M)",
    compatibility: 94,
    avatar: "/api/placeholder/100/100",
    strengths: ["Arquitetura de Software", "Gestão de Produto", "Comunicação Estratégica"],
    experience: "12 anos",
    previousExits: 2,
    complementarity: {
      tecnico: 95,
      comunicacao: 88,
      estrategia: 85
    },
    potentialFrictions: [
      "Pode ser muito perfeccionista em decisões técnicas",
      "Histórico de trabalhar melhor com founders mais técnicos"
    ]
  },
  {
    id: 2,
    name: "Ana Rodriguez",
    role: "Head of Engineering",
    company: "Nubank",
    compatibility: 89,
    avatar: "/api/placeholder/100/100",
    strengths: ["Liderança Técnica", "Escalabilidade", "Mentoria"],
    experience: "10 anos",
    previousExits: 1,
    complementarity: {
      tecnico: 92,
      comunicacao: 85,
      estrategia: 80
    },
    potentialFrictions: [
      "Preferência por processos mais estruturados",
      "Pode ser menos flexível em mudanças rápidas"
    ]
  },
  {
    id: 3,
    name: "Roberto Kim",
    role: "Tech Lead",
    company: "Mercado Livre",
    compatibility: 82,
    avatar: "/api/placeholder/100/100",
    strengths: ["Full-Stack", "DevOps", "Agilidade"],
    experience: "8 anos",
    previousExits: 0,
    complementarity: {
      tecnico: 88,
      comunicacao: 75,
      estrategia: 70
    },
    potentialFrictions: [
      "Menos experiência em posições de liderança",
      "Pode precisar de mais orientação estratégica"
    ]
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    question: "Como você prefere tomar decisões importantes?",
    type: "multiple",
    options: [
      "Analiso todos os dados disponíveis antes de decidir",
      "Confio na minha intuição e experiência",
      "Consulto a equipe e decidimos juntos",
      "Tomo decisões rápidas e ajusto conforme necessário"
    ]
  },
  {
    id: 2,
    question: "Qual situação te deixa mais desconfortável?",
    type: "multiple",
    options: [
      "Apresentar para investidores sem ter todos os números",
      "Delegar tarefas críticas para outros",
      "Tomar decisões técnicas sem conhecimento profundo",
      "Gerenciar conflitos entre membros da equipe"
    ]
  },
  {
    id: 3,
    question: "Descreva uma situação onde você teve que liderar uma mudança difícil:",
    type: "text",
    placeholder: "Conte sobre um momento desafiador de liderança..."
  },
  {
    id: 4,
    question: "Em uma escala de 1-10, o quanto você concorda:",
    type: "scale",
    statements: [
      "Prefiro trabalhar com pessoas similares a mim",
      "Sou melhor em criar estratégias do que executá-las",
      "Gosto de estar no controle de todas as decisões",
      "Aprendo melhor fazendo do que estudando teoria"
    ]
  },
  {
    id: 5,
    question: "Qual seu maior medo ao escolher um sócio?",
    type: "multiple",
    options: [
      "Que ele não tenha a mesma dedicação que eu",
      "Que tenhamos visões muito diferentes do negócio",
      "Que ele queira controlar demais as decisões",
      "Que não consigamos nos comunicar efetivamente"
    ]
  }
];

export const insights = [
  {
    id: 1,
    title: "Padrão de Comunicação Identificado",
    description: "Você tende a ser mais assertiva em discussões sobre produto e estratégia, mas mais colaborativa em questões técnicas.",
    impact: "Isso sugere que você precisa de um CTO que seja confiante tecnicamente mas aberto ao diálogo estratégico.",
    date: "2024-01-20",
    type: "communication"
  },
  {
    id: 2,
    title: "Evolução na Tolerância ao Risco",
    description: "Seu perfil mostra uma crescente disposição para tomar riscos calculados, especialmente em decisões de produto.",
    impact: "Isso amplia o leque de sócios compatíveis, incluindo perfis mais empreendedores.",
    date: "2024-01-18",
    type: "risk"
  },
  {
    id: 3,
    title: "Preferência por Complementaridade",
    description: "Você demonstra preferir sócios que complementem suas habilidades ao invés de replicá-las.",
    impact: "Isso confirma que um CTO estratégico é mais adequado que um CTO puramente técnico.",
    date: "2024-01-15",
    type: "compatibility"
  }
];

