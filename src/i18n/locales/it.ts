const it = {
  common: {
    cancel: "Annulla",
    close: "Chiudi",
    previous: "Precedente",
    next: "Successivo",
    more: "Altro",
    loading: "Caricamento...",
    saving: "Salvataggio...",
    save: "Salva",
    delete: "Elimina",
    start: "Avvia",
    stop: "Ferma",
    view: "Visualizza",
    copy: "Copia",
    copied: "Copiato!",
    error: "Errore",
    success: "Successo!",
    unknown: "Sconosciuto",
    locked: "Bloccato",
    send: "Invia",
    sending: "Invio...",
    searchPlaceholder: "Cerca...",
    or: "o",
  },
  nav: {
    home: "Home",
    rewards: "Ricompense",
    data: "Dati",
    datasets: "Dataset",
    language: "Lingua",
    languageAria: "Seleziona lingua",
    getStarted: "Inizia",
    logoAlt: "Logo NextMetal",
  },
  hero: {
    marquee: "Gioca e guadagna ricompense.",
    title: "Gioca, guadagna e costruisci IA",
    subtitle: "IA che impara giocando ai videogiochi su computer.",
    cta: {
      gamers: "Per gamer",
      developers: "Per sviluppatori",
    },
  },
  supportedGames: {
    title: "Giochi supportati",
    status: {
      live: "Disponibile",
      comingSoon: "In arrivo",
    },
    logoAlt: "Logo di {{name}}",
    games: {
      lol: "League of Legends",
      starcraft: "StarCraft",
      starcraft2: "StarCraft II",
    },
  },
  rewards: {
    title: "Ottieni ricompense",
    subtitlePrefix: "Guadagna",
    token: "$METAL",
    subtitleSuffix: "per ogni ora di gioco.",
    tiers: {
      silver: {
        label: "Argento",
        rate: "10 METAL all'ora",
        description: "Chiunque può partecipare e guadagnare ricompense.",
      },
      gold: {
        label: "Oro",
        rate: "25 METAL all'ora",
        description: "Livello per contributori di lungo periodo e supporter.",
      },
      platinum: {
        label: "Platino",
        rate: "50 METAL all'ora",
        description: "Livello per esperti e pro player.",
      },
    },
    cta: "Gioca e guadagna ricompense",
  },
  data: {
    titlePrefix: "Dati",
    titleHighlight: "raccolti",
    subtitle: "Raccolta minima, segnale massimo.",
    cards: {
      mouse: {
        title: "Input del mouse",
        description: "Allineato al frame al momento del click",
      },
      keyboard: {
        title: "Input della tastiera",
        description: "Flusso tasto giù/su",
      },
      screen: {
        title: "Video schermo",
        description: "Cattura il gameplay in modo nitido",
      },
      timing: {
        title: "Timing",
        description: "Timestamp che sincronizzano ogni flusso",
      },
      webcam: {
        title: "Webcam (opzionale)",
        description: "Raccolta solo se attivata",
      },
    },
    control: {
      title: "Decidi tu",
      description: "Scegli esattamente cosa condividere.",
    },
  },
  datasets: {
    eyebrow: "Dataset · Per laboratori IA",
    titlePrefix: "Dataset:",
    titleHighlight: "Per laboratori IA",
    description:
      "Dataset di alta qualità progettati per addestrare e valutare agenti AGI avanzati in ambienti complessi con comprensione multimodale, pianificazione strategica e apprendimento adattivo.",
    cards: {
      raw: {
        name: "Gretti",
        subtitle: "Schermo + input, sincronizzati, livello umano.",
        items: [
          "Sincronizzazione schermo + input",
          "Gioco a livello umano",
          "Stream sincronizzati nel tempo",
        ],
      },
      annotated: {
        name: "Annotati",
        subtitle: "Gretti + etichette, fasi, metadati.",
        items: [
          "Gretti + etichette",
          "Fasi ed eventi",
          "Metadati di training",
        ],
      },
    },
    cta: "Contattaci",
    dialog: {
      title: "Parlaci del tuo laboratorio",
      description:
        "Condividi i piani per i dati di training IA e ti guideremo nei prossimi passi.",
      fields: {
        name: "Nome",
        email: "Email lavorativa",
        organization: "Organizzazione",
        message: "Cosa state costruendo?",
      },
      placeholders: {
        name: "Mario Rossi",
        email: "you@lab.ai",
        organization: "NextMetal Labs",
        message: "Condividi obiettivi, tempistiche e uso del dataset.",
      },
      buttons: {
        cancel: "Annulla",
        submit: "Invia messaggio",
        submitting: "Invio...",
      },
    },
    toast: {
      missing: {
        title: "Informazioni mancanti",
        description: "Nome, email e un breve messaggio sono necessari.",
      },
      thanks: {
        title: "Grazie per averci contattato!",
        description: "Ti ricontatteremo presto.",
      },
    },
  },
  cta: {
    line1: "Aiutaci a costruire",
    line2: "l'Intelligenza Artificiale Generale (AGI)!",
    subtitle: "Gioca. Guadagna. Costruisci AGI.",
  },
  footer: {
    rights: "© 2025 Tutti i diritti riservati.",
  },
  theme: {
    toggle: "Cambia tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Sistema",
  },
  dashboard: {
    title: "Dashboard",
    logoAlt: "Logo NextMetal",
    logout: "Esci",
    menuItems: {
      studio: "Studio",
      gallery: "Galleria",
      rewards: "Ricompense",
      settings: "Impostazioni",
    },
  },
  appSidebar: {
    menu: "Menu",
    dashboard: "Dashboard",
    account: "Account",
  },
  network: {
    walletDisconnected: "Wallet non connesso",
    correctNetwork: "Monad testnet",
    wrongNetwork: "Rete errata",
  },
  auth: {
    demoToast: {
      title: "Credenziali demo inserite",
      description: "Clicca su Accedi per usare l'account demo",
    },
    loginToast: {
      title: "Bentornato!",
      description: "Accesso riuscito.",
    },
    signupToast: {
      title: "Account creato!",
      description: "Ora puoi accedere con le tue credenziali.",
    },
    errorToast: {
      title: "Errore",
    },
    title: {
      login: "Accedi",
      signup: "Registrati",
    },
    description: {
      login: "Inserisci le credenziali per accedere alla dashboard",
      signup: "Crea un account per iniziare a collegare il profilo",
    },
    fields: {
      username: "Nome utente",
      email: "Email",
      password: "Password",
    },
    placeholders: {
      username: "Inserisci il nome utente",
      email: "you@email.com",
    },
    loading: "Caricamento...",
    actions: {
      login: "Accedi",
      signup: "Registrati",
    },
    switchToSignup: "Non hai un account? Registrati",
    switchToLogin: "Hai già un account? Accedi",
    or: "o",
    demoHint: "Clicca su \"Usa account demo\" per testare",
    demoButton: "Usa account demo",
    back: "← Torna alla home",
  },
  account: {
    errorTransactions: {
      title: "Errore",
      description: "Impossibile caricare le transazioni",
    },
    logout: {
      title: "Disconnesso",
      description: "Disconnessione riuscita.",
    },
    error: {
      title: "Errore",
    },
    title: "Account",
    logoutButton: "Esci",
    profile: {
      title: "Info profilo",
      description: "Dettagli account",
      email: "Email:",
      userId: "ID utente:",
    },
    transactions: {
      title: "Storico transazioni",
      description: "Transazioni blockchain inviate a Monad testnet",
      empty:
        "Nessuna transazione. Completa i passaggi della dashboard per crearne una.",
      rank: "Rango: {{tier}} {{division}}",
      view: "Visualizza",
      hash: "Hash transazione",
    },
  },
  gallery: {
    title: "Galleria",
    filenameHint: "Nome file salvato: nextmetal_video_*.webm",
    uploadAll: "Carica tutto",
    tabs: { all: "Tutti", clips: "Clip", best: "Migliori" },
    stats: {
      recordings: "Registrazioni",
      hours: "Ore",
      thisWeek: "Questa settimana",
    },
    play: "Riproduci",
    emptySearch: {
      title: "Nessuna registrazione trovata",
      description: "Prova un'altra ricerca o crea la prima registrazione.",
    },
    emptyAll: {
      title: "Ancora nessuna registrazione",
      browserLimitLabel: "Limite del browser:",
      browserLimitDescription: "Impossibile leggere file locali.",
      desktopAppRequired: "Serve un'app desktop per il rilevamento automatico.",
    },
    mockNames: {
      lolRanked: "League of Legends - Partita classificata",
      valorantCompetitive: "VALORANT - Competitiva",
      cs2Casual: "Counter-Strike 2 - Partita casual",
      apexRanked: "Apex Legends - Classificata",
      overwatchQuick: "Overwatch 2 - Partita rapida",
      rocketTournament: "Rocket League - Torneo",
      dotaRanked: "Dota 2 - Partita classificata",
      fortniteCreative: "Fortnite - Modalità creativa",
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
    completed: "Completato",
    processing: "In elaborazione",
    failed: "Fallito",
    unknown: "Sconosciuto",
  },
  studio: {
    title: "Studio",
    select: {
      screen: "Schermo intero",
      window: "Finestra",
    },
    action: {
      stop: "Ferma",
      record: "Registra",
      stream: "Trasmetti",
    },
    labels: {
      screen: "Schermo",
      camera: "Camera",
      audio: "Audio",
      input: "Input",
    },
    state: {
      on: "Attivo",
      off: "Disattivo",
    },
    events: "{{count}} eventi",
    session: {
      title: "Info sessione e download",
      id: "ID sessione:",
      start: "Ora di inizio:",
      duration: "Durata:",
      notRecording: "Nessuna registrazione",
      inputEvents: "Eventi di input:",
      videoFormat: "Formato video:",
      dataExport: "Export dati:",
      dataExportFormat: "ZIP (video + JSON + metadati)",
      readyTitle: "Pronto per training IA:",
      readyDescription:
        "Al termine, il file ZIP si scarica automaticamente. Include video sincronizzato (.webm), dati di input (.json) e metadati di training IA.",
      prepTitle: "Pronto a registrare:",
      prepDescription:
        "Avvia la registrazione per raccogliere video e input sincronizzati per il training IA.",
    },
  },
  rewardsPage: {
    title: "Ricompense",
    tabs: {
      league: "Lega",
      earnings: "Guadagni",
      achievements: "Obiettivi",
    },
    earnings: {
      thisMonth: "Questo mese",
      sessions: "Sessioni",
    },
    achievements: {
      firstRecording: {
        title: "Prima registrazione",
        description: "Registra la tua prima partita",
      },
      champion: {
        title: "Campione",
        description: "Guadagna 100 $METAL",
      },
    },
  },
  settings: {
    title: "Impostazioni",
    fields: {
      username: "Nome utente",
      email: "Email",
    },
    save: "Salva",
    saving: "Salvataggio...",
    twoFactor: "Autenticazione a due fattori",
    enable: "Attiva",
    changePassword: "Cambia password",
    change: "Cambia",
    deleteAccount: "Elimina account",
    delete: "Elimina",
    toast: {
      profileUpdated: {
        title: "Profilo aggiornato",
        description: "Il profilo è stato aggiornato correttamente.",
      },
      error: {
        title: "Errore",
        description: "Impossibile aggiornare il profilo. Riprova.",
      },
      deleted: {
        title: "Account eliminato",
        description: "Il tuo account è stato eliminato definitivamente.",
      },
      deleteError: {
        title: "Errore",
        description: "Impossibile eliminare l'account. Riprova.",
      },
    },
  },
  recording: {
    title: "Studio di registrazione giochi",
    subtitle: "Piattaforma di raccolta dati per IA",
    controlsTitle: "Controlli di registrazione",
    selectLabel: "Selezione schermo/finestra",
    selectPlaceholder: "Seleziona uno schermo da registrare",
    select: {
      screen: "Schermo intero",
      window: "Finestra applicazione",
    },
    start: "Avvia registrazione",
    stop: "Ferma registrazione",
    recordingBadge: "Registrazione",
    sessionLabel: "Sessione: {{id}}",
    previewTitle: "Anteprima live",
    previewHint: "Premi \"Avvia registrazione\" per iniziare",
    cards: {
      screenCapture: {
        title: "Cattura schermo",
        active: "Attivo",
        inactive: "Inattivo",
        description: "Cattura lo schermo con audio di sistema",
      },
      webcam: {
        title: "Webcam",
        active: "Attiva",
        inactive: "Inattiva",
        description: "Registrazione overlay 720p",
      },
      inputEvents: {
        title: "Eventi di input",
        recording: "Registrazione",
        inactive: "Inattiva",
        description: "Dati tastiera e mouse",
      },
    },
    sessionInfo: {
      title: "Info sessione",
      id: "ID sessione:",
      inputEvents: "Eventi di input:",
      startTime: "Ora di inizio:",
      duration: "Durata:",
      seconds: "{{count}} s",
    },
    alert: {
      recordingFailed:
        "Impossibile avviare la registrazione. Verifica le autorizzazioni.",
    },
  },
  steps: {
    linkAccount: {
      unavailableTitle: "Collega account League",
      unavailableDescription:
        "Questa funzione richiede configurazione backend. Contatta il supporto per abilitarla.",
      toast: {
        missing: {
          title: "Errore",
          description: "Inserisci nome di gioco e tagline",
        },
        found: {
          title: "Account trovato!",
          description: "Cambia l'icona profilo per verificare la proprietà.",
        },
        error: {
          title: "Errore",
          description: "Impossibile collegare l'account",
        },
        verified: {
          title: "Verificato!",
          description: "Il tuo account League è stato verificato.",
        },
        verifyFailed: {
          title: "Verifica fallita",
          description: "Impossibile verificare la proprietà",
        },
        unlink: {
          title: "Account scollegato",
          description: "Account rimosso.",
        },
        unlinkError: {
          title: "Errore",
          description: "Impossibile scollegare l'account",
        },
      },
      title: "Collega account League",
      description: "Collega il tuo account League of Legends per iniziare",
      privacyTitle: "Privacy prima di tutto:",
      privacyDescription:
        "Non salviamo dati grezzi. Solo analisi derivate vengono salvate on-chain.",
      linkedAccounts: "Account collegati",
      addAccount: "Aggiungi account",
      gameName: "Nome gioco",
      tagLine: "Tagline",
      region: "Regione",
      starting: "Avvio...",
      startVerification: "Avvia verifica",
    },
    verification: {
      title: "Verifica proprietà account",
      description: "Segui i passaggi per dimostrare la proprietà",
      changeIcon: "Cambia l'icona profilo in:",
      iconNumber: "Numero icona:",
      stepsTitle: "Passaggi di verifica:",
      steps: [
        "Apri il client di League of Legends",
        "Vai alle impostazioni profilo",
        "Cambia l'icona con quella mostrata sopra",
        "Clicca \"Verifica proprietà\" qui sotto",
      ],
      cancel: "Annulla",
      verifying: "Verifica in corso...",
      verify: "Verifica proprietà",
    },
    connectWallet: {
      title: "Collega wallet",
      description:
        "Collega un wallet Web3 su Monad testnet per salvare credenziali verificate",
      hint: "Continua con MetaMask, Coinbase Wallet o WalletConnect",
      connectedTitle: "Wallet collegato!",
      connectedDescription: "Clicca continua per passare allo step 3",
      continue: "Continua allo step 3",
      selectWallet: "Seleziona un wallet da collegare",
    },
    saveBlockchain: {
      unavailableTitle: "Salva su blockchain",
      unavailableDescription:
        "Questa funzione richiede configurazione backend. Contatta il supporto per abilitarla.",
      toast: {
        success: {
          title: "Successo!",
          description: "Credenziali salvate su Monad testnet.",
        },
        missingWallet: {
          title: "Errore",
          description: "Collega prima il wallet",
        },
        switchRequired: {
          title: "Cambio rete richiesto",
          description: "Passa a {{network}} nel wallet e riprova.",
        },
        checkWallet: {
          title: "Controlla il wallet",
          description: "Approva la transazione nel popup del wallet",
        },
        transactionFailed: {
          title: "Transazione fallita",
          description: "Impossibile inviare la transazione",
        },
        copied: {
          title: "Copiato!",
          description: "Hash transazione copiato negli appunti",
        },
        switchSuccess: {
          title: "Rete cambiata",
          description: "Passato a {{network}}",
        },
        switchFailed: {
          title: "Cambio fallito",
          description: "Cambia rete nel wallet",
        },
      },
      errors: {
        switchNetwork: "Passa a {{network}} (chain {{id}}) e riprova.",
        noVerifiedAccount: "Nessun account verificato trovato",
        saveFailed: "Impossibile salvare le credenziali",
      },
      blocked: {
        title: "Completa i passaggi precedenti",
        description:
          "Collega l'account di gioco e il wallet per continuare",
      },
      success: {
        title: "Credenziali salvate!",
        description: "Credenziali League verificate salvate su Monad testnet",
        hashLabel: "Hash transazione",
        copy: "Copia hash",
        viewExplorer: "Vedi nell'explorer",
        saveAnother: "Salva altro",
      },
      card: {
        title: "Salva su Monad",
        description:
          "Archivia analisi rispettose della privacy sulla blockchain Monad",
      },
      privacyNotice:
        "Salviamo solo prove di risultati e analisi. I dati grezzi e personali non vengono mai salvati.",
      account: {
        label: "Account da salvare:",
        rank: "Rango attuale: {{rank}}",
      },
      feeNotice:
        "Invia una transazione reale su Monad testnet. Conferma nel wallet e paga una piccola fee gas.",
      wrongNetwork:
        "Sei sulla rete sbagliata (chain {{chainId}}). Passa a {{network}} (ID {{id}}) per continuare.",
      switchButton: "Passa a Monad",
      switching: "Cambio...",
      badgeAlt: "NFT badge di abilità",
      options: {
        title: "Cosa vuoi salvare?",
        achievements: "Salva prova dei risultati",
        nft: "Mint NFT badge di abilità",
        zk: "Genera prova ZK (opzionale)",
      },
      transaction: {
        title: "Stato transazione",
        prepare: "Prepara dati",
        confirmWallet: "Conferma nel wallet",
        submitted: "Inviata",
        confirming: "In attesa conferma",
        finalized: "Finalizzata",
        viewExplorer: "Vedi nell'explorer",
      },
      submit: {
        pendingWallet: "Conferma nel wallet...",
        pendingMonad: "Salvataggio su Monad...",
        default: "Salva su Monad",
      },
    },
    linkedAccount: {
      unknown: "Sconosciuto",
      unranked: "Non classificato",
      verified: "Verificato",
      unverified: "Non verificato",
      verify: "Verifica",
    },
  },
  wallet: {
    connected: "Wallet collegato",
    connectedDescription: "Collegato a {{address}}",
    disconnected: "Wallet scollegato",
    disconnectedDescription: "Connessione wallet rimossa.",
    connecting: "Connessione...",
    connect: "Collega wallet",
  },
  regions: {
    na1: "Nord America",
    euw1: "Europa Ovest",
    eune1: "Europa Nord ed Est",
    kr: "Corea",
    br1: "Brasile",
    la1: "America Latina Nord",
    la2: "America Latina Sud",
    oc1: "Oceania",
    ru: "Russia",
    tr1: "Turchia",
    jp1: "Giappone",
  },
  ui: {
    previousSlide: "Slide precedente",
    nextSlide: "Slide successiva",
    toggleSidebar: "Attiva/disattiva sidebar",
    morePages: "Altre pagine",
  },
  notFound: {
    title: "Pagina non trovata",
    back: "Torna alla home",
  },
  alerts: {
    recordingFailed:
      "Impossibile avviare la registrazione. Controlla i permessi.",
  },
};

export default it;
