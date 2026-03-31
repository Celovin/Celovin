"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/provider";

const productsMeta = [
  {
    name: "Usan",
    nameKo: "우산",
    href: "https://usan.ai",
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
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.querySelectorAll(".product-card").forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="px-6 py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs tracking-widest uppercase text-accent-dim mb-4">{t.products.sectionLabel}</p>
        <h2 className="text-fg mb-16">{t.products.heading}</h2>

        <div ref={cardsRef} className="grid gap-4 md:grid-cols-2">
          {productsMeta.map((product, i) => (
            <a
              key={product.name}
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`product-card group relative rounded-2xl border border-border p-8 md:p-10 transition-all duration-500 ease-out hover:border-[color-mix(in_oklch,var(--product-accent)_30%,var(--border))] ${
                i === 0
                  ? "md:col-span-2 bg-bg-elevated md:p-12"
                  : "bg-bg hover:bg-bg-elevated"
              }`}
              style={
                {
                  "--product-accent": product.accent,
                  opacity: 0,
                  transform: "translateY(24px)",
                } as React.CSSProperties
              }
            >
              {/* Subtle accent glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse at 30% 20%, color-mix(in oklch, ${product.accent} 8%, transparent), transparent 70%)`,
                }}
              />

              <div className="relative flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-fg-dim transition-all duration-300 group-hover:border-[color-mix(in_oklch,var(--product-accent)_25%,var(--border))] group-hover:text-[var(--product-accent)]">
                    {product.icon}
                  </span>
                  <div>
                    <h3 className={`text-fg font-medium transition-colors duration-300 group-hover:text-[var(--product-accent)] ${i === 0 ? "text-xl" : ""}`}>
                      {product.name}
                    </h3>
                    <span className="text-fg-dim text-sm">{product.nameKo}</span>
                  </div>
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide uppercase border"
                  style={{
                    background: `color-mix(in oklch, ${product.accent} 10%, transparent)`,
                    borderColor: `color-mix(in oklch, ${product.accent} 20%, transparent)`,
                    color: product.accent,
                  }}
                >
                  {product.status}
                </span>
              </div>

              <p className={`relative text-fg-muted text-sm leading-relaxed ${i === 0 ? "max-w-[54ch]" : ""}`}>
                {t.products.items[i].description}
              </p>

              <div className="relative mt-8 flex items-center gap-2 text-fg-dim text-xs transition-colors duration-300 group-hover:text-[var(--product-accent)]">
                {t.products.learnMore}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
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
