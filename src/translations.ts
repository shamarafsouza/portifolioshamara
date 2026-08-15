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
    tags: ['PHP', 'SQLite', 'FPDF'],
    repo: 'https://github.com/shamarafsouza/credenciais-estacionamento'
  },
  {
    code: '03',
    name: 'Painel Meteorológico',
    tags: ['JavaScript', 'REST API', 'Open-Meteo'],
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
      'ANALISANDO PERFIL PROFISSIONAL...',
      'CORRESPONDÊNCIA ENCONTRADA: 99.98%',
      'DESIGNAÇÃO: SHAMARA FERREIRA DE SOUZA',
      'STATUS: ACESSO AUTORIZADO.',
      'BEM-VINDA AO ARQUIVO.'
    ],

    introSkip: 'TOQUE PARA PULAR',

    hero: {
      eyebrow: 'ARQUIVO 0027, DESENVOLVEDORA FULL STACK',

      title1: 'UMA MENTE,',

      titleEm: 'MÚLTIPLAS',

      title2: 'SOLUÇÕES.',

      text: 'Sou Shamara Ferreira de Souza, bacharel em Sistemas de Informação e desenvolvedora Full Stack. Trabalho entre front-end e back-end com React, TypeScript, Node.js, Python, PHP, C# e .NET, criando aplicações que transformam necessidades reais em soluções digitais.',

      exploreBtn: 'EXPLORAR PROJETOS',

      githubBtn: 'GITHUB'
    },

    identity: {
      verified: 'IDENTIDADE VERIFICADA',

      name1: 'SHAMARA',

      name2: 'F. DE SOUZA',

      area: 'ÁREA',
      areaVal: 'FULL STACK',

      focus: 'FOCO',
      focusVal: 'DESENVOLVIMENTO WEB',

      status: 'STATUS',
      statusVal: 'DISPONÍVEL'
    },

    projectsSection: {
      label: 'SELEÇÃO DE PROJETOS',

      count: '03 PROJETOS EM DESTAQUE',

      title1: 'IDEIAS',

      titleEm: 'EM FUNCIONAMENTO.',

      open: 'ABRIR PROJETO',

      code: 'VER CÓDIGO'
    },

    projects: [
      {
        type: 'Experiência Web',

        text: 'ParkFácil é uma experiência web conceitual criada para apresentar, de forma clara e acessível, o fluxo de solicitação de uma credencial de estacionamento. O projeto explora interface, experiência do usuário e desenvolvimento front-end com uma abordagem próxima de um produto real.'
      },

      {
        type: 'Sistema em uso real',

        text: 'Sistema desenvolvido para automatizar a emissão de credenciais de estacionamento para idosos e pessoas com deficiência. A solução automatiza a numeração, geração do documento, assinatura digital e criação de PDFs com QR Code, substituindo o fluxo manual anterior.'
      },

      {
        type: 'Aplicação com API',

        text: 'Aplicação meteorológica desenvolvida com JavaScript e integração com a Open-Meteo. Permite pesquisar cidades, consultar condições atuais e visualizar a previsão dos próximos sete dias a partir de dados meteorológicos em tempo real.'
      }
    ],

    about: {
      eyebrow: 'ARQUIVO PESSOAL, DESIGNADA A RESOLVER',

      title1: 'QUEM SOU',

      titleEm: 'EU.',

      p1: 'Sou Shamara Ferreira de Souza, bacharel em Sistemas de Informação. Minha trajetória na tecnologia nasceu da necessidade de resolver problemas reais. Atualmente trabalho na área pública, onde desenvolvi e implementei um sistema de emissão automatizada de credenciais de estacionamento para idosos e pessoas com deficiência, utilizado em um processo real da administração municipal.',

      p2: 'Essa experiência mudou a forma como enxergo desenvolvimento. Código não existe apenas para funcionar: ele precisa simplificar processos, reduzir trabalho e fazer sentido para quem utiliza a solução. Hoje aplico essa visão no desenvolvimento Full Stack, utilizando React, TypeScript, Node.js, Python, PHP, C# e .NET para transformar ideias em produtos e sistemas funcionais.',

      game: 'ACESSAR SIMULAÇÃO SECRETA, JOGO DO DINOSSAURO'
    },

    contact: {
      eyebrow: 'CANAL DE CONTATO ABERTO',

      title1: 'VAMOS CRIAR',

      titleEm: 'ALGO NOVO?',

      linkedin: 'LINKEDIN'
    },

    footer: {
      name: '© 2026 SHAMARA FERREIRA DE SOUZA',

      stack: 'DESENVOLVIDO COM REACT + TYPESCRIPT'
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
      'ANALYZING PROFESSIONAL PROFILE...',
      'MATCH FOUND: 99.98%',
      'DESIGNATION: SHAMARA FERREIRA DE SOUZA',
      'STATUS: ACCESS AUTHORIZED.',
      'WELCOME TO THE FILE.'
    ],

    introSkip: 'TAP TO SKIP',

    hero: {
      eyebrow: 'FILE 0027, FULL STACK DEVELOPER',

      title1: 'ONE MIND,',

      titleEm: 'MULTIPLE',

      title2: 'SOLUTIONS.',

      text: 'I’m Shamara Ferreira de Souza, a graduate in Information Systems and a Full Stack Developer. I work across front-end and back-end development with React, TypeScript, Node.js, Python, PHP, C# and .NET, building applications that turn real needs into digital solutions.',

      exploreBtn: 'EXPLORE PROJECTS',

      githubBtn: 'GITHUB'
    },

    identity: {
      verified: 'IDENTITY VERIFIED',

      name1: 'SHAMARA',

      name2: 'F. DE SOUZA',

      area: 'FIELD',
      areaVal: 'FULL STACK',

      focus: 'FOCUS',
      focusVal: 'WEB DEVELOPMENT',

      status: 'STATUS',
      statusVal: 'AVAILABLE'
    },

    projectsSection: {
      label: 'SELECTED PROJECTS',

      count: '03 FEATURED PROJECTS',

      title1: 'IDEAS',

      titleEm: 'IN ACTION.',

      open: 'OPEN PROJECT',

      code: 'VIEW CODE'
    },

    projects: [
      {
        type: 'Web Experience',

        text: 'ParkFácil is a conceptual web experience designed to present a clear and accessible parking credential request flow. The project explores interface design, user experience and front-end development through an experience inspired by a real-world product.'
      },

      {
        type: 'System in Real Use',

        text: 'A system developed to automate the issuance of parking credentials for elderly and disabled citizens. The solution automates numbering, document generation, digital signing and QR Code PDF creation, replacing the previous manual workflow.'
      },

      {
        type: 'API-Powered Application',

        text: 'A weather application built with JavaScript and integrated with the Open-Meteo API. Users can search for cities, view current weather conditions and access a seven-day forecast using real-time meteorological data.'
      }
    ],

    about: {
      eyebrow: 'PERSONAL FILE, DESIGNATED TO SOLVE',

      title1: 'WHO',

      titleEm: 'I AM.',

      p1: 'I’m Shamara Ferreira de Souza, a graduate in Information Systems. My path into technology was driven by the need to solve real problems. I currently work in the public sector, where I designed and implemented an automated parking credential system for elderly and disabled citizens, now used as part of a real municipal process.',

      p2: 'That experience changed the way I see software development. Code should not only work — it should simplify processes, reduce unnecessary work and make sense to the people using it. Today, I bring the same mindset to Full Stack development, using React, TypeScript, Node.js, Python, PHP, C# and .NET to turn ideas into functional products and systems.',

      game: 'ACCESS SECRET SIMULATION, DINOSAUR GAME'
    },

    contact: {
      eyebrow: 'OPEN CONTACT CHANNEL',

      title1: 'LET’S BUILD',

      titleEm: 'SOMETHING NEW?',

      linkedin: 'LINKEDIN'
    },

    footer: {
      name: '© 2026 SHAMARA FERREIRA DE SOUZA',

      stack: 'BUILT WITH REACT + TYPESCRIPT'
    }
  }
}
