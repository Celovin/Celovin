"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Celovin" className="h-8 w-auto" />
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#products"
            className="text-fg-muted text-sm transition-colors hover:text-fg"
          >
            제품
          </a>
          <a
            href="#philosophy"
            className="text-fg-muted text-sm transition-colors hover:text-fg"
          >
            철학
          </a>
          <a
            href="#contact"
            className="text-sm text-bg bg-fg rounded-full px-5 py-2 font-medium transition-all hover:bg-accent hover:text-bg"
          >
            연락하기
          </a>
        </div>
      </nav>
    </header>
  );
}
