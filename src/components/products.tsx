"use client";

import { useEffect, useRef } from "react";

const products = [
  {
    name: "Usan",
    nameKo: "우산",
    href: "https://usan.ai",
    description: "범용 AI 빌더 + 워크스페이스. 프롬프트 하나로 문서, 앱, 웹사이트를 설계하고 생성합니다.",
    status: "Live",
    accent: "oklch(75% 0.14 250)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "TheLabForge",
    nameKo: "더랩포지",
    href: "https://thelabforge.com",
    description: "AI 생성 논문 판별 및 검증 서비스. 근거 리포트와 통계 재검산을 통합한 학술 신뢰 도구.",
    status: "Beta",
    accent: "oklch(70% 0.14 150)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6v6l3 3-3 3v6H9v-6L6 11l3-3V2z" />
        <line x1="12" y1="22" x2="12" y2="18" />
        <line x1="12" y1="6" x2="12" y2="2" />
      </svg>
    ),
  },
  {
    name: "EditorKit Pro",
    nameKo: "에디터킷 프로",
    href: "https://celovin.gumroad.com/l/editorkit-pro",
    description: "AI 에디터 SaaS 보일러플레이트. 6개 독립 모듈, 6종 AI 프로바이더, 실시간 협업, 결제까지 풀소스 제공.",
    status: "On Sale",
    accent: "oklch(72% 0.12 30)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-animate]");
            items.forEach((el, i) => {
              const htmlEl = el as HTMLElement;
              setTimeout(() => {
                htmlEl.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                htmlEl.style.opacity = "1";
                htmlEl.style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="px-6 py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs tracking-widest uppercase text-fg-dim mb-4">Products</p>
        <h2 className="text-fg mb-20">우리가 만드는 것들</h2>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {products.map((product, i) => (
            <a
              key={product.name}
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-animate
              className={`group relative p-8 md:p-10 opacity-0 translate-y-6 transition-all duration-300 hover:bg-bg-elevated hover:translate-y-0 hover:shadow-[inset_3px_0_0_var(--product-accent)] ${
                i === 0 ? "md:col-span-2 bg-bg-elevated md:p-12" : "bg-bg"
              }`}
              style={{ "--product-accent": product.accent } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-fg-dim mt-0.5 shrink-0 group-hover:text-[var(--product-accent)] transition-colors">
                    {product.icon}
                  </span>
                  <div>
                    <h3 className={`text-fg font-medium group-hover:text-[var(--product-accent)] transition-colors ${i === 0 ? "text-xl" : ""}`}>
                      {product.name}
                    </h3>
                    <span className="text-fg-dim text-sm">{product.nameKo}</span>
                  </div>
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide uppercase"
                  style={{
                    background: `color-mix(in oklch, ${product.accent} 15%, transparent)`,
                    color: product.accent,
                  }}
                >
                  {product.status}
                </span>
              </div>

              <p className={`text-fg-muted text-sm leading-relaxed ${i === 0 ? "max-w-[54ch]" : "max-w-[32ch]"}`}>
                {product.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-fg-dim text-xs group-hover:text-[var(--product-accent)] transition-colors">
                자세히 보기
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
