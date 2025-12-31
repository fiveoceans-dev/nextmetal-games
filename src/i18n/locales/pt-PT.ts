const ptPT = {
  common: {
    cancel: "Cancelar",
    close: "Fechar",
    previous: "Anterior",
    next: "Próximo",
    more: "Mais",
    loading: "Carregando...",
    saving: "Salvando...",
    save: "Salvar",
    delete: "Excluir",
    start: "Iniciar",
    stop: "Parar",
    view: "Ver",
    copy: "Copiar",
    copied: "Copiado!",
    error: "Erro",
    success: "Sucesso!",
    unknown: "Desconhecido",
    locked: "Bloqueado",
    send: "Enviar",
    sending: "Enviando...",
    searchPlaceholder: "Pesquisar...",
    or: "ou",
  },
  nav: {
    home: "Início",
    rewards: "Recompensas",
    data: "Dados",
    datasets: "Datasets",
    language: "Idioma",
    languageAria: "Selecionar idioma",
    getStarted: "Começar",
    logoAlt: "Logo da NextMetal",
  },
  hero: {
    marquee: "Jogue e ganhe recompensas.",
    title: "Jogue, ganhe e construa IA",
    subtitle: "IA que aprende jogando no computador.",
    cta: {
      gamers: "Para gamers",
      developers: "Para desenvolvedores",
    },
  },
  supportedGames: {
    title: "Jogos suportados",
    status: {
      live: "Disponível",
      comingSoon: "Em breve",
    },
    logoAlt: "Logo de {{name}}",
    games: {
      lol: "League of Legends",
      starcraft: "StarCraft",
      starcraft2: "StarCraft II",
    },
  },
  rewards: {
    title: "Ganhe recompensas",
    subtitlePrefix: "Ganhe",
    token: "$METAL",
    subtitleSuffix: "a cada hora jogada.",
    tiers: {
      silver: {
        label: "Prata",
        rate: "10 METAL por hora",
        description: "Qualquer pessoa pode participar e ganhar recompensas.",
      },
      gold: {
        label: "Ouro",
        rate: "25 METAL por hora",
        description: "Nível para contribuintes de longo prazo e apoiadores.",
      },
      platinum: {
        label: "Platina",
        rate: "50 METAL por hora",
        description: "Nível para especialistas e jogadores profissionais.",
      },
    },
    cta: "Jogar e ganhar recompensas",
  },
  data: {
    titlePrefix: "Dados",
    titleHighlight: "coletados",
    subtitle: "Coleta mínima, sinal máximo.",
    cards: {
      mouse: {
        title: "Entrada do mouse",
        description: "Alinhado ao frame no clique",
      },
      keyboard: {
        title: "Entrada do teclado",
        description: "Fluxo tecla pressionada/solta",
      },
      screen: {
        title: "Vídeo da tela",
        description: "Capture o gameplay com nitidez",
      },
      timing: {
        title: "Sincronização",
        description: "Timestamps sincronizam todos os dados",
      },
      webcam: {
        title: "Webcam (opcional)",
        description: "Coletada somente quando ativada",
      },
    },
    control: {
      title: "Você decide",
      description: "Escolha exatamente o que compartilhar.",
    },
  },
  datasets: {
    eyebrow: "Datasets · Para laboratórios de IA",
    titlePrefix: "Datasets:",
    titleHighlight: "Para laboratórios de IA",
    description:
      "Datasets de alta qualidade para treinar e avaliar agentes AGI avançados em ambientes complexos com compreensão multimodal, planejamento estratégico e aprendizado adaptativo.",
    cards: {
      raw: {
        name: "Bruto",
        subtitle: "Tela + entradas, sincronizado, nível humano.",
        items: [
          "Sincronia de tela + entradas",
          "Jogo em nível humano",
          "Streams sincronizados no tempo",
        ],
      },
      annotated: {
        name: "Anotado",
        subtitle: "Bruto + rótulos, fases, metadados.",
        items: [
          "Bruto + rótulos",
          "Fases e eventos",
          "Metadados de treino",
        ],
      },
    },
    cta: "Fale conosco",
    dialog: {
      title: "Conte sobre seu laboratório",
      description:
        "Compartilhe seus planos para dados de treinamento de IA e guiaremos os próximos passos.",
      fields: {
        name: "Nome",
        email: "Email profissional",
        organization: "Organização",
        message: "O que vocês estão construindo?",
      },
      placeholders: {
        name: "João Silva",
        email: "you@lab.ai",
        organization: "NextMetal Labs",
        message: "Conte seus objetivos, cronograma e plano de uso do dataset.",
      },
      buttons: {
        cancel: "Cancelar",
        submit: "Enviar mensagem",
        submitting: "Enviando...",
      },
    },
    toast: {
      missing: {
        title: "Faltam informações",
        description: "Nome, email e uma mensagem curta são obrigatórios.",
      },
      thanks: {
        title: "Obrigado pelo contato!",
        description: "Em breve entraremos em contato.",
      },
    },
  },
  cta: {
    line1: "Ajude-nos a construir",
    line2: "a Inteligência Artificial Geral (AGI)!",
    subtitle: "Jogue. Ganhe. Construa AGI.",
  },
  footer: {
    rights: "© 2025 Todos os direitos reservados.",
  },
  theme: {
    toggle: "Alternar tema",
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
  },
  dashboard: {
    title: "Painel",
    logoAlt: "Logo da NextMetal",
    logout: "Sair",
    menuItems: {
      studio: "Estúdio",
      gallery: "Galeria",
      rewards: "Recompensas",
      settings: "Configurações",
    },
  },
  appSidebar: {
    menu: "Menu",
    dashboard: "Painel",
    account: "Conta",
  },
  network: {
    walletDisconnected: "Carteira desconectada",
    correctNetwork: "Testnet Monad",
    wrongNetwork: "Rede incorreta",
  },
  auth: {
    demoToast: {
      title: "Credenciais demo preenchidas",
      description: "Clique em Entrar para acessar a conta demo",
    },
    loginToast: {
      title: "Bem-vindo de volta!",
      description: "Login realizado com sucesso.",
    },
    signupToast: {
      title: "Conta criada!",
      description: "Agora você pode entrar com suas credenciais.",
    },
    errorToast: {
      title: "Erro",
    },
    title: {
      login: "Entrar",
      signup: "Cadastrar",
    },
    description: {
      login: "Insira suas credenciais para acessar o painel",
      signup: "Crie uma conta para começar a vincular seu perfil",
    },
    fields: {
      username: "Nome de usuário",
      email: "Email",
      password: "Senha",
    },
    placeholders: {
      username: "Digite seu nome de usuário",
      email: "you@email.com",
    },
    loading: "Carregando...",
    actions: {
      login: "Entrar",
      signup: "Cadastrar",
    },
    switchToSignup: "Não tem conta? Cadastre-se",
    switchToLogin: "Já tem conta? Entrar",
    or: "ou",
    demoHint: "Clique em \"Usar conta demo\" para testar",
    demoButton: "Usar conta demo",
    back: "← Voltar ao início",
  },
  account: {
    errorTransactions: {
      title: "Erro",
      description: "Não foi possível carregar as transações",
    },
    logout: {
      title: "Saiu",
      description: "Você saiu com sucesso.",
    },
    error: {
      title: "Erro",
    },
    title: "Conta",
    logoutButton: "Sair",
    profile: {
      title: "Informações do perfil",
      description: "Detalhes da conta",
      email: "Email:",
      userId: "ID do usuário:",
    },
    transactions: {
      title: "Histórico de transações",
      description: "Transações blockchain enviadas à Monad testnet",
      empty:
        "Ainda não há transações. Conclua as etapas do painel para criar a primeira.",
      rank: "Rank: {{tier}} {{division}}",
      view: "Ver",
      hash: "Hash da transação",
    },
  },
  gallery: {
    title: "Galeria",
    filenameHint: "Nome do arquivo salvo: nextmetal_video_*.webm",
    uploadAll: "Enviar tudo",
    tabs: { all: "Todos", clips: "Clipes", best: "Melhores" },
    stats: {
      recordings: "Gravações",
      hours: "Horas",
      thisWeek: "Nesta semana",
    },
    play: "Reproduzir",
    emptySearch: {
      title: "Nenhuma gravação encontrada",
      description: "Tente outra busca ou crie sua primeira gravação.",
    },
    emptyAll: {
      title: "Ainda não há gravações",
      browserLimitLabel: "Limitação do navegador:",
      browserLimitDescription: "Não é possível ler arquivos locais.",
      desktopAppRequired: "É necessário um app desktop para detecção automática.",
    },
    mockNames: {
      lolRanked: "League of Legends - Partida ranqueada",
      valorantCompetitive: "VALORANT - Competitivo",
      cs2Casual: "Counter-Strike 2 - Partida casual",
      apexRanked: "Apex Legends - Ranqueada",
      overwatchQuick: "Overwatch 2 - Jogo rápido",
      rocketTournament: "Rocket League - Torneio",
      dotaRanked: "Dota 2 - Partida ranqueada",
      fortniteCreative: "Fortnite - Modo criativo",
    },
    mockGames: {
      lol: "League of Legends",
      valorant: "VALORANT",
      cs2: "Counter-Strike 2",
      apex: "Apex Legends",
      overwatch: "Overwatch 2",
      rocket: "Rocket League",
      dota: "Dota 2",
      fortnite: "Fortnite",
    },
  },
  status: {
    completed: "Concluído",
    processing: "Processando",
    failed: "Falhou",
    unknown: "Desconhecido",
  },
  studio: {
    title: "Estúdio",
    select: {
      screen: "Tela cheia",
      window: "Janela",
    },
    action: {
      stop: "Parar",
      record: "Gravar",
      stream: "Transmitir",
    },
    labels: {
      screen: "Tela",
      camera: "Câmera",
      audio: "Áudio",
      input: "Entrada",
    },
    state: {
      on: "Ativo",
      off: "Inativo",
    },
    events: "{{count}} eventos",
    session: {
      title: "Informações da sessão e downloads",
      id: "ID da sessão:",
      start: "Hora de início:",
      duration: "Duração:",
      notRecording: "Não gravando",
      inputEvents: "Eventos de entrada:",
      videoFormat: "Formato de vídeo:",
      dataExport: "Exportação de dados:",
      dataExportFormat: "ZIP (vídeo + JSON + metadados)",
      readyTitle: "Pronto para treinamento de IA:",
      readyDescription:
        "Ao finalizar, o arquivo ZIP é baixado automaticamente. Inclui vídeo sincronizado (.webm), dados de entrada (.json) e metadados de treinamento.",
      prepTitle: "Pronto para gravar:",
      prepDescription:
        "Inicie a gravação para capturar vídeo e entradas sincronizadas para treinamento de IA.",
    },
  },
  rewardsPage: {
    title: "Recompensas",
    tabs: {
      league: "Liga",
      earnings: "Ganhos",
      achievements: "Conquistas",
    },
    earnings: {
      thisMonth: "Este mês",
      sessions: "Sessões",
    },
    achievements: {
      firstRecording: {
        title: "Primeira gravação",
        description: "Grave seu primeiro jogo",
      },
      champion: {
        title: "Campeão",
        description: "Ganhe 100 $METAL",
      },
    },
  },
  settings: {
    title: "Configurações",
    fields: {
      username: "Nome de usuário",
      email: "Email",
    },
    save: "Salvar",
    saving: "Salvando...",
    twoFactor: "Autenticação de dois fatores",
    enable: "Ativar",
    changePassword: "Alterar senha",
    change: "Alterar",
    deleteAccount: "Excluir conta",
    delete: "Excluir",
    toast: {
      profileUpdated: {
        title: "Perfil atualizado",
        description: "Seu perfil foi atualizado com sucesso.",
      },
      error: {
        title: "Erro",
        description: "Não foi possível atualizar o perfil. Tente novamente.",
      },
      deleted: {
        title: "Conta excluída",
        description: "Sua conta foi excluída permanentemente.",
      },
      deleteError: {
        title: "Erro",
        description: "Não foi possível excluir a conta. Tente novamente.",
      },
    },
  },
  recording: {
    title: "Estúdio de gravação de jogos",
    subtitle: "Plataforma de coleta de dados para IA",
    controlsTitle: "Controles de gravação",
    selectLabel: "Seleção de tela/janela",
    selectPlaceholder: "Selecione uma tela para gravar",
    select: {
      screen: "Tela cheia",
      window: "Janela do aplicativo",
    },
    start: "Iniciar gravação",
    stop: "Parar gravação",
    recordingBadge: "Gravando",
    sessionLabel: "Sessão: {{id}}",
    previewTitle: "Prévia ao vivo",
    previewHint: "Clique em \"Iniciar gravação\" para começar",
    cards: {
      screenCapture: {
        title: "Captura de tela",
        active: "Ativa",
        inactive: "Inativa",
        description: "Captura a tela com áudio do sistema",
      },
      webcam: {
        title: "Webcam",
        active: "Ativa",
        inactive: "Inativa",
        description: "Gravação em overlay 720p",
      },
      inputEvents: {
        title: "Eventos de entrada",
        recording: "Gravando",
        inactive: "Inativa",
        description: "Dados de teclado e mouse",
      },
    },
    sessionInfo: {
      title: "Informações da sessão",
      id: "ID da sessão:",
      inputEvents: "Eventos de entrada:",
      startTime: "Hora de início:",
      duration: "Duração:",
      seconds: "{{count}} s",
    },
    alert: {
      recordingFailed:
        "Não foi possível iniciar a gravação. Verifique as permissões.",
    },
  },
  steps: {
    linkAccount: {
      unavailableTitle: "Vincular conta da League",
      unavailableDescription:
        "Esse recurso requer configuração de backend. Contate o suporte para habilitar.",
      toast: {
        missing: {
          title: "Erro",
          description: "Informe o nome do jogo e a tagline",
        },
        found: {
          title: "Conta encontrada!",
          description: "Altere seu ícone de perfil para verificar a posse.",
        },
        error: {
          title: "Erro",
          description: "Falha ao vincular conta",
        },
        verified: {
          title: "Verificado!",
          description: "Sua conta da League foi verificada com sucesso.",
        },
        verifyFailed: {
          title: "Falha na verificação",
          description: "Não foi possível verificar a posse",
        },
        unlink: {
          title: "Conta desvinculada",
          description: "Conta removida.",
        },
        unlinkError: {
          title: "Erro",
          description: "Falha ao desvincular conta",
        },
      },
      title: "Vincular conta da League",
      description: "Vincule sua conta do League of Legends para começar",
      privacyTitle: "Privacidade em primeiro lugar:",
      privacyDescription:
        "Não armazenamos dados brutos. Apenas análises derivadas são salvas on-chain.",
      linkedAccounts: "Contas vinculadas",
      addAccount: "Adicionar nova conta",
      gameName: "Nome do jogo",
      tagLine: "Tagline",
      region: "Região",
      starting: "Iniciando...",
      startVerification: "Iniciar verificação",
    },
    verification: {
      title: "Verificar posse da conta",
      description: "Siga os passos para comprovar a posse",
      changeIcon: "Altere seu ícone de perfil para:",
      iconNumber: "Número do ícone:",
      stepsTitle: "Passos de verificação:",
      steps: [
        "Abra o cliente do League of Legends",
        "Vá para as configurações de perfil",
        "Altere o ícone para o mostrado acima",
        "Clique em \"Verificar posse\" abaixo",
      ],
      cancel: "Cancelar",
      verifying: "Verificando...",
      verify: "Verificar posse",
    },
    connectWallet: {
      title: "Conectar carteira",
      description:
        "Conecte uma carteira Web3 na Monad testnet para salvar credenciais verificadas",
      hint: "Continue com MetaMask, Coinbase Wallet ou WalletConnect",
      connectedTitle: "Carteira conectada!",
      connectedDescription: "Clique em continuar para ir à etapa 3",
      continue: "Continuar para a etapa 3",
      selectWallet: "Selecione uma carteira para conectar",
    },
    saveBlockchain: {
      unavailableTitle: "Salvar na blockchain",
      unavailableDescription:
        "Esse recurso requer configuração de backend. Contate o suporte para habilitar a integração.",
      toast: {
        success: {
          title: "Sucesso!",
          description: "Credenciais salvas na Monad testnet.",
        },
        missingWallet: {
          title: "Erro",
          description: "Conecte sua carteira primeiro",
        },
        switchRequired: {
          title: "Troca de rede necessária",
          description: "Troque para {{network}} na carteira e tente novamente.",
        },
        checkWallet: {
          title: "Verifique sua carteira",
          description: "Aprove a transação no pop-up da carteira",
        },
        transactionFailed: {
          title: "Falha na transação",
          description: "Falha ao enviar a transação",
        },
        copied: {
          title: "Copiado!",
          description: "Hash da transação copiado",
        },
        switchSuccess: {
          title: "Rede trocada",
          description: "Trocado para {{network}}",
        },
        switchFailed: {
          title: "Falha na troca",
          description: "Troque a rede na carteira",
        },
      },
      errors: {
        switchNetwork:
          "Troque para {{network}} (chain {{id}}) e tente novamente.",
        noVerifiedAccount: "Nenhuma conta verificada encontrada",
        saveFailed: "Falha ao salvar credenciais",
      },
      blocked: {
        title: "Conclua as etapas anteriores",
        description:
          "Vincule sua conta de jogo e conecte sua carteira para continuar",
      },
      success: {
        title: "Credenciais salvas!",
        description: "Credenciais verificadas salvas na Monad testnet",
        hashLabel: "Hash da transação",
        copy: "Copiar hash",
        viewExplorer: "Ver no explorer",
        saveAnother: "Salvar outro",
      },
      card: {
        title: "Salvar na Monad",
        description:
          "Armazene análises com privacidade na blockchain Monad",
      },
      privacyNotice:
        "Salvamos apenas provas de conquistas e análises. Dados brutos e pessoais nunca são armazenados.",
      account: {
        label: "Conta a salvar:",
        rank: "Rank atual: {{rank}}",
      },
      feeNotice:
        "Isto envia uma transação real para a Monad testnet. Confirme na carteira e pague uma pequena taxa de gas.",
      wrongNetwork:
        "Você está na rede errada (chain {{chainId}}). Troque para {{network}} (ID {{id}}) para continuar.",
      switchButton: "Trocar para Monad",
      switching: "Trocando...",
      badgeAlt: "NFT de badge de habilidade",
      options: {
        title: "O que devemos salvar?",
        achievements: "Salvar prova de conquistas",
        nft: "Mintar NFT de badge de habilidade",
        zk: "Gerar prova ZK (opcional)",
      },
      transaction: {
        title: "Status da transação",
        prepare: "Preparar dados",
        confirmWallet: "Confirmar na carteira",
        submitted: "Enviada",
        confirming: "Aguardando confirmação",
        finalized: "Finalizada",
        viewExplorer: "Ver no explorer",
      },
      submit: {
        pendingWallet: "Confirmar na carteira...",
        pendingMonad: "Salvando na Monad...",
        default: "Salvar na Monad",
      },
    },
    linkedAccount: {
      unknown: "Desconhecido",
      unranked: "Sem rank",
      verified: "Verificado",
      unverified: "Não verificado",
      verify: "Verificar",
    },
  },
  wallet: {
    connected: "Carteira conectada",
    connectedDescription: "Conectado a {{address}}",
    disconnected: "Carteira desconectada",
    disconnectedDescription: "Conexão da carteira removida.",
    connecting: "Conectando...",
    connect: "Conectar carteira",
  },
  regions: {
    na1: "América do Norte",
    euw1: "Europa Ocidental",
    eune1: "Europa Nórdica e Oriental",
    kr: "Coreia",
    br1: "Brasil",
    la1: "América Latina Norte",
    la2: "América Latina Sul",
    oc1: "Oceania",
    ru: "Rússia",
    tr1: "Turquia",
    jp1: "Japão",
  },
  ui: {
    previousSlide: "Slide anterior",
    nextSlide: "Próximo slide",
    toggleSidebar: "Alternar barra lateral",
    morePages: "Mais páginas",
  },
  notFound: {
    title: "Página não encontrada",
    back: "Voltar ao início",
  },
  alerts: {
    recordingFailed:
      "Não foi possível iniciar a gravação. Verifique as permissões.",
  },
};

export default ptPT;
