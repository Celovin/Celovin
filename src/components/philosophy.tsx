"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/provider";

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>("[data-reveal]");
            items.forEach((el, i) => {
              setTimeout(() => {
                el.setAttribute("data-reveal", "in");
              }, i * 130);
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
        <div data-reveal>
          <p className="section-eyebrow text-fg-dim">{t.philosophy.sectionLabel}</p>
          <h2 className="mt-4 mb-20 text-fg max-w-[18ch]">
            {t.philosophy.heading}
          </h2>
        </div>

        <div className="border-t border-border">
          {t.philosophy.items.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              className="philosophy-row group relative grid gap-4 border-b border-border py-12 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-fg-dim text-xs tabular-nums tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-fg font-medium transition-colors duration-300 group-hover:text-accent">
                  {p.title}
                </h3>
              </div>
              <p className="text-fg-muted text-[15px] leading-relaxed max-w-[52ch]">
                {p.body}
              </p>

              {/* hover edge */}
              <div className="philosophy-row-edge" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
