export type Lang = 'pt' | 'en'

export const projectMeta = [
  { code: '01', name: 'ParkFácil', tags: ['React', 'TypeScript', 'UX'], live: 'https://park-facil.vercel.app', repo: 'https://github.com/shamarafsouza/parkfacil' },
  { code: '02', name: 'Credenciais de Estacionamento', tags: ['PHP', 'SQLite', 'FPDF'], repo: 'https://github.com/shamarafsouza/credenciais-estacionamento' },
  { code: '03', name: 'Painel Meteorológico', tags: ['JavaScript', 'REST API', 'Dados'], live: '/previsao-tempo.html' }
]

export const translations = {
  pt: {
    nav: { projects: 'Projetos', profile: 'Perfil', contact: 'Contato' },
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
      text: 'Sou Shamara Ferreira de Souza, desenvolvedora fullstack formada em Sistemas de Informação. Transito entre front-end e back-end com React, Node.js, TypeScript, Python, PHP e C#, e gosto de resolver o problema de ponta a ponta — do design da interface à lógica por trás dela.',
      exploreBtn: 'EXPLORAR PROJETOS',
      githubBtn: 'GITHUB'
    },
    identity: {
      verified: 'IDENTIDADE VERIFICADA',
      name1: 'SHAMARA',
      name2: 'F. DE SOUZA',
      area: 'ÁREA', areaVal: 'FULLSTACK',
      focus: 'FOCO', focusVal: 'DESENVOLVIMENTO WEB',
      status: 'STATUS', statusVal: 'DISPONÍVEL'
    },
    projectsSection: {
      label: 'SELEÇÃO DE PROJETOS',
      count: '03 REGISTROS ATIVOS',
      title1: 'TESTADO',
      titleEm: 'APROVADO.',
      open: 'ABRIR PROJETO',
      code: 'VER CÓDIGO'
    },
    projects: [
      { type: 'Protótipo de Site', text: 'ParkFácil é uma landing page fictícia que desenvolvi para demonstrar, de forma pública e sem dados reais, a experiência de solicitar uma credencial de estacionamento. O sistema real, com o código de emissão de verdade, está no projeto de Credenciais de Estacionamento.' },
      { type: 'Produto em uso', text: 'Sistema que eliminou o fluxo manual de emissão de credenciais na secretaria, incluindo numeração automática, assinatura digital e PDF com QR Code.' },
      { type: 'API em tempo real', text: 'Aplicação de clima com busca de cidades, leitura de condições atuais e previsão de sete dias a partir da Open-Meteo.' }
    ],
    about: {
      eyebrow: 'ARQUIVO PESSOAL, DESIGNAÇÃO ÚNICA',
      title1: 'QUEM SOU',
      titleEm: 'EU.',
      p1: 'Sou Shamara Ferreira de Souza, formada em Sistemas de Informação. Minha trajetória não começou no código, começou na gestão pública. Hoje sou Chefe de Departamento de Engenharia de Trânsito em Baixo Guandu (ES), onde projetei e implementei sozinha um sistema de emissão automatizada de credenciais de estacionamento para idosos e PCD, hoje em uso real, que eliminou por completo o processo manual em papel e reduziu em 20% o tempo do fluxo antigo.',
      p2: 'Foi ali que aprendi que resolver problemas de verdade importa mais do que seguir modelo pronto. Hoje aplico essa mesma lógica ao desenvolvimento: React, TypeScript, Node.js, Python, PHP e C# são as ferramentas, mas o objetivo continua o mesmo, construir o que funciona, não o que só parece funcionar.',
      game: 'ACESSAR SIMULAÇÃO SECRETA, JOGO DO DINOSSAURO'
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
    nav: { projects: 'Projects', profile: 'Profile', contact: 'Contact' },
    langToggle: 'PT',
    systemStatus: 'SYSTEM ONLINE, BAIXO GUANDU, BRAZIL',
    intro: [
      'INITIALIZING IDENTITY PROTOCOL...',
      'READING FILE 0027...',
      'COMPARING PATTERN WITH DATABASE...',
      'MATCH FOUND: 99.98%',
      'DESIGNATION: SHAMARA FERREIRA DE SOUZA',
      'STATUS: ORIGINAL. NOT A COPY.',
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
      area: 'FIELD', areaVal: 'FULLSTACK',
      focus: 'FOCUS', focusVal: 'WEB DEVELOPMENT',
      status: 'STATUS', statusVal: 'AVAILABLE'
    },
    projectsSection: {
      label: 'SELECTED PROJECTS',
      count: '03 ACTIVE RECORDS',
      title1: 'TESTED',
      titleEm: 'APPROVED.',
      open: 'OPEN PROJECT',
      code: 'VIEW CODE'
    },
    projects: [
      { type: 'Portfolio Prototype', text: 'ParkFácil is a fictional landing page I built to demonstrate, publicly and without real data, the experience of requesting a parking credential. The real system, with the actual issuance code, is in the Parking Credentials project.' },
      { type: 'Product in production', text: 'System that eliminated the manual credential-issuing workflow at the city department, including automatic numbering, digital signature and QR Code PDFs.' },
      { type: 'Real-time API', text: 'Weather app with city search, current conditions and a seven-day forecast powered by Open-Meteo.' }
    ],
    about: {
      eyebrow: 'PERSONAL FILE, UNIQUE DESIGNATION',
      title1: 'WHO',
      titleEm: 'I AM.',
      p1: 'I\'m Shamara Ferreira de Souza, with a degree in Information Systems. My path didn\'t start in code — it started in public administration. I currently lead the Traffic Engineering Department in Baixo Guandu (ES), where I designed and built, on my own, an automated parking-credential system for elderly and disabled citizens, now in real use, which fully eliminated the paper-based process and cut processing time by 20%.',
      p2: 'That\'s where I learned that solving real problems matters more than following a template. I bring the same mindset to development today: React, TypeScript, Node.js, Python, PHP and C# are the tools — but the goal stays the same, building what works, not what just looks like it works.',
      game: 'ACCESS SECRET SIMULATION, DINOSAUR GAME'
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
