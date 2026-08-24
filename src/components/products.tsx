"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/provider";

type ProductMeta = {
  name: string;
  nameKo: string;
  href: string;
  status: string;
  accent: string;
  span: "wide" | "half";
  icon: React.ReactNode;
};

const productsMeta: ProductMeta[] = [
  {
    name: "Usan",
    nameKo: "우산",
    href: "https://usan.ai",
    status: "Live",
    accent: "oklch(75% 0.14 250)",
    span: "wide",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "EditorKit Pro",
    nameKo: "에디터킷 프로",
    href: "https://celovin.gumroad.com/l/editorkit-pro",
    status: "On Sale",
    accent: "oklch(72% 0.12 30)",
    span: "wide",
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
            cards.querySelectorAll<HTMLElement>(".product-card").forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 90);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    // Cursor-tracking glow per card
    const cleanups: Array<() => void> = [];
    cards.querySelectorAll<HTMLElement>(".product-card").forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--gx", `${x}%`);
        card.style.setProperty("--gy", `${y}%`);
      };
      card.addEventListener("mousemove", onMove);
      cleanups.push(() => card.removeEventListener("mousemove", onMove));
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="section-eyebrow text-accent-dim">{t.products.sectionLabel}</p>
            <h2 className="mt-4 text-fg">{t.products.heading}</h2>
          </div>
          <div className="hidden md:block text-fg-dim text-xs tracking-wide">
            <span className="tabular-nums">05</span> · 2026
          </div>
        </div>

        <div ref={cardsRef} className="grid gap-4 md:grid-cols-2 md:gap-5">
          {productsMeta.map((product, i) => (
            <a
              key={product.name}
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`product-card group relative overflow-hidden rounded-2xl border border-border p-8 md:p-10 ${
                product.span === "wide"
                  ? "md:col-span-2 bg-bg-elevated md:p-12"
                  : "bg-bg"
              }`}
              style={
                {
                  "--product-accent": product.accent,
                  "--gx": "50%",
                  "--gy": "0%",
                  opacity: 0,
                  transform: "translateY(24px)",
                } as React.CSSProperties
              }
            >
              {/* Cursor-tracked accent glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--gx) var(--gy), color-mix(in oklch, var(--product-accent) 14%, transparent), transparent 60%)",
                }}
              />
              {/* Soft static glow for the wide hero card so it feels alive at rest */}
              {product.span === "wide" && (
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      "radial-gradient(ellipse at 18% 8%, color-mix(in oklch, var(--product-accent) 10%, transparent), transparent 55%)",
                  }}
                />
              )}

              <div className="relative flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <span
                    className="card-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-fg-dim transition-all duration-300 group-hover:border-[color-mix(in_oklch,var(--product-accent)_30%,var(--border))] group-hover:text-[var(--product-accent)] group-hover:bg-[color-mix(in_oklch,var(--product-accent)_6%,transparent)]"
                  >
                    {product.icon}
                  </span>
                  <div>
                    <h3
                      className={`text-fg font-medium transition-colors duration-300 group-hover:text-[var(--product-accent)] ${
                        product.span === "wide" ? "text-xl" : ""
                      }`}
                    >
                      {product.name}
                    </h3>
                    <span className="text-fg-dim text-sm">{product.nameKo}</span>
                  </div>
                </div>
                <span
                  className="status-pill"
                  style={{
                    background: `color-mix(in oklch, ${product.accent} 10%, transparent)`,
                    borderColor: `color-mix(in oklch, ${product.accent} 22%, transparent)`,
                    color: product.accent,
                  }}
                >
                  {product.status === "Live" && <span className="status-dot" />}
                  {product.status}
                </span>
              </div>

              <p
                className={`relative text-fg-muted text-sm leading-relaxed ${
                  product.span === "wide" ? "max-w-[58ch]" : ""
                }`}
              >
                {t.products.items[i].description}
              </p>

              <div className="relative mt-8 flex items-center gap-2 text-fg-dim text-xs transition-colors duration-300 group-hover:text-[var(--product-accent)]">
                {t.products.learnMore}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 7h11M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Bottom edge accent line — fades in on hover */}
              <div
                className="pointer-events-none absolute inset-x-8 bottom-0 h-px scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left"
                style={{
                  background:
                    "linear-gradient(to right, transparent, color-mix(in oklch, var(--product-accent) 60%, transparent), transparent)",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
