export const translations = {
  ko: {
    nav: {
      products: "제품",
      philosophy: "철학",
      contact: "연락하기",
      menuLabel: "메뉴 열기",
    },
    hero: {
      heading: ["사람의 가능성을", "확장", "하는 기술"],
      subtitle:
        "셀로빈은 AI 기술을 통해 창작, 검증, 생산성의 경계를 넓히는 소프트웨어를 만듭니다.",
    },
    products: {
      sectionLabel: "Products",
      heading: "우리가 만드는 것들",
      learnMore: "자세히 보기",
      items: [
        {
          description:
            "범용 AI 빌더 + 워크스페이스. 프롬프트 하나로 문서, 앱, 웹사이트를 설계하고 생성합니다.",
        },
        {
          description:
            "AI 생성 논문 판별 및 검증 서비스. 근거 리포트와 통계 재검산을 통합한 학술 신뢰 도구.",
        },
        {
          description:
            "AI 에디터 SaaS 보일러플레이트. 6개 독립 모듈, 6종 AI 프로바이더, 실시간 협업, 결제까지 풀소스 제공.",
        },
      ],
    },
    philosophy: {
      sectionLabel: "Philosophy",
      heading: "기술에 대한 우리의 생각",
      items: [
        {
          title: "도구가 사라질 때까지",
          body: "최고의 도구는 그 존재를 잊게 만듭니다. 복잡한 기술을 단순한 경험으로 전환하는 것이 우리의 설계 기준입니다.",
        },
        {
          title: "신뢰할 수 있는 AI",
          body: "AI의 출력은 검증 가능해야 합니다. 생성뿐 아니라 근거와 투명성을 함께 제공합니다.",
        },
        {
          title: "작은 팀, 큰 레버리지",
          body: "소수의 사람이 거대한 영향을 만들 수 있는 시대입니다. 우리의 소프트웨어가 그 지렛대가 됩니다.",
        },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      heading: "함께 이야기하기",
      description:
        "사업 제안, 협업 문의, 또는 제품에 대한 의견이 있으시다면 언제든 연락해 주세요.",
    },
    footer: {
      bizNumber: "사업자등록번호 871-12-02965",
    },
  },
  en: {
    nav: {
      products: "Products",
      philosophy: "Philosophy",
      contact: "Contact",
      menuLabel: "Open menu",
    },
    hero: {
      heading: ["Technology that", "expands", " human potential"],
      subtitle:
        "Celovin builds software that pushes the boundaries of creation, verification, and productivity through AI.",
    },
    products: {
      sectionLabel: "Products",
      heading: "What we build",
      learnMore: "Learn more",
      items: [
        {
          description:
            "All-purpose AI builder + workspace. Design and generate documents, apps, and websites from a single prompt.",
        },
        {
          description:
            "AI-generated paper detection and verification. An academic integrity tool combining evidence reports with statistical recalculation.",
        },
        {
          description:
            "AI editor SaaS boilerplate. 6 independent modules, 6 AI providers, real-time collaboration, and payments — full source included.",
        },
      ],
    },
    philosophy: {
      sectionLabel: "Philosophy",
      heading: "How we think about technology",
      items: [
        {
          title: "Until the tool disappears",
          body: "The best tools make you forget they exist. Turning complex technology into simple experience is our design standard.",
        },
        {
          title: "Trustworthy AI",
          body: "AI output must be verifiable. We provide not just generation, but evidence and transparency alongside it.",
        },
        {
          title: "Small team, big leverage",
          body: "We live in an era where a few people can create massive impact. Our software is that lever.",
        },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      heading: "Let's talk",
      description:
        "Whether it's a business proposal, collaboration inquiry, or product feedback — feel free to reach out anytime.",
    },
    footer: {
      bizNumber: "Business Registration No. 871-12-02965",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)[Locale];
