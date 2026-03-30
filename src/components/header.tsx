"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <a href="#" className="text-fg font-medium tracking-tight text-[1.1rem]">
          Celovin
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#products"
            className="text-fg-muted text-sm py-2 px-1 transition-colors hover:text-fg"
          >
            제품
          </a>
          <a
            href="#philosophy"
            className="text-fg-muted text-sm py-2 px-1 transition-colors hover:text-fg"
          >
            철학
          </a>
          <a
            href="#contact"
            className="text-sm text-bg bg-fg rounded-full px-5 py-2.5 font-medium transition-all hover:bg-accent hover:text-bg"
          >
            연락하기
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          aria-label="메뉴 열기"
        >
          <span className={`block w-5 h-px bg-fg transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-fg transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[69px] bg-bg/95 backdrop-blur-lg transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start px-6 pt-12 gap-8">
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="text-fg text-2xl font-medium transition-colors hover:text-accent"
          >
            제품
          </a>
          <a
            href="#philosophy"
            onClick={() => setMenuOpen(false)}
            className="text-fg text-2xl font-medium transition-colors hover:text-accent"
          >
            철학
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-accent text-2xl font-medium transition-colors hover:text-fg"
          >
            연락하기
          </a>
        </div>
      </div>
    </header>
  );
}
