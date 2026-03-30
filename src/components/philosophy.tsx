"use client";

import { useEffect, useRef } from "react";

const principles = [
  {
    number: "01",
    title: "도구가 사라질 때까지",
    body: "최고의 도구는 그 존재를 잊게 만듭니다. 복잡한 기술을 단순한 경험으로 전환하는 것이 우리의 설계 기준입니다.",
  },
  {
    number: "02",
    title: "신뢰할 수 있는 AI",
    body: "AI의 출력은 검증 가능해야 합니다. 생성뿐 아니라 근거와 투명성을 함께 제공합니다.",
  },
  {
    number: "03",
    title: "작은 팀, 큰 레버리지",
    body: "소수의 사람이 거대한 영향을 만들 수 있는 시대입니다. 우리의 소프트웨어가 그 지렛대가 됩니다.",
  },
];

export function Philosophy() {
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
              }, i * 150);
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
    <section id="philosophy" ref={sectionRef} className="px-6 py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs tracking-widest uppercase text-fg-dim mb-4">Philosophy</p>
        <h2 className="text-fg font-medium mb-20 max-w-[18ch]">
          기술에 대한 우리의 생각
        </h2>

        <div className="space-y-0 border-t border-border">
          {principles.map((p) => (
            <div
              key={p.number}
              data-animate
              className="grid gap-4 border-b border-border py-10 opacity-0 translate-y-4 md:grid-cols-[4rem_1fr_2fr] md:items-start md:gap-12"
            >
              <span className="text-accent font-mono text-sm">{p.number}</span>
              <h3 className="text-fg font-medium">{p.title}</h3>
              <p className="text-fg-muted text-sm leading-relaxed max-w-[48ch]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
