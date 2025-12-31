const ko = {
  common: {
    cancel: "취소",
    close: "닫기",
    previous: "이전",
    next: "다음",
    more: "더 보기",
    loading: "로딩 중...",
    saving: "저장 중...",
    save: "저장",
    delete: "삭제",
    start: "시작",
    stop: "중지",
    view: "보기",
    copy: "복사",
    copied: "복사됨!",
    error: "오류",
    success: "성공!",
    unknown: "알 수 없음",
    locked: "잠김",
    send: "전송",
    sending: "전송 중...",
    searchPlaceholder: "검색...",
    or: "또는",
  },
  nav: {
    home: "홈",
    rewards: "보상",
    data: "데이터",
    datasets: "데이터셋",
    language: "언어",
    languageAria: "언어 선택",
    getStarted: "시작하기",
    logoAlt: "NextMetal 로고",
  },
  hero: {
    marquee: "게임을 플레이하고 보상을 받으세요.",
    title: "플레이하고, 보상 받고, AI를 만드세요",
    subtitle: "컴퓨터 게임을 하며 배우는 AI.",
    cta: {
      gamers: "게이머용",
      developers: "개발자용",
    },
  },
  supportedGames: {
    title: "지원 게임",
    status: {
      live: "서비스 중",
      comingSoon: "출시 예정",
    },
    logoAlt: "{{name}} 로고",
    games: {
      lol: "리그 오브 레전드",
      starcraft: "스타크래프트",
      starcraft2: "스타크래프트 II",
    },
  },
  rewards: {
    title: "보상 받기",
    subtitlePrefix: "플레이한 매 시간마다",
    token: "$METAL",
    subtitleSuffix: "보상을 받으세요.",
    tiers: {
      silver: {
        label: "실버",
        rate: "시간당 10 METAL",
        description: "누구나 참여해 보상을 받을 수 있어요.",
      },
      gold: {
        label: "골드",
        rate: "시간당 25 METAL",
        description: "장기 참여자와 서포터를 위한 등급.",
      },
      platinum: {
        label: "플래티넘",
        rate: "시간당 50 METAL",
        description: "상급자와 프로 플레이어를 위한 등급.",
      },
    },
    cta: "플레이하고 보상 받기",
  },
  data: {
    titlePrefix: "데이터",
    titleHighlight: "수집",
    subtitle: "최소한의 수집, 최대한의 신호.",
    cards: {
      mouse: {
        title: "마우스 입력",
        description: "클릭까지 프레임 단위로 정렬",
      },
      keyboard: {
        title: "키보드 입력",
        description: "키 다운/업 스트림",
      },
      screen: {
        title: "화면 영상",
        description: "게임 플레이를 선명하게 캡처",
      },
      timing: {
        title: "타이밍",
        description: "모든 데이터를 동기화하는 타임스탬프",
      },
      webcam: {
        title: "웹캠(선택)",
        description: "켜는 경우에만 수집",
      },
    },
    control: {
      title: "당신이 결정합니다",
      description: "무엇을 공유할지 직접 선택하세요.",
    },
  },
  datasets: {
    eyebrow: "데이터셋 · AI 연구소용",
    titlePrefix: "데이터셋:",
    titleHighlight: "AI 연구소용",
    description:
      "멀티모달 이해, 전략적 계획, 적응 학습이 필요한 복잡한 환경에서 고급 AGI 에이전트를 학습·평가하도록 설계된 고품질 데이터셋입니다.",
    cards: {
      raw: {
        name: "원시",
        subtitle: "화면 + 입력, 동기화, 인간 수준.",
        items: [
          "화면 + 입력 동기화",
          "인간 수준의 플레이",
          "시간 동기화 스트림",
        ],
      },
      annotated: {
        name: "주석",
        subtitle: "원시 + 라벨, 단계, 메타데이터.",
        items: [
          "원시 + 라벨",
          "단계 및 이벤트",
          "학습용 메타데이터",
        ],
      },
    },
    cta: "문의하기",
    dialog: {
      title: "연구소 정보를 알려주세요",
      description:
        "AI 학습 데이터에 대한 계획을 공유해 주시면 다음 단계로 안내드리겠습니다.",
      fields: {
        name: "이름",
        email: "업무용 이메일",
        organization: "조직",
        message: "무엇을 만들고 있나요?",
      },
      placeholders: {
        name: "홍길동",
        email: "you@lab.ai",
        organization: "NextMetal Labs",
        message: "목표, 일정, 데이터셋 활용 계획을 알려주세요.",
      },
      buttons: {
        cancel: "취소",
        submit: "메시지 보내기",
        submitting: "전송 중...",
      },
    },
    toast: {
      missing: {
        title: "필수 정보 누락",
        description: "이름, 이메일, 간단한 메시지가 필요합니다.",
      },
      thanks: {
        title: "문의 감사합니다!",
        description: "곧 연락드리겠습니다.",
      },
    },
  },
  cta: {
    line1: "함께 만들어가요",
    line2: "인공일반지능(AGI)!",
    subtitle: "플레이. 보상. AGI 구축.",
  },
  footer: {
    rights: "© 2025 모든 권리 보유.",
  },
  theme: {
    toggle: "테마 전환",
    light: "라이트",
    dark: "다크",
    system: "시스템",
  },
  dashboard: {
    title: "대시보드",
    logoAlt: "NextMetal 로고",
    logout: "로그아웃",
    menuItems: {
      studio: "스튜디오",
      gallery: "갤러리",
      rewards: "보상",
      settings: "설정",
    },
  },
  appSidebar: {
    menu: "메뉴",
    dashboard: "대시보드",
    account: "계정",
  },
  network: {
    walletDisconnected: "지갑 미연결",
    correctNetwork: "Monad 테스트넷",
    wrongNetwork: "잘못된 네트워크",
  },
  auth: {
    demoToast: {
      title: "데모 계정 정보가 입력되었습니다",
      description: "로그인을 클릭해 데모 계정으로 접속하세요",
    },
    loginToast: {
      title: "다시 오신 것을 환영합니다!",
      description: "성공적으로 로그인했습니다.",
    },
    signupToast: {
      title: "계정이 생성되었습니다!",
      description: "이제 자격 정보로 로그인할 수 있습니다.",
    },
    errorToast: {
      title: "오류",
    },
    title: {
      login: "로그인",
      signup: "회원가입",
    },
    description: {
      login: "자격 정보를 입력해 대시보드에 접속하세요",
      signup: "계정을 만들어 리그 계정 연동을 시작하세요",
    },
    fields: {
      username: "사용자 이름",
      email: "이메일",
      password: "비밀번호",
    },
    placeholders: {
      username: "사용자 이름을 입력하세요",
      email: "you@email.com",
    },
    loading: "로딩 중...",
    actions: {
      login: "로그인",
      signup: "회원가입",
    },
    switchToSignup: "계정이 없으신가요? 회원가입",
    switchToLogin: "이미 계정이 있나요? 로그인",
    or: "또는",
    demoHint: "아래 \"데모 계정 사용\"을 클릭해 데모 계정으로 테스트하세요",
    demoButton: "데모 계정 사용",
    back: "← 홈으로 돌아가기",
  },
  account: {
    errorTransactions: {
      title: "오류",
      description: "트랜잭션을 불러오지 못했습니다",
    },
    logout: {
      title: "로그아웃됨",
      description: "성공적으로 로그아웃했습니다.",
    },
    error: {
      title: "오류",
    },
    title: "계정",
    logoutButton: "로그아웃",
    profile: {
      title: "프로필 정보",
      description: "계정 상세 정보",
      email: "이메일:",
      userId: "사용자 ID:",
    },
    transactions: {
      title: "트랜잭션 내역",
      description: "Monad 테스트넷에 제출한 블록체인 트랜잭션",
      empty:
        "아직 트랜잭션이 없습니다. 대시보드 단계를 완료해 첫 트랜잭션을 생성하세요.",
      rank: "랭크: {{tier}} {{division}}",
      view: "보기",
      hash: "트랜잭션 해시",
    },
  },
  gallery: {
    title: "갤러리",
    filenameHint: "저장 파일명: nextmetal_video_*.webm",
    uploadAll: "전체 업로드",
    tabs: { all: "전체", clips: "클립", best: "베스트" },
    stats: {
      recordings: "녹화",
      hours: "시간",
      thisWeek: "이번 주",
    },
    play: "재생",
    emptySearch: {
      title: "녹화를 찾을 수 없습니다",
      description: "검색어를 조정하거나 첫 녹화를 만들어보세요.",
    },
    emptyAll: {
      title: "아직 녹화가 없습니다",
      browserLimitLabel: "브라우저 제한:",
      browserLimitDescription: "로컬 파일을 읽을 수 없습니다.",
      desktopAppRequired: "자동 감지를 위해서는 데스크톱 앱이 필요합니다.",
    },
    mockNames: {
      lolRanked: "리그 오브 레전드 - 랭크 경기",
      valorantCompetitive: "발로란트 - 경쟁전",
      cs2Casual: "카운터 스트라이크 2 - 캐주얼 경기",
      apexRanked: "에이펙스 레전드 - 랭크",
      overwatchQuick: "오버워치 2 - 빠른 대전",
      rocketTournament: "로켓 리그 - 토너먼트",
      dotaRanked: "도타 2 - 랭크 경기",
      fortniteCreative: "포트나이트 - 크리에이티브 모드",
    },
    mockGames: {
      lol: "리그 오브 레전드",
      valorant: "발로란트",
      cs2: "카운터 스트라이크 2",
      apex: "에이펙스 레전드",
      overwatch: "오버워치 2",
      rocket: "로켓 리그",
      dota: "도타 2",
      fortnite: "포트나이트",
    },
  },
  status: {
    completed: "완료",
    processing: "처리 중",
    failed: "실패",
    unknown: "알 수 없음",
  },
  studio: {
    title: "스튜디오",
    select: {
      screen: "전체 화면",
      window: "창",
    },
    action: {
      stop: "중지",
      record: "녹화",
      stream: "스트리밍",
    },
    labels: {
      screen: "화면",
      camera: "카메라",
      audio: "오디오",
      input: "입력",
    },
    state: {
      on: "켜짐",
      off: "꺼짐",
    },
    events: "{{count}} 이벤트",
    session: {
      title: "세션 정보 및 다운로드",
      id: "세션 ID:",
      start: "시작 시간:",
      duration: "길이:",
      notRecording: "녹화 중이 아님",
      inputEvents: "입력 이벤트:",
      videoFormat: "영상 형식:",
      dataExport: "데이터 내보내기:",
      dataExportFormat: "ZIP (영상 + JSON + 메타데이터)",
      readyTitle: "AI 학습 준비 완료:",
      readyDescription:
        "녹화가 끝나면 ZIP 파일이 자동 다운로드됩니다. 동기화된 영상(.webm), 입력 데이터(.json), AI 학습용 메타데이터가 포함됩니다.",
      prepTitle: "녹화 준비 완료:",
      prepDescription:
        "녹화를 시작하면 AI 학습을 위한 동기화된 영상과 입력 데이터를 수집합니다.",
    },
  },
  rewardsPage: {
    title: "보상",
    tabs: {
      league: "리그",
      earnings: "수익",
      achievements: "업적",
    },
    earnings: {
      thisMonth: "이번 달",
      sessions: "세션",
    },
    achievements: {
      firstRecording: {
        title: "첫 녹화",
        description: "첫 게임을 녹화하세요",
      },
      champion: {
        title: "챔피언",
        description: "100 $METAL 획득",
      },
    },
  },
  settings: {
    title: "설정",
    fields: {
      username: "사용자 이름",
      email: "이메일",
    },
    save: "저장",
    saving: "저장 중...",
    twoFactor: "2단계 인증",
    enable: "활성화",
    changePassword: "비밀번호 변경",
    change: "변경",
    deleteAccount: "계정 삭제",
    delete: "삭제",
    toast: {
      profileUpdated: {
        title: "프로필이 업데이트되었습니다",
        description: "프로필이 성공적으로 업데이트되었습니다.",
      },
      error: {
        title: "오류",
        description: "프로필 업데이트에 실패했습니다. 다시 시도해주세요.",
      },
      deleted: {
        title: "계정이 삭제되었습니다",
        description: "계정이 영구적으로 삭제되었습니다.",
      },
      deleteError: {
        title: "오류",
        description: "계정 삭제에 실패했습니다. 다시 시도해주세요.",
      },
    },
  },
  recording: {
    title: "게임 녹화 스튜디오",
    subtitle: "AI 학습 데이터 수집 플랫폼",
    controlsTitle: "녹화 컨트롤",
    selectLabel: "화면/창 선택",
    selectPlaceholder: "녹화할 화면 선택",
    select: {
      screen: "전체 화면",
      window: "애플리케이션 창",
    },
    start: "녹화 시작",
    stop: "녹화 중지",
    recordingBadge: "녹화 중",
    sessionLabel: "세션: {{id}}",
    previewTitle: "실시간 미리보기",
    previewHint: "\"녹화 시작\"을 눌러 시작하세요",
    cards: {
      screenCapture: {
        title: "화면 캡처",
        active: "활성",
        inactive: "비활성",
        description: "시스템 오디오와 함께 화면을 캡처합니다",
      },
      webcam: {
        title: "웹캠",
        active: "활성",
        inactive: "비활성",
        description: "720p 오버레이 녹화",
      },
      inputEvents: {
        title: "입력 이벤트",
        recording: "기록 중",
        inactive: "비활성",
        description: "키보드 및 마우스 데이터",
      },
    },
    sessionInfo: {
      title: "세션 정보",
      id: "세션 ID:",
      inputEvents: "입력 이벤트:",
      startTime: "시작 시간:",
      duration: "길이:",
      seconds: "{{count}}초",
    },
    alert: {
      recordingFailed: "녹화를 시작하지 못했습니다. 권한을 확인해주세요.",
    },
  },
  steps: {
    linkAccount: {
      unavailableTitle: "리그 계정 연동",
      unavailableDescription:
        "이 기능은 백엔드 설정이 필요합니다. 리그 계정 연동을 활성화하려면 지원팀에 문의하세요.",
      toast: {
        missing: {
          title: "오류",
          description: "게임 이름과 태그라인을 모두 입력하세요",
        },
        found: {
          title: "계정을 찾았습니다!",
          description: "프로필 아이콘을 변경해 소유권을 인증하세요.",
        },
        error: {
          title: "오류",
          description: "계정 연동에 실패했습니다",
        },
        verified: {
          title: "인증 완료!",
          description: "리그 계정이 성공적으로 인증되었습니다.",
        },
        verifyFailed: {
          title: "인증 실패",
          description: "계정 소유권을 확인할 수 없습니다",
        },
        unlink: {
          title: "계정 연결 해제",
          description: "계정이 제거되었습니다.",
        },
        unlinkError: {
          title: "오류",
          description: "계정 연결 해제에 실패했습니다",
        },
      },
      title: "리그 계정 연결하기",
      description: "리그 오브 레전드 계정을 연결해 시작하세요",
      privacyTitle: "프라이버시 우선:",
      privacyDescription:
        "원본 경기 데이터는 저장하지 않고, 파생된 분석만 온체인에 저장합니다.",
      linkedAccounts: "연결된 계정",
      addAccount: "새 계정 추가",
      gameName: "게임 이름",
      tagLine: "태그라인",
      region: "지역",
      starting: "시작 중...",
      startVerification: "인증 시작",
    },
    verification: {
      title: "계정 소유권 인증",
      description: "아래 단계에 따라 계정 소유권을 증명하세요",
      changeIcon: "프로필 아이콘을 다음으로 변경하세요:",
      iconNumber: "아이콘 번호:",
      stepsTitle: "인증 단계:",
      steps: [
        "리그 오브 레전드 클라이언트를 실행하세요",
        "프로필 설정으로 이동하세요",
        "프로필 아이콘을 위에 표시된 아이콘으로 변경하세요",
        "아래의 \"소유권 인증\"을 클릭하세요",
      ],
      cancel: "취소",
      verifying: "인증 중...",
      verify: "소유권 인증",
    },
    connectWallet: {
      title: "지갑 연결하기",
      description:
        "Monad 테스트넷의 Web3 지갑을 연결해 인증된 플레이어 자격 정보를 저장하세요",
      hint: "MetaMask, Coinbase Wallet, WalletConnect로 연결해 계속하세요",
      connectedTitle: "지갑이 연결되었습니다!",
      connectedDescription: "계속을 눌러 다음 단계로 이동하세요",
      continue: "3단계로 계속",
      selectWallet: "연결할 지갑을 선택하세요",
    },
    saveBlockchain: {
      unavailableTitle: "블록체인에 저장",
      unavailableDescription:
        "이 기능은 백엔드 설정이 필요합니다. 블록체인 연동을 활성화하려면 지원팀에 문의하세요.",
      toast: {
        success: {
          title: "성공!",
          description: "자격 정보가 Monad 테스트넷에 저장되었습니다.",
        },
        missingWallet: {
          title: "오류",
          description: "먼저 지갑을 연결하세요",
        },
        switchRequired: {
          title: "네트워크 전환 필요",
          description: "지갑에서 {{network}}로 전환한 뒤 다시 시도하세요.",
        },
        checkWallet: {
          title: "지갑을 확인하세요",
          description: "지갑 팝업에서 트랜잭션을 승인하세요",
        },
        transactionFailed: {
          title: "전송 실패",
          description: "트랜잭션 전송에 실패했습니다",
        },
        copied: {
          title: "복사됨!",
          description: "트랜잭션 해시를 클립보드에 복사했습니다",
        },
        switchSuccess: {
          title: "네트워크가 전환되었습니다",
          description: "{{network}}로 전환되었습니다",
        },
        switchFailed: {
          title: "전환 실패",
          description: "지갑에서 네트워크를 전환하세요",
        },
      },
      errors: {
        switchNetwork: "{{network}} (체인 {{id}})로 전환한 뒤 다시 시도하세요.",
        noVerifiedAccount: "인증된 계정을 찾을 수 없습니다",
        saveFailed: "자격 정보 저장에 실패했습니다",
      },
      blocked: {
        title: "이전 단계를 완료하세요",
        description: "게임 계정을 연결하고 지갑을 연결해야 계속할 수 있습니다",
      },
      success: {
        title: "자격 정보 저장 완료!",
        description: "인증된 리그 자격 정보가 Monad 테스트넷에 저장되었습니다",
        hashLabel: "트랜잭션 해시",
        copy: "해시 복사",
        viewExplorer: "익스플로러에서 보기",
        saveAnother: "다른 항목 저장",
      },
      card: {
        title: "Monad에 저장",
        description: "개인정보를 보호하는 분석 데이터를 Monad 블록체인에 저장합니다",
      },
      privacyNotice:
        "업적 증명과 분석만 저장하며, 원본 경기 데이터나 개인정보는 저장하지 않습니다.",
      account: {
        label: "저장할 계정:",
        rank: "현재 랭크: {{rank}}",
      },
      feeNotice:
        "Monad 테스트넷에 실제 트랜잭션을 전송합니다. 지갑에서 확인하고 소액의 가스비를 지불해야 합니다.",
      wrongNetwork:
        "현재 잘못된 네트워크입니다(체인 {{chainId}}). 계속하려면 {{network}}(ID {{id}})로 전환하세요.",
      switchButton: "Monad로 전환",
      switching: "전환 중...",
      badgeAlt: "스킬 배지 NFT",
      options: {
        title: "무엇을 저장할까요?",
        achievements: "업적 증명 저장",
        nft: "스킬 배지 NFT 민팅",
        zk: "ZK 증명 생성(선택)",
      },
      transaction: {
        title: "트랜잭션 상태",
        prepare: "데이터 준비",
        confirmWallet: "지갑에서 확인",
        submitted: "제출됨",
        confirming: "컨펌 대기 중",
        finalized: "확정됨",
        viewExplorer: "익스플로러에서 보기",
      },
      submit: {
        pendingWallet: "지갑에서 확인...",
        pendingMonad: "Monad에 저장 중...",
        default: "Monad에 저장",
      },
    },
    linkedAccount: {
      unknown: "알 수 없음",
      unranked: "언랭크",
      verified: "인증됨",
      unverified: "미인증",
      verify: "인증",
    },
  },
  wallet: {
    connected: "지갑이 연결되었습니다",
    connectedDescription: "{{address}}에 연결됨",
    disconnected: "지갑 연결 해제",
    disconnectedDescription: "지갑 연결이 해제되었습니다.",
    connecting: "연결 중...",
    connect: "지갑 연결",
  },
  regions: {
    na1: "북미",
    euw1: "유럽 서부",
    eune1: "유럽 북부/동부",
    kr: "한국",
    br1: "브라질",
    la1: "라틴아메리카 북부",
    la2: "라틴아메리카 남부",
    oc1: "오세아니아",
    ru: "러시아",
    tr1: "터키",
    jp1: "일본",
  },
  ui: {
    previousSlide: "이전 슬라이드",
    nextSlide: "다음 슬라이드",
    toggleSidebar: "사이드바 전환",
    morePages: "더 많은 페이지",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    back: "홈으로 돌아가기",
  },
  alerts: {
    recordingFailed: "녹화를 시작하지 못했습니다. 권한을 확인해주세요.",
  },
};

export default ko;
