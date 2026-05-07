"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/provider";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const els = [eyebrowRef.current, headingRef.current, subtitleRef.current, cueRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      const t = window.setTimeout(() => {
        el.style.transition =
          "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 180 + i * 130);
      return () => window.clearTimeout(t);
    });
  }, []);

  const [before, accent, after] = t.hero.heading;

  return (
    <section className="relative flex min-h-svh flex-col justify-end px-6 pb-24 pt-32 overflow-hidden">
      {/* Aurora drift backdrop */}
      <div className="hero-aurora" aria-hidden="true" />

      {/* Subtle grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Brand mark — large watermark */}
      <img
        src="/mark.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[600px] opacity-[0.04] select-none"
      />

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative mx-auto w-full max-w-[1200px]">
        <p
          ref={eyebrowRef}
          className="section-eyebrow text-accent-dim mb-8"
        >
          Celovin · 2026
        </p>

        <h1
          ref={headingRef}
          className="max-w-[14ch] text-fg"
        >
          {before}
          <br />
          <span className="text-accent">{accent}</span>
          {after}
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 max-w-[44ch] text-lg text-fg-muted leading-relaxed"
        >
          {t.hero.subtitle}
        </p>

        <div ref={cueRef} className="mt-16 flex items-center gap-3">
          <div className="scroll-cue" aria-hidden="true" />
          <span className="text-fg-dim text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
