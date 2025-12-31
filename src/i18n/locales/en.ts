const en = {
  common: {
    cancel: "Cancel",
    close: "Close",
    previous: "Previous",
    next: "Next",
    more: "More",
    loading: "Loading...",
    saving: "Saving...",
    save: "Save",
    delete: "Delete",
    start: "Start",
    stop: "Stop",
    view: "View",
    copy: "Copy",
    copied: "Copied!",
    error: "Error",
    success: "Success!",
    unknown: "Unknown",
    locked: "Locked",
    send: "Send",
    sending: "Sending...",
    searchPlaceholder: "Search...",
    or: "or",
  },
  nav: {
    home: "Home",
    rewards: "Rewards",
    data: "Data",
    datasets: "Datasets",
    language: "Language",
    languageAria: "Select language",
    getStarted: "Get started",
    logoAlt: "NextMetal logo",
  },
  hero: {
    marquee: "Play games and earn rewards.",
    title: "Play, earn, and build AI",
    subtitle: "AI that learns by playing computer games.",
    cta: {
      gamers: "For gamers",
      developers: "For developers",
    },
  },
  supportedGames: {
    title: "Supported games",
    status: {
      live: "Live",
      comingSoon: "Coming soon",
    },
    logoAlt: "{{name}} logo",
    games: {
      lol: "League of Legends",
      starcraft: "StarCraft",
      starcraft2: "StarCraft II",
    },
  },
  rewards: {
    title: "Get rewarded",
    subtitlePrefix: "Earn",
    token: "$METAL",
    subtitleSuffix: "for every hour you play.",
    tiers: {
      silver: {
        label: "Silver",
        rate: "10 METAL per hour",
        description: "Anyone can join and earn rewards.",
      },
      gold: {
        label: "Gold",
        rate: "25 METAL per hour",
        description: "A tier for long-term contributors and supporters.",
      },
      platinum: {
        label: "Platinum",
        rate: "50 METAL per hour",
        description: "A tier for experts and pro players.",
      },
    },
    cta: "Play and earn rewards",
  },
  data: {
    titlePrefix: "Data",
    titleHighlight: "collection",
    subtitle: "Minimal collection, maximal signal.",
    cards: {
      mouse: {
        title: "Mouse input",
        description: "Aligned to the frame at click time",
      },
      keyboard: {
        title: "Keyboard input",
        description: "Key down/up stream",
      },
      screen: {
        title: "Screen video",
        description: "Capture gameplay in crisp detail",
      },
      timing: {
        title: "Timing",
        description: "Timestamps that sync every stream",
      },
      webcam: {
        title: "Webcam (optional)",
        description: "Collected only when enabled",
      },
    },
    control: {
      title: "You decide",
      description: "Choose exactly what you share.",
    },
  },
  datasets: {
    eyebrow: "Datasets · For AI labs",
    titlePrefix: "Datasets:",
    titleHighlight: "For AI labs",
    description:
      "High-quality datasets designed to train and evaluate advanced AGI agents in complex environments that demand multimodal understanding, strategic planning, and adaptive learning.",
    cards: {
      raw: {
        name: "Raw",
        subtitle: "Screen + input, synced, human-level.",
        items: [
          "Screen + input sync",
          "Human-level play",
          "Time-synced streams",
        ],
      },
      annotated: {
        name: "Annotated",
        subtitle: "Raw + labels, stages, metadata.",
        items: [
          "Raw + labels",
          "Stages and events",
          "Training metadata",
        ],
      },
    },
    cta: "Contact us",
    dialog: {
      title: "Tell us about your lab",
      description:
        "Share your plans for AI training data and we will guide the next steps.",
      fields: {
        name: "Name",
        email: "Work email",
        organization: "Organization",
        message: "What are you building?",
      },
      placeholders: {
        name: "Jane Doe",
        email: "you@lab.ai",
        organization: "NextMetal Labs",
        message: "Tell us your goals, timeline, and dataset usage plan.",
      },
      buttons: {
        cancel: "Cancel",
        submit: "Send message",
        submitting: "Sending...",
      },
    },
    toast: {
      missing: {
        title: "Missing required info",
        description: "Name, email, and a short message are required.",
      },
      thanks: {
        title: "Thanks for reaching out!",
        description: "We will get back to you soon.",
      },
    },
  },
  cta: {
    line1: "Help us build",
    line2: "Artificial General Intelligence!",
    subtitle: "Play. Earn. Build AGI.",
  },
  footer: {
    rights: "© 2025 All rights reserved.",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  dashboard: {
    title: "Dashboard",
    logoAlt: "NextMetal logo",
    logout: "Log out",
    menuItems: {
      studio: "Studio",
      gallery: "Gallery",
      rewards: "Rewards",
      settings: "Settings",
    },
  },
  appSidebar: {
    menu: "Menu",
    dashboard: "Dashboard",
    account: "Account",
  },
  network: {
    walletDisconnected: "Wallet not connected",
    correctNetwork: "Monad testnet",
    wrongNetwork: "Wrong network",
  },
  auth: {
    demoToast: {
      title: "Demo credentials filled",
      description: "Click Log in to access the demo account",
    },
    loginToast: {
      title: "Welcome back!",
      description: "You are logged in.",
    },
    signupToast: {
      title: "Account created!",
      description: "You can now log in with your credentials.",
    },
    errorToast: {
      title: "Error",
    },
    title: {
      login: "Log in",
      signup: "Sign up",
    },
    description: {
      login: "Enter your credentials to access the dashboard",
      signup: "Create an account to start linking your league profile",
    },
    fields: {
      username: "Username",
      email: "Email",
      password: "Password",
    },
    placeholders: {
      username: "Enter your username",
      email: "you@email.com",
    },
    loading: "Loading...",
    actions: {
      login: "Log in",
      signup: "Sign up",
    },
    switchToSignup: "Don't have an account? Sign up",
    switchToLogin: "Already have an account? Log in",
    or: "or",
    demoHint: "Click \"Use demo account\" to test with a demo account",
    demoButton: "Use demo account",
    back: "← Back to home",
  },
  account: {
    errorTransactions: {
      title: "Error",
      description: "Could not load transactions",
    },
    logout: {
      title: "Logged out",
      description: "You have been logged out.",
    },
    error: {
      title: "Error",
    },
    title: "Account",
    logoutButton: "Log out",
    profile: {
      title: "Profile info",
      description: "Account details",
      email: "Email:",
      userId: "User ID:",
    },
    transactions: {
      title: "Transaction history",
      description: "Blockchain transactions submitted to Monad testnet",
      empty:
        "No transactions yet. Complete the dashboard steps to create your first transaction.",
      rank: "Rank: {{tier}} {{division}}",
      view: "View",
      hash: "Transaction hash",
    },
  },
  gallery: {
    title: "Gallery",
    filenameHint: "Saved filename: nextmetal_video_*.webm",
    uploadAll: "Upload all",
    tabs: {
      all: "All",
      clips: "Clips",
      best: "Best",
    },
    stats: {
      recordings: "Recordings",
      hours: "Hours",
      thisWeek: "This week",
    },
    play: "Play",
    emptySearch: {
      title: "No recordings found",
      description: "Try a different query or create your first recording.",
    },
    emptyAll: {
      title: "No recordings yet",
      browserLimitLabel: "Browser limitation:",
      browserLimitDescription: "Cannot read local files.",
      desktopAppRequired: "A desktop app is required for automatic detection.",
    },
    mockNames: {
      lolRanked: "League of Legends - Ranked Match",
      valorantCompetitive: "VALORANT - Competitive",
      cs2Casual: "Counter-Strike 2 - Casual Match",
      apexRanked: "Apex Legends - Ranked",
      overwatchQuick: "Overwatch 2 - Quick Play",
      rocketTournament: "Rocket League - Tournament",
      dotaRanked: "Dota 2 - Ranked Match",
      fortniteCreative: "Fortnite - Creative Mode",
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
    completed: "Completed",
    processing: "Processing",
    failed: "Failed",
    unknown: "Unknown",
  },
  studio: {
    title: "Studio",
    select: {
      screen: "Full screen",
      window: "Window",
    },
    action: {
      stop: "Stop",
      record: "Record",
      stream: "Stream",
    },
    labels: {
      screen: "Screen",
      camera: "Camera",
      audio: "Audio",
      input: "Input",
    },
    state: {
      on: "On",
      off: "Off",
    },
    events: "{{count}} events",
    session: {
      title: "Session info and downloads",
      id: "Session ID:",
      start: "Start time:",
      duration: "Duration:",
      notRecording: "Not recording",
      inputEvents: "Input events:",
      videoFormat: "Video format:",
      dataExport: "Data export:",
      dataExportFormat: "ZIP (video + JSON + metadata)",
      readyTitle: "AI training ready:",
      readyDescription:
        "When recording ends, the ZIP file downloads automatically. It includes synced video (.webm), input data (.json), and AI training metadata.",
      prepTitle: "Recording ready:",
      prepDescription:
        "Start recording to capture synced video and input data for AI training.",
    },
  },
  rewardsPage: {
    title: "Rewards",
    tabs: {
      league: "League",
      earnings: "Earnings",
      achievements: "Achievements",
    },
    earnings: {
      thisMonth: "This month",
      sessions: "Sessions",
    },
    achievements: {
      firstRecording: {
        title: "First recording",
        description: "Record your first game",
      },
      champion: {
        title: "Champion",
        description: "Earn 100 $METAL",
      },
    },
  },
  settings: {
    title: "Settings",
    fields: {
      username: "Username",
      email: "Email",
    },
    save: "Save",
    saving: "Saving...",
    twoFactor: "Two-factor authentication",
    enable: "Enable",
    changePassword: "Change password",
    change: "Change",
    deleteAccount: "Delete account",
    delete: "Delete",
    toast: {
      profileUpdated: {
        title: "Profile updated",
        description: "Your profile was updated successfully.",
      },
      error: {
        title: "Error",
        description: "Failed to update profile. Please try again.",
      },
      deleted: {
        title: "Account deleted",
        description: "Your account has been permanently deleted.",
      },
      deleteError: {
        title: "Error",
        description: "Failed to delete account. Please try again.",
      },
    },
  },
  recording: {
    title: "Game Recording Studio",
    subtitle: "AI training data collection platform",
    controlsTitle: "Recording controls",
    selectLabel: "Screen/window selection",
    selectPlaceholder: "Select a screen to record",
    select: {
      screen: "Full screen",
      window: "Application window",
    },
    start: "Start recording",
    stop: "Stop recording",
    recordingBadge: "Recording",
    sessionLabel: "Session: {{id}}",
    previewTitle: "Live preview",
    previewHint: "Press \"Start recording\" to begin",
    cards: {
      screenCapture: {
        title: "Screen capture",
        active: "Active",
        inactive: "Inactive",
        description: "Captures the screen with system audio",
      },
      webcam: {
        title: "Webcam",
        active: "Active",
        inactive: "Inactive",
        description: "720p overlay recording",
      },
      inputEvents: {
        title: "Input events",
        recording: "Recording",
        inactive: "Inactive",
        description: "Keyboard and mouse data",
      },
    },
    sessionInfo: {
      title: "Session info",
      id: "Session ID:",
      inputEvents: "Input events:",
      startTime: "Start time:",
      duration: "Duration:",
      seconds: "{{count}}s",
    },
    alert: {
      recordingFailed:
        "Could not start recording. Please check permissions.",
    },
  },
  steps: {
    linkAccount: {
      unavailableTitle: "Link League account",
      unavailableDescription:
        "This feature requires backend setup. Contact support to enable League account linking.",
      toast: {
        missing: {
          title: "Error",
          description: "Enter both game name and tagline",
        },
        found: {
          title: "Account found!",
          description: "Change your profile icon to verify ownership.",
        },
        error: {
          title: "Error",
          description: "Failed to link account",
        },
        verified: {
          title: "Verified!",
          description: "Your League account was verified successfully.",
        },
        verifyFailed: {
          title: "Verification failed",
          description: "Could not verify account ownership",
        },
        unlink: {
          title: "Account unlinked",
          description: "Account removed.",
        },
        unlinkError: {
          title: "Error",
          description: "Failed to unlink account",
        },
      },
      title: "Link League account",
      description: "Link your League of Legends account to get started",
      privacyTitle: "Privacy first:",
      privacyDescription:
        "We never store raw match data. Only derived analytics are stored on-chain.",
      linkedAccounts: "Linked accounts",
      addAccount: "Add new account",
      gameName: "Game name",
      tagLine: "Tagline",
      region: "Region",
      starting: "Starting...",
      startVerification: "Start verification",
    },
    verification: {
      title: "Verify account ownership",
      description: "Follow the steps below to prove ownership",
      changeIcon: "Change your profile icon to:",
      iconNumber: "Icon number:",
      stepsTitle: "Verification steps:",
      steps: [
        "Launch the League of Legends client",
        "Go to profile settings",
        "Change the profile icon to the one shown above",
        "Click \"Verify ownership\" below",
      ],
      cancel: "Cancel",
      verifying: "Verifying...",
      verify: "Verify ownership",
    },
    connectWallet: {
      title: "Connect wallet",
      description:
        "Connect a Web3 wallet on Monad testnet to store verified player credentials",
      hint: "Continue with MetaMask, Coinbase Wallet, or WalletConnect",
      connectedTitle: "Wallet connected!",
      connectedDescription: "Click continue to move to step 3",
      continue: "Continue to step 3",
      selectWallet: "Select a wallet to connect",
    },
    saveBlockchain: {
      unavailableTitle: "Save to blockchain",
      unavailableDescription:
        "This feature requires backend setup. Contact support to enable blockchain integration.",
      toast: {
        success: {
          title: "Success!",
          description: "Credentials saved to Monad testnet.",
        },
        missingWallet: {
          title: "Error",
          description: "Connect your wallet first",
        },
        switchRequired: {
          title: "Network switch required",
          description: "Switch to {{network}} in your wallet and try again.",
        },
        checkWallet: {
          title: "Check your wallet",
          description: "Approve the transaction in your wallet popup",
        },
        transactionFailed: {
          title: "Transaction failed",
          description: "Failed to send transaction",
        },
        copied: {
          title: "Copied!",
          description: "Transaction hash copied to clipboard",
        },
        switchSuccess: {
          title: "Network switched",
          description: "Switched to {{network}}",
        },
        switchFailed: {
          title: "Switch failed",
          description: "Switch networks in your wallet",
        },
      },
      errors: {
        switchNetwork:
          "Switch to {{network}} (chain {{id}}) and try again.",
        noVerifiedAccount: "No verified account found",
        saveFailed: "Failed to save credentials",
      },
      blocked: {
        title: "Complete previous steps",
        description:
          "Link your game account and connect your wallet to continue",
      },
      success: {
        title: "Credentials saved!",
        description: "Verified League credentials saved to Monad testnet",
        hashLabel: "Transaction hash",
        copy: "Copy hash",
        viewExplorer: "View in explorer",
        saveAnother: "Save another",
      },
      card: {
        title: "Save to Monad",
        description:
          "Store privacy-preserving analytics on the Monad blockchain",
      },
      privacyNotice:
        "We only store achievement proofs and analytics. Raw match data and personal info are never stored.",
      account: {
        label: "Account to store:",
        rank: "Current rank: {{rank}}",
      },
      feeNotice:
        "This sends a real transaction to Monad testnet. Confirm in your wallet and pay a small gas fee.",
      wrongNetwork:
        "You are on the wrong network (chain {{chainId}}). Switch to {{network}} (ID {{id}}) to continue.",
      switchButton: "Switch to Monad",
      switching: "Switching...",
      badgeAlt: "Skill badge NFT",
      options: {
        title: "What should we store?",
        achievements: "Store achievement proof",
        nft: "Mint skill badge NFT",
        zk: "Generate ZK proof (optional)",
      },
      transaction: {
        title: "Transaction status",
        prepare: "Prepare data",
        confirmWallet: "Confirm in wallet",
        submitted: "Submitted",
        confirming: "Waiting for confirmation",
        finalized: "Finalized",
        viewExplorer: "View in explorer",
      },
      submit: {
        pendingWallet: "Confirm in wallet...",
        pendingMonad: "Saving to Monad...",
        default: "Save to Monad",
      },
    },
    linkedAccount: {
      unknown: "Unknown",
      unranked: "Unranked",
      verified: "Verified",
      unverified: "Unverified",
      verify: "Verify",
    },
  },
  wallet: {
    connected: "Wallet connected",
    connectedDescription: "Connected to {{address}}",
    disconnected: "Wallet disconnected",
    disconnectedDescription: "Wallet connection has been removed.",
    connecting: "Connecting...",
    connect: "Connect wallet",
  },
  regions: {
    na1: "North America",
    euw1: "Europe West",
    eune1: "Europe Nordic & East",
    kr: "Korea",
    br1: "Brazil",
    la1: "Latin America North",
    la2: "Latin America South",
    oc1: "Oceania",
    ru: "Russia",
    tr1: "Turkey",
    jp1: "Japan",
  },
  ui: {
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    toggleSidebar: "Toggle sidebar",
    morePages: "More pages",
  },
  notFound: {
    title: "Page not found",
    back: "Go back home",
  },
  alerts: {
    recordingFailed:
      "Could not start recording. Please check permissions.",
  },
};

export default en;
