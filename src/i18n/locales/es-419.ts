const es419 = {
  common: {
    cancel: "Cancelar",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
    more: "Más",
    loading: "Cargando...",
    saving: "Guardando...",
    save: "Guardar",
    delete: "Eliminar",
    start: "Iniciar",
    stop: "Detener",
    view: "Ver",
    copy: "Copiar",
    copied: "¡Copiado!",
    error: "Error",
    success: "¡Éxito!",
    unknown: "Desconocido",
    locked: "Bloqueado",
    send: "Enviar",
    sending: "Enviando...",
    searchPlaceholder: "Buscar...",
    or: "o",
  },
  nav: {
    home: "Inicio",
    rewards: "Recompensas",
    data: "Datos",
    datasets: "Conjuntos de datos",
    language: "Idioma",
    languageAria: "Seleccionar idioma",
    getStarted: "Empezar",
    logoAlt: "Logo de NextMetal",
  },
  hero: {
    marquee: "Juega y gana recompensas.",
    title: "Juega, gana y construye IA",
    subtitle: "IA que aprende jugando a videojuegos en el ordenador.",
    cta: {
      gamers: "Para gamers",
      developers: "Para desarrolladores",
    },
  },
  supportedGames: {
    title: "Juegos compatibles",
    status: {
      live: "Disponible",
      comingSoon: "Próximamente",
    },
    logoAlt: "Logo de {{name}}",
    games: {
      lol: "League of Legends",
      starcraft: "StarCraft",
      starcraft2: "StarCraft II",
    },
  },
  rewards: {
    title: "Recibe recompensas",
    subtitlePrefix: "Gana",
    token: "$METAL",
    subtitleSuffix: "por cada hora de juego.",
    tiers: {
      silver: {
        label: "Plata",
        rate: "10 METAL por hora",
        description: "Cualquiera puede participar y ganar recompensas.",
      },
      gold: {
        label: "Oro",
        rate: "25 METAL por hora",
        description: "Nivel para contribuyentes a largo plazo y supporters.",
      },
      platinum: {
        label: "Platino",
        rate: "50 METAL por hora",
        description: "Nivel para expertos y jugadores profesionales.",
      },
    },
    cta: "Juega y gana recompensas",
  },
  data: {
    titlePrefix: "Datos",
    titleHighlight: "recopilados",
    subtitle: "Recopilación mínima, señal máxima.",
    cards: {
      mouse: {
        title: "Entrada del ratón",
        description: "Alineada al fotograma en el clic",
      },
      keyboard: {
        title: "Entrada del teclado",
        description: "Flujo de tecla abajo/arriba",
      },
      screen: {
        title: "Vídeo de pantalla",
        description: "Captura el gameplay con nitidez",
      },
      timing: {
        title: "Sincronización",
        description: "Timestamps que sincronizan todos los datos",
      },
      webcam: {
        title: "Webcam (opcional)",
        description: "Se recopila solo si se activa",
      },
    },
    control: {
      title: "Tú decides",
      description: "Elige exactamente lo que compartes.",
    },
  },
  datasets: {
    eyebrow: "Conjuntos de datos · Para laboratorios de IA",
    titlePrefix: "Conjuntos de datos:",
    titleHighlight: "Para laboratorios de IA",
    description:
      "Conjuntos de datos de alta calidad diseñados para entrenar y evaluar agentes AGI avanzados en entornos complejos que requieren comprensión multimodal, planificación estratégica y aprendizaje adaptativo.",
    cards: {
      raw: {
        name: "Bruto",
        subtitle: "Pantalla + entradas, sincronizado, nivel humano.",
        items: [
          "Sincronía de pantalla + entradas",
          "Juego a nivel humano",
          "Flujos sincronizados en el tiempo",
        ],
      },
      annotated: {
        name: "Anotado",
        subtitle: "Bruto + etiquetas, etapas, metadatos.",
        items: [
          "Bruto + etiquetas",
          "Etapas y eventos",
          "Metadatos de entrenamiento",
        ],
      },
    },
    cta: "Contactar",
    dialog: {
      title: "Cuéntanos sobre tu laboratorio",
      description:
        "Comparte tus planes de datos de entrenamiento de IA y te guiaremos en los siguientes pasos.",
      fields: {
        name: "Nombre",
        email: "Correo profesional",
        organization: "Organización",
        message: "¿Qué estás construyendo?",
      },
      placeholders: {
        name: "Juan Pérez",
        email: "you@lab.ai",
        organization: "NextMetal Labs",
        message: "Cuéntanos tus objetivos, calendario y plan de uso del dataset.",
      },
      buttons: {
        cancel: "Cancelar",
        submit: "Enviar mensaje",
        submitting: "Enviando...",
      },
    },
    toast: {
      missing: {
        title: "Falta información requerida",
        description: "Se requiere nombre, correo y un mensaje breve.",
      },
      thanks: {
        title: "¡Gracias por contactarnos!",
        description: "Nos pondremos en contacto pronto.",
      },
    },
  },
  cta: {
    line1: "Ayúdanos a construir",
    line2: "la Inteligencia Artificial General (AGI)!",
    subtitle: "Juega. Gana. Construye AGI.",
  },
  footer: {
    rights: "© 2025 Todos los derechos reservados.",
  },
  theme: {
    toggle: "Cambiar tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
  dashboard: {
    title: "Panel",
    logoAlt: "Logo de NextMetal",
    logout: "Cerrar sesión",
    menuItems: {
      studio: "Estudio",
      gallery: "Galería",
      rewards: "Recompensas",
      settings: "Ajustes",
    },
  },
  appSidebar: {
    menu: "Menú",
    dashboard: "Panel",
    account: "Cuenta",
  },
  network: {
    walletDisconnected: "Wallet no conectada",
    correctNetwork: "Testnet de Monad",
    wrongNetwork: "Red incorrecta",
  },
  auth: {
    demoToast: {
      title: "Credenciales de demo cargadas",
      description: "Haz clic en Iniciar sesión para acceder al demo",
    },
    loginToast: {
      title: "¡Bienvenido de nuevo!",
      description: "Has iniciado sesión correctamente.",
    },
    signupToast: {
      title: "¡Cuenta creada!",
      description: "Ahora puedes iniciar sesión con tus credenciales.",
    },
    errorToast: {
      title: "Error",
    },
    title: {
      login: "Iniciar sesión",
      signup: "Registrarse",
    },
    description: {
      login: "Introduce tus credenciales para acceder al panel",
      signup: "Crea una cuenta para empezar a vincular tu perfil",
    },
    fields: {
      username: "Nombre de usuario",
      email: "Correo",
      password: "Contraseña",
    },
    placeholders: {
      username: "Introduce tu nombre de usuario",
      email: "you@email.com",
    },
    loading: "Cargando...",
    actions: {
      login: "Iniciar sesión",
      signup: "Registrarse",
    },
    switchToSignup: "¿No tienes cuenta? Regístrate",
    switchToLogin: "¿Ya tienes cuenta? Inicia sesión",
    or: "o",
    demoHint: "Haz clic en \"Usar cuenta demo\" para probar",
    demoButton: "Usar cuenta demo",
    back: "← Volver al inicio",
  },
  account: {
    errorTransactions: {
      title: "Error",
      description: "No se pudieron cargar las transacciones",
    },
    logout: {
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente.",
    },
    error: {
      title: "Error",
    },
    title: "Cuenta",
    logoutButton: "Cerrar sesión",
    profile: {
      title: "Información del perfil",
      description: "Detalles de la cuenta",
      email: "Correo:",
      userId: "ID de usuario:",
    },
    transactions: {
      title: "Historial de transacciones",
      description: "Transacciones blockchain enviadas a Monad testnet",
      empty:
        "Aún no hay transacciones. Completa los pasos del panel para crear la primera.",
      rank: "Rango: {{tier}} {{division}}",
      view: "Ver",
      hash: "Hash de transacción",
    },
  },
  gallery: {
    title: "Galería",
    filenameHint: "Nombre guardado: nextmetal_video_*.webm",
    uploadAll: "Subir todo",
    tabs: { all: "Todo", clips: "Clips", best: "Mejores" },
    stats: {
      recordings: "Grabaciones",
      hours: "Horas",
      thisWeek: "Esta semana",
    },
    play: "Reproducir",
    emptySearch: {
      title: "No se encontraron grabaciones",
      description: "Prueba otra búsqueda o crea tu primera grabación.",
    },
    emptyAll: {
      title: "Aún no hay grabaciones",
      browserLimitLabel: "Limitación del navegador:",
      browserLimitDescription: "No se pueden leer archivos locales.",
      desktopAppRequired: "Se necesita una app de escritorio para la detección automática.",
    },
    mockNames: {
      lolRanked: "League of Legends - Partida clasificatoria",
      valorantCompetitive: "VALORANT - Competitivo",
      cs2Casual: "Counter-Strike 2 - Partida casual",
      apexRanked: "Apex Legends - Clasificatoria",
      overwatchQuick: "Overwatch 2 - Partida rápida",
      rocketTournament: "Rocket League - Torneo",
      dotaRanked: "Dota 2 - Partida clasificatoria",
      fortniteCreative: "Fortnite - Modo creativo",
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
    completed: "Completado",
    processing: "En proceso",
    failed: "Fallido",
    unknown: "Desconocido",
  },
  studio: {
    title: "Estudio",
    select: {
      screen: "Pantalla completa",
      window: "Ventana",
    },
    action: {
      stop: "Detener",
      record: "Grabar",
      stream: "Transmitir",
    },
    labels: {
      screen: "Pantalla",
      camera: "Cámara",
      audio: "Audio",
      input: "Entrada",
    },
    state: {
      on: "Encendido",
      off: "Apagado",
    },
    events: "{{count}} eventos",
    session: {
      title: "Información de sesión y descargas",
      id: "ID de sesión:",
      start: "Hora de inicio:",
      duration: "Duración:",
      notRecording: "Sin grabación",
      inputEvents: "Eventos de entrada:",
      videoFormat: "Formato de vídeo:",
      dataExport: "Exportación de datos:",
      dataExportFormat: "ZIP (vídeo + JSON + metadatos)",
      readyTitle: "Listo para entrenamiento de IA:",
      readyDescription:
        "Cuando termine la grabación, el ZIP se descargará automáticamente. Incluye vídeo sincronizado (.webm), datos de entrada (.json) y metadatos de entrenamiento.",
      prepTitle: "Listo para grabar:",
      prepDescription:
        "Inicia la grabación para capturar vídeo y datos de entrada sincronizados para el entrenamiento de IA.",
    },
  },
  rewardsPage: {
    title: "Recompensas",
    tabs: {
      league: "Liga",
      earnings: "Ganancias",
      achievements: "Logros",
    },
    earnings: {
      thisMonth: "Este mes",
      sessions: "Sesiones",
    },
    achievements: {
      firstRecording: {
        title: "Primera grabación",
        description: "Graba tu primera partida",
      },
      champion: {
        title: "Campeón",
        description: "Gana 100 $METAL",
      },
    },
  },
  settings: {
    title: "Ajustes",
    fields: {
      username: "Nombre de usuario",
      email: "Correo",
    },
    save: "Guardar",
    saving: "Guardando...",
    twoFactor: "Autenticación de dos factores",
    enable: "Activar",
    changePassword: "Cambiar contraseña",
    change: "Cambiar",
    deleteAccount: "Eliminar cuenta",
    delete: "Eliminar",
    toast: {
      profileUpdated: {
        title: "Perfil actualizado",
        description: "Tu perfil se actualizó correctamente.",
      },
      error: {
        title: "Error",
        description: "No se pudo actualizar el perfil. Inténtalo de nuevo.",
      },
      deleted: {
        title: "Cuenta eliminada",
        description: "Tu cuenta se eliminó permanentemente.",
      },
      deleteError: {
        title: "Error",
        description: "No se pudo eliminar la cuenta. Inténtalo de nuevo.",
      },
    },
  },
  recording: {
    title: "Estudio de grabación de juegos",
    subtitle: "Plataforma de recopilación de datos para IA",
    controlsTitle: "Controles de grabación",
    selectLabel: "Selección de pantalla/ventana",
    selectPlaceholder: "Selecciona una pantalla para grabar",
    select: {
      screen: "Pantalla completa",
      window: "Ventana de aplicación",
    },
    start: "Iniciar grabación",
    stop: "Detener grabación",
    recordingBadge: "Grabando",
    sessionLabel: "Sesión: {{id}}",
    previewTitle: "Vista previa en vivo",
    previewHint: "Pulsa \"Iniciar grabación\" para comenzar",
    cards: {
      screenCapture: {
        title: "Captura de pantalla",
        active: "Activa",
        inactive: "Inactiva",
        description: "Captura la pantalla con audio del sistema",
      },
      webcam: {
        title: "Webcam",
        active: "Activa",
        inactive: "Inactiva",
        description: "Grabación con superposición 720p",
      },
      inputEvents: {
        title: "Eventos de entrada",
        recording: "Grabando",
        inactive: "Inactiva",
        description: "Datos de teclado y ratón",
      },
    },
    sessionInfo: {
      title: "Información de sesión",
      id: "ID de sesión:",
      inputEvents: "Eventos de entrada:",
      startTime: "Hora de inicio:",
      duration: "Duración:",
      seconds: "{{count}} s",
    },
    alert: {
      recordingFailed:
        "No se pudo iniciar la grabación. Verifica los permisos.",
    },
  },
  steps: {
    linkAccount: {
      unavailableTitle: "Vincular cuenta de League",
      unavailableDescription:
        "Esta función requiere configuración backend. Contacta soporte para habilitar la vinculación.",
      toast: {
        missing: {
          title: "Error",
          description: "Introduce el nombre de juego y el tagline",
        },
        found: {
          title: "¡Cuenta encontrada!",
          description: "Cambia tu icono de perfil para verificar la propiedad.",
        },
        error: {
          title: "Error",
          description: "No se pudo vincular la cuenta",
        },
        verified: {
          title: "¡Verificado!",
          description: "Tu cuenta de League se verificó correctamente.",
        },
        verifyFailed: {
          title: "Fallo de verificación",
          description: "No se pudo verificar la propiedad",
        },
        unlink: {
          title: "Cuenta desvinculada",
          description: "Cuenta eliminada.",
        },
        unlinkError: {
          title: "Error",
          description: "No se pudo desvincular la cuenta",
        },
      },
      title: "Vincular cuenta de League",
      description: "Vincula tu cuenta de League of Legends para comenzar",
      privacyTitle: "Privacidad primero:",
      privacyDescription:
        "No almacenamos datos brutos. Solo análisis derivados se guardan on-chain.",
      linkedAccounts: "Cuentas vinculadas",
      addAccount: "Agregar nueva cuenta",
      gameName: "Nombre de juego",
      tagLine: "Tagline",
      region: "Región",
      starting: "Iniciando...",
      startVerification: "Iniciar verificación",
    },
    verification: {
      title: "Verificar propiedad de cuenta",
      description: "Sigue los pasos para demostrar la propiedad",
      changeIcon: "Cambia tu icono de perfil a:",
      iconNumber: "Número de icono:",
      stepsTitle: "Pasos de verificación:",
      steps: [
        "Abre el cliente de League of Legends",
        "Ve a configuración de perfil",
        "Cambia el icono al mostrado arriba",
        "Haz clic en \"Verificar propiedad\" abajo",
      ],
      cancel: "Cancelar",
      verifying: "Verificando...",
      verify: "Verificar propiedad",
    },
    connectWallet: {
      title: "Conectar wallet",
      description:
        "Conecta una wallet Web3 en Monad testnet para guardar credenciales verificadas",
      hint: "Continúa con MetaMask, Coinbase Wallet o WalletConnect",
      connectedTitle: "¡Wallet conectada!",
      connectedDescription: "Pulsa continuar para ir al paso 3",
      continue: "Continuar al paso 3",
      selectWallet: "Selecciona una wallet para conectar",
    },
    saveBlockchain: {
      unavailableTitle: "Guardar en blockchain",
      unavailableDescription:
        "Esta función requiere configuración backend. Contacta soporte para habilitar la integración.",
      toast: {
        success: {
          title: "¡Éxito!",
          description: "Credenciales guardadas en Monad testnet.",
        },
        missingWallet: {
          title: "Error",
          description: "Conecta tu wallet primero",
        },
        switchRequired: {
          title: "Cambio de red requerido",
          description: "Cambia a {{network}} en tu wallet y reintenta.",
        },
        checkWallet: {
          title: "Revisa tu wallet",
          description: "Aprueba la transacción en el popup de la wallet",
        },
        transactionFailed: {
          title: "Transacción fallida",
          description: "No se pudo enviar la transacción",
        },
        copied: {
          title: "¡Copiado!",
          description: "Hash de transacción copiado al portapapeles",
        },
        switchSuccess: {
          title: "Red cambiada",
          description: "Cambiado a {{network}}",
        },
        switchFailed: {
          title: "Cambio fallido",
          description: "Cambia la red en tu wallet",
        },
      },
      errors: {
        switchNetwork:
          "Cambia a {{network}} (cadena {{id}}) y reintenta.",
        noVerifiedAccount: "No se encontró una cuenta verificada",
        saveFailed: "No se pudieron guardar las credenciales",
      },
      blocked: {
        title: "Completa los pasos previos",
        description:
          "Vincula tu cuenta de juego y conecta tu wallet para continuar",
      },
      success: {
        title: "¡Credenciales guardadas!",
        description: "Credenciales verificadas guardadas en Monad testnet",
        hashLabel: "Hash de transacción",
        copy: "Copiar hash",
        viewExplorer: "Ver en el explorador",
        saveAnother: "Guardar otra",
      },
      card: {
        title: "Guardar en Monad",
        description:
          "Almacena análisis respetuosos con la privacidad en la blockchain de Monad",
      },
      privacyNotice:
        "Solo almacenamos pruebas de logros y análisis. Nunca guardamos datos brutos ni personales.",
      account: {
        label: "Cuenta a guardar:",
        rank: "Rango actual: {{rank}}",
      },
      feeNotice:
        "Esto envía una transacción real a Monad testnet. Confirma en tu wallet y paga una pequeña tarifa de gas.",
      wrongNetwork:
        "Estás en la red incorrecta (cadena {{chainId}}). Cambia a {{network}} (ID {{id}}) para continuar.",
      switchButton: "Cambiar a Monad",
      switching: "Cambiando...",
      badgeAlt: "NFT de insignia de habilidad",
      options: {
        title: "¿Qué debemos guardar?",
        achievements: "Guardar prueba de logro",
        nft: "Mintear NFT de insignia de habilidad",
        zk: "Generar prueba ZK (opcional)",
      },
      transaction: {
        title: "Estado de la transacción",
        prepare: "Preparar datos",
        confirmWallet: "Confirmar en wallet",
        submitted: "Enviada",
        confirming: "Esperando confirmación",
        finalized: "Finalizada",
        viewExplorer: "Ver en el explorador",
      },
      submit: {
        pendingWallet: "Confirma en la wallet...",
        pendingMonad: "Guardando en Monad...",
        default: "Guardar en Monad",
      },
    },
    linkedAccount: {
      unknown: "Desconocido",
      unranked: "Sin rango",
      verified: "Verificado",
      unverified: "No verificado",
      verify: "Verificar",
    },
  },
  wallet: {
    connected: "Wallet conectada",
    connectedDescription: "Conectado a {{address}}",
    disconnected: "Wallet desconectada",
    disconnectedDescription: "Se ha desconectado la wallet.",
    connecting: "Conectando...",
    connect: "Conectar wallet",
  },
  regions: {
    na1: "Norteamérica",
    euw1: "Europa Oeste",
    eune1: "Europa Norte y Este",
    kr: "Corea",
    br1: "Brasil",
    la1: "Latinoamérica Norte",
    la2: "Latinoamérica Sur",
    oc1: "Oceanía",
    ru: "Rusia",
    tr1: "Turquía",
    jp1: "Japón",
  },
  ui: {
    previousSlide: "Diapositiva anterior",
    nextSlide: "Siguiente diapositiva",
    toggleSidebar: "Alternar barra lateral",
    morePages: "Más páginas",
  },
  notFound: {
    title: "Página no encontrada",
    back: "Volver al inicio",
  },
  alerts: {
    recordingFailed:
      "No se pudo iniciar la grabación. Verifica los permisos.",
  },
};

export default es419;
