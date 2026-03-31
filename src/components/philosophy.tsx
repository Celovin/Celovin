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
        <p className="text-xs tracking-widest uppercase text-fg-dim mb-4">{t.philosophy.sectionLabel}</p>
        <h2 className="text-fg mb-20 max-w-[18ch]">
          {t.philosophy.heading}
        </h2>

        <div className="space-y-0 border-t border-border">
          {t.philosophy.items.map((p) => (
            <div
              key={p.title}
              data-animate
              className="grid gap-4 border-b border-border py-10 opacity-0 translate-y-4 md:grid-cols-[1fr_2fr] md:items-start md:gap-12"
            >
              <h3 className="text-fg font-medium">{p.title}</h3>
              <p className="text-fg-muted text-sm leading-relaxed max-w-[48ch]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
