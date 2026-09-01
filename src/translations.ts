export type Lang = 'pt' | 'en'

export const projectMeta = [
  {
    code: '01',
    name: 'ParkFácil',
    tags: ['React', 'TypeScript', 'UX'],
    live: 'https://park-facil.vercel.app',
    repo: 'https://github.com/shamarafsouza/parkfacil'
  },
  {
    code: '02',
    name: 'Credenciais de Estacionamento',
    tags: ['PHP', 'SQLite', 'FPDF', 'FPDI'],
    repo: 'https://github.com/shamarafsouza/credenciais-estacionamento',
    demo: '/democredencial.gif'
  },
  {
    code: '03',
    name: 'Painel Meteorológico',
    tags: ['JavaScript', 'REST API', 'Dados'],
    live: '/previsao-tempo.html'
  }
]

export const translations = {
  pt: {
    nav: {
      projects: 'Projetos',
      profile: 'Perfil',
      contact: 'Contato'
    },

    langToggle: 'EN',

    systemStatus: 'SISTEMA ONLINE, BAIXO GUANDU, ES',

    intro: [
      'INICIANDO PROTOCOLO DE IDENTIDADE...',
      'LENDO ARQUIVO 0027...',
      'COMPARANDO PADRÃO COM BASE DE DADOS...',
      'CORRESPONDÊNCIA ENCONTRADA: 99.98%',
      'DESIGNAÇÃO: SHAMARA FERREIRA DE SOUZA',
      'STATUS: VERIFICANDO ACESSO.',
      'ACESSO CONCEDIDO.'
    ],

    introSkip: 'TOQUE PARA PULAR',

    hero: {
      eyebrow: 'ARQUIVO 0027, DESENVOLVEDORA',

      title1: 'UMA MENTE,',

      titleEm: 'MÚLTIPLAS',

      title2: 'SOLUÇÕES.',

      text: 'Sou Shamara Ferreira de Souza, desenvolvedora fullstack formada em Sistemas de Informação. Transito entre front-end e back-end com React, Node.js, TypeScript, Python, PHP e C#, e gosto de resolver o problema de ponta a ponta, do design da interface à lógica por trás dela.',

      exploreBtn: 'EXPLORAR PROJETOS',

      githubBtn: 'GITHUB'
    },

    identity: {
      verified: 'IDENTIDADE VERIFICADA',

      name1: 'SHAMARA',

      name2: 'F. DE SOUZA',

      area: 'ÁREA',
      areaVal: 'FULLSTACK',

      focus: 'FOCO',
      focusVal: 'DESENVOLVIMENTO WEB',

      status: 'STATUS',
      statusVal: 'DISPONÍVEL'
    },

    projectsSection: {
      label: 'SELEÇÃO DE PROJETOS',

      count: '03 REGISTROS ATIVOS',

      title1: 'IDEIAS',

      titleEm: 'EM FUNCIONAMENTO.',

      open: 'ABRIR PROJETO',

      code: 'VER CÓDIGO'
    },

    projects: [
      {
        type: 'Protótipo de Site',

        text: 'ParkFácil é uma landing page fictícia que desenvolvi para demonstrar, de forma pública e sem dados reais, a experiência de solicitar uma credencial de estacionamento. O sistema real, com o processo de emissão, está no projeto de Credenciais de Estacionamento.'
      },

      {
        type: 'Sistema de emissão',

        text: 'Sistema desenvolvido para automatizar a emissão de credenciais de estacionamento para idosos e pessoas com deficiência (PCD), realizando o cadastro dos dados, cálculo da idade, definição da validade conforme o tipo de credencial e geração do documento em PDF a partir de modelos predefinidos.'
      },

      {
        type: 'API em tempo real',

        text: 'Aplicação de clima com busca de cidades, leitura de condições atuais e previsão de sete dias a partir da Open-Meteo.'
      }
    ],

about: {
  eyebrow: 'ARQUIVO PESSOAL, DESIGNAÇÃO ÚNICA',

  title1: 'QUEM SOU',

  titleEm: 'EU.',

  p1: 'Sou Shamara Ferreira de Souza, formada em Sistemas de Informação. Minha trajetória profissional começou na gestão pública e, ao longo desse caminho, desenvolvi competências que hoje levo para a tecnologia: responsabilidade, organização, comunicação, adaptação e resolução de problemas.',

  p2: 'Durante a graduação, encontrei na tecnologia uma forma de transformar problemas reais em soluções. Foi assim que desenvolvi projetos acadêmicos e, principalmente, meu TCC: um sistema para automatizar a emissão de credenciais de estacionamento para idosos e pessoas com deficiência.',

  p3: 'Hoje, vejo o desenvolvimento de software como uma combinação entre lógica e compreensão. React, TypeScript, Python, PHP, C# e outras tecnologias são ferramentas. O que realmente me motiva é entender um problema, encontrar uma solução e transformar essa solução em algo que funcione.',

  game: 'ACESSAR SIMULAÇÃO SECRETA, JOGO DO DINOSSAURO'
},

trajectory: {
  eyebrow: 'LINHA DO TEMPO',

  title1: 'MINHA',

  titleEm: 'TRAJETÓRIA.',

  education: {
    label: 'FORMAÇÃO',
    title: 'Sistemas de Informação — UNESC',
    text: 'Formação voltada ao desenvolvimento de software, programação, banco de dados e construção de soluções tecnológicas. Conclusão em 17/12/2025.'
  },

  projects: {
    label: 'PROJETOS ACADÊMICOS',
    title: 'Do problema real à solução tecnológica',
    text: 'Desenvolvimento de sistemas para diferentes necessidades, incluindo credenciais de estacionamento, agendamento para Nail Designer e soluções para cantinas universitárias.'
  },

  professional: {
    label: 'EXPERIÊNCIA PROFISSIONAL',
    title: 'Chefe de Departamento de Engenharia de Trânsito',
    text: 'Experiência na gestão pública, envolvendo rotinas administrativas, atendimento ao público, processos, compras, organização de demandas e resolução de problemas.'
  },

  next: {
    label: 'PRÓXIMO PASSO',
    title: 'Consolidação da carreira em tecnologia',
    text: 'Busco uma oportunidade na área de desenvolvimento para aplicar minha base técnica, continuar aprendendo e transformar minha experiência em novas soluções.'
  }
},

experience: {
  eyebrow: 'O QUE A GESTÃO PÚBLICA ME ENSINOU',

  title1: 'EXPERIÊNCIA',

  titleEm: 'PROFISSIONAL.',

  items: [
    {
      icon: '📋',
      title: 'Organização',
      text: 'Gestão de documentos, processos e diferentes demandas administrativas.'
    },
    {
      icon: '🤝',
      title: 'Comunicação',
      text: 'Atendimento ao público e contato constante com diferentes setores e perfis.'
    },
    {
      icon: '🧩',
      title: 'Resolução de problemas',
      text: 'Análise de situações e busca por soluções práticas diante de problemas reais.'
    },
    {
      icon: '⏱️',
      title: 'Responsabilidade',
      text: 'Gestão de demandas, acompanhamento de processos e cumprimento de prazos.'
    },
    {
      icon: '💻',
      title: 'Tecnologia aplicada',
      text: 'Uso de sistemas administrativos e identificação de oportunidades de automação.'
    },
    {
      icon: '🔄',
      title: 'Adaptabilidade',
      text: 'Capacidade de lidar com mudanças, novas responsabilidades e situações inesperadas.'
    }
  ]
},

selfAwareness: {
  eyebrow: 'AUTOCONHECIMENTO',

  title1: 'ALÉM DO',

  titleEm: 'CÓDIGO.',

  strengthsTitle: 'PONTOS FORTES',

  strengths: [
    'Responsabilidade',
    'Organização',
    'Persistência',
    'Facilidade para aprender',
    'Resolução de problemas'
  ],

  developmentTitle: 'EM DESENVOLVIMENTO',

  development: [
    'Autoconfiança',
    'Comunicação profissional',
    'Posicionamento',
    'Aprofundamento técnico'
  ],

  quote: 'Estar em desenvolvimento não significa não ser capaz.',

  text: 'Tenho consciência dos pontos que ainda preciso desenvolver e venho trabalhando neles de forma intencional. Um dos principais é a autoconfiança: aprender a reconhecer minhas conquistas, confiar mais no meu conhecimento e me posicionar com segurança.',

  evolution: 'Minha trajetória me ensinou que não preciso saber tudo para ser capaz. Preciso estar disposta a aprender, resolver problemas e continuar evoluindo.'
},

education: {
  eyebrow: 'FORMAÇÃO ACADÊMICA',

  title: 'SISTEMAS DE INFORMAÇÃO',

  institution: 'UNESC — Centro Universitário do Espírito Santo',

  date: 'CONCLUSÃO: 17/12/2025',

  items: [
    'TCC voltado à automação de processos públicos',
    'Desenvolvimento de sistemas e aplicações web',
    'Programação e banco de dados',
    'Projetos acadêmicos aplicados a problemas reais'
  ]
},

    contact: {
      eyebrow: 'CANAL DE CONTATO ABERTO',

      title1: 'VAMOS CRIAR',

      titleEm: 'ALGO NOVO?',

      linkedin: 'LinkedIn'
    },

    footer: {
      name: '© 2026 SHAMARA FERREIRA DE SOUZA',

      stack: 'DESENVOLVIDO EM REACT + TYPESCRIPT'
    }
  },

  en: {
    nav: {
      projects: 'Projects',
      profile: 'Profile',
      contact: 'Contact'
    },

    langToggle: 'PT',

    systemStatus: 'SYSTEM ONLINE, BAIXO GUANDU, BRAZIL',

    intro: [
      'INITIALIZING IDENTITY PROTOCOL...',
      'READING FILE 0027...',
      'COMPARING PATTERN WITH DATABASE...',
      'MATCH FOUND: 99.98%',
      'DESIGNATION: SHAMARA FERREIRA DE SOUZA',
      'STATUS: CHECKING ACCESS.',
      'ACCESS GRANTED.'
    ],

    introSkip: 'TAP TO SKIP',

    hero: {
      eyebrow: 'FILE 0027, DEVELOPER',

      title1: 'ONE MIND,',

      titleEm: 'MULTIPLE',

      title2: 'SOLUTIONS.',

      text: 'I\'m Shamara Ferreira de Souza, a fullstack developer with a degree in Information Systems. I move between front-end and back-end with React, Node.js, TypeScript, Python, PHP and C#, and I like solving the problem end to end — from interface design to the logic behind it.',

      exploreBtn: 'EXPLORE PROJECTS',

      githubBtn: 'GITHUB'
    },

    identity: {
      verified: 'IDENTITY VERIFIED',

      name1: 'SHAMARA',

      name2: 'F. DE SOUZA',

      area: 'FIELD',
      areaVal: 'FULLSTACK',

      focus: 'FOCUS',
      focusVal: 'WEB DEVELOPMENT',

      status: 'STATUS',
      statusVal: 'AVAILABLE'
    },

    projectsSection: {
      label: 'SELECTED PROJECTS',

      count: '03 ACTIVE RECORDS',

      title1: 'IDEAS',

      titleEm: 'IN MOTION.',

      open: 'OPEN PROJECT',

      code: 'VIEW CODE'
    },

    projects: [
      {
        type: 'Website Prototype',

        text: 'ParkFácil is a fictional landing page I built to demonstrate, publicly and without real data, the experience of requesting a parking credential. The real system and issuance process are represented in the Parking Credentials project.'
      },

      {
        type: 'Issuance System',

        text: 'System developed to automate the issuance of parking credentials for elderly and disabled citizens, handling data registration, age calculation, validity according to credential type and PDF generation from predefined templates.'
      },

      {
        type: 'Real-time API',

        text: 'Weather app with city search, current conditions and a seven-day forecast powered by Open-Meteo.'
      }
    ],

about: {
  eyebrow: 'PERSONAL FILE, UNIQUE DESIGNATION',

  title1: 'WHO',

  titleEm: 'I AM.',

  p1: 'I\'m Shamara Ferreira de Souza, with a degree in Information Systems. My professional journey started in public administration, where I developed skills that I now bring into technology: responsibility, organization, communication, adaptability and problem solving.',

  p2: 'During college, I found in technology a way to transform real problems into practical solutions. That mindset guided my academic projects and especially my final thesis: a system designed to automate parking credential issuance for elderly and disabled citizens.',

  p3: 'Today, I see software development as a combination of logic and understanding. React, TypeScript, Python, PHP, C# and other technologies are tools. What motivates me is understanding a problem, finding a solution and turning that solution into something that works.',

  game: 'ACCESS SECRET SIMULATION, DINOSAUR GAME'
},

trajectory: {
  eyebrow: 'TIMELINE',

  title1: 'MY',

  titleEm: 'JOURNEY.',

  education: {
    label: 'EDUCATION',
    title: 'Information Systems — UNESC',
    text: 'Education focused on software development, programming, databases and technology solutions. Graduated on December 17, 2025.'
  },

  projects: {
    label: 'ACADEMIC PROJECTS',
    title: 'From real problem to technological solution',
    text: 'Development of systems for different needs, including parking credentials, Nail Designer scheduling and university cafeteria solutions.'
  },

  professional: {
    label: 'PROFESSIONAL EXPERIENCE',
    title: 'Head of Traffic Engineering Department',
    text: 'Experience in public administration involving administrative routines, public service, processes, procurement, organization and problem solving.'
  },

  next: {
    label: 'NEXT STEP',
    title: 'Building my career in technology',
    text: 'Looking for an opportunity in software development where I can apply my technical background, continue learning and turn my experience into new solutions.'
  }
},

experience: {
  eyebrow: 'WHAT PUBLIC ADMINISTRATION TAUGHT ME',

  title1: 'PROFESSIONAL',

  titleEm: 'EXPERIENCE.',

  items: [
    {
      icon: '📋',
      title: 'Organization',
      text: 'Managing documents, processes and multiple administrative demands.'
    },
    {
      icon: '🤝',
      title: 'Communication',
      text: 'Public service and constant interaction with different departments and people.'
    },
    {
      icon: '🧩',
      title: 'Problem solving',
      text: 'Analyzing situations and looking for practical solutions to real problems.'
    },
    {
      icon: '⏱️',
      title: 'Responsibility',
      text: 'Managing demands, following processes and meeting deadlines.'
    },
    {
      icon: '💻',
      title: 'Applied technology',
      text: 'Using administrative systems and identifying opportunities for automation.'
    },
    {
      icon: '🔄',
      title: 'Adaptability',
      text: 'Dealing with changes, new responsibilities and unexpected situations.'
    }
  ]
},

selfAwareness: {
  eyebrow: 'SELF-AWARENESS',

  title1: 'BEYOND',

  titleEm: 'CODE.',

  strengthsTitle: 'STRENGTHS',

  strengths: [
    'Responsibility',
    'Organization',
    'Persistence',
    'Fast learner',
    'Problem solving'
  ],

  developmentTitle: 'IN DEVELOPMENT',

  development: [
    'Self-confidence',
    'Professional communication',
    'Positioning',
    'Technical depth'
  ],

  quote: 'Being in development does not mean being incapable.',

  text: 'I am aware of the areas I still need to develop and I am actively working on them. One of the main ones is self-confidence: learning to recognize my achievements, trust my knowledge and communicate my ideas with greater confidence.',

  evolution: 'My journey taught me that I do not need to know everything to be capable. I need to be willing to learn, solve problems and keep evolving.'
},

education: {
  eyebrow: 'ACADEMIC BACKGROUND',

  title: 'INFORMATION SYSTEMS',

  institution: 'UNESC — Centro Universitário do Espírito Santo',

  date: 'GRADUATED: DECEMBER 17, 2025',

  items: [
    'Final thesis focused on public process automation',
    'Web systems and application development',
    'Programming and databases',
    'Academic projects applied to real problems'
  ]
},

    contact: {
      eyebrow: 'OPEN CONTACT CHANNEL',

      title1: 'LET\'S BUILD',

      titleEm: 'SOMETHING NEW?',

      linkedin: 'LinkedIn'
    },

    footer: {
      name: '© 2026 SHAMARA FERREIRA DE SOUZA',

      stack: 'BUILT WITH REACT + TYPESCRIPT'
    }
  }
}
