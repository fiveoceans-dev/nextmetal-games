const fr = {
  common: {
    cancel: "Annuler",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    more: "Plus",
    loading: "Chargement...",
    saving: "Enregistrement...",
    save: "Enregistrer",
    delete: "Supprimer",
    start: "Démarrer",
    stop: "Arrêter",
    view: "Voir",
    copy: "Copier",
    copied: "Copié !",
    error: "Erreur",
    success: "Succès !",
    unknown: "Inconnu",
    locked: "Verrouillé",
    send: "Envoyer",
    sending: "Envoi...",
    searchPlaceholder: "Rechercher...",
    or: "ou",
  },
  nav: {
    home: "Accueil",
    rewards: "Récompenses",
    data: "Données",
    datasets: "Jeux de données",
    language: "Langue",
    languageAria: "Choisir la langue",
    getStarted: "Commencer",
    logoAlt: "Logo NextMetal",
  },
  hero: {
    marquee: "Jouez et gagnez des récompenses.",
    title: "Jouez, gagnez et créez l'IA",
    subtitle: "Une IA qui apprend en jouant à des jeux sur ordinateur.",
    cta: {
      gamers: "Pour les joueurs",
      developers: "Pour les développeurs",
    },
  },
  supportedGames: {
    title: "Jeux pris en charge",
    status: {
      live: "En service",
      comingSoon: "À venir",
    },
    logoAlt: "Logo de {{name}}",
    games: {
      lol: "League of Legends",
      starcraft: "StarCraft",
      starcraft2: "StarCraft II",
    },
  },
  rewards: {
    title: "Recevoir des récompenses",
    subtitlePrefix: "Gagnez",
    token: "$METAL",
    subtitleSuffix: "pour chaque heure de jeu.",
    tiers: {
      silver: {
        label: "Argent",
        rate: "10 METAL par heure",
        description: "Tout le monde peut participer et gagner des récompenses.",
      },
      gold: {
        label: "Or",
        rate: "25 METAL par heure",
        description: "Un niveau pour les contributeurs et soutiens de long terme.",
      },
      platinum: {
        label: "Platine",
        rate: "50 METAL par heure",
        description: "Un niveau pour les experts et les joueurs pro.",
      },
    },
    cta: "Jouer et gagner des récompenses",
  },
  data: {
    titlePrefix: "Données",
    titleHighlight: "collectées",
    subtitle: "Collecte minimale, signal maximal.",
    cards: {
      mouse: {
        title: "Entrées souris",
        description: "Alignées à l'image au moment du clic",
      },
      keyboard: {
        title: "Entrées clavier",
        description: "Flux touche enfoncée/relâchée",
      },
      screen: {
        title: "Vidéo écran",
        description: "Capture du gameplay avec précision",
      },
      timing: {
        title: "Synchronisation",
        description: "Horodatages qui synchronisent chaque flux",
      },
      webcam: {
        title: "Webcam (optionnel)",
        description: "Collectée uniquement si activée",
      },
    },
    control: {
      title: "C'est vous qui décidez",
      description: "Choisissez exactement ce que vous partagez.",
    },
  },
  datasets: {
    eyebrow: "Jeux de données · Pour les labos IA",
    titlePrefix: "Jeux de données:",
    titleHighlight: "Pour les labos IA",
    description:
      "Des jeux de données de haute qualité conçus pour entraîner et évaluer des agents AGI avancés dans des environnements complexes exigeant compréhension multimodale, planification stratégique et apprentissage adaptatif.",
    cards: {
      raw: {
        name: "Brut",
        subtitle: "Écran + entrées, synchronisés, niveau humain.",
        items: [
          "Synchronisation écran + entrées",
          "Jeu de niveau humain",
          "Flux synchronisés dans le temps",
        ],
      },
      annotated: {
        name: "Annoté",
        subtitle: "Brut + labels, étapes, métadonnées.",
        items: [
          "Brut + labels",
          "Étapes et événements",
          "Métadonnées d'entraînement",
        ],
      },
    },
    cta: "Nous contacter",
    dialog: {
      title: "Parlez-nous de votre labo",
      description:
        "Partagez vos plans pour les données d'entraînement IA et nous vous guiderons pour la suite.",
      fields: {
        name: "Nom",
        email: "E-mail professionnel",
        organization: "Organisation",
        message: "Que construisez-vous ?",
      },
      placeholders: {
        name: "Jean Dupont",
        email: "you@lab.ai",
        organization: "NextMetal Labs",
        message: "Parlez-nous de vos objectifs, du calendrier et de l'usage des jeux de données.",
      },
      buttons: {
        cancel: "Annuler",
        submit: "Envoyer le message",
        submitting: "Envoi...",
      },
    },
    toast: {
      missing: {
        title: "Infos requises manquantes",
        description: "Le nom, l'e-mail et un court message sont requis.",
      },
      thanks: {
        title: "Merci pour votre message !",
        description: "Nous revenons vers vous rapidement.",
      },
    },
  },
  cta: {
    line1: "Aidez-nous à construire",
    line2: "l'intelligence artificielle générale (AGI) !",
    subtitle: "Jouez. Gagnez. Construisez l'AGI.",
  },
  footer: {
    rights: "© 2025 Tous droits réservés.",
  },
  theme: {
    toggle: "Changer de thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
  },
  dashboard: {
    title: "Tableau de bord",
    logoAlt: "Logo NextMetal",
    logout: "Se déconnecter",
    menuItems: {
      studio: "Studio",
      gallery: "Galerie",
      rewards: "Récompenses",
      settings: "Paramètres",
    },
  },
  appSidebar: {
    menu: "Menu",
    dashboard: "Tableau de bord",
    account: "Compte",
  },
  network: {
    walletDisconnected: "Portefeuille non connecté",
    correctNetwork: "Testnet Monad",
    wrongNetwork: "Mauvais réseau",
  },
  auth: {
    demoToast: {
      title: "Identifiants de démo remplis",
      description: "Cliquez sur Connexion pour accéder au compte démo",
    },
    loginToast: {
      title: "Bon retour !",
      description: "Connexion réussie.",
    },
    signupToast: {
      title: "Compte créé !",
      description: "Vous pouvez maintenant vous connecter avec vos identifiants.",
    },
    errorToast: {
      title: "Erreur",
    },
    title: {
      login: "Connexion",
      signup: "Inscription",
    },
    description: {
      login: "Saisissez vos identifiants pour accéder au tableau de bord",
      signup: "Créez un compte pour commencer à lier votre profil de ligue",
    },
    fields: {
      username: "Nom d'utilisateur",
      email: "E-mail",
      password: "Mot de passe",
    },
    placeholders: {
      username: "Saisissez votre nom d'utilisateur",
      email: "you@email.com",
    },
    loading: "Chargement...",
    actions: {
      login: "Connexion",
      signup: "Inscription",
    },
    switchToSignup: "Pas de compte ? S'inscrire",
    switchToLogin: "Déjà un compte ? Se connecter",
    or: "ou",
    demoHint: "Cliquez sur \"Utiliser le compte démo\" pour tester avec un compte démo",
    demoButton: "Utiliser le compte démo",
    back: "← Retour à l'accueil",
  },
  account: {
    errorTransactions: {
      title: "Erreur",
      description: "Impossible de charger les transactions",
    },
    logout: {
      title: "Déconnecté",
      description: "Vous avez été déconnecté.",
    },
    error: {
      title: "Erreur",
    },
    title: "Compte",
    logoutButton: "Se déconnecter",
    profile: {
      title: "Infos du profil",
      description: "Détails du compte",
      email: "E-mail:",
      userId: "ID utilisateur:",
    },
    transactions: {
      title: "Historique des transactions",
      description: "Transactions blockchain soumises au testnet Monad",
      empty:
        "Aucune transaction pour l'instant. Terminez les étapes du tableau de bord pour créer votre première transaction.",
      rank: "Rang : {{tier}} {{division}}",
      view: "Voir",
      hash: "Hash de transaction",
    },
  },
  gallery: {
    title: "Galerie",
    filenameHint: "Nom de fichier enregistré : nextmetal_video_*.webm",
    uploadAll: "Tout téléverser",
    tabs: { all: "Tous", clips: "Clips", best: "Meilleurs" },
    stats: {
      recordings: "Enregistrements",
      hours: "Heures",
      thisWeek: "Cette semaine",
    },
    play: "Lire",
    emptySearch: {
      title: "Aucun enregistrement trouvé",
      description: "Essayez une autre recherche ou créez votre premier enregistrement.",
    },
    emptyAll: {
      title: "Aucun enregistrement pour l'instant",
      browserLimitLabel: "Limitation du navigateur :",
      browserLimitDescription: "Impossible de lire les fichiers locaux.",
      desktopAppRequired: "Une application desktop est nécessaire pour la détection automatique.",
    },
    mockNames: {
      lolRanked: "League of Legends - Match classé",
      valorantCompetitive: "VALORANT - Compétitif",
      cs2Casual: "Counter-Strike 2 - Match occasionnel",
      apexRanked: "Apex Legends - Classé",
      overwatchQuick: "Overwatch 2 - Partie rapide",
      rocketTournament: "Rocket League - Tournoi",
      dotaRanked: "Dota 2 - Match classé",
      fortniteCreative: "Fortnite - Mode créatif",
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
    completed: "Terminé",
    processing: "En cours",
    failed: "Échec",
    unknown: "Inconnu",
  },
  studio: {
    title: "Studio",
    select: {
      screen: "Plein écran",
      window: "Fenêtre",
    },
    action: {
      stop: "Arrêter",
      record: "Enregistrer",
      stream: "Diffuser",
    },
    labels: {
      screen: "Écran",
      camera: "Caméra",
      audio: "Audio",
      input: "Entrées",
    },
    state: {
      on: "Activé",
      off: "Désactivé",
    },
    events: "{{count}} événements",
    session: {
      title: "Infos de session et téléchargements",
      id: "ID de session :",
      start: "Heure de début :",
      duration: "Durée :",
      notRecording: "Pas d'enregistrement",
      inputEvents: "Événements d'entrée :",
      videoFormat: "Format vidéo :",
      dataExport: "Export de données :",
      dataExportFormat: "ZIP (vidéo + JSON + métadonnées)",
      readyTitle: "Prêt pour l'entraînement IA :",
      readyDescription:
        "À la fin de l'enregistrement, le fichier ZIP est téléchargé automatiquement. Il inclut la vidéo synchronisée (.webm), les données d'entrée (.json) et les métadonnées d'entraînement IA.",
      prepTitle: "Prêt pour l'enregistrement :",
      prepDescription:
        "Démarrez l'enregistrement pour capturer la vidéo synchronisée et les données d'entrée pour l'entraînement IA.",
    },
  },
  rewardsPage: {
    title: "Récompenses",
    tabs: {
      league: "Ligue",
      earnings: "Gains",
      achievements: "Succès",
    },
    earnings: {
      thisMonth: "Ce mois-ci",
      sessions: "Sessions",
    },
    achievements: {
      firstRecording: {
        title: "Premier enregistrement",
        description: "Enregistrez votre première partie",
      },
      champion: {
        title: "Champion",
        description: "Gagner 100 $METAL",
      },
    },
  },
  settings: {
    title: "Paramètres",
    fields: {
      username: "Nom d'utilisateur",
      email: "E-mail",
    },
    save: "Enregistrer",
    saving: "Enregistrement...",
    twoFactor: "Authentification à deux facteurs",
    enable: "Activer",
    changePassword: "Changer le mot de passe",
    change: "Changer",
    deleteAccount: "Supprimer le compte",
    delete: "Supprimer",
    toast: {
      profileUpdated: {
        title: "Profil mis à jour",
        description: "Votre profil a été mis à jour avec succès.",
      },
      error: {
        title: "Erreur",
        description: "Impossible de mettre à jour le profil. Veuillez réessayer.",
      },
      deleted: {
        title: "Compte supprimé",
        description: "Votre compte a été supprimé définitivement.",
      },
      deleteError: {
        title: "Erreur",
        description: "Impossible de supprimer le compte. Veuillez réessayer.",
      },
    },
  },
  recording: {
    title: "Studio d'enregistrement de jeu",
    subtitle: "Plateforme de collecte de données pour l'entraînement IA",
    controlsTitle: "Contrôles d'enregistrement",
    selectLabel: "Sélection de l'écran/fenêtre",
    selectPlaceholder: "Sélectionnez un écran à enregistrer",
    select: {
      screen: "Plein écran",
      window: "Fenêtre d'application",
    },
    start: "Démarrer l'enregistrement",
    stop: "Arrêter l'enregistrement",
    recordingBadge: "Enregistrement",
    sessionLabel: "Session : {{id}}",
    previewTitle: "Aperçu en direct",
    previewHint: "Appuyez sur \"Démarrer l'enregistrement\" pour commencer",
    cards: {
      screenCapture: {
        title: "Capture d'écran",
        active: "Actif",
        inactive: "Inactif",
        description: "Capture l'écran avec l'audio système",
      },
      webcam: {
        title: "Webcam",
        active: "Active",
        inactive: "Inactive",
        description: "Enregistrement en superposition 720p",
      },
      inputEvents: {
        title: "Événements d'entrée",
        recording: "Enregistrement",
        inactive: "Inactif",
        description: "Données clavier et souris",
      },
    },
    sessionInfo: {
      title: "Infos de session",
      id: "ID de session :",
      inputEvents: "Événements d'entrée :",
      startTime: "Heure de début :",
      duration: "Durée :",
      seconds: "{{count}} s",
    },
    alert: {
      recordingFailed:
        "Impossible de démarrer l'enregistrement. Veuillez vérifier les autorisations.",
    },
  },
  steps: {
    linkAccount: {
      unavailableTitle: "Lier un compte League",
      unavailableDescription:
        "Cette fonctionnalité nécessite une configuration backend. Contactez le support pour activer le lien de compte League.",
      toast: {
        missing: {
          title: "Erreur",
          description: "Saisissez le nom de jeu et le tagline",
        },
        found: {
          title: "Compte trouvé !",
          description: "Changez votre icône de profil pour vérifier la propriété.",
        },
        error: {
          title: "Erreur",
          description: "Échec de la liaison du compte",
        },
        verified: {
          title: "Vérifié !",
          description: "Votre compte League a été vérifié avec succès.",
        },
        verifyFailed: {
          title: "Vérification échouée",
          description: "Impossible de vérifier la propriété du compte",
        },
        unlink: {
          title: "Compte dissocié",
          description: "Compte supprimé.",
        },
        unlinkError: {
          title: "Erreur",
          description: "Échec de la dissociation du compte",
        },
      },
      title: "Lier un compte League",
      description: "Liez votre compte League of Legends pour commencer",
      privacyTitle: "Confidentialité d'abord :",
      privacyDescription:
        "Nous ne stockons jamais les données brutes des matchs. Seules des analyses dérivées sont stockées on-chain.",
      linkedAccounts: "Comptes liés",
      addAccount: "Ajouter un compte",
      gameName: "Nom du jeu",
      tagLine: "Tagline",
      region: "Région",
      starting: "Démarrage...",
      startVerification: "Démarrer la vérification",
    },
    verification: {
      title: "Vérifier la propriété du compte",
      description: "Suivez les étapes ci-dessous pour prouver la propriété",
      changeIcon: "Changez votre icône de profil en :",
      iconNumber: "Numéro d'icône :",
      stepsTitle: "Étapes de vérification :",
      steps: [
        "Lancez le client League of Legends",
        "Allez dans les paramètres de profil",
        "Changez l'icône de profil pour celle affichée ci-dessus",
        "Cliquez sur \"Vérifier la propriété\" ci-dessous",
      ],
      cancel: "Annuler",
      verifying: "Vérification...",
      verify: "Vérifier la propriété",
    },
    connectWallet: {
      title: "Connecter le portefeuille",
      description:
        "Connectez un portefeuille Web3 sur le testnet Monad pour stocker les identifiants vérifiés",
      hint: "Continuez avec MetaMask, Coinbase Wallet ou WalletConnect",
      connectedTitle: "Portefeuille connecté !",
      connectedDescription: "Cliquez sur continuer pour passer à l'étape 3",
      continue: "Continuer vers l'étape 3",
      selectWallet: "Sélectionnez un portefeuille à connecter",
    },
    saveBlockchain: {
      unavailableTitle: "Enregistrer sur la blockchain",
      unavailableDescription:
        "Cette fonctionnalité nécessite une configuration backend. Contactez le support pour activer l'intégration blockchain.",
      toast: {
        success: {
          title: "Succès !",
          description: "Identifiants enregistrés sur le testnet Monad.",
        },
        missingWallet: {
          title: "Erreur",
          description: "Connectez d'abord votre portefeuille",
        },
        switchRequired: {
          title: "Changement de réseau requis",
          description: "Passez à {{network}} dans votre portefeuille puis réessayez.",
        },
        checkWallet: {
          title: "Vérifiez votre portefeuille",
          description: "Approuvez la transaction dans la fenêtre du portefeuille",
        },
        transactionFailed: {
          title: "Échec de la transaction",
          description: "Échec de l'envoi de la transaction",
        },
        copied: {
          title: "Copié !",
          description: "Hash de transaction copié dans le presse-papiers",
        },
        switchSuccess: {
          title: "Réseau changé",
          description: "Passé à {{network}}",
        },
        switchFailed: {
          title: "Échec du changement",
          description: "Changez de réseau dans votre portefeuille",
        },
      },
      errors: {
        switchNetwork:
          "Passez à {{network}} (chaîne {{id}}) puis réessayez.",
        noVerifiedAccount: "Aucun compte vérifié trouvé",
        saveFailed: "Échec de l'enregistrement des identifiants",
      },
      blocked: {
        title: "Terminez les étapes précédentes",
        description:
          "Liez votre compte de jeu et connectez votre portefeuille pour continuer",
      },
      success: {
        title: "Identifiants enregistrés !",
        description: "Identifiants League vérifiés enregistrés sur le testnet Monad",
        hashLabel: "Hash de transaction",
        copy: "Copier le hash",
        viewExplorer: "Voir dans l'explorateur",
        saveAnother: "Enregistrer un autre",
      },
      card: {
        title: "Enregistrer sur Monad",
        description:
          "Stocker des analyses respectueuses de la confidentialité sur la blockchain Monad",
      },
      privacyNotice:
        "Nous ne stockons que des preuves d'accomplissement et des analyses. Les données brutes et infos personnelles ne sont jamais stockées.",
      account: {
        label: "Compte à enregistrer :",
        rank: "Rang actuel : {{rank}}",
      },
      feeNotice:
        "Cela envoie une vraie transaction au testnet Monad. Confirmez dans votre portefeuille et payez de petits frais de gas.",
      wrongNetwork:
        "Vous êtes sur le mauvais réseau (chaîne {{chainId}}). Passez à {{network}} (ID {{id}}) pour continuer.",
      switchButton: "Passer à Monad",
      switching: "Changement...",
      badgeAlt: "NFT badge de compétence",
      options: {
        title: "Que voulons-nous enregistrer ?",
        achievements: "Enregistrer la preuve d'accomplissement",
        nft: "Frapper le NFT badge de compétence",
        zk: "Générer une preuve ZK (optionnel)",
      },
      transaction: {
        title: "État de la transaction",
        prepare: "Préparer les données",
        confirmWallet: "Confirmer dans le portefeuille",
        submitted: "Soumise",
        confirming: "En attente de confirmation",
        finalized: "Finalisée",
        viewExplorer: "Voir dans l'explorateur",
      },
      submit: {
        pendingWallet: "Confirmez dans le portefeuille...",
        pendingMonad: "Enregistrement sur Monad...",
        default: "Enregistrer sur Monad",
      },
    },
    linkedAccount: {
      unknown: "Inconnu",
      unranked: "Non classé",
      verified: "Vérifié",
      unverified: "Non vérifié",
      verify: "Vérifier",
    },
  },
  wallet: {
    connected: "Portefeuille connecté",
    connectedDescription: "Connecté à {{address}}",
    disconnected: "Portefeuille déconnecté",
    disconnectedDescription: "La connexion du portefeuille a été supprimée.",
    connecting: "Connexion...",
    connect: "Connecter le portefeuille",
  },
  regions: {
    na1: "Amérique du Nord",
    euw1: "Europe Ouest",
    eune1: "Europe Nord & Est",
    kr: "Corée",
    br1: "Brésil",
    la1: "Amérique latine Nord",
    la2: "Amérique latine Sud",
    oc1: "Océanie",
    ru: "Russie",
    tr1: "Turquie",
    jp1: "Japon",
  },
  ui: {
    previousSlide: "Diapositive précédente",
    nextSlide: "Diapositive suivante",
    toggleSidebar: "Basculer la barre latérale",
    morePages: "Plus de pages",
  },
  notFound: {
    title: "Page non trouvée",
    back: "Retour à l'accueil",
  },
  alerts: {
    recordingFailed:
      "Impossible de démarrer l'enregistrement. Veuillez vérifier les autorisations.",
  },
};

export default fr;
