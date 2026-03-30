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
  },
  {
    name: "TheLabForge",
    nameKo: "더랩포지",
    href: "https://thelabforge.com",
    description: "AI 생성 논문 판별 및 검증 서비스. 근거 리포트와 통계 재검산을 통합한 학술 신뢰 도구.",
    status: "Beta",
    accent: "oklch(70% 0.14 150)",
  },
  {
    name: "EditorKit Pro",
    nameKo: "에디터킷 프로",
    href: "https://celovin.gumroad.com/l/editorkit-pro",
    description: "AI 에디터 SaaS 보일러플레이트. 6개 독립 모듈, 6종 AI 프로바이더, 실시간 협업, 결제까지 풀소스 제공.",
    status: "On Sale",
    accent: "oklch(72% 0.12 30)",
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
        <h2 className="text-fg font-medium mb-20">우리가 만드는 것들</h2>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-animate
              className="group relative bg-bg p-8 md:p-10 opacity-0 translate-y-6 transition-colors hover:bg-bg-elevated"
              style={{ "--product-accent": product.accent } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-fg font-medium group-hover:text-[var(--product-accent)] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-fg-dim text-sm">{product.nameKo}</span>
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

              <p className="text-fg-muted text-sm leading-relaxed max-w-[32ch]">
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
