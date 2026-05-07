"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/provider";

const studiosMeta = [
  {
    name: "ara.studio",
    href: "https://ara.studio",
    mark: "結",
    accent: "oklch(66% 0.204 28)",
  },
];

export function Studios() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
              setTimeout(() => {
                el.setAttribute("data-reveal", "in");
              }, i * 110);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="studios" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 flex items-end justify-between gap-8" data-reveal>
          <div>
            <p className="section-eyebrow text-accent-dim">{t.studios.sectionLabel}</p>
            <h2 className="mt-4 text-fg max-w-[18ch]">{t.studios.heading}</h2>
            <p className="mt-6 text-fg-muted text-sm leading-relaxed">
              {t.studios.subhead}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-1">
          {studiosMeta.map((studio, i) => {
            const copy = t.studios.items[i];
            return (
              <a
                key={studio.name}
                href={studio.href}
                target="_blank"
                rel="noopener noreferrer"
                className="studio-card group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated"
                style={{ "--studio-accent": studio.accent } as React.CSSProperties}
                data-reveal
              >
                {/* Paper-grain overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />
                {/* Cinnabar wash */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-90"
                  style={{
                    background:
                      "radial-gradient(ellipse at 85% 15%, color-mix(in oklch, var(--studio-accent) 14%, transparent), transparent 55%)",
                  }}
                />

                <div className="relative grid gap-10 p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14 md:p-14">
                  {/* Mark column */}
                  <div className="relative flex items-center justify-center md:h-full">
                    <span className="studio-mark" aria-hidden="true">
                      {studio.mark}
                    </span>
                  </div>

                  {/* Copy column */}
                  <div>
                    <p className="text-fg-dim text-xs tracking-[0.2em] uppercase mb-3">
                      Studio · {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-fg text-2xl md:text-3xl font-medium">
                      {studio.name}
                    </h3>
                    <p
                      className="mt-4 text-[15px] leading-relaxed"
                      style={{ color: "color-mix(in oklch, var(--studio-accent) 80%, var(--fg-muted))" }}
                    >
                      {copy.tagline}
                    </p>
                    <p className="mt-6 text-fg-muted text-sm leading-relaxed max-w-[52ch]">
                      {copy.description}
                    </p>

                    <div className="mt-10 inline-flex items-center gap-2 text-fg-dim text-xs transition-colors duration-300 group-hover:text-[var(--studio-accent)]">
                      {t.studios.visit}
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
                  </div>
                </div>

                {/* Accent edge line */}
                <div
                  className="pointer-events-none absolute inset-x-10 bottom-0 h-px scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100 origin-left"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, color-mix(in oklch, var(--studio-accent) 60%, transparent), transparent)",
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
