"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subtitleRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative flex min-h-svh flex-col justify-end px-6 pb-24 pt-32 overflow-hidden">
      {/* Subtle grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
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

      <div className="mx-auto w-full max-w-[1200px]">
        <h1
          ref={headingRef}
          className="max-w-[14ch] font-medium text-fg"
        >
          사람의 가능성을
          <br />
          <span className="text-accent">확장</span>하는 기술
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 max-w-[42ch] text-lg text-fg-muted leading-relaxed"
        >
          셀로빈은 AI 기술을 통해 창작, 검증, 생산성의 경계를 넓히는
          소프트웨어를 만듭니다.
        </p>

        <div className="mt-16 flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-fg-dim animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
